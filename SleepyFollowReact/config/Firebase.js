import * as firebase from 'firebase';
export default class Firebase {
    constructor() {
        return firebase.initializeApp({
            apiKey: "AIzaSyDOJqtfwLig0V99f-m5MnifWWodGyc17no",
            authDomain: "sleepyfollowreact.firebaseapp.com",
            databaseURL: "https://sleepyfollowreact.firebaseio.com",
            projectId: "sleepyfollowreact",
            // storageBucket: "",
            // messagingSenderId: "905963269115"
        });
    }
}
