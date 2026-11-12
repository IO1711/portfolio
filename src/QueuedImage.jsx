import { useEffect, useRef, useState } from "react";
import { observeNearViewport, useQueuedImage } from "./imageHooks";

const QueuedImage = ({ src, srcSet, sizes, priority, urgent = false, style, ...imageProps }) => {
  const ref = useRef(null);
  const [near, setNear] = useState(false);
  useEffect(() => observeNearViewport(ref.current, () => setNear(true)), []);
  const url = useQueuedImage(src, urgent ? 2 : priority, near || urgent, srcSet, sizes);

  return <img
    {...imageProps}
    ref={ref}
    src={url || undefined}
    srcSet={url ? srcSet : undefined}
    sizes={url ? sizes : undefined}
    style={{ ...style, visibility: url ? "visible" : "hidden" }}
  />;
};

export default QueuedImage;
