const startedAt = new Date('2026-07-05T00:00:00');
const counter = document.querySelector('#days-counter');

function updateDays() {
  const days = Math.max(0, Math.floor((Date.now() - startedAt.getTime()) / 86400000));
  counter.textContent = days.toLocaleString('ru-RU');
}

updateDays();
window.setInterval(updateDays, 60000);
