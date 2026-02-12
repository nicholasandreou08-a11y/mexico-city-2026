/* ═══════════════════════════════════════
   MEXICO CITY 2026 — App Logic
   ═══════════════════════════════════════ */

(function () {
  'use strict';

  // ─── CONFIG ──────────────────────────
  const TRIP_START = new Date('2026-02-21T00:00:00-06:00'); // Mexico City time
  const TRIP_END = new Date('2026-03-01T23:59:59-06:00');
  const MEXICO_TZ = 'America/Mexico_City';

  // ─── DAILY SCHEDULE ─────────────────
  const DAILY_SCHEDULE = {
    1: {
      date: '2026-02-21',
      title: { en: 'Arrival in the Valley', gr: 'Άφιξη στην Κοιλάδα' },
      activities: [
        { time: '00:00', en: 'Flying to Mexico City ✈️', gr: 'Πετάμε προς Πόλη του Μεξικού ✈️' },
        { time: '18:45', en: 'Landing at MEX 🛬', gr: 'Προσγείωση στο MEX 🛬' },
        { time: '19:30', en: 'Transfer to Sofitel Reforma', gr: 'Μεταφορά στο Sofitel Reforma' },
        { time: '20:15', en: 'Checking in at Sofitel', gr: 'Check-in στο Sofitel' },
        { time: '21:00', en: 'Dinner at Cityzen Rooftop 🍽️', gr: 'Δείπνο στο Cityzen Rooftop 🍽️' },
        { time: '22:30', en: 'Resting — first night in CDMX 🌙', gr: 'Ξεκούραση — πρώτη νύχτα στο CDMX 🌙' }
      ]
    },
    2: {
      date: '2026-02-22',
      title: { en: 'City of Empires', gr: 'Πόλη των Αυτοκρατοριών' },
      activities: [
        { time: '00:00', en: 'Sleeping 😴', gr: 'Ύπνος 😴' },
        { time: '07:30', en: 'Breakfast at hotel', gr: 'Πρωινό στο ξενοδοχείο' },
        { time: '08:45', en: 'Heading to Centro Histórico', gr: 'Κατεύθυνση προς Centro Histórico' },
        { time: '09:30', en: 'Walking Tour — Zócalo & Templo Mayor 🏛️', gr: 'Ξενάγηση — Zócalo & Templo Mayor 🏛️' },
        { time: '13:00', en: 'Lunch at Azul Histórico 🍽️', gr: 'Μεσημεριανό στο Azul Histórico 🍽️' },
        { time: '15:00', en: 'Free time in Centro', gr: 'Ελεύθερος χρόνος στο Centro' },
        { time: '19:00', en: 'Dinner at Rosetta 🍷', gr: 'Δείπνο στο Rosetta 🍷' },
        { time: '22:00', en: 'Resting 🌙', gr: 'Ξεκούραση 🌙' }
      ]
    },
    3: {
      date: '2026-02-23',
      title: { en: 'Gods and Miracles', gr: 'Θεοί και Θαύματα' },
      activities: [
        { time: '00:00', en: 'Sleeping 😴', gr: 'Ύπνος 😴' },
        { time: '07:00', en: 'Breakfast & getting ready', gr: 'Πρωινό & ετοιμασία' },
        { time: '08:00', en: 'Pickup — Teotihuacán Tour 🚐', gr: 'Παραλαβή — Ξενάγηση Teotihuacán 🚐' },
        { time: '09:30', en: 'Tlatelolco', gr: 'Tlatelolco' },
        { time: '10:30', en: 'Basilica of Guadalupe ⛪', gr: 'Βασιλική Γουαδαλούπε ⛪' },
        { time: '12:00', en: 'Teotihuacán — Pyramids of Sun & Moon 🏛️', gr: 'Teotihuacán — Πυραμίδες Ηλίου & Σελήνης 🏛️' },
        { time: '14:00', en: 'Lunch (included in tour)', gr: 'Μεσημεριανό (στην ξενάγηση)' },
        { time: '18:00', en: 'Back at hotel — free evening', gr: 'Πίσω στο ξενοδοχείο — ελεύθερο βράδυ' },
        { time: '19:30', en: 'Dinner at Máximo Bistrot 🍽️', gr: 'Δείπνο στο Máximo Bistrot 🍽️' },
        { time: '22:00', en: 'Resting 🌙', gr: 'Ξεκούραση 🌙' }
      ]
    },
    4: {
      date: '2026-02-24',
      title: { en: 'Museum and Sea', gr: 'Μουσείο και Θάλασσα' },
      activities: [
        { time: '00:00', en: 'Sleeping 😴', gr: 'Ύπνος 😴' },
        { time: '08:00', en: 'Breakfast & heading to Chapultepec', gr: 'Πρωινό & κατεύθυνση Chapultepec' },
        { time: '09:30', en: 'Anthropology Museum 🏛️', gr: 'Μουσείο Ανθρωπολογίας 🏛️' },
        { time: '13:00', en: 'Lunch at Lago 🍽️', gr: 'Μεσημεριανό στο Lago 🍽️' },
        { time: '15:00', en: 'Free time in Chapultepec Park', gr: 'Ελεύθερος χρόνος στο πάρκο Chapultepec' },
        { time: '18:00', en: 'Dinner at Contramar 🐟', gr: 'Δείπνο στο Contramar 🐟' },
        { time: '21:00', en: 'Resting 🌙', gr: 'Ξεκούραση 🌙' }
      ]
    },
    5: {
      date: '2026-02-25',
      title: { en: 'Floating Gardens', gr: 'Πλωτοί Κήποι' },
      activities: [
        { time: '00:00', en: 'Sleeping 😴', gr: 'Ύπνος 😴' },
        { time: '08:00', en: 'Breakfast & getting ready', gr: 'Πρωινό & ετοιμασία' },
        { time: '09:00', en: 'Pickup — Xochimilco Tour 🚐', gr: 'Παραλαβή — Ξενάγηση Xochimilco 🚐' },
        { time: '10:00', en: 'Frida Kahlo Museum 🎨', gr: 'Μουσείο Φρίντα Κάλο 🎨' },
        { time: '12:00', en: 'Coyoacán — markets & plazas', gr: 'Coyoacán — αγορές & πλατείες' },
        { time: '13:00', en: 'Lunch at Los Danzantes 🍽️', gr: 'Μεσημεριανό στο Los Danzantes 🍽️' },
        { time: '14:30', en: 'Xochimilco canals 🚣', gr: 'Κανάλια Xochimilco 🚣' },
        { time: '18:00', en: 'Back at hotel', gr: 'Πίσω στο ξενοδοχείο' },
        { time: '20:00', en: 'Dinner at Pujol 🌟', gr: 'Δείπνο στο Pujol 🌟' },
        { time: '22:30', en: 'Resting 🌙', gr: 'Ξεκούραση 🌙' }
      ]
    },
    6: {
      date: '2026-02-26',
      title: { en: 'Choose Your Adventure', gr: 'Διάλεξε τη Δική σου Περιπέτεια' },
      activities: [
        { time: '00:00', en: 'Sleeping 😴', gr: 'Ύπνος 😴' },
        { time: '08:30', en: 'Breakfast & planning the day', gr: 'Πρωινό & σχεδιασμός ημέρας' },
        { time: '10:00', en: 'Free day — Polanco, Roma Norte or Spa 🧖', gr: 'Ελεύθερη μέρα — Polanco, Roma Norte ή Spa 🧖' },
        { time: '13:00', en: 'Lunch at Eno or Lardo 🍽️', gr: 'Μεσημεριανό στο Eno ή Lardo 🍽️' },
        { time: '15:00', en: 'Exploring or relaxing', gr: 'Εξερεύνηση ή χαλάρωση' },
        { time: '19:30', en: 'Dinner at Quintonil 🌿', gr: 'Δείπνο στο Quintonil 🌿' },
        { time: '22:00', en: 'Resting 🌙', gr: 'Ξεκούραση 🌙' }
      ]
    },
    7: {
      date: '2026-02-27',
      title: { en: 'Tiles and Cathedrals', gr: 'Πλακάκια και Καθεδρικοί' },
      activities: [
        { time: '00:00', en: 'Sleeping 😴', gr: 'Ύπνος 😴' },
        { time: '07:00', en: 'Breakfast & getting ready', gr: 'Πρωινό & ετοιμασία' },
        { time: '08:10', en: 'Pickup — Puebla & Cholula Tour 🚐', gr: 'Παραλαβή — Ξενάγηση Puebla & Cholula 🚐' },
        { time: '10:30', en: 'Puebla — colonial streets & Talavera tiles', gr: 'Puebla — αποικιακοί δρόμοι & πλακάκια Talavera' },
        { time: '12:30', en: 'Lunch in Puebla (included)', gr: 'Μεσημεριανό στην Puebla (στην ξενάγηση)' },
        { time: '14:00', en: 'Pyramid of Cholula 🏛️', gr: 'Πυραμίδα Cholula 🏛️' },
        { time: '15:30', en: 'Tonantzintla church', gr: 'Εκκλησία Tonantzintla' },
        { time: '19:00', en: 'Back at hotel', gr: 'Πίσω στο ξενοδοχείο' },
        { time: '20:00', en: 'Dinner at El Parnita 🌮', gr: 'Δείπνο στο El Parnita 🌮' },
        { time: '22:00', en: 'Resting — last night 🌙', gr: 'Ξεκούραση — τελευταία νύχτα 🌙' }
      ]
    },
    8: {
      date: '2026-02-28',
      title: { en: 'Sunset Farewell', gr: 'Αποχαιρετισμός στο Ηλιοβασίλεμα' },
      activities: [
        { time: '00:00', en: 'Sleeping 😴', gr: 'Ύπνος 😴' },
        { time: '08:00', en: 'Packing & last morning ☕', gr: 'Πακετάρισμα & τελευταίο πρωινό ☕' },
        { time: '10:00', en: 'Brunch at Lalo! 🥞', gr: 'Brunch στο Lalo! 🥞' },
        { time: '12:00', en: 'Last walk on Reforma', gr: 'Τελευταία βόλτα στη Reforma' },
        { time: '15:00', en: 'Back at hotel — final packing', gr: 'Πίσω στο ξενοδοχείο — τελικό πακετάρισμα' },
        { time: '17:30', en: 'Transfer to MEX airport 🚐', gr: 'Μεταφορά στο αεροδρόμιο MEX 🚐' },
        { time: '19:00', en: 'At airport — check-in & lounge', gr: 'Στο αεροδρόμιο — check-in & lounge' },
        { time: '21:00', en: 'BA0242 departs — heading home ✈️', gr: 'BA0242 αναχώρηση — επιστροφή ✈️' }
      ]
    }
  };

  // ─── STATE ───────────────────────────
  let currentLang = 'gr';
  let isLiveMode = false;
  let completedDays = JSON.parse(localStorage.getItem('mx2026_completed') || '[]');
  let weatherPayload = null;

  // ─── DOM REFS ────────────────────────
  const langToggle = document.getElementById('langToggle');
  const countdown = document.getElementById('countdown');
  const liveBanner = document.getElementById('liveBanner');
  const countDays = document.getElementById('countDays');
  const countHours = document.getElementById('countHours');
  const countMinutes = document.getElementById('countMinutes');
  const countSeconds = document.getElementById('countSeconds');
  const footerSignature = document.getElementById('footerSignature');
  const particleCanvas = document.getElementById('particleCanvas');
  const ctx = particleCanvas.getContext('2d');
  const weatherNowIcon = document.getElementById('weatherNowIcon');
  const weatherNowTemp = document.getElementById('weatherNowTemp');
  const weatherNowDesc = document.getElementById('weatherNowDesc');
  const weatherNowSub = document.getElementById('weatherNowSub');
  const weatherHighLow = document.getElementById('weatherHighLow');
  const weatherHumidity = document.getElementById('weatherHumidity');
  const weatherWind = document.getElementById('weatherWind');
  const weatherUvi = document.getElementById('weatherUvi');
  const weatherDays = document.getElementById('weatherDays');
  const weatherTip = document.getElementById('weatherTip');
  const weatherStatus = document.getElementById('weatherStatus');
  const sunsetSection = document.getElementById('cityzen-sunset');
  const sunsetSky = document.querySelector('.sunset-sky');
  const sunsetHaze = document.querySelector('.sunset-haze');
  const sunsetAura = document.querySelector('.sunset-aura');
  const sunsetOrbs = document.querySelector('.sunset-orbs');
  const sunsetFact = document.getElementById('sunsetFact');
  const itinerarySection = document.getElementById('itinerary');

  // ═══════════════════════════════════════
  // LANGUAGE TOGGLE
  // ═══════════════════════════════════════

  function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.setAttribute('data-lang', lang);

    // Add switching class for crossfade
    document.body.classList.add('lang-switching');

    setTimeout(() => {
      // Update all translatable elements
      document.querySelectorAll('[data-en]').forEach(el => {
        const text = el.getAttribute(`data-${lang}`);
        if (text) el.textContent = text;
      });

      // Update active button
      langToggle.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
      });

      // Remove switching class
      setTimeout(() => {
        document.body.classList.remove('lang-switching');
      }, 50);

      // Update trivia fact for new language
      renderSunsetFact();

      if (weatherPayload) {
        renderWeather(weatherPayload);
      }

      // Update live activity text after language switch
      if (isLiveMode) {
        updateLiveBannerActivity();
        updateActivityBar();
      }
    }, 200);
  }

  langToggle.addEventListener('click', (e) => {
    const btn = e.target.closest('.lang-btn');
    if (!btn || btn.dataset.lang === currentLang) return;
    setLanguage(btn.dataset.lang);
  });

  // ═══════════════════════════════════════
  // COUNTDOWN SYSTEM
  // ═══════════════════════════════════════

  function getMexicoCityNow() {
    return new Date(new Date().toLocaleString('en-US', { timeZone: MEXICO_TZ }));
  }

  function updateCountdown() {
    const now = getMexicoCityNow();
    const isTrip = (now >= TRIP_START && now <= TRIP_END);

    if (isTrip !== isLiveMode) {
      isLiveMode = isTrip;
      toggleLiveMode(isTrip);
    }

    if (!isTrip && now < TRIP_START) {
      const diff = TRIP_START - now;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      countDays.textContent = String(days).padStart(2, '0');
      countHours.textContent = String(hours).padStart(2, '0');
      countMinutes.textContent = String(minutes).padStart(2, '0');
      countSeconds.textContent = String(seconds).padStart(2, '0');
    }
  }

  function toggleLiveMode(active) {
    if (active) {
      countdown.classList.add('hidden');
      liveBanner.classList.add('active');
      // Trigger sparkle animation
      createSparkle();
      // Update banner with current activity
      updateLiveBannerActivity();
      updateActivityBar();
    } else {
      countdown.classList.remove('hidden');
      liveBanner.classList.remove('active');
      // Hide activity bar
      const bar = document.getElementById('activityBar');
      if (bar) bar.classList.remove('visible');
    }
  }

  // Start countdown
  updateCountdown();
  setInterval(updateCountdown, 1000);

  // ═══════════════════════════════════════
  // LIVE ACTIVITY TRACKING
  // ═══════════════════════════════════════

  function getCurrentTripDay() {
    const now = getMexicoCityNow();
    const dateStr = now.getFullYear() + '-' +
      String(now.getMonth() + 1).padStart(2, '0') + '-' +
      String(now.getDate()).padStart(2, '0');
    for (const [day, schedule] of Object.entries(DAILY_SCHEDULE)) {
      if (schedule.date === dateStr) return parseInt(day);
    }
    return null;
  }

  function timeToMinutes(timeStr) {
    const [h, m] = timeStr.split(':').map(Number);
    return h * 60 + m;
  }

  function getCurrentActivity() {
    let dayNum = getCurrentTripDay();

    if (dayNum === null) return null;

    const schedule = DAILY_SCHEDULE[dayNum];
    if (!schedule) return null;

    const now = getMexicoCityNow();
    const nowMinutes = now.getHours() * 60 + now.getMinutes();
    const activities = schedule.activities;

    let currentIdx = 0;
    for (let i = activities.length - 1; i >= 0; i--) {
      if (timeToMinutes(activities[i].time) <= nowMinutes) {
        currentIdx = i;
        break;
      }
    }

    const current = activities[currentIdx];
    const next = currentIdx < activities.length - 1 ? activities[currentIdx + 1] : null;

    return { current, next, dayNum, dayTitle: schedule.title };
  }

  function updateLiveBannerActivity() {
    if (!isLiveMode) return;

    const bannerSpan = liveBanner.querySelector('span');
    if (!bannerSpan) return;

    // Only show activity text on actual trip days, not in override/demo mode
    const realTripDay = getCurrentTripDay();
    if (realTripDay === null) {
      // Outside trip dates — keep default "We're in Mexico City" banner
      const defaultEn = "We're in Mexico City";
      const defaultGr = 'Είμαστε στην Πόλη του Μεξικού';
      bannerSpan.textContent = currentLang === 'en' ? defaultEn : defaultGr;
      bannerSpan.setAttribute('data-en', defaultEn);
      bannerSpan.setAttribute('data-gr', defaultGr);
      return;
    }

    const info = getCurrentActivity();
    if (!info) return;

    const enText = info.current.en;
    const grText = info.current.gr;
    bannerSpan.textContent = currentLang === 'en' ? enText : grText;
    bannerSpan.setAttribute('data-en', enText);
    bannerSpan.setAttribute('data-gr', grText);
  }

  // Update activity every 60 seconds
  setInterval(updateLiveBannerActivity, 60000);

  // ═══════════════════════════════════════
  // TIMELINE INTERACTIONS
  // ═══════════════════════════════════════

  function scrollToExpanded(el) {
    // Wait for other accordion items to finish collapsing (max-height 0.5s)
    // then calculate final position and scroll there with offset
    setTimeout(() => {
      const rect = el.getBoundingClientRect();
      const offset = window.pageYOffset + rect.top - 16;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }, 500);
  }

  // Expand/collapse timeline items
  document.querySelectorAll('.timeline-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.closest('.timeline-item');
      const wasExpanded = item.classList.contains('expanded');

      // Close all others
      document.querySelectorAll('.timeline-item.expanded').forEach(el => {
        if (el !== item) el.classList.remove('expanded');
      });

      item.classList.toggle('expanded', !wasExpanded);
      if (!wasExpanded) scrollToExpanded(item);
    });

    header.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        header.click();
      }
    });
  });

  // Mark day complete
  document.querySelectorAll('.mark-complete-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const item = btn.closest('.timeline-item');
      const day = parseInt(item.dataset.day);

      if (!completedDays.includes(day)) {
        completedDays.push(day);
        localStorage.setItem('mx2026_completed', JSON.stringify(completedDays));
        item.classList.add('completed');
        btn.textContent = currentLang === 'en' ? 'Completed' : 'Ολοκληρώθηκε';

        // Trigger marigold particle animation
        createParticles(e.clientX, e.clientY, '#E3A72F', 20);
      }
    });
  });

  // Restore completed days
  function restoreCompletedDays() {
    completedDays.forEach(day => {
      const item = document.querySelector(`.timeline-item[data-day="${day}"]`);
      if (item) {
        item.classList.add('completed');
        const btn = item.querySelector('.mark-complete-btn');
        if (btn) btn.textContent = currentLang === 'en' ? 'Completed' : 'Ολοκληρώθηκε';
      }
    });
  }
  restoreCompletedDays();

  // ═══════════════════════════════════════
  // HISTORY BOX TOGGLES
  // ═══════════════════════════════════════

  document.querySelectorAll('.history-box-header').forEach(header => {
    header.addEventListener('click', (e) => {
      e.stopPropagation();
      header.closest('.history-box').classList.toggle('expanded');
    });
  });

  // ═══════════════════════════════════════
  // HISTORY MODULE TOGGLES
  // ═══════════════════════════════════════

  document.querySelectorAll('.history-module-header').forEach(header => {
    header.addEventListener('click', () => {
      const module = header.closest('.history-module');
      const wasExpanded = module.classList.contains('expanded');

      // Close all others
      document.querySelectorAll('.history-module.expanded').forEach(el => {
        if (el !== module) el.classList.remove('expanded');
      });

      module.classList.toggle('expanded', !wasExpanded);
      if (!wasExpanded) scrollToExpanded(module);
    });

    header.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        header.click();
      }
    });
  });

  // ═══════════════════════════════════════
  // EXPANDED FLIGHT CARD TOGGLES
  // ═══════════════════════════════════════

  document.querySelectorAll('.flight-card-header').forEach(header => {
    header.addEventListener('click', () => {
      const card = header.closest('.flight-card-expanded');
      const wasExpanded = card.classList.contains('expanded');

      // Close all others
      document.querySelectorAll('.flight-card-expanded.expanded').forEach(el => {
        if (el !== card) el.classList.remove('expanded');
      });

      card.classList.toggle('expanded', !wasExpanded);
      if (!wasExpanded) scrollToExpanded(card);
    });
  });

  // ═══════════════════════════════════════
  // PERSPECTIVE TABS (Day in the Life)
  // ═══════════════════════════════════════

  document.querySelectorAll('.perspective-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const perspective = tab.dataset.perspective;

      // Update active tab
      document.querySelectorAll('.perspective-tab').forEach(t => {
        t.classList.toggle('active', t === tab);
      });

      // Show corresponding content
      document.querySelectorAll('.perspective-content').forEach(content => {
        content.classList.remove('active');
      });
      const target = document.getElementById(`perspective-${perspective}`);
      if (target) {
        target.classList.add('active');
      }

      // Close any open aztec timeline items in the new perspective
      target.querySelectorAll('.aztec-timeline-item.active').forEach(item => {
        item.classList.remove('active');
      });
    });
  });

  // ═══════════════════════════════════════
  // AZTEC TIMELINE ACCORDION
  // ═══════════════════════════════════════

  document.querySelectorAll('.aztec-timeline-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.closest('.aztec-timeline-item');
      const wasActive = item.classList.contains('active');
      const timeline = item.closest('.day-life-timeline');

      // Close all others in this timeline
      timeline.querySelectorAll('.aztec-timeline-item.active').forEach(el => {
        if (el !== item) el.classList.remove('active');
      });

      item.classList.toggle('active', !wasActive);
      if (!wasActive) scrollToExpanded(item);
    });

    header.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        header.click();
      }
    });
  });

  // ═══════════════════════════════════════
  // MAP FILTERS
  // ═══════════════════════════════════════

  const mapPoints = [
    { name: 'Sofitel Mexico City Reforma', category: 'hotel', lat: 19.4326, lng: -99.1532 },
    { name: 'Zócalo / Templo Mayor', category: 'culture', lat: 19.4326, lng: -99.1332 },
    { name: 'Anthropology Museum', category: 'culture', lat: 19.4260, lng: -99.1860 },
    { name: 'Frida Kahlo Museum', category: 'culture', lat: 19.3552, lng: -99.1627 },
    { name: 'Xochimilco', category: 'excursion', lat: 19.2576, lng: -99.1038 },
    { name: 'Teotihuacán', category: 'excursion', lat: 19.6925, lng: -98.8438 },
    { name: 'Basilica of Guadalupe', category: 'culture', lat: 19.4853, lng: -99.1175 },
    { name: 'Contramar', category: 'dining', lat: 19.4196, lng: -99.1705 },
    { name: 'Azul Histórico', category: 'dining', lat: 19.4335, lng: -99.1363 },
    { name: 'Puebla', category: 'excursion', lat: 19.0414, lng: -98.2063 },
    { name: 'Cholula', category: 'excursion', lat: 19.0633, lng: -98.3017 },
  ];

  document.querySelectorAll('.map-filter').forEach(filter => {
    filter.addEventListener('click', () => {
      document.querySelectorAll('.map-filter').forEach(f => f.classList.remove('active'));
      filter.classList.add('active');
      // Map filtering would work with an actual map integration
    });
  });

  // ═══════════════════════════════════════
  // WEATHER (OpenWeather via /api/weather)
  // ═══════════════════════════════════════

  const CONDITION_LABELS = {
    Clear: { en: 'Clear skies', gr: 'Καθαρός ουρανός' },
    Clouds: { en: 'Cloudy', gr: 'Συννεφιά' },
    Rain: { en: 'Rain', gr: 'Βροχή' },
    Drizzle: { en: 'Drizzle', gr: 'Ψιχάλες' },
    Thunderstorm: { en: 'Thunderstorm', gr: 'Καταιγίδα' },
    Snow: { en: 'Snow', gr: 'Χιόνι' },
    Mist: { en: 'Mist', gr: 'Ομίχλη' },
    Fog: { en: 'Fog', gr: 'Ομίχλη' },
    Haze: { en: 'Haze', gr: 'Θολούρα' },
    Dust: { en: 'Dust', gr: 'Σκόνη' },
    Smoke: { en: 'Smoke', gr: 'Καπνός' },
    Sand: { en: 'Sand', gr: 'Άμμος' },
    Ash: { en: 'Ash', gr: 'Τέφρα' },
    Squall: { en: 'Squall', gr: 'Ριπές' },
    Tornado: { en: 'Tornado', gr: 'Ανεμοστρόβιλος' }
  };

  const EN_DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const GR_DAYS = ['ΚΥΡ', 'ΔΕΥ', 'ΤΡΙ', 'ΤΕΤ', 'ΠΕΜ', 'ΠΑΡ', 'ΣΑΒ'];
  const EN_MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const GR_MONTHS = ['ΙΑΝ', 'ΦΕΒ', 'ΜΑΡ', 'ΑΠΡ', 'ΜΑΙ', 'ΙΟΥΝ', 'ΙΟΥΛ', 'ΑΥΓ', 'ΣΕΠ', 'ΟΚΤ', 'ΝΟΕ', 'ΔΕΚ'];

  function formatTripDay(dateUnix, timezone, lang) {
    const tzDate = new Date(new Date(dateUnix * 1000).toLocaleString('en-US', { timeZone: timezone }));
    const dayIndex = tzDate.getDay();
    const day = lang === 'en' ? EN_DAYS[dayIndex] : GR_DAYS[dayIndex];
    const date = String(tzDate.getDate()).padStart(2, '0');
    const month = lang === 'en' ? EN_MONTHS[tzDate.getMonth()] : GR_MONTHS[tzDate.getMonth()];
    return `${day} ${date} ${month}`;
  }

  function getConditionLabel(main, lang) {
    const entry = CONDITION_LABELS[main];
    if (entry) return entry[lang] || main;
    return main;
  }

  function getWeatherIcon(conditionId, iconCode) {
    const isNight = iconCode && iconCode.endsWith('n');
    if (conditionId >= 200 && conditionId <= 232) return '⛈️';
    if (conditionId >= 300 && conditionId <= 321) return '🌦️';
    if (conditionId >= 500 && conditionId <= 531) return '🌧️';
    if (conditionId >= 600 && conditionId <= 622) return '❄️';
    if (conditionId >= 701 && conditionId <= 781) return '🌫️';
    if (conditionId === 800) return isNight ? '🌙' : '☀️';
    if (conditionId >= 801 && conditionId <= 804) return '☁️';
    return '🌤️';
  }

  function formatTemp(value) {
    return Number.isFinite(value) ? Math.round(value) : '--';
  }

  function renderWeather(payload) {
    if (!payload || !weatherNowTemp) return;

    const now = payload.now;
    const today = payload.next7Days && payload.next7Days[0] ? payload.next7Days[0] : null;
    const icon = getWeatherIcon(now.conditionId, now.iconCode);
    const desc = getConditionLabel(now.conditionMain, currentLang);

    weatherNowIcon.textContent = icon;
    weatherNowTemp.textContent = formatTemp(now.tempC);
    weatherNowDesc.textContent = desc;
    weatherNowSub.textContent = currentLang === 'en'
      ? `Feels like ${formatTemp(now.feelsLikeC)}°C`
      : `Αίσθηση ${formatTemp(now.feelsLikeC)}°C`;
    weatherHighLow.textContent = today ? `${formatTemp(today.maxC)}° / ${formatTemp(today.minC)}°` : '-- / --';
    weatherHumidity.textContent = `${formatTemp(now.humidityPct)}%`;
    weatherWind.textContent = `${formatTemp(now.windSpeedMps)} m/s`;
    weatherUvi.textContent = Number.isFinite(now.uvi) ? now.uvi.toFixed(1) : '--';

    if (weatherDays) {
      weatherDays.innerHTML = '';
      (payload.next7Days || []).slice(0, 7).forEach(day => {
        const dayEl = document.createElement('div');
        dayEl.className = 'weather-day';
        dayEl.innerHTML = `
          <div class="weather-day-name">${formatTripDay(day.dateUnix, payload.timezone, currentLang)}</div>
          <div class="weather-day-icon">${getWeatherIcon(day.conditionId, day.iconCode)}</div>
          <div class="weather-day-temp">${formatTemp(day.maxC)}° / ${formatTemp(day.minC)}°</div>
          <div class="weather-day-desc">${getConditionLabel(day.conditionMain, currentLang)}</div>
        `;
        weatherDays.appendChild(dayEl);
      });
    }

    if (weatherTip) {
      let tip = '';
      const pop = today && Number.isFinite(today.popPct) ? today.popPct : 0;
      if (pop >= 40) {
        tip = currentLang === 'en' ? 'Carry an umbrella in the afternoon.' : 'Πάρτε ομπρέλα το απόγευμα.';
      } else if (Number.isFinite(now.uvi) && now.uvi >= 7) {
        tip = currentLang === 'en' ? 'Strong UV today, sunscreen recommended.' : 'Ισχυρή υπεριώδης ακτινοβολία, προτείνεται αντηλιακό.';
      } else if (today && Number.isFinite(today.maxC) && today.maxC >= 27) {
        tip = currentLang === 'en' ? 'Light layers recommended for the warm afternoon.' : 'Προτείνονται ελαφριά ρούχα για το ζεστό απόγευμα.';
      } else {
        tip = currentLang === 'en' ? 'Comfortable walking weather today.' : 'Ιδανικός καιρός για βόλτα σήμερα.';
      }
      weatherTip.textContent = tip;
    }

    if (weatherStatus) {
      const updated = new Date(now.asOfUnix * 1000);
      const time = updated.toLocaleTimeString(currentLang === 'en' ? 'en-US' : 'el-GR', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: payload.timezone
      });
      const enStatus = `Live data via OpenWeather • Updated ${time}`;
      const grStatus = `Ζωντανά δεδομένα μέσω OpenWeather • Ενημέρωση ${time}`;
      weatherStatus.textContent = currentLang === 'en' ? enStatus : grStatus;
      weatherStatus.setAttribute('data-en', enStatus);
      weatherStatus.setAttribute('data-gr', grStatus);
    }
  }

  async function loadWeather() {
    if (!weatherStatus) return;
    weatherStatus.textContent = currentLang === 'en'
      ? 'Loading live weather...'
      : 'Φόρτωση ζωντανών δεδομένων...';
    weatherStatus.setAttribute('data-en', 'Loading live weather...');
    weatherStatus.setAttribute('data-gr', 'Φόρτωση ζωντανών δεδομένων...');

    const API_KEY = '5138a1b940fd248106796b68ae3ea94e';
    const LAT = 19.4326;
    const LON = -99.1332;
    const BASE = 'https://api.openweathermap.org/data/2.5';

    try {
      const [currentRes, forecastRes] = await Promise.all([
        fetch(`${BASE}/weather?lat=${LAT}&lon=${LON}&units=metric&appid=${API_KEY}`),
        fetch(`${BASE}/forecast?lat=${LAT}&lon=${LON}&units=metric&appid=${API_KEY}`)
      ]);
      if (!currentRes.ok || !forecastRes.ok) throw new Error('Weather fetch failed');
      const current = await currentRes.json();
      const forecast = await forecastRes.json();

      // Transform current weather into expected shape
      const now = {
        tempC: current.main.temp,
        feelsLikeC: current.main.feels_like,
        conditionId: current.weather[0].id,
        conditionMain: current.weather[0].main,
        iconCode: current.weather[0].icon,
        humidityPct: current.main.humidity,
        windSpeedMps: current.wind.speed,
        uvi: null,
        asOfUnix: current.dt
      };

      // Aggregate 3-hour forecast into daily summaries
      const dayMap = {};
      forecast.list.forEach(entry => {
        const dateKey = entry.dt_txt.split(' ')[0];
        if (!dayMap[dateKey]) {
          dayMap[dateKey] = { mins: [], maxs: [], pops: [], dateUnix: entry.dt, midCondition: null, hasMidDay: false };
        }
        dayMap[dateKey].mins.push(entry.main.temp_min);
        dayMap[dateKey].maxs.push(entry.main.temp_max);
        dayMap[dateKey].pops.push(entry.pop || 0);
        const hour = parseInt(entry.dt_txt.split(' ')[1].split(':')[0]);
        if (hour === 12 || !dayMap[dateKey].midCondition) {
          dayMap[dateKey].midCondition = {
            conditionId: entry.weather[0].id,
            conditionMain: entry.weather[0].main,
            iconCode: entry.weather[0].icon
          };
          if (hour === 12) dayMap[dateKey].hasMidDay = true;
        }
      });

      const next7Days = Object.values(dayMap).slice(0, 7).map(d => ({
        dateUnix: d.dateUnix,
        maxC: Math.max(...d.maxs),
        minC: Math.min(...d.mins),
        conditionId: d.midCondition.conditionId,
        conditionMain: d.midCondition.conditionMain,
        iconCode: d.midCondition.iconCode,
        popPct: Math.round(Math.max(...d.pops) * 100)
      }));

      const payload = {
        timezone: 'America/Mexico_City',
        now,
        next7Days
      };

      weatherPayload = payload;
      renderWeather(payload);
    } catch (err) {
      weatherStatus.textContent = currentLang === 'en'
        ? 'Weather temporarily unavailable.'
        : 'Ο καιρός δεν είναι διαθέσιμος προσωρινά.';
      weatherStatus.setAttribute('data-en', 'Weather temporarily unavailable.');
      weatherStatus.setAttribute('data-gr', 'Ο καιρός δεν είναι διαθέσιμος προσωρινά.');
    }
  }

  loadWeather();

  // ═══════════════════════════════════════
  // SCROLL ANIMATIONS (Intersection Observer)
  // ═══════════════════════════════════════

  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Stagger the animation
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 100);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe timeline items
  document.querySelectorAll('.timeline-item').forEach(item => {
    observer.observe(item);
  });

  // General section fade-in
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        sectionObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.flight-card, .flight-card-expanded, .hotel-card, .restaurant-card, .history-module, .hotel-amenity, .hotel-amenity-tag, .perspective-tabs, .weather-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)';
    sectionObserver.observe(el);
  });

  // ═══════════════════════════════════════
  // CITYZEN SUNSET PARALLAX
  // ═══════════════════════════════════════

  let sunsetTicking = false;

  function updateSunsetParallax() {
    if (!sunsetSection) return;
    const rect = sunsetSection.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const progress = Math.min(Math.max((viewportHeight - rect.top) / (viewportHeight + rect.height), 0), 1);
    const offset = (progress - 0.5) * 40;

    if (sunsetSky) sunsetSky.style.transform = `translateY(${offset * 0.2}px)`;
    if (sunsetHaze) sunsetHaze.style.transform = `translateY(${offset * 0.35}px)`;
    if (sunsetAura) sunsetAura.style.transform = `translateY(${offset * 0.5}px)`;
    if (sunsetOrbs) sunsetOrbs.style.transform = `translateY(${offset * 0.6}px)`;
    sunsetTicking = false;
  }

  function onSunsetScroll() {
    if (!sunsetTicking) {
      window.requestAnimationFrame(updateSunsetParallax);
      sunsetTicking = true;
    }
  }

  if (sunsetSection) {
    window.addEventListener('scroll', onSunsetScroll, { passive: true });
    window.addEventListener('resize', onSunsetScroll, { passive: true });
    updateSunsetParallax();
  }


  // ═══════════════════════════════════════
  // SUNSET FACT ROTATOR
  // ═══════════════════════════════════════

  const SUNSET_FACTS = [
    {
      en: 'Mexico City was built on the lakes of the Valley of Mexico.',
      gr: 'Η Πόλη του Μεξικού χτίστηκε πάνω στις λίμνες της Κοιλάδας του Μεξικού.'
    },
    {
      en: 'The Zocalo is one of the largest city squares in the world.',
      gr: 'Το Zocalo είναι μία από τις μεγαλύτερες πλατείες πόλης στον κόσμο.'
    },
    {
      en: 'Teotihuacan means "place where the gods were created."',
      gr: 'Teotihuacan σημαίνει «ο τόπος όπου δημιουργήθηκαν οι θεοί».'
    },
    {
      en: 'Chapultepec Park is one of the largest urban parks in the Western Hemisphere.',
      gr: 'Το Πάρκο Chapultepec είναι από τα μεγαλύτερα αστικά πάρκα στο Δυτικό Ημισφαίριο.'
    },
    {
      en: 'The Angel of Independence is a symbol of Mexico\u2019s modern era.',
      gr: 'Ο Άγγελος της Ανεξαρτησίας είναι σύμβολο της σύγχρονης εποχής του Μεξικού.'
    }
  ];

  let sunsetFactIndex = 0;
  let factRotationTimer = null;
  let factAnimating = false;

  function renderSunsetFact() {
    if (!sunsetFact) return;
    const fact = SUNSET_FACTS[sunsetFactIndex % SUNSET_FACTS.length];
    const text = currentLang === 'en' ? fact.en : fact.gr;
    sunsetFact.textContent = text;
    sunsetFact.setAttribute('data-en', fact.en);
    sunsetFact.setAttribute('data-gr', fact.gr);
  }

  function rotateSunsetFact() {
    if (!sunsetFact || factAnimating) return;
    factAnimating = true;

    // Fade out
    sunsetFact.classList.add('fact-fade-out');

    // Wait for CSS transition to finish, then swap text and fade in
    function onFadeOut() {
      sunsetFact.removeEventListener('transitionend', onFadeOut);
      sunsetFactIndex = (sunsetFactIndex + 1) % SUNSET_FACTS.length;
      renderSunsetFact();
      // Force reflow before removing class so the browser sees the change
      void sunsetFact.offsetWidth;
      sunsetFact.classList.remove('fact-fade-out');
      factAnimating = false;
    }

    sunsetFact.addEventListener('transitionend', onFadeOut, { once: true });

    // Safety fallback in case transitionend doesn't fire
    setTimeout(() => {
      if (factAnimating) {
        sunsetFact.removeEventListener('transitionend', onFadeOut);
        onFadeOut();
      }
    }, 700);
  }

  if (sunsetFact) {
    renderSunsetFact();
    factRotationTimer = setInterval(rotateSunsetFact, 6000);
  }

  // Section title animation
  const titleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        titleObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.section-title').forEach(title => {
    titleObserver.observe(title);
  });

  // ═══════════════════════════════════════
  // PARTICLE SYSTEM
  // ═══════════════════════════════════════

  let particles = [];

  function resizeCanvas() {
    particleCanvas.width = window.innerWidth;
    particleCanvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  function createParticles(x, y, color, count) {
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
      const velocity = 2 + Math.random() * 4;
      particles.push({
        x,
        y,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity - 2,
        life: 1,
        decay: 0.015 + Math.random() * 0.015,
        size: 3 + Math.random() * 4,
        color,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.2,
        isFlower: false
      });
    }
    if (particles.length > 0 && !animatingParticles) {
      animatingParticles = true;
      animateParticles();
    }
  }

  function createSparkle() {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    createParticles(cx, cy, '#E3A72F', 30);
  }

  function createConfetti(x, y) {
    const colors = ['#E3A72F', '#C65D3B', '#0E3B43', '#F4E8D8'];
    for (let i = 0; i < 40; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      const angle = Math.random() * Math.PI * 2;
      const velocity = 3 + Math.random() * 6;
      const isFlower = Math.random() < 0.4; // 40% chance of flower shape
      particles.push({
        x,
        y,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity - 4,
        life: 1,
        decay: 0.01 + Math.random() * 0.01,
        size: 4 + Math.random() * 5,
        color,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.3,
        isFlower
      });
    }
    if (!animatingParticles) {
      animatingParticles = true;
      animateParticles();
    }
  }

  let animatingParticles = false;

  function drawFlower(p) {
    // Draw a 5-petal marigold shape
    const petalCount = 5;
    for (let i = 0; i < petalCount; i++) {
      const petalAngle = (Math.PI * 2 * i) / petalCount;
      ctx.save();
      ctx.rotate(petalAngle);
      ctx.beginPath();
      ctx.ellipse(0, -p.size * 0.6, p.size * 0.3, p.size * 0.6, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
    // Center circle
    ctx.beginPath();
    ctx.arc(0, 0, p.size * 0.25, 0, Math.PI * 2);
    ctx.fill();
  }

  function animateParticles() {
    if (particles.length === 0) {
      animatingParticles = false;
      ctx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
      return;
    }

    ctx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);

    particles = particles.filter(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.1; // gravity
      p.life -= p.decay;
      p.rotation += p.rotationSpeed;

      if (p.life <= 0) return false;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.globalAlpha = p.life;
      ctx.fillStyle = p.color;

      if (p.isFlower) {
        drawFlower(p);
      } else {
        // Draw diamond/confetti shape
        ctx.beginPath();
        ctx.moveTo(0, -p.size);
        ctx.lineTo(p.size * 0.6, 0);
        ctx.lineTo(0, p.size);
        ctx.lineTo(-p.size * 0.6, 0);
        ctx.closePath();
        ctx.fill();
      }

      ctx.restore();

      return true;
    });

    requestAnimationFrame(animateParticles);
  }

  // ═══════════════════════════════════════
  // FOOTER CONFETTI
  // ═══════════════════════════════════════

  footerSignature.addEventListener('click', (e) => {
    createConfetti(e.clientX, e.clientY);
  });

  // ═══════════════════════════════════════
  // SMOOTH SCROLL for anchor links
  // ═══════════════════════════════════════

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // ═══════════════════════════════════════
  // HERO PARALLAX (subtle)
  // ═══════════════════════════════════════

  const hero = document.getElementById('hero');
  const heroContent = document.querySelector('.hero-content');
  const floatingGlyphs = document.querySelector('.floating-glyphs');

  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroHeight = hero.offsetHeight;

    if (scrolled < heroHeight) {
      const parallax = scrolled * 0.3;
      const opacity = 1 - (scrolled / heroHeight) * 0.8;
      heroContent.style.transform = `translateY(${parallax}px)`;
      heroContent.style.opacity = opacity;

      // Parallax the glyphs at different rate
      if (floatingGlyphs) {
        floatingGlyphs.style.transform = `translateY(${scrolled * 0.15}px)`;
      }
    }
  }, { passive: true });

  // ═══════════════════════════════════════
  // STICKY ACTIVITY BAR
  // ═══════════════════════════════════════

  const activityBar = document.getElementById('activityBar');
  const activityBarDay = document.getElementById('activityBarDay');
  const activityBarNow = document.getElementById('activityBarNow');
  const activityBarNext = document.getElementById('activityBarNext');

  function updateActivityBar() {
    if (!activityBar || !isLiveMode) return;

    // Only show activity details on actual trip days
    const realTripDay = getCurrentTripDay();
    if (realTripDay === null) {
      // Outside trip dates — show "We're in Mexico City" in the bar too
      const defaultEn = "We're in Mexico City";
      const defaultGr = 'Είμαστε στην Πόλη του Μεξικού';
      activityBarDay.textContent = '🇲🇽';
      activityBarDay.removeAttribute('data-en');
      activityBarDay.removeAttribute('data-gr');
      activityBarNow.textContent = currentLang === 'en' ? defaultEn : defaultGr;
      activityBarNow.setAttribute('data-en', defaultEn);
      activityBarNow.setAttribute('data-gr', defaultGr);
      activityBarNext.style.display = 'none';
      return;
    }

    const info = getCurrentActivity();
    if (!info) return;

    // Update day badge
    const dayEn = 'Day ' + info.dayNum;
    const dayGr = 'Μέρα ' + info.dayNum;
    activityBarDay.textContent = currentLang === 'en' ? dayEn : dayGr;
    activityBarDay.setAttribute('data-en', dayEn);
    activityBarDay.setAttribute('data-gr', dayGr);

    // Update current activity
    activityBarNow.textContent = currentLang === 'en' ? info.current.en : info.current.gr;
    activityBarNow.setAttribute('data-en', info.current.en);
    activityBarNow.setAttribute('data-gr', info.current.gr);

    // Update next activity
    if (info.next) {
      const nextEn = 'Next: ' + info.next.en;
      const nextGr = 'Επόμενο: ' + info.next.gr;
      activityBarNext.textContent = currentLang === 'en' ? nextEn : nextGr;
      activityBarNext.setAttribute('data-en', nextEn);
      activityBarNext.setAttribute('data-gr', nextGr);
      activityBarNext.style.display = '';
    } else {
      activityBarNext.style.display = 'none';
    }
  }

  // Show/hide activity bar based on scroll position
  let activityBarTicking = false;
  window.addEventListener('scroll', () => {
    if (!activityBarTicking) {
      requestAnimationFrame(() => {
        if (!activityBar || !isLiveMode) {
          activityBar && activityBar.classList.remove('visible');
          document.body.classList.remove('activity-bar-active');
          activityBarTicking = false;
          return;
        }

        const heroHeight = hero ? hero.offsetHeight : 0;
        const scrolled = window.pageYOffset || document.documentElement.scrollTop;

        if (scrolled > heroHeight) {
          if (!activityBar.classList.contains('visible')) {
            activityBar.classList.add('visible');
            document.body.classList.add('activity-bar-active');
            updateActivityBar();
          }
        } else {
          activityBar.classList.remove('visible');
          document.body.classList.remove('activity-bar-active');
        }
        activityBarTicking = false;
      });
      activityBarTicking = true;
    }
  }, { passive: true });

  // Click activity bar → scroll to current day's timeline item
  if (activityBar) {
    activityBar.addEventListener('click', () => {
      const info = getCurrentActivity();
      if (!info) return;

      const dayItem = document.querySelector(`.timeline-item[data-day="${info.dayNum}"]`);
      if (!dayItem) return;

      // Expand this day (collapse others)
      document.querySelectorAll('.timeline-item.expanded').forEach(el => {
        if (el !== dayItem) el.classList.remove('expanded');
      });
      dayItem.classList.add('expanded');

      // Smooth scroll to it
      dayItem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  // Update activity bar every 60 seconds alongside banner
  setInterval(updateActivityBar, 60000);

  // ═══════════════════════════════════════
  // INITIALIZE
  // ═══════════════════════════════════════

  // Set initial language
  setLanguage('gr');

})();
