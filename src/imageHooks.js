import { useCallback, useEffect, useState } from "react";
import { loadedImage, queueImage } from "./imageQueue";

export const useQueuedImage = (src, priority, enabled = true, srcSet, sizes) => {
  const key = `${src || ""}\n${srcSet || ""}\n${sizes || ""}`;
  const [result, setResult] = useState(() => ({ key, url: loadedImage(src, srcSet, sizes) }));

  useEffect(() => {
    if (!enabled || !src) return undefined;

    let active = true;
    queueImage(src, priority, srcSet, sizes).then((url) => {
      if (active) setResult({ key, url });
    });
    return () => { active = false; };
  }, [enabled, key, priority, sizes, src, srcSet]);

  return result.key === key ? result.url : null;
};

export const observeNearViewport = (node, onNear) => {
  if (!node) return () => {};
  if (typeof IntersectionObserver === "undefined") {
    onNear();
    return () => {};
  }

  const observer = new IntersectionObserver((entries) => {
    if (entries.some((entry) => entry.isIntersecting)) {
      onNear();
      observer.disconnect();
    }
  }, { rootMargin: "500px 0px" });
  observer.observe(node);
  return () => observer.disconnect();
};

export const useQueuedBackground = (src, priority, onNode) => {
  const [node, setNode] = useState(null);
  const [near, setNear] = useState(false);
  const ref = useCallback((element) => {
    onNode?.(element);
    setNode(element);
  }, [onNode]);

  useEffect(() => observeNearViewport(node, () => setNear(true)), [node]);
  const url = useQueuedImage(src, priority, near);
  return [ref, url];
};
