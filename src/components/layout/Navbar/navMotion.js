/* Shared between NavLinks and MobileMenu. Kept out of the component files so
   Fast Refresh still treats those as component-only modules. */

/* Applied to every nav item. Only the mobile drawer's <motion.ul> declares the
   matching variant names, so desktop items render statically. */
export const NAV_ITEM_VARIANTS = {
  hidden: { opacity: 0, x: 22 },
  visible: { opacity: 1, x: 0 },
};

export const NAV_LIST_VARIANTS = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.14 },
  },
};

/* Damping ratio ~0.84 — glides with a touch of settle instead of the snap the
   previous stiffer spring gave. */
export const NAV_INDICATOR_SPRING = {
  type: "spring",
  stiffness: 320,
  damping: 30,
  mass: 1,
};
