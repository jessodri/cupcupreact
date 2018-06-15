import React, { Component } from 'react'
import CupItemList from './CupItemList'
import './App.scss'

class App extends Component {

    constructor() {
        super()
        this.state = {
            cups: null,
            isLoading: true
        }
    }

    componentDidMount() {
        // do the stuff to get the data when the component mounts
        fetch('http://localhost:3000/cups')
        .then(res => res.json())
        .then(cups => this.setState({cups, isLoading: false}))
        .catch(err => console.error(err))
    }

    removeCup(id) {
        console.log('id', id)
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id})
        }
        
        fetch(`http://localhost:3000/cups/${id}`, options)
        .then(res => res.json())
        .then(cup => {
            console.log('deleted cup', cup)
            this.setState((prevState) => {
                return {
                    cups: prevState.cups.filter(c => c.id !== id)
                }
            })
        })
        .catch(err => console.error(err))
    }

    render() {
        if(this.state.isLoading) {
            return <div>Loading...</div>
        }
        return <CupItemList removeCup={this.removeCup.bind(this)} cups={this.state.cups} />
    }
}

export default App
// unordered list
// item (cup)
