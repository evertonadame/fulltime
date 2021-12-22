import React from 'react';
import Loader from 'react-loader-spinner'

const Spinner = ({message}) => {
    return (
        <div className="flex flex-col justify-center items-center w-full h-full">
                <Loader 
                    type="Grid"
                    color="#03c99e"
                    height={50}
                    width={150}
                    className="m-5"
                />
                <p className="text-lg text-center px-2">{message}</p>
        </div>
    )
}

export default Spinner
