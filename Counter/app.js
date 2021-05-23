let counter = document.querySelector(".counter");

const btnDecrase = document.querySelector(".btnDecrease");
const btnReset = document.querySelector(".btnReset");
const btnIncrease = document.querySelector(".btnIncrease");
const btn = document.querySelectorAll(".button");

let value = 0;


//one way to increase, decrease and reset the counter
/*btnDecrase.addEventListener("click",()=>{ //Decrease the counter by 1

    value-- ;
    console.log(value);
    if(value<0){
        counter.style.color="#370617"
        
    }
    counter.innerHTML=value;
});


btnIncrease.addEventListener("click",()=>{ //Increase the counter by 1
        value++;
        if(value>0){
            counter.style.color = "#ffba08"
        }
        counter.textContent=value;
}
);

btnReset.addEventListener("click",()=>{ //Reset the counter to zero
    value=0;
    counter.textContent=value;
})*/


//Another way to handle the counter

btn.forEach((item) => {
    item.addEventListener("click", (e) => {
        const button = (e.currentTarget.classList);
        if (button.contains("btnDecrease")) { //Decrease the counter by 1

            value--;
        }
        if (button.contains("btnIncrease")) { //Increase the counter by 1
            value++;
        }
        if (button.contains("btnReset")) { //Reset the counter to zero
            value = 0;
        }

        if (value < 0) { //if counter is less than zero than chnage the color
            counter.style.color = "#370617"
        }
        if (value == 0) { //if counter is equal zero than chnage the color
            counter.style.color = "#000000"
        }
        if (value > 0) { //if counter is greater than zero than chnage the color
            counter.style.color = "#ffba08"
        }

        counter.innerHTML = value;



    })
})