import RestaurentCards from "./RestaurentCards"
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    // Whenever State variable updates(through set meethods), react triggers a reconciliation cycle ie re-render the whole component   
    const [listOfRes, setListOfRes] = useState([])
    const [searchtext, setSearchtext] = useState("");
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async() => {
        // here comes the swiggy's api 
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9154203&lng=80.9398538&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);

        // now pass this json data into setList
        setListOfRes(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }

    if (listOfRes.length === 0) {
        return (<Shimmer/>)
    }
        return (
            <div className="body">
                <div className="filter">
                    <div className="search">
                        <input className="search-box" 
                        placeholder="Enter Restaurant Name"
                        value={searchtext}
                        onChange={(e) => {
                            setSearchtext(e.target.value);
                        }}></input>
                        
                        <button
                        onClick={() => {
                            // now I will update the value of the listofres
                            const newList = listOfRes.filter((item) => {
                                return item.info.name.toLowerCase().includes(searchtext.toLowerCase());
                            })
                            setListOfRes(newList);
                        }}>search</button>
                    </div>
                    <button className="filer-button"
                        onClick={() => {
                            const filteredList = listOfRes.filter((item) => {
                               return item.info.avgRating > 4.4;
                            });
                            setListOfRes(filteredList);
                            console.log("Filter Button Clicked");
                        }}>
                            Top-Restaurents
                    </button>
                </div>
                <div className="res-container">
                    {/* use map function here to iterate over all the array object */}
                    {/* learn map, reduce and filter methods */}
                    {
                        // To write JS we use {}
                        // Here key property will optimise the re-rendering when new item will come with unique id that's why its important to use key.
                        listOfRes.map((item) => ( <RestaurentCards key={item.info.id} resData = {item}/> ))
                    }
                    
                </div>
            </div>
        )
    }

export default Body