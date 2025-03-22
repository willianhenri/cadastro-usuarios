import { useEffect, useState, useRef } from 'react'
import './style.css'
import Trash from '../../assets/trash.svg'
import api from '../../services/api'
function Home() {

  const [users, setUsers] = useState([])

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  async function getUsers(){
    const usersFromApi = await api.get('/user')
    const activeUsers = usersFromApi.data.filter(user => !user.deleted);
    setUsers(activeUsers.data);
  }

  async function createUsers(){
    await api.post('/user', {
      name: inputName.current.value,
      age: Number(inputAge.current.value),
      email: inputEmail.current.value
    })

    getUsers();
  }

  async function deleteUsers(id){
    await api.delete(`/user/${id}`)

    getUsers()
  }
 


  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className='container'>
      <form>
        <h1>Cadastro de Usuários</h1>
        <input name='nome' type="text" placeholder='Nome' ref={inputName}/>
        <input name='idade' type="number" placeholder='Idade' ref={inputAge}/>
        <input name='email' type="email" placeholder='E-mail' ref={inputEmail}/>
        <button name='button' onClick={createUsers}>Cadastrar</button>
      </form>
      {users.map(user => (
        <div key={user.id} className='card'>
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span> </p>
            <p>E-mail: <span>{user.email}</span> </p>
          </div>
          <button onClick={() => deleteUsers(user.id)}>
            <img src={Trash} />
          </button>
        </div>
      ))}

    </div>
  )
}

export default Home
