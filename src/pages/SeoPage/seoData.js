import { absoluteUrl } from "../../lib/site";
import { breadcrumbs, faqPage, webPage } from "../../lib/structuredData";
export const SEO_PATH = "/seo";
export const seoMeta = { title: "Search Engine Optimization Services | Scaalable", description: "Scaalable delivers technical SEO and content strategy to improve search visibility, discoverability and long-term organic growth.", canonical: absoluteUrl(SEO_PATH) };
export const seoServices = [
  ["SEO Audit", "Review technical, content and search signals to identify the highest-priority improvements."],
  ["Technical SEO", "Improve how search engines access, crawl and understand the site."],
  ["On-Page SEO", "Refine page-level structure, content and signals people encounter."],
  ["Off-Page SEO", "Build relevant authority signals that support how the site is understood beyond its pages."],
  ["Local SEO", "Help nearby customers discover your business through local search optimisation."],
  ["Google Business Profile Optimization", "Keep local business information accurate, useful and easier to find."],
  ["Keyword Research", "Identify the questions and search intent most relevant to your audience."],
  ["Content Strategy", "Plan useful content around the topics and journeys that support discovery."],
  ["Link Building", "Develop considered authority-building activity around relevant opportunities."],
  ["Competitor Analysis", "Understand how comparable sites appear in search and where useful gaps exist."],
  ["Website Speed Optimization", "Improve the performance details that influence both experience and search signals."],
  ["Schema Markup", "Add structured data so key information is clearer to search engines."],
  ["Core Web Vitals Optimization", "Strengthen the page-experience metrics that support a more reliable search presence."],
];
export const focusAreas = ["Technical", "Content", "Authority", "Local Search", "Analytics"];
export const seoBenefits = [
  ["Discoverability", "Make the site easier to find when people search for relevant services and questions."],
  ["Qualified organic traffic", "Attract visitors who are already looking for what you offer."],
  ["Clearer site experience", "Technical and content improvements also help people understand and use the site."],
  ["Long-term visibility", "Search foundations support sustainable growth rather than short-term spikes."],
  ["Evidence-led decisions", "Reporting on clicks, visibility and page experience guides the next useful change."],
  ["Local and broader reach", "Local SEO and wider search work can be combined around where customers actually look."],
];
export const seoMeasurement = [
  "Organic clicks and impressions",
  "Keyword visibility",
  "Landing page performance",
  "Technical issues and Core Web Vitals",
  "Conversion-related metrics where tracking is configured",
];
export const seoProcess = [["01","SEO Discovery and Website Audit","We review the site, its technical foundations and the questions the search strategy needs to answer."],["02","Keyword Research and Search Intent","We examine how relevant audiences search and what information they need at each stage."],["03","Technical and On-Page Optimization","We improve the structure, signals and page-level details that support discoverability."],["04","Content and Authority Strategy","We plan useful content and authority-building activity around the opportunities that matter."],["05","Implementation and Monitoring","We put agreed improvements in place and keep a close view of the signals that follow."],["06","Reporting and Continuous Improvement","We use the evidence to prioritise the next useful technical, content or experience improvement."]];
export const seoFaqs = [["audit","What does an SEO audit include?","An audit can review technical issues, content structure, search signals, page experience and the opportunities that should be prioritised first."],["technical","What is the difference between technical SEO and on-page SEO?","Technical SEO focuses on how search engines access and understand a site. On-page SEO focuses on the individual pages, content and signals people encounter."],["local","What is local SEO?","Local SEO helps a business be easier to discover for relevant geographic searches, including through accurate local information and Google Business Profile optimisation."],["visibility","Can SEO improve website visibility?","SEO can support clearer search visibility by improving the technical and content foundations that help relevant audiences and search engines understand a site."],["monitor","How is SEO performance monitored?","Monitoring can include organic clicks and impressions, keyword visibility, landing-page behaviour, technical issues, Core Web Vitals and configured conversion signals."]];
export const seoPageData = () => ({ meta: seoMeta, jsonLd: [webPage({path:SEO_PATH,title:seoMeta.title,description:seoMeta.description,type:"ServicePage"}),breadcrumbs([{name:"Services",path:"/services"},{name:"Search Engine Optimization",path:SEO_PATH}]),faqPage(seoFaqs.map(([id,question,answer])=>({id,question,answer})),SEO_PATH)] });
