import * as SC from "./AdvertItem.styled";
import sprite from "../../assets/sprite.svg";
import { useModal } from "../../hooks/useModal";
import { AdvertModal } from "../AdvertModal/AdvertModal";
import { formatLocation } from "../../helpers/formatLocation";
import { findDetails } from "../../helpers/findDetails";
import { formatDetails } from "../../helpers/formatDetails";
import { createFeatureList } from "../../helpers/createFeatureList";
import { createFeatureIconList } from "../../helpers/createFeatureIconList";

export const AdvertItem = ({
  advert,
  isFavorite,
  onAddFavorite,
  onRemoveFavorite,
}) => {
  const {
    name,
    price,
    rating,
    location,
    adults,
    engine,
    transmission,
    description,
    details,
    gallery,
    reviews,
  } = advert;

  const { isOpen, toggleModal } = useModal();

  const handleClick = () => {
    if (isFavorite) return onRemoveFavorite();
    onAddFavorite();
  };

  const randomDetails = findDetails(details, 3);
  const formattedDetails = formatDetails(randomDetails);

  const featureList = createFeatureList(
    formattedDetails,
    adults,
    transmission,
    engine
  );

  const featureIconList = createFeatureIconList(randomDetails);
  const formattedLocation = formatLocation(location);

  return (
    <SC.Item>
      <SC.Img src={gallery[0]} alt={name} />
      <SC.ContentWrapper>
        <SC.MainInfoWrapper>
          <SC.PrimaryInfo>
            <SC.Title>{name}</SC.Title>
            <SC.PriceAndHeartBtnWrapper>
              <SC.Price>€{price.toFixed(2)}</SC.Price>
              <SC.HeartBtn type="button" onClick={handleClick}>
                <SC.HeartIcon data-is-favorite={isFavorite}>
                  <use href={sprite + "#icon-heart"}></use>
                </SC.HeartIcon>
              </SC.HeartBtn>
            </SC.PriceAndHeartBtnWrapper>
          </SC.PrimaryInfo>
          <SC.SecondaryInfo>
            <SC.Rating>
              <SC.StarIcon>
                <use href={sprite + "#icon-star"}></use>
              </SC.StarIcon>
              {rating} ({reviews.length} Reviews)
            </SC.Rating>
            <SC.Location>
              <SC.LocationIcon>
                <use href={sprite + "#icon-location"}></use>
              </SC.LocationIcon>
              {formattedLocation}
            </SC.Location>
          </SC.SecondaryInfo>
        </SC.MainInfoWrapper>
        <SC.Description>{description}</SC.Description>
        <SC.FeatureList>
          {featureList.map((feature, index) => (
            <SC.FeatureItem key={feature}>
              <SC.FeatureIcon>
                <use href={sprite + `#icon-${featureIconList[index]}`}></use>
              </SC.FeatureIcon>
              {feature}
            </SC.FeatureItem>
          ))}
        </SC.FeatureList>
        <SC.ShowMoreBtn type="button" onClick={toggleModal}>
          Show more
        </SC.ShowMoreBtn>
        {isOpen && <AdvertModal onClose={toggleModal} advert={advert} />}
      </SC.ContentWrapper>
    </SC.Item>
  );
};
