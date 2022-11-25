import { useState } from 'react'
import { BsTwitch } from 'react-icons/bs'
import { FiMoreVertical } from 'react-icons/fi'

import More from './More'

export default function Left() {
    const [more, setMore] = useState(false)

    return (
        <div className='headerLeft'>
            <BsTwitch color='#9147ff' size={28} className='twitchLogo'/>
            <a href="#">Procurar</a>
            <div className="more">
                <FiMoreVertical size={30} className="moreVertical" onClick={() => setMore(!more)}/>
                {more ? <More /> : <></>}
            </div>
        </div>
    )
}