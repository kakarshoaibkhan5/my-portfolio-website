export type CategoryId =
  | "mechanics"
  | "electromagnetism"
  | "modern"
  | "quantum";

export type DiagramKind =
  | "gravity"
  | "photoelectric"
  | "schrodinger"
  | "higgs"
  | "newton"
  | "circuit"
  | "faraday"
  | "uncertainty";

export type Lesson = {
  id: string;
  chip: string;
  category: CategoryId;
  titleUrdu: string;
  titleEnglish: string;
  answerUrdu: string;
  answerEnglish: string;
  formula: string;
  formulaNote: string;
  example: string;
  diagram: DiagramKind;
};

export const categories: {
  id: CategoryId;
  name: string;
  urdu: string;
  blurb: string;
}[] = [
  {
    id: "mechanics",
    name: "Mechanics",
    urdu: "نیوٹن کے قوانین، گریویٹی",
    blurb: "Motion, forces & gravity",
  },
  {
    id: "electromagnetism",
    name: "Electromagnetism",
    urdu: "کرنٹ، وولٹیج، مقناطیسیت",
    blurb: "Current, voltage & magnetism",
  },
  {
    id: "modern",
    name: "Modern Physics",
    urdu: "ایٹم، فوٹو الیکٹرک",
    blurb: "Atoms & the quantum leap",
  },
  {
    id: "quantum",
    name: "Quantum",
    urdu: "کوانٹم کی دنیا",
    blurb: "Waves, probability & uncertainty",
  },
];

