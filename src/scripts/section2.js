const tabs = document.querySelectorAll('.section2 [data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

tabs[0].classList.add('active');
tabContents[0].classList.add('active');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active');
    });

    tabs.forEach(tab => {
      tab.classList.remove('active');
    });

    tab.classList.add('active');
    target.classList.add('active');
  });
});
