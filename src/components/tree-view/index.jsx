import React from "react";

import MenuList from "./menu-list";

export default function TreeView({ menu = {} }) {
  return (
    <div className="tree-view-container">
      <MenuList list={menu} />
      Console.log(menu)
    </div>
  );
}
