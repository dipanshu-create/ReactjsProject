import React from "react";
import useFetch from "../use-fetch";

export default function ScorllToTopAndBottom() {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products",
    {}
  );

  if (error){
    return <h1>Error occured ! Please try again.</h1>
  }

if (pending){
    return <h1>Loading ! Please wait</h1>
}

  return (
    <div>
      <h1>scroll to top and bottom feature</h1>
      <h3>This is the top section</h3>
      <button>Scroll to Bottom</button>
      <ul style={{listStyle:'none'}}>
        {data && data.products && data.products.length
          ? data.products.map((item) => <li>{item.title}</li>)
          : null}
      </ul>
      <button>Scroll to Top</button>
      <h3>This is the bottom of the page</h3>
    </div>
  );
}
