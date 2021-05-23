const colors = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "a",
    "b", "c", "d", "e", "f"
];

const btnColor = document.querySelector(".showColor");
const col = document.querySelector(".addColor");


btnColor.addEventListener("click", () => { //random array element to get random hex number
    let newColor = '';
    for (let i = 0; i < 6; i++) {
        let randomNumber = getrandomcolor();
        newColor = newColor + colors[randomNumber];


    }
    newColor = '#' + newColor;
    col.textContent = newColor; //Show the background color name
    btnColor.style.background = newColor; //changes the background of the button
    document.body.style.background = newColor; //changes the background of the body


})

getrandomcolor = () => { //Random number generator
    return Math.floor(Math.random() * colors.length);
}