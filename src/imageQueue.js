const jobs = new Map();
let activeJob = null;
let nextSequence = 0;
let resumeScheduled = false;
let startScheduled = false;

const jobKey = (src, srcSet, sizes) => `${src}\n${srcSet || ""}\n${sizes || ""}`;

const startNext = () => {
  if (activeJob || resumeScheduled || typeof Image === "undefined") return;

  const next = [...jobs.values()]
    .filter((job) => job.status === "queued")
    .sort((a, b) => a.priority - b.priority || a.sequence - b.sequence)[0];
  if (!next) return;

  activeJob = next;
  next.status = "loading";
  const image = new Image();
  next.image = image;
  image.decoding = "async";
  image.fetchPriority = "high";

  const finish = (loadedUrl) => {
    if (next.status !== "loading") return;
    next.status = loadedUrl ? "loaded" : "failed";
    next.loadedUrl = loadedUrl;
    next.image = null;
    activeJob = null;
    resumeScheduled = true;
    next.resolve(loadedUrl);
    // Let React display this image before starting another request.
    setTimeout(() => {
      resumeScheduled = false;
      startNext();
    }, 0);
  };

  image.onload = async () => {
    try {
      await image.decode();
    } catch {
      // onload already confirmed the image is usable.
    }
    finish(image.currentSrc || image.src);
  };
  image.onerror = () => finish(null);
  if (next.sizes) image.sizes = next.sizes;
  if (next.srcSet) image.srcset = next.srcSet;
  image.src = next.src;
};

const scheduleStart = () => {
  if (startScheduled || activeJob || resumeScheduled) return;
  startScheduled = true;
  setTimeout(() => {
    startScheduled = false;
    startNext();
  }, 0);
};

export const queueImage = (src, priority, srcSet, sizes) => {
  if (!src) return Promise.resolve(null);

  const key = jobKey(src, srcSet, sizes);
  let job = jobs.get(key);
  if (!job) {
    job = {
      src,
      srcSet,
      sizes,
      priority,
      sequence: nextSequence++,
      status: "queued",
      loadedUrl: null,
    };
    job.promise = new Promise((resolve) => { job.resolve = resolve; });
    jobs.set(key, job);
  } else if (job.status === "queued") {
    job.priority = Math.min(job.priority, priority);
  }

  scheduleStart();
  return job.promise;
};

export const loadedImage = (src, srcSet, sizes) => {
  const job = jobs.get(jobKey(src, srcSet, sizes));
  return job?.status === "loaded" ? job.loadedUrl : null;
};

// These two jobs are registered before the page mounts, so no project image
// can start before the hero background and portrait.
if (typeof window !== "undefined") {
  queueImage("/portfolioBg2-1.webp", 0);
  queueImage("/profile.webp", 1);
}
