import React, { useEffect, useState } from 'react'
import { data } from './data.js'

function CustomTabs() {

    const [currentTab, setCurrentTab] = useState(1)
    const [currentTabContent, setCurrentTabContent] = useState("")

    useEffect(() => {
        data.map(({ id, content }) =>
            currentTab === id ? setCurrentTabContent(content) : null
        )
    },[currentTab])

    const handleTabs =(id)=>{
        setCurrentTab(id)
    }

    return (
        <div>
            <h1 className='bg-green-400 text-white text-center'>Custom Tabs</h1>
            <div className='bg-yellow-400 flex items-center justify-center py-2 gap-2'>
                {
                    data.map(({ id, label }) =>
                        <button className='rounded px-2 pb-1 bg-red-400 text-white' key={id} onClick={()=>{
                            handleTabs(id)
                        }} type="button">{label}</button>
                    )
                }
            </div>
            {
                currentTabContent !== "" ? <div className='text-center py-4 bg-cyan-500 text-white'><p>
                    {currentTabContent}
                </p>
                </div> : null
            }
        </div>
    )
}

export default CustomTabs