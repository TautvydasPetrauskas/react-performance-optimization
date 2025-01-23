// DataFetcher.tsx
import { ReactNode, useEffect, useState } from "react";

interface DataFetcherProps {
  url: string;
  render: (data: any) => ReactNode;
}

export const DataFetcher = ({ url, render }: DataFetcherProps) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => setData(result));
  }, [url]);

  return <>{render(data)}</>;
};
