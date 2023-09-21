import React, { useState, useEffect } from 'react';

const Quote = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const fetchQuote = async () => {
      setIsLoading(true);
      try {
        const res = await fetch('https://api.api-ninjas.com/v1/quotes?category=business', {
          headers: { 'X-Api-Key': 's6+YC1gLgXK8FmJMXOBbsw==3Wh0cJSoPntBrB3T' },
          signal: abortController.signal,
        });
        const json = await res.json();
        setData(json);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchQuote();
    return () => abortController.abort();
  }, [setData, setIsLoading, hasError]);

  const errorAlert = () => {
    if (hasError) {
      <div> Everything is fine! </div>;
    } else {
      <div> Something Went Wrong! </div>;
    }
  };

  errorAlert();

  return (
    <>
      <div id="mid" className="quote">
        {isLoading ? <div>Loading a Quote...</div> : (
          <ul>
            {data.map((item) => (
              <li key={item.id}>
                {item.quote}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Quote;
