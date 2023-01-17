import React from "react";
import { useOutlet } from "react-router-dom";

const AnimatedOutlet: React.FC = () => {
  const o = useOutlet();
  const [outlet] = React.useState(o);

  return <>{outlet}</>;
};

export default AnimatedOutlet;
