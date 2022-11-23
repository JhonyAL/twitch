import './index.css'

import Center from './Center'
import Left from './Left'
import Right from './Right'

export default function Header() {
    return (
        <div className="Header">
            <Left />
            <Center />
            <Right />
        </div>
    )
}