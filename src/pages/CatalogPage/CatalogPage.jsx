import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAdverts } from "../../redux/adverts/selectors";
import { fetchAdverts } from "../../redux/adverts/operations";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectAdverts);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  console.log(data);

  return <div>CatalogPage</div>;
};

export default CatalogPage;
