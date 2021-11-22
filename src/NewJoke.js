import React from "react"
import { Component } from "react";

function handleReload() {
    window.location.reload();
}
class NewJoke extends Component {

    constructor(props) {
        super(props);
        this.state = {
            setup:'',
            punchline:'',
            likes:0
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]:value
        });
        console.log(this.state);
    }



    handleSubmit(event) {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", 'https://hooks.zapier.com/hooks/catch/11338595/bd0awfe/', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.addEventListener('load', function(event) {
            handleReload();
        })
        xhr.send(JSON.stringify({
            setup: this.state.setup,
            punchline: this.state.punchline,
            likes: this.state.likes,
        }));
        event.preventDefault();
        this.setState({
        setup:  '',
        punchline: ''
        });
    }

    render(){
        return (
            <center>
                <div className="max-w-sm">
                    <form className="flex flex-col bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <h3 className="text-black font-bold mb-4">Submit a New Joke</h3>
                        <div className="mb-4">
                            <label className="block text-black text-sm font-bold mb-2" htmlFor="setup">Setup</label>
                            <textarea value={this.state.setup} name="setup" onChange={this.handleChange} rows="5"className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                        </div>
                        <div className="block text-black text-sm font-bold mb-2">
                            <label htmlFor="punchline">Punchline</label>
                            <textarea value={this.state.punchline} name="punchline" onChange={this.handleChange} rows="5" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                        </div>
                        <div>
                            <button onClick={this.handleSubmit} className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
                        </div>
                    </form>
                </div>
                <button>Logout</button>
            </center>
        );
    }
}

export default NewJoke
