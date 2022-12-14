import { CgCrown } from 'react-icons/cg'
import { FiUser } from 'react-icons/fi'

export default function Right() {
    return (
        <div className="headerRight">
            <CgCrown className='crowIcon' size={28}/>
            <button className='btnSignIn'>Entrar</button>
            <button className='btnSignUp'>Cadastrar-se</button>
            <FiUser className='userIcon' size={28} />
        </div>
    )
}