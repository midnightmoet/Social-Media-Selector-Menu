const menuEl = document.querySelector(".menu");
const menuTextEl = document.querySelector(".menu p");
const socialListsEl = document.querySelector(".social-lists");
const liEls = document.querySelectorAll(".social-lists li");

// console.log(liEls); // test if liEls is an array, gives a NodeList


menuEl.addEventListener("click",  (event) => {
    socialListsEl.classList.toggle("hide");
    menuEl.classList.toggle("rotate");
});

liEls.forEach(liEls => {
    liEls.addEventListener("click", () => {
        menuTextEl.innerHTML = liEls.innerHTML;
        socialListsEl.classList.add("hide");
        menuEl.classList.toggle("rotate");
    })
})