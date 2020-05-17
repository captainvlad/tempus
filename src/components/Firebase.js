import Rebase from 're-base';
import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyB0sduiPMJ14RFwqKtj8XhJ8bRzJTUoGbA",
    authDomain: "tempus-743d9.firebaseapp.com",
    databaseURL: "https://tempus-743d9.firebaseio.com",
    projectId: "tempus-743d9",
    storageBucket: "tempus-743d9.appspot.com",
    messagingSenderId: "1047254630305",
    appId: "1:1047254630305:web:c45e8d5c1ff3af423dd5e0",
    measurementId: "G-YVRK97BJWB"
};

const app = firebase.initializeApp(firebaseConfig)
const base = Rebase.createClass(app.database())

export {base}