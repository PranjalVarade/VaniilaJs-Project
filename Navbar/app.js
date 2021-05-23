const button = document.querySelector(".fontToggle");

const links = document.querySelector(".pageLinks");

button.addEventListener("click", () => {
    //you can add and also remove the classes to open and close the navbar
    /*if(links.classList.contains("page-links-visibile")){
    links.classList.remove("page-links-visibile");
    }
    else{
        links.classList.add("page-links-visibile");

    }*/
    links.classList.toggle("page-links-visibile"); //we can use toggle to open and close navbar
});