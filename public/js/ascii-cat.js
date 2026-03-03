(function () {
  const el  = document.getElementById('asciiCat');
  const btn = document.getElementById('feedBtn');
  const lbl = document.getElementById('hungerLabel');
  if (!el) return;

  // ── Frame sets (wide, high-detail) ───────────────────────────

  const IDLE = [
    `
     /\\_____/\\
    /  o     o \\
   ( ==  ^  == )
    )           (
   (  ___   ___  )
  (  |   | |   |  )
   \\_|___|_|___|_/
      |___|___|

  [ meow... feed me ]
    `,
    `
     /\\_____/\\
    /  -     o \\
   ( ==  ^  == )
    )           (
   (  ___   ___  )
  (  |   | |   |  )
   \\_|___|_|___|_/
      |___|___|

  [ ...hungry...  ]
    `,
    `
     /\\_____/\\
    /  o     - \\
   ( ==  ^  == )
    )           (
   (  ___   ___  )
  (  |   | |   |  )
   \\_|___|_|___|_/
      |___|___|

  [ feed me plz   ]
    `,
  ];

  const BEG = [
    `
     /\\_____/\\
    /  ^     ^ \\
   ( ==  w  == )
    )           (
   (    _____    )
  (    |     |    )
   \\   |     |   /
    \\__|_____|__/
        /   \\
       /     \\
  [ a FISH?! yes!! ]
    `,
    `
     /\\_____/\\
    /  *     * \\
   ( ==  w  == )
    )           (
   (    _____    )
  (    |     |    )
   \\   |     |   /
    \\__|_____|__/
        /   \\
       /     \\
  [ ooh ooh ooh!! ]
    `,
  ];

  const EAT = [
    `
     /\\_____/\\
    /  >     < \\
   ( ==  w  == )
    )           (
   (    _____    )
  (    | nom |    )
   \\   |_____|   /
    \\___________/
      |___|___|
      <><
  [   nom nom!!   ]
    `,
    `
     /\\_____/\\
    /  >     < \\
   ( ==  W  == )
    )           (
   (    _____    )
  (    | NOM |    )
   \\   |_____|   /
    \\___________/
      |___|___|

  [   NOM NOM!!   ]
    `,
    `
     /\\_____/\\
    /  =     = \\
   ( ==  w  == )
    )           (
   (    _____    )
  (    | mmm |    )
   \\   |_____|   /
    \\___________/
      |___|___|

  [  so good...   ]
    `,
  ];

  const HAPPY = [
    `
     /\\_____/\\
    /  ♥     ♥ \\
   ( ==  w  == )
    )  ~~~~~  (
   (  _______  )
  (  | purr~ |  )
   \\ |_______| /
    \\___________/
      |___|___|

  [  thank you!!  ]
    `,
    `
     /\\_____/\\
    /  ♥     ♥ \\
   ( ==  U  == )
    )  ~~~~~  (
   (  _______  )
  (  | purr~ |  )
   \\ |_______| /
    \\___________/
      |___|___|

  [  ♥ ♥ ♥ ♥ ♥   ]
    `,
    `
     /\\_____/\\
    /  ♥     ♥ \\
   ( ==  w  == )
    )  ~~~~~  (
   (  _______  )
  (  |  zzz  |  )
   \\ |_______| /
    \\___________/
      |___|___|

  [  so full...   ]
    `,
  ];

  const SLEEP = [
    `
     /\\_____/\\
    /  -     - \\
   ( ==  _  == )
    )           (
   (  _________  )
  (  |  z z z  |  )
   \\ |_________| /
    \\___________/
      |___|___|

  [   zzzZZZzzz   ]
    `,
    `
     /\\_____/\\
    /  -     - \\
   ( ==  _  == )
    )           (
   (  _________  )
  (  |  Z Z Z  |  )
   \\ |_________| /
    \\___________/
      |___|___|

  [   ZZZzzzZZZ   ]
    `,
  ];

  // ── State ────────────────────────────────────────────────────
  let phase    = 'idle';
  let frameIdx = 0;
  let timer    = null;
  let fishX    = 0;
  let fishTimer = null;

  const SPEEDS = { idle:600, beg:250, eat:220, happy:520, sleep:700 };

  const SETS = { idle:IDLE, beg:BEG, eat:EAT, happy:HAPPY, sleep:SLEEP };

  // ── Render ───────────────────────────────────────────────────
  function render(text) {
    el.textContent = text;
  }

  // ── Fish animation (text-based, prepended to frame) ──────────
  const FISH_COLS = 42; // approximate character width of the frame

  function renderWithFish(frame, fx) {
    const pos   = Math.max(0, FISH_COLS - Math.round(fx));
    const line  = ' '.repeat(pos) + '🐟  ~><>';
    render(line + '\n' + frame);
  }

  // ── Loop ─────────────────────────────────────────────────────
  function loop() {
    const frames = SETS[phase];
    render(frames[frameIdx % frames.length]);
    frameIdx++;

    if (phase === 'eat'   && frameIdx >= frames.length * 2) { return setPhase('happy'); }
    if (phase === 'happy' && frameIdx >= frames.length * 3) {
      setPhase('sleep');
      setLabel('full & happy ♥', true);
      if (btn) btn.disabled = false;
      return;
    }
    if (phase === 'sleep' && frameIdx >= frames.length * 5) {
      setPhase('idle');
      setLabel('hungry...', false);
      return;
    }

    timer = setTimeout(loop, SPEEDS[phase]);
  }

  function setPhase(p) {
    clearTimeout(timer);
    clearInterval(fishTimer);
    phase    = p;
    frameIdx = 0;
    loop();
  }

  // ── Fish fly-in ───────────────────────────────────────────────
  function launchFish() {
    fishX = 0;
    const begFrame = BEG[1];

    fishTimer = setInterval(() => {
      fishX += 2.2;
      renderWithFish(begFrame, fishX);

      if (fishX >= FISH_COLS) {
        clearInterval(fishTimer);
        setPhase('eat');
      }
    }, 60);
  }

  // ── UI helpers ────────────────────────────────────────────────
  function setLabel(text, happy) {
    if (!lbl) return;
    lbl.textContent = text;
    lbl.className   = 'hunger-label' + (happy ? ' happy' : '');
  }

  // ── Public ────────────────────────────────────────────────────
  window.feedTheCat = function () {
    if (phase !== 'idle' && phase !== 'sleep') return;
    if (btn) btn.disabled = true;
    setLabel('ooh, a fish!! ♥', true);
    setPhase('beg');
    setTimeout(() => {
      clearTimeout(timer);
      launchFish();
    }, 800);
  };

  // ── Start ─────────────────────────────────────────────────────
  loop();
})();
