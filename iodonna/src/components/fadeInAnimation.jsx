import { useState, useEffect } from "react";

function FadeIn({ children, delay }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return <p className={visible ? "show" : "hide"}>{children}</p>;
}

export default FadeIn;
