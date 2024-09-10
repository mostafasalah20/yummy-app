import React from 'react'
import { Audio, Triangle } from 'react-loader-spinner'
export default function Loding() {
    return <>
        <div className='w-full h-screen flex justify-center items-center lading'>

            render(<Triangle
                visible={true}
                height="150"
                width="150"
                color="#4fa94d"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />)

        </div>
    </>
}
