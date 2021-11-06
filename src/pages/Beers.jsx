import React, { Component } from 'react'
import { Link } from "react-router-dom";
import axios from "axios";

export default class Beers extends Component {

    state = {
        beers : [],
    }

    componentDidMount(){
        axios
        .get("https://ih-beers-api2.herokuapp.com/beers")
        .then((APIResponse) => {
            console.log(APIResponse.data)                 
            this.setState({ beers: APIResponse.data });
        })
    }

    render() {
        return (
            <div className="Beers">
                <h1>Beers</h1>
                {!this.state.beers.length ? (
                    <div>
                        <img className="img" src="./../assets/marc.jpg" alt="beers-img"/>                    
                        <p>- Vous voulez un café ?</p>
                        <p>- Oui juste un doigt</p>
                        <p>- Vous ne voulez pas un café d'abord ?</p>
                    </div>
                    ) : (
                        this.state.beers.map((beer) => {
                            return (
                               
                                <Link key={beer._id} to={"/beers/" + beer._id}>
                                    <img className="img" src={beer.image_url} alt="beers-img"/>
                                    <section>
                                        <p className="beer-name">{beer.name}</p>
                                        <p className="tagline">{beer.tagline}</p>
                                        <p className="contributed">{beer.contributed_by}</p>
                                    </section>                  

                                </Link>
                               
                            )
                        })                    
                )}
            </div>
        )
    }
}

{/* <p>EhGlou...EhGlou...EhGlou...EhGlou...EhGlou......</p> */}