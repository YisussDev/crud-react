import axios from "axios"
import { useEffect, useState } from "react"


const useFetching = () => {
    const [data, setData] = useState([])
    const [userSelected, setUserSelected] = useState(false)
    const fetchGet = () => {
         axios.get('https://users-crud1.herokuapp.com/users/')
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }

    const fetchUser= (id) => {
        axios.get(`https://users-crud1.herokuapp.com/users/${id}/`)
        .then(res => setUserSelected(res.data))
        .catch(err => console.log(err));
    }
    const fetchPost= (newUser) => {
        axios.post('https://users-crud1.herokuapp.com/users/', newUser)
        .then(() => fetchGet())
        .catch(err => console.log(err));
    }
    const fetchDelete= (id) => {
        axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
        .then(() => fetchGet())
        .catch(err => console.log(err));
    }
    const fetchUpdate= (id, newUser) => {
        axios.put(`https://users-crud1.herokuapp.com/users/${id}/`, newUser)
        .then(() => {fetchGet(), setUserSelected(false)})
        .catch(err => console.log(err));
    }
    const resetUserSelected = () => {
        setUserSelected(null)
    }
    useEffect(()=>{
        fetchGet()
    },[])
    
  return {fetchGet, fetchUser, fetchPost, fetchUpdate, fetchDelete, data, userSelected, resetUserSelected}
}

export default useFetching