import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'

export default function Center() {
    const [search, setSearch] = useState('')
    const [searchIconCursor, setSearchIconCursor] = useState('not-allowed')
    

    return (
        <div className="headerCenter">
            <div className="search">
                <input type="text" placeholder='Buscar' value={search} onChange={(e) => {
                    let value = e.target.value
                    setSearch(value)

                    if (search.length > 0) {
                        setSearchIconCursor('pointer')
                    } else {
                        setSearchIconCursor('not-allowed')
                    }
                }}/>
                <FiSearch className='searchIcon' size={45} cursor={searchIconCursor}/>
            </div>
        </div>
    )
}