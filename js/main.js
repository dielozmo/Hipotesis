// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAAp8d9vXXvVjJ6dgfJmtabegqAJmbv8jU",
    authDomain: "registro-baad6.firebaseapp.com",
    databaseURL: "https://registro-baad6.firebaseio.com",
    projectId: "registro-baad6",
    storageBucket: "registro-baad6.appspot.com",
    messagingSenderId: "367254881754",
    appId: "1:367254881754:web:85478bb36a27ed20a96ce3",
    measurementId: "G-R75W8NVFR7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var firestore = firebase.firestore();

// Listen for form submit
document.getElementById('registerForm').addEventListener('submit', submitForm);

const db = firestore.collection("registerData");

// Submit form
function submitForm(e) {
    e.preventDefault();

    // Get values
    var tutorName = getInputVal('tutorName');
    var studentName = getInputVal('studentName');
    var studentAge = getInputVal('studentAge');
    var knowledge = getInputVal('knowledge');
    var contactMail = getInputVal('contactMail');

    // Save message
    saveMessage(tutorName, studentName, studentAge, knowledge, contactMail);

    // Clean values
    cleanInputVal();

    // Trigger Modal
    $("#exampleModalCenter").modal();
}

// Function to get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Runction to clean input value
function cleanInputVal() {
    document.getElementById('tutorName').value = "";
    document.getElementById('studentName').value = "";
    document.getElementById('studentAge').value = "";
    document.getElementById('knowledge').value = "";
    document.getElementById('contactMail').value = "";
}

// Save message to firebase
function saveMessage(tutorName, studentName, studentAge, knowledge, contactMail) {
    db.doc().set({
        tutorName: tutorName,
        studentName: studentName,
        studentAge: studentAge,
        knowledge: knowledge,
        contactMail: contactMail
    })
}