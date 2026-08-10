import { useRef, useState, useSyncExternalStore } from "react";
import { ArrowRight } from "lucide-react";

import "./Capabilities.css";

import Container from "../../components/ui/Container";
import SectionHeading from "../../components/ui/SectionHeading";

import { capabilities, capabilitiesIntro } from "./servicesData";

/* Chips animate in sequence; the cap keeps the longest list from crawling. */
const STAGGER_CAP = 12;

/* Matches the CSS breakpoint where the two-column layout collapses. */
const COMPACT_QUERY = "(max-width: 992px)";

/* One MediaQueryList for the module — creating it per render would allocate a
   new object on every snapshot read. */
let mediaQuery;
const getMediaQuery = () => {
  if (!mediaQuery) mediaQuery = window.matchMedia(COMPACT_QUERY);
  return mediaQuery;
};

const subscribeToBreakpoint = (onChange) => {
  const mq = getMediaQuery();
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
};

const getBreakpointSnapshot = () => getMediaQuery().matches;

/* The prerender runs this in Node, where matchMedia does not exist. False
   prerenders the desktop tab layout, which is the one whose markup carries
   every capability's copy — the accordion renders only the open row, so
   prerendering that variant would hide six of the seven from a crawler that
   does not run the app. */
const getServerBreakpointSnapshot = () => false;

/* Below the breakpoint the pattern changes from tabs to an accordion, so the
   panel has to render inside the list rather than beside it. useSyncExternalStore
   is the right primitive here: it subscribes without setting state in an effect,
   and reads the live value on every render. */
const useIsCompact = () =>
  useSyncExternalStore(
    subscribeToBreakpoint,
    getBreakpointSnapshot,
    getServerBreakpointSnapshot,
  );

/* Shared body — rendered in the right-hand column on desktop and inside the
   expanded row on mobile, so the markup exists in exactly one place. */
