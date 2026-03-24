import jsPDF from "jspdf";

// ─────────────────────────────────────────────────────────────────────
//  DESIGN SYSTEM
//  Professional medical report — clean light theme
//  Navy primary · Emerald for Normal · Amber for Low · Rose for High
// ─────────────────────────────────────────────────────────────────────
const C = {
  pageBg:        [248, 250, 252],
  white:         [255, 255, 255],

  brand:         [30,  64, 175],   // indigo-800
  brandDark:     [17,  24,  39],   // gray-900
  brandAccent:   [99, 102, 241],   // indigo-500

  textPrimary:   [15,  23,  42],
  textSecondary: [71,  85, 105],
  textMuted:     [148, 163, 184],

  sectionFill:   [241, 245, 249],
  border:        [226, 232, 240],

  // Normal  — emerald
  normalFg:  [4,   120,  87],
  normalBg:  [209, 250, 229],
  normalBar: [16,  185, 129],
  normalDot: [52,  211, 153],

  // Low — amber
  lowFg:     [146,  64,  14],
  lowBg:     [254, 243, 199],
  lowBar:    [245, 158,  11],
  lowDot:    [251, 191,  36],

  // High — rose
  highFg:    [159,  18,  57],
  highBg:    [255, 228, 230],
  highBar:   [244,  63,  94],
  highDot:   [251, 113, 133],
};

// ─── Status helpers ───────────────────────────────────────────────────
const SC = (s) => {
  if (s === "Normal") return { fg: C.normalFg, bg: C.normalBg, bar: C.normalBar, dot: C.normalDot };
  if (s === "High")   return { fg: C.highFg,   bg: C.highBg,   bar: C.highBar,   dot: C.highDot   };
  return                      { fg: C.lowFg,    bg: C.lowBg,    bar: C.lowBar,    dot: C.lowDot    };
};

const scoreC = (score) => {
  if (score >= 70) return { fg: C.normalFg, bg: C.normalBg, bar: C.normalBar };
  if (score >= 40) return { fg: C.lowFg,    bg: C.lowBg,    bar: C.lowBar    };
  return                   { fg: C.highFg,   bg: C.highBg,   bar: C.highBar   };
};

// ─── BADGE — single-line pill, vertically centered on (cx, cy) ───────
const badge = (doc, cx, cy, text, sc) => {
  const W = 19, H = 5.2;
  doc.setFillColor(...sc.bg);
  doc.roundedRect(cx - W / 2, cy - H / 2, W, H, 2.2, 2.2, "F");
  // Dot
  doc.setFillColor(...sc.dot);
  doc.circle(cx - W / 2 + 3.5, cy, 1, "F");
  // Text
  doc.setTextColor(...sc.fg);
  doc.setFontSize(6.2);
  doc.setFont("helvetica", "bold");
  doc.text(text, cx + 1.5, cy + 0.5, { align: "center", baseline: "middle" });
};

// ─── METRIC ROW ───────────────────────────────────────────────────────
const ROW_H   = 15;
const ROW_GAP = 3;

const metricRow = (doc, x, y, label, result, idealRange, statusText, rowWidth) => {
  const sc = SC(statusText);

  // White card
  doc.setFillColor(...C.white);
  doc.roundedRect(x, y, rowWidth, ROW_H, 2, 2, "F");
  doc.setDrawColor(...C.border);
  doc.setLineWidth(0.2);
  doc.roundedRect(x, y, rowWidth, ROW_H, 2, 2, "S");

  // Left colored bar (3 px wide)
  doc.setFillColor(...sc.bar);
  doc.roundedRect(x, y, 3, ROW_H, 1.5, 1.5, "F");

  // Label — constrained width to avoid overlap
  const labelMaxW = rowWidth * 0.46;
  doc.setTextColor(...C.textPrimary);
  doc.setFontSize(7.8);
  doc.setFont("helvetica", "bold");
  const labelLines = doc.splitTextToSize(label, labelMaxW).slice(0, 2);
  const lineH = 4.2;
  const blockH = labelLines.length * lineH;
  // Vertically center label block, leave 3mm at bottom for "Ref:"
  const labelTopY = y + (ROW_H - blockH - 3.5) / 2 + lineH;
  doc.text(labelLines, x + 6, labelTopY);

  // "Ref:" range
  doc.setTextColor(...C.textMuted);
  doc.setFontSize(5.8);
  doc.setFont("helvetica", "normal");
  doc.text(`Ref: ${idealRange}`, x + 6, y + ROW_H - 2.2);

  // Result value — right-aligned, vertically centered
  const centerY = y + ROW_H / 2;
  doc.setTextColor(...sc.fg);
  doc.setFontSize(9.5);
  doc.setFont("helvetica", "bold");
  doc.text(result, x + rowWidth - 26, centerY + 0.8, { align: "right", baseline: "middle" });

  // Badge — vertically centered on same centerY
  badge(doc, x + rowWidth - 11, centerY, statusText, sc);
};

