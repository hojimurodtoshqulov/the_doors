import React, { useState, useEffect } from "react";
import styles from "./image.module.scss";
interface ImageMagnifierGlassProps {
  imageSrc: string;
  zoomLevel?: number;
}

interface GlassPosition {
  x: number;
  y: number;
}

interface GlassSize {
  width: number;
  height: number;
}

interface ImageSize {
  width: number;
  height: number;
}

const ImageMagnifierGlass: React.FC<ImageMagnifierGlassProps> = ({
  imageSrc,
  zoomLevel = 3,
}) => {
  const [glassPosition, setGlassPosition] = useState<GlassPosition>({
    x: 0,
    y: 0,
  });
  const [glassSize, setGlassSize] = useState<GlassSize>({
    width: 0,
    height: 0,
  });
  const [imageSize, setImageSize] = useState<ImageSize>({
    width: 0,
    height: 0,
  });
  const [showMagnifier, setShowMagnifier] = useState<boolean>(false);

  const handleMouseMove = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    const image = event.currentTarget;
    const { left: imageX, top: imageY } = image.getBoundingClientRect();
    const { clientX: mouseX, clientY: mouseY } = event;
    const glassWidth = image.clientWidth / zoomLevel;
    const glassHeight = glassWidth;
    const maxLeft = image.clientWidth - glassWidth;
    const maxTop = image.clientHeight - glassHeight;
    const glassLeft = mouseX - imageX - glassWidth / 2;
    const glassTop = mouseY - imageY - glassHeight / 2;

    if (glassLeft < 0) {
      setGlassPosition((prevState) => ({ ...prevState, x: 0 }));
    } else if (glassLeft > maxLeft) {
      setGlassPosition((prevState) => ({ ...prevState, x: maxLeft }));
    } else {
      setGlassPosition((prevState) => ({ ...prevState, x: glassLeft }));
    }

    if (glassTop < 0) {
      setGlassPosition((prevState) => ({ ...prevState, y: 0 }));
    } else if (glassTop > maxTop) {
      setGlassPosition((prevState) => ({ ...prevState, y: maxTop }));
    } else {
      setGlassPosition((prevState) => ({ ...prevState, y: glassTop }));
    }

    setGlassSize({ width: glassWidth, height: glassHeight });
    setShowMagnifier(true);
  };

  const handleMouseLeave = () => {
    setShowMagnifier(false);
  };

  return (
    <div className={styles.container}>
      <img
        className={styles.mainimage}
        src={imageSrc}
        alt="Main Image"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onLoad={(e) => {
          const image = e.currentTarget;
          setImageSize({
            width: image.width,
            height: image.height,
          });
        }}
      />
      {showMagnifier && (
        <div
          className={styles.magnifierglass}
          style={{
            left: `${glassPosition.x}px`,
            top: `${glassPosition.y}px`,
            width: `${glassSize.width}px`,
            height: `${glassSize.height}px`,
            backgroundImage: `url(${imageSrc})`,
            backgroundSize: `${imageSize.width * zoomLevel} ${
              imageSize.height * zoomLevel
            }`,
            backgroundPosition: `${
              (glassPosition.x * 100) / (imageSize.width - glassSize.width)
            }% ${
              (glassPosition.y * 100) / (imageSize.height - glassSize.height)
            }%`,
          }}
        >
          {/* <img
            className={styles.magnifiedimage}
            src={imageSrc}
            alt="Magnified Image"
            style={{
              left: `-${imageSize.width * zoomLevel}px`,
              top: `-${imageSize.height * zoomLevel}px`,
            }}
          /> */}
        </div>
      )}
    </div>
  );
};

export default ImageMagnifierGlass;
