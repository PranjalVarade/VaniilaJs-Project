const modalBtn = document.querySelector(".modalBtn");
const modal = document.querySelector(".modalCon");
const closeBtn = document.querySelector(".closeBtn");

modalBtn.addEventListener("click", () => {
    console.log("Working");
    modal.classList.add("showModalcon"); //add the class showModalCon which shows the model content
});
closeBtn.addEventListener("click", () => {
    modal.classList.remove("showModalcon"); //removes showModalConand hides the modal content when clicked on cnacel

})