import React , {useState} from 'react';
import 'firebase/auth';
import './LoginButton.css';
import { getFirebase } from '../Firebase';

export const LoginButton = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState('');
    
    const submit = () => {
        const fire = getFirebase();
        console.log(fire)
        // var provider = fire.auth.GoogleAuthProvider();
       // fire.auth().createUserWithEmailAndPassword(email,password)
        fire.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            setUser(userCredential.user)
            console.log(user)

        })
        
    }
    const logout = async () => {
        await getFirebase().auth().signOut();
    }
    return (
        <div className="container-fluid">
            <div className="row">

            <div className="col"></div>
            <form>
             <div class="mb-3">
               <label for="exampleInputEmail1" class="form-label">Email address</label>
               <input type="email" class="form-control" id="exampleInputEmail1"  onChange={(e) => setEmail(e.target.value)}  aria-describedby="emailHelp" />
             </div>
             <div class="mb-3">
               <label for="exampleInputPassword1" class="form-label">Password</label>
               <input type="password" class="form-control" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)} />
             </div>
                <button type="submit" class="btn btn-primary" onClick={submit}>LogIn</button>
            </form>
            <div className="col"></div>
            </div>
            
        </div>




    )
}
