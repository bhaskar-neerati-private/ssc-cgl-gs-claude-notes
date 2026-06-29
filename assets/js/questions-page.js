async function loadQuestions() {
  const dataPath = document.body.getAttribute("data-questions");
  const container = document.getElementById("questions-content");
  const res = await fetch(dataPath);
  const data = await res.json();

  document.title = `${data.topic} — Practice Questions`;

  const letters = ["A", "B", "C", "D"];

  container.innerHTML = `
    <h1>${data.topic} — Practice Questions</h1>
    <p class="empty-note">Click a section to expand it. Click "Reveal Answer" on any question to check yourself before looking.</p>
    ${data.sections.map((section, sIdx) => `
      <div class="qa-section">
        <button class="qa-header" data-target="qa-body-${sIdx}">
          <span>${section.title}</span>
          <span class="qa-count">${section.questions.length} question${section.questions.length === 1 ? "" : "s"}</span>
        </button>
        <div class="qa-body" id="qa-body-${sIdx}">
          ${section.questions.map((q, qIdx) => `
            <div class="qa-card">
              <div class="qa-question">Q${qIdx + 1}. ${q.text}</div>
              <ul class="qa-options">
                ${q.options.map((opt, oIdx) => `<li>${letters[oIdx]}. ${opt}</li>`).join("")}
              </ul>
              <button class="qa-reveal-btn" data-answer-target="qa-answer-${sIdx}-${qIdx}">Reveal Answer</button>
              <div class="qa-answer" id="qa-answer-${sIdx}-${qIdx}">
                <div class="qa-correct">Correct answer: ${letters[q.answerIndex]}. ${q.options[q.answerIndex]}</div>
                <div class="qa-explanation">${q.explanation}</div>
                <div class="qa-source ${q.verified ? "verified" : "unverified"}">
                  ${q.verified ? "✅" : "⚠️"} ${q.source}
                </div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `).join("")}
  `;

  document.querySelectorAll(".qa-header").forEach(btn => {
    btn.addEventListener("click", () => {
      const target = document.getElementById(btn.getAttribute("data-target"));
      target.classList.toggle("open");
      btn.classList.toggle("open");
    });
  });

  document.querySelectorAll(".qa-reveal-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const target = document.getElementById(btn.getAttribute("data-answer-target"));
      target.classList.toggle("visible");
      btn.textContent = target.classList.contains("visible") ? "Hide Answer" : "Reveal Answer";
    });
  });
}

loadQuestions();
