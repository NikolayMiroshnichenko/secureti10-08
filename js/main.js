(function() {

  function disableBodyScroll() {
    var body = document.querySelector('body');
    body.classList.add('scroll-disable');
  }

  function enableBodyScroll() {
    var body = document.querySelector('body');
    body.classList.remove('scroll-disable');
  }

  function openMenu() {
    var menuEl = document.querySelector('.mobillMenu');
    var menuBtn = document.querySelector('.menu-buttom');

    if (menuEl) {
      menuEl.style.display = 'block';
      menuBtn.addEventListener('click', closeMenu);
    }
  }

  function closeMenu() {
    var menuEl = document.querySelector('.mobillMenu');
    var menuBtn = document.querySelector('.menu-buttom');

    if (menuEl) {
      menuBtn.removeEventListener('click', closeMenu);
      menuEl.style.display = 'none';
    }
  }

  function initMenu() {
    var menuBtn = document.querySelector('.menu-buttom');

    menuBtn.addEventListener('click', openMenu);
    if (window.matchMedia("(max-width: 968px)").matches) {
      document.addEventListener('scroll', closeMenu);
    }
  }

  initMenu();
})();