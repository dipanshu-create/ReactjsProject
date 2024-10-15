import React, { useRef, useState } from "react";
import useOutsideClick from ".";

export default function UseOnclickOutisdeTest() {
    const ref=useRef();
    const [showContent, setShowContent] = useState(false);
     
    useOutsideClick(ref,()=>setShowContent(false))
    return (
    <div>
      {showContent ? (
        <div ref={ref}>
          <h1>this is a random content</h1>
          <p>
            please click outside of this to close this.it won't close if you
            click inside of this content
          </p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
}
