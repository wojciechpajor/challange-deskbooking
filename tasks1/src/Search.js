import React, {useCallback} from 'react'
import {useState, useEffect} from "react";
import {searchSpaces} from "./service/search";
import delay from "./service/delay";
import debounce from 'lodash'
import {searchAdresses} from "./service/searchAddress";

const Search = () => {
    const [inputTextS,setInputTextS] = useState([])
    const [inputTextA,setInputTextA] = useState([])




    const changeHandlerS = (event) => {
        const e = event;

    searchSpaces(e)
        .then(delay(500))
        .then((data) => {
        console.log(data);
        setInputTextS(data.map(data => (data.name)));
    })
        .catch((message) => {
        window.alert("something went wrong message")
            changeHandlerS(e);
    })

    }

    const changeHandlerA = (event) => {
        const e = event;

        searchAdresses(e)
            .then(delay(500))
            .then((data) => {
                console.log(data);
                setInputTextA(data.map(data => (data.address + " " + data.country)));
            })
            .catch((message) => {
                window.alert("something went wrong message")
                changeHandlerA(e);
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

    const handleChangeS = useCallback(debounce(changeHandlerS), [])
    const handleChangeA = useCallback(debounce(changeHandlerA), [])

    return <div>
        <p>Space</p>
        <input type="text" placeholder="insert space" onChange={(e) => handleChangeS(e.target.value)}/>
        {
            inputTextS.map(name => (
                <li className="liStyle">{name}</li>
            ))
        }
        <p>Adress</p>
        <input type="text" placeholder="insert adress" onChange={(e) => handleChangeA(e.target.value)}/>
        {
            inputTextA.map(name => (
                <li className="liStyle">{name}</li>
            ))
        }

    </div>

}

export default Search
