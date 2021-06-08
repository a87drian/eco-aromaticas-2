import React , {useState, useContext} from 'react';
import 'firebase/auth';
import './LoginButton.css';
import { getFirebase } from '../Firebase';
import {CartContext} from "../Context/Context"

export const LoginButton = () => {

    const [items, setItems, setUser,user, products, productsCount, addProduct, delProduct, getGrandTotal]
     = useContext(CartContext);


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    
    const submit = (e) => {
        e.preventDefault()
        console.log(user);
        const fire = getFirebase();
        console.log(fire)

        fire.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
                console.log(userCredential)
                console.log(setUser)
                setUser(userCredential.user)
                
                
                
        })
        
        
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
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
            
            </div>
            
        </div>




    )
}
