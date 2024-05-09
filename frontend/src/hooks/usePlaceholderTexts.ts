import { useState, useEffect } from "react";

const usePlaceholderTexts = () => {
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  const placeholderTexts = [
    "Yoda...",
    "Luke Skywalker...",
    "Darth Vader...",
    "Boba Fett...",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prevIndex) =>
        prevIndex === placeholderTexts.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return { placeholderIndex, placeholderTexts };
};

export default usePlaceholderTexts;
