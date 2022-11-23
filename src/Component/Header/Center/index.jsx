import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'

export default function Center() {
    const [search, setSearch] = useState('')

    return (
        <div className="headerCenter">
            <label className="search">
                <input type="text" placeholder='Buscar' value={search} onChange={(e) => {
                    let value = e.target.value
                    setSearch(value)
                }}/>
                <FiSearch className='searchIcon' size={20}/>
            </label>
        </div>
    )
}