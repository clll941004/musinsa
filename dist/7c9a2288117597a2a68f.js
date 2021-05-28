const listTypeChange = e => {
  const list_type = ['btn-list-grid2', 'btn-list-grid1', 'btn-list-randscape'];
  const now = e.getAttribute('data-label'); // 현재 리스트 타입

  const next = list_type.indexOf(now) + 1 > 2 ? list_type[0] : list_type[list_type.indexOf(now) + 1]; // 다음 리스트 타입

  e.setAttribute('data-label', next);
  e.className = e.className.replace(now, next);
  const list = document.getElementById('product-list');
  list.className = list.className.replace(now.replace('btn-', ''), next.replace('btn-', ''));
};