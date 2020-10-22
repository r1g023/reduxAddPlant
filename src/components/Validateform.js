 function Validateform(values){
  const errors = {}

  if(!values.fullname.trim()){
    errors.fullname = "fullname required"
  }
 

  if(!values.password){
    errors.password = 'password is required'
  } else if (values.password.lenght < 6){
    errors.password = 'password needs to be 6 characters or more'
  }

  return errors

}
export default Validateform