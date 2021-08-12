import React, {useCallback} from 'react'
import {useState} from "react";
import {searchSpaces} from "./service/search";
import delay from "./service/delay";
import debounce from 'lodash'

const Search = () => {
    const [inputText,setInputText] = useState([])

    const changeDebouncer = (text) => {
        debounce(changeHandler(text),1000);
        };

    const changeHandler = (e) => {

    searchSpaces(e)
        .then(delay(500))
        .then((data) => {
        console.log(data);
        setInputText(data.map(data => (data.name)));
    })
        .catch((message) => {
        window.alert("something went wrong message")
            changeHandler(e);
    })

    }
    return <div>
        <input type="text" onChange={(e) => changeDebouncer(e.target.value)}/>
        {
            inputText.map(name => (
                <li className="liStyle">{name}</li>
            ))
        }

    </div>

}

export default Search
