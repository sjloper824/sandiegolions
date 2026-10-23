/* San Diego Lions site script: phone menu + schedule filter. No dependencies. */
(function () {
  // Phone / tablet menu
  var btn = document.querySelector('.menu-btn');
  var menu = document.getElementById('mobile-menu');
  if (btn && menu) {
    var iconOpen = btn.querySelector('.icon-open');
    var iconClose = btn.querySelector('.icon-close');
    var setMenu = function (open) {
      menu.hidden = !open;
      btn.setAttribute('aria-expanded', String(open));
      btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      if (iconOpen) iconOpen.style.display = open ? 'none' : '';
      if (iconClose) iconClose.style.display = open ? '' : 'none';
    };
    setMenu(false);
    btn.addEventListener('click', function () { setMenu(menu.hidden); });
    menu.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
    window.addEventListener('resize', function () { if (window.innerWidth > 1100) setMenu(false); });
  }

  // Schedule filter (All / Games / Socials)
  var chips = document.querySelectorAll('[data-filter]');
  if (chips.length) {
    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        var filter = chip.getAttribute('data-filter');
        chips.forEach(function (c) {
          var on = c === chip;
          c.classList.toggle('on', on);
          c.setAttribute('aria-pressed', String(on));
        });
        document.querySelectorAll('.events [data-type]').forEach(function (ev) {
          ev.hidden = !(filter === 'all' || ev.getAttribute('data-type') === filter);
        });
      });
    });
  }
})();
