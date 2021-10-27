import React from 'react'
import Auth from './Auth';

function LoginPage(props) {
    return (
        <div>
            <center>
            <div className="max-w-sm">
                <form className="flex flex-col bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" method="POST" action="http://localhost:3000/dadjokes/">
                    <h3 className="text-black font-bold mb-4">Login</h3>
                    <div className="mb-4">
                        <label className="block text-black text-sm font-bold mb-2" htmlFor="setup">UserName</label>
                        <text className="flex shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="setup"></text>
                    </div>
                    <div className="block text-black text-sm font-bold mb-2">
                        <label htmlFor="punchline">Punchline</label>
                        <textarea rows="5" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="punchline"></textarea>
                    </div>
                </form>
            </div>
            </center>
            <button onClick={
                () => {
                    Auth.login(() => {
                        props.history.push("/admin");
                    });
                }
            }>
                Login
            </button>
        </div>
    )
}

export default LoginPage
