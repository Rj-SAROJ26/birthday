document.addEventListener("DOMContentLoaded", () => {
  const loaderScreen = document.querySelector(".loader-screen");
  const experience = document.getElementById("experience");
  const loadingPercentage = document.getElementById("loadingPercentage");
  const loadingProgress = document.getElementById("loadingProgress");
  const startJourneyButton = document.querySelector(".start-journey");
  const storySection = document.getElementById("story");
  const revealTargets = document.querySelectorAll("[data-reveal]");
  const imageViewerTriggers = document.querySelectorAll(".gallery-item, [data-image-viewer]");
  const galleryItems = document.querySelectorAll(".gallery-item");
  const imageViewer = document.getElementById("imageViewer");
  const viewerImage = document.getElementById("viewerImage");
  const viewerCaption = document.getElementById("viewerCaption");
  const viewerCloseButton = document.querySelector(".viewer-close");
  const viewerBackdrop = document.querySelector("[data-viewer-close]");
  const flipCards = document.querySelectorAll("[data-flip-card]");
  const countdownSection = document.getElementById("countdown");
  const countdownDays = document.getElementById("countdownDays");
  const countdownHours = document.getElementById("countdownHours");
  const countdownMinutes = document.getElementById("countdownMinutes");
  const countdownSeconds = document.getElementById("countdownSeconds");
  const countdownNote = document.getElementById("countdownNote");
  const openLetterButton = document.getElementById("openLetter");
  const letterPaper = document.getElementById("letterPaper");
  const typedLetter = document.getElementById("typedLetter");
  const musicPlayer = document.querySelector(".music-player");
  const loveSong = document.getElementById("loveSong");
  const musicToggle = document.getElementById("musicToggle");
  const musicVolume = document.getElementById("musicVolume");
  const musicStatus = document.getElementById("musicStatus");
  const openVideoButtons = document.querySelectorAll(".video-open");
  const videoModal = document.getElementById("videoModal");
  const memoryVideo = document.getElementById("memoryVideo");
  const videoStatus = document.getElementById("videoStatus");
  const videoCloseButton = document.querySelector(".video-close");
  const videoBackdrop = document.querySelector("[data-video-close]");
  const blowCandlesButton = document.getElementById("blowCandles");
  const cakeStage = document.querySelector(".cake-stage");
  const cakeMessage = document.getElementById("cakeMessage");
  const launchFinaleButton = document.getElementById("launchFinale");
  const surpriseSection = document.getElementById("surprise");
  const fireworksLayer = document.getElementById("fireworksLayer");
  const confettiLayer = document.getElementById("confettiLayer");
  const customCursor = document.getElementById("customCursor");
  const sparkleLayer = document.getElementById("sparkleLayer");
  const loaderLabel = document.querySelector(".loader-label");
  const welcomeTitle = document.querySelector(".welcome-card h1");
  const surpriseTitle = document.querySelector(".surprise-card h2");
  const birthdayPasscode = "0726";
  const countdownBirthday = countdownSection?.dataset.birthday ?? "2006-07-26";
  const countdownHeading = countdownSection?.querySelector("h2");
  const birthdayParts = countdownBirthday.split("-").map(Number);
  const birthYear = birthdayParts[0];
  const birthMonth = birthdayParts[1] - 1;
  const birthDay = birthdayParts[2];
  const favoritePicture = "assets/images/WhatsApp Image 2026-07-23 at 23.48.40 (1).jpeg";
  const birthdaySongSource = "assets/music/Baby_Now_That_I_Found_You.mp3";
  const birthdaySong = new Audio(birthdaySongSource);
  birthdaySong.loop = true;
  birthdaySong.volume = 0.54;
  const loveLetterText = [
    "Happy Birthday to my favorite person, my best friend, my biggest supporter, and the best partner I could ever ask for.",
    "",
    "Thank you for always being by my side, supporting me, making me laugh, and believing in me through everything. Life feels so much brighter, happier, and more beautiful with you in it. Every moment we spend together becomes a memory I'll cherish forever.",
    "",
    "I hope this year brings you endless happiness, good health, success, and everything you've been wishing for. You deserve all the love, joy, and blessings this world has to offer.",
    "",
    "May your smile never fade, your dreams come true, and may we continue creating beautiful and unforgettable memories together.",
    "",
    "You truly mean the world to me, and I'm so grateful to have you in my life.",
    "",
    "Happy Birthday once again! Wishing you the most amazing day and an even more amazing year ahead.",
    "",
    "I love you more than words can ever express, and I promise to always stand by your side. Here's to celebrating many more birthdays together.",
    "",
    "Forever Yours,",
    "With All My Love"
  ].join("\n");
  const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hasGalleryFeature = Boolean(imageViewer && viewerImage && viewerCaption && viewerCloseButton && viewerBackdrop);
  const hasLetterFeature = Boolean(openLetterButton && letterPaper && typedLetter);
  const hasMusicFeature = Boolean(musicPlayer && loveSong && musicToggle && musicVolume && musicStatus);
  const hasVideoFeature = Boolean(openVideoButtons.length && videoModal && memoryVideo && videoStatus && videoCloseButton && videoBackdrop);
  const hasCountdownFeature = Boolean(countdownSection && countdownDays && countdownHours && countdownMinutes && countdownSeconds && countdownNote);
  const hasFinaleFeature = Boolean(launchFinaleButton && surpriseSection && fireworksLayer && confettiLayer);
  const passcodeSessionKey = "roshaniBirthdayUnlocked";
  const navigationType = window.performance?.getEntriesByType?.("navigation")?.[0]?.type;

  if (navigationType === "reload") {
    try {
      window.sessionStorage.removeItem(passcodeSessionKey);
    } catch (error) {
      // If storage is unavailable, the gate can still fall back to prompting.
    }
  }

  function hasStoredPasscodeUnlock() {
    try {
      return window.sessionStorage.getItem(passcodeSessionKey) === "true";
    } catch (error) {
      return false;
    }
  }

  function storePasscodeUnlock() {
    try {
      window.sessionStorage.setItem(passcodeSessionKey, "true");
    } catch (error) {
      // If storage is unavailable, the gate can still fall back to prompting.
    }
  }

  function createPasscodeGate() {
    if (hasStoredPasscodeUnlock()) {
      document.body.classList.add("is-unlocked");
      return;
    }

    document.body.classList.add("is-gated");

    const gate = document.createElement("section");
    gate.className = "passcode-gate";
    gate.setAttribute("role", "dialog");
    gate.setAttribute("aria-modal", "true");
    gate.setAttribute("aria-label", "Secret code login for Roshani");
    gate.innerHTML = `
      <div class="passcode-card">
        <div class="teddy-guard" aria-hidden="true">
          <span class="teddy-ear teddy-ear-left"></span>
          <span class="teddy-ear teddy-ear-right"></span>
          <span class="teddy-face">
            <span class="teddy-eye teddy-eye-left"></span>
            <span class="teddy-eye teddy-eye-right"></span>
            <span class="teddy-muzzle"></span>
            <span class="teddy-nose"></span>
          </span>
        </div>
        <p class="passcode-kicker">Teddy code</p>
        <h2>For Roshani only</h2>
        <p class="passcode-copy">Enter the 4-digit code to open the birthday world.</p>
        <form class="passcode-form">
          <label class="sr-only" for="birthdayPasscode">Secret code</label>
          <input id="birthdayPasscode" type="password" autocomplete="off" placeholder="Enter code" aria-describedby="passcodeMessage">
          <button type="submit">Open</button>
        </form>
        <p class="passcode-message" id="passcodeMessage" aria-live="polite"></p>
      </div>
    `;

    document.body.prepend(gate);

    const gatedElements = Array.from(document.body.children)
      .filter((element) => element !== gate)
      .map((element) => ({
        element,
        ariaHidden: element.getAttribute("aria-hidden"),
        inert: element.inert,
      }));

    gatedElements.forEach(({ element }) => {
      element.inert = true;
      element.setAttribute("aria-hidden", "true");
    });

    const form = gate.querySelector(".passcode-form");
    const input = gate.querySelector("#birthdayPasscode");
    const message = gate.querySelector("#passcodeMessage");

    function releaseGatedElements() {
      gatedElements.forEach(({ element, ariaHidden, inert }) => {
        element.inert = inert;

        if (ariaHidden === null) {
          element.removeAttribute("aria-hidden");
        } else {
          element.setAttribute("aria-hidden", ariaHidden);
        }
      });
    }

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const submittedCode = input.value.trim();

      if (submittedCode === birthdayPasscode) {
        message.textContent = "Welcome, Roshani. The teddy surprise is opening.";
        gate.classList.remove("is-wrong");
        gate.classList.add("is-unlocking");
        document.body.classList.add("is-unlocked");
        storePasscodeUnlock();

        window.setTimeout(() => {
          releaseGatedElements();
          document.body.classList.remove("is-gated");
          gate.remove();
        }, 650);

        return;
      }

      message.textContent = "Oops, it's wrong. Re-enter the code.";
      gate.classList.remove("is-wrong");
      void gate.offsetWidth;
      gate.classList.add("is-wrong");
      input.value = "";
      input.focus();
    });

    gate.addEventListener("keydown", (event) => {
      if (event.key !== "Tab") {
        return;
      }

      const focusableElements = Array.from(gate.querySelectorAll("button, input"));
      const firstFocusableElement = focusableElements[0];
      const lastFocusableElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstFocusableElement) {
        event.preventDefault();
        lastFocusableElement.focus();
        return;
      }

      if (!event.shiftKey && document.activeElement === lastFocusableElement) {
        event.preventDefault();
        firstFocusableElement.focus();
      }
    });

    window.setTimeout(() => {
      input.focus();
    }, 150);
  }

  createPasscodeGate();

  function createFloatingBalloonLayer() {
    if (document.querySelector(".website-balloons")) {
      return;
    }

    const balloonLayer = document.createElement("div");
    balloonLayer.className = "website-balloons";
    balloonLayer.setAttribute("aria-hidden", "true");

    const balloonStyles = [
      ["#fdf3f7", "#f7d7e3"],
      ["#f7d7e3", "#d48ca6"],
      ["#fff5fb", "#f0b9c9"],
      ["#fff1e8", "#d8b08c"],
      ["#ffeef5", "#e49bb4"],
      ["#fff8fb", "#f5c874"],
    ];

    const balloonCount = 14;

    for (let index = 0; index < balloonCount; index += 1) {
      const balloon = document.createElement("span");
      const palette = balloonStyles[index % balloonStyles.length];
      const left = 4 + Math.random() * 92;
      const duration = 12 + Math.random() * 10;
      const delay = -Math.random() * 16;
      const drift = -40 + Math.random() * 80;
      const scale = 0.75 + Math.random() * 0.65;

      balloon.className = "website-balloon";
      balloon.style.left = `${left}%`;
      balloon.style.setProperty("--duration", `${duration}s`);
      balloon.style.setProperty("--delay", `${delay}s`);
      balloon.style.setProperty("--drift", `${drift}px`);
      balloon.style.setProperty("--scale", scale.toFixed(2));
      balloon.style.background = `linear-gradient(145deg, ${palette[0]}, ${palette[1]})`;
      balloon.style.animationDelay = `${delay}s`;
      balloon.style.animationDuration = `${duration}s`;

      balloonLayer.appendChild(balloon);
    }

    document.body.prepend(balloonLayer);
  }

  createFloatingBalloonLayer();

  function formatOrdinal(number) {
    const lastTwoDigits = number % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
      return `${number}th`;
    }

    switch (number % 10) {
      case 1:
        return `${number}st`;
      case 2:
        return `${number}nd`;
      case 3:
        return `${number}rd`;
      default:
        return `${number}th`;
    }
  }

  function formatBirthdayDate(date) {
    const monthName = new Intl.DateTimeFormat("en-US", { month: "long" }).format(date);
    return `${date.getDate()} ${monthName} ${date.getFullYear()}`;
  }

  function getNextBirthdayTarget() {
    const today = new Date();
    const nextBirthday = new Date(today.getFullYear(), birthMonth, birthDay, 0, 0, 0, 0);

    if (nextBirthday < today) {
      nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
    }

    return nextBirthday;
  }

  const countdownTarget = getNextBirthdayTarget();
  const birthdayAge = countdownTarget.getFullYear() - birthYear;
  const birthdayOrdinal = formatOrdinal(birthdayAge);

  if (loaderLabel) {
    loaderLabel.textContent = `Loading Roshani's ${birthdayOrdinal} birthday surprise`;
  }

  if (welcomeTitle) {
    welcomeTitle.textContent = `Happy ${birthdayOrdinal} Birthday, Roshani`;
  }

  if (surpriseTitle) {
    surpriseTitle.textContent = `Happy ${birthdayOrdinal} Birthday, Sona`;
  }

  if (countdownNote) {
    countdownNote.textContent = `Until Roshani's ${birthdayOrdinal} birthday on ${formatBirthdayDate(countdownTarget)}.`;
  }

  if (countdownHeading) {
    countdownHeading.textContent = `Counting every second until ${formatBirthdayDate(countdownTarget)}`;
  }

  let progress = 0;
  let letterTyped = false;
  let finaleTimerId = null;

  if (loaderScreen && experience && loadingPercentage && loadingProgress) {
    // Animate the loading percentage from 0 to 100.
    const loadingTimer = setInterval(() => {
      progress += 1;
      loadingPercentage.textContent = `${progress}%`;
      loadingProgress.style.width = `${progress}%`;

      if (progress >= 100) {
        clearInterval(loadingTimer);

        setTimeout(() => {
          loaderScreen.classList.add("is-hidden");
          experience.classList.add("is-ready");
        }, 450);
      }
    }, 24);
  }

  if (startJourneyButton) {
    // Make the start button feel alive before we add more sections later.
    startJourneyButton.addEventListener("click", () => {
      document.body.classList.add("journey-started");

      if (storySection) {
        storySection.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.location.href = "countdown.html";
      }

      window.setTimeout(() => {
        document.body.classList.remove("journey-started");
      }, 700);
    });
  }

  // Reveal story elements as they enter the viewport.
  if (revealTargets.length && "IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.18,
      rootMargin: "0px 0px -8% 0px",
    });

    revealTargets.forEach((target) => {
      revealObserver.observe(target);
    });
  } else {
    revealTargets.forEach((target) => {
      target.classList.add("is-visible");
    });
  }

  function openImageViewer(imageSource, imageCaption, imageAlt) {
    if (!hasGalleryFeature) {
      return;
    }

    viewerImage.src = imageSource;
    viewerImage.alt = imageAlt;
    viewerCaption.textContent = imageCaption;
    imageViewer.classList.add("is-open");
    imageViewer.setAttribute("aria-hidden", "false");
  }

  function closeImageViewer() {
    if (!hasGalleryFeature) {
      return;
    }

    imageViewer.classList.remove("is-open");
    imageViewer.setAttribute("aria-hidden", "true");
  }

  if (hasGalleryFeature) {
    imageViewerTriggers.forEach((item) => {
      item.addEventListener("click", () => {
        const previewImage = item.querySelector("img");
        if (!previewImage) {
          return;
        }
        const imageSource = item.dataset.full || previewImage.src;
        const imageCaption = item.dataset.caption || previewImage.alt;
        openImageViewer(imageSource, imageCaption, previewImage.alt);
      });
    });

    viewerCloseButton.addEventListener("click", closeImageViewer);
    viewerBackdrop.addEventListener("click", closeImageViewer);
  }

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") {
      return;
    }

    if (hasGalleryFeature && imageViewer.classList.contains("is-open")) {
      closeImageViewer();
    }

    if (hasVideoFeature && videoModal.classList.contains("is-open")) {
      closeVideoModal();
    }
  });

  // Let each reason card flip open and closed with a button tap.
  flipCards.forEach((card) => {
    const flipButton = card.querySelector(".reason-toggle");

    flipButton.addEventListener("click", () => {
      const isFlipped = card.classList.toggle("is-flipped");
      flipButton.setAttribute("aria-pressed", String(isFlipped));
    });
  });

  function formatCountdownValue(value) {
    return String(value).padStart(2, "0");
  }

  if (hasCountdownFeature) {
    function updateCountdown() {
      const remainingMilliseconds = countdownTarget.getTime() - Date.now();

      if (Number.isNaN(remainingMilliseconds) || remainingMilliseconds <= 0) {
        countdownDays.textContent = "00";
        countdownHours.textContent = "00";
        countdownMinutes.textContent = "00";
        countdownSeconds.textContent = "00";
        return;
      }

      const totalSeconds = Math.floor(remainingMilliseconds / 1000);
      const days = Math.floor(totalSeconds / 86400);
      const hours = Math.floor((totalSeconds % 86400) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      countdownDays.textContent = formatCountdownValue(days);
      countdownHours.textContent = formatCountdownValue(hours);
      countdownMinutes.textContent = formatCountdownValue(minutes);
      countdownSeconds.textContent = formatCountdownValue(seconds);
    }

    updateCountdown();
    window.setInterval(updateCountdown, 1000);
  }

  let openLoveLetter = () => {};
  let toggleMusicPlayback = async () => {};
  let openVideoModal = () => {};
  let closeVideoModal = () => {};
  let openFavoritePicture = () => {};
  let triggerFinale = () => {};
  let birthdaySongStarted = false;

  async function playBirthdaySong() {
    if (birthdaySongStarted && !birthdaySong.paused) {
      return;
    }

    try {
      await birthdaySong.play();
      birthdaySongStarted = true;
    } catch (error) {
      // Browsers may block audio until a direct user gesture.
    }
  }

  if (hasLetterFeature) {
    function typeLetterText() {
      if (letterTyped) {
        return;
      }

      letterTyped = true;
      typedLetter.textContent = "";

      if (prefersReducedMotion) {
        typedLetter.textContent = loveLetterText;
        return;
      }

      let index = 0;
      const typingTimer = window.setInterval(() => {
        typedLetter.textContent += loveLetterText[index];
        index += 1;

        if (index >= loveLetterText.length) {
          window.clearInterval(typingTimer);
        }
      }, 22);
    }

    openLoveLetter = (shouldScroll = false) => {
      openLetterButton.classList.add("is-open");
      openLetterButton.setAttribute("aria-expanded", "true");
      letterPaper.classList.add("is-open");
      typeLetterText();

      if (shouldScroll) {
        letterPaper.scrollIntoView({
          behavior: prefersReducedMotion ? "auto" : "smooth",
          block: "center",
        });
      }
    };

    openLetterButton.addEventListener("click", () => {
      openLoveLetter(true);
    });
  }

  if (hasMusicFeature) {
    function updateMusicState() {
      const isPlaying = !loveSong.paused;
      musicPlayer.classList.toggle("is-playing", isPlaying);
      musicToggle.textContent = isPlaying ? "Pause" : "Play";
    }

    toggleMusicPlayback = async (forcePlay = false) => {
      if (loveSong.paused || forcePlay) {
        try {
          await loveSong.play();
          musicStatus.textContent = "Your song is playing softly for you, Sona.";
          updateMusicState();
        } catch (error) {
          musicStatus.textContent = `Add ${birthdaySongSource} so your song can play here.`;
        }

        return;
      }

      loveSong.pause();
      musicStatus.textContent = "Music paused for a quiet moment with you.";
      updateMusicState();
    };

    loveSong.volume = Number(musicVolume.value);
    updateMusicState();

    musicToggle.addEventListener("click", () => {
      toggleMusicPlayback();
    });

    musicVolume.addEventListener("input", () => {
      loveSong.volume = Number(musicVolume.value);
    });

    loveSong.addEventListener("play", updateMusicState);
    loveSong.addEventListener("pause", updateMusicState);
    loveSong.addEventListener("ended", () => {
      updateMusicState();
      musicStatus.textContent = "The song finished. Press play whenever you want to feel it again.";
    });
    loveSong.addEventListener("error", () => {
      musicStatus.textContent = `Add ${birthdaySongSource} so your song can play here.`;
    });
  }

  if (hasVideoFeature) {
    openVideoModal = (videoButton = null) => {
      if (videoButton?.dataset.videoSrc) {
        memoryVideo.pause();
        memoryVideo.src = videoButton.dataset.videoSrc;
        memoryVideo.poster = videoButton.dataset.videoPoster || "";
        memoryVideo.load();
      }

      videoModal.classList.add("is-open");
      videoModal.setAttribute("aria-hidden", "false");
      const videoTitle = videoButton?.dataset.videoTitle || "memory video";
      videoStatus.textContent = `${videoTitle} is ready, Sona. Press play to relive it.`;

      if (memoryVideo.readyState > 0) {
        memoryVideo.currentTime = 0;
      }
    };

    closeVideoModal = () => {
      memoryVideo.pause();
      videoModal.classList.remove("is-open");
      videoModal.setAttribute("aria-hidden", "true");
    };

    openVideoButtons.forEach((videoButton) => {
      videoButton.addEventListener("click", () => {
        openVideoModal(videoButton);
      });
    });
    videoCloseButton.addEventListener("click", closeVideoModal);
    videoBackdrop.addEventListener("click", closeVideoModal);
    memoryVideo.addEventListener("error", () => {
      videoStatus.textContent = "The memory video could not load yet. Check the video file in `assets/videos`.";
    });
  }

  openFavoritePicture = () => {
    if (!hasGalleryFeature) {
      return;
    }

    openImageViewer(favoritePicture, "A favorite picture chosen with love for Roshani", "A favorite memory of Sona");
  };

  function createConfettiBurst(amount = 48) {
    if (!confettiLayer) {
      return;
    }

    const confettiColors = ["#ffffff", "#f7d7e3", "#d48ca6", "#d8b08c"];

    for (let index = 0; index < amount; index += 1) {
      const confettiPiece = document.createElement("span");
      confettiPiece.className = "confetti-piece";
      confettiPiece.style.left = `${Math.random() * 100}%`;
      confettiPiece.style.width = `${4 + Math.random() * 5}px`;
      confettiPiece.style.height = `${8 + Math.random() * 10}px`;
      confettiPiece.style.background = confettiColors[index % confettiColors.length];
      confettiPiece.style.setProperty("--drift", `${-90 + Math.random() * 180}px`);
      confettiPiece.style.animationDelay = `${Math.random() * 0.25}s`;
      confettiPiece.style.transform = `rotate(${Math.random() * 180}deg)`;
      confettiLayer.appendChild(confettiPiece);

      window.setTimeout(() => {
        confettiPiece.remove();
      }, 4100);
    }
  }

  function createSparkBurst(x, y, amount = 14, className = "button-spark") {
    if (!sparkleLayer) {
      return;
    }

    for (let index = 0; index < amount; index += 1) {
      const sparkle = document.createElement("span");
      const angle = (Math.PI * 2 * index) / amount;
      const distance = 38 + Math.random() * 72;
      const size = 0.32 + Math.random() * 0.42;

      sparkle.className = className;
      sparkle.style.left = `${x}px`;
      sparkle.style.top = `${y}px`;
      sparkle.style.width = `${size}rem`;
      sparkle.style.height = `${size}rem`;
      sparkle.style.setProperty("--tx", `${Math.cos(angle) * distance}px`);
      sparkle.style.setProperty("--ty", `${Math.sin(angle) * distance}px`);
      sparkle.style.animationDelay = `${Math.random() * 0.08}s`;
      sparkleLayer.appendChild(sparkle);

      window.setTimeout(() => {
        sparkle.remove();
      }, 950);
    }
  }

  function createButtonMagic(button, clientX, clientY) {
    createSparkBurst(clientX, clientY, button.classList.contains("launch-finale") ? 26 : 12);
    button.classList.remove("is-click-magic");
    void button.offsetWidth;
    button.classList.add("is-click-magic");

    window.setTimeout(() => {
      button.classList.remove("is-click-magic");
    }, 520);
  }

  function createCandleWish() {
    const cakeElement = cakeStage?.querySelector(".cake");

    if (!cakeElement) {
      return;
    }

    const wish = document.createElement("div");
    wish.className = "candle-wish";
    wish.innerHTML = `
      <span></span>
      <span></span>
      <span></span>
    `;
    cakeElement.appendChild(wish);

    const cakeRect = cakeElement.getBoundingClientRect();
    createSparkBurst(cakeRect.left + cakeRect.width / 2, cakeRect.top + cakeRect.height * 0.35, 34, "wish-spark");

    window.setTimeout(() => {
      wish.remove();
    }, 1800);
  }

  function createFireworkBurst() {
    if (!fireworksLayer) {
      return;
    }

    const fireworkColors = ["#ffffff", "#f7d7e3", "#d48ca6", "#d8b08c"];
    const originX = 12 + Math.random() * 76;
    const originY = 12 + Math.random() * 38;
    const particleCount = 14;

    for (let index = 0; index < particleCount; index += 1) {
      const particle = document.createElement("span");
      particle.className = "firework-particle";
      const angle = (Math.PI * 2 * index) / particleCount;
      const distance = 72 + Math.random() * 70;
      particle.style.left = `${originX}%`;
      particle.style.top = `${originY}%`;
      particle.style.color = fireworkColors[index % fireworkColors.length];
      particle.style.setProperty("--tx", `${Math.cos(angle) * distance}px`);
      particle.style.setProperty("--ty", `${Math.sin(angle) * distance}px`);
      fireworksLayer.appendChild(particle);

      window.setTimeout(() => {
        particle.remove();
      }, 1100);
    }
  }

  function createFinaleBloom(amount = 36) {
    if (!sparkleLayer) {
      return;
    }

    for (let index = 0; index < amount; index += 1) {
      const bloom = document.createElement("span");
      bloom.className = index % 3 === 0 ? "finale-heart" : "finale-star";
      bloom.style.left = `${8 + Math.random() * 84}%`;
      bloom.style.top = `${12 + Math.random() * 72}%`;
      bloom.style.setProperty("--tx", `${-120 + Math.random() * 240}px`);
      bloom.style.setProperty("--ty", `${-120 + Math.random() * 160}px`);
      bloom.style.animationDelay = `${Math.random() * 0.28}s`;
      sparkleLayer.appendChild(bloom);

      window.setTimeout(() => {
        bloom.remove();
      }, 2400);
    }
  }

  function createFinaleTeddy() {
    if (!surpriseSection) {
      return;
    }

    const teddy = document.createElement("div");
    teddy.className = "finale-teddy";
    teddy.setAttribute("aria-hidden", "true");
    teddy.innerHTML = `
      <span class="finale-teddy-ear finale-teddy-ear-left"></span>
      <span class="finale-teddy-ear finale-teddy-ear-right"></span>
      <span class="finale-teddy-face">
        <span class="finale-teddy-eye finale-teddy-eye-left"></span>
        <span class="finale-teddy-eye finale-teddy-eye-right"></span>
        <span class="finale-teddy-muzzle"></span>
        <span class="finale-teddy-nose"></span>
      </span>
    `;
    surpriseSection.appendChild(teddy);

    window.setTimeout(() => {
      teddy.remove();
    }, 5200);
  }

  triggerFinale = () => {
    if (!hasFinaleFeature) {
      return;
    }

    if (finaleTimerId) {
      window.clearInterval(finaleTimerId);
      finaleTimerId = null;
    }

    surpriseSection.classList.add("is-celebrating");
    playBirthdaySong();
    surpriseSection.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });

    createConfettiBurst(130);
    createFireworkBurst();
    createFinaleBloom(44);
    createFinaleTeddy();

    finaleTimerId = window.setInterval(() => {
      createFireworkBurst();
      createFinaleBloom(16);
    }, 520);

    window.setTimeout(() => {
      if (finaleTimerId) {
        window.clearInterval(finaleTimerId);
        finaleTimerId = null;
      }
      createConfettiBurst(70);
      createFinaleBloom(28);
      surpriseSection.classList.remove("is-celebrating");
    }, 5200);
  };

  if (blowCandlesButton && cakeStage && cakeMessage) {
    blowCandlesButton.addEventListener("click", () => {
      if (cakeStage.classList.contains("candles-out")) {
        return;
      }

      cakeStage.classList.add("candles-out");
      cakeMessage.textContent = "Wish sent, Sona. The candles turned into golden teddy sparkles just for you.";
      createCandleWish();
      createConfettiBurst(54);
    });
  }

  if (launchFinaleButton) {
    launchFinaleButton.addEventListener("click", triggerFinale);
  }

  function createButtonRipple(button, clientX, clientY) {
    const buttonRect = button.getBoundingClientRect();
    const ripple = document.createElement("span");
    const rippleSize = Math.max(buttonRect.width, buttonRect.height) * 1.6;

    ripple.className = "button-ripple";
    ripple.style.width = `${rippleSize}px`;
    ripple.style.height = `${rippleSize}px`;
    ripple.style.left = `${clientX - buttonRect.left - rippleSize / 2}px`;
    ripple.style.top = `${clientY - buttonRect.top - rippleSize / 2}px`;

    button.insertBefore(ripple, button.firstChild);

    ripple.addEventListener("animationend", () => {
      ripple.remove();
    }, { once: true });
  }

  document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("pointerdown", (event) => {
      if (event.pointerType === "mouse" || event.pointerType === "pen" || event.pointerType === "touch") {
        createButtonRipple(button, event.clientX, event.clientY);
        createButtonMagic(button, event.clientX, event.clientY);
      }
    });

    button.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        const buttonRect = button.getBoundingClientRect();
        createButtonRipple(
          button,
          buttonRect.left + buttonRect.width / 2,
          buttonRect.top + buttonRect.height / 2,
        );
        createButtonMagic(
          button,
          buttonRect.left + buttonRect.width / 2,
          buttonRect.top + buttonRect.height / 2,
        );
      }
    });
  });

  if (hasFinePointer && !prefersReducedMotion && customCursor && sparkleLayer) {
    document.body.classList.add("has-custom-cursor");

    let lastSparkleTime = 0;

    function addSparkle(x, y, burst = false) {
      const sparkle = document.createElement("span");
      sparkle.className = "sparkle";
      const sparkleSize = burst ? 8 + Math.random() * 10 : 4 + Math.random() * 5;
      sparkle.style.width = `${sparkleSize}px`;
      sparkle.style.height = `${sparkleSize}px`;
      sparkle.style.left = `${x}px`;
      sparkle.style.top = `${y}px`;
      sparkle.style.setProperty("--dx", `${(Math.random() - 0.5) * (burst ? 160 : 80)}px`);
      sparkle.style.setProperty("--dy", `${-30 - Math.random() * (burst ? 130 : 70)}px`);
      sparkleLayer.appendChild(sparkle);

      window.setTimeout(() => {
        sparkle.remove();
      }, 850);
    }

    window.addEventListener("pointermove", (event) => {
      if (event.pointerType !== "mouse") {
        return;
      }

      customCursor.style.left = `${event.clientX}px`;
      customCursor.style.top = `${event.clientY}px`;

      if (Date.now() - lastSparkleTime > 28) {
        addSparkle(event.clientX, event.clientY);
        lastSparkleTime = Date.now();
      }
    });

    window.addEventListener("pointerdown", (event) => {
      if (event.pointerType !== "mouse") {
        return;
      }

      customCursor.style.left = `${event.clientX}px`;
      customCursor.style.top = `${event.clientY}px`;

      for (let index = 0; index < 6; index += 1) {
        addSparkle(event.clientX, event.clientY, true);
      }
    });

    window.addEventListener("pointerleave", () => {
      customCursor.style.opacity = "0";
    });

    window.addEventListener("pointerenter", () => {
      customCursor.style.opacity = "1";
    });
  }
});
