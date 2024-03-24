import * as SC from "./AdvertItem.styled";
import sprite from "../../assets/sprite.svg";

export const AdvertItem = ({ advert }) => {
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

  const findDetails = (details, count) => {
    const detailsEntries = Object.entries(details);
    const results = [];

    let i = 0;
    while (i < count) {
      const randomIndex = Math.floor(Math.random() * detailsEntries.length);
      const [detail, qty] = detailsEntries[randomIndex];

      const keys = [];
      results.forEach((result) => keys.push(...Object.keys(result)));

      if (!keys.includes(detail) && typeof qty === "number" && qty > 0) {
        results.push({ [detail]: qty });
        i++;
      }
    }

    return results;
  };

  const randomDetails = findDetails(details, 3);
  const formattedDetails = randomDetails.map((detail) => {
    console.log(detail);
    const [feature, qty] = Object.entries(detail)[0];
    if (qty === 1) return feature;
    return `${qty} ${feature}`;
  });

  const featureList = [`${adults} adults`, transmission, engine].concat(
    formattedDetails
  );
  const featureIconList = ["adults", "transmission", "engine"].concat(
    randomDetails.map((detail) => Object.keys(detail)[0])
  );

  const formattedLocation = location.split(", ").reverse().join(", ");

  return (
    <SC.Item>
      <SC.Img src={gallery[0]} alt={name} />
      <SC.ContentWrapper>
        <SC.MainInfoWrapper>
          <SC.PrimaryInfo>
            <SC.Title>{name}</SC.Title>
            <SC.PriceAndHeartBtnWrapper>
              <SC.Price>€{price.toFixed(2)}</SC.Price>
              <SC.HeartBtn>
                <SC.HeartIcon>
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
        <SC.ShowMoreBtn type="button">Show more</SC.ShowMoreBtn>
      </SC.ContentWrapper>
    </SC.Item>
  );
};
