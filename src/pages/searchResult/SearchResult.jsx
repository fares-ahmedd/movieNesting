import { useEffect, useState } from "react";
import LogoSpinner from "../../ui/LogoSpinner";
import { useParams } from "react-router-dom";
import classes from "./SearchResult.module.scss";
import { fetchData } from "../../utils/api";
import InfiniteScroll from "react-infinite-scroll-component";
import MovieCard from "../../components/MovieCard/MovieCard";
function SearchResult() {
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const { query } = useParams();

  useEffect(() => {
    async function fetchInitialData() {
      setIsLoading(true);
      try {
        const result = await fetchData(`/search/multi?query=${query}&page=1`);
        setData(result);
        setPageNum((prev) => prev + 1);
      } catch (error) {
        console.log("Error");
      } finally {
        setIsLoading(false);
      }
    }
    fetchInitialData();
  }, [query]);
  async function fetchNextPage() {
    const result = await fetchData(
      `/search/multi?query=${query}&page=${pageNum}`
    );
    if (data?.results) {
      setData({ ...data, results: [...data?.results, ...result.results] });
    } else {
      setData(result);
    }
    setPageNum((prev) => prev + 1);
  }
  return (
    <div className={classes.searchResultsPage}>
      {isLoading && <LogoSpinner />}
      {!isLoading && (
        <div className="layout">
          {data?.results?.length > 0 ? (
            <>
              <div className={classes.pageTitle}>
                {`Search ${
                  data.total_results > 1 ? "results" : "result"
                } of : `}
                <span className={classes.resultQuery}>"{query}"</span>
              </div>
              <InfiniteScroll
                className={classes.content}
                dataLength={data?.results?.length || []}
                next={fetchNextPage}
                hasMore={pageNum <= data?.total_pages}
                loader={<LogoSpinner />}
              >
                {data?.results.map((item, index) => {
                  if (item.media_type === "person") return null;
                  return (
                    <MovieCard key={index} data={item} fromSearch={true} />
                  );
                })}
              </InfiniteScroll>
            </>
          ) : (
            <span className={classes.resultNotFound}>
              We could not find any results matching your search query:{" "}
              {<span className={classes.resultQuery}>"{query}"</span>}. 🤔{" "}
              <br /> Please try a different search term or refine your query
            </span>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchResult;
