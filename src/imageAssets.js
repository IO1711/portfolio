const dimensions = {
  "/skrbl_1.webp": [1242, 2688],
  "/skrbl_2.webp": [1242, 2688],
  "/skrbl_3.webp": [1242, 2688],
  "/manageit_admin_1.webp": [3420, 1978],
  "/manageit_admin_2.webp": [3420, 1976],
  "/manageit_admin_3.webp": [3420, 1978],
  "/manageit_admin_4.webp": [3420, 1976],
  "/manageit_editor_1.webp": [3418, 1978],
  "/manageit_editor_2.webp": [3420, 1978],
  "/manageit_editor_3.webp": [3420, 1978],
  "/consulting1.webp": [3418, 2032],
  "/consulting2.webp": [3418, 2042],
  "/consulting3.webp": [3418, 2044],
  "/table_editor.webp": [3420, 1980],
  "/bob_placeholder.webp": [1488, 770],
  "/Pick2Plot_1.PNG": [1170, 2532],
  "/Pick2Plot_2.webp": [1170, 2532],
  "/Pick2Plot_3.webp": [1170, 2532],
  "/apple_certificate.webp": [3300, 2375],
  "/yandex_certificate.webp": [2479, 3508],
  "/react_certificate.webp": [8533, 6033],
  "/js_certificate.webp": [8533, 6033],
  "/spring_certificate.webp": [3508, 2479],
};

// Widths of the two lossless card previews, used by srcSet.
const responsivePreviews = {
  "/consulting1.webp": [1100, 1800],
  "/consulting2.webp": [1100, 1800],
  "/table_editor.webp": [1100, 1800],
  "/Pick2Plot_1.PNG": [509, 832],
  "/Pick2Plot_2.webp": [509, 832],
  "/Pick2Plot_3.webp": [509, 832],
};

const certificatePreviews = new Set([
  "/react_certificate.webp",
  "/js_certificate.webp",
  "/spring_certificate.webp",
]);

export const getImageAsset = (full) => {
  const size = dimensions[full];
  if (!size) {
    return { full, preview: full, thumbnail: full };
  }

  const name = full.slice(full.lastIndexOf("/") + 1).replace(/\.[^.]+$/, "");
  const variant = (kind) => `/previews/${name}-${kind}.webp`;
  const responsiveWidths = responsivePreviews[full];
  const preview = responsiveWidths || certificatePreviews.has(full)
    ? variant("card")
    : full;

  return {
    full,
    preview,
    thumbnail: variant("thumb"),
    width: size[0],
    height: size[1],
    srcSet: responsiveWidths
      ? `${variant("small")} ${responsiveWidths[0]}w, ${variant("card")} ${responsiveWidths[1]}w`
      : undefined,
  };
};
