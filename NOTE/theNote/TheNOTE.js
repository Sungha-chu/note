// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
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

function mod(){
	table.rows[selectedRowIndexs].cells[0].innerHTML = document.getElementById("who").value;
	table.rows[selectedRowIndexs].cells[1].innerHTML = document.getElementById("where").value;
	table.rows[selectedRowIndexs].cells[2].innerHTML = document.getElementById("event").value;
	table.rows[selectedRowIndexs].cells[3].innerHTML = document.getElementById("time").value;
}
function add(){
	let row = document.createElement('tr');
	let row_who = document.createElement('td');
	let row_where = document.createElement('td');
	let row_event = document.createElement('td');
	let row_time = document.createElement('td');
	
	let time = document.getElementById('date').value;
	let name = document.getElementById('name').value;
	row_who = name;
	row_time = time;
	
	row_where = document.getElementById('location').value;
	row_event = document.getElementById('event').value;
	
	
	
	/*set method
	let emailUser = firebase.database().ref("user/").child(name).child(time);
	//collection should be global var
	emailUser.set({
			Name: row_who,
			Location: row_where,
			Event: row_event
	});*/
	//push method
	let emailUser = firebase.database().ref("user/").child(name);
	//collection should be global var
	emailUser.set({
			Name: row_who,
			Location: row_where,
			Event: row_event
	});
	row.appendChild(row_who.innerHTML);
	row.appendChild(row_where.innerHTML);
	row.appendChild(row_event.innerHTML);
	row.appendChild(row_time.innerHTML);
	table.appendChild(row);
}
function del(){
	document.getElementById('table').deleteRow(selectedRowIndexs);
}