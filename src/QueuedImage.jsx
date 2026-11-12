import { useEffect, useRef, useState } from "react";
import { observeNearViewport, useQueuedImage } from "./imageHooks";

const QueuedImage = ({ src, srcSet, sizes, priority, urgent = false, eager = false, fadeIn = false, style, className, ...imageProps }) => {
  const ref = useRef(null);
  const [near, setNear] = useState(false);
  useEffect(() => observeNearViewport(ref.current, () => setNear(true)), []);
  const url = useQueuedImage(src, urgent ? 2 : priority, near || urgent || eager, srcSet, sizes);

  return <img
    {...imageProps}
    ref={ref}
    src={url || undefined}
    srcSet={url ? srcSet : undefined}
    sizes={url ? sizes : undefined}
    className={`${className || ""}${fadeIn && url ? " gallery-crossfade" : ""}`}
    style={{ ...style, visibility: url ? "visible" : "hidden" }}
  />;
};

export default QueuedImage;
