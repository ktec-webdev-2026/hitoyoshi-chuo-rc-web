/* メニュー開閉・トップの写真の切り替え（約6秒ごと） */
(function () {
  'use strict';
  var b = document.querySelector('.mb'), n = document.querySelector('nav.gnav');
  if (b && n) b.addEventListener('click', function () {
    var o = n.classList.toggle('open');
    b.setAttribute('aria-expanded', o ? 'true' : 'false');
  });
  var s = document.querySelectorAll('.slide');
  if (s.length > 1 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var i = 0;
    setInterval(function () {
      s[i].classList.remove('on'); i = (i + 1) % s.length; s[i].classList.add('on');
    }, 6000);
  }
})();
