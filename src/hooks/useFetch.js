import { useEffect, useState } from "react";
import { fetchData } from "../utils/api";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetchData(url);
        setData(response);
      } catch (error) {
        setError("Something went wrong!");
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
