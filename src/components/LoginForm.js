 import React, {useState} from 'react';
 function LoginForm() {

  const [login, setLogin] =  useState({
    userName:"",
    password:""

  })


return(
  
  <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
    <form>
    <div className="form-group text-left">
                <label htmlFor="exampleInputEmail1">UserLogin </label>
                <input type="text" 
                       className="form-control" 
                       id="userlogin" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter userName"
                />
               
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"
                    />
                </div>






    </form>
    </div>
    

  
  






)







 }
 export default LoginForm