export const lessons: Lesson[] = [
  {
    id: "gravity",
    chip: "Gravity kya hai?",
    category: "mechanics",
    titleUrdu: "گریویٹی کیا ہے؟",
    titleEnglish: "What is Gravity?",
    answerUrdu:
      "گریویٹی وہ قدرتی قوت ہے جو دو چیزوں کو ایک دوسرے کی طرف کھینچتی ہے۔ ہر چیز جس میں ماس ہو، دوسری چیز کو اپنی طرف کھینچتی ہے۔ زمین ہمیں اسی قوت سے اپنی طرف کھینچتی ہے، اسی لیے ہم نیچے گرتے ہیں۔",
    answerEnglish:
      "Gravity is the attractive force between any two objects that have mass. The bigger the mass and the smaller the distance, the stronger the pull.",
    formula: "F = G · m₁m₂ / r²",
    formulaNote: "G = 6.674 × 10⁻¹¹ N·m²/kg²",
    example:
      "سیب کا درخت سے گرنا، چاند کا زمین کے گرد گھومنا، اور ہمارا زمین پر ٹکے رہنا — سب گریویٹی ہے۔",
    diagram: "gravity",
  },
  {
    id: "newton-second",
    chip: "Newton ka second law samjhao",
    category: "mechanics",
    titleUrdu: "نیوٹن کا دوسرا قانون",
    titleEnglish: "Newton's Second Law",
    answerUrdu:
      "کسی چیز پر لگائی گئی قوت اس کی رفتار کو بدلتی ہے۔ جتنی زیادہ قوت لگائیں، اتنی ہی زیادہ تیز رفتاری ملے گی؛ اور جتنا زیادہ ماس ہو، اتنی ہی کم تیز رفتاری ہوگی۔",
    answerEnglish:
      "The net force on an object equals its mass times acceleration. Force and acceleration always point in the same direction.",
    formula: "F = m · a",
    formulaNote: "F in newtons · m in kg · a in m/s²",
    example:
      "ایک بھاری ٹرک کو دھکا دینا کار کو دھکا دینے سے مشکل ہے، کیونکہ ٹرک کا ماس زیادہ ہے۔",
    diagram: "newton",
  },
  {
    id: "photoelectric",
    chip: "Photoelectric effect samjhao",
    category: "modern",
    titleUrdu: "فوٹو الیکٹرک اثر",
    titleEnglish: "The Photoelectric Effect",
    answerUrdu:
      "جب روشنی کسی دھات پر پڑتی ہے تو دھات سے الیکٹرون باہر نکل آتے ہیں۔ لیکن یہ صرف اس وقت ہوتا ہے جب روشنی کے ہر ذرے (فوٹون) میں کافی توانائی ہو۔ روشنی کی شدت بڑھانے سے صرف زیادہ الیکٹرون نکلتے ہیں، ان کی رفتار نہیں بڑھتی۔",
    answerEnglish:
      "When light of a high enough frequency hits a metal, electrons are emitted. Each photon must carry enough energy to overcome the metal's work function.",
    formula: "Kmax = hf − φ",
    formulaNote: "h = Planck's constant · f = frequency · φ = work function",
    example:
      "سولر پینل اسی اثر سے سورج کی روشنی کو بجلی میں بدلتا ہے۔",
    diagram: "photoelectric",
  },
  {
    id: "higgs",
    chip: "What is Higgs Boson?",
    category: "modern",
    titleUrdu: "ہگز بوسون کیا ہے؟",
    titleEnglish: "What is the Higgs Boson?",
    answerUrdu:
      "ہگز فیلڈ پوری کائنات میں پھیلا ہوا ایک پوشیدہ میدان ہے۔ جب ذرات اس میدان سے گزرتے ہیں تو وہ اس سے ماس حاصل کرتے ہیں۔ ہگز بوسون اس فیلڈ کا ایک چھوٹا سا کمپن ہے — جیسے پانی کی سطح پر لہر۔",
    answerEnglish:
      "The Higgs field fills space and gives mass to fundamental particles. The Higgs boson is the particle associated with ripples in that field.",
    formula: "m = g · v / √2",
    formulaNote: "v ≈ 246 GeV · g = coupling strength",
    example:
      "سوچیں کہ ہگز فیلڈ ایک پانی کا تالاب ہے اور ذرات اس میں تیرتے ہیں — جو زیادہ ٹکرائے، اسے زیادہ ماس ملتا ہے۔",
    diagram: "higgs",
  },
  {
    id: "schrodinger",
    chip: "Schrödinger equation simple mein",
    category: "quantum",
    titleUrdu: "شروڈنگر مساوات - آسان انداز میں",
    titleEnglish: "The Schrödinger Equation, Simplified",
    answerUrdu:
      "یہ مساوات کوانٹم دنیا کی کہانی ہے۔ یہ بتاتی ہے کہ الیکٹرون جیسی چھوٹی چیز کی حالت (wave function) وقت کے ساتھ کیسے بدلتی ہے۔ اس سے ہمیں یہ نہیں ملتا کہ الیکٹرون کہاں ہے، بلکہ یہ ملتا ہے کہ اس کے کہیں ہونے کا امکان کتنا ہے۔",
    answerEnglish:
      "The Schrödinger equation describes how a quantum wave function evolves over time. The square of the wave function gives the probability of finding the particle in a region.",
    formula: "iħ ∂ψ/∂t = Ĥψ",
    formulaNote: "ψ = wave function · Ĥ = Hamiltonian · ħ = reduced Planck constant",
    example:
      "ہائیڈروجن ایٹم میں الیکٹرون کے orbitals اسی مساوات سے نکلتے ہیں — یہی کیمسٹری کی بنیاد ہے۔",
    diagram: "schrodinger",
  },
  {
    id: "uncertainty",
    chip: "Uncertainty principle samjhao",
    category: "quantum",
    titleUrdu: "غیریقینی کا اصول",
    titleEnglish: "Heisenberg's Uncertainty Principle",
    answerUrdu:
      "کوانٹم دنیا میں آپ کسی ذرے کی پوزیشن اور رفتار دونوں کو ایک ساتھ بالکل درست نہیں جان سکتے۔ جتنا درست پوزیشن جانیں، اتنا ہی رفتار کے بارے میں شک بڑھتا ہے۔ یہ پیمائش کی بنیادی حد ہے، آلات کی خرابی نہیں۔",
    answerEnglish:
      "Position and momentum cannot both be known with arbitrary precision. The product of their uncertainties is at least ħ/2.",
    formula: "Δx · Δp ≥ ħ/2",
    formulaNote: "Δx = position uncertainty · Δp = momentum uncertainty",
    example:
      "الیکٹرون کو کسی چھوٹے باکس میں بند کریں تو اس کی رفتار زیادہ غیر یقینی ہو جاتی ہے — یہیں سے کوانٹم کی عجیب دنیا شروع ہوتی ہے۔",
    diagram: "uncertainty",
  },
  {
    id: "current-voltage",
    chip: "Current aur voltage kya hai?",
    category: "electromagnetism",
    titleUrdu: "کرنٹ اور وولٹیج",
    titleEnglish: "Current & Voltage",
    answerUrdu:
      "وولٹیج ایک دباؤ ہے جو چارجز کو حرکت دیتا ہے، اور کرنٹ یہ ہے کہ فی سیکنڈ کتنا چارج بہہ رہا ہے۔ پانی کی مثال لیں: وولٹیج پانی کا دباؤ ہے اور کرنٹ پائپ میں بہنے والا پانی۔",
    answerEnglish:
      "Voltage is the potential difference that pushes charges; current is the rate of charge flow. Resistance limits that flow.",
    formula: "V = I · R",
    formulaNote: "V in volts · I in amperes · R in ohms",
    example:
      "موبائل چارجر 5V دیتا ہے، اور چارجنگ کے وقت تقریباً 2A کرنٹ بہتا ہے۔",
    diagram: "circuit",
  },
  {
    id: "faraday",
    chip: "Faraday law kya hai?",
    category: "electromagnetism",
    titleUrdu: "فیراڈے کا قانون",
    titleEnglish: "Faraday's Law of Induction",
    answerUrdu:
      "جب کسی کوائل کے اندر مقناطیسی میدان بدلتا ہے تو کوائل میں وولٹیج پیدا ہوتی ہے۔ یہی وجہ ہے کہ جنریٹر میں کوائل اور مقناطیس گھما کر بجلی بنائی جاتی ہے۔",
    answerEnglish:
      "A changing magnetic flux through a coil induces an electromotive force (EMF). This is electromagnetic induction.",
    formula: "ε = − dΦB/dt",
    formulaNote: "ε = induced EMF · ΦB = magnetic flux",
    example:
      "سائیکل کی ڈائنامو، پنکھے کی موٹر اور پن بجلی کے جنریٹر — سب اسی اصول پر چلتے ہیں۔",
    diagram: "faraday",
  },
];

