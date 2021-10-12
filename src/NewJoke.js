import React from 'react'
import { Form } from 'reactstrap'

function NewJoke() {

   const afterSubmit = e => {
    window.location.reload(true)
   }

    return (
        <div>
            <center>
                <h1>Submit a New Joke</h1>
            <Form>
            <form method="POST" action="http://localhost:3000/dadjokes/">
                <label htmlFor="setup">Setup</label>
                <textarea name="setup"></textarea>
                <label htmlFor="punchline">Punchline</label>
                <textarea name="punchline"></textarea>
                <input type="submit" value="submit" onClick={afterSubmit}/>
            </form>
            </Form>
            </center>
        </div>
    )
}

export default NewJoke
