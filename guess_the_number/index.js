document.querySelector(".num").value="";
document.querySelector("body").style.backgroundColor="#05BFDB"
let rand = Math.floor(Math.random() * 20) + 1;
let attempts = 20;
let hsc=0;

const display=function(msg)
{
    document.querySelector(".remarks").textContent = msg;

}

document.querySelector(".ansclick").addEventListener("click", () => {
    let number = Number(document.querySelector(".num").value);

    if (!number) {
        // document.querySelector(".remarks").textContent = "No number entered 🥲";
        display("No number entered 🥲");
    }

    //won game
    else if (number === rand) {
        // document.querySelector(".remarks").textContent = "You won the game 🎆";
        display("You won the game 🎆")

        document.querySelector(".gbox").textContent = rand;

        if(attempts>hsc)
        {
            hsc=attempts;
            document.querySelector(".hscore").textContent=hsc;
        }

        document.querySelector(".img").style.backgroundImage = "url('./assests/img.gif')";
        document.querySelector("body").style.backgroundColor = "#87CBB9";
        // document.querySelectorAll(".main").style.setProperty("backgroundColor","#05BFDB","important");

    }

    //selected wrong number
    else if(number !== rand)
    {
        if (attempts > 1) {
            // document.querySelector(".remarks").textContent = number>rand ? "Try lower number 📉" :"Try higher number 📈";

            display(number>rand ? "Try lower number 📉" :"Try higher number 📈")

            attempts--;

            document.querySelector(".attempts").textContent = attempts;
        }

        else {
            // document.querySelector(".remarks").textContent = "You Lost The Game 😭";
            display("You Lost The Game 😭")
        }
    }
    // //selected higher number
    // else if (number > rand) {
    //     if (attempts > 1) {
    //         document.querySelector(".remarks").textContent = "Try lower number 📉";

    //         attempts--;

    //         document.querySelector(".attempts").textContent = attempts;
    //     }

    //     else {
    //         document.querySelector(".remarks").textContent = "You Lost The Game 😭";
    //     }
    // }

    // //selected lower number
    // else if (number < rand) {
    //     if (attempts > 1) {
    //         document.querySelector(".remarks").textContent = "Try higher number 📈";

    //         attempts--;

    //         document.querySelector(".attempts").textContent = attempts;

    //     }

    //     else {
    //         document.querySelector(".remarks").textContent = "You Lost The Game 😭";
    //     }

    // }
})

document.querySelector(".againClick").addEventListener("click", ()=>{

    attempts=20;
    document.querySelector(".num").value = "";

    // document.querySelector(".remarks").textContent = "Start guessing...";
    display("Start guessing.. ..");

    document.querySelector(".attempts").textContent = attempts;

    document.querySelector(".gbox").textContent = "?";

    document.querySelector(".img").style.backgroundImage = "";

    document.querySelector("body").style.backgroundColor="#05BFDB"
})
