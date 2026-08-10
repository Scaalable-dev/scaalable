/* Every entry must map to a route registered in App.jsx — a link to a path with
   no route renders an empty layout rather than a 404. */
const navLinks = [
  {
    id: "home",
    label: "Home",
    to: "/",
    /* Without `end`, "/" prefix-matches every path and Home stays highlighted
       on every page. */
    end: true,
  },
  {
    id: "services",
    label: "Services",
    to: "/services",
  },
  {
    id: "about",
    label: "About",
    to: "/about",
  },
  {
    id: "contact",
    label: "Contact",
    to: "/contact",
  },
];

export default navLinks;
