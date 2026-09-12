const startedAt = new Date(2026, 6, 5);
const counter = document.querySelector('#days-counter');

function updateDays() {
  const today = new Date();
  const todayUtc = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
  const startedUtc = Date.UTC(startedAt.getFullYear(), startedAt.getMonth(), startedAt.getDate());
  const days = Math.max(0, Math.floor((todayUtc - startedUtc) / 86400000));
  counter.textContent = days.toLocaleString('ru-RU');
}

updateDays();

function scheduleMidnightUpdate() {
  const now = new Date();
  const nextMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  window.setTimeout(() => {
    updateDays();
    scheduleMidnightUpdate();
  }, nextMidnight.getTime() - now.getTime() + 1000);
}

scheduleMidnightUpdate();
