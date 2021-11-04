// refering to a particular class

// menu icon
var menuIcon = document.querySelector('.menu-icon');

// sidebar
var sideBar = document.querySelector('.sidebar');

// container
var container = document.querySelector('.content');

// what happens when we click menu icon.
// 1, WE have to change the width of the side bar.
menuIcon.onclick = function () {
    // adding a classname
    sideBar.classList.toggle('small-sidebar');
    container.classList.toggle('large-content');
}