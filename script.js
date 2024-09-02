const rockbtn = document.querySelector("[rock-btn]");
const paperbtn = document.querySelector("[paper-btn]");
const scissor = document.querySelector("[scissor-btn]");
const newgmbtn = document.querySelector("[new-gmbtn]");
const allBtn = document.getElementsByClassName("b");
const rndbtn=document.querySelector("[rnd-gmbtn]");
const cntr=document.querySelector("[cnt-win]");

var counter=0;

function CounterValue(){
    cntr.innerText=`${counter}`;
}


CounterValue();


const min = 1;
const max = 4;

function handnewgame() {
    Array.from(allBtn).forEach((bttn) => {
        bttn.style.pointerEvents = "auto";
        bttn.classList.remove("win" , "nt");
    });

    //location.reload();
}

function handngm(){

    Array.from(allBtn).forEach((bttn) => {
        bttn.style.pointerEvents = "auto";
        bttn.classList.remove("win" , "nt");
    });

    counter=0;
    CounterValue();


}

newgmbtn.addEventListener("click", handnewgame);
rndbtn.addEventListener("click", handngm);

Array.from(allBtn).forEach((butn) => {
    butn.addEventListener("click", clhandler);
});

function clhandler(e) {
    console.log(e.target);
    let val = e.target.getAttribute('alt');
    let rand = Math.floor(((Math.random()) * (max - min)) + min);
    console.log(rand);
    console.log(val);
    const elebx = document.getElementsByClassName(`bx${rand}`);
    console.log(elebx);

    if ((val == "SCISSORS" && rand == 2) || (val == "PAPER" && rand == 1) || (val == "ROCK" && rand == 3)) {
        console.log("Correct answer");
        e.target.parentNode.classList.add("win");
        elebx[0].classList.add("win");
        counter+=1;
        CounterValue();

        
    } else {
        console.log("Wrong answer");
        e.target.parentNode.classList.add("nt");

        
        if (elebx.length > 0) {
            elebx[0].classList.add("nt");
        }
    }

    Array.from(allBtn).forEach((bttn) => {
        bttn.style.pointerEvents = "none";
    });
}
