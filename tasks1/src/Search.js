import React from 'react'
import {useState} from "react";
import {searchSpaces} from "./service/search";
import delay from "./service/delay";

const Search = () => {
    const [inputText,setInputText] = useState([])



    const onChange = (e) => {
    searchSpaces(e)
        .then(delay(500))
        .then((data) => {
        console.log(data);
        setInputText(data.map(data => (data.name)));
    })
        .catch((message) => {
        window.alert(message)
            searchSpaces(e)
                .then((data) => {
                    console.log(data);
                    setInputText(data.map(data => (data.name)));
                })
                .catch((message) => {
                    window.alert(message)

                })

    })

    }
    return <div>
        <input type="text" onChange={e => onChange(e.target.value)}/>
        {
            inputText.map(name => (
                <li className="liStyle">{name}</li>
            ))
        }

    </div>

}

export default Search
