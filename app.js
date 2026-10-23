// All content and section links work without JavaScript.
const filters = document.querySelectorAll('[data-filter]');
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  let count = 0;
  document.querySelectorAll('.publication').forEach(item => {
    item.hidden = button.dataset.filter !== 'all' && item.dataset.type !== button.dataset.filter;
    if (!item.hidden) count += 1;
  });
  document.getElementById('filter-status').textContent = `${count} entries`;
  document.getElementById('publication-window').scrollTop = 0;
}));
const serviceFilters = document.querySelectorAll('[data-service-filter]');
serviceFilters.forEach(button => button.addEventListener('click', () => {
  serviceFilters.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  let count = 0;
  document.querySelectorAll('[data-service-type]').forEach(group => {
    group.hidden = button.dataset.serviceFilter !== 'all' && group.dataset.serviceType !== button.dataset.serviceFilter;
    if (!group.hidden) count += group.querySelectorAll('li').length;
  });
  document.getElementById('service-filter-status').textContent = `${count} entries`;
  document.getElementById('service-window').scrollTop = 0;
}));
document.body.classList.add('js');
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-navigation');
menuButton?.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(expanded));
  navigation.classList.toggle('is-open', expanded);
});
navigation?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
}));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton?.getAttribute('aria-expanded') === 'true') {
    menuButton.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('is-open');
    menuButton.focus();
  }
});
