import { useState, useEffect } from "react";
import throttle from "lodash/throttle";

export const ComponentA = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = throttle(() => {
    console.log("Scroll event throttled");
    setScrollPosition(window.scrollY);
  }, 200);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ height: "5000px" }}>Scroll position: {scrollPosition}</div>
  );
};
