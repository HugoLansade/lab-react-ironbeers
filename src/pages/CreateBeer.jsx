import React, { Component } from 'react'
import axios from 'axios'


export default class CreateBeer extends Component {
    
    state = {
        name : "",
        tagline : "",
        description : "",
        first_brewed :  "",
        brewer_tips : "",
        attenuation_level : 0,
        contributed_by : "",
        beerAdded : false,
    }
    
    handleSubmit = (evt) => {
          evt.preventDefault();
          const serverResponse = axios.post(
        "https://ih-beers-api2.herokuapp.com/beers/new" ,
            {
                name : this.state.name,
                tagline : this.state.tagline,
                description : this.state.description,
                first_brewed :  this.state.first_brewed,
                brewer_tips : this.state.brewer_tips,
                attenuation_level : this.state.attenuation_level,
                contributed_by : this.state.contributed_by,
            }
    )
    .then((response) => {
        console.log("axios response");
        this.setState({
            beerAdded: true,
            });
        console.log(response);
        }, (error) => {
        console.log("axios error");
        this.setState({
            beerAdded: false,
            });
        console.log(error);
        });

        console.log("server response : ", serverResponse)
      }

      handleChange = (evt) => {
            this.setState({
                [evt.target.id]: evt.target.value,
            });
    };

    

        

    // async componentDidMount () {
    //     console.log(this.props);

    //     try{
    //         const apiBeer =  await axios.post(
    //             "beers-api2.herokuapp.com/beers/new" ,
    //             {}
    //         );
    //         console.log("apiBeer.data")

    //         console.log(apiBeer)
    //         this.setState({
    //             randomBeer : apiBeer.data[Math.floor(Math.random() * apiBeer.data.length-1 )],
    //         })
    //     } catch (err) {
    //         console.error(err);
    //     }
    // }
    
    
    render() {
        console.log(this.state.name)
        return (
            <div>
                <h1>Create a new beer :</h1>
                <form onSubmit={this.handleSubmit} className="form">
                    <label htmlFor="name" className="label">
                    Name
                    </label>
                    <input
                    id="name"
                    className="input"
                    type="text"
                    onChange={this.handleChange}
                    />
                    <label htmlFor="Tagline" className="label">
                    Tagline
                    </label>
                    <input
                    id="Tagline"
                    className="input"
                    type="text"
                    onChange={this.handleChange}
                    />
                    <label htmlFor="description" className="label">
                    Description
                    </label>
                    <input
                    id="description"
                    className="input"
                    type="text"
                    onChange={this.handleChange}
                    />
                    <label htmlFor="first_brewed" className="label">
                    First Brewed
                    </label>
                    <input
                    id="first_brewed"
                    className="input"
                    type="text"
                    onChange={this.handleChange}
                    />
                    <label htmlFor="brewer_tips" className="label">
                    Brewer Tips
                    </label>
                    <input
                    id="brewer_tips"
                    className="input"
                    type="text"
                    onChange={this.handleChange}
                    />
                    <label htmlFor="attenuation_level" className="label">
                    Attenuation Level
                    </label>
                    <input
                    id="attenuation_level"
                    className="input"
                    type="number"
                    onChange={this.handleChange}
                    />   
                    <label htmlFor="contributed_by" className="label">
                    Contributed By
                    </label>
                    <input
                    id="contributed_by"
                    className="input"
                    type="text"
                    onChange={this.handleChange}
                    />                 
                    <button className="button">ADD A NEW BEER !</button>
                </form>
                <br />
                <br />
                <hr />
                {this.state.beerAdded && <h1>Beer Added !</h1>}

            </div>
        )
    }
}
