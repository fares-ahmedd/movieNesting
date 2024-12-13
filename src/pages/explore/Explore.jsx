import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import Select from "react-select";
import useFetch from "../../hooks/useFetch";
import { fetchData } from "../../utils/api";
import LogoSpinner from "../../ui/LogoSpinner";
import classes from "./Explore.module.scss";
import MovieCard from "../../components/MovieCard/MovieCard";
import NotFound from "../not-found/NotFound";
import { SORT_BY_DATA } from "../../utils/util";

let filters = {};
function Explore() {
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const [genre, setGenre] = useState(null);
  const [sortby, setSortby] = useState(null);
  const { mediaType } = useParams();

  const { data: genresData } = useFetch(`/genre/${mediaType}/list`);

  const fetchInitialData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetchData(`/discover/${mediaType}`, filters);
      setData(response);
      setPageNum((prev) => prev + 1);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [mediaType]);

  async function fetchNextPageData() {
    const response = await fetchData(
      `/discover/${mediaType}?page=${pageNum}`,
      filters
    );
    if (data?.results) {
      setData({
        ...data,
        results: [...data?.results, ...response.results],
      });
    } else {
      setData(response);
    }
    setPageNum((prev) => prev + 1);
  }

  useEffect(() => {
    filters = {};
    setData(null);
    setPageNum(1);
    setSortby(null);
    setGenre(null);
    fetchInitialData();
  }, [mediaType, fetchInitialData]);

  function onChange(selectedItems, action) {
    if (action.name === "sortby") {
      setSortby(selectedItems);
      if (action.action !== "clear") {
        filters.sort_by = selectedItems.value;
      } else {
        delete filters.sort_by;
      }
    }

    if (action.name === "genres") {
      setGenre(selectedItems);
      if (action.action !== "clear") {
        let genreId = selectedItems.map((g) => g.id);
        genreId = JSON.stringify(genreId).slice(1, -1);
        filters.with_genres = genreId;
      } else {
        delete filters.with_genres;
      }
    }

    setPageNum(1);
    fetchInitialData();
  }

  return (
    <div className={classes.page}>
      <section className="layout">
        <div className={classes.page__header}>
          <div className={classes.page__title}>
            {mediaType === "tv" ? "Explore TV Shows" : "Explore Movies"}
          </div>
          <div className={classes.page__filters}>
            <Select
              isMulti
              name="genres"
              value={genre}
              closeMenuOnSelect={false}
              options={genresData?.genres}
              getOptionLabel={(option) => option.name}
              getOptionValue={(option) => option.id}
              onChange={onChange}
              placeholder="Select genres"
              className="select genresDD"
              classNamePrefix="select"
            />
            <Select
              name="sortby"
              value={sortby}
              options={SORT_BY_DATA}
              onChange={onChange}
              isClearable={true}
              placeholder="Sort by"
              className="select genresDD"
              classNamePrefix="select"
            />
          </div>
        </div>
        {loading && <LogoSpinner />}
        {!loading && (
          <>
            {data?.results?.length > 0 ? (
              <InfiniteScroll
                className={classes.page__content}
                dataLength={data?.results?.length || []}
                next={fetchNextPageData}
                hasMore={pageNum <= data?.total_pages}
                loader={<LogoSpinner />}
              >
                {data?.results?.map((item, index) => {
                  if (item.media_type === "person") return null;
                  return (
                    <MovieCard key={index} data={item} mediaType={mediaType} />
                  );
                })}
              </InfiniteScroll>
            ) : (
              <NotFound />
            )}
          </>
        )}
      </section>
    </div>
  );
}

export default Explore;
