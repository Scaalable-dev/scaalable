import { Link } from "react-router-dom";
import { ArrowRight, Globe, Send } from "lucide-react";
import Button from "../ui/Button";
import { getApplicationGmailUrl } from "../../utils/applicationEmail";
import "./JobCard.css";

const JobCard = ({ job }) => {
  const { slug, title, category, summary, employmentType, skills } = job;

  // Exact prompt labels: REMOTE and UNPAID or UNPAID INTERNSHIP
  const isInternship = employmentType.toLowerCase().includes("internship");
  const unpaidLabel = isInternship ? "UNPAID INTERNSHIP" : "UNPAID ROLE";

  return (
    <article className="job-card" id={`job-card-${slug}`}>
      <div className="job-card__header">
        <div className="job-card__meta-top">
          <span className="job-card__category">{category}</span>
          
          <div className="job-card__badges">
            <span className="job-card__badge job-card__badge--remote">
              <Globe size={12} strokeWidth={2.4} aria-hidden="true" />
              <span>REMOTE</span>
            </span>
            <span className="job-card__badge job-card__badge--unpaid">
              <span>{unpaidLabel}</span>
            </span>
          </div>
        </div>

        <h3 className="job-card__title">
          <Link to={`/careers/${slug}`} className="job-card__title-link">
            {title}
          </Link>
        </h3>
      </div>

      <p className="job-card__summary">{summary}</p>

      {/* Relevant skill tags (3-4 tags) */}
      <div className="job-card__skills" aria-label="Required skills">
        {skills.slice(0, 4).map((skill) => (
          <span key={skill} className="job-card__skill-tag">
            {skill}
          </span>
        ))}
      </div>

      <div className="job-card__actions">
        <Button
          as={Link}
          to={`/careers/${slug}`}
          variant="outline"
          size="sm"
          className="job-card__btn-view"
          endIcon={<ArrowRight size={15} strokeWidth={2.2} />}
        >
          View Details
        </Button>

        <Button
          href={getApplicationGmailUrl(title)}
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          size="sm"
          className="job-card__btn-apply"
          endIcon={<Send size={14} strokeWidth={2} />}
        >
          Apply Now
        </Button>
      </div>
      <p className="job-card__resume-note">
        Please attach your resume before sending the email.
      </p>
    </article>
  );
};

export default JobCard;
