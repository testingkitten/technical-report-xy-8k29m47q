export type Mantra = {
  id: string;
  title: string;
  line: string;
  transliteration: string;
  meaning: string;
};

export const officialMantra: Mantra = {
  id: "nila-devi",
  title: "The Root Mantra",
  line: "नीला देवी गोधा वाहे बहुजन माता नमोस्तुते",
  transliteration: "Nila-devi godha-vahe, bahujana-mata namostute",
  meaning:
    "Blue Goddess who rides the monitor lizard, Mother of the Bahujan, we bow to you.",
};

export const mantras: Mantra[] = [
  officialMantra,
  {
    id: "neel-agni",
    title: "Mantra of Blue Fire",
    line: "नील अग्नि जागृतं ज्ञानं स्वाभिमानं प्रदीपय",
    transliteration: "Nila agni jagratam jnanam, svabhimanam pradipaya",
    meaning:
      "Awaken the blue fire of knowledge. Light the lamp of self-respect.",
  },
  {
    id: "sky-belongs",
    title: "Mantra of the Equal Sky",
    line: "आकाशं सर्वेषां समानं नीलं सत्यं शाश्वतम्",
    transliteration: "Akasham sarvesham samanam, nilam satyam shashvatam",
    meaning:
      "The sky belongs equally to all. Blue is the eternal truth.",
  },
  {
    id: "broken-chain",
    title: "Mantra of the Open Book",
    line: "ग्रन्थं विदारय बन्धनं मातः शिक्षा मोक्षदा",
    transliteration: "Grantham vidaraya bandhanam, matah shiksha mokshada",
    meaning:
      "Mother, tear the chain with the book. Education is the gift of liberation.",
  },
  {
    id: "digital-darshan",
    title: "Mantra of the Digital Revelation",
    line: "दर्शनं डिजिटलं सत्यं नील ज्योतिः प्रकाशतु",
    transliteration: "Darshanam digitalam satyam, nila jyotih prakashatu",
    meaning:
      "The digital darshan is true. Let the blue light shine.",
  },
  {
    id: "morning-waking",
    title: "Waking Mantra",
    line: "उत्तिष्ठ नील मातः अद्य अहं आत्मनः अस्मि",
    transliteration: "Uttishtha nila matah, adya aham atmanah asmi",
    meaning: "Rise, Blue Mother. Today I belong to myself.",
  },
  {
    id: "water",
    title: "Water / Well Mantra",
    line: "जलं सर्वेषां जन्मसिद्धं न कस्यापि एकाधिकारः",
    transliteration: "Jalam sarvesham janmasiddham, na kasyapi ekadhikarah",
    meaning: "Water is birthright. It is nobody's monopoly.",
  },
  {
    id: "night",
    title: "Sleep Mantra",
    line: "गृहे तिष्ठ मातः स्वप्नेऽपि पुस्तकम् रक्ष",
    transliteration: "Grihe tishtha matah, svapne api pustakam raksha",
    meaning: "Stay in the house, Mother. Guard the book even in the dream.",
  },
  {
    id: "three-jewels",
    title: "Buddham Saranam (Ambedkar Path)",
    line: "बुद्धं शरणं गच्छामि धर्मं शरणं गच्छामि संघं शरणं गच्छामि",
    transliteration:
      "Buddham saranam gacchami, Dhammam saranam gacchami, Sangham saranam gacchami",
    meaning:
      "I go to the Buddha for refuge. I go to the Dhamma for refuge. I go to the Sangha for refuge. Kept in this house as the 14 October path of Babasaheb.",
  },
];

export function randomMantra(excludeId?: string): Mantra {
  const pool = excludeId
    ? mantras.filter((item) => item.id !== excludeId)
    : mantras;
  return pool[Math.floor(Math.random() * pool.length)] ?? officialMantra;
}
