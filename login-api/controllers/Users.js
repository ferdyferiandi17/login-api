import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";

const app = initializeApp({
    apiKey: "AIzaSyAHBFLKv2oVz9ehiTH3e5VeN0Bu6dy_MNU",
    authDomain: "capstone-login-530ea.firebaseapp.com",
    projectId: "capstone-login-530ea",
    storageBucket: "capstone-login-530ea.appspot.com",
    messagingSenderId: "74941639899",
    appId: "1:74941639899:web:f8adeb871504829e1670fe",
    measurementId: "G-3MECLGVG9V"
})

const auth = getAuth(app);

export const Register = async (req, res) => {
    const {  email, password, confPassword } = req.body;
    
    if (password !== confPassword) return res.status(400).json({ msg: "Password dan confirm Password tidak sama" });

    try {
        await createUserWithEmailAndPassword(
            auth,
            email,
            password
        )

        res.json({ msg: "register berhasil"})
    } catch (error) {
        res.status(500).json({ msg: error.code })
    }
}

export const Login = async (req, res) => {
    const { email ,password} = req.body

    try {
        const response = await signInWithEmailAndPassword(auth, email, password)
        res.json({ msg: "login berhasil", response : response.user });
    } catch (error) {
        res.status(500).json({ msg: error.code })
    }
}