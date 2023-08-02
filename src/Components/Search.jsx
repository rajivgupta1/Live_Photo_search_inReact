import React, { useState } from "react";
import Sresult from "./Sresult";
import './Search.css';

const Search = () =>{
   const [img, setImg] = useState("");
   
   const inputEvent = (event) =>{
    const data = event.target.value;
     setImg(data);
   }

    return (
        <>
            <h1>Hello mite</h1>
            <div className="searchbar">

            <input className="input"
            type="text" placeholder="Search any things"
             value={img}
             onChange={inputEvent}

             />

             { img === "" ? null : <Sresult name={img} />}
            </div>

        </>
    )
}

export default Search;