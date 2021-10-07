import React from 'react'

function NewJoke() {

   const afterSubmit = e => {
    window.location.reload(true)
   }

    return (
        <div>
            <center>
            <form method="POST" action="http://localhost:3000/dadjokes/">
                <label htmlFor="setup">Setup</label>
                <input type="text" name="setup"/>
                <label htmlFor="punchline">Punchline</label>
                <input type="text" name="punchline"/>
                <button onClick={afterSubmit}><input type="submit" value="submit" /></button>
            </form>
            </center>
        </div>
    )
}

export default NewJoke
