import React, { useEffect, useState } from 'react'

function TicTacToe() {

    const wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    const [current, setCurrent] = useState(false)
    const [winner, setWinner] = useState("")
    const [turn, setTurn] = useState(null)
    const [moves, setMoves] = useState(9)

    useEffect(() => {
        setTurn(current ? "X" : "O")
    }, [current])
    

    function handleTurn(e) {
        if (e.target.innerText === "") {
            setMoves(prev => prev - 1)
            e.target.innerText = turn
            setCurrent(!current)
        }
        getWinner(e)
    }

    function getWinner(e) {
        const currentWin = wins.filter(item => {
            return e.target.parentElement.childNodes[item[0]].innerText === turn && e.target.parentElement.childNodes[item[1]].innerText === turn && e.target.parentElement.childNodes[item[2]].innerText === turn
        })

        currentWin.length>0?setWinner(turn):null

    }

    function handleReset(e) {
        setMoves(9)
        setCurrent(false)
        setTurn(null)
        setWinner("")
        e.target.parentElement.firstChild.nextElementSibling.childNodes.forEach(item=>item.innerText="")
        
    }

    return (
        <div className='text-center'>
            <h1>Tic Tac Toe</h1>
            <div className='w-80 mt-4 h-80 grid grid-cols-3 grid-rows-3'>
                {
                    [...Array(9)].map((_, index) => (
                        <div key={index} className='cursor-pointer border flex items-center justify-center text-2xl' id={index} onClick={moves !== 0 && winner === "" ? handleTurn : null}></div>
                    ))
                }
            </div>
            {
                moves === 0 ? <p className='mt-4'>No More Left. Please! Restart Game</p> : winner!==""? <p className='mt-4'>{winner} wins the game</p>:null
            }
            <button type="button" className='border text-white cursor-pointer bg-black px-2 pb-1 mt-4 rounded'onClick={handleReset}>Restart Game</button>
        </div>
    )
}

export default TicTacToe