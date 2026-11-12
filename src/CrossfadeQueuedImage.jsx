import { useState } from "react";
import QueuedImage from "./QueuedImage";

const CrossfadeQueuedImage = ({
  src,
  srcSet,
  sizes,
  priority,
  urgent = false,
  eager = false,
  width,
  height,
  alt,
  stageClassName,
  imageClassName,
  overlayStyle,
  placeholder,
}) => {
  const key = `${src}\n${srcSet || ""}\n${sizes || ""}`;
  const [shown, setShown] = useState(null);
  const switching = shown && shown.key !== key;

  const current = { key, src, srcSet, sizes, width, height, alt };
  const remember = (event) => {
    setShown({ ...current, url: event.currentTarget.currentSrc });
  };

  return (
    <div className={stageClassName}>
      {shown && (
        <img
          src={shown.url}
          srcSet={shown.srcSet}
          sizes={shown.sizes}
          width={shown.width}
          height={shown.height}
          alt={switching ? "" : shown.alt}
          aria-hidden={switching ? true : undefined}
          className={imageClassName}
        />
      )}
      {(!shown || switching) && (
        <QueuedImage
          key={key}
          src={src}
          srcSet={srcSet}
          sizes={sizes}
          priority={priority}
          urgent={urgent}
          eager={eager}
          fadeIn={Boolean(switching)}
          width={width}
          height={height}
          alt={alt}
          className={imageClassName}
          style={switching ? overlayStyle : undefined}
          onLoad={!shown ? remember : undefined}
          onAnimationEnd={switching ? (event) => {
            if (event.animationName === "gallery-crossfade") remember(event);
          } : undefined}
        />
      )}
      {!shown && placeholder}
    </div>
  );
};

export default CrossfadeQueuedImage;
