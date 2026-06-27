async function loadProgress() {
  const res = await fetch("../assets/data/progress.json");
  return res.json();
}

function subjectCard(subject) {
  const done = subject.topics.filter(t => t.status === "done").length;
  const total = subject.topics.length;
  const pct = total ? Math.round((done / total) * 100) : 0;

  const topicsHtml = total
    ? `<ul class="topic-list">${subject.topics.map(t => `
        <li class="${t.status === 'done' ? 'done' : ''}">
          <span class="status-dot ${t.status === 'done' ? 'done' : ''}"></span>
          ${t.status === 'done'
            ? `<a href="${subject.id}/${t.id}.html">${t.title}</a>`
            : t.title}
        </li>`).join("")}</ul>`
    : `<p class="empty-note">Breakdown not created yet — this is the next subject in queue.</p>`;

  return `
    <div class="subject-block">
      <h3>${subject.name} <span class="tier-badge tier-${subject.tier}">Tier ${subject.tier}</span></h3>
      <div class="progress-bar-track"><div class="progress-bar-fill" style="width:${pct}%"></div></div>
      <small>${done} / ${total || "?"} topics done</small>
      ${topicsHtml}
    </div>`;
}

loadProgress().then(data => {
  const sorted = data.subjects.slice().sort((a, b) => a.order - b.order);
  document.getElementById("subject-list").innerHTML = sorted.map(subjectCard).join("");
});
