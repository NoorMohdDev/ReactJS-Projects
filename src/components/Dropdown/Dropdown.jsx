import React, { Children } from 'react'
import data from './data.js'
import Menus from './Menus.jsx'

function Dropdown() {
    return (
        <>
            <h1 className='pb-2'>Multilevel Dropdown</h1>
            {data.map((item,index) =>
                <Menus key={index} data={item} />
            )}
        </>
    )
}

export default Dropdown