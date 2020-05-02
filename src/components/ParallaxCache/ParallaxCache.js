import React, { useLayoutEffect } from "react";
import { node } from "prop-types";
import { useController } from "react-scroll-parallax";

const ParallaxCache = ({ children }) => {
  const { parallaxController } = useController();

  useLayoutEffect(() => {
    const handler = () => parallaxController.update();
    window.addEventListener("load", handler);
    return () => window.removeEventListener("load", handler);
  }, [parallaxController]);

  return <>{children}</>;
};

ParallaxCache.propTypes = {
  children: node.isRequired,
}

export default ParallaxCache;
