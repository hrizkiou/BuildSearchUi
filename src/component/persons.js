import React from 'react';
import axios from "axios";
class Persons extends React.Component {
    state = {
        persons: []
    }

    parse(){
        fetch('https://uifaces.co/api?limit=5&emotion[]=happiness', {
            method: 'GET',
            headers: {
                'X-API-KEY': 'CF85DD42-47574E64-B45D8D29-3E284209',
                'Accept': 'application/json',
                'Cache-Control': 'no-cache'
            }
        }).then(res => {
            res.text().then(data => {
                this.persons = JSON.parse(data);
            });
        });
    }
    componentDidMount() {
        // axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/').then(res => {
        //     const card = res.data;
        //     this.setState({ card });
        // });
        this.parse();
    }

    render() {
        return (
            <ul>
                {this.persons}
                {/*{ this.state.persons.map(person => <li>{person.name}</li>)}*/}
            </ul>
        )
    }
} export default Persons;