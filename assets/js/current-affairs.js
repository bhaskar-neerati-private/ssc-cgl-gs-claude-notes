const grid = document.getElementById("ca-cal-grid");
const titleEl = document.getElementById("ca-cal-title");
const content = document.getElementById("ca-content");
const prevBtn = document.getElementById("ca-prev");
const nextBtn = document.getElementById("ca-next");

const todayDate = new Date();
const todayStr = todayDate.toISOString().slice(0, 10);

let viewYear = todayDate.getFullYear();
let viewMonth = todayDate.getMonth(); // 0-indexed
let selectedDate = todayStr;

const MONTH_NAMES = ["January","February","March","April","May","June",
  "July","August","September","October","November","December"];

prevBtn.addEventListener("click", () => changeMonth(-1));
nextBtn.addEventListener("click", () => changeMonth(1));

function changeMonth(delta) {
  viewMonth += delta;
  if (viewMonth < 0) { viewMonth = 11; viewYear--; }
  if (viewMonth > 11) { viewMonth = 0; viewYear++; }
  renderCalendar();
}

async function fetchMonthData(year, month) {
  const key = `${year}-${String(month + 1).padStart(2, "0")}`;
  try {
    const res = await fetch(`../assets/data/current-affairs/${key}.json`);
    if (!res.ok) throw new Error("no data");
    return await res.json();
  } catch {
    return {};
  }
}

async function renderCalendar() {
  titleEl.textContent = `${MONTH_NAMES[viewMonth]} ${viewYear}`;
  const monthData = await fetchMonthData(viewYear, viewMonth);
  const availableDates = new Set(Object.keys(monthData));

  const firstDay = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

  grid.innerHTML = "";

  for (let i = 0; i < firstDay; i++) {
    const blank = document.createElement("div");
    blank.className = "cal-cell empty";
    grid.appendChild(blank);
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const dateStr = `${viewYear}-${String(viewMonth + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
    const hasData = availableDates.has(dateStr);
    const isToday = dateStr === todayStr;
    const isSelected = dateStr === selectedDate;

    const cell = document.createElement(hasData ? "button" : "div");
    cell.textContent = d;
    cell.className = "cal-cell " + (hasData ? "active" : "inactive");
    if (isToday) cell.classList.add("today");
    if (isSelected && hasData) cell.classList.add("selected");

    if (hasData) {
      cell.addEventListener("click", () => {
        selectedDate = dateStr;
        renderCalendar();
        renderDay(monthData[dateStr]);
      });
    }

    grid.appendChild(cell);
  }

  if (availableDates.has(selectedDate) && selectedDate.startsWith(`${viewYear}-${String(viewMonth + 1).padStart(2, "0")}`)) {
    renderDay(monthData[selectedDate]);
  } else if (!availableDates.size) {
    content.innerHTML = `<p class="empty-note">No current affairs recorded for ${MONTH_NAMES[viewMonth]} ${viewYear} yet.</p>`;
  }
}

function renderDay(day) {
  const sectionsHtml = (day.sections || []).map(section => `
    <div class="ca-section">
      <h3>${section.title}</h3>
      ${section.items.map(item => `
        <div class="ca-item ${item.unverified ? 'unverified' : ''}">
          ${item.unverified ? '<div class="flag">⚠️ unverified — verify separately</div>' : ''}
          <div>${item.fact}</div>
          ${item.why ? `<div class="why">Why it matters: ${item.why}</div>` : ''}
        </div>`).join("")}
    </div>`).join("");

  const relatedHtml = (day.relatedStatic && day.relatedStatic.length)
    ? `<div class="related-static">
         <h3>Related Static Facts</h3>
         <ul class="resource-list">
           ${day.relatedStatic.map(r => `<li><a href="${r.link}">${r.text}</a></li>`).join("")}
         </ul>
       </div>`
    : "";

  content.innerHTML = sectionsHtml + relatedHtml;
}

renderCalendar();
