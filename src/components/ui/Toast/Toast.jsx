import toast from "react-hot-toast";
import { X, CheckCircle2, AlertTriangle } from "lucide-react";

import "./Toast.css";

const ICONS = {
  success: CheckCircle2,
  error: AlertTriangle,
};

/**
 * Notification body used with `toast.custom`.
 *
 * The `t` object from react-hot-toast is required: it carries the id used to
 * dismiss, and `visible`, which flips to false when the timer expires so the
 * toast can animate out before it is unmounted.
 *
 * Note that react-hot-toast pauses a toast's dismiss timer while the pointer
 * is over it, so the close button is the reliable way out.
 */
const Toast = ({
  t,
  title,
  message,
  variant = "success",
  duration = 4000,
}) => {
  const Icon = ICONS[variant] ?? CheckCircle2;

  return (
    <div
      className={`toast toast--${variant}`}
      data-visible={t?.visible ? "true" : "false"}
      role="status"
      aria-live="polite"
    >
      <div className="toast__icon">
        <Icon size={22} strokeWidth={2.5} aria-hidden="true" />
      </div>

      <div className="toast__body">
        <h4>{title}</h4>

        <p>{message}</p>
      </div>

      <button
        type="button"
        className="toast__close"
        onClick={() => toast.dismiss(t?.id)}
        aria-label="Dismiss notification"
      >
        <X size={16} strokeWidth={2.6} aria-hidden="true" />
      </button>

      {/* Bar drains in step with the actual dismiss timer. */}
      <div
        className="toast__progress"
        style={{ animationDuration: `${duration}ms` }}
      />
    </div>
  );
};

export default Toast;
