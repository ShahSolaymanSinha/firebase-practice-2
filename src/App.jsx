import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import "./App.css";
import auth from "./firebase/firebase.config";

function App() {
    const provider = new GoogleAuthProvider();

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                console.log("Error Code:", errorCode);
                console.log("Error Message:", errorMessage);
            });
    };

    const handleGoogle = () => {
        signInWithPopup(auth, provider)
            .then(async (result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
                console.log(user);
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    };
    return (
        <div>
            <div className="login-form-container">
                <h2>Login</h2>
                <form onSubmit={handleSubmit} className="login-form" action="#" method="POST">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="Enter your password" />
                    </div>
                    <button type="submit" className="btn">
                        Login
                    </button>
                </form>
                <p className="signup-link">
                    Sign In with google <button onClick={handleGoogle}>Sign up</button>
                </p>
            </div>
        </div>
    );
}

export default App;
