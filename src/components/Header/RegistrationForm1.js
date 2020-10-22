import React, {useState} from 'react';
import { useEffect } from 'react';
import * as yup from "yup"
import axios from "axios"

function RegistrationForm(props) {

  const [regist , setRegist] = useState({
    email : "",
    password : ""
})
const [errors, setErrors] = useState({
    email:""

}) 

const [isDisabled, setIsDisabled] = useState(true)

const validateChange = e =>{
    yup
    .reach(schema, e.target.email)
    .validate(e.target.name=== "email" ? e.target.name: e.target.value)
    .then(valid => {
        setErrors({
            ...errors,
            [e.target.email]:""
        })
    })
    .catch(err =>{
        setErrors({
            ...errors,
            [e.target.email]: err.errors[0]
        })
    })
}

    const inputChange = e => {
        const newRegistData ={
            ...regist,
            [e.target.name]:
            e.target.value
        }
        validateChange(e);
        setRegist(newRegistData)
    }

    const schema = yup.object().shape({
        email: yup.string().email("must be valid email").required("email is required"),
       
    })

    useEffect(()=>{
        schema.isValid(regist).then(valid => setIsDisabled(!valid))
    }, [regist])

    const validate = e => {
        e.persist()
        yup.reach(schema, e.target.email).validate(e.target.value)
        .then(valid => setErrors({...errors, [e.target.email]: ""}))
        .catch(err => setErrors({...errors, [e.target.email]: err.errors[0]}))
    }




const handleChange = (e) => {
    const {name , value} = e.target   
    setRegist(prevState => ({
        ...prevState,
        [name] : value
    }))
}
const [post, setpost]= useState([])

const formSubmit = e => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/users", regist)
      .then(res => {
        setRegist(res.data); // get just the form data from the REST api
        console.log("success", post);
        // reset form if successful
        setRegist({
          email: "",
          
        });
      })
      .catch(err => console.log(err.response));
  };
 


  return(
        <div className="card col-12 col-lg-3 login-card mt-2 hv-center" style={{left:"500px", padding:"1px"}}>
            <form style={{backgroundColor:"#1fc2ba"}} onSubmit={formSubmit}>
                <div className="form-group text-left">
                <label htmlFor="exampleInputEmail1">Create Registration Using Email</label>
                <input type="email" 
                       className="form-control" 
                       id="email" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter email"
                       name="email"
                       value={regist.email}
                       onChange={inputChange}

                />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"
                        name="password"
                        value="regist.password"
                        onChange={inputChange}
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Confirm Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="confirmPassword" 
                        placeholder="Confirm Password"
                        name="confirm_password"
                        value="regist.password"
                        onChange={inputChange}
                        
                    />
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary" style={{backgroundColor:"#1fc2ba", borderColor:"black"}}
                    disabled={isDisabled}
                >
                    Register
                </button>
            </form>
        </div>
    )
}
export default RegistrationForm