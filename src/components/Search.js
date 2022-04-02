import React, { useState } from 'react'
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import './Search.css'
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import reducer,{actionTypes} from '../reducer';

const Search = ({ hideButtons = false }) => {
    const [{term},dispatch]=useStateValue();

    const [input, setInput] = useState(term);
    const navigate = useNavigate();

    const search = (e) => {
        e.preventDefault();
        console.log("button is", input);
        dispatch({
            type:actionTypes.SET_SEARCH_TERM,
            term:input
        })
        navigate('/search');
    };

    return (
        <form className='search'>
            <div className='search__input'>
                <SearchIcon className="search__inputIcon" />
                <input value={input} onChange={e => setInput(e.target.value)} />
                <MicIcon />
            </div>
            {!hideButtons ?(
                <div className='search__buttons'>
                    <Button type='submit' onClick={search} variant="outlined" >Google Search</Button>
                    <Button variant="outlined">I'm feeling ucky</Button>
                </div>)
                :(
                <div className='search__buttons'>
                    <Button className="search__buttonsHidden" type='submit' onClick={search} variant="outlined" >Google Search</Button>
                    <Button className="search__buttonsHidden" variant="outlined">I'm feeling ucky</Button>
                </div>
                )    
            }

        </form>
    )
}

export default Search;