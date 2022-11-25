import { HiUpload } from 'react-icons/hi'

import './style.css'

import bt0tv from '../../assets/image/bt0tv.png'
import coreano from '../../assets/image/coreano.png'
import casimiro from '../../assets/image/casimiro.png'

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
        },
        {
            id: 2,
            img: casimiro,
            name: "casimiro",
            decription: "Esportes",
            viewsNow: 32536
        }
    ]

    return (
        <div className="Navbar">
            <div className="top">
                <h3>Canais Recomendados</h3>
                <HiUpload className='exitIcon' size={25} />
            </div>
            <div className='channels'>
                {channels.map((e) => {
                    return (
                        <div key={e.id}>
                            <div className="channel">
                                <div className="user">                                    
                                    <img src={e.img} alt={e.name} />
                                    <div className="userInfo">
                                        <h5>{e.name}</h5>
                                        <span>{e.decription}</span>
                                    </div>
                                </div>
                                <span className='views'><div></div>{e.viewsNow > 1000 ? Math.round((e.viewsNow/1000), 1) + " mil" : e.viewsNow}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}