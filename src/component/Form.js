import React from 'react';
import {useFormik} from 'formik';


const initialValues={
  name:'',
  email:'',
  password:''
}
const onSubmit= values=>{
  console.log('form values', formik.console.value)

}
const validate= values=>{
  let error={}
  if(!values.name){
    error.name='required'
  }

  if(!values.email){
    error.email='required'
  }
  if(!values.password){
    error.password='required'
  }
return error
}



 function Form(){
    const formik = useFormik({
        initialValues,
        onSubmit,  
        validate
      })
      

    return(
        <>
        <form onSubmit={formik.handleSubmit}>
        <div>
            <label>User Name</label>
             {formik.error.name ? <div>{formik.error.name}</div> : null}
       <input type='text' id='name' name='name'  onChange={formik.handleChange} value={formik.values.name} />
      
        </div>

        <div>
      <label>User Email</label>
 <input type="text" id="email" name="email" onChange={formik.handleChange} value={formik.values.email} />
  {/* {formik.error.email ? <div> {formik.error.email} </div> : null} */}
  </div>
         <div>
         <label>User Password</label>
    <input type="text" id="password" name="Password" onChange={formik.handleChange} value={formik.values.password} />
    {/* {formik.error.password ? <div>{formik.error.password}</div> : null} */}
     </div>
     <button type="submit">Submit</button>
        </form>
        
      
  </>
    )
}
export default Form;