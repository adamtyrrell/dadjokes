import React from "react"
import Auth from "./components/Auth";

function NewJoke(props) {

   const afterSubmit = e => {
    window.location.reload(true)
   }

    return (
        <center>
            <div className="max-w-sm">
                <form className="flex flex-col bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" method="POST" action="http://localhost:3000/dadjokes/">
                    <h3 className="text-black font-bold mb-4">Submit a New Joke</h3>
                    <div className="mb-4">
                        <label className="block text-black text-sm font-bold mb-2" htmlFor="setup">Setup</label>
                        <textarea rows="5"className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="setup"></textarea>
                    </div>
                    <div className="block text-black text-sm font-bold mb-2">
                        <label htmlFor="punchline">Punchline</label>
                        <textarea rows="5" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="punchline"></textarea>
                    </div>
                    <div>
                        <input className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Submit" onClick={afterSubmit}/>
                    </div>
                </form>
            </div>
            <button onClick={() =>{
                Auth.logout(() => {
                    props.history.push("/home");
                });
            }}>Logout</button>
        </center>
    );
}

export default NewJoke
