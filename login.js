//extract all fields on the basis of id
let marketNode=document.getElementById('market');
let fnameNode=document.getElementById('fname');
let mobileNode=document.getElementById('mobile');
let emailNode=document.getElementById('emailid');
let passNode=document.getElementById('pass');


let errorNode1=document.getElementById('error1');
let errorNode2=document.getElementById('error2');
let errorNode3=document.getElementById('error3');
let errorNode4=document.getElementById('error4');
let erroNode5=document.getElementById('error5');

const errorBorder="2px solid red";
const successBorder="2px solid green";


function validateForm(){
    
    let s1 = validate1();
    let s2 = validate2();
    let s3 = validate3();
    let s4 = validate4();
    let s5 = validate5();

    return (s1 &&s2 &&s3 && s4 && s5 );
 }

function validate1(){
    let mname=marketNode.value; 
    errorNode1.innerHTML="";  
    if(mname===''){
        errorNode1.innerHTML="First name is required";
        marketNode.style.border=errorBorder;
        return false;

    }
    else{
        marketNode.style.border=successBorder;
        return true;
    }
}

function validate2(){
    let fname=fnameNode.value; 
    errorNode2.innerHTML="";  
    if(fname===''){
        errorNode2.innerHTML="name is required";
        fnameNode.style.border=errorBorder;
        return false;

    }
    else{
        fnameNode.style.border=successBorder;
        return true;
    }
}


function validate3(){
    let mobile = mobileNode.value;
    let regExp = new RegExp("^[0-9]{10}$");
    errorNode3.innerHTML="";

    if(mobile===''){
        errorNode3.innerHTML="mobile  entry is reuqired";
        mobileNode.style.border=errorBorder;
        return false;
    }

    else if(regExp.test(mobile)==false){
        errorNode3.innerHTML="please enter valid mobile number";
        mobileNode.style.border=errorBorder;
        return false;
    }
    else{
        mobileNode.style.border=successBorder;
        return true;
    }
}


function validate4(){
    let email=emailNode.value;  // @vinapatil
    errorNode4.innerHTML="";  
    let ss1=email.substring(0,email.indexOf('@'));
    let ss2=email.substring(email.indexOf('@')+1);
   // let index=email.indexOf('@');
   // if(index==0 || index===email.length-1)
    console.log(ss1);
    console.log(ss2);
    if(email===''){
        errorNode4.innerHTML="Email Id is required";
        emailNode.style.border=errorBorder;
        return false;

    }
    else if(!email.includes('@')){
        errorNode4.innerHTML="Email Id should contain @";
        emailNode.style.border=errorBorder;
        return false;

    }
    else if (ss1==='' || ss2===''){
        errorNode4.innerHTML="Invalid Email id";
        emailNode.style.border=errorBorder;
        return false;

    }
    else{
        emailNode.style.border=successBorder;
        return true;

    }
}


function validate5(){
    let password = passNode.value;
    // let regExp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$");
    let regExp= new RegExp("^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#\$%\^&\*])(?=.{6,15})");
    erroNode5.innerHTML="";
    
    if(password===''){
        erroNode5.innerHTML="Password is required";
        passNode.style.border=errorBorder;
        return false;
    }

    else if(regExp.test(password)==false){
        erroNode5.innerHTML="please should contain atleast one digit small letter& capital letter.password";
        passNode.style.border=errorBorder;
        return false;
    }
    else{
        passNode.style.border=successBorder;
        return true;
    }
}


$(document).ready(function(){
    $("div").slideUp(0).slideDown(1000);

})
