import React from 'react'
import { Link } from 'react-router-dom';
import Search from '../components/Search';
import response from '../response';
import { useStateValue } from '../StateProvider'
import './SearchPage.css'
import useGoogleSearch from './useGoogleSearch';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import RoomIcon from '@material-ui/icons/Room';

const SearchPage = () => {
    // const [{ term = 'Tesla' }, dispatch] = useStateValue();
    const [{ term  }, dispatch] = useStateValue();
    const {data}=useGoogleSearch(term);

    //live api call
    //const
    //https://developer
    // 1b9dfa961bc631e26

    //mock api call
    // const data = response;
    console.log(data);
    return (
        <div className='searchPage'>
            <div className="searchPage__header">
                <Link to="/">
                    <img className="searchPage__logo" src="https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                        alt="google logo"
                    />
                </Link>
                <div className="searchPage__headerBody">
                    <Search hideButtons />
                    <div className='searchPage__options'>
                        <div className='searchPage__optionLeft'>
                            <div className='searchPage__option' >
                                <SearchIcon />
                                <Link to="/all">All</Link>
                            </div>
                            <div className='searchPage__option' >
                                <DescriptionIcon />
                                <Link to="/news">News</Link>
                            </div>
                            <div className='searchPage__option' >
                                <ImageIcon />
                                <Link to="/images">Images</Link>
                            </div>
                            <div className='searchPage__option' >
                                <LocalOfferIcon />
                                <Link to="/shopping">shopping</Link>
                            </div>
                            <div className='searchPage__option' >
                                <RoomIcon />
                                <Link to="/maps">maps</Link>
                            </div>
                            <div className='searchPage__option' >
                                <MoreVertIcon />
                                <Link to="/more">more</Link>
                            </div>
                        </div>
                        <div className='searchPage__optionRight'>
                            <div className='searchPage__option' >
                                <Link to="/setting">Setting</Link>
                            </div>
                            <div className='searchPage__option' >
                                <Link to="/tools">Tools</Link>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            {term && (
                <div className="searchPage__results">
                    <p className='searchPage__resultCount'>About
                        {/* how this thing is working data?.searchInformation */}
                        {data?.searchInformation.formattedTotalResults} results
                        ({data?.searchInformation.formattedSearchTime} seconds)
                        for {term}</p>

                    {data?.items.map(item => (
                        <div className='searchPage__result'>
                            <a href={item.link} className='searchPage__resultLink'>
                                {item.pagemap?.cse_image?.length>0 
                                &&
                                item.pagemap?.cse_image[0]?.src
                                && (
                                    <img className='searchPage__resultImage'
                                    src={item.pagemap?.cse_image?.length>0 
                                        &&
                                        item.pagemap?.cse_image[0]?.src
                                        }
                                    alt=""
                                    />
                                )}
                                {item.displayLink}
                            </a>
                            <a className='searchPage__resultTitle' href={item.link}>
                                <h2>{item.title}</h2>
                            </a>
                            <p className='searchPage__resultSnippet'>
                                {item.snippet}
                            </p>
        
                        </div>
                    ))}

                </div>


            )}

        </div>
    )
}

export default SearchPage