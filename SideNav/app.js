const navbarBtn = document.querySelector(".navbarBtn");

const navbar = document.querySelector(".allLinks");
const navbarHead = document.querySelector(".navbarHead");

navbarBtn.addEventListener("click", () => {
    if (navbar.classList.contains("showNavBar")) {
        navbar.classList.remove("showNavBar"); //removes the class so we can close the side bar
        navbarHead.classList.remove("navbarHeadShow"); //remove the class to shift the heading to its place when sidebar is closed

    } else {
        navbar.classList.add("showNavBar"); //adds the class which show the sidebar
        navbarHead.classList.add("navbarHeadShow"); //adds the class take shifts the heading
    }
})