export const heroQuestions = [
  "Gravity kya hai?",
  "Photoelectric effect samjhao",
  "Schrödinger equation simple mein",
  "What is Higgs Boson?",
];

/** Small keyword matcher used by the demo tutor. Replace with a Gemini API call. */
export function findLesson(input: string): Lesson | undefined {
  const text = input.toLowerCase();

  const rules: { keys: string[]; id: string }[] = [
    { keys: ["gravity", "gravitation", "گریویٹی"], id: "gravity" },
    { keys: ["newton", "second law", "f=ma", "force"], id: "newton-second" },
    {
      keys: ["photoelectric", "photon", "photo electric", "فوٹو"],
      id: "photoelectric",
    },
    { keys: ["higgs", "boson", "ہگز"], id: "higgs" },
    {
      keys: ["schrodinger", "schrödinger", "wave function", "wavefunction"],
      id: "schrodinger",
    },
    {
      keys: ["uncertainty", "heisenberg", "غیریقینی"],
      id: "uncertainty",
    },
    {
      keys: ["current", "voltage", "ohm", "resistance", "کرنٹ", "وولٹیج"],
      id: "current-voltage",
    },
    { keys: ["faraday", "induction", "emf", "فیراڈے"], id: "faraday" },
  ];

  const match = rules.find((rule) =>
    rule.keys.some((key) => text.includes(key)),
  );

  return match ? lessons.find((lesson) => lesson.id === match.id) : undefined;
}
