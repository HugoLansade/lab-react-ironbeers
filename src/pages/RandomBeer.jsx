import React, { Component } from 'react'
import axios from 'axios'


export default class RandomBeer extends Component {
    state = {
        randomBeer : null,
    }

    

    async componentDidMount () {
        console.log(this.props);

        try{
            const apiBeer =  await axios.get(
                "https://ih-beers-api2.herokuapp.com/beers" 
            );
            console.log("apiBeer.data")

            console.log(apiBeer.data.length)
            this.setState({
                randomBeer : apiBeer.data[Math.floor(Math.random() * apiBeer.data.length-1 )],
            })
        } catch (err) {
            console.error(err);
        }
    }
    

    render() {

        const { randomBeer } = this.state;
        console.log(this.state)
        return !randomBeer ? (
            <img className="img" src="./../assets/mulot.jpg" alt="beers-img"/>   
            ) : (
                <div>
                    <h1>Random Beer</h1>
                    <img className="img" src={randomBeer.image_url} alt="beers-img"/>
                    <p className="beer-name">{randomBeer.name}</p>
                    <p className="tagline">{randomBeer.tagline}</p>
                    <p className="first_brewed">{randomBeer.first_brewed}</p>
                    <p className="first_brewed">{randomBeer.attenuation_level}</p>
                    <p className="first_brewed">{randomBeer.description}</p>
                    <p className="contributed">{randomBeer.contributed_by}</p>   
                </div>
            )
    }
}

