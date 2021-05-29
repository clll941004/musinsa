// init
const listType = ['btn-list-grid2', 'btn-list-grid1', 'btn-list-randscape'];
const btn = document.getElementById('btn-list-type');
const list = document.getElementById('product-list');
let now = localStorage.getItem('listType') || 'btn-list-grid2';
(() => {
  btn.classList.add(now);
  list.classList.add(now.replace('btn-', ''));
})();

const listTypeChange = () => {
  const next = (listType.indexOf(now) + 1) > 2 ? listType[0] : listType[listType.indexOf(now) + 1]; // 다음 리스트 타입
  // 클래스명 및 로컬스토리지 데이터 변경
  localStorage.setItem('listType', next);
  btn.className = btn.className.replace(now, next);
  list.className = list.className.replace(now.replace('btn-', ''), next.replace('btn-', ''));
  now = next;
}