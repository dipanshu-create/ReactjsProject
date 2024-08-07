import "./App.css";
import Accordian from "./components/accordian";
import React from "react";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";

import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-button";
import TreeView from "./components/tree-view";

import { menus } from "./components/tree-view/data";
import QRCodeGenerator from "./components/qr-code-generator";

function App() {
  return (
    <div className="App">
      {/* Accordian component */}
      {/*<Accordian />*/}
      {/* Random color component */}
      {/*<RandomColor />*/}
      {/*<StarRating />*/}

      {/*<ImageSlider
          url={"https://picsum.photos/v2/list"}
          page={"1"}
          limit={"10"}
        /> */}
      {/*<LoadMoreData />*/}
      {/*<TreeView menu={menus} />*/}
      {<QRCodeGenerator />}
    </div>
  );
}

export default App;
