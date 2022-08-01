const changeChoice = document.getElementById('click-switch');
let choice = "monthly";

changeChoice.addEventListener("click",()=>{
    console.log(document.getElementsByClassName("per"));
    if(choice === "annually"){
        choice = "monthly";
        document.getElementById("basic").innerText = "$5"
        document.getElementsByClassName("per")[0].innerText = "/month";
        document.getElementsByClassName("per")[1].innerText = "/month";
        document.getElementsByClassName("per")[2].innerText = "/month";
        document.getElementById("professional").innerText = "$10";
    }
    else{
        choice = "annually";
        document.getElementById("basic").innerText = "$55";
        document.getElementsByClassName("per")[0].innerText = "/year";
        document.getElementsByClassName("per")[1].innerText = "/year";
        document.getElementsByClassName("per")[2].innerText = "/month";
        document.getElementById("professional").innerText = "$100";
    }
    return true;
});