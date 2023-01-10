import React, { useState } from 'react';
// import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../components/Login.css';

function Login(){

    const[username,setusername] = useState('')
    const[password,setpassword] = useState('')

    function validate() {

        if(username=='javascript' && password=='react') {
            alert('Login Successfull');
        } else {
            alert('Login is failed')
        }
    }

    return <div>
        <div className='row justify-content-center'>
            <div className='col-md-4'>
                <h1>User Authentication</h1>
                <form onSubmit={validate}>
                    <input type="text" placeholder='username' className='form-control' value={username} onChange={(e)=>{setusername(e.target.value)}}/>
                    <input type="text" placeholder='password' className='form-control' value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
                    <input type="submit" className='btn btn-primary'></input>
                </form>
            </div>
        </div>
    </div>

}

export default Login;