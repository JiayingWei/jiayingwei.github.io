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
    if (project.youtube) {
      slides.push({ type: 'video', src: 'https://www.youtube.com/embed/' + project.youtube + '?rel=0' });
    }
    for (var i = 0; i < project.images.length; i++) {
      slides.push({ type: 'image', src: project.images[i] });
    }
    return slides;
  }

  function setSlide(index) {
    if (!currentSlides.length) return;
    currentIndex = (index + currentSlides.length) % currentSlides.length;
    var slide = currentSlides[currentIndex];

    var video = document.getElementById('hardware-modal-video');
    var img = document.getElementById('hardware-modal-image');

    if (slide.type === 'video') {
      video.src = slide.src;
      video.classList.remove('hidden');
      img.classList.add('hidden');
      img.src = '';
    } else {
      video.src = '';
      video.classList.add('hidden');
      img.src = slide.src;
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
    document.removeEventListener('keydown', handleHardwareKeydown);
    currentSlides = [];
  };

  window.hardwareNextSlide = function () { setSlide(currentIndex + 1); };
  window.hardwarePrevSlide = function () { setSlide(currentIndex - 1); };
})();
