const changeChoice = document.getElementById('click-switch');
let choice = "monthly";

changeChoice.addEventListener("click",()=>{
    console.log(document.getElementsByClassName("per"));
    if(choice === "annually"){
        choice = "monthly";
        
        document.getElementsByClassName("per")[0].innerText = "/month";
        document.getElementById("professional").innerHTML = "$10<span class='per'>/month</span>";
        document.getElementById("basic").innerHTML = "$5<span class='per'>/month</span>";
    }
    else{
        choice = "annually";
        document.getElementsByClassName("per")[0].innerText = "/year";
        document.getElementById("professional").innerHTML = "$100<span class='per'>/year</span>";
        document.getElementById("basic").innerHTML = "$55<span class='per'>/year</span>";
    }
});