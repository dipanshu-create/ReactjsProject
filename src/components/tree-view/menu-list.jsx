import React from "react";

import { MenuItem } from "@material-ui/core";

export default function MenuList({ list = [] }) {
  return (
    <div className="menu-list-container">
      {list && list.length
        ? list.map((listItem) => <MenuItem item={listItem} />)
        : null}
    </div>
  );
}
