import axios from 'axios'
import React, { Component } from 'react'

export default class SingleBeer extends Component {

    state = {
        beer : null,
    }

    async componentDidMount () {
        console.log(this.props);

        try{
            const apiBeer =  await axios.get(
                "https://ih-beers-api2.herokuapp.com/beers/" + this.props.match.params.id
            );
            // console.log(apiBeer.data)
            this.setState({
                beer : apiBeer.data,
            })
        } catch (err) {
            console.error(err);
        }
    }

    render() {
        const { beer } = this.state;

        return !beer ? (
            <img className="img" src="./../assets/rick.jpg" alt="beers-img"/>   
            ) : (
                <div>
                    <h1>Single Beer</h1>
                    <img className="img" src={beer.image_url} alt="beers-img"/>
                    <p className="beer-name">{beer.name}</p>
                    <p className="tagline">{beer.tagline}</p>
                    <p className="first_brewed">{beer.first_brewed}</p>
                    <p className="first_brewed">{beer.attenuation_level}</p>
                    <p className="first_brewed">{beer.description}</p>
                    <p className="contributed">{beer.contributed_by}</p>   
                </div>
            )
        
    }
}
