import React from 'react';
import Like from './Like';

console.clear();

class Beers extends React.Component {
    constructor(props){
        super(props); 

        this.state ={
            beers: []
        };
    }

        componentDidMount(){
           fetch("https://api.punkapi.com/v2/beers").then(response => {
            return response.json();})
            .then((data) =>{
                // console.log(data);
                this.setState({
                    beers: data
                });
            });
           } 

        componentDidUpdate(){
            console.log(this.state.beers);
        }


    render(){
        return(
            <div>
                <h1>Beers</h1>
                <ul>
                    {
                        this.state.beers.map((beer) =>(
                            <li>
                                <img className="image" src={beer.image_url} alt={beer.name} />
                                <Like />
                                <h2>{beer.name}</h2>
                                <h3>{beer.tagline}</h3>
                                <h4>{beer.description}</h4>
                            </li>
                            ))
                    }
                </ul>
                
            </div>
        ) 
    }
}

export default Beers;