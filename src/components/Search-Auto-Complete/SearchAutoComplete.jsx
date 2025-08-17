import React, { useEffect, useState } from 'react'

function SearchAutoComplete() {

    const [value, setValue] = useState("")
    const [users, setUsers] = useState([])
    const [filteredUsers, setFilteredUsers] = useState([])

    useEffect(() => {
        getUserHandle()
    }, [])

    useEffect(() => {
        value===""?setFilteredUsers([]):
        filterUser()
    }, [value])

    function handleSearch(e) {
        setValue(e.target.value.trim())
    }

    function filterUser() {
        const newUserList = users?.filter(item => {
            return item.username.substring(0,value.length) === value
        })

        setFilteredUsers([...newUserList])
    }

    async function getUserHandle() {
        let getUser = await fetch('https://dummyjson.com/users', {
            method: "GET"
        })

        getUser = await getUser.json()
        setUsers([...getUser.users])
    }


    return (
        <div className='text-center py-2'>
            <h1>Search Auto Complete</h1>

            <input className='border my-2 px-2 pb-1' placeholder='Type Something...' onInput={handleSearch} type="text" value={value} />

            {filteredUsers.length > 0 ? filteredUsers?.map(item=>(
                <p key={item.id}>{item.firstName} {item.lastName}</p>
            )) : null}
        </div>
    )
}

export default SearchAutoComplete