// ─── SECTION HEADER ───────────────────────────────────────────────────
const sectionHeader = (doc, x, y, title, score, pageW) => {
  const secW = pageW - x * 2;
  const sc   = scoreC(score);

  doc.setFillColor(...C.sectionFill);
  doc.roundedRect(x, y, secW, 12, 2, 2, "F");

  doc.setFillColor(...C.brand);
  doc.roundedRect(x, y, 3, 12, 1.5, 1.5, "F");

  doc.setTextColor(...C.brand);
  doc.setFontSize(9.5);
  doc.setFont("helvetica", "bold");
  doc.text(title, x + 7, y + 8.2);

  // Score pill (right)
  const bw = 24;
  doc.setFillColor(...sc.bg);
  doc.roundedRect(pageW - x - bw, y + 2, bw, 8, 3, 3, "F");
  doc.setTextColor(...sc.fg);
  doc.setFontSize(7);
  doc.setFont("helvetica", "bold");
  doc.text(`${score}/100`, pageW - x - bw / 2, y + 7.2, { align: "center" });

  return y + 15;
};

// ─── GRID RENDERER ────────────────────────────────────────────────────
const renderGrid = (doc, rows, y, mx, rw) => {
  rows.forEach(([label, result, ideal, status], i) => {
    metricRow(
      doc,
      mx + (i % 2) * (rw + 4),
      y + Math.floor(i / 2) * (ROW_H + ROW_GAP),
      label, result, ideal, status, rw
    );
  });
  return y + Math.ceil(rows.length / 2) * (ROW_H + ROW_GAP);
};

// ─── PAGE BREAK GUARD ─────────────────────────────────────────────────
const ensureSpace = (doc, y, neededH, pw, ph, mx) => {
  if (y + neededH > ph - 20) {
    doc.addPage();
    doc.setFillColor(...C.pageBg);
    doc.rect(0, 0, pw, ph, "F");
    // Thin top rule on continuation pages
    doc.setFillColor(...C.brand);
    doc.rect(0, 0, pw, 1.5, "F");
    return 14;
  }
  return y;
};

// ─── FOOTER ───────────────────────────────────────────────────────────
const drawFooter = (doc, pw, ph, mx) => {
  const fy = ph - 13;
  doc.setDrawColor(...C.border);
  doc.setLineWidth(0.3);
  doc.line(mx, fy, pw - mx, fy);
  doc.setTextColor(...C.textMuted);
  doc.setFontSize(5.8);
  doc.setFont("helvetica", "normal");
  doc.text(
    "Generated using clinical formulas (Mifflin-St Jeor, Deurenberg, Devine, Janssen). Not a substitute for professional medical advice.",
    pw / 2, fy + 4, { align: "center", maxWidth: pw - mx * 2 }
  );
  doc.setTextColor(...C.brand);
  doc.setFontSize(7);
  doc.setFont("helvetica", "bold");
  doc.text("wellbeing.app", pw / 2, fy + 9, { align: "center" });
};

