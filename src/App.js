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
import LightDarkMode from "./components/light-dark-mode/inde";
import ScrollIndicator from "./components/scroll-indicator";
import Tabs from "./components/custom-tabs/tabs";
import TabTest from "./components/custom-tabs/tab-test";
import ModalTest from "./components/custom-modal-popup/modal-test";
import GithubProfileFinder from "./components/github-profile-finder";
import SearchAutocomplete from "./components/search-auto-complete";
import TicTacToe from "./components/tic-tact-toe";
import FeatureFlagGlobalState from "./components/feature-flag/context";
import FeatureFlags from "./components/feature-flag";
import UseFetchHookTest from "./components/use-fetch/test";
import UseOnclickOutisdeTest from "./components/use-outside-click";
import useWindowResize from "./components/use-window-resize";


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
      {/*<QRCodeGenerator />*/}
      {/*<LightDarkMode />*/}
      {/*<ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />*/}
      {/*<TabTest/>*/}
      {/*<ModalTest/>*/}
      {/*<GithubProfileFinder/>*/}
      {/*<SearchAutocomplete/>*/}
      {/*<TicTacToe />*/}
      {/*<FeatureFlagGlobalState>
        <FeatureFlags/></FeatureFlagGlobalState>*/}
        {/*useFetch - Custom hook*/}
        {/*<UseFetchHookTest />*/}
        {/* Use OnClick Outside Hook Test */}
        {/*<UseOnclickOutisdeTest/>*/}
        {/* Use Window Resize Hook test */}
        { <UseWindowResizeTest/> }
    </div>
  );
}

export default App;
