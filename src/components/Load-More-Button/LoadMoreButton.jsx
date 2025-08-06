import React, { useEffect } from 'react'
import { useState } from 'react'

function LoadMoreButton() {

    const [skip, setSkip] = useState(19)
    const [limit, setLimit] = useState(10)
    const [url, setUrl] = useState(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
    const [loader, setLoader] = useState(false)
    const [products, setProducts] = useState([])
    const [errorMsg, setErrorMsg] = useState('')
    const [hasProducts, setHasProducts] = useState(false)

    useEffect(() => {
        url ? fetchProducts() : null
    }, [url])


    async function fetchProducts() {
        try {
            setLoader(true)
            let data = await fetch(url, {
                method: "GET"
            })
            data = await data.json()
            setLimit(data.limit)
            setHasProducts(data.limit===limit?true:false)
            setProducts([...products, ...data.products])
            setLoader(false)
            console.log(data);

        } catch (error) {
            setErrorMsg(error)
            console.log(error);
            setLoader(false)
        }
    }


    function loadProducts() {
        let newLimit = 10
        if (limit === newLimit) {
            setSkip(prev => prev + 1)
            setUrl(`https://dummyjson.com/products?limit=10&skip=${skip * limit}`)
            console.log(skip);
        }

    }

    return (
        <>
            <div className='grid text-center grid-cols-5 item-center content-center gap-2 flex-wrap'>{products.length > 0 ? products.map(data => <div className='border text-left p-2' key={data.id}>
                <img className="mb-2" src={data.thumbnail} alt='' />
                <h2>{data.title}</h2>
                <p className='text-sm'>{data.price}</p>
            </div>
            ) : <p>{`${loader ? "Please Wait Loading..." : errorMsg}`}</p>}</div>

            <button onClick={loadProducts} className={`border bg-slate-800 text-white cursor-pointer mt-2 rounded py-1 px-2 ${hasProducts?"":"opacity-50"}`} type="button">{`${hasProducts?"Load More":"No Products"}`}</button>
        </>
    )
}

export default LoadMoreButton