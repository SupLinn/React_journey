import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router"
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch (MENU_API + resId)
        const json = await data.json();
        setResInfo(json.data);
    }
    if (resInfo === null) {
        return(<Shimmer/>)
    }

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    // console.log("Card at index 6:", resInfo?.cards[6]);
    const len = resInfo?.cards.length;
    const {itemCards} = resInfo?.cards[len-1]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card
    console.log(itemCards)

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>
                {cuisines.join(",")} - {costForTwoMessage}
            </p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) => {
                    return <li key={item.card.info.id}>{item.card.info.name} - ₹{item.card.info.price/100 || item.card.info.defaultprice/100}</li>
                    })}
                {/* <li>{itemCards[0].card.info.name}</li> */}
            </ul>
        </div>
    )
}

export default RestaurantMenu;