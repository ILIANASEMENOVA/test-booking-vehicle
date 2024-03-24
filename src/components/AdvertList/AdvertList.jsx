import { useDispatch, useSelector } from "react-redux";
import { AdvertItem } from "../AdvertItem/AdvertItem";
import { List } from "./AdvertList.styled";
import { selectFavoritesAdverts } from "../../redux/adverts/selectors";
import { addToFavorites, removeFromFavorites } from "../../redux/adverts/slice";

export const AdvertList = ({ adverts }) => {
  const favorites = useSelector(selectFavoritesAdverts);
  const dispatch = useDispatch();

  const isFavorite = (id) => favorites.some((item) => item?._id === id);

  return (
    <List>
      {adverts.map((advert) => (
        <AdvertItem
          key={advert._id}
          advert={advert}
          isFavorite={isFavorite(advert._id)}
          onAddFavorite={() => dispatch(addToFavorites(advert))}
          onRemoveFavorite={() => dispatch(removeFromFavorites(advert._id))}
        />
      ))}
    </List>
  );
};
