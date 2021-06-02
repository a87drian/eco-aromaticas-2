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
        <div classNameName="container-fluid">
            <div classNameName="row">

            <div classNameName="col"></div>
            <form>
             <div className="mb-3">
               <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
               <input type="email" className="form-control" id="exampleInputEmail1"  onChange={(e) => setEmail(e.target.value)}  aria-describedby="emailHelp" />
             </div>
             <div className="mb-3">
               <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
               <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)} />
             </div>
                <button type="submit" className="btn btn-primary" onClick={submit}>LogIn</button>
            </form>
            <div classNameName="col"></div>
            </div>
            
        </div>




    )
}
