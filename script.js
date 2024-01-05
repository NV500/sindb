
// Your Firebase configuration
const firebaseConfig = {
    ,
    authDomain: "sin-fb.firebaseapp.com",
    projectId: "sin-fb",
    storageBucket: "sin-fb.appspot.com",
    messagingSenderId: "279774903950",
    appId: "1:279774903950:web:899adb720e51bfeed693df",
    measurementId: "G-W6SDCJ14YT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

let models = [];

function addModel() {
    // ... (rest of your existing code)
}

function displayModels() {
    // ... (rest of your existing code)
}

function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
        .then((result) => {
            // The user has signed in with Google
            const user = result.user;
            console.log(user);
        })
        .catch((error) => {
            // Handle errors
            console.error(error);
        });
}

// ... (rest of your existing code)
