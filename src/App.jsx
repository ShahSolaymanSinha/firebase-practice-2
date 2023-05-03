import "./App.css";

function App() {
    return (
        <div>
            <div className="login-form-container">
                <h2>Login</h2>
                <form className="login-form" action="#" method="POST">
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
                    {"Don't"} have an account? <a href="#">Sign up</a>
                </p>
            </div>
        </div>
    );
}

export default App;
