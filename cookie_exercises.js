if (localStorage.getItem(‘cookieSeen’) != ‘shown’) {
  $(‘.cookie-).delay(2000).fadeIn();
  localStorage.setItem(‘cookieSeen’,’shown’)
};
$(‘.close’).click(function() {
  $(‘.cookie).fadeOut();
})