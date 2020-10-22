import React, {useState} from 'react'
import FormSignup from "./FormSignup"
import FormSuccess from "./FormSuccess"
import "./Form.css"

const Form = () =>{
  const [isSubmitted, setIsSubmitted] = useState(false)

  function submitForm() {
    setIsSubmitted(true)
  }



return(
<>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='https://www.wearefound.com/wp-content/uploads/2017/01/vegetable-garden-celery-plants.jpg' alt='plant' />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>

)



}
export default Form