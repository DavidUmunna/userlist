import React from "react";
//import Trailer from "./trailer"
import { Link } from "react-router-dom";


const MovieTrailer = () => {
    const movie = {

        title:"Take Over",
        videoid:'qz4c9WPceVM',

        imageurl:require("./assets/takeover.jpg")

    }
    
  return (
        <div style={{justifyContent:"center",display:"flex", alignItems:"center",height: "100vh"}}>
            <Link to="/trailer">
                <div className="max-w-sm rounded overflow-hidden shadow-lg justify-center">
                    <img className="w-full" src={movie.imageurl}alt="Take-Over"/>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{movie.title}</div>
                    
                    </div>
                    
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#movie</span>
                        
                    
                    </div>
                </div>
            
            </Link>
        </div>
       
   
      
  );
}
export default MovieTrailer