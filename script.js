// Tu configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAoJdeT736PxYZAZeVuDGIJfugkMgFxx4E",
    authDomain: "sin-fb.firebaseapp.com",
    projectId: "sin-fb",
    storageBucket: "sin-fb.appspot.com",
    messagingSenderId: "279774903950",
    appId: "1:279774903950:web:899adb720e51bfeed693df",
    measurementId: "G-W6SDCJ14YT"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

let models = [];

function addModel() {
    // ... (resto de tu código existente)
}

function displayModels() {
    // ... (resto de tu código existente)
}

function signInWithGoogle() {
    firebase.auth().signInWithPopup(provider)
        .then((result) => {
            // El usuario ha iniciado sesión con Google
            const user = result.user;
            console.log("Usuario autenticado:", user);
        })
        .catch((error) => {
            // Manejar errores
            console.error("Error al iniciar sesión con Google:", error);
        });
}

function editModel(index) {
    // ... (resto de tu código existente)
}

function deleteModel(index) {
    // ... (resto de tu código existente)
}

function clearForm() {
    // ... (resto de tu código existente)
}

// Llama a displayModels() al cargar la página para mostrar la lista inicial
document.addEventListener('DOMContentLoaded', displayModels);
