console.log("Hello Console")
//document.write("<h1>Hello from Extrenal JS</h1>")

function hello() {
    var fname=document.getElementById("fname");
    //document.write("<h1>Hello "fname.value+"</h1>");
    document.getElementById("msg").innerHTML="<b>Hello "+fname.value+"</b>";
}

function validate(){
    let fname=document.getElementById("fname").value;
    let msg=document.getElementById("msg");
    if(fname.length==0){
        msg.style.color="red";
        msg.innerText="Invalid Name";
        return false;
    }else{
        msg.style.color= "green";
        msg.innerText="Hello"+fname;
        return false;
    }
function validateGender(){
    var a = 0, gender=document.getElementsByName("gender")
    for(i=0;i<gender.length;i++) {
    if(gender.item(i).checked == false) {
    a++;
    }
    }
    if(a == gender.length) {
    alert("Please select your gender");
    document.getElementById("gen").style.border = "2px solid red";
    return false;
    } else {
    document.getElementById("gen").style.border = "";
    }
}
}
