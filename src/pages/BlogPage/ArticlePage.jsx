import { useEffect, useState, useMemo } from "react";
import { Link, Navigate, useLocation, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Check,
  CheckCircle2,
  Clock,
  HelpCircle,
  Lightbulb,
  ListOrdered,
  Share2,
  Sparkles,
} from "lucide-react";

import Container from "../../components/ui/Container";
import Button from "../../components/ui/Button";
import Badge from "../../components/ui/Badge";
import Reveal from "../../components/ui/Reveal";

import { blogArticles, featuredArticlesList } from "./blogArticles";
import ArticleVisual from "./ArticleVisual";
import AboutScaalablePage from "./AboutScaalablePage";

import { applyPageSeo } from "../../lib/pageMeta";
import { absoluteUrl } from "../../lib/site";
import { breadcrumbs, webPage } from "../../lib/structuredData";

import "./ArticlePage.css";

/* Calculate authentic reading time from actual article text */
const calculateReadTime = (art) => {
  if (!art) return 3;
  let words = (art.intro || "").split(/\s+/).length;
  if (art.sections) {
    art.sections.forEach(([h, b]) => {
      words += (h || "").split(/\s+/).length + (b || "").split(/\s+/).length;
    });
  }
  if (art.faqs) {
    art.faqs.forEach(([q, a]) => {
      words += (q || "").split(/\s+/).length + (a || "").split(/\s+/).length;
    });
  }
  return Math.max(2, Math.ceil(words / 175));
};

