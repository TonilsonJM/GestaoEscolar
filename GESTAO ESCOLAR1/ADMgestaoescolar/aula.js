
var burguerbuttom  = document.querySelector(".burguerbox");
var navcolaps = document.querySelector(".navcolaps");

burguerbuttom.addEventListener("click", () => {

    var isHidden = navcolaps.classList.contains("hidden");
    isHidden ? navcolaps.classList.remove("hidden") : navcolaps.classList.add("hidden");
})