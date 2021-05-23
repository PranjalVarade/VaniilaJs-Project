const colors = ["red", "green", "#45425a", "rgb(150, 161, 58)", "#6c7d47"]

const defineColors = document.querySelector(".showColor");
const col = document.querySelector(".addColor");

defineColors.addEventListener("click", () => {
    const number = getRandomColor();
    col.textContent = colors[number]; //Show the background color name
    defineColors.style.background = colors[number]; //changes the background of the button
    document.body.style.background = colors[number]; //changes the background of the body

})

getRandomColor = () => { //Random number generator
    return Math.floor(Math.random() * colors.length)
}