const ArticlePage = () => {
  const { slug } = useParams();
  const location = useLocation();

  // Resolve target article (fallback gracefully for legacy routes)
  const resolvedSlug = useMemo(() => {
    if (slug && blogArticles[slug]) return slug;
    if (location.pathname.includes("future-proofing-your-brain")) {
      return "ai-automation-solutions";
    }
    return slug;
  }, [slug, location.pathname]);

  const article = blogArticles[resolvedSlug];

  // State management
  const [readingProgress, setReadingProgress] = useState(0);
  const [activeSectionId, setActiveSectionId] = useState("section-0");
  const [copiedLink, setCopiedLink] = useState(false);
  const [isTocOpen, setIsTocOpen] = useState(false);

  // SEO metadata application
  useEffect(() => {
    if (!article) return;
    const path = `/blog/${resolvedSlug}`;
    applyPageSeo({
      meta: {
        title: `${article.title} | Scaalable Insights`,
        description: article.intro,
        canonical: absoluteUrl(path),
      },
      jsonLd: [
        webPage({
          path,
          title: article.title,
          description: article.intro,
          type: "Article",
        }),
        breadcrumbs([
          { name: "Blog", path: "/blog" },
          { name: article.category, path },
        ]),
      ],
    });
  }, [article, resolvedSlug]);

  // Reading progress tracker
  useEffect(() => {
    const handleScroll = () => {
      const articleEl = document.getElementById("article-main-body");
      if (!articleEl) return;

      const rect = articleEl.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const totalDist = rect.height;
      const currentDist = viewportHeight - rect.top;

      const progress = Math.min(100, Math.max(0, (currentDist / totalDist) * 100));
      setReadingProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Table of contents active section observer
  useEffect(() => {
    if (!article?.sections) return;

    const sectionIds = article.sections.map((_, i) => `section-${i}`);
    if (article.faqs?.length > 0) {
      sectionIds.push("section-faqs");
    }

    const observedElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (observedElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries.filter((e) => e.isIntersecting);
        if (intersecting.length > 0) {
          intersecting.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
          setActiveSectionId(intersecting[0].target.id);
        }
      },
      { rootMargin: "-100px 0px -60% 0px", threshold: 0 }
    );

    observedElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [article]);

  // Copy link handler
  const handleCopyLink = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2400);
    }
  };

  // Scroll to top
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveSectionId("section-0");
  };

  // If the user visited About Scaalable via blog route, render the dedicated experience
  if (slug === "about-scaalable") {
    return <AboutScaalablePage />;
  }

  // If article not found in dictionary, redirect to blog home
  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  const readTime = calculateReadTime(article);

  // Compute Previous and Next articles for navigation
  const currentIndex = featuredArticlesList.findIndex((item) => item.id === resolvedSlug);
  const prevArticle =
    currentIndex > 0
      ? featuredArticlesList[currentIndex - 1]
      : featuredArticlesList[featuredArticlesList.length - 1];
  const nextArticle =
    currentIndex !== -1 && currentIndex < featuredArticlesList.length - 1
      ? featuredArticlesList[currentIndex + 1]
      : featuredArticlesList[0];

  // Related articles (excluding current article)
  const relatedArticles = featuredArticlesList
    .filter((item) => item.id !== resolvedSlug)
    .slice(0, 3);

  return (
    <div className="art-page">
      {/* 1. Reading Progress Bar */}
      <div
        className="art-progress-bar"
        style={{ width: `${readingProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(readingProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Reading progress"
      />

      {/* 2. Hero Section */}
      <header className="art-hero" aria-labelledby="art-title">
        <div className="art-hero__ambient" aria-hidden="true" />
        <Container>
          {/* Breadcrumb Navigation */}
          <nav className="art-breadcrumb" aria-label="Breadcrumb">
            <ol>
              <li>
                <Link to="/blog" className="art-breadcrumb__link">
                  Blog
                </Link>
              </li>
              <li aria-hidden="true" className="art-breadcrumb__sep">/</li>
              <li>
                <Link to="/blog#featured-articles" className="art-breadcrumb__link">
                  Featured Articles
                </Link>
              </li>
              <li aria-hidden="true" className="art-breadcrumb__sep">/</li>
              <li aria-current="page" className="art-breadcrumb__current">
                {article.category}
              </li>
            </ol>
          </nav>

          <div className="art-hero__grid">
            {/* Left Content Column */}
            <div className="art-hero__content">
              <Reveal amount={0}>
                <div className="art-hero__category-row">
                  <Badge variant="primary" className="art-hero__badge">
                    {article.category}
                  </Badge>
                  <span className="art-hero__meta-pill">
                    <Clock size={13} aria-hidden="true" />
                    <span>{readTime} min read</span>
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.06} amount={0}>
                <h1 id="art-title" className="art-hero__title">
                  {article.title}
                </h1>
              </Reveal>

              <Reveal delay={0.12} amount={0}>
                <p className="art-hero__intro">
                  {article.intro}
                </p>
              </Reveal>

              <Reveal delay={0.18} amount={0}>
                <div className="art-hero__byline">
                  <div className="art-hero__author-chip">
                    <span className="art-hero__author-avatar" aria-hidden="true">
                      <Sparkles size={14} />
                    </span>
                    <div className="art-hero__author-info">
                      <span className="art-hero__author-name">Scaalable Technology Editorial</span>
                      <span className="art-hero__author-role">Engineering, AI &amp; Digital Growth</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyLink}
                    className="art-share-btn"
                    aria-label="Share article link"
                  >
                    {copiedLink ? (
                      <>
                        <Check size={14} className="art-share-btn__icon art-share-btn__icon--check" />
                        <span>Link Copied</span>
                      </>
                    ) : (
                      <>
                        <Share2 size={14} className="art-share-btn__icon" />
                        <span>Share</span>
                      </>
                    )}
                  </button>
                </div>
              </Reveal>
            </div>

            {/* Right Topic Visual Graphic */}
            <Reveal delay={0.14} amount={0} className="art-hero__visual-wrap">
              <div className="art-hero__frame">
                <div className="art-hero__visual-ambient" aria-hidden="true" />
                <ArticleVisual categorySlug={article.categorySlug} className="art-hero__visual" />
              </div>
            </Reveal>
          </div>
        </Container>
      </header>

      {/* 3. Main Reading Area (2-Column Grid: Sticky TOC + Article Body) */}
      <div className="art-body-wrap" id="article-main-body">
        <Container>
          <div className="art-layout-grid">
            {/* Sidebar / Sticky Table of Contents */}
            <aside className="art-sidebar" aria-label="Table of contents">
              <div className="art-toc">
                <div className="art-toc__header">
                  <div className="art-toc__title-wrap">
                    <ListOrdered size={16} className="art-toc__icon" aria-hidden="true" />
                    <span className="art-toc__title">In this article</span>
                  </div>
                  {/* Mobile toggle button */}
                  <button
                    type="button"
                    className="art-toc__mobile-toggle"
                    onClick={() => setIsTocOpen(!isTocOpen)}
                    aria-expanded={isTocOpen}
                    aria-controls="art-toc-nav"
                  >
                    {isTocOpen ? "Collapse" : "Expand"}
                  </button>
                </div>

                <nav
                  id="art-toc-nav"
                  className={`art-toc__nav ${isTocOpen ? "art-toc__nav--open" : ""}`}
                  aria-label="Article outline"
                >
                  <ol className="art-toc__list">
                    {article.sections.map(([heading], index) => {
                      const isActive = activeSectionId === `section-${index}`;
                      return (
                        <li key={heading} className="art-toc__item">
                          <a
                            href={`#section-${index}`}
                            className={`art-toc__link ${isActive ? "art-toc__link--active" : ""}`}
                            onClick={(e) => {
                              e.preventDefault();
                              const target = document.getElementById(`section-${index}`);
                              if (target) {
                                target.scrollIntoView({ behavior: "smooth", block: "start" });
                                setActiveSectionId(`section-${index}`);
                                setIsTocOpen(false);
                              }
                            }}
                          >
                            <span className="art-toc__number">{index + 1}</span>
                            <span className="art-toc__text">{heading}</span>
                          </a>
                        </li>
                      );
                    })}

                    {article.faqs?.length > 0 && (
                      <li className="art-toc__item">
                        <a
                          href="#section-faqs"
                          className={`art-toc__link ${activeSectionId === "section-faqs" ? "art-toc__link--active" : ""}`}
                          onClick={(e) => {
                            e.preventDefault();
                            const target = document.getElementById("section-faqs");
                            if (target) {
                              target.scrollIntoView({ behavior: "smooth", block: "start" });
                              setActiveSectionId("section-faqs");
                              setIsTocOpen(false);
                            }
                          }}
                        >
                          <span className="art-toc__number">?</span>
                          <span className="art-toc__text">Frequently Asked Questions</span>
                        </a>
                      </li>
                    )}
                  </ol>
                </nav>

                <div className="art-toc__footer">
                  <button
                    type="button"
                    className="art-toc__top-btn"
                    onClick={handleScrollToTop}
                  >
                    <ArrowUp size={14} aria-hidden="true" />
                    <span>Back to Top</span>
                  </button>

                  <Link to="/blog#featured-articles" className="art-toc__back-link">
                    ← All Articles
                  </Link>
                </div>
              </div>
            </aside>

            {/* Main Article Content */}
            <article className="art-content" id="article-main-content">
              {/* Introduction Callout Card */}
              <div className="art-lead-callout">
                <div className="art-lead-callout__icon-box" aria-hidden="true">
                  <Lightbulb size={20} />
                </div>
                <div className="art-lead-callout__body">
                  <span className="art-lead-callout__title">Executive Summary</span>
                  <p className="art-lead-callout__text">{article.intro}</p>
                </div>
              </div>

              {/* Numbered Sections */}
              <div className="art-sections-list">
                {article.sections.map(([heading, body], index) => (
                  <section
                    key={heading}
                    id={`section-${index}`}
                    className="art-section"
                    aria-labelledby={`heading-${index}`}
                  >
                    <div className="art-section__header">
                      <span className="art-section__num">0{index + 1}</span>
                      <h2 id={`heading-${index}`} className="art-section__title">
                        {heading}
                      </h2>
                    </div>

                    <div className="art-section__body">
                      <p>{body}</p>
                    </div>

                    {/* Styled Key Insight Card for important context */}
                    <div className="art-insight-box">
                      <div className="art-insight-box__tag">
                        <Sparkles size={13} aria-hidden="true" />
                        <span>Core Takeaway</span>
                      </div>
                      <p className="art-insight-box__text">
                        Connecting {article.category} decisions directly with customer experience and business goals delivers predictable, scalable returns.
                      </p>
                    </div>
                  </section>
                ))}
              </div>
            </article>
          </div>

          {/* Post-Article Reading Sections (FAQ Boundary & Nav) */}
          <div className="art-post-sections">
            {/* FAQs Section (if present) */}
            {article.faqs?.length > 0 && (
              <section
                id="section-faqs"
                className="art-faqs-section"
                aria-labelledby="faqs-heading"
              >
                <div className="art-faqs-header">
                  <div className="art-faqs-header__pill">
                    <HelpCircle size={14} aria-hidden="true" />
                    <span>Got Questions?</span>
                  </div>
                  <h2 id="faqs-heading" className="art-faqs-header__title">
                    Frequently Asked Questions
                  </h2>
                </div>

                <div className="art-faqs-list">
                  {article.faqs.map(([q, a]) => (
                    <div key={q} className="art-faq-card">
                      <h3 className="art-faq-card__question">
                        <CheckCircle2 size={18} className="art-faq-card__icon" aria-hidden="true" />
                        <span>{q}</span>
                      </h3>
                      <p className="art-faq-card__answer">{a}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Prev / Next Article Navigation Bar */}
            <nav className="art-prev-next-nav" aria-label="Previous and next articles">
              {prevArticle && (
                <Link
                  to={prevArticle.href}
                  className="art-prev-next-card art-prev-next-card--prev"
                  aria-label={`Previous article: ${prevArticle.title}`}
                >
                  <span className="art-prev-next-card__direction">
                    <ArrowLeft size={14} aria-hidden="true" /> Previous Article
                  </span>
                  <span className="art-prev-next-card__category">{prevArticle.category}</span>
                  <h4 className="art-prev-next-card__title">{prevArticle.title}</h4>
                </Link>
              )}

              {nextArticle && (
                <Link
                  to={nextArticle.href}
                  className="art-prev-next-card art-prev-next-card--next"
                  aria-label={`Next article: ${nextArticle.title}`}
                >
                  <span className="art-prev-next-card__direction">
                    Next Article <ArrowRight size={14} aria-hidden="true" />
                  </span>
                  <span className="art-prev-next-card__category">{nextArticle.category}</span>
                  <h4 className="art-prev-next-card__title">{nextArticle.title}</h4>
                </Link>
              )}
            </nav>
          </div>
        </Container>
      </div>

      {/* 4. Related Articles Section */}
      <section className="art-related-section" aria-labelledby="related-heading">
        <Container>
          <div className="art-related-header">
            <Reveal amount={0}>
              <Badge variant="primary">Continue Reading</Badge>
            </Reveal>
            <Reveal delay={0.06} amount={0}>
              <h2 id="related-heading" className="art-related-header__title">
                Related Articles &amp; Insights
              </h2>
            </Reveal>
            <Reveal delay={0.12} amount={0}>
              <p className="art-related-header__subtitle">
                Explore more guides on technology, software engineering, and strategic business growth.
              </p>
            </Reveal>
          </div>

          <div className="art-related-grid">
            {relatedArticles.map((rel, idx) => (
              <Reveal key={rel.id} delay={idx * 0.08} amount={0.15}>
                <article className="art-related-card">
                  <Link to={rel.href} className="art-related-card__link">
                    <div className="art-related-card__media">
                      <ArticleVisual categorySlug={rel.categorySlug} />
                    </div>
                    <div className="art-related-card__body">
                      <span className={`art-related-card__tag art-related-card__tag--${rel.categorySlug}`}>
                        {rel.category}
                      </span>
                      <h3 className="art-related-card__title">{rel.title}</h3>
                      <p className="art-related-card__desc">{rel.description}</p>
                      <div className="art-related-card__footer">
                        <span>Read Guide</span>
                        <ArrowRight size={14} aria-hidden="true" />
                      </div>
                    </div>
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Closing CTA Section */}
      <section className="art-cta-section" aria-labelledby="art-cta-title">
        <Container>
          <div className="art-cta-card">
            <div className="art-cta-card__ambient" aria-hidden="true" />
            <div className="art-cta-card__content">
              <Reveal amount={0}>
                <span className="art-cta-card__badge">
                  <Sparkles size={13} aria-hidden="true" />
                  <span>Let&apos;s Build Together</span>
                </span>
              </Reveal>

              <Reveal delay={0.06} amount={0}>
                <h2 id="art-cta-title" className="art-cta-card__title">
                  Looking to Implement Practical Tech for Your Business?
                </h2>
              </Reveal>

              <Reveal delay={0.12} amount={0}>
                <p className="art-cta-card__description">
                  Whether you need custom software engineering, modern web applications, AI automation, or high-intent SEO, Scaalable is your dependable technical partner.
                </p>
              </Reveal>

              <Reveal delay={0.18} amount={0}>
                <div className="art-cta-card__buttons">
                  <Button
                    as={Link}
                    to="/contact#contact-form"
                    size="lg"
                    endIcon={<ArrowRight size={18} aria-hidden="true" />}
                  >
                    Start a Conversation
                  </Button>
                  <Button
                    as={Link}
                    to="/services"
                    variant="outline"
                    size="lg"
                  >
                    Explore Our Services
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ArticlePage;
