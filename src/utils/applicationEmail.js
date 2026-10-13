const RECIPIENT = "priyangshu@scaalable.com";
const BODY = "I attached my resume below";

export function getApplicationGmailUrl(jobTitle) {
  if (typeof jobTitle !== "string" || !jobTitle.trim()) {
    throw new Error("A valid job title is required to apply.");
  }

  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: RECIPIENT,
    su: `Application for ${jobTitle.trim()} - Scaalable`,
    body: BODY,
  });

  return `https://mail.google.com/mail/?${params.toString()}`;
}