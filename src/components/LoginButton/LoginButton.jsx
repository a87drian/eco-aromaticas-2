import React , {useState, useContext} from 'react';
import 'firebase/auth';
import './LoginButton.css';
import { getFirebase } from '../Firebase';
import {CartContext} from "../Context/Context"

export const LoginButton = () => {

    const [userSet, getUser] = useContext(CartContext)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState('');
    
    const submit = (e) => {
        e.preventDefault()
        console.log(user);
        if(user.email === '') {
            const fire = getFirebase();
            console.log(fire)
            // var provider = fire.auth.GoogleAuthProvider();
        // fire.auth().createUserWithEmailAndPassword(email,password)
            fire.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                console.log(userCredential)
                console.log(getUser)
                setUser(userCredential.user)
                userSet(user);
                
                
        })
        }else {
            logout();
       
        }
        
        
    }
    const logout = async () => {
        console.log("logout")
        await getFirebase().auth().signOut().then(() => {
            setUser('')
        }
        );
    }
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">

            
            <form onSubmit={submit}>
             <div className="mb-3">
               <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
               <input type="email" className="form-control" id="exampleInputEmail1"  onChange={(e) => setEmail(e.target.value)}  aria-describedby="emailHelp" />
             </div>
             <div className="mb-3">
               <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
               <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)} />
             </div>
                <button type="submit" className="btn btn-primary"> 
                {user.email === '' &&
                    <p>Log In</p>
                }
                {user.email !== '' &&
                    <p>Log Out</p>

                }
                
                </button>
            </form>
            
            </div>
            
        </div>




    )
}
