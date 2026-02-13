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
  const loteriaStage = document.getElementById('loteriaStage');
  const loteriaDots = document.getElementById('loteriaDots');
  const loteriaProgress = document.getElementById('loteriaProgress');
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
  // TRIVIA — LOTERÍA CAROUSEL
  // ═══════════════════════════════════════

  const TRIVIA_CARDS = [
    {
      icon: '\u{1F3D7}\uFE0F', accent: '#8b6044',
      title: { en: 'A City on Water', gr: 'Πόλη πάνω στο Νερό' },
      text: {
        en: 'Mexico City was built on the lake bed of the Valley of Mexico. It sinks around 10\u00A0cm each year \u2014 some areas have dropped over 9\u00A0metres since 1900.',
        gr: 'Η Πόλη του Μεξικού χτίστηκε στον πυθμένα λίμνης της Κοιλάδας του Μεξικού. Βυθίζεται ~10\u00A0εκ. τον χρόνο \u2014 κάποιες περιοχές έχουν πέσει πάνω από 9\u00A0μέτρα από το 1900.'
      }
    },
    {
      icon: '\u{1F985}', accent: '#2a7f62',
      title: { en: 'Eagle & Serpent', gr: 'Αετός & Φίδι' },
      text: {
        en: 'The Aztecs founded Tenochtitlan where they saw an eagle devouring a serpent on a cactus \u2014 that vision is now Mexico\u2019s coat of arms on the flag.',
        gr: 'Οι Αζτέκοι ίδρυσαν την Tenochtitlan εκεί που είδαν έναν αετό να τρώει φίδι πάνω σε κάκτο \u2014 αυτό το όραμα είναι πλέον το εθνόσημο του Μεξικού.'
      }
    },
    {
      icon: '\u{1F3DB}\uFE0F', accent: '#8b6e3a',
      title: { en: 'Heart of the Z\u00F3calo', gr: 'Η Καρδιά του Z\u00F3calo' },
      text: {
        en: 'The Z\u00F3calo is one of the largest city squares on Earth. Beneath it lie the ruins of the Aztec Templo Mayor, discovered by chance in 1978.',
        gr: 'Το Z\u00F3calo είναι μία από τις μεγαλύτερες πλατείες στη Γη. Κάτω από αυτό κρύβονται τα ερείπια του Templo Mayor, που ανακαλύφθηκαν τυχαία το 1978.'
      }
    },
    {
      icon: '\u{1F3D4}\uFE0F', accent: '#5a3e8a',
      title: { en: 'Where Gods Were Born', gr: 'Όπου Γεννήθηκαν οι Θεοί' },
      text: {
        en: 'Teotihuac\u00E1n means \u201Cthe place where the gods were created.\u201D At its peak around 450\u00A0AD it was the largest city in the pre-Columbian Americas \u2014 125,000 people.',
        gr: 'Teotihuac\u00E1n σημαίνει \u00ABο τόπος όπου δημιουργήθηκαν οι θεοί\u00BB. Στο αποκορύφωμά του (~450\u00A0μ.Χ.) ήταν η μεγαλύτερη πόλη της προκολομβιανής Αμερικής \u2014 125.000 κάτοικοι.'
      }
    },
    {
      icon: '\u{1F333}', accent: '#2d6e4f',
      title: { en: 'Chapultepec', gr: 'Chapultepec' },
      text: {
        en: 'Chapultepec Park is twice the size of Central Park. Its name means \u201CGrasshopper Hill\u201D in Nahuatl \u2014 it houses a castle, a zoo, and 700-year-old ahuejote trees.',
        gr: 'Το Πάρκο Chapultepec είναι διπλάσιο του Central Park. Σημαίνει \u00ABΛόφος Ακρίδας\u00BB στα Ναουάτλ \u2014 φιλοξενεί κάστρο, ζωολογικό κήπο και δέντρα 700 ετών.'
      }
    },
    {
      icon: '\u{1F32E}', accent: '#d4834e',
      title: { en: 'Street Food Capital', gr: 'Πρωτεύουσα Street Food' },
      text: {
        en: 'Mexico City has over 300,000 street food vendors \u2014 more than any other city on Earth. UNESCO recognised Mexican cuisine as Intangible Cultural Heritage in 2010.',
        gr: 'Η Πόλη του Μεξικού έχει πάνω από 300.000 πωλητές street food \u2014 περισσότερους από κάθε άλλη πόλη. Η UNESCO αναγνώρισε τη μεξικανική κουζίνα ως Άυλη Πολιτιστική Κληρονομιά το 2010.'
      }
    },
    {
      icon: '\u{1F3A8}', accent: '#b84a6f',
      title: { en: 'Muralism Movement', gr: 'Κίνημα Τοιχογραφίας' },
      text: {
        en: 'Mexico City birthed the muralism movement. Diego Rivera, Orozco, and Siqueiros painted massive public works that changed the course of art history.',
        gr: 'Η Πόλη του Μεξικού γέννησε το κίνημα τοιχογραφίας. Ο Diego Rivera, ο Orozco και ο Siqueiros ζωγράφισαν τεράστια δημόσια έργα που άλλαξαν την ιστορία της τέχνης.'
      }
    },
    {
      icon: '\u2728', accent: '#c6993b',
      title: { en: 'The Golden Angel', gr: 'Ο Χρυσός Άγγελος' },
      text: {
        en: 'The Angel of Independence stands 45\u00A0metres tall on Paseo de la Reforma. The golden winged victory weighs 7\u00A0tonnes \u2014 the city\u2019s most iconic landmark.',
        gr: 'Ο Άγγελος της Ανεξαρτησίας υψώνεται 45\u00A0μέτρα στο Paseo de la Reforma. Η χρυσή φτερωτή νίκη ζυγίζει 7\u00A0τόνους \u2014 το πιο εμβληματικό σημείο της πόλης.'
      }
    },
    {
      icon: '\u{1F30B}', accent: '#6b4c3b',
      title: { en: 'Ring of Volcanoes', gr: 'Δαχτυλίδι Ηφαιστείων' },
      text: {
        en: 'Mexico City sits between two active volcanoes \u2014 Popocat\u00E9petl and Iztacc\u00EDhuatl. \u201CPopo\u201D last erupted in 2023 and is only 70\u00A0km from the city centre.',
        gr: 'Η Πόλη του Μεξικού βρίσκεται ανάμεσα σε δύο ενεργά ηφαίστεια \u2014 Popocat\u00E9petl και Iztacc\u00EDhuatl. Το \u00ABPopo\u00BB εξερράγη τελευταία φορά το 2023, μόλις 70\u00A0χλμ. από το κέντρο.'
      }
    },
    {
      icon: '\u{1F3B6}', accent: '#c44d58',
      title: { en: 'Mariachi Origins', gr: 'Η Γέννηση του Mariachi' },
      text: {
        en: 'Plaza Garibaldi is the spiritual home of mariachi music. Every night, hundreds of musicians in silver-studded trajes de charro gather to play for tips and serenades.',
        gr: 'Η Plaza Garibaldi είναι η πνευματική πατρίδα της μουσικής mariachi. Κάθε βράδυ, εκατοντάδες μουσικοί με ασημένια trajes de charro μαζεύονται να παίξουν.'
      }
    },
    {
      icon: '\u{1F48E}', accent: '#3a7ca5',
      title: { en: 'Floating Gardens', gr: 'Πλωτοί Κήποι' },
      text: {
        en: 'The chinampas of Xochimilco are \u201Cfloating gardens\u201D built by the Aztecs. Still farmed today, they\u2019re a UNESCO World Heritage Site and one of the last traces of the ancient lake system.',
        gr: 'Τα chinampas του Xochimilco είναι \u00ABπλωτοί κήποι\u00BB που έφτιαξαν οι Αζτέκοι. Καλλιεργούνται ακόμα, είναι Μνημείο UNESCO και απομεινάρι του αρχαίου συστήματος λιμνών.'
      }
    },
    {
      icon: '\u{1F4DA}', accent: '#5c6d3f',
      title: { en: 'Library of Light', gr: 'Βιβλιοθήκη Φωτός' },
      text: {
        en: 'The Biblioteca Vasconcelos is nicknamed the \u201CMega Library.\u201D It holds 580,000 books on suspended steel shelving that seems to float in mid-air across a cathedral-like space.',
        gr: 'Η Biblioteca Vasconcelos αποκαλείται \u00ABMega Library.\u00BB Φιλοξενεί 580.000 βιβλία σε αιωρούμενα ράφια που μοιάζουν να πετούν μέσα σε χώρο σαν καθεδρικό ναό.'
      }
    },
    {
      icon: '\u{1F9F1}', accent: '#a0522d',
      title: { en: 'Palacio de Bellas Artes', gr: 'Palacio de Bellas Artes' },
      text: {
        en: 'The Palace of Fine Arts took 30\u00A0years to build and is so heavy it has sunk over 4\u00A0metres into the soft lake bed. Its Art Deco interior houses Rivera\u2019s famous mural \u201CMan at the Crossroads.\u201D',
        gr: 'Το Παλάτι Καλών Τεχνών χρειάστηκε 30\u00A0χρόνια να χτιστεί και είναι τόσο βαρύ που έχει βυθιστεί 4\u00A0μέτρα. Στο Art Deco εσωτερικό φιλοξενείται η τοιχογραφία του Rivera \u00ABMan at the Crossroads.\u00BB'
      }
    },
    {
      icon: '\u{1F697}', accent: '#607d8b',
      title: { en: 'City of Traffic', gr: 'Πόλη της Κίνησης' },
      text: {
        en: 'Mexico City has roughly 6\u00A0million registered cars. Drivers spend an average of 218\u00A0hours per year stuck in traffic \u2014 making it one of the most congested cities in the world.',
        gr: 'Η Πόλη του Μεξικού έχει περίπου 6\u00A0εκατομμύρια αυτοκίνητα. Οι οδηγοί χάνουν κατά μέσο όρο 218\u00A0ώρες τον χρόνο στην κίνηση \u2014 μία από τις πιο μποτιλιαρισμένες πόλεις παγκοσμίως.'
      }
    },
    {
      icon: '\u{1F36B}', accent: '#6d4c41',
      title: { en: 'Birthplace of Chocolate', gr: 'Γενέτειρα της Σοκολάτας' },
      text: {
        en: 'The Aztecs drank xocol\u0101tl \u2014 a bitter cacao drink with chilli and vanilla. The word \u201Cchocolate\u201D comes from Nahuatl. Mexico remains one of the world\u2019s top cacao producers.',
        gr: 'Οι Αζτέκοι έπιναν xocol\u0101tl \u2014 ένα πικρό ρόφημα κακάο με τσίλι και βανίλια. Η λέξη \u00ABchocolate\u00BB προέρχεται από τα Ναουάτλ. Το Μεξικό παραμένει κορυφαίος παραγωγός κακάο.'
      }
    },
    {
      icon: '\u{1F3DF}\uFE0F', accent: '#37474f',
      title: { en: 'Azteca Stadium', gr: 'Γήπεδο Azteca' },
      text: {
        en: 'Estadio Azteca is the only stadium to have hosted two FIFA World Cup finals (1970 and 1986). It seats 87,000 and is where Maradona scored the legendary \u201CHand of God\u201D goal.',
        gr: 'Το Estadio Azteca είναι το μόνο γήπεδο που φιλοξένησε δύο τελικούς Παγκοσμίου Κυπέλλου (1970 και 1986). Χωρά 87.000 θεατές και εκεί ο Μαραντόνα σκόραρε το \u00ABΧέρι του Θεού.\u00BB'
      }
    },
    {
      icon: '\u{1F480}', accent: '#9c27b0',
      title: { en: 'D\u00EDa de los Muertos', gr: 'Ημέρα των Νεκρών' },
      text: {
        en: 'Day of the Dead (1\u20132 November) is not morbid \u2014 it\u2019s a joyful celebration. Families build ofrendas with marigolds, sugar skulls, and the favourite foods of their departed loved ones.',
        gr: 'Η Ημέρα των Νεκρών (1\u20132 Νοεμβρίου) δεν είναι μακάβρια \u2014 είναι χαρούμενη γιορτή. Οι οικογένειες φτιάχνουν ofrendas με κατιφέδες, ζαχαρωτά κρανία και τα αγαπημένα φαγητά των νεκρών τους.'
      }
    },
    {
      icon: '\u{1F3E0}', accent: '#00838f',
      title: { en: 'Casa Azul', gr: 'Casa Azul' },
      text: {
        en: 'Frida Kahlo was born, lived, and died in the cobalt-blue \u201CCasa Azul\u201D in Coyoac\u00E1n. Today it\u2019s one of Mexico\u2019s most visited museums, drawing over 800,000 visitors a year.',
        gr: 'Η Frida Kahlo γεννήθηκε, έζησε και πέθανε στο κοβαλτιό-μπλε \u00ABCasa Azul\u00BB στο Coyoac\u00E1n. Σήμερα είναι από τα πιο δημοφιλή μουσεία του Μεξικού, με πάνω από 800.000 επισκέπτες ετησίως.'
      }
    },
    {
      icon: '\u{1F6F8}', accent: '#546e7a',
      title: { en: 'Metro Treasures', gr: 'Θησαυροί του Μετρό' },
      text: {
        en: 'Mexico City\u2019s metro carries 4.6\u00A0million passengers daily. During construction, workers unearthed an Aztec pyramid at the P\u00EDno Su\u00E1rez station \u2014 it\u2019s now on display inside.',
        gr: 'Το μετρό της Πόλης του Μεξικού μεταφέρει 4,6\u00A0εκατομμύρια επιβάτες ημερησίως. Κατά την κατασκευή, βρέθηκε αζτεκική πυραμίδα στον σταθμό P\u00EDno Su\u00E1rez \u2014 εκτίθεται εκεί.'
      }
    },
    {
      icon: '\u{1F30E}', accent: '#2e7d32',
      title: { en: 'Mega-City', gr: 'Μεγαλούπολη' },
      text: {
        en: 'Greater Mexico City is home to over 21\u00A0million people, making it the largest Spanish-speaking city on the planet and the most populous metropolitan area in the Western Hemisphere.',
        gr: 'Η ευρύτερη Πόλη του Μεξικού έχει πάνω από 21\u00A0εκατομμύρια κατοίκους \u2014 η μεγαλύτερη ισπανόφωνη πόλη στον πλανήτη και η πολυπληθέστερη μητροπολιτική περιοχή του Δυτικού Ημισφαιρίου.'
      }
    },
    {
      icon: '\u{1F337}', accent: '#e65100',
      title: { en: 'Cempas\u00FAchil', gr: 'Cempas\u00FAchil' },
      text: {
        en: 'The Mexican marigold (cempas\u00FAchil) is believed to guide the dead home with its vivid colour and scent. During D\u00EDa de los Muertos, petals are scattered in paths from graves to altars.',
        gr: 'Η μεξικανική κατιφές (cempas\u00FAchil) πιστεύεται ότι οδηγεί τους νεκρούς σπίτι με το έντονο χρώμα και άρωμά της. Στην Ημέρα των Νεκρών, πέταλα σκορπίζονται σε μονοπάτια από τάφους σε βωμούς.'
      }
    }
  ];

  let triviaIndex = 0;
  let triviaTimer = null;
  let triviaProgressTimer = null;
  let triviaProgressValue = 0;
  let triviaAnimating = false;
  const TRIVIA_INTERVAL = 7000;
  const TRIVIA_TICK = 50;

  function buildTriviaCard(index, immediate) {
    const card = TRIVIA_CARDS[index];
    const lang = currentLang === 'en' ? 'en' : 'gr';
    const el = document.createElement('div');
    el.className = 'loteria-card' + (immediate ? ' active' : '');
    el.style.setProperty('--card-accent', card.accent);

    var icon = document.createElement('div');
    icon.className = 'loteria-card-icon';
    icon.textContent = card.icon;

    var num = document.createElement('div');
    num.className = 'loteria-card-number';
    num.setAttribute('data-en', 'Fact ' + (index + 1) + ' of ' + TRIVIA_CARDS.length);
    num.setAttribute('data-gr', '\u0393\u03B5\u03B3\u03BF\u03BD\u03CC\u03C2 ' + (index + 1) + ' \u03B1\u03C0\u03CC ' + TRIVIA_CARDS.length);
    num.textContent = lang === 'en' ? num.getAttribute('data-en') : num.getAttribute('data-gr');

    var title = document.createElement('div');
    title.className = 'loteria-card-title';
    title.setAttribute('data-en', card.title.en);
    title.setAttribute('data-gr', card.title.gr);
    title.textContent = card.title[lang];

    var text = document.createElement('div');
    text.className = 'loteria-card-text';
    text.setAttribute('data-en', card.text.en);
    text.setAttribute('data-gr', card.text.gr);
    text.textContent = card.text[lang];

    var divider = document.createElement('div');
    divider.className = 'loteria-card-divider';

    el.appendChild(icon);
    el.appendChild(num);
    el.appendChild(title);
    el.appendChild(text);
    el.appendChild(divider);
    return el;
  }

  function goToTrivia(newIndex, direction) {
    if (newIndex === triviaIndex || triviaAnimating || !loteriaStage) return;
    triviaAnimating = true;
    var dir = direction || (newIndex > triviaIndex ? 1 : -1);
    var oldCard = loteriaStage.querySelector('.loteria-card.active');

    // Create new card off-screen
    var newCard = buildTriviaCard(newIndex, false);
    newCard.style.transform = dir > 0 ? 'translateX(110%)' : 'translateX(-110%)';
    newCard.style.opacity = '0';
    loteriaStage.appendChild(newCard);

    // Force reflow
    void newCard.offsetWidth;

    // Slide old card out
    if (oldCard) {
      oldCard.classList.remove('active');
      oldCard.style.transform = dir > 0 ? 'translateX(-110%)' : 'translateX(110%)';
      oldCard.style.opacity = '0';
      setTimeout(function () { if (oldCard.parentNode) oldCard.remove(); }, 600);
    }

    // Slide new card in
    newCard.classList.add('active');
    newCard.style.transform = 'translateX(0)';
    newCard.style.opacity = '1';

    triviaIndex = newIndex;

    // Update dots
    if (loteriaDots) {
      loteriaDots.querySelectorAll('.loteria-dot').forEach(function (dot, i) {
        dot.classList.toggle('active', i === newIndex);
      });
    }

    // Unlock after transition
    setTimeout(function () { triviaAnimating = false; }, 580);

    // Reset auto-advance timer
    resetTriviaTimer();
  }

  function advanceTrivia(dir) {
    var len = TRIVIA_CARDS.length;
    var next = (triviaIndex + dir + len) % len;
    goToTrivia(next, dir);
  }

  function startTriviaTimer() {
    triviaProgressValue = 0;
    if (loteriaProgress) loteriaProgress.style.width = '0%';
    triviaProgressTimer = setInterval(function () {
      triviaProgressValue += TRIVIA_TICK;
      var pct = Math.min((triviaProgressValue / TRIVIA_INTERVAL) * 100, 100);
      if (loteriaProgress) loteriaProgress.style.width = pct + '%';
    }, TRIVIA_TICK);
    triviaTimer = setTimeout(function () {
      advanceTrivia(1);
    }, TRIVIA_INTERVAL);
  }

  function resetTriviaTimer() {
    clearTimeout(triviaTimer);
    clearInterval(triviaProgressTimer);
    triviaProgressValue = 0;
    if (loteriaProgress) loteriaProgress.style.width = '0%';
    startTriviaTimer();
  }

  // Initialize Lotería carousel
  if (loteriaStage) {
    // Render first card
    loteriaStage.appendChild(buildTriviaCard(0, true));

    // Build dots
    if (loteriaDots) {
      TRIVIA_CARDS.forEach(function (_, i) {
        var dot = document.createElement('button');
        dot.className = 'loteria-dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('aria-label', 'Fact ' + (i + 1));
        dot.addEventListener('click', function () { goToTrivia(i); });
        loteriaDots.appendChild(dot);
      });
    }

    // Arrow listeners
    var prevBtn = document.querySelector('.loteria-prev');
    var nextBtn = document.querySelector('.loteria-next');
    if (prevBtn) prevBtn.addEventListener('click', function () { advanceTrivia(-1); });
    if (nextBtn) nextBtn.addEventListener('click', function () { advanceTrivia(1); });

    // Touch / swipe support
    var touchStartX = 0;
    var touchStartY = 0;
    loteriaStage.addEventListener('touchstart', function (e) {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    }, { passive: true });
    loteriaStage.addEventListener('touchend', function (e) {
      var dx = e.changedTouches[0].clientX - touchStartX;
      var dy = e.changedTouches[0].clientY - touchStartY;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
        advanceTrivia(dx < 0 ? 1 : -1);
      }
    }, { passive: true });

    // Start auto-advance
    startTriviaTimer();
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

      if (p.isEmoji) {
        // Draw emoji character on canvas
        ctx.font = p.size + 'px serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(p.emoji, 0, 0);
      } else if (p.isFlower) {
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
    // Third easter egg — discover by clicking the footer signature
    if (typeof discoverEgg === 'function') discoverEgg('footer');
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
  // ENHANCEMENT 1: SCROLL PROGRESS BAR + NAV DOTS
  // ═══════════════════════════════════════

  const scrollProgressBar = document.getElementById('scrollProgressBar');
  const sectionNavDots = document.getElementById('sectionNavDots');

  function updateScrollProgress() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    if (scrollProgressBar) scrollProgressBar.style.width = pct + '%';
  }

  // Nav dots — track which section is active
  const navDotSections = [];
  if (sectionNavDots) {
    sectionNavDots.querySelectorAll('.nav-dot').forEach(dot => {
      const targetId = dot.dataset.target;
      const section = document.getElementById(targetId);
      if (section) navDotSections.push({ dot, section });

      dot.addEventListener('click', () => {
        const target = document.getElementById(targetId);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  function updateNavDots() {
    const scrollTop = window.pageYOffset + window.innerHeight * 0.35;
    let activeIdx = 0;
    navDotSections.forEach((entry, i) => {
      if (entry.section.offsetTop <= scrollTop) activeIdx = i;
    });
    navDotSections.forEach((entry, i) => {
      entry.dot.classList.toggle('active', i === activeIdx);
    });
  }

  let scrollTicking = false;
  window.addEventListener('scroll', () => {
    if (!scrollTicking) {
      requestAnimationFrame(() => {
        updateScrollProgress();
        updateNavDots();
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  }, { passive: true });

  // ═══════════════════════════════════════
  // ENHANCEMENT 2: COUNTDOWN ZERO CELEBRATION
  // ═══════════════════════════════════════

  const celebrationOverlay = document.getElementById('celebrationOverlay');
  const celebrationDismiss = document.getElementById('celebrationDismiss');

  function triggerCelebration() {
    if (localStorage.getItem('mx2026_celebrated')) return;
    localStorage.setItem('mx2026_celebrated', '1');

    // Multi-point confetti explosion
    const w = window.innerWidth;
    const h = window.innerHeight;
    createConfetti(w * 0.2, h * 0.3);
    createConfetti(w * 0.5, h * 0.2);
    createConfetti(w * 0.8, h * 0.3);
    setTimeout(() => {
      createConfetti(w * 0.3, h * 0.5);
      createConfetti(w * 0.7, h * 0.5);
    }, 300);

    if (celebrationOverlay) celebrationOverlay.classList.add('active');
  }

  if (celebrationDismiss) {
    celebrationDismiss.addEventListener('click', () => {
      celebrationOverlay.classList.remove('active');
    });
  }

  // Patch updateCountdown to check for zero
  const _origUpdateCountdown = updateCountdown;
  // We override directly in the interval — intercept inside the existing updateCountdown
  // Instead, we'll add a check in the setInterval cycle
  let celebrationChecked = false;

  function checkCelebration() {
    if (celebrationChecked) return;
    const now = getMexicoCityNow();
    if (now >= TRIP_START && !localStorage.getItem('mx2026_celebrated')) {
      celebrationChecked = true;
      triggerCelebration();
    }
  }

  // Check on load and every second
  checkCelebration();
  setInterval(checkCelebration, 1000);

  // ═══════════════════════════════════════
  // ENHANCEMENT 4: PACKING CHECKLIST
  // ═══════════════════════════════════════

  const packingCategories = document.getElementById('packingCategories');
  const packingProgressFill = document.getElementById('packingProgressFill');
  const packingProgressText = document.getElementById('packingProgressText');

  if (packingCategories) {
    const packingSection = document.getElementById('packing');
    const packingHeader = packingSection ? packingSection.querySelector('.packing-header') : null;

    // Auto-expand before arrival, collapsed from arrival onwards
    if (packingSection) {
      if (now < TRIP_START) {
        packingSection.classList.add('expanded');
      }
    }

    // Toggle expand/collapse on header click
    if (packingHeader) {
      packingHeader.addEventListener('click', () => {
        packingSection.classList.toggle('expanded');
      });
      packingHeader.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          packingSection.classList.toggle('expanded');
        }
      });
    }

    const packingState = JSON.parse(localStorage.getItem('mx2026_packing') || '{}');
    const allCheckboxes = packingCategories.querySelectorAll('input[type="checkbox"]');

    // Restore state
    allCheckboxes.forEach(cb => {
      const item = cb.dataset.item;
      if (packingState[item]) cb.checked = true;
    });

    function updatePackingProgress() {
      const total = allCheckboxes.length;
      let checked = 0;
      allCheckboxes.forEach(cb => { if (cb.checked) checked++; });
      const pct = total > 0 ? (checked / total) * 100 : 0;
      if (packingProgressFill) packingProgressFill.style.width = pct + '%';
      if (packingProgressText) {
        const enText = checked + ' of ' + total + ' packed';
        const grText = checked + ' από ' + total + ' πακεταρισμένα';
        packingProgressText.textContent = currentLang === 'en' ? enText : grText;
        packingProgressText.setAttribute('data-en', enText);
        packingProgressText.setAttribute('data-gr', grText);
      }

      // All packed celebration
      if (checked === total && total > 0) {
        const cx = window.innerWidth / 2;
        const cy = packingProgressFill.getBoundingClientRect().top;
        createConfetti(cx, cy);
      }
    }

    allCheckboxes.forEach(cb => {
      cb.addEventListener('change', () => {
        const item = cb.dataset.item;
        if (cb.checked) {
          packingState[item] = true;
        } else {
          delete packingState[item];
        }
        localStorage.setItem('mx2026_packing', JSON.stringify(packingState));
        updatePackingProgress();
      });
    });

    updatePackingProgress();

    // Register packing cards with sectionObserver
    packingCategories.querySelectorAll('.packing-category').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)';
      sectionObserver.observe(el);
    });
  }

  // ═══════════════════════════════════════
  // ENHANCEMENT 5: PHRASE BOOK (flip cards)
  // ═══════════════════════════════════════

  document.querySelectorAll('.phrase-card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.classList.toggle('flipped');
      }
    });
  });

  // Register phrase cards with sectionObserver
  document.querySelectorAll('.phrase-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)';
    sectionObserver.observe(el);
  });

  // ═══════════════════════════════════════
  // ENHANCEMENT 6: CINEMATIC SENSES STRIP
  // ═══════════════════════════════════════

  // Emoji particle burst system — extends existing canvas particle system
  function createEmojiParticles(x, y, emojis, count) {
    const emojiList = emojis.split(',').map(e => e.trim());
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const velocity = 2 + Math.random() * 4;
      const emoji = emojiList[Math.floor(Math.random() * emojiList.length)];
      particles.push({
        x,
        y,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity - 3,
        life: 1,
        decay: 0.012 + Math.random() * 0.012,
        size: 14 + Math.random() * 10,
        rotation: (Math.random() - 0.5) * 0.6,
        rotationSpeed: (Math.random() - 0.5) * 0.15,
        isEmoji: true,
        emoji
      });
    }
    if (particles.length > 0 && !animatingParticles) {
      animatingParticles = true;
      animateParticles();
    }
  }

  // Senses cards — staggered scroll reveal + particle burst
  const senseCards = document.querySelectorAll('.sense-card');
  const sensesObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const card = entry.target;
        const index = Array.from(senseCards).indexOf(card);
        const delay = index * 100;

        // Staggered fade-in
        setTimeout(() => {
          card.classList.add('visible');
        }, delay);

        // Particle burst after fade-in starts
        setTimeout(() => {
          const rect = card.getBoundingClientRect();
          const cx = rect.left + rect.width / 2;
          const cy = rect.top + rect.height / 2;
          const emojis = card.getAttribute('data-particles') || '✨';
          createEmojiParticles(cx, cy, emojis, 12);
        }, delay + 300);

        sensesObserver.unobserve(card);
      }
    });
  }, { threshold: 0.2 });

  senseCards.forEach(card => {
    sensesObserver.observe(card);
  });

  // Register currency card with sectionObserver
  const currencyCard = document.querySelector('.currency-card');
  if (currencyCard) {
    currencyCard.style.opacity = '0';
    currencyCard.style.transform = 'translateY(20px)';
    currencyCard.style.transition = 'opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)';
    sectionObserver.observe(currencyCard);
  }

  // ═══════════════════════════════════════
  // ENHANCEMENT 7: FAMILY EASTER EGGS
  // ═══════════════════════════════════════

  const eggState = JSON.parse(localStorage.getItem('mx2026_eggs') || '{"konami":false,"flag":false,"footer":false,"found":0}');
  const eggCounter = document.getElementById('easterEggCounter');

  function updateEggCounter() {
    if (!eggCounter) return;
    if (eggState.found === 0) {
      eggCounter.textContent = '';
      return;
    }
    eggCounter.classList.add('revealed');
    const en = eggState.found + '/3 secrets found';
    const gr = eggState.found + '/3 μυστικά βρέθηκαν';
    eggCounter.textContent = currentLang === 'en' ? en : gr;
    eggCounter.setAttribute('data-en', en);
    eggCounter.setAttribute('data-gr', gr);
  }

  function discoverEgg(name) {
    if (eggState[name]) return; // already found
    eggState[name] = true;
    eggState.found = (eggState.found || 0) + 1;
    localStorage.setItem('mx2026_eggs', JSON.stringify(eggState));
    updateEggCounter();
  }

  // --- Konami Code ---
  const konamiSequence = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
  let konamiIndex = 0;

  document.addEventListener('keydown', (e) => {
    const expected = konamiSequence[konamiIndex];
    if (e.key === expected || e.key.toLowerCase() === expected) {
      konamiIndex++;
      if (konamiIndex === konamiSequence.length) {
        konamiIndex = 0;
        discoverEgg('konami');
        // Confetti
        const w = window.innerWidth;
        const h = window.innerHeight;
        createConfetti(w * 0.3, h * 0.4);
        createConfetti(w * 0.7, h * 0.4);
        // Show secret message
        const overlay = document.createElement('div');
        overlay.className = 'secret-message-overlay';
        overlay.innerHTML = '<div class="secret-message-content">' +
          '<h2 data-en="You found a secret!" data-gr="Βρήκες ένα μυστικό!">' + (currentLang === 'en' ? 'You found a secret!' : 'Βρήκες ένα μυστικό!') + '</h2>' +
          '<p data-en="The Andreou family goes harder than the Konami code. Mexico City doesn\'t know what\'s coming." data-gr="Η οικογένεια Ανδρέου τα δίνει όλα, πιο πολύ από τον κώδικα Konami. Η Πόλη του Μεξικού δεν ξέρει τι της έρχεται.">' +
          (currentLang === 'en' ? "The Andreou family goes harder than the Konami code. Mexico City doesn't know what's coming." : 'Η οικογένεια Ανδρέου τα δίνει όλα, πιο πολύ από τον κώδικα Konami. Η Πόλη του Μεξικού δεν ξέρει τι της έρχεται.') + '</p></div>';
        document.body.appendChild(overlay);
        overlay.addEventListener('click', () => overlay.remove());
        setTimeout(() => { if (overlay.parentNode) overlay.remove(); }, 6000);
      }
    } else {
      konamiIndex = 0;
      // Check if the pressed key is the start of the sequence
      if (e.key === konamiSequence[0]) konamiIndex = 1;
    }
  });

  // --- Flag Rapid-Click ---
  const heroFlag = document.querySelector('.hero-flag');
  let flagClicks = 0;
  let flagTimer = null;

  if (heroFlag) {
    heroFlag.style.cursor = 'pointer';
    heroFlag.addEventListener('click', (e) => {
      flagClicks++;
      clearTimeout(flagTimer);
      if (flagClicks >= 5) {
        flagClicks = 0;
        discoverEgg('flag');
        createParticles(e.clientX, e.clientY, '#E3A72F', 40);
        createParticles(e.clientX, e.clientY, '#C65D3B', 30);
        createParticles(e.clientX, e.clientY, '#0E3B43', 20);
      } else {
        flagTimer = setTimeout(() => { flagClicks = 0; }, 1500);
      }
    });
  }

  // Restore egg counter on load
  updateEggCounter();

  // ═══════════════════════════════════════
  // INITIALIZE
  // ═══════════════════════════════════════

  // Set initial language
  setLanguage('gr');

})();
