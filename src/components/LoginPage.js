import React, {useState} from 'react'


function LoginPage(props) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    function handleLogin() {
        if(username.value === 'admin' && password.value === 'admin'){
            console.log('Logged in')
        }
    }

    function handleChange(){
        
    }

    return (
        <div>
            <center>
            <div className="max-w-sm">
                <form className="flex flex-col bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h3 className="text-black font-bold mb-4">Login</h3>
                    <div className="mb-4">
                        <label className="block text-black text-sm font-bold mb-2" htmlFor="setup">UserName</label>
                        <textarea rows="1" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="username" id="username" ></textarea>
                    </div>
                    <div className="block text-black text-sm font-bold mb-2">
                        <label htmlFor="punchline">Password</label>
                        <textarea rows="1" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="password" id="password"></textarea>
                    </div>
                    <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={
                            handleLogin
                        }>
                        Login
                    </button>
                </form>
            </div>
            </center>

        </div>
    )
}

export default LoginPage;