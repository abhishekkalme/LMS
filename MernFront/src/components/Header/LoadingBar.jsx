import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NProgress from "nprogress";
import "nprogress/nprogress.css"; // important: import CSS

// Optional: Customize NProgress
NProgress.configure({ showSpinner: false, speed: 400, trickleSpeed: 200 });

const LoadingBar = () => {
  const location = useLocation();

  useEffect(() => {
    NProgress.start(); // Start loading bar when location changes

    const timer = setTimeout(() => {
      NProgress.done(); // Complete loading bar after short delay
    }, 100); // adjust time if needed

    return () => {
      clearTimeout(timer);
      NProgress.done();
    };
  }, [location.pathname]);

  return null; // No UI element needed
};

export default LoadingBar;
