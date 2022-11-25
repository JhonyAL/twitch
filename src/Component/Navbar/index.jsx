import { HiUpload } from 'react-icons/hi'

import './style.css'

import bt0tv from '../../assets/image/bt0tv.png'
import coreano from '../../assets/image/coreano.png'

export default function Navbar() {

    const channels = [
        {
            id: 0,
            img: bt0tv,
            name: "Bt0tv",
            decription: "Counter Strike: Glory",
            viewsNow: 172
        },
        {
            id: 1,
            img: coreano,
            name: "Coreano",
            decription: "Valorant",
            viewsNow: 2800
        }
    ]

    return (
        <div className="Navbar">
            <div className="top">
                <h3>Canais Recomendados</h3>
                <HiUpload className='exitIcon' size={20} />
            </div>
            <div className='channels'>
                {channels.map((e) => {
                    return (
                        <div key={e.id}>
                            <div className="channel">
                                <img src={e.img} alt={e.name} />
                                <h5>{e.name}</h5>
                                <span>{e.viewsNow}</span>
                            </div>
                            <div className='descriptionChannel'>
                                <span>{e.decription}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}