var mainNavList = document.querySelectorAll('header .main-nav ul li');
var header = document.getElementById('header-container');

var submenu=document.createElement('div');
submenu.classList.add('submenu');
var categoryPrice=document.createElement('div');
categoryPrice.classList.add('category-price');
var searchModel=document.createElement('div');
searchModel.classList.add('search-model');
var suggestedModel=document.createElement('div');
suggestedModel.classList.add('suggested-model');

submenu.appendChild(categoryPrice);
submenu.appendChild(searchModel);
submenu.appendChild(suggestedModel);

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
submenu.style.visibility='visible';
submenu.style.transition='visibility 0.4s';
submenu.onmouseover=function () {
  submenu.style.visibility='visible';
}
submenu.onmouseout=function () {
  submenu.style.visibility='hidden';
}
}