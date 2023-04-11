var mainNavList = document.querySelectorAll('header .main-nav ul li');
var header = document.getElementById('header-container');
var submenu=document.createElement('div');

mainNavList[0].onmousemove=function () {
  navItemHover();
}
mainNavList[0].onmouseout=function () {
  submenu.style.visibility='hidden';
}
mainNavList[1].onmousemove=function () {
  navItemHover();
}
mainNavList[1].onmouseout=function () {
  submenu.style.visibility='hidden';
}
mainNavList[4].onmousemove=function () {
  navItemHover();
}
mainNavList[4].onmouseout=function () {
  submenu.style.visibility='hidden';
}
function navItemHover() {
header.after(submenu);
submenu.innerHTML="asdfghjkl";
submenu.style.width='100vw';
submenu.style.height='70vh';
submenu.style.backgroundColor='red';
submenu.style.top='135px';
submenu.style.visibility='visible';
submenu.style.transition='visibility 0.4s';
submenu.onmouseover=function () {
  submenu.style.visibility='visible';
}
submenu.onmouseout=function () {
  submenu.style.visibility='hidden';
}
}