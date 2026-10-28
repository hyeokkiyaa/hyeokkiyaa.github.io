/* An intentionally quiet corner of this otherwise serious portfolio. */
(() => {
  const star = document.getElementById('hidden-spark');
  let count = 0;
  let last = 0;
  const discover = () => { window.location.href = 'after-hours.html'; };
  star?.addEventListener('click', () => {
    const now = Date.now();
    if (now - last > 2400) count = 0;
    last = now;
    if (++count >= 4) discover();
  });
  let typed = '';
  document.addEventListener('keydown', (event) => {
    if (event.altKey || event.ctrlKey || event.metaKey || event.target.matches('input,textarea,[contenteditable]')) return;
    typed = (typed + event.key.toLowerCase()).slice(-3);
    if (typed === 'may') discover();
  });
})();
