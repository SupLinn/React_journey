import RestaurentCards from "./RestaurentCards"
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    const [listOfRes, setListOfRes] = useState(resList)
        return (
            <div className="body">
                <div className="filter">
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