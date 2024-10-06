import React, { useContext } from "react";
import LightDarkMode from "../light-dark-mode/inde";
import TicTacToe from "../tic-tact-toe";
import RandomColor from "../random-color";
import Accordian from "../accordian";
import TreeView from "../tree-view";
import { FeatureFlagsContext } from "./context";
import menus from "../tree-view/data";
import TabTest from "../custom-tabs/tab-test";

export default function FeatureFlags() {
  const { loading, enabledFlags } = useContext(FeatureFlagsContext);
  const componentsToRender = [
    { key: "showLightAndDarkMode", component: <LightDarkMode /> },
    { key: "showTicTacToeBoard", component: <TicTacToe /> },
    { key: "showRandomColorGenerator", component: <RandomColor /> },
    { key: "showAccordian", component: <Accordian /> },
    { key: "showTreeView", component: <TreeView menus={menus}/> },
    {
      key: "showTabs",
      component: <TabTest />,
    },
  ];
  function checkEnabledFlags(getCurrentKey) {
    return enabledFlags[getCurrentKey];
  }

  if (loading) return <h1>Loading Data ! Please wait </h1>;

  return (
    <div>
      <h1>feature flags</h1>
      {componentsToRender.map((componentItem) =>
        checkEnabledFlags(componentItem.key) ? componentItem.component : null
      )}
    </div>
  );
}
