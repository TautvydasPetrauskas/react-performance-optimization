import { useEffect, useState, useMemo } from "react";

export const useFetch = (url: string, params = {}) => {
  const [data, setData] = useState(null);

  // Memoize params to prevent unnecessary re-fetches
  const memoizedParams = useMemo(() => params, [JSON.stringify(params)]);

  useEffect(() => {
    fetch(url, { ...memoizedParams })
      .then((response) => response.json())
      .then((result) => setData(result));
  }, [url, memoizedParams]);

  return data;
};
