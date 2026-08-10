/* Applies a page's document metadata. One helper rather than the same three
   DOM lookups pasted into every page effect — no Helmet provider is mounted,
   so the pages own their own tags. */
export const setPageMeta = ({ title, description, canonical }) => {
  if (title) document.title = title;

  if (description) {
    const tag = document.querySelector('meta[name="description"]');
    if (tag) tag.setAttribute("content", description);
  }

  if (canonical) {
    let tag = document.querySelector('link[rel="canonical"]');

    if (!tag) {
      tag = document.createElement("link");
      tag.setAttribute("rel", "canonical");
      document.head.appendChild(tag);
    }

    tag.setAttribute("href", canonical);
  }
};
