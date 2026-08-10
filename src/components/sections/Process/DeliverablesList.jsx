import { Check } from "lucide-react";

const DeliverablesList = ({ deliverables }) => {
  return (
    <ul className="proc-deliv">
      {deliverables.map((item, i) => (
        <li className="proc-deliv__item" key={item} style={{ "--i": i }}>
          <span className="proc-deliv__check" aria-hidden="true">
            <Check size={12} strokeWidth={3} />
          </span>

          {item}
        </li>
      ))}
    </ul>
  );
};

export default DeliverablesList;
