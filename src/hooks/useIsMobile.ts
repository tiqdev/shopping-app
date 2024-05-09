import { useLayoutEffect, useState } from "react";

const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const updateSize = (): void => {
      setIsMobile(window.innerWidth < 840);
    };
    window.addEventListener("resize", updateSize);

    return (): void => window.removeEventListener("resize", updateSize);
  }, []);

  return isMobile;
};

export default useIsMobile;
