import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Globe,
  Info,
  Send,
  Sparkles,
} from "lucide-react";

import Container from "../../components/ui/Container";
import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";
import JobCard from "../../components/careers/JobCard";
import ApplicationForm from "../../components/careers/ApplicationForm";
import {
  getJobBySlug,
  getRelatedJobs,
  jobDetailSeo,
} from "../../data/jobs";
import { getApplicationGmailUrl } from "../../utils/applicationEmail";
import { applyPageSeo } from "../../lib/pageMeta";
import "./JobDetailPage.css";

const JobDetailPage = () => {
  const { slug } = useParams();
  const job = getJobBySlug(slug);

  useEffect(() => {
    applyPageSeo(jobDetailSeo(job));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug, job]);

  if (!job) {
    return (
      <section className="job-not-found" aria-labelledby="job-not-found-title">
        <Container>
          <div className="job-not-found__card">
            <Badge variant="secondary">Careers</Badge>
            <h1 id="job-not-found-title" className="job-not-found__title">
              Role Not Found
            </h1>
            <p className="job-not-found__desc">
              We couldn&rsquo;t find an opening matching &ldquo;{slug}&rdquo;. It may have been filled or the link may be outdated.
            </p>
            <Button
              as={Link}
              to="/careers"
              variant="primary"
              size="lg"
              startIcon={<ArrowLeft size={18} />}
            >
              Back to All Openings
            </Button>
          </div>
        </Container>
      </section>
    );
  }

  const relatedJobs = getRelatedJobs(job.slug, job.category, 2);

  return (
    <article className="job-detail" aria-labelledby="job-title">
      {/* ================= 1. Top Bar / Breadcrumb ================= */}
      <div className="job-detail__banner hero-wash hero-wash--tint">
        <Container>
          <nav className="job-detail__breadcrumbs" aria-label="Breadcrumb">
            <Link to="/" className="job-detail__breadcrumb-link">
              Home
            </Link>
            <ChevronRight size={14} className="job-detail__breadcrumb-sep" aria-hidden="true" />
            <Link to="/careers" className="job-detail__breadcrumb-link">
              Careers
            </Link>
            <ChevronRight size={14} className="job-detail__breadcrumb-sep" aria-hidden="true" />
            <span className="job-detail__breadcrumb-current" aria-current="page">
              {job.title}
            </span>
          </nav>

          <div className="job-detail__header-content">
            <div className="job-detail__meta-chips">
              <span className="job-detail__category-chip">{job.category}</span>
              <span className="job-detail__badge job-detail__badge--remote">
                <Globe size={13} strokeWidth={2.4} aria-hidden="true" />
                <span>REMOTE</span>
              </span>
            </div>

            <h1 id="job-title" className="job-detail__title">
              {job.title}
            </h1>

            <p className="job-detail__summary">{job.summary}</p>

            <div className="job-detail__header-cta">
              <Button
                href={getApplicationGmailUrl(job.title)}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
                endIcon={<Send size={18} strokeWidth={2.2} />}
              >
                Apply Now
              </Button>

              <Button
                as={Link}
                to="/careers#openings"
                variant="outline"
                size="lg"
                startIcon={<ArrowLeft size={18} />}
              >
                Back to All Openings
              </Button>
            </div>
            <p className="job-detail__resume-note">
              Please attach your resume before sending the email.
            </p>
          </div>
        </Container>
      </div>

      {/* ================= 2. Main Content Grid ================= */}
      <Container>
        <div className="job-detail__grid">
          {/* Main JD Content */}
          <div className="job-detail__content">
            <div className="job-detail__disclosure-box">
              <div className="job-detail__disclosure-header">
                <Info size={18} strokeWidth={2.4} className="job-detail__disclosure-icon" />
                <h2 className="job-detail__disclosure-title">
                  Employment Conditions &amp; Expectations
                </h2>
              </div>
              <div className="job-detail__facts-grid">
                <div className="job-detail__fact-card">
                  <span className="job-detail__fact-label">Work Mode</span>
                  <strong className="job-detail__fact-value">Remote</strong>
                  <span className="job-detail__fact-sub">Asynchronous digital collaboration</span>
                </div>

                <div className="job-detail__fact-card">
                  <span className="job-detail__fact-label">Category</span>
                  <strong className="job-detail__fact-value">{job.category}</strong>
                  <span className="job-detail__fact-sub">Functional discipline</span>
                </div>

                <div className="job-detail__fact-card">
                  <span className="job-detail__fact-label">Primary Goal</span>
                  <strong className="job-detail__fact-value">Skill Building</strong>
                  <span className="job-detail__fact-sub">Hands-on project experience</span>
                </div>
              </div>
            </div>

            {/* Role Overview */}
            <section className="job-detail__section" aria-labelledby="section-overview">
              <h2 id="section-overview" className="job-detail__section-title">
                Role Overview
              </h2>
              <p className="job-detail__section-text">{job.overview}</p>
            </section>

            {/* Responsibilities */}
            <section className="job-detail__section" aria-labelledby="section-responsibilities">
              <h2 id="section-responsibilities" className="job-detail__section-title">
                Key Responsibilities
              </h2>
              <ul className="job-detail__list">
                {job.responsibilities.map((item, index) => (
                  <li key={index} className="job-detail__list-item">
                    <CheckCircle2 size={18} className="job-detail__list-icon" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Requirements */}
            <section className="job-detail__section" aria-labelledby="section-requirements">
              <h2 id="section-requirements" className="job-detail__section-title">
                Required Qualifications &amp; Skills
              </h2>
              <ul className="job-detail__list">
                {job.requirements.map((item, index) => (
                  <li key={index} className="job-detail__list-item">
                    <CheckCircle2 size={18} className="job-detail__list-icon" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Nice to Have */}
            {job.niceToHave && job.niceToHave.length > 0 && (
              <section className="job-detail__section" aria-labelledby="section-nice-to-have">
                <h2 id="section-nice-to-have" className="job-detail__section-title">
                  Nice to Have
                </h2>
                <ul className="job-detail__list">
                  {job.niceToHave.map((item, index) => (
                    <li key={index} className="job-detail__list-item job-detail__list-item--plus">
                      <Sparkles size={16} className="job-detail__list-icon job-detail__list-icon--purple" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Skills & Technologies Tags */}
            <section className="job-detail__section" aria-labelledby="section-skills">
              <h2 id="section-skills" className="job-detail__section-title">
                Focus Areas &amp; Tools
              </h2>
              <div className="job-detail__tags">
                {job.skills.map((skill) => (
                  <span key={skill} className="job-detail__tag">
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Application Section Anchor */}
            <section className="job-detail__apply-section" id="apply" aria-labelledby="apply-heading">
              <div className="job-detail__apply-header">
                <Badge variant="primary">Application</Badge>
                <h2 id="apply-heading" className="job-detail__apply-title">
                  Apply for {job.title}
                </h2>
                <p className="job-detail__apply-desc">
                  Apply by email. Remember that this position is completely remote.
                </p>
              </div>

              <ApplicationForm preselectedJob={job} />
            </section>
          </div>

          {/* Sticky Sidebar */}
          <aside className="job-detail__sidebar" aria-label="Job quick details and navigation">
            <div className="job-detail__sidebar-card">
              <h3 className="job-detail__sidebar-title">Summary at a Glance</h3>

              <div className="job-detail__sidebar-rows">
                <div className="job-detail__sidebar-row">
                  <span className="job-detail__sidebar-label">Work Mode</span>
                  <span className="job-detail__sidebar-val job-detail__sidebar-val--badge">Remote</span>
                </div>

                <div className="job-detail__sidebar-row">
                  <span className="job-detail__sidebar-label">Role Type</span>
                  <span className="job-detail__sidebar-val">{job.employmentType}</span>
                </div>

                <div className="job-detail__sidebar-row">
                  <span className="job-detail__sidebar-label">Category</span>
                  <span className="job-detail__sidebar-val">{job.category}</span>
                </div>

                <div className="job-detail__sidebar-row">
                  <span className="job-detail__sidebar-label">Location</span>
                  <span className="job-detail__sidebar-val">Anywhere (Online)</span>
                </div>
              </div>

              <div className="job-detail__sidebar-cta">
                <Button
                  href={getApplicationGmailUrl(job.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  fullWidth
                  endIcon={<Send size={16} />}
                >
                  Apply Now
                </Button>
                <p className="job-detail__resume-note">
                  Please attach your resume before sending the email.
                </p>
              </div>
            </div>

            <div className="job-detail__back-box">
              <Link to="/careers#openings" className="job-detail__back-link">
                <ArrowLeft size={16} />
                <span>Browse All 8 Open Roles</span>
              </Link>
            </div>
          </aside>
        </div>

        {/* ================= 3. Related Job Openings ================= */}
        {relatedJobs.length > 0 && (
          <section className="job-detail__related" aria-labelledby="related-heading">
            <div className="job-detail__related-header">
              <h2 id="related-heading" className="job-detail__related-title">
                Other Remote Openings
              </h2>
              <Link to="/careers#openings" className="job-detail__related-all">
                <span>View all roles</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="job-detail__related-grid">
              {relatedJobs.map((related) => (
                <JobCard
                  key={related.id}
                  job={related}
                />
              ))}
            </div>
          </section>
        )}
      </Container>
    </article>
  );
};

export default JobDetailPage;
