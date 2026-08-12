(() => {
  const current = document.body.dataset.page;
  document.querySelectorAll('.nav a').forEach(a => {
    if (a.dataset.page === current) a.setAttribute('aria-current', 'page');
  });

  const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: .12 }) : null;
  document.querySelectorAll('.reveal').forEach(el => observer ? observer.observe(el) : el.classList.add('visible'));

  const canvas = document.getElementById('numberCanvas');
  if (canvas) initAtlas(canvas);

  const identityInput = document.getElementById('identityInput');
  const identityResult = document.getElementById('identityResult');
  if (identityInput && identityResult) {
    const update = () => {
      const x = Number(identityInput.value);
      identityResult.textContent = Number.isFinite(x) ? `1 × ${formatNumber(x)} = ${formatNumber(x)}` : 'Enter a finite number';
    };
    identityInput.addEventListener('input', update);
    update();
  }

  const powerSlider = document.getElementById('powerSlider');
  const powerResult = document.getElementById('powerResult');
  if (powerSlider && powerResult) {
    const update = () => {
      const n = Number(powerSlider.value);
      powerResult.innerHTML = `1<sup>${n}</sup> = 1`;
    };
    powerSlider.addEventListener('input', update);
    update();
  }

  const baseSelect = document.getElementById('baseSelect');
  const baseResult = document.getElementById('baseResult');
  if (baseSelect && baseResult) {
    const labels = { decimal: '1', binary: '1', octal: '1', hexadecimal: '1', roman: 'I', unary: '|', arabicIndic: '١', devanagari: '१', chinese: '一' };
    const names = { decimal: 'Decimal', binary: 'Binary', octal: 'Octal', hexadecimal: 'Hexadecimal', roman: 'Roman numeral', unary: 'Unary tally', arabicIndic: 'Arabic-Indic', devanagari: 'Devanagari', chinese: 'Chinese numeral' };
    const update = () => baseResult.innerHTML = `<span>${labels[baseSelect.value]}</span><small style="display:block;font-family:Inter,sans-serif;color:var(--muted);font-size:.85rem;margin-top:8px">${names[baseSelect.value]}</small>`;
    baseSelect.addEventListener('change', update);
    update();
  }

  const certainty = document.getElementById('certainty');
  const certaintyResult = document.getElementById('certaintyResult');
  if (certainty && certaintyResult) {
    const update = () => {
      const p = Number(certainty.value) / 100;
      certaintyResult.textContent = `P = ${p.toFixed(2)}${p === 1 ? ' — certainty' : ''}`;
    };
    certainty.addEventListener('input', update);
    update();
  }

  function formatNumber(n) {
    if (Math.abs(n) >= 1e7 || (Math.abs(n) > 0 && Math.abs(n) < 1e-5)) return n.toExponential(4);
    return String(Number(n.toFixed(8)));
  }

  function initAtlas(canvas) {
    const ctx = canvas.getContext('2d');
    let center = 0;
    let unitsPerScreen = 12;
    let dragging = false;
    let lastX = 0;
    let hoverValue = null;
    const status = document.getElementById('atlasStatus');

    function resize() {
      const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw();
    }

    function niceStep(raw) {
      const power = Math.pow(10, Math.floor(Math.log10(raw)));
      const fraction = raw / power;
      const nice = fraction < 1.5 ? 1 : fraction < 3 ? 2 : fraction < 7 ? 5 : 10;
      return nice * power;
    }

    function xFor(value, width) { return width / 2 + (value - center) * width / unitsPerScreen; }
    function valueFor(x, width) { return center + (x - width / 2) * unitsPerScreen / width; }

    function draw() {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width, h = rect.height;
      ctx.clearRect(0, 0, w, h);
      const axisY = h * .53;

      const gradient = ctx.createLinearGradient(0, 0, w, 0);
      gradient.addColorStop(0, 'rgba(245,241,232,.08)');
      gradient.addColorStop(.5, 'rgba(214,173,88,.12)');
      gradient.addColorStop(1, 'rgba(245,241,232,.08)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, axisY - 1, w, 2);

      ctx.fillStyle = 'rgba(245,241,232,.5)';
      ctx.font = '12px Inter, system-ui, sans-serif';
      ctx.fillText('−∞', 18, axisY - 20);
      ctx.fillText('∞', w - 26, axisY - 20);

      const rawStep = unitsPerScreen / 9;
      const step = niceStep(rawStep);
      const start = Math.floor((center - unitsPerScreen / 2) / step) * step;
      const end = center + unitsPerScreen / 2;
      const decimals = Math.max(0, -Math.floor(Math.log10(step)) + 1);

      for (let v = start; v <= end + step; v += step) {
        const x = xFor(v, w);
        if (x < -40 || x > w + 40) continue;
        const isOne = Math.abs(v - 1) < step * 1e-8;
        ctx.strokeStyle = isOne ? '#d6ad58' : 'rgba(245,241,232,.35)';
        ctx.lineWidth = isOne ? 2 : 1;
        ctx.beginPath();
        ctx.moveTo(x, axisY - (isOne ? 18 : 9));
        ctx.lineTo(x, axisY + (isOne ? 18 : 9));
        ctx.stroke();
        ctx.fillStyle = isOne ? '#d6ad58' : 'rgba(245,241,232,.72)';
        ctx.font = isOne ? '700 14px Inter, system-ui, sans-serif' : '12px Inter, system-ui, sans-serif';
        const label = Math.abs(v) < step * 1e-8 ? '0' : Number(v.toFixed(decimals)).toString();
        const tw = ctx.measureText(label).width;
        ctx.fillText(label, x - tw / 2, axisY + 34);
      }

      const x1 = xFor(1, w);
      if (x1 >= -50 && x1 <= w + 50) {
        ctx.beginPath();
        ctx.arc(x1, axisY, 7, 0, Math.PI * 2);
        ctx.fillStyle = '#d6ad58';
        ctx.fill();
        ctx.shadowColor = 'rgba(214,173,88,.8)';
        ctx.shadowBlur = 20;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.fillStyle = '#f5f1e8';
        ctx.font = '600 13px Inter, system-ui, sans-serif';
        ctx.fillText('OPEN EXHIBIT', Math.min(w - 105, x1 + 16), axisY - 26);
      }

      if (hoverValue !== null) {
        const hx = xFor(hoverValue, w);
        if (hx >= 0 && hx <= w) {
          ctx.strokeStyle = 'rgba(122,184,255,.38)';
          ctx.beginPath(); ctx.moveTo(hx, 52); ctx.lineTo(hx, h - 42); ctx.stroke();
          const text = formatNumber(hoverValue);
          ctx.font = '13px Inter, system-ui, sans-serif';
          const tw = ctx.measureText(text).width;
          const bx = Math.max(8, Math.min(w - tw - 24, hx - tw / 2 - 10));
          ctx.fillStyle = 'rgba(17,19,24,.96)';
          ctx.fillRect(bx, 18, tw + 20, 28);
          ctx.strokeStyle = 'rgba(255,255,255,.12)';
          ctx.strokeRect(bx, 18, tw + 20, 28);
          ctx.fillStyle = '#f5f1e8';
          ctx.fillText(text, bx + 10, 37);
        }
      }

      if (status) status.textContent = `Viewing approximately ${formatNumber(center - unitsPerScreen/2)} to ${formatNumber(center + unitsPerScreen/2)} · scroll to zoom · drag to pan`;
    }

    canvas.addEventListener('wheel', e => {
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      const mouse = valueFor(e.clientX - rect.left, rect.width);
      const factor = Math.exp(e.deltaY * .0012);
      const next = Math.max(1e-9, Math.min(1e12, unitsPerScreen * factor));
      const ratio = next / unitsPerScreen;
      center = mouse - (mouse - center) * ratio;
      unitsPerScreen = next;
      draw();
    }, { passive: false });

    canvas.addEventListener('pointerdown', e => { dragging = true; lastX = e.clientX; canvas.setPointerCapture(e.pointerId); });
    canvas.addEventListener('pointermove', e => {
      const rect = canvas.getBoundingClientRect();
      if (dragging) {
        const dx = e.clientX - lastX;
        center -= dx * unitsPerScreen / rect.width;
        lastX = e.clientX;
      }
      hoverValue = valueFor(e.clientX - rect.left, rect.width);
      draw();
    });
    canvas.addEventListener('pointerup', e => { dragging = false; canvas.releasePointerCapture(e.pointerId); });
    canvas.addEventListener('pointerleave', () => { if (!dragging) { hoverValue = null; draw(); } });
    canvas.addEventListener('dblclick', e => {
      const rect = canvas.getBoundingClientRect();
      const v = valueFor(e.clientX - rect.left, rect.width);
      if (Math.abs(v - 1) < unitsPerScreen * .025) location.href = 'one.html';
    });

    document.getElementById('zoomIn')?.addEventListener('click', () => { unitsPerScreen = Math.max(1e-9, unitsPerScreen / 2); draw(); });
    document.getElementById('zoomOut')?.addEventListener('click', () => { unitsPerScreen = Math.min(1e12, unitsPerScreen * 2); draw(); });
    document.getElementById('findOne')?.addEventListener('click', () => { center = 1; unitsPerScreen = 4; draw(); });
    document.getElementById('resetAtlas')?.addEventListener('click', () => { center = 0; unitsPerScreen = 12; draw(); });

    window.addEventListener('resize', resize);
    resize();
  }
})();
