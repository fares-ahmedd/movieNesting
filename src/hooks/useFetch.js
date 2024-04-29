import { useEffect, useState } from "react";
import { fetchData } from "../utils/api";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      try {
        const response = await fetchData(url);
        setData(response);
      } catch (error) {
        setError("Something went wrong!");
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [url]);

  return { data, isLoading, error };
}

export default useFetch;
