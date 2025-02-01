import { useEffect } from "react";

export const useBgRebeccapurple = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "rebeccapurple";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
};
