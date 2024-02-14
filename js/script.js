// toggle class active
const navbarNav = document.querySelector(`.navbar-nav`);

// ketika cake menu di klik
document.querySelector(`#cake-menu`).onclick = () => {
    navbarNav.classList.toggle(`active`);
}; 

// klik diluar side bar utk menghilangkan nav
const cake = document.querySelector(`#cake-menu`);

document.addEventListener('click', function(e){
    if(!cake.contains(e.target) && !navbarNav.contains(e.targer)){
        navbarNav.classList.remove('active');
    }
});
