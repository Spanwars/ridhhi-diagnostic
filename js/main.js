// Tab functionality for doctor profile switcher.
// Add another doctor by adding a new tab button + panel in index.html and matching data-target values.
const tabs = document.querySelectorAll('.tab-btn');
const panels = document.querySelectorAll('.doctor-panel');
const serviceGroups = document.querySelectorAll('.doctor-services');
const servicesHeading = document.querySelector('#services-heading');
const servicesSubtitle = document.querySelector('#services-subtitle');

const serviceMeta = {
  indra: {
    heading: 'Core Diagnostic Services',
    subtitle: "Currently showing Dr. Indra Solanki's services."
  },
  rajesh: {
    heading: 'Core Dental Services',
    subtitle: "Currently showing Dr. Rajesh Solanki's services."
  }
};

const updateServices = (target) => {
  serviceGroups.forEach((group) => {
    const isActive = group.dataset.services === target;
    group.classList.toggle('active', isActive);
  });

  const selectedServiceMeta = serviceMeta[target];
  if (selectedServiceMeta && servicesHeading && servicesSubtitle) {
    servicesHeading.textContent = selectedServiceMeta.heading;
    servicesSubtitle.textContent = selectedServiceMeta.subtitle;
  }
};

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

    updateServices(target);
  });
});
