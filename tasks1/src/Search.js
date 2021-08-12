import React, {useCallback} from 'react'
import {useState, useEffect} from "react";
import {searchSpaces} from "./service/search";
import delay from "./service/delay";
import debounce from 'lodash'

const Search = () => {
    const [inputText,setInputText] = useState([])
    const [text,setText] = useState('')



    const changeHandler = (event) => {
        const e = event;

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

    const debounce = (func) => {
        let timer;
        return function (...args){
            const context = this;
            if (timer) clearTimeout(timer)
            timer = setTimeout(()=> {
                timer = null
                func.apply(context,args);
            },500)
        }
    }

    const handleChange = useCallback(debounce(changeHandler), [])

    return <div>
        <input type="text" onChange={(e) => handleChange(e.target.value)}/>
        {
            inputText.map(name => (
                <li className="liStyle">{name}</li>
            ))
        }

    </div>

}

export default Search
