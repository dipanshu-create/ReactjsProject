import { useEffect, useState } from "react";

export default function (url, limit) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, SetErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function FetchImage(geturl) {
    try {
      const response = await fetch(geturl);
      const data = await response.json();
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }
  useEffect(() => {
    if (url !== "") FetchImage();
  }, [url]);
  return <div className="container"></div>;
}
