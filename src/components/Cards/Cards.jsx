import React from 'react'
import './Cards.css'
import { FaBirthdayCake, FaEdit, FaTrash, FaUser } from 'react-icons/fa'

const Cards = ({fname, sname, email, date, id, deleteUser, editUser}) => {
  return (
    <div className='Cards' id={id} >
      <div className='Cards_profile'>
        <FaUser />
      </div>
      <div className='Cards_info'>
        <h2>{fname} {sname}</h2>
        <h3>{email}</h3>
        <h3><FaBirthdayCake /> {date}</h3>

      </div>
      <div className='Cards_actions'>
        <button className='update' iduser={id} onClick={editUser} ><FaEdit iduser={id}/></button>
        <button className='delete' iduser={id} onClick={deleteUser} ><FaTrash iduser={id}/></button>
      </div>
    </div>
  )
}

export default Cards