// Hardware project modal: unified video + photo carousel
(function () {
  var hardwareProjects = [];
  var currentSlides = [];
  var currentIndex = 0;

  function loadHardwareData() {
    if (hardwareProjects.length) return hardwareProjects;
    var dataEl = document.getElementById('hardware-data');
    if (!dataEl) return [];
    hardwareProjects = JSON.parse(dataEl.textContent);
    return hardwareProjects;
  }

  function buildSlides(project) {
    var slides = [];
    for (var i = 0; i < project.images.length; i++) {
      slides.push({ type: 'image', src: project.images[i].src, alt: project.images[i].alt });
    }

    var videoSlide = null;
    if (project.video_file) {
      videoSlide = { type: 'local-video', src: project.video_file };
    } else if (project.youtube) {
      videoSlide = { type: 'video', src: 'https://www.youtube.com/embed/' + project.youtube + '?rel=0' };
    }

    if (videoSlide) {
      // video_position is 1-indexed (defaults to 1, i.e. first slide); clamp to a valid splice index.
      var position = project.video_position || 1;
      var insertIndex = Math.max(0, Math.min(position - 1, slides.length));
      slides.splice(insertIndex, 0, videoSlide);
    }

    return slides;
  }

  function setSlide(index) {
    if (!currentSlides.length) return;
    currentIndex = (index + currentSlides.length) % currentSlides.length;
    var slide = currentSlides[currentIndex];

    var video = document.getElementById('hardware-modal-video');
    var localVideo = document.getElementById('hardware-modal-local-video');
    var img = document.getElementById('hardware-modal-image');

    // Reset all three media elements, then reveal only the active one.
    video.classList.add('hidden');
    video.src = '';

    localVideo.classList.add('hidden');
    localVideo.pause();
    localVideo.removeAttribute('src');
    localVideo.load();

    img.classList.add('hidden');
    img.src = '';
    img.alt = '';

    if (slide.type === 'video') {
      video.src = slide.src;
      video.classList.remove('hidden');
    } else if (slide.type === 'local-video') {
      localVideo.src = slide.src;
      localVideo.classList.remove('hidden');
      // Autoplay policies require muted (set on the element) for playback without a fresh user gesture.
      var playPromise = localVideo.play();
      if (playPromise) playPromise.catch(function () {});
    } else {
      img.src = slide.src;
      img.alt = slide.alt || '';
      img.classList.remove('hidden');
    }

    var prevBtn = document.getElementById('hardware-modal-prev');
    var navWrapper = prevBtn.parentElement;
    navWrapper.style.display = currentSlides.length > 1 ? 'flex' : 'none';
  }

  function handleHardwareKeydown(e) {
    if (e.key === 'Escape') closeHardwareModal();
    if (e.key === 'ArrowRight') hardwareNextSlide();
    if (e.key === 'ArrowLeft') hardwarePrevSlide();
  }

  window.openHardwareModal = function (slug) {
    var projects = loadHardwareData();
    var project = null;
    for (var i = 0; i < projects.length; i++) {
      if (projects[i].slug === slug) { project = projects[i]; break; }
    }
    if (!project) return;

    document.getElementById('hardware-modal-title').textContent = project.title;
    document.getElementById('hardware-modal-skills').innerHTML = '<span class="font-bold">Skills:</span> ' + project.skills;
    document.getElementById('hardware-modal-team').innerHTML = project.team ? '<span class="font-bold">Team:</span> ' + project.team : '';
    document.getElementById('hardware-modal-description').textContent = project.description || '';

    var videoTitle = project.title + ' video';
    document.getElementById('hardware-modal-video').title = videoTitle;
    document.getElementById('hardware-modal-local-video').setAttribute('aria-label', videoTitle);

    currentSlides = buildSlides(project);
    setSlide(0);

    var modal = document.getElementById('hardware-modal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.classList.add('overflow-hidden');
    document.addEventListener('keydown', handleHardwareKeydown);
  };

  window.closeHardwareModal = function () {
    var modal = document.getElementById('hardware-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.classList.remove('overflow-hidden');
    document.getElementById('hardware-modal-video').src = '';
    var localVideo = document.getElementById('hardware-modal-local-video');
    localVideo.pause();
    localVideo.removeAttribute('src');
    localVideo.load();
    document.removeEventListener('keydown', handleHardwareKeydown);
    currentSlides = [];
  };

  window.hardwareNextSlide = function () { setSlide(currentIndex + 1); };
  window.hardwarePrevSlide = function () { setSlide(currentIndex - 1); };
})();
