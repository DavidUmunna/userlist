import React from "react";
import {Link} from "react-router-dom"
const Trailer = ( {videoId} ) => {
  return (
    <div style={{justifyContent:"center",display:"flex", alignItems:"center",height: "100vh"}}>
        
       
        <div >
              <div style={{justifyContent:"center", display:"flex", backgroundColor:"blue", fontStyle:"oblique",fontFamily:"serif",
                    fontWeight:"bold", color:"white",borderRadius:"15px", padding:"5px",margin:"10px"
              }}  >
                   <Link to="/">
                        back Home 
                    </Link>
              </div>
              <iframe
                title="takeover"
                width="640"
                height="360"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&modestbranding=1`}
                frameBorder="0"
                allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
        </div>


    </div>
    
  );
};

export default Trailer;
