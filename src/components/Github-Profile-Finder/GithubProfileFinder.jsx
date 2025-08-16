import React, { useEffect, useState } from 'react'

function GithubProfileFinder() {

    const [user, setUser] = useState({})
    const [username, setUsername] = useState('')
    const [inputValue, setInputValue] = useState('')
    const [errorMsg, setErrorMsg] = useState('')

    const [loader, setLoader] = useState(false)

    useEffect(() => {
        username !== "" ? fetchUser() : null
    }, [username])

    const fetchUser = async () => {
        try {
            setLoader(true)
            let getUser = await fetch(`https://api.github.com/users/${username}`, {
                method: "GET"
            })
            getUser = await getUser.json()
            setUser({ ...getUser })
        } catch (error) {
            console.log(error);
            setErrorMsg(error)
            setLoader(false)
        }
    }
    console.log(user);

    const handleUrl = () => {
        if (inputValue === '') {
            setErrorMsg("Please! Enter Some Value")
            setUser([])
            setLoader(false)
        }
        setUsername(inputValue)
        setInputValue('')
    }
    return (
        <div className='pt-4'>
            <h1 className='text-center py-2'>Github Profile Finder</h1>
            <div className=''>
                <input value={inputValue} onChange={(e) => setInputValue(e.target.value.trim())} className='border border-cyan-400  placeholder:text-cyan-500 outline-none bg-slate-100 pb-1 rounded-l-lg px-2' type="text" placeholder='Enter Username' />
                <button onClick={
                    handleUrl} className='border border-cyan-400 cursor-pointer bg-cyan-500 text-white pb-1  rounded-r-lg px-2' type='submit'>Search</button>
            </div>
            {Object.keys(user).length > 0 && errorMsg.status!==404? <div className=' flex items-center justify-center flex-col mt-4'>

                <div className='flex items-center justify-center'>
                    <img className='w-25' src={user.avatar_url} alt="" />
                </div>
                <div className='pt-4'>
                    <p ><a className='text-cyan-400' href={user.html_url}><span>{user.login}</span></a> joined on <span>{user.created_at.split("T")[0]}</span></p>

                    <p>Public Repos: {user.public_repos} </p>
                    <p>Followers: {user.followers}</p>
                    <p>Following: {user.following}</p>
                </div>
            </div> : <p className='text-center pt-4'>{`${loader ? "Please Wait Loading..." : errorMsg}`}</p>}
        </div>
    )
}

export default GithubProfileFinder