import React, { useEffect, useState } from "react";
import styles from "./Carousel.module.css";
import { ReactComponent as LeftArrow } from "../../assets/left-arrow.svg";
import { ReactComponent as RightArrow } from "../../assets/right-arrow.svg";

// Shows items from `start` onwards; items scrolled past are removed from the DOM.
function Carousel({ data, renderComponent }) {
  const [start, setStart] = useState(0);
  const maxStart = Math.max(data.length - 1, 0);

  useEffect(() => {
    setStart(0);
  }, [data]);

  const handlePrev = () => setStart((s) => Math.max(s - 1, 0));
  const handleNext = () => setStart((s) => Math.min(s + 1, maxStart));

  return (
    <div className={styles.wrapper}>
      <button
        type="button"
        aria-label="Previous"
        className={`${styles.navButton} ${styles.left}`}
        style={{ visibility: start > 0 ? "visible" : "hidden" }}
        onClick={handlePrev}
      >
        <LeftArrow />
      </button>
      <div className={styles.track}>
        {data.slice(start).map((item) => (
          <div className={styles.slide} key={item.id}>
            {renderComponent(item)}
          </div>
        ))}
      </div>
      <button
        type="button"
        aria-label="Next"
        className={`${styles.navButton} ${styles.right}`}
        onClick={handleNext}
      >
        <RightArrow />
      </button>
    </div>
  );
}

export default Carousel;
