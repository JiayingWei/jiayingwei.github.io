document.addEventListener('mousemove', function(e) {
  const x = e.clientX;
  const y = e.clientY;
  document.documentElement.style.setProperty('--x', `${x}px`);
  document.documentElement.style.setProperty('--y', `${y}px`);
});

document.addEventListener('scroll', function() {
  const header = document.querySelector('#header');
  const targetDiv = document.querySelector('#portfolio');
  
  // Get the distance of the target div from the top of the page
  const targetDivPosition = targetDiv.getBoundingClientRect().top;
  console.log(targetDivPosition)

  // Get the current scroll position
  const scrollPosition = window.scrollY + window.innerHeight;

  // Change header background when the scroll position reaches the target div
  if (targetDivPosition < header.offsetHeight) {
    header.classList.add("bg-dark_purple") // Change to the desired color
  } else {
    header.classList.remove("bg-dark_purple"); // Default header background color
  }
});
