/*
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
 *
 * Copyright 2018 Lasucodes and/or its affiliates. All rights reserved.
 *
 *  Contributor(s):
 *  Azeez Lukman
 *  Author :
 *  Azeez Lukman
 *  Date : August 15 2018
 */


document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault()
});

function validate() {
	checkbox = document.getElementById("checkbox");
	if (checkbox.checked == true) {
		pickGroup();
	}
	else{
		alert("Please Ensure you agree to Terms and privacy-policy.");
	}
}

function pickGroup(){
	let randomNumber = Math.floor((Math.random()*5) + 1);
   console.log(randomNumber);

   if (randomNumber == 5) {
   	let pickedGroup = "Group5";
   	 console.log(pickedGroup);
   	pushID("table5");
   	document.getElementById("tablink5").click();
   }
   else if(randomNumber == 4){
   	let pickedGroup = "Group4";
   	 console.log(pickedGroup);
   	 pushID("table4");
   	document.getElementById("tablink4").click();
   }
   else if(randomNumber == 3){
   	let pickedGroup = "Group3";
   	pushID("table3");
   	document.getElementById("tablink3").click();
   }
   else if(randomNumber == 2){
   	let pickedGroup = "Group2";
   	 console.log(pickedGroup);
   	 pushID("table2");
   	 document.getElementById("tablink2").click();
   }
   else{
   	let pickedGroup = "Group1";
   	 pushID("table1");
   	document.getElementById("tablink1").click();
   }
  document.getElementById("form1").reset();
}

function pushID(tableID) {
	
	let name = document.getElementById('name').value;
   let email = document.getElementById('email').value;
   let phone = document.getElementById('phone').value;
   

    let table = document.getElementById(tableID);
    let row = table.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);

    cell1.innerHTML = name;
    cell2.innerHTML = phone;
    cell3.innerHTML = email;
    console.log(name);
    console.log(phone);
    console.log(email);
}

function openGroup(groupName) {
    var i;
    let tabcontent = document.getElementsByClassName("tabcontent");
    let tablinks = document.getElementsByClassName("tablinks");
  
    for (i = 0; i < tablinks.length; i++) {
        //Hides the tabcontent
        tabcontent[i].style.display = "none";
        //Makes the tablinks inactive
         tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
     event.currentTarget.className += " active";
    document.getElementById(groupName).style.display = "block";
    //displays the current tablink as active.
   
}

 //Get the element with id="defaultTab" and click on it
document.getElementById("defaultTab").click();


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
    
}

