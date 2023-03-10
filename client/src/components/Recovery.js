import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import avatar from '../assets/profile.png';
import styles from '../styles/Username.module.css';
import toast,{Toaster} from 'react-hot-toast';
import {useFormik} from 'formik'; // This library is use for validate user input data
import { passwordValidate } from "../helper/validate";
import { useAuthStore } from "../store/store";
import { generateOTP } from "../helper/helper";

export default function Recovery() {
  const [username] = useAuthStore(state => state.auth);
  const [OTP,setOTP] = useState();
  useEffect(()=>{
    generateOTP(username).then ((OTP) =>{
      if(OTP) return toast.success('OTP has send to your Email!!!');
      return toast.error('Problem while generating OTP')
    })
  },[username]);


  const formik = useFormik({
    initialValues : {
      password : ''

    },
    validate : passwordValidate,
    validateOnBlur : false,
    validateOnChange : false,
    onSubmit : async values => {
      console.log(values)
    },
  })
    return (
        <div className="container mx-auto">
          <Toaster position='top-center' reverseOrder = {false}></Toaster>
          <div className='flex justify-center items-center h-screen'>
            <div className={styles.glass}>
     
              <div className="title flex flex-col items-center">
                <h4 className='text-5xl font-bold'>Recovery</h4>
                <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
                  Enter OTP to Recover Password
                </span>
              </div>
    
              <form className='pt-20'>    
                  <div className="textbox flex flex-col items-center gap-6">
                    <div className="input text-center">
                        <span className="py-4 text-sm text-left text-gray-500">
                            Enter 6 digit OTP sent to your Email Address.
                        </span>
                        <input onChange ={(e) => setOTP(e.target.value)} className={styles.textbox} type="password" placeholder='OTP'/>
                    </div>
                      <button className={styles.btn} type='submit'>Recover</button>
                  </div>
    
                  <div className="text-center py-4">
                    <span className='text-gray-500'>Can't get OTP < button className='text-red-500'>Resend</button></span>
                  </div>
    
              </form>
    
            </div>
          </div>
        </div>
      ) 
}