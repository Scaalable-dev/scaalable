import { useState, useMemo } from "react";
import { Search, FolderX } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import JobCard from "./JobCard";
import { JOBS, JOB_CATEGORIES } from "../../data/jobs";
import "./JobOpeningsSection.css";

const JobOpeningsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Roles");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredJobs = useMemo(() => {
    return JOBS.filter((job) => {
      const matchesCategory =
        selectedCategory === "All Roles" || job.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        job.title.toLowerCase().includes(q) ||
        job.summary.toLowerCase().includes(q) ||
        job.category.toLowerCase().includes(q) ||
        job.skills.some((skill) => skill.toLowerCase().includes(q));

      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  // Counts per category
  const categoryCounts = useMemo(() => {
    const counts = { "All Roles": JOBS.length };
    JOB_CATEGORIES.forEach((cat) => {
      if (cat !== "All Roles") {
        counts[cat] = JOBS.filter((j) => j.category === cat).length;
      }
    });
    return counts;
  }, []);

  return (
    <section className="job-openings" id="openings" aria-labelledby="openings-heading">
      <Container>
        <SectionHeading
          badge="Current Openings"
          title="Hiring Ongoing for Posts"
          description="Explore our current remote opportunities and find a role that matches your interests."
          className="job-openings__heading"
        />

        {/* Filter and Search Bar */}
        <div className="job-openings__controls">
          <div className="job-openings__tabs" role="tablist" aria-label="Job category filters">
            {JOB_CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  className={`job-openings__tab ${isSelected ? "job-openings__tab--active" : ""}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  <span className="job-openings__tab-label">{category}</span>
                  <span className="job-openings__tab-count">
                    {categoryCounts[category] ?? 0}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="job-openings__search-wrapper">
            <Search className="job-openings__search-icon" size={17} aria-hidden="true" />
            <input
              type="text"
              className="job-openings__search-input"
              placeholder="Search by role or skill (e.g. AI, SEO, Figma)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Filter jobs by title or skill"
            />
            {searchQuery && (
              <button
                type="button"
                className="job-openings__search-clear"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search query"
              >
                &times;
              </button>
            )}
          </div>
        </div>

        {/* Results summary */}
        <div className="job-openings__status-row">
          <span className="job-openings__count-text">
            Showing <strong>{filteredJobs.length}</strong> of {JOBS.length} remote positions
          </span>
          <span className="job-openings__conditions-tag">
            All roles are 100% Remote
          </span>
        </div>

        {/* Job Cards Grid */}
        {filteredJobs.length > 0 ? (
          <div className="job-openings__grid">
            {filteredJobs.map((job, index) => (
              <Reveal key={job.id} delay={index * 0.05} amount={0.15}>
                <JobCard job={job} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="job-openings__empty">
            <div className="job-openings__empty-icon">
              <FolderX size={44} strokeWidth={1.5} />
            </div>
            <h3 className="job-openings__empty-title">No matching roles found</h3>
            <p className="job-openings__empty-text">
              We couldn&rsquo;t find any open position matching &ldquo;{searchQuery}&rdquo; in {selectedCategory}.
            </p>
            <button
              type="button"
              className="btn btn--outline btn--sm"
              onClick={() => {
                setSelectedCategory("All Roles");
                setSearchQuery("");
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default JobOpeningsSection;
