import React from 'react'

export const LoginCont = ({hendelSingIn,hendelSingUp}) => {
    return (
    <div className='scroll-smooth overflow-auto'>
        <div className="flex flex-col gap-1">
            <h3 className="font-bold mt-2 mb-3 ">Welcome to Dell</h3>
            <p className="mb-2">My Account</p>
            <ul className="text-sm list-disc list-inside">
                <li>Place orders quickly and easily</li>
                <li>View orders and track your shipping status</li>
                <li>Create and access a list of your products</li>
            </ul>
        </div >

        <button onClick={hendelSingIn} className="w-[90%] hover:opacity-90 rounded-sm bg-buttonColor m-2 py-1.5 text-white font-bold">Sing In</button>

            <button onClick={hendelSingUp} className="w-[90%] hover:bg-blue-200 rounded-sm  border-2 border-buttonColor text-buttonColor m-2 py-1.5 sm:text-sm font-bold">Create an Account</button>

            <button className="w-[90%] rounded-sm  border-2 border-buttonColor text-buttonColor m-2 py-1.5  font-bold hover:bg-blue-200">Premier Sign In</button>

            <button className="w-[90%] rounded-sm  border-2 border-buttonColor text-buttonColor m-2 py-1.5  font-bold hover:bg-blue-200">Partner Program Sign In</button>
    </div>
    )
}
