//This is the way to import Named exports 
import { CDN_URL } from "../utils/constants";

const RestaurentCards = (props) => {
        const {resData} = props;
        // destructing resData
        const {name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId} = resData?.info;
        return (
            <div className="res-card">
                <img className="res-img" 
                alt="food-image"
                src={CDN_URL + cloudinaryImageId} />
                <h3>{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{avgRating} stars</h4>
                <h4>{costForTwo}</h4>
                <h4>{sla.deliveryTime} mins</h4>

            </div>
        )
    }

export default RestaurentCards