const CapabilityBody = ({ item }) => (
  <>
    <div className="cap__panel-head">
      <span className="cap__eyebrow">{item.eyebrow}</span>

      <span className="cap__mark" aria-hidden="true">
        <item.icon size={18} strokeWidth={1.9} />
      </span>
    </div>

    <h3 className="cap__title">{item.title}</h3>

    <p className="cap__subtitle">{item.subtitle}</p>

    <p className="cap__description">{item.description}</p>

    <div className="cap__group">
      <h4 className="cap__group-label">Services Included</h4>

      <ul className="cap__services">
        {item.services.map((service, i) => (
          <li
            className="cap__service"
            key={service}
            style={{ "--i": Math.min(i, STAGGER_CAP) }}
          >
            {service}
          </li>
        ))}
      </ul>
    </div>

    <div className="cap__group">
      <h4 className="cap__group-label">{item.metaLabel}</h4>

      <ul className="cap__meta">
        {item.meta.map((tag, i) => (
          <li
            className="cap__chip"
            key={tag}
            style={{ "--i": Math.min(i, STAGGER_CAP) }}
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  </>
);

const Capabilities = () => {
  /* Starts closed: on mobile nothing is expanded until the user picks a row. */
  const [activeId, setActiveId] = useState(null);
  const tabRefs = useRef([]);
  const isCompact = useIsCompact();

  /* A tablist must always have one tab selected, so desktop falls back to the
     first entry. The accordion has no such rule and stays fully collapsed. */
  const selectedId = isCompact ? activeId : (activeId ?? capabilities[0].id);

  const foundIndex = capabilities.findIndex((c) => c.id === selectedId);
  const activeIndex = foundIndex === -1 ? 0 : foundIndex;
  const active = capabilities[activeIndex];

  /* Mobile toggles closed; desktop always keeps one selected. */
  const select = (id) => () =>
    setActiveId((prev) => (isCompact && prev === id ? null : id));

  /* Arrow keys move focus and selection together — expected for a tablist.
     Not applied in accordion mode, where each button is an ordinary control. */
  const handleKeyDown = (event) => {
    if (isCompact) return;

    const last = capabilities.length - 1;
    let next = null;

    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      next = activeIndex === last ? 0 : activeIndex + 1;
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      next = activeIndex === 0 ? last : activeIndex - 1;
    } else if (event.key === "Home") {
      next = 0;
    } else if (event.key === "End") {
      next = last;
    }

    if (next === null) return;

    event.preventDefault();
    setActiveId(capabilities[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <section className="cap section-wash--out" id="capabilities" aria-label="Capabilities">
      <Container>
        <SectionHeading
          className="cap__heading"
          badge={capabilitiesIntro.badge}
          title={capabilitiesIntro.title}
          description={capabilitiesIntro.description}
          /* Wider than the 720px default: at display size that ceiling puts
             barely twenty characters on a line. The description keeps its own
             narrower measure, so only the title takes the extra room. */
          maxWidth="940px"
        />

        <div className="cap__layout" data-mode={isCompact ? "stack" : "split"}>
          {/* ------------------------ Directory ------------------------ */}
          <div className="cap__directory">
            <div className="cap__directory-head">
              <span className="cap__directory-label">Service Directory</span>

              {/* Dash rather than "01" when nothing is open, so the counter
                  never implies a row is expanded when none is. */}
              <span className="cap__directory-count">
                {selectedId ? active.index : "--"} <i>/</i>{" "}
                {capabilities.length.toString().padStart(2, "0")}
              </span>
            </div>

            <div
              className="cap__list"
              role={isCompact ? undefined : "tablist"}
              aria-label={isCompact ? undefined : "Service capabilities"}
              aria-orientation={isCompact ? undefined : "vertical"}
              onKeyDown={handleKeyDown}
            >
              {capabilities.map((item, i) => {
                const ItemIcon = item.icon;
                const open = item.id === selectedId;

                return (
                  <div className="cap__item" key={item.id}>
                    <button
                      type="button"
                      ref={(el) => (tabRefs.current[i] = el)}
                      className="cap__tab"
                      id={`cap-tab-${item.id}`}
                      /* Tabs on desktop, disclosure buttons on mobile. */
                      role={isCompact ? undefined : "tab"}
                      aria-selected={isCompact ? undefined : open}
                      aria-expanded={isCompact ? open : undefined}
                      aria-controls={`cap-panel-${item.id}`}
                      tabIndex={isCompact || open ? 0 : -1}
                      data-open={open}
                      onClick={select(item.id)}
                    >
                      <span className="cap__tab-index">{item.index}</span>

                      <span className="cap__tab-icon">
                        <ItemIcon
                          size={16}
                          strokeWidth={1.9}
                          aria-hidden="true"
                        />
                      </span>

                      <span className="cap__tab-name">{item.name}</span>

                      <ArrowRight
                        className="cap__tab-arrow"
                        size={15}
                        strokeWidth={2.1}
                        aria-hidden="true"
                      />
                    </button>

                    {/* Accordion body. Rendered only in compact mode so the
                        desktop tree stays exactly as it was. */}
                    {isCompact && (
                      <div
                        className="cap__collapse"
                        id={`cap-panel-${item.id}`}
                        role="region"
                        aria-labelledby={`cap-tab-${item.id}`}
                        data-open={open}
                      >
                        <div className="cap__collapse-inner">
                          <div className="cap__collapse-body">
                            <CapabilityBody item={item} />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* ------------------------ Detail (desktop) ------------------------ */}
          {!isCompact && (
            <div
              className="cap__detail"
              role="tabpanel"
              id={`cap-panel-${active.id}`}
              aria-labelledby={`cap-tab-${active.id}`}
              tabIndex={0}
            >
              {/* Keyed so React remounts it and the entry animation replays. */}
              <div className="cap__panel" key={active.id}>
                <CapabilityBody item={active} />
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Capabilities;
