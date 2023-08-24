import { Link } from "react-router-dom"

function Casa() {
  return (
    <div>
      <h1>Casa</h1>
      <Link to={"/usuarios"} >Ver Usuários</Link>
    </div>
  )
}

export default Casa