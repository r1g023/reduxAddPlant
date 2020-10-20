
 import React, {useState} from 'react';
 function LoginForm() {
import React from "react";

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
      <div className="form-inner">
        <h2>Login</h2>
        {/*Error! */}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">password</label>
          <input type="password" name="password" id="password" />
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
