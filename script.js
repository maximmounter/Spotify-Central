const GREEN = '#1DB954';

function switchTab(tab) {
  // Hide all screens and deactivate all nav items
  ['home', 'events', 'deals', 'map'].forEach(function (t) {
    document.getElementById('screen-' + t).classList.remove('visible');

    const bn = document.getElementById('bnav-' + t);
    if (bn) {
      bn.classList.remove('active');
      bn.querySelector('.bnav-label').style.color = '#555';
      const dot = bn.querySelector('.bnav-dot');
      if (dot) dot.remove();
      bn.querySelectorAll('path, rect, line, polygon, circle').forEach(function (p) {
        p.setAttribute('stroke', '#555');
        if (p.tagName === 'circle') p.setAttribute('fill', '#555');
      });
    }
  });

  // Show selected screen and activate its nav item
  document.getElementById('screen-' + tab).classList.add('visible');

  const abn = document.getElementById('bnav-' + tab);
  if (abn) {
    abn.classList.add('active');
    abn.querySelector('.bnav-label').style.color = GREEN;
    abn.querySelectorAll('path, rect, line, polygon, circle').forEach(function (p) {
      p.setAttribute('stroke', GREEN);
      if (p.tagName === 'circle') p.setAttribute('fill', GREEN);
    });
    if (!abn.querySelector('.bnav-dot')) {
      const d = document.createElement('div');
      d.className = 'bnav-dot';
      abn.appendChild(d);
    }
  }
}

// Filter pills
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.filter-pill').forEach(function (p) {
    p.addEventListener('click', function () {
      document.querySelectorAll('.filter-pill').forEach(function (x) {
        x.classList.remove('active');
      });
      p.classList.add('active');
    });
  });
});
