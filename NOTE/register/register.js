//Import the functions you need from the SDKs you need
//import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";
//import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyD0pkf-ezxFOFXeN0iZ8CGIp05tF2Ffrho",
  authDomain: "note-d8b52.firebaseapp.com",
  databaseURL: "https://note-d8b52-default-rtdb.firebaseio.com",
  projectId: "note-d8b52",
  storageBucket: "note-d8b52.appspot.com",
  messagingSenderId: "932533752470",
  appId: "1:932533752470:web:0820c142640ce94a2e68b7",
  measurementId: "G-GFYXW7NC1H"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var register = function(){
let account = document.getElementById("account").value;
let pass = document.getElementById("password").value;
if (account == "") {
	alert("Please enter user's account!");
} else if (pass  == "") {
	alert("Please enter user's password!");
} else {
	if(account != null){
		console.log("working...");
		firebase.auth().createUserWithEmailAndPassword(account, pass).then(function(){
			//set account uid
			//let emailUser = firebase.database().ref("/").child("user").child(account.replace(/\@|\./g,"")+pass);//.child(account.replace(/\@|\./g,"")+pass);;
			//emailUser.set({
			//	uid:user.uid
			//});
			if(confirm("Register successfully, direct to log in ?")){
				window.location.href="../login/login.html";
			} else{
				document.getElementById('account').value = "";
				document.getElementById('password').value = "";
			}
		}).catch(function(error) {
			alert("Error : "+error.code+"\nMessage : "+error.message);
			document.getElementById('account').value = "";
			document.getElementById('password').value = "";
		});
	}
}
}