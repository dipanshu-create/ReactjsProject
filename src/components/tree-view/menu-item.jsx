import React, { useState } from "react";
import MenuList from "./menu-list";

export default function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  function handleToggleClick(getlabelname) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getlabelname]: !displayCurrentChildren[getlabelname],
    });
  }
  console.log(displayCurrentChildren);
  return (
    <li>
      <div>
        <p>{item.label}</p>
        {item && item.children && item.children.length > 0 ? (
          <span onClick={() => handleToggleClick(item.lable)}>
            {displayCurrentChildren[item.lable] ? "-" : "+"}
          </span>
        ) : null}
      </div>

      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.lable] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}
