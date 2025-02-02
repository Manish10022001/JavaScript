// function bodyLoad(){
//     string = location.search;
//     username = string.substring(string.indexOf("=")+1);
//     document.querySelector("span").innerHTML=username;
// }

// function promptBodyLoad(){
//     username = prompt("Enter Your Name: ","Enter your name");
//     age = prompt("Enter Your Age: ","your age");
//     if(username == ""){
//         alert("Name can't be empty");
//     } else if(username == null){
//         alert("You Canceled");
//     } else{
//         document.querySelector("span").innerHTML= username +"<br>"+"your age: "+age;
//     }
// }
function promptBodyload(){
    username = prompt("Enter User Name");
    age = prompt("Enter Age");
    if(username=="") {
    alert("Name can't be empty");
    } else if(username==null) {
    alert("You Canceled");
    } else {
    document.querySelector("span").innerHTML = username + "<br>" + "Your Age :" + 
   age;
    }
}