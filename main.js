const navBtn = document.querySelector(".nav-btn");
const closeBtn = document.querySelector(".close-btn");
const navDrawer = document.querySelector(".drawer")
// console.log(closeBtn)

navBtn.addEventListener("click", (e) => {
    // console.log('okay')
    navDrawer.style.display = "block";
});

closeBtn.addEventListener("click", (e) => {
    navDrawer.style.display = "none";
});