import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setData(data);
      })
      .catch(() => {
        setIsLoading(false);
        setErrorMessage("Error, unable to fetch list");
      });
  }, [url]);
  return { isLoading, errorMessage, data };
};

export default useFetch;
