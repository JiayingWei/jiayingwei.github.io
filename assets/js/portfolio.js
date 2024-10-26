//Image toggling on click
function toggleImage(img) {
  // Get default and alternate image paths from data attributes
  const defaultSrc = img.getAttribute('data-default-src');
  const altSrc = img.getAttribute('data-alt-src');

//   // Check if the current src ends with the default or alternate image path
  if (img.src.endsWith(defaultSrc.split('/').pop())) {
    img.src = altSrc;
  } else {
    img.src = defaultSrc;
  }
};