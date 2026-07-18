import { Mail, Phone, MapPin } from "lucide-react";

import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export const quickLinks = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Services",
    path: "/services",
  },
  {
    id: 3,
    title: "Projects",
    path: "/projects",
  },
  {
    id: 4,
    title: "Contact",
    path: "/contact",
  },
];

export const services = [
  {
    id: 1,
    title: "Web Development",
  },
  {
    id: 2,
    title: "Web Applications",
  },
  {
    id: 3,
    title: "UI / UX Design",
  },
  {
    id: 4,
    title: "Maintenance & Support",
  },
];

export const contactInfo = [
  {
    id: 1,
    icon: Mail,
    value: "hello@youragency.com",
    href: "mailto:hello@youragency.com",
  },
  {
    id: 2,
    icon: Phone,
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    id: 3,
    icon: MapPin,
    value: "India",
  },
];

export const socialLinks = [
  {
    id: 1,
    icon: FaGithub,
    title: "GitHub",
    href: "https://github.com/yourusername",
  },
  {
    id: 2,
    icon: FaLinkedin,
    title: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
  },
  {
    id: 3,
    icon: FaXTwitter,
    title: "X",
    href: "https://x.com/yourusername",
  },
];
