const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const inp = document.querySelector(".input")

btn.addEventListener("click", function () {
    search.classList.toggle("active");
    inp.focus();
})