// ─────────────────────────────────────────────────────────────────────
//  MAIN EXPORT
// ─────────────────────────────────────────────────────────────────────
export const generatePDF = (data) => {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const pw  = doc.internal.pageSize.getWidth();
  const ph  = doc.internal.pageSize.getHeight();
  const mx  = 14;
  let   y   = 0;

  // ── Background ───────────────────────────────────────────────────
  doc.setFillColor(...C.pageBg);
  doc.rect(0, 0, pw, ph, "F");

  // ── Header ───────────────────────────────────────────────────────
  // Gradient-like: solid dark navy bar
  doc.setFillColor(...C.brand);
  doc.rect(0, 0, pw, 30, "F");
  // Subtle accent stripe at very top
  doc.setFillColor(...C.brandAccent);
  doc.rect(0, 0, pw, 2, "F");

  doc.setTextColor(...C.white);
  doc.setFontSize(19);
  doc.setFont("helvetica", "bold");
  doc.text("Wellbeing", mx, 16);

  doc.setTextColor(186, 210, 255);
  doc.setFontSize(7.5);
  doc.setFont("helvetica", "normal");
  doc.text("Smart Health Report", mx, 22);

  // Page label top-right
  doc.setTextColor(186, 210, 255);
  doc.setFontSize(7.5);
  doc.text(data.reportDate, pw - mx, 14, { align: "right" });

  y = 38;

  // ── Personal Info ────────────────────────────────────────────────
  const INFO_H = 20;
  doc.setFillColor(...C.white);
  doc.roundedRect(mx, y, pw - mx * 2, INFO_H, 3, 3, "F");
  doc.setDrawColor(...C.border);
  doc.setLineWidth(0.3);
  doc.roundedRect(mx, y, pw - mx * 2, INFO_H, 3, 3, "S");

  const infoItems = [
    ["Name",   data.name],
    ["Age",    `${data.age} yrs`],
    ["Gender", data.gender.charAt(0).toUpperCase() + data.gender.slice(1)],
    ["Weight", `${data.weightKg} kg`],
    ["Height", `${data.heightCm.toFixed(0)} cm`],
  ];
  const colW = (pw - mx * 2) / infoItems.length;
  infoItems.forEach(([label, val], i) => {
    const cx = mx + colW * i + colW / 2;
    if (i > 0) {
      doc.setDrawColor(...C.border);
      doc.setLineWidth(0.2);
      doc.line(mx + colW * i, y + 4, mx + colW * i, y + INFO_H - 4);
    }
    doc.setTextColor(...C.textMuted);
    doc.setFontSize(6.5);
    doc.setFont("helvetica", "normal");
    doc.text(label, cx, y + 8, { align: "center" });
    doc.setTextColor(...C.textPrimary);
    doc.setFontSize(9);
    doc.setFont("helvetica", "bold");
    doc.text(val, cx, y + 15.5, { align: "center" });
  });
  y += INFO_H + 6;

  // ── Overall Score + 3 Mini Cards ─────────────────────────────────
  const OV_H = 36;
  doc.setFillColor(...C.white);
  doc.roundedRect(mx, y, pw - mx * 2, OV_H, 3, 3, "F");
  doc.setDrawColor(...C.border);
  doc.setLineWidth(0.3);
  doc.roundedRect(mx, y, pw - mx * 2, OV_H, 3, 3, "S");
  // Left brand bar
  doc.setFillColor(...C.brand);
  doc.roundedRect(mx, y, 3, OV_H, 1.5, 1.5, "F");

  // Label
  doc.setTextColor(...C.textMuted);
  doc.setFontSize(6.8);
  doc.setFont("helvetica", "normal");
  doc.text("OVERALL HEALTH SCORE", mx + 8, y + 9);

  // Big score
  const oc = scoreC(data.overallScore);
  doc.setTextColor(...oc.fg);
  doc.setFontSize(28);
  doc.setFont("helvetica", "bold");
  doc.text(`${data.overallScore}`, mx + 8, y + 27);
  doc.setTextColor(...C.textMuted);
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.text("/ 100", mx + 26, y + 27);

  // Divider
  doc.setDrawColor(...C.border);
  doc.setLineWidth(0.3);
  doc.line(mx + 52, y + 6, mx + 52, y + OV_H - 6);

  // Mini cards
  const miniData = [
    ["Body Composition", data.bodyCompositionScore],
    ["Fat Analysis",     data.fatAnalysisScore],
    ["Metabolic",        data.metabolicScore],
  ];
  const rightX    = mx + 56;
  const rightW    = pw - mx - rightX - 2;
  const miniCardW = rightW / 3;

  miniData.forEach(([label, score], i) => {
    const mc   = scoreC(score);
    const cardX = rightX + i * miniCardW;
    const cw    = miniCardW - 4;
    const cardY = y + 4;
    const cardH = OV_H - 8;

    doc.setFillColor(...mc.bg);
    doc.roundedRect(cardX, cardY, cw, cardH, 3, 3, "F");

    // Top colored strip inside card
    doc.setFillColor(...mc.bar);
    doc.roundedRect(cardX, cardY, cw, 2.5, 1.5, 1.5, "F");

    // Score
    doc.setTextColor(...mc.fg);
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text(`${score}`, cardX + cw / 2, cardY + 17, { align: "center" });

    // /100
    doc.setFontSize(6);
    doc.setFont("helvetica", "normal");
    doc.text("/ 100", cardX + cw / 2, cardY + 22, { align: "center" });

    // Label
    doc.setFontSize(6.2);
    doc.setFont("helvetica", "bold");
    const wrapped = doc.splitTextToSize(label, cw - 4);
    wrapped.forEach((line, li) => {
      doc.text(line, cardX + cw / 2, cardY + 27 + li * 3.8, { align: "center" });
    });
  });
  y += OV_H + 8;

  // ── Column width ─────────────────────────────────────────────────
  const rw = (pw - mx * 2 - 4) / 2;

  // ── BODY COMPOSITION ─────────────────────────────────────────────
  const bcRows = [
    ["Fat Mass",    `${data.fatMass} kg`,    data.ideal.fatMass,    data.status.fatMass],
    ["Lean Mass",   `${data.leanMass} kg`,   data.ideal.leanMass,   data.status.leanMass],
    ["Muscle Mass", `${data.muscleMass} kg`, data.ideal.muscleMass, data.status.muscleMass],
    ["Bone Mass",   `${data.boneMass} kg`,   data.ideal.boneMass,   data.status.boneMass],
  ];
  y = ensureSpace(doc, y, 15 + Math.ceil(bcRows.length / 2) * (ROW_H + ROW_GAP), pw, ph, mx);
  y = sectionHeader(doc, mx, y, "Body Composition", data.bodyCompositionScore, pw);
  y = renderGrid(doc, bcRows, y, mx, rw);
  y += 7;

  // ── FAT ANALYSIS ─────────────────────────────────────────────────
  const faRows = [
    ["Body Fat %",         `${data.bodyFatPct}%`,      data.ideal.bodyFatPct,      data.status.bodyFatPct],
    ["Subcutaneous Fat",   `${data.subcutaneousFat}%`, data.ideal.subcutaneousFat, data.status.subcutaneousFat],
    ["Visceral Fat Index", `${data.visceralFat}`,      data.ideal.visceralFat,     data.status.visceralFat],
  ];
  y = ensureSpace(doc, y, 15 + Math.ceil(faRows.length / 2) * (ROW_H + ROW_GAP), pw, ph, mx);
  y = sectionHeader(doc, mx, y, "Fat Analysis", data.fatAnalysisScore, pw);
  y = renderGrid(doc, faRows, y, mx, rw);
  y += 7;

  // ── METABOLIC INDICATORS ─────────────────────────────────────────
  const miRows = [
    ["BMR (Basal Metabolic Rate)", `${data.bmr} kcal`,      data.ideal.bmr,          data.status.bmr],
    ["Protein Percentage",          `${data.proteinPct}%`,  data.ideal.proteinPct,   data.status.proteinPct],
    ["Metabolic Age",               `${data.metabolicAge} yrs`, data.ideal.metabolicAge, data.status.metabolicAge],
  ];
  y = ensureSpace(doc, y, 15 + Math.ceil(miRows.length / 2) * (ROW_H + ROW_GAP), pw, ph, mx);
  y = sectionHeader(doc, mx, y, "Metabolic Indicators", data.metabolicScore, pw);
  y = renderGrid(doc, miRows, y, mx, rw);
  y += 7;

  // ── WEIGHT ANALYSIS ──────────────────────────────────────────────
  const bmiScore = data.bmi >= 18.5 && data.bmi <= 24.9 ? 90 : data.bmi < 18.5 ? 40 : 50;
  const waRows   = [
    ["BMI",             `${data.bmi}`,
      "18.5 – 24.9",    data.status.bmi],
    ["Standard Weight", `${data.standardWeight} kg`,
      "—",              "Normal"],
    ["Weight Control",
      `${data.weightControl > 0 ? "+" : ""}${data.weightControl} kg`,
      "0 kg",
      data.weightControl === 0 ? "Normal" : data.weightControl > 0 ? "High" : "Low"],
  ];
  y = ensureSpace(doc, y, 15 + Math.ceil(waRows.length / 2) * (ROW_H + ROW_GAP), pw, ph, mx);
  y = sectionHeader(doc, mx, y, "Weight Analysis", bmiScore, pw);
  y = renderGrid(doc, waRows, y, mx, rw);

  // ── Footer on every page ─────────────────────────────────────────
  const totalPages = doc.internal.getNumberOfPages();
  for (let p = 1; p <= totalPages; p++) {
    doc.setPage(p);
    drawFooter(doc, pw, ph, mx);
  }

  // ── Save ─────────────────────────────────────────────────────────
  doc.save(
    `Wellbeing_Report_${data.name.replace(/\s+/g, "_")}_${data.reportDate.replace(/\s/g, "_")}.pdf`
  );
};