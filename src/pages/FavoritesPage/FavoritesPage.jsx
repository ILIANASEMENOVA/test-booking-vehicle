import { useSelector } from "react-redux";
import { selectFavoritesAdverts } from "../../redux/adverts/selectors";
import { AdvertList } from "../../components/AdvertList/AdvertList";

const FavoritesPage = () => {
  const data = useSelector(selectFavoritesAdverts);

  // if (data.length === 0) {
  //   return <Placeholder>Your list of favorites is currently empty</Placeholder>;
  // }

  return <AdvertList adverts={data} />;
};

export default FavoritesPage;
