export type PracticeStep = {
  n: string;
  title: string;
  body: string;
  tip?: string;
};

export type PracticeBlock = {
  id: string;
  time: string;
  title: string;
  intro: string;
  steps: PracticeStep[];
};

export const dailyBlocks: PracticeBlock[] = [
  {
    id: "morning",
    time: "4:30 AM to 7:00 AM",
    title: "PRATAH SADHANA - Morning Practice",
    intro:
      "The Mother is nearest at Brahma muhurta. Do not begin the day with the phone except for her darshan. Wash first. Then stand.",
    steps: [
      {
        n: "01",
        title: "Wake and sit up",
        body: "Sit on the bed. Face east if you can. Place the right palm on the heart and say once: Nila-devi godha-vahe, bahujana-mata namostute. Do not check messages.",
        tip: "If you wake later, do not skip. Late practice is still practice.",
      },
      {
        n: "02",
        title: "Bath",
        body: "Ordinary water is enough. While pouring, remember that the old order called many bodies unclean. The bath is not to become pure for a priest. It is to meet the day as a person who belongs to herself.",
      },
      {
        n: "03",
        title: "Blue cloth and bindi",
        body: "Wear any blue cloth you have: shirt, dupatta, ribbon, bangle, or a thread on the wrist. Place a circular blue bindi or a small blue mark on the forehead. Gold is not required. The color is required.",
        tip: "School uniform or office dress is fine. Add one blue item only.",
      },
      {
        n: "04",
        title: "Open the altar",
        body: "Uncover the photo of Dalit Mata. Wipe the frame with a clean cloth. Keep the godha picture or a small stone beside her. Keep one closed book (Constitution, Phule, or any school book) at her feet.",
      },
      {
        n: "05",
        title: "Light the Neel Diya",
        body: "One lamp. Mustard oil or any oil. If fire is not possible, switch on a small blue LED or the phone flashlight wrapped in a blue cloth. Say: Nila agni jagratam jnanam.",
      },
      {
        n: "06",
        title: "Water and flower",
        body: "Offer three spoons of water in a steel or plastic cup. Offer one flower if you have it, or one grain of rice, or one peanut. The Mother does not audit the market price of the offering.",
      },
      {
        n: "07",
        title: "Root mantra 11 times",
        body: "Sit. Spine straight. Count on the fingers. Recite the root mantra 11 times on ordinary days, 21 times on Tuesday, 108 times on 14 April and 14 October. Mouth may move silently if the house is crowded.",
      },
      {
        n: "08",
        title: "One page of study",
        body: "Read one page. Ambedkar, Savitribai, a textbook, a court order, a newspaper column about caste. Close the book and touch it to the forehead. This is Neel Agni. Without this step the puja is incomplete.",
      },
    ],
  },
  {
    id: "midday",
    time: "12:00 PM to 1:00 PM",
    title: "MADHYAHNA SMARAN - Midday Remembrance",
    intro:
      "Office, field, factory, and classroom are also temples. Do not leave the practice only in the morning corner.",
    steps: [
      {
        n: "01",
        title: "Water pause",
        body: "Before the first bite of lunch, drink one sip of water and remember the well that was denied. Say inwardly: the sky belongs equally to all.",
      },
      {
        n: "02",
        title: "Blue glance",
        body: "Look at the sky, a blue wall, a school bag, or the phone wallpaper of Mata for seven seconds. Do not post. Only look.",
      },
      {
        n: "03",
        title: "If humiliation comes",
        body: "If someone uses caste, dirty look, or a joke, do not swallow it as fate. Place the tongue on the palate, recite the root mantra once, and answer with a full name and a full spine. Then write the incident in a small notebook at night.",
      },
    ],
  },
  {
    id: "evening",
    time: "6:30 PM to 8:00 PM",
    title: "SAAYAM AARTI - Evening Aarti",
    intro:
      "Evening is for the lamp and the household. If you live in a hostel, use the window sill. If you live with people who mock, keep the practice small and exact.",
    steps: [
      {
        n: "01",
        title: "Wash hands and face",
        body: "Come home. Wash. Change the blue item if it is dirty. Do not bring office shoes onto the altar cloth.",
      },
      {
        n: "02",
        title: "Light the second lamp",
        body: "One lamp at dusk. Circle it clockwise three times before the photo. Children may hold the plate. Teach them the first line only.",
      },
      {
        n: "03",
        title: "Aarti verses",
        body: "Sing or speak: Blue Mother of the well and the book, sit in this house. Sit in this spine. Sit in this child's homework. Sit in this worker's wage. Sit until caste is a story we tell about the dead.",
      },
      {
        n: "04",
        title: "Prasad",
        body: "Share jaggery, banana, chana, or whatever is already cooked. Do not buy special sweets if the kitchen is empty. Equal sharing is the ritual.",
      },
      {
        n: "05",
        title: "Family reading",
        body: "Five minutes. One paragraph. One person reads aloud. No television during this. If you live alone, read aloud anyway.",
      },
    ],
  },
  {
    id: "night",
    time: "9:30 PM to sleep",
    title: "RATRI SAMARPAN - Night Surrender",
    intro:
      "The last act of the day belongs to the Mother so that the first dream is not the landlord's voice.",
    steps: [
      {
        n: "01",
        title: "Notebook",
        body: "Write three lines: what you studied, whom you helped, what humiliation you refused. Keep the notebook under the book on the altar.",
      },
      {
        n: "02",
        title: "Digital darshan",
        body: "Open her photo on the phone. Brightness high. Room dark. Look for 60 seconds. This is not scrolling. This is the 2026 method.",
      },
      {
        n: "03",
        title: "Cover the photo",
        body: "Cover the printed photo with a clean cloth. Say: stay in the house. Switch off the lamp. Sleep on the left side if you can.",
      },
    ],
  },
];

