const changeChoice = document.getElementById('click-switch');
let choice = "monthly";

changeChoice.onclick = ()=>{
    if(choice === "annually"){
        choice = "monthly";
        document.getElementById("basic").innerText = "$5"
        document.getElementById("professional").innerText = "$10";
    }
    else{
        choice = "annually";
        document.getElementById("basic").innerText = "$55";
        document.getElementById("professional").innerText = "$100";
    }
    return true;
}