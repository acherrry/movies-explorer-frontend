import React from "react";

export default function useWindowWidth() {
  const [windowWidth, setWindowWidth] = React.useState(undefined);

  React.useEffect(() => {
  function resizeWindowWidth() {
    setWindowWidth(window.innerWidth)
  };

  let timer = setTimeout(resizeWindowWidth, 1000);

  function handleResizeWindowWidth() {
    clearTimeout(timer);
    timer = setTimeout(resizeWindowWidth, 1000);
  }

  window.addEventListener('resize', handleResizeWindowWidth);
  resizeWindowWidth();
  return () => window.removeEventListener('resize', handleResizeWindowWidth);
}, []);

  return windowWidth;
}