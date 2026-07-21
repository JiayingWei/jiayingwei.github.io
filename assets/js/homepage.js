document.addEventListener('mousemove', function(e) {
  const x = e.clientX;
  const y = e.clientY;
  document.documentElement.style.setProperty('--x', `${x}px`);
  document.documentElement.style.setProperty('--y', `${y}px`);
});

// Jump from the hero into the portfolio section (and back) with an eased
// scroll instead of the browser's native, instant scroll-snap.
document.addEventListener('DOMContentLoaded', function () {
  const hero = document.querySelector('#hero');
  const portfolio = document.querySelector('#portfolio');
  if (!hero || !portfolio) return;

  let animating = false;

  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function animateScrollTo(targetY, duration) {
    const startY = window.scrollY;
    const distance = targetY - startY;
    const startTime = performance.now();
    animating = true;

    function step(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      window.scrollTo(0, startY + distance * easeInOutCubic(progress));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        animating = false;
      }
    }

    requestAnimationFrame(step);
  }

  window.addEventListener('wheel', function (e) {
    if (window.innerWidth < 768 || animating) return;

    const scrollY = window.scrollY;
    const heroBottom = hero.offsetHeight;

    // Scrolling down from inside the hero: jump to the portfolio section.
    if (e.deltaY > 0 && scrollY < heroBottom) {
      e.preventDefault();
      animateScrollTo(heroBottom, 900);
    // Scrolling up while just below the hero: jump back to the top.
    } else if (e.deltaY < 0 && scrollY > 0 && scrollY <= heroBottom + 40) {
      e.preventDefault();
      animateScrollTo(0, 900);
    }
  }, { passive: false });
});

document.addEventListener('scroll', function() {
  const header = document.querySelector('#header');
  const targetDiv = document.querySelector('#portfolio');
  const siteName = document.querySelector('#site-name');

  // Get the distance of the target div from the top of the page
  const targetDivPosition = targetDiv.getBoundingClientRect().top;

  // Get the current scroll position
  const scrollPosition = window.scrollY + window.innerHeight;

  // Apply effect only if on desktop
  if (window.innerWidth > 600){
    // Change header background when the scroll position reaches the target div
    if (targetDivPosition < header.offsetHeight) {
      header.classList.add("bg-dark_purple") // Change to the desired color
    } else {
      header.classList.remove("bg-dark_purple"); // Default header background color
    }
  }

  // Fade the name into the header once the user starts scrolling
  if (siteName) {
    if (window.scrollY > 10) {
      siteName.classList.remove("opacity-0");
      siteName.classList.add("opacity-100");
    } else {
      siteName.classList.add("opacity-0");
      siteName.classList.remove("opacity-100");
    }
  }
}
);
