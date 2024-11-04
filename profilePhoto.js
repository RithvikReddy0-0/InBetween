var value = localStorage.getItem('myVariable');


function changePhoto(){
    if(value==1){
    document.getElementById("profileTag").innerHTML="@Siddhartha46";
    document.getElementById("profileName").innerHTML="Siddhartha Ravva";
    document.getElementById("profile-icon").src="images/sid3.jpg";

}else if(value==2){
    document.getElementById("profileTag").innerHTML="@Yaswanth45";
    document.getElementById("profileName").innerHTML="Yaswanth Kumar";
    document.getElementById("profile-icon").src="images/yash8.jpg";

}else if(value==3){
    document.getElementById("profileTag").innerHTML="@Ritvhik64";
    document.getElementById("profileName").innerHTML="Rithvik Reddy";
    document.getElementById("profile-icon").src="images/rit3.jpg";

}

}