import { AdvertItem } from "../AdvertItem/AdvertItem";
import { List } from "./AdvertList.styled";

export const AdvertList = ({ adverts }) => {
  return (
    <List>
      {adverts.map((advert) => (
        <AdvertItem key={advert._id} advert={advert} />
      ))}
    </List>
  );
};
