import { Send } from "lucide-react";

import Button from "../ui/Button";
import { getApplicationGmailUrl } from "../../utils/applicationEmail";
import "./ApplicationForm.css";

const ApplicationForm = ({ preselectedJob }) => (
  <div className="application-form-container">
    <Button
      href={getApplicationGmailUrl(preselectedJob.title)}
      target="_blank"
      rel="noopener noreferrer"
      variant="primary"
      size="lg"
      className="application-form__submit-btn"
      endIcon={<Send size={18} strokeWidth={2.2} />}
    >
      Apply Now
    </Button>
    <p className="application-form__resume-note">
      Please attach your resume before sending the email.
    </p>
  </div>
);

export default ApplicationForm;
