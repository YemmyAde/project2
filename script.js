
let messagePass = document.getElementById("displayMessage");
let message = document.getElementById("message");
let emptyMessage = document.getElementById("emptyMessage")

messagePass.innerHTML = `"Message appears here"`;

function buttonClicked(){

 messagePass.innerHTML = message.value;
 
 if(message.value === "" || message.value == "null"){

         emptyMessage.innerHTML = "Cant Submit Empty message";
         emptyMessage.style.display = "block";
         messagePass.innerHTML = `"Message appears here"`;
         console.log("okay")
        //  return false;
     }


 setTimeout( 'displayNone()', 2000 );


   
//  message.value= "";

//  if(message.value === "" || message.value == "null"){

//      emptyMessage.innerHTML = "Cant Submit Empty message";
//      emptyMessage.style.display = "block";
//      messagePass.innerHTML = `"Message appears here"`;
//      return false;
//  }
//     else{
//     emptyMessage.style.display = "none";
// }

};

function displayNone(){
     if(message.value === "" || message.value == "null"){

     emptyMessage.style.display = "none";
     messagePass.innerHTML = `"Message appears here"`;
     console.log("haaaa")
     return false;""
 
}};