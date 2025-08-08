import React, { useState } from 'react'

function Menus({data}) {
    const [open, setOpen] = useState(false)
    const hasChildren = data?.children && data.children?.length
    return (
        <div className='p-1 border cursor-pointer' >
            <p className='p-1' onClick={()=> setOpen(!open)}>
                {data.name}
                <span className='pl-2'>
                    {data.to}
                </span>
            </p>
            {open? <div className='pl-2'>
            {hasChildren && data.children?.map((child,index )=> (
                <Menus key={index} data={child} />
            ))}
            </div>:null}
        </div>
    )
}

export default Menus