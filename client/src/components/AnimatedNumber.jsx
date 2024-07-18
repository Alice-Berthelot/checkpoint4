import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function AnimatedNumber({ target }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const interval = 10;
    const increment = target / (duration / interval);

    const counter = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount + increment >= target) {
          clearInterval(counter);
          return target;
        }
        return prevCount + increment;
      });
    }, interval);

    return () => clearInterval(counter);
  }, [target]);

  return <p className="animated-number">{Math.round(count)}</p>;
}

AnimatedNumber.propTypes = {
  target: PropTypes.number.isRequired,
};

export default AnimatedNumber;
