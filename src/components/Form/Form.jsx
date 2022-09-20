import React, { useEffect } from 'react'
import { FaBirthdayCake, FaDoorOpen, FaEnvelope, FaLock, FaUser } from 'react-icons/fa'
import './Form.css'
import { useForm } from "react-hook-form";


const Form = ({ sendUser, exitForm, userSelected}) => {
  const { register, handleSubmit, reset, formState: { errors }} = useForm();
  const resetForm = () => {
    setTimeout(() =>{
      reset({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        birthday: ''
      })
    }, 100)
  }
  useEffect(()=>{
    if(userSelected){
      reset(userSelected)
    }
    else{
      resetForm();
    }
  },[userSelected])

  return (
    <>
    <form className='Form_user' onSubmit={handleSubmit(sendUser)}>
        <div><FaUser /><input type="text" placeholder='First Name' {...register('first_name')} required autoComplete="off" /></div>
        <div><FaUser /><input type="text" placeholder='Last Name' {...register('last_name')} required autoComplete="off" /></div>
        <div><FaEnvelope /> <input type="email" placeholder='Email' {...register('email')} required autoComplete="off" /></div>
        <div><FaLock /><input type="text" placeholder='Password' {...register('password')} required autoComplete="off" /></div>
        <div><FaBirthdayCake /><input type="date" {...register('birthday')}/></div>
        <button type='submit' onClick={resetForm}>{userSelected?('Edit'):('Register')}</button>
        <span className='close_form' onClick={exitForm}><FaDoorOpen /></span>
    </form>
    </>
  )
}

export default Form