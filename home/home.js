var mainNavList = document.querySelectorAll('header .main-nav ul li');
var mainNavSubmenu = document.querySelector('header .submenu');

mainNavList[0].onmousemove=function () {
  mainNavSubmenu.style.visibility='visible';
}
mainNavList[0].onmouseout=function () {
  mainNavSubmenu.style.visibility='hidden';
}

mainNavList[1].onmousemove=function () {
  mainNavSubmenu.style.visibility='visible';
}
mainNavList[1].onmouseout=function () {
  mainNavSubmenu.style.visibility='hidden';
}

mainNavList[4].onmousemove=function () {
  mainNavSubmenu.style.visibility='visible';
}
mainNavList[4].onmouseout=function () {
  mainNavSubmenu.style.visibility='hidden';
}
////
mainNavSubmenu.onmousemove=function () {
  mainNavSubmenu.style.visibility='visible';
}
mainNavSubmenu.onmouseout=function () {
  mainNavSubmenu.style.visibility='hidden';
}