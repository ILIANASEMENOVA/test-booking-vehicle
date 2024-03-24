import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAdverts } from "../../redux/adverts/selectors";
import { fetchAdverts } from "../../redux/adverts/operations";
import { AdvertList } from "../../components/AdvertList/AdvertList";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectAdverts);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  console.log(data);

  return <div>{data.length > 0 && <AdvertList adverts={data} />}</div>;
};

export default CatalogPage;
