const showcaseHeight = 1276;
// scroll event
window.addEventListener('scroll', () => {
  const height = window.scrollY;
  const visual0 = height - $('.visual0').offset().top;
  const visual1 = height - $('.visual1').offset().top;
  const visual2 = height - $('.visual2').offset().top;
  const visual3 = height - $('.visual3').offset().top;
  // main showcase
  $('.img0').css('bottom', (height * 0.5) + 'px');
  $('.img1').css('top', (-height * 0.6) + 80 + 'px');
  $('.img2').css('bottom', (-height * 0.15) + 'px');
  $('.txt0').css('left', (-height * 0.4) + 70 + 'px');
  $('.txt1').css('left', (-height * 0.4) + 70 + 'px');
  $('.txt2').css('right', (-height * 0.4) + 100 + 'px');
  $('.txt3').css('bottom', (height * 0.35) + 'px');
  // visual showcase
  $('.img3').css('bottom', (height * 0.07) - 792 + 'px');
  $('.img4').css('top', (-height * 0.07) - 206 + 'px');
  $('.img5').css('top', (visual1 * -0.2) + 100 + 'px');
  $('.img10').css('bottom', (visual3 * 0.6) + 'px');
  $('.img11').css('top', (visual3 * 0.5) + 540 + 'px');
  $('.txt7').css('top', (visual0 * 0.5) + 250 + 'px');
  $('.txt8').css('left', (visual1 * 0.1) + 'px');
  $('.txt9').css('left', (visual1 * 0.1) + 'px');
  $('.txt10').css('left', (visual2 * 0.1) + 'px');
  $('.txt11').css('left', (visual2 * 0.1) + 'px');
  $('.txt12').css('left', (visual3 * 0.1) + 'px');
  $('.txt13').css('left', (visual3 * 0.1) + 'px');
  // active event
  if (height > ($('.visual1').offset().top - 100)) {
    $('.img6').addClass('active');
    $('.img7').addClass('active');
  } else {
    $('.img6').removeClass('active');
    $('.img7').removeClass('active');
  }
  if (height > ($('.visual2').offset().top - 100)) {
    $('.img8').addClass('active');
    $('.img9').addClass('active');
  } else {
    $('.img8').removeClass('active');
    $('.img9').removeClass('active');
  }
});
// bx img change event
let now = 0;
const left = [0, -260, -520];
const shows = [].slice.call(document.querySelectorAll('[data-show="0"]'));
const shows1 = [].slice.call(document.querySelectorAll('[data-show="1"]'));
const shows2 = [].slice.call(document.querySelectorAll('[data-show="2"]'));
setInterval(() => {
  now = left[now] <= -520 ? 0 : now + 1;
  const next = now - 1 < 0 ? 1 : now - 1;
  const next2 = now - 2 < 0 ? 1 : now - 2;
  for (let i = 0 ; i < shows.length ; i ++) {
    shows[i].style.left= `${left[now]}px`;
    shows1[i].style.left= `${left[next]}px`;
    shows2[i].style.left= `${left[next2]}px`;
  }
}, 2000);