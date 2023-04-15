var mainNavList = document.querySelectorAll('header .main-nav ul li');
var header = document.getElementById('header-container');
var submenu=document.createElement('div');
submenu.classList.add('submenu');
var submenuVideo=document.createElement('div');
submenuVideo.classList.add('submenu-video');

var rowOne=document.createElement('div');
rowOne.classList.add('row-one');
var rowTwo=document.createElement('div');
rowTwo.classList.add('row-two');
var rowThree=document.createElement('div');
rowThree.classList.add('row-three');

var categoryPrice=document.createElement('div');
categoryPrice.classList.add('row-one');
var categoryModel=document.createElement('div');
categoryModel.classList.add('row-one');
var categoryVideo=document.createElement('div');
categoryVideo.classList.add('submenu-video');

var categoryListPrice=['تا 200 میلیون','بین 200 تا 500 میلیون','بین 500 میلیون تا 1 میلیارد','بین 1 تا 1.5 میلیارد','بین 1.5 تا 2 میلیارد','بالای 2 میلیارد']
categoryListPrice.forEach(item => {
  var cell=document.createElement('div');
  cell.classList.add('row-one-cell');
  cell.innerHTML=item;
  categoryPrice.appendChild(cell);
  })
  rowOne.appendChild(categoryPrice);
  
var categoryListModel=['تا 200 میلیون',' 200 ','تا 200 ','تا 200 ','تا 200 ','تا 200 ']
categoryListModel.forEach(item => {
  var cell=document.createElement('div');
  cell.classList.add('row-one-cell');
  cell.innerHTML=item;
  categoryModel.appendChild(cell);
  })
  rowOne.appendChild(categoryModel);
  
var categoryListVideo=['تا 200 ',' 200 ','تا 200 ','تا 200 ','تا 200 ']
categoryListVideo.forEach(item => {
  var cell=document.createElement('div');
  cell.classList.add('category-video');
  cell.innerHTML=item;
  categoryVideo.appendChild(cell);
  })
submenuVideo.appendChild(categoryVideo);

submenu.appendChild(rowOne);
submenu.appendChild(rowTwo);
submenu.appendChild(rowThree);


mainNavList[0].onmousemove=function () {
  navItemHover();
  categoryPrice.style.display='flex';
  categoryModel.style.display='none';
}
mainNavList[0].onmouseout=function () {
  submenu.style.display='none';
}
mainNavList[1].onmousemove=function () {
  navItemHover();
  categoryModel.style.display='flex';
  categoryPrice.style.display='none';
}
mainNavList[1].onmouseout=function () {
  submenu.style.display='none';
}
mainNavList[4].onmousemove=function () {
  navItemVideoHover();
}
mainNavList[4].onmouseout=function () {
  submenuVideo.style.display='none';
}
function navItemHover() {
  header.after(submenu);
  submenu.style.display='grid';
  submenu.onmouseover=function () {
    submenu.style.display='grid';
  }
  submenu.onmouseout=function () {
    submenu.style.display='none';
  }
}
function navItemVideoHover() {
  header.after(submenuVideo);
  submenuVideo.style.display='grid';
  submenuVideo.onmouseover=function () {
    submenuVideo.style.display='grid';
  }
  submenuVideo.onmouseout=function () {
    submenuVideo.style.display='none';
  }
}