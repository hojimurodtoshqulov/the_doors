import { MouseEvent, useRef, useState } from "react";
import styles from "./styles.module.scss";
import { log } from "console";

function ModalImages({ images }: { images?: string[] }) {
  const [image, setImage] = useState(images?.[0]);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [showMagnifier, setShowMagnifier] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const zoomLevel = 3;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - containerRect.left;
      const y = e.clientY - containerRect.top;
      setCursorPosition({ x, y });
      setShowMagnifier(true);
    }
  };

  const handleMouseLeave = () => {
    setShowMagnifier(false);
  };
  const magnifierStyle = {
    backgroundImage: `url(${image})`,
    backgroundPosition: `${-cursorPosition.x * zoomLevel}px ${
      -cursorPosition.y * zoomLevel
    }px`,
    backgroundSize: `${zoomLevel * 100}%`,
    top: cursorPosition.y,
    left: cursorPosition.x,
    transform: "translate(-50%, -50%)",
    zIndex: 999,
    pointerevent: "none",
    display: showMagnifier ? "block" : "none",
  };

  console.log(showMagnifier);

  return (
    <div className={styles.images}>
      <div className={styles.miniimages}>
        {images?.map((image: string) => (
          <img
            src={image}
            onClick={(e) => {
              setImage(image);
            }}
          />
        ))}
      </div>
      <div
        className={styles.mainimage}
        ref={containerRef}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        <img src={image} alt="" />
        <div className={styles.magnifierGlass} style={magnifierStyle}></div>
      </div>
    </div>
  );
}

export default ModalImages;