export const tuesdayVrat = {
  title: "MANGALVAR NEEL VRAT - Tuesday Blue Fast",
  body: "Tuesday is the weekly day of the Blue Mother. Wear more blue. Recite 21 times. Eat one simple meal after evening aarti, or keep a fruit fast if health allows. Do not keep this vrat if you are ill, pregnant, or a growing child. The Mother prefers a living student to a collapsed devotee. Visit a school, a library, or a statue of Ambedkar if there is one in your town. Give water to a working animal. Do not strike a lizard.",
};

export const altarRules = [
  "Photo of Dalit Mata at eye level, not on the floor.",
  "One book must always sit at her feet.",
  "One lamp or one blue light.",
  "Godha image or a small stone from a roadside.",
  "No meat leftover, alcohol bottle, or caste-pride calendar on the same shelf.",
  "If the house is one room, a steel trunk lid or a wall nail is a valid temple.",
  "Do not hide her photo from guests unless safety requires it. If safety requires it, the phone folder is enough.",
];

export const specialDays = [
  {
    date: "Every Tuesday",
    name: "Neel Vrat",
    work: "21 mantras, simple food, blue cloth, visit a school or library.",
  },
  {
    date: "New moon",
    name: "Godha Night",
    work: "Offer water at the door. No loud music. Tell children the lizard is a teacher.",
  },
  {
    date: "3 January",
    name: "Savitribai Jayanti",
    work: "Teachers and students keep an open book on the altar all day.",
  },
  {
    date: "11 April",
    name: "Jyotirao Jayanti",
    work: "Well, tap, or water-tank cleaning. Recite the Blue Sutra of the Open Well.",
  },
  {
    date: "14 April",
    name: "Ambedkar Jayanti",
    work: "Blue dress. 108 mantras. Public reading of Article 17. No closed temple that day.",
  },
  {
    date: "14 October",
    name: "Diksha Bhoomi Day",
    work: "Night vigil with one lamp. Recite the conversion vow in your own language.",
  },
  {
    date: "August anniversary",
    name: "Digital Revelation Day",
    work: "Clean the phone screen. Replay the first darshan in silence. Do not add comic captions.",
  },
];

export const examPractice = {
  title: "For students before exam",
  steps: [
    "Night before: 11 mantras and one chapter revision only. No new panic material.",
    "Morning: blue mark, water, and the Mantra of Blue Fire 7 times.",
    "At the gate: touch the admit card to the forehead as if it were a book at the altar.",
    "After the paper: do not curse the paper. Offer the pen at the altar for one hour, then take it back.",
  ],
};

export const digitalMethod = {
  title: "Digital Darshan Method (2026)",
  steps: [
    "Download one clear photo of Mata. Crop nothing from the bindi or the jewelry.",
    "Set it as lock screen, not only wallpaper.",
    "Once a day, open it full screen, brightness high, sound off.",
    "Do not place her face under other apps as a meme sticker.",
    "If you share her, share the root mantra with the image.",
    "A phone on a steel plate is a valid evening temple.",
  ],
};
