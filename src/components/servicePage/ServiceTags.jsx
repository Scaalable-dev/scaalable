import { Check } from "lucide-react";

const ServiceTags = ({ items, icon: Icon = Check }) => (
  <ul className="sp-tags">
    {items.map((item) => (
      <li key={item}>
        <Icon size={15} />
        {item}
      </li>
    ))}
  </ul>
);

export default ServiceTags;
