import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";

export const useBgColor = () => {
  const router = useRouter();
  console.log(router);

  const bgColor = useMemo(() => {
    switch (router.pathname) {
      case "/posts": {
        return "rebeccapurple";
      }
      case "/about": {
        return "black";
      }
      default: {
        return "";
      }
    }
  }, [router.pathname]);

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [bgColor]);
};
