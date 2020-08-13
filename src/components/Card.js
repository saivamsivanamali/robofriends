import React from 'react';


const Card = ( { name,email,id } ) => {
    return (
        
            
        
        <div className="bg-light-green dib br3 pa3 ma5 grow bw2 shadow-5">
            
            <img alt="Robot" src={`https://robohash.org/${id}testtest?200*200`} />
         <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
        </div>
    )
}

export default Card;