// Tab functionality for doctor profile switcher.
// Add another doctor by adding a new tab button + panel in index.html and matching data-target values.
const tabs = document.querySelectorAll('.tab-btn');
const panels = document.querySelectorAll('.doctor-panel');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.target;

    tabs.forEach((t) => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    });

    panels.forEach((panel) => {
      panel.classList.remove('active');
    });

    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');

    const activePanel = document.querySelector(`[data-panel="${target}"]`);
    if (activePanel) {
      activePanel.classList.add('active');
    }
  });
});
