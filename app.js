var ranA = document.getElementById("ranA");
var ranB = document.getElementById("ranB");
var altoir = document.getElementById("altoir");
// les varieble de  l'insertion de utilisateur
var APB = document.getElementById("APB");
var ASB = document.getElementById("ASB");
var AMB = document.getElementById("AMB");
var ADB = document.getElementById("ADB");
var msg = document.getElementById("msg");
var verifierbtn = document.getElementById("verifier");
// les varieble de solustion
var APBC = document.getElementById("APBC");
var ASBC = document.getElementById("ASBC");
var AMBC = document.getElementById("AMBC");
var ADBC= document.getElementById("ADBC");
var okbtn = document.getElementById("okbtn");

altoir.onclick =  function alea() {
   ranA.value = Math.floor(Math.random() * (100 - (-100))) + (-100); 
   ranB.value = Math.floor(Math.random() * (100 - (-100))) + (-100); 
}


verifierbtn.onclick = function Verifier(){
   
    if(APB.value == "" || isNaN(APB.value)){
        APB.focus(); msg.innerText="saisi le numero";
    }                                                      
    if(ASB.value == "" || isNaN(ASB.value)){
        ASB.focus(); msg.innerText="saisi le numero";
    }
    if(AMB.value == "" || isNaN(AMB.value)){
        AMB.focus(); msg.innerText="saisi le numero";
    }
    if(ADB.value == "" || isNaN(ADB.value)){
        ADB.focus(); msg.innerText="saisi le numero";
    }
}


okbtn.onclick = function Solution() {
   
    APBC.value=ranA.value + ranB.value;
    ASBC.value=ranA.value - ranB.value;
    AMBC.value=ranA.value * ranB.value;
    ADBC.value=ranA.value / ranB.value;
}