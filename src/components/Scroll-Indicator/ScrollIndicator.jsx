import React, { useEffect, useState } from 'react'

// import { user } from './data.js'

function ScrollIndicator() {

    const [data, setData] = useState([])
    const [scrollWidth, setScrollWidth] = useState("0%")

    useEffect(() => {
        fetchData()
    }, [])
    console.log(data);


    async function fetchData() {
        try {
            let res = await fetch('https://dummyjson.com/users', { method: "GET" })

            res = await res.json()

            setData([...res.users])
        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", () => {});
        };
      }, []);

    const handleScroll = () => {

        const howMuchScrolled =
            document.body.scrollTop || document.documentElement.scrollTop;

        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        setScrollWidth(`${(howMuchScrolled / height) * 100}%`);
    }
    return (
        <div className='text-center' onScroll={handleScroll}>
            <div className='w-full h-1 bg-black fixed'>
                <div style={{ width: scrollWidth }} className='h-full bg-green-500'></div>
            </div>
            <h1>Scroll Indicator</h1>
            <div className='grid p-4 gap-10 grid-cols-4'>
                {
                    data.map(({ id, username, firstName, image, lastName, role }) => (
                        <div key={id} className='flex gap-3 flex-col items-center'>
                            <div className='w-25 h-25'>
                                <img className='w-full h-auto' src={image} alt="" />
                            </div>
                            <div>
                                <p>{firstName} {lastName}</p>
                                <p className='text-xs'>{username}</p>
                                <span>{role}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ScrollIndicator