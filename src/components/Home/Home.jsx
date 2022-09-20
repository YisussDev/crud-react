import React, { useState } from 'react'
import './Home.css'
import { FaPlus } from 'react-icons/fa';
import Cards from '../Cards/Cards';
import Form from '../Form/Form';
import useFetching from '../../functions/useFetching'
import Swal from 'sweetalert2'

const Home = () => {
    const [openForm, setOpenForm] = useState(false)
    const {fetchUser, fetchPost, fetchDelete, fetchUpdate, data, userSelected, resetUserSelected} = useFetching();
  const sendUser = data => {
    if(!userSelected){
      setOpenForm(false);
      fetchPost(data);
      Swal.fire({
        title: 'Done!',
        text: 'User created successfully',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
    }
    else {
      setOpenForm(false);
      fetchUpdate(userSelected.id, data)
      Swal.fire({
        title: 'Done!',
        text: 'User updated successfully',
        icon: 'success',
        confirmButtonText: 'Ok!'
      })
    }
  }
  const deleteUser = e => {
    const id = parseInt(e.target.getAttribute("iduser"))
    document.getElementById(id).classList.add('deleteAnimation')
    setTimeout(()=>{
      fetchDelete(id);
      Swal.fire({
        title: 'Done!',
        text: 'User deleted successfully',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
    },500)
  }
  const editUser = e => {
    const id = parseInt(e.target.getAttribute("iduser"))
    console.log(id);
    fetchUser(id);
    setOpenForm(true);
  }
  const createUser = () => {
    resetUserSelected();
    setOpenForm(true)
  }

  return (
    <div className='Home'>
      <div className={`Form ${openForm&&'show'}`}>
        <Form 
        sendUser={sendUser} 
        exitForm={()=>setOpenForm(false)}
        userSelected={userSelected}
        />
      </div>
      <div className='Home_actions'>
        <button onClick={createUser}><FaPlus /></button>
      </div>
      <div className='Home_users'>
        <h2>Users Registered</h2>
        <div className='Home_cards'>
          {
            data?.map(res =>{
             return <Cards 
              fname={res.first_name}
              sname={res.last_name}
              email={res.email}
              key={res.id}
              id={res.id}
              date={res.birthday}
              deleteUser={deleteUser}
              editUser={editUser}
              />
            })
          }

        </div>
      </div>
    </div>
  )
}

export default Home