import React, { useEffect, useState } from "react";

export default function DowntoTop() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    // You can adjust the scroll threshold as needed
    const scrollThreshold = 150;

    setIsVisible(scrollY > scrollThreshold);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <div style={{ position: "fixed", bottom: "20px", right: "20px" }}>
        {isVisible && (
          <i
            className="bi bi-arrow-up-square-fill scroll-to-top-button "
            onClick={scrollToTop}
          ></i>
        )}
      </div>
    </div>
  );
}
