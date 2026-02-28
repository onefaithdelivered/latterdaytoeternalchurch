/**
 * ReadAloud Article Widget — One Faith Delivered
 * 
 * USAGE: Add this to any article page:
 * 
 *   <script src="readaloud-widget.js"></script>
 * 
 * OPTIONS: Configure before the script tag (all optional):
 * 
 *   <script>
 *     window.ReadAloudConfig = {
 *       selector: 'article',        // CSS selector for article content (default: auto-detect)
 *       position: 'top',            // 'top' = inline banner above article, 'float' = floating button
 *       accentColor: '#8B1A1A',     // Primary color (default: burgundy)
 *       goldColor: '#C5A55A',       // Secondary color (default: gold)
 *       bgColor: '#F5F0E8',         // Background (default: parchment)
 *       fontFamily: "'Cinzel', serif", // Display font
 *       bodyFont: "'Cormorant Garamond', serif", // Body font
 *       defaultRate: 1.0,           // Starting speed
 *     };
 *   </script>
 *   <script src="readaloud-widget.js"></script>
 */

(function () {
  'use strict';

  // ── Configuration ──
  const cfg = Object.assign({
    selector: '',
    position: 'top',
    accentColor: '#8B1A1A',
    goldColor: '#C5A55A',
    bgColor: '#F5F0E8',
    surfaceColor: '#EDE7DB',
    textColor: '#2C1810',
    textDimColor: '#6B5D52',
    borderColor: '#D4C9B8',
    fontFamily: "'Cinzel', serif",
    bodyFont: "'Cormorant Garamond', serif",
    monoFont: "'JetBrains Mono', 'Courier New', monospace",
    defaultRate: 1.0,
  }, window.ReadAloudConfig || {});

  // ── State ──
  let sentences = [];
  let paragraphStarts = [];
  let currentIndex = -1;
  let isPlaying = false;
  let isPaused = false;
  let rate = cfg.defaultRate;
  let pitch = 1.0;
  let volume = 1.0;
  let selectedVoice = '';
  let voices = [];
  let articleEl = null;
  let originalSentenceEls = [];
  const synth = window.speechSynthesis;

  // ── Find Article Content ──
  function findArticle() {
    if (cfg.selector) return document.querySelector(cfg.selector);
    const candidates = [
      'article', 'main', '[role="main"]',
      '.article-content', '.article-body', '.post-content', '.entry-content',
      '.content-area', '.page-content', '.single-content',
      '#content', '#article', '#post-content'
    ];
    for (const sel of candidates) {
      const el = document.querySelector(sel);
      if (el && el.innerText.trim().length > 200) return el;
    }
    return null;
  }

  // ── Extract & Parse Text ──
  function extractSentences(el) {
    sentences = [];
    paragraphStarts = [];
    originalSentenceEls = [];

    // Walk through text-bearing elements
    const blocks = el.querySelectorAll('p, li, h1, h2, h3, h4, h5, h6, blockquote, figcaption, td, dt, dd');
    if (blocks.length === 0) {
      // Fallback: split all text
      const text = el.innerText.trim();
      const sents = text.split(/(?<=[.!?])\s+|\n\s*\n/).map(s => s.trim()).filter(s => s.length > 0);
      paragraphStarts.push(0);
      sents.forEach(s => { sentences.push(s); originalSentenceEls.push(null); });
      return;
    }

    blocks.forEach(block => {
      const text = block.innerText.trim();
      if (!text || text.length < 2) return;
      paragraphStarts.push(sentences.length);
      const sents = text.split(/(?<=[.!?])\s+/).map(s => s.trim()).filter(s => s.length > 0);
      if (sents.length === 0 && text) sents.push(text);
      sents.forEach(s => {
        sentences.push(s);
        originalSentenceEls.push(block);
      });
    });
  }

  // ── Highlighting (inline on the page) ──
  function highlightSentence(index) {
    // Remove old highlights
    document.querySelectorAll('.ra-highlight').forEach(el => {
      el.style.backgroundColor = '';
      el.style.borderRadius = '';
      el.style.transition = '';
      el.classList.remove('ra-highlight');
    });

    if (index < 0 || index >= sentences.length) return;
    const block = originalSentenceEls[index];
    if (block) {
      block.classList.add('ra-highlight');
      block.style.backgroundColor = cfg.goldColor + '30';
      block.style.borderRadius = '4px';
      block.style.transition = 'background-color 0.3s ease';
      block.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  // ── Speech ──
  function speakFrom(index) {
    if (index >= sentences.length) {
      isPlaying = false; isPaused = false; currentIndex = -1;
      highlightSentence(-1);
      updateUI();
      return;
    }
    synth.cancel();
    const utt = new SpeechSynthesisUtterance(sentences[index]);
    utt.rate = rate; utt.pitch = pitch; utt.volume = volume;
    const v = voices.find(v => v.name === selectedVoice);
    if (v) utt.voice = v;
    utt.onstart = () => { currentIndex = index; highlightSentence(index); updateUI(); };
    utt.onend = () => speakFrom(index + 1);
    utt.onerror = e => { if (e.error !== 'canceled') { isPlaying = false; updateUI(); } };
    synth.speak(utt);
  }

  function play() {
    if (sentences.length === 0) return;
    if (isPaused) { synth.resume(); isPaused = false; isPlaying = true; updateUI(); return; }
    isPlaying = true; isPaused = false; updateUI();
    speakFrom(currentIndex >= 0 ? currentIndex : 0);
  }
  function pause() { synth.pause(); isPaused = true; isPlaying = false; updateUI(); }
  function stop() { synth.cancel(); isPlaying = false; isPaused = false; currentIndex = -1; highlightSentence(-1); updateUI(); }
  function skipBack() {
    const n = Math.max(0, (currentIndex >= 0 ? currentIndex : 0) - 1);
    if (isPlaying || isPaused) { synth.cancel(); isPaused = false; isPlaying = true; speakFrom(n); }
    else { currentIndex = n; highlightSentence(n); updateUI(); }
  }
  function skipForward() {
    const n = Math.min(sentences.length - 1, (currentIndex >= 0 ? currentIndex : 0) + 1);
    if (isPlaying || isPaused) { synth.cancel(); isPaused = false; isPlaying = true; speakFrom(n); }
    else { currentIndex = n; highlightSentence(n); updateUI(); }
  }
  function paraBack() {
    const ci = currentIndex >= 0 ? currentIndex : 0;
    let t = 0;
    for (let i = paragraphStarts.length - 1; i >= 0; i--) { if (paragraphStarts[i] < ci) { t = paragraphStarts[i]; break; } }
    if (isPlaying || isPaused) { synth.cancel(); isPaused = false; isPlaying = true; speakFrom(t); }
    else { currentIndex = t; highlightSentence(t); updateUI(); }
  }
  function paraForward() {
    const ci = currentIndex >= 0 ? currentIndex : 0;
    let t = sentences.length - 1;
    for (let i = 0; i < paragraphStarts.length; i++) { if (paragraphStarts[i] > ci) { t = paragraphStarts[i]; break; } }
    if (isPlaying || isPaused) { synth.cancel(); isPaused = false; isPlaying = true; speakFrom(t); }
    else { currentIndex = t; highlightSentence(t); updateUI(); }
  }

  // ── Voices ──
  function loadVoices() {
    const all = synth.getVoices();
    const en = all.filter(v => v.lang.startsWith('en'));
    voices = en.length > 0 ? en : all;
    if (voices.length && !selectedVoice) {
      const pref = voices.find(v => v.name.includes('Natural') || v.name.includes('Enhanced') || v.name.includes('Google'));
      selectedVoice = (pref || voices[0]).name;
    }
    // Update select if it exists
    const sel = document.getElementById('ra-voice-select');
    if (sel) {
      sel.innerHTML = '';
      voices.forEach(v => {
        const o = document.createElement('option');
        o.value = v.name;
        o.textContent = v.name.replace(/^(Microsoft |Google |Apple )/, '');
        if (v.name === selectedVoice) o.selected = true;
        sel.appendChild(o);
      });
    }
  }

  // ── Build UI ──
  let widgetEl = null;
  let controlsVisible = false;

  function injectStyles() {
    const style = document.createElement('style');
    style.textContent = `
      .ra-widget * { box-sizing: border-box; margin: 0; padding: 0; }

      .ra-widget {
        font-family: ${cfg.bodyFont};
        color: ${cfg.textColor};
        margin: 24px 0;
      }

      /* ── Banner (top position) ── */
      .ra-banner {
        background: linear-gradient(135deg, ${cfg.bgColor}, ${cfg.surfaceColor});
        border: 1px solid ${cfg.borderColor};
        border-left: 4px solid ${cfg.accentColor};
        border-radius: 8px;
        padding: 16px 20px;
        display: flex;
        align-items: center;
        gap: 14px;
        flex-wrap: wrap;
        box-shadow: 0 2px 12px rgba(44, 24, 16, 0.08);
      }

      .ra-banner-icon {
        width: 44px; height: 44px;
        border-radius: 50%;
        background: linear-gradient(135deg, ${cfg.accentColor}, ${cfg.accentColor}CC);
        display: flex; align-items: center; justify-content: center;
        color: ${cfg.goldColor};
        font-size: 20px;
        flex-shrink: 0;
        box-shadow: 0 2px 8px ${cfg.accentColor}33;
      }

      .ra-banner-text {
        flex: 1; min-width: 150px;
      }
      .ra-banner-title {
        font-family: ${cfg.fontFamily};
        font-size: 15px;
        font-weight: 600;
        color: ${cfg.accentColor};
        letter-spacing: 0.03em;
      }
      .ra-banner-meta {
        font-size: 13px;
        color: ${cfg.textDimColor};
        margin-top: 2px;
      }

      .ra-listen-btn {
        padding: 10px 24px;
        border-radius: 6px;
        border: 2px solid ${cfg.accentColor};
        background: ${cfg.accentColor};
        color: ${cfg.goldColor};
        font-family: ${cfg.fontFamily};
        font-size: 13px;
        font-weight: 600;
        letter-spacing: 0.06em;
        cursor: pointer;
        transition: all 0.2s;
        white-space: nowrap;
        text-transform: uppercase;
      }
      .ra-listen-btn:hover {
        background: transparent;
        color: ${cfg.accentColor};
      }
      .ra-listen-btn.playing {
        background: transparent;
        color: ${cfg.accentColor};
        animation: ra-pulse 2s ease-in-out infinite;
      }
      @keyframes ra-pulse {
        0%, 100% { box-shadow: 0 0 0 0 ${cfg.accentColor}33; }
        50% { box-shadow: 0 0 0 8px ${cfg.accentColor}00; }
      }

      /* ── Controls Panel ── */
      .ra-controls {
        margin-top: 12px;
        background: ${cfg.surfaceColor};
        border: 1px solid ${cfg.borderColor};
        border-radius: 8px;
        padding: 14px 18px;
        display: none;
      }
      .ra-controls.open { display: block; }

      .ra-transport {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        margin-bottom: 12px;
      }
      .ra-tbtn {
        width: 36px; height: 36px;
        border-radius: 6px;
        border: 1px solid ${cfg.borderColor};
        background: ${cfg.bgColor};
        color: ${cfg.textColor};
        font-size: 14px;
        cursor: pointer;
        display: flex; align-items: center; justify-content: center;
        transition: all 0.15s;
      }
      .ra-tbtn:hover { border-color: ${cfg.accentColor}; color: ${cfg.accentColor}; }
      .ra-tbtn:disabled { opacity: 0.4; cursor: default; }
      .ra-tbtn.para {
        font-size: 9px;
        font-family: ${cfg.monoFont};
        font-weight: 700;
      }
      .ra-play-btn {
        width: 46px; height: 46px;
        border-radius: 23px;
        border: none;
        background: linear-gradient(135deg, ${cfg.accentColor}, ${cfg.accentColor}DD);
        color: ${cfg.goldColor};
        font-size: 18px;
        cursor: pointer;
        display: flex; align-items: center; justify-content: center;
        box-shadow: 0 3px 12px ${cfg.accentColor}33;
        transition: all 0.15s;
      }
      .ra-play-btn:hover { transform: scale(1.05); }

      .ra-progress-wrap {
        height: 4px;
        background: ${cfg.borderColor};
        border-radius: 2px;
        margin-bottom: 12px;
        cursor: pointer;
        position: relative;
      }
      .ra-progress-bar {
        height: 100%;
        background: linear-gradient(90deg, ${cfg.accentColor}, ${cfg.goldColor});
        border-radius: 2px;
        transition: width 0.3s ease;
        width: 0%;
      }

      .ra-status {
        text-align: center;
        font-size: 12px;
        color: ${cfg.textDimColor};
        font-family: ${cfg.monoFont};
        margin-bottom: 10px;
      }

      .ra-settings {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 10px;
      }
      .ra-setting label {
        display: block;
        font-size: 10px;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: ${cfg.textDimColor};
        font-family: ${cfg.monoFont};
        margin-bottom: 4px;
      }
      .ra-setting select, .ra-setting input[type="range"] {
        width: 100%;
      }
      .ra-setting select {
        padding: 5px 6px;
        background: ${cfg.bgColor};
        border: 1px solid ${cfg.borderColor};
        border-radius: 5px;
        color: ${cfg.textColor};
        font-size: 11px;
        font-family: ${cfg.monoFont};
        outline: none;
      }
      .ra-setting input[type="range"] {
        accent-color: ${cfg.accentColor};
      }
      .ra-speed-row {
        display: flex; gap: 4px; margin-top: 8px; justify-content: center;
      }
      .ra-speed-btn {
        padding: 3px 10px;
        border-radius: 4px;
        border: 1px solid ${cfg.borderColor};
        background: transparent;
        color: ${cfg.textDimColor};
        font-size: 11px;
        font-family: ${cfg.monoFont};
        cursor: pointer;
        transition: all 0.15s;
      }
      .ra-speed-btn.active {
        border-color: ${cfg.accentColor};
        color: ${cfg.accentColor};
        background: ${cfg.accentColor}11;
      }

      .ra-toggle-settings {
        display: block;
        margin: 8px auto 0;
        padding: 4px 14px;
        border: none;
        background: transparent;
        color: ${cfg.textDimColor};
        font-size: 11px;
        font-family: ${cfg.monoFont};
        cursor: pointer;
        text-decoration: underline;
      }
      .ra-toggle-settings:hover { color: ${cfg.accentColor}; }

      .ra-settings-panel { display: none; }
      .ra-settings-panel.open { display: block; }

      /* ── Floating Button (float position) ── */
      .ra-float-btn {
        position: fixed;
        bottom: 24px;
        right: 24px;
        width: 56px; height: 56px;
        border-radius: 28px;
        border: none;
        background: linear-gradient(135deg, ${cfg.accentColor}, ${cfg.accentColor}DD);
        color: ${cfg.goldColor};
        font-size: 24px;
        cursor: pointer;
        box-shadow: 0 4px 20px ${cfg.accentColor}44;
        z-index: 9999;
        display: flex; align-items: center; justify-content: center;
        transition: all 0.2s;
      }
      .ra-float-btn:hover { transform: scale(1.1); }
      .ra-float-btn.playing { animation: ra-pulse 2s ease-in-out infinite; }

      /* ── Floating Panel ── */
      .ra-float-panel {
        position: fixed;
        bottom: 90px;
        right: 24px;
        width: 340px;
        max-width: calc(100vw - 48px);
        background: ${cfg.bgColor};
        border: 1px solid ${cfg.borderColor};
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(44, 24, 16, 0.15);
        z-index: 9998;
        overflow: hidden;
        display: none;
      }
      .ra-float-panel.open { display: block; }
      .ra-float-panel .ra-banner { border-radius: 0; border: none; border-bottom: 1px solid ${cfg.borderColor}; }
      .ra-float-panel .ra-controls { display: block; border: none; border-radius: 0; margin: 0; }

      @media (max-width: 600px) {
        .ra-settings { grid-template-columns: 1fr; }
        .ra-banner { flex-direction: column; text-align: center; }
        .ra-float-panel { right: 12px; bottom: 80px; width: calc(100vw - 24px); }
        .ra-float-btn { bottom: 16px; right: 16px; }
        .ra-tbtn.para { display: none; }
      }
    `;
    document.head.appendChild(style);
  }

  function estimateTime() {
    const words = sentences.join(' ').split(/\s+/).length;
    return Math.ceil(words / (150 * rate));
  }

  function remainingTime() {
    if (currentIndex < 0) return estimateTime();
    const words = sentences.slice(currentIndex).join(' ').split(/\s+/).length;
    return Math.ceil(words / (150 * rate));
  }

  function buildBanner() {
    const mins = estimateTime();
    const div = document.createElement('div');
    div.innerHTML = `
      <div class="ra-banner">
        <div class="ra-banner-icon">🔊</div>
        <div class="ra-banner-text">
          <div class="ra-banner-title">Listen to This Article</div>
          <div class="ra-banner-meta">${sentences.length} sentences · ~${mins} min read</div>
        </div>
        <button class="ra-listen-btn" id="ra-main-btn">▶ Listen</button>
      </div>
      <div class="ra-controls" id="ra-controls">
        <div class="ra-progress-wrap" id="ra-progress-wrap">
          <div class="ra-progress-bar" id="ra-progress-bar"></div>
        </div>
        <div class="ra-status" id="ra-status">Ready · ${rate}x · ~${mins} min</div>
        <div class="ra-transport">
          <button class="ra-tbtn" id="ra-stop" title="Stop">⏹</button>
          <button class="ra-tbtn para" id="ra-para-prev" title="Prev paragraph">⏮¶</button>
          <button class="ra-tbtn" id="ra-prev" title="Prev sentence">⏮</button>
          <button class="ra-play-btn" id="ra-play">▶</button>
          <button class="ra-tbtn" id="ra-next" title="Next sentence">⏭</button>
          <button class="ra-tbtn para" id="ra-para-next" title="Next paragraph">¶⏭</button>
        </div>
        <div class="ra-speed-row">
          <button class="ra-speed-btn ${rate === 0.9 ? 'active' : ''}" data-speed="0.9">0.9x</button>
          <button class="ra-speed-btn ${rate === 1 ? 'active' : ''}" data-speed="1">1x</button>
          <button class="ra-speed-btn ${rate === 1.1 ? 'active' : ''}" data-speed="1.1">1.1x</button>
          <button class="ra-speed-btn ${rate === 1.2 ? 'active' : ''}" data-speed="1.2">1.2x</button>
          <button class="ra-speed-btn ${rate === 1.25 ? 'active' : ''}" data-speed="1.25">1.25x</button>
        </div>
        <button class="ra-toggle-settings" id="ra-toggle-settings">Voice & settings ▾</button>
        <div class="ra-settings-panel" id="ra-settings-panel">
          <div class="ra-settings">
            <div class="ra-setting">
              <label>Voice</label>
              <select id="ra-voice-select"></select>
            </div>
            <div class="ra-setting">
              <label id="ra-pitch-label">Pitch: ${pitch}</label>
              <input type="range" id="ra-pitch" min="0.5" max="1.5" step="0.1" value="${pitch}">
            </div>
            <div class="ra-setting">
              <label id="ra-vol-label">Volume: 100%</label>
              <input type="range" id="ra-vol" min="0" max="1" step="0.05" value="${volume}">
            </div>
          </div>
        </div>
      </div>
    `;
    return div;
  }

  function updateUI() {
    const mainBtn = document.getElementById('ra-main-btn');
    const playBtn = document.getElementById('ra-play');
    const controls = document.getElementById('ra-controls');
    const statusEl = document.getElementById('ra-status');
    const progressBar = document.getElementById('ra-progress-bar');
    const floatBtn = document.querySelector('.ra-float-btn');

    if (mainBtn) {
      if (isPlaying) {
        mainBtn.textContent = '⏸ Pause';
        mainBtn.classList.add('playing');
        if (controls) controls.classList.add('open');
      } else if (isPaused) {
        mainBtn.textContent = '▶ Resume';
        mainBtn.classList.remove('playing');
      } else {
        mainBtn.textContent = '▶ Listen';
        mainBtn.classList.remove('playing');
      }
    }

    if (playBtn) playBtn.textContent = isPlaying ? '⏸' : '▶';
    if (floatBtn) floatBtn.classList.toggle('playing', isPlaying);

    if (statusEl) {
      const state = isPlaying ? 'Playing' : isPaused ? 'Paused' : 'Ready';
      const rem = remainingTime();
      const pos = currentIndex >= 0 ? `${currentIndex + 1}/${sentences.length}` : '';
      statusEl.textContent = `${state} · ${rate}x${pos ? ' · ' + pos : ''} · ~${rem} min left`;
    }

    if (progressBar && sentences.length > 0) {
      progressBar.style.width = currentIndex >= 0 ? Math.round(((currentIndex + 1) / sentences.length) * 100) + '%' : '0%';
    }
  }

  function bindEvents() {
    // Main listen button
    const mainBtn = document.getElementById('ra-main-btn');
    if (mainBtn) mainBtn.addEventListener('click', () => {
      if (isPlaying) pause();
      else play();
    });

    // Transport
    const playBtn = document.getElementById('ra-play');
    if (playBtn) playBtn.addEventListener('click', () => { isPlaying ? pause() : play(); });
    document.getElementById('ra-stop')?.addEventListener('click', stop);
    document.getElementById('ra-prev')?.addEventListener('click', skipBack);
    document.getElementById('ra-next')?.addEventListener('click', skipForward);
    document.getElementById('ra-para-prev')?.addEventListener('click', paraBack);
    document.getElementById('ra-para-next')?.addEventListener('click', paraForward);

    // Progress click
    document.getElementById('ra-progress-wrap')?.addEventListener('click', (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const pct = (e.clientX - rect.left) / rect.width;
      const idx = Math.floor(pct * sentences.length);
      if (isPlaying || isPaused) { synth.cancel(); isPaused = false; isPlaying = true; speakFrom(idx); }
      else { currentIndex = idx; highlightSentence(idx); updateUI(); }
    });

    // Speed presets
    document.querySelectorAll('.ra-speed-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        rate = parseFloat(btn.dataset.speed);
        document.querySelectorAll('.ra-speed-btn').forEach(b => b.classList.toggle('active', parseFloat(b.dataset.speed) === rate));
        updateUI();
      });
    });

    // Voice
    document.getElementById('ra-voice-select')?.addEventListener('change', (e) => { selectedVoice = e.target.value; });

    // Pitch
    document.getElementById('ra-pitch')?.addEventListener('input', (e) => {
      pitch = parseFloat(e.target.value);
      document.getElementById('ra-pitch-label').textContent = 'Pitch: ' + pitch;
    });

    // Volume
    document.getElementById('ra-vol')?.addEventListener('input', (e) => {
      volume = parseFloat(e.target.value);
      document.getElementById('ra-vol-label').textContent = 'Volume: ' + Math.round(volume * 100) + '%';
    });

    // Toggle settings
    document.getElementById('ra-toggle-settings')?.addEventListener('click', () => {
      const panel = document.getElementById('ra-settings-panel');
      panel.classList.toggle('open');
      document.getElementById('ra-toggle-settings').textContent = panel.classList.contains('open') ? 'Voice & settings ▴' : 'Voice & settings ▾';
    });

    // Floating button
    const floatBtn = document.querySelector('.ra-float-btn');
    const floatPanel = document.querySelector('.ra-float-panel');
    if (floatBtn && floatPanel) {
      floatBtn.addEventListener('click', () => {
        if (floatPanel.classList.contains('open')) {
          floatPanel.classList.remove('open');
        } else {
          floatPanel.classList.add('open');
        }
      });
    }

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') return;
      if (sentences.length === 0) return;
      if (e.code === 'Space' && (isPlaying || isPaused || currentIndex >= 0)) { e.preventDefault(); isPlaying ? pause() : play(); }
      else if (e.code === 'Escape' && (isPlaying || isPaused)) stop();
      else if (e.code === 'ArrowLeft' && e.shiftKey && (isPlaying || isPaused || currentIndex >= 0)) paraBack();
      else if (e.code === 'ArrowRight' && e.shiftKey && (isPlaying || isPaused || currentIndex >= 0)) paraForward();
      else if (e.code === 'ArrowLeft' && (isPlaying || isPaused || currentIndex >= 0)) skipBack();
      else if (e.code === 'ArrowRight' && (isPlaying || isPaused || currentIndex >= 0)) skipForward();
    });
  }

  // ── Initialize ──
  function init() {
    articleEl = findArticle();
    if (!articleEl) {
      console.warn('ReadAloud: No article content found. Set ReadAloudConfig.selector to target your content.');
      return;
    }

    extractSentences(articleEl);
    if (sentences.length === 0) { console.warn('ReadAloud: No sentences found.'); return; }

    injectStyles();
    loadVoices();
    speechSynthesis.onvoiceschanged = loadVoices;

    if (cfg.position === 'float') {
      // Floating button + panel
      const floatBtn = document.createElement('button');
      floatBtn.className = 'ra-float-btn';
      floatBtn.innerHTML = '🔊';
      floatBtn.title = 'Listen to this article';
      document.body.appendChild(floatBtn);

      const panel = document.createElement('div');
      panel.className = 'ra-float-panel ra-widget';
      const content = buildBanner();
      panel.appendChild(content);
      document.body.appendChild(panel);
    } else {
      // Inline banner above article
      widgetEl = document.createElement('div');
      widgetEl.className = 'ra-widget';
      const content = buildBanner();
      widgetEl.appendChild(content);
      articleEl.parentNode.insertBefore(widgetEl, articleEl);
    }

    bindEvents();
    loadVoices(); // Populate the select

    // iOS keep-alive
    let keepAlive;
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        clearInterval(keepAlive);
        keepAlive = setInterval(() => { if (isPlaying && synth.speaking) synth.resume(); }, 10000);
      } else clearInterval(keepAlive);
    });
  }

  // Wait for DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
