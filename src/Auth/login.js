import React, { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { auth, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import "../Css/login.css";

const Login = () => {
    const [isRightPanelActive, setIsRightPanelActive] = useState(false);
    useEffect(() => {
        if(window.location.pathname=="/auth/signin"){
            setIsRightPanelActive(false);
            navigate("/auth/signin");
        }
        if(window.location.pathname=="/auth/signup"){
       
            setIsRightPanelActive(true);
            navigate("/auth/signup"); 
        }
   
      }, []);
    const navigate = useNavigate();
  

    const handleSignUpClick = () => {
        setIsRightPanelActive(true);
        navigate("/auth/signup");
    };

    const handleSignInClick = () => {
        setIsRightPanelActive(false);
        navigate("/auth/signin");
    };

    // Google Authentication
    const handleGoogleAuth = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            console.log("Google Auth Success", result);
        } catch (error) {
            console.error("Google Auth Error", error.message);
        }
    };

    // Facebook Authentication
    const handleFacebookAuth = async () => {
        const provider = new FacebookAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            console.log("Facebook Auth Success", result);
        } catch (error) {
            console.error("Facebook Auth Error", error.message);
        }
    };

    // Twitter Authentication
    const handleTwitterAuth = async () => {
        const provider = new TwitterAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            console.log("Twitter Auth Success", result);
        } catch (error) {
            console.error("Twitter Auth Error", error.message);
        }
    };
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
        const passwordField = document.getElementById("password");
        passwordField.type = passwordVisible ? "password" : "text";  // Toggle between password and text input type
    };

    return (
        <div className="login-page">
            <div className={`container ${isRightPanelActive ? "right-panel-active" : ""}`} id="container">
                {/* Sign Up Form */}
                <div className="form-container sign-up-container">
                    <form action="#">
                        <h1>Create Account</h1>
                        <div className="social-container">
                            <a onClick={handleFacebookAuth} className="social">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a onClick={handleGoogleAuth} className="social">
                                <i className="fab fa-google-plus-g"></i>
                            </a>
                            <a onClick={handleTwitterAuth} className="social">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </div>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name" className="mc_input" />
                        <input type="email" placeholder="Email" className="mc_input" />
                        <input type="tel" placeholder="Mobile" className="mc_input" />
                        <div className="password-container" >
                            <input
                                type={passwordVisible ? "text" : "password"}
                                placeholder="Password"
                                className="mc_input"
                                id="password"
                            />
                            <i
                                className={`fas ${passwordVisible ? "fa-eye-slash" : "fa-eye"}`}
                                id="togglePassword"
                                onClick={togglePasswordVisibility}
                            ></i>
                        </div>


                        <button type="button" className="mc-btn">Sign Up</button>
                    </form>
                </div>

                {/* Sign In Form */}
                <div className="form-container sign-in-container">
                    <form action="#">
                        <h1>Sign in</h1>
                        <div className="social-container">
                            <a onClick={handleFacebookAuth} className="social">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a onClick={handleGoogleAuth} className="social">
                                <i className="fab fa-google-plus-g"></i>
                            </a>
                            <a onClick={handleTwitterAuth} className="social">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </div>
                        <span>or use your account</span>
                        <input type="email" placeholder="Email" className="mc_input" />
                        <div className="password-container" >
                            <input
                                type={passwordVisible ? "text" : "password"}
                                placeholder="Password"
                                className="mc_input"
                                id="password"
                            />
                            <i
                                className={`fas ${passwordVisible ? "fa-eye-slash" : "fa-eye"}`}
                                id="togglePassword"
                                onClick={togglePasswordVisibility}
                            ></i>
                        </div>
                        <a href="#">Forgot your password?</a>
                        <button type="button" className="mc-btn">Sign In</button>
                    </form>
                </div>

                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>Welcome back! Let’s get you signed in</p>
                            <button className="mc-btn ghost" onClick={handleSignInClick}>Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Set up your account and embark on your journey.</p>
                            <button className="mc-btn ghost" onClick={handleSignUpClick}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
