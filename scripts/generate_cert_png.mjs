import fs from 'fs';
import path from 'path';
import { renderAsync } from '@resvg/resvg-js';

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1100" width="1600" height="1100">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&amp;family=Playfair+Display:ital,wght@1,400;1,600&amp;display=swap');
      .font-sans { font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif; }
      .font-serif { font-family: 'Playfair Display', Georgia, serif; }
    </style>
    
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="50%" stop-color="#fafafa"/>
      <stop offset="100%" stop-color="#f5f7fa"/>
    </linearGradient>

    <linearGradient id="blueBanner" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#3b82f6"/>
      <stop offset="100%" stop-color="#2563eb"/>
    </linearGradient>

    <linearGradient id="greenTag" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#16a34a"/>
      <stop offset="100%" stop-color="#22c55e"/>
    </linearGradient>

    <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#0f172a" flood-opacity="0.06"/>
    </filter>
  </defs>

  <!-- Background Canvas -->
  <rect x="0" y="0" width="1600" height="1100" rx="0" fill="url(#bgGrad)"/>

  <!-- Outer Border Frame -->
  <rect x="30" y="30" width="1540" height="1040" rx="20" fill="none" stroke="#e2e8f0" stroke-width="2"/>

  <!-- TOP LEFT BADGE: Top 500 Rosette -->
  <g transform="translate(180, 160)">
    <!-- Scalloped / Starburst outer border -->
    <path d="M 0,-65 Q 12,-65 20,-58 Q 30,-64 40,-54 Q 48,-56 54,-45 Q 63,-42 63,-30 Q 70,-22 66,-10 Q 71,0 66,10 Q 70,22 63,30 Q 54,42 54,45 Q 48,56 40,54 Q 30,64 20,58 Q 12,65 0,65 Q -12,65 -20,58 Q -30,64 -40,54 Q -48,56 -54,45 Q -63,42 -63,30 Q -70,22 -66,10 Q -71,0 -66,-10 Q -70,-22 -63,-30 Q -54,-42 -54,-45 Q -48,-56 -40,-54 Q -30,-64 -20,-58 Q -12,-65 0,-65 Z" fill="#eff6ff" stroke="#93c5fd" stroke-width="2.5" filter="url(#cardShadow)"/>
    <circle cx="0" cy="0" r="50" fill="#ffffff" stroke="#bfdbfe" stroke-width="1.5" stroke-dasharray="4 3"/>
    <text x="0" y="-8" text-anchor="middle" class="font-sans" font-weight="700" font-size="22" fill="#2563eb">Top</text>
    <text x="0" y="26" text-anchor="middle" class="font-sans" font-weight="800" font-size="32" fill="#1d4ed8">500</text>
  </g>

  <!-- TOP CENTER HEADER -->
  <!-- #BuildwithGoogleAI Tag -->
  <g transform="translate(580, 80)">
    <rect x="0" y="0" width="220" height="42" rx="10" fill="url(#greenTag)"/>
    <text x="110" y="27" text-anchor="middle" class="font-sans" font-weight="700" font-size="17" fill="#ffffff">#BuildwithGoogleAI</text>
  </g>

  <!-- AI Riser Vietnam Banner -->
  <g transform="translate(530, 130)">
    <rect x="0" y="0" width="460" height="70" rx="16" fill="url(#blueBanner)" filter="url(#cardShadow)"/>
    <text x="230" y="47" text-anchor="middle" class="font-sans" font-weight="900" font-size="36" fill="#ffffff" letter-spacing="1">AI Riser Vietnam</text>
    
    <!-- Four colorful diamond dots -->
    <g transform="translate(100, 80)">
      <polygon points="0,-6 6,0 0,6 -6,0" fill="#ef4444"/>
      <polygon points="25,-6 31,0 25,6 19,0" fill="#10b981"/>
      <polygon points="50,-6 56,0 50,6 44,0" fill="#3b82f6"/>
      <polygon points="75,-6 81,0 75,6 69,0" fill="#f59e0b"/>
    </g>

    <!-- Yellow Vươn Mình Kiến Tạo Badge -->
    <g transform="translate(200, 68)">
      <rect x="0" y="0" width="180" height="32" rx="8" fill="#fef08a" stroke="#facc15" stroke-width="1"/>
      <text x="90" y="21" text-anchor="middle" class="font-sans" font-weight="700" font-size="14" fill="#854d0e">Vươn mình kiến tạo</text>
    </g>
  </g>

  <!-- TOP RIGHT MASCOT GRAPHIC -->
  <g transform="translate(1380, 150)">
    <!-- Blue Star Mascot -->
    <path d="M 0,-50 L 15,-15 L 50,-25 L 25,10 L 45,50 L 0,30 L -45,50 L -25,10 L -50,-25 L -15,-15 Z" fill="#3b82f6"/>
    <!-- Eyes -->
    <circle cx="-12" cy="0" r="8" fill="#ffffff"/>
    <circle cx="12" cy="0" r="8" fill="#ffffff"/>
    <circle cx="-10" cy="0" r="4" fill="#0f172a"/>
    <circle cx="14" cy="0" r="4" fill="#0f172a"/>
    <!-- Cute cheeks -->
    <circle cx="-18" cy="10" r="4" fill="#f43f5e" opacity="0.6"/>
    <circle cx="18" cy="10" r="4" fill="#f43f5e" opacity="0.6"/>
    <!-- Small yellow star hat -->
    <polygon points="25,-40 30,-28 42,-28 32,-20 36,-8 25,-15 14,-8 18,-20 8,-28 20,-28" fill="#facc15"/>
  </g>

  <!-- CERTIFICATE TITLE -->
  <text x="800" y="370" text-anchor="middle" class="font-sans" font-weight="900" font-size="58" fill="#1e293b" letter-spacing="3">
    CERTIFICATE <tspan class="font-serif" font-style="italic" font-weight="400" fill="#3b82f6" font-size="64">of</tspan> COMPLETION
  </text>

  <!-- SUBTITLE -->
  <text x="800" y="450" text-anchor="middle" class="font-sans" font-weight="500" font-size="24" fill="#64748b">
    This certificate is proudly presented to
  </text>

  <!-- RECIPIENT NAME -->
  <text x="800" y="570" text-anchor="middle" class="font-sans" font-weight="800" font-size="72" fill="#2563eb">
    Lê Thị Kim Anh
  </text>
  <line x1="500" y1="605" x2="1100" y2="605" stroke="#cbd5e1" stroke-width="2"/>

  <!-- DEDICATION LINE -->
  <text x="800" y="660" text-anchor="middle" class="font-sans" font-weight="500" font-size="22" fill="#64748b">
    for their dedication as
  </text>

  <!-- #AIRiserVietnam2026 Participants Pill -->
  <g transform="translate(520, 690)">
    <rect x="0" y="0" width="560" height="60" rx="18" fill="#2563eb" filter="url(#cardShadow)"/>
    <text x="280" y="38" text-anchor="middle" class="font-sans" font-weight="700" font-size="26" fill="#ffffff">#AIRiserVietnam2026 Participants</text>
  </g>

  <!-- MESSAGE PARAGRAPH -->
  <text x="800" y="810" text-anchor="middle" class="font-sans" font-weight="400" font-size="20" fill="#475569">
    Thanks for bringing your amazing ideas to #AIRiserVietnam! Your creativity and hard work made
  </text>
  <text x="800" y="845" text-anchor="middle" class="font-sans" font-weight="400" font-size="20" fill="#475569">
    the whole event a success. Keep riding that wave and never stop building!
  </text>

  <!-- FOOTER: Google for Developers & Date -->
  <g transform="translate(800, 950)">
    <!-- Google text logo -->
    <text x="-90" y="0" text-anchor="end" class="font-sans" font-weight="800" font-size="38">
      <tspan fill="#4285F4">G</tspan><tspan fill="#EA4335">o</tspan><tspan fill="#FBBC05">o</tspan><tspan fill="#4285F4">g</tspan><tspan fill="#34A853">l</tspan><tspan fill="#EA4335">e</tspan>
    </text>
    <text x="-70" y="0" text-anchor="start" class="font-sans" font-weight="600" font-size="38" fill="#5f6368">for Developers</text>
  </g>
  <text x="800" y="995" text-anchor="middle" class="font-sans" font-weight="600" font-size="20" fill="#94a3b8">Oct 2026</text>

  <!-- SIDE DECORATIONS -->
  <!-- Google colorful diamond shapes & icons -->
  <!-- Left Side -->
  <g transform="translate(100, 350)">
    <polygon points="0,-18 15,0 0,18 -15,0" fill="#3b82f6"/>
    <!-- Colorful pill icon -->
    <g transform="translate(-15, 120)">
      <rect x="0" y="0" width="30" height="50" rx="15" fill="#f87171" transform="rotate(-45)"/>
      <rect x="0" y="25" width="30" height="25" rx="0" fill="#60a5fa" transform="rotate(-45)"/>
    </g>
    <!-- Code symbol < -->
    <path d="M 0,300 L -20,320 L 0,340" stroke="#3b82f6" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <!-- Bottom green bracket -->
    <rect x="-20" y="480" width="45" height="45" rx="8" fill="none" stroke="#22c55e" stroke-width="5"/>
  </g>

  <!-- Right Side -->
  <g transform="translate(1500, 350)">
    <polygon points="0,-18 15,0 0,18 -15,0" fill="#3b82f6"/>
    <!-- Colorful pill icon -->
    <g transform="translate(-15, 120)">
      <rect x="0" y="0" width="30" height="50" rx="15" fill="#f87171" transform="rotate(45)"/>
      <rect x="0" y="25" width="30" height="25" rx="0" fill="#60a5fa" transform="rotate(45)"/>
    </g>
    <!-- Code symbol > -->
    <path d="M 0,300 L 20,320 L 0,340" stroke="#3b82f6" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <!-- Bottom green bracket -->
    <rect x="-25" y="480" width="45" height="45" rx="8" fill="none" stroke="#22c55e" stroke-width="5"/>
  </g>

  <!-- BOTTOM SPARKLES -->
  <g transform="translate(320, 1000)">
    <circle cx="0" cy="0" r="25" fill="none" stroke="#f59e0b" stroke-width="8"/>
    <path d="M 80,-20 L 100,0 L 80,20 L 60,0 Z" fill="#ef4444"/>
    <path d="M 180,-30 L 200,0 L 180,30 L 160,0 Z" fill="#3b82f6"/>
  </g>
  <g transform="translate(1280, 1000)">
    <path d="M -180,-30 L -160,0 L -180,30 L -200,0 Z" fill="#3b82f6"/>
    <path d="M -80,-20 L -60,0 L -80,20 L -100,0 Z" fill="#ef4444"/>
    <circle cx="0" cy="0" r="25" fill="none" stroke="#f59e0b" stroke-width="8"/>
  </g>
</svg>`;

async function convertSvgToPng() {
  const resvg = await renderAsync(svgContent, {
    fitTo: {
      mode: 'width',
      value: 2000,
    },
  });

  const pngBuffer = resvg.asPng();
  
  // Write to public/images/cert-top500-ai-riser.png
  const outPathPublic = path.join(process.cwd(), 'public', 'images', 'cert-top500-ai-riser.png');
  fs.writeFileSync(outPathPublic, pngBuffer);
  console.log('Saved PNG to:', outPathPublic);

  // Also write to dist/images/ if dist exists
  const distDir = path.join(process.cwd(), 'dist', 'images');
  if (fs.existsSync(distDir)) {
    fs.writeFileSync(path.join(distDir, 'cert-top500-ai-riser.png'), pngBuffer);
    console.log('Saved PNG to dist');
  }
}

convertSvgToPng().catch(console.error);
