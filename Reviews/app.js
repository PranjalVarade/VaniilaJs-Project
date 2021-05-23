const reviews = [{
        userid: 1,
        name: "John Sina",
        job: "Software Engineer",
        img: "./Images/Avatar1.png",
        review: "He spoke in tear-filled gibberish she didn't understand, and she moved away to the door.In addition, as proxies are able to encrypt data as well, the monitoring proxies will only collect gibberish."
    },
    {
        userid: 2,
        name: "Nike Josh",
        job: "Space Engineer",
        img: "./Images/Avatar2.jpeg",
        review: "He spoke in tear-filled gibberish she didn't understand, and she moved away to the door.In addition, as proxies are able to encrypt data as well, the monitoring proxies will only collect gibberish."
    },
    {
        userid: 3,
        name: "Deepeka Padukon",
        job: "MBBS",
        img: "./Images/Avatar3.png",
        review: "He spoke in tear-filled gibberish she didn't understand, and she moved away to the door.In addition, as proxies are able to encrypt data as well, the monitoring proxies will only collect gibberish."
    },

]


const singleReview = document.querySelector('.singleReview');
const userImg = document.querySelector(".imgCon");
const userName = document.querySelector(".name");
const userJob = document.querySelector(".job");
const userReview = document.querySelector(".review");

const lessBtn = document.querySelector(".btn-Less");
const moreBtn = document.querySelector(".btn-More");
const randomBtn = document.querySelector(".btn-Random");


let id = 0;


window.addEventListener('DOMContentLoaded', () => {
    getUserInfo(id);
})

moreBtn.addEventListener("click", () => { //Shows the next review
    id++;
    if (id > reviews.length - 1) {
        id = 0;
    }
    getUserInfo(id);
});

lessBtn.addEventListener("click", () => { // Shows the previews review
    id--;
    if (id < 0) {
        id = reviews.length - 1;
    }
    getUserInfo(id);
});

randomBtn.addEventListener("click", () => { //Shows the random persons review
    let randomNo = getrandomNumer();
    getUserInfo(randomNo);
})



getUserInfo = (person) => { //shows the data and review
    let data = reviews[person];
    userImg.src = data.img;
    userName.textContent = data.name;
    userJob.textContent = data.job;
    userReview.textContent = data.review;

}

getrandomNumer = () => {
    return Math.floor(Math.random() * reviews.length)
}