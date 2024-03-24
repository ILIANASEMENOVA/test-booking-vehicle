import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/adverts/selectors";
import { fetchAdverts } from "../../redux/adverts/operations";
import { AdvertList } from "../../components/AdvertList/AdvertList";
import { LoadMoreBtn } from "./CatalogPage.styled";

const CatalogPage = () => {
  const [totalItems, setTotalItems] = useState([]);
  const [loadMore, setLoadMore] = useState(true);
  const [page, setPage] = useState(1);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    const getAdverts = async () => {
      const searchParams = new URLSearchParams({ page, limit: 4 });
      const data = await dispatch(fetchAdverts(searchParams)).unwrap();

      if (data.length < 4) setLoadMore(false);
      setTotalItems((prevItems) => [...prevItems, ...data]);
    };

    getAdverts();
  }, [dispatch, page]);

  const handleIncrementPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      {totalItems.length > 0 && <AdvertList adverts={totalItems} />}
      {loadMore && (
        <LoadMoreBtn onClick={handleIncrementPage}>
          {isLoading ? "Loading..." : "Load more"}
        </LoadMoreBtn>
      )}
    </>
  );
};

export default CatalogPage;
