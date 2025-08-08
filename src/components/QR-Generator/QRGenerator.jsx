import React, { useState } from 'react'
import QRCode from 'react-qr-code'

function QRGenerator() {
    const [qrValue, setQrValue] = useState("")
    const [inputValue, setInputValue] = useState("")

    const handleQR= ()=>{
        setQrValue(inputValue)
        setInputValue("")

    }

    const handleInputValue = (e)=>{
        setInputValue(e.target.value)
    }

    return (
        <div>
            <h1 className='text-center pb-2'>QR Code Generator</h1>
            <input value={inputValue}  onInput={handleInputValue} className='pl-1 rounded border' type="text" name="" id="" />

            <button onClick={handleQR} className='px-1 rounded border' type="button">Generate</button>
        { (!(qrValue === "" || qrValue === null) && (inputValue === "" || inputValue === null))?  <div className='pt-4'>
                <QRCode
                    size={156}
                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                    value={qrValue}
                    viewBox={`0 0 256 256`}
                />
            </div>:null}

        {!((inputValue === "" || inputValue === null) && (qrValue === "" || qrValue === null))?null:<p className='text-center p-2'>Please! Enter Some Value</p>}
        </div>
    )
}

export default QRGenerator