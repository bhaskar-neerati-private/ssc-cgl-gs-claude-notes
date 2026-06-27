// Generic renderer for a static GS topic page.
// Usage: <body data-md="../../assets/content/polity/fundamental-rights.md">
// Requires marked.js (loaded via CDN in the topic page) for markdown -> HTML.

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { meta: {}, body: raw };
  const meta = {};
  match[1].split("\n").forEach(line => {
    const idx = line.indexOf(":");
    if (idx === -1) return;
    meta[line.slice(0, idx).trim()] = line.slice(idx + 1).trim();
  });
  return { meta, body: match[2] };
}

async function renderTopicPage() {
  const mdPath = document.body.getAttribute("data-md");
  const container = document.getElementById("topic-content");
  const res = await fetch(mdPath);
  const raw = await res.text();
  const { meta, body } = parseFrontmatter(raw);

  document.title = meta.title ? `${meta.title} — SSC CGL GS Notes` : document.title;

  const tierBadge = meta.tier
    ? `<span class="tier-badge tier-${meta.tier}">Tier ${meta.tier}</span>`
    : "";

  container.innerHTML = `
    <h1>${meta.title || ""} ${tierBadge}</h1>
    <p class="empty-note">${meta.subject || ""} ${meta.date ? "&middot; " + meta.date : ""}</p>
    <div class="topic-body">${marked.parse(body)}</div>
  `;
}

renderTopicPage();
