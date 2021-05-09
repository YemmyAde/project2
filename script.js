
let messagePass = document.getElementById("displayMessage");
let message = document.getElementById("message");
let emptyMessage = document.getElementById("emptyMessage")

messagePass.innerHTML = `"Message appears here"`;

function buttonClicked(){

 messagePass.innerHTML = message.value;
   
//  message.value= " ";

 if(message.value === "" || message.value == "null"){

     emptyMessage.innerHTML = "Cant Submit Empty message";
     emptyMessage.style.display = "block";
     messagePass.innerHTML = `"Message appears here"`;
     return false; // to cancel submit
 }
    else{
    emptyMessage.style.display = "none";
}

};