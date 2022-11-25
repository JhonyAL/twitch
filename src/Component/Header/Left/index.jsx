import { BsTwitch } from 'react-icons/bs'
import { FiMoreVertical } from 'react-icons/fi'

import More from './More'

export default function Left() {
    return (
        <div className='headerLeft'>
            <BsTwitch color='#9147ff' size={28} className='twitchLogo'/>
            <a href="#">Procurar</a>
            <FiMoreVertical size={20} className="moreVertical" onClick={() => console.log("Funcionou!!!")}/>
        </div>
    )
}