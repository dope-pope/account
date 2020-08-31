import React from 'react'
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { DETAILS } from './data';

const Home = () => {
   
    return (
            <div>
        <h2>Users</h2>

        {DETAILS.map((users, index) => {
           return(
               <div>
                   <Link to={`/user/${index}`}>
                    {users.name}

                    </Link>
    
                    
                </div>
               )
        })}
        </div>)
        
  
}

export default Home;