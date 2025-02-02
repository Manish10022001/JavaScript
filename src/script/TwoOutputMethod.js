function deleteClickOnAlert(){
    alert("Delete \n Record will be deleted ")  
}

//flag is simple memory reference in which we store confirm
// it is used to confirm whether to proced or not
//flag has true or false
function deleteClickOnConfirm(){
    // confirm("Delete \nRecord will be deleted");
    flag = confirm("Delete\nRecord will be deleted");
    if(flag == true){
        alert("Record Deleted..");
    } else{
        alert("You Canceled..");
    }
}

function deleteClickOnDocumentWrite(){
    // confirm("Delete \nRecord will be deleted");
    flag = confirm("Delete\nRecord will be deleted");
    if(flag == true){
        document.write("<b><i><font color=red>Record Deleted..</font></i></b>");
    } else{
        alert("You Canceled..");
    }
}

function deleteClickOnInnerText(){
    flag = confirm("Delete\nRecord will be deleted");
    if(flag == true){
        document.querySelector("h2").innerText="Delete Confirmed";
        document.querySelector("p").innerText="Record Deleted Successfully"
    } else{
        alert("You Canceled..")
    }
}

function deleteClickOnInnerHTML(){
    flag = confirm("Delete\nRecord will be deleted");
    if(flag == true){
        document.querySelector("h2").innerHTML="<b><font color=red>Delete Confirmed</font></b>";
        document.querySelector("p").innerHTML="<i><font color=red>Record Deleted Successfully</font></i>"
    } else{
        alert("You Canceled..")
    }
}

//outerHTML will replace one markup with another markup(tag)
function deleteClickOnOuterHTML(){
    flag = confirm("Delete\nRecord will be deleted");
    if(flag == true){
        document.querySelector("p").outerHTML="<h2>Delete Confirmed</h2>";
        //we replace <P> with <h2>
    } else{
        alert("You Canceled..")
    }
}