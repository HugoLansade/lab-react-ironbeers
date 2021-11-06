import React from 'react'
// import NavBar from "./../components/NavBar";
import { NavLink } from "react-router-dom";



export default function Home() {
    return (
        <div>

            <h1>Home</h1>

            <img className="img" src="./../assets/beers.png" alt="beers-img"/>
            <NavLink exact to="/beers">Beers</NavLink>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Mollitia vitae illo molestiae corporis. 
            Voluptate reiciendis voluptatem vitae, maxime suscipit 
            vel quibusdam architecto aut nulla perferendis doloremque 
            commodi atque repellat dolorum?</p>

            <img className="img" src="./../assets/random-beer.png" alt="beers-img"/>
            <NavLink exact to="/random-beer">Random beer</NavLink>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Mollitia vitae illo molestiae corporis. 
            Voluptate reiciendis voluptatem vitae, maxime suscipit 
            vel quibusdam architecto aut nulla perferendis doloremque 
            commodi atque repellat dolorum?</p>

            <img className="img" src="./../assets/new-beer.png" alt="beers-img"/>
            <NavLink exact to="/new-beer">New beer</NavLink>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Mollitia vitae illo molestiae corporis. 
            Voluptate reiciendis voluptatem vitae, maxime suscipit 
            vel quibusdam architecto aut nulla perferendis doloremque 
            commodi atque repellat dolorum?</p>
        </div>
    )
}
