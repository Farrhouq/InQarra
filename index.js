// https://raw.githubusercontent.com/GovarJabbar/Quran-PNG/master/157.png - for image
// https://api.quran.com/api/v4/recitations/2/by_ayah/1:1 -  is the audio request
// https://verses.quran.com/{url gotten from the audio request} - to get the actual source

// https://api.quran.com/api/v4//quran/verses/uthmani?verse_key=1:1 (for the verse text).

/**
- added a new feature
major challenge: failed to recognize that the value of the options of the sura select fields were in numbers (the chapter ids)
*/

const suraData = {
  2: {
    1: { start: 1, end: 76 },
    2: { start: 77, end: 141 },
    3: { start: 142, end: 202 },
    4: { start: 203, end: 252 },
    5: { start: 253, end: 286 },
  },
};

const chaptersInfo = [
  {
    chapter_id: 1,
    name_complex: "Al-Fātiĥah",
    name_arabic: "الفاتحة",
    start_page: 1,
    end_page: 1,
    verses_count: 7,
  },
  {
    chapter_id: 2,
    name_complex: "Al-Baqarah",
    name_arabic: "البقرة",
    start_page: 2,
    end_page: 49,
    verses_count: 286,
  },
  {
    chapter_id: 3,
    name_complex: "Āli `Imrān",
    name_arabic: "آل عمران",
    start_page: 50,
    end_page: 76,
    verses_count: 200,
  },
  {
    chapter_id: 4,
    name_complex: "An-Nisā",
    name_arabic: "النساء",
    start_page: 77,
    end_page: 106,
    verses_count: 176,
  },
  {
    chapter_id: 5,
    name_complex: "Al-Mā'idah",
    name_arabic: "المائدة",
    start_page: 106,
    end_page: 127,
    verses_count: 120,
  },
  {
    chapter_id: 6,
    name_complex: "Al-'An`ām",
    name_arabic: "الأنعام",
    start_page: 128,
    end_page: 150,
    verses_count: 165,
  },
  {
    chapter_id: 7,
    name_complex: "Al-'A`rāf",
    name_arabic: "الأعراف",
    start_page: 151,
    end_page: 176,
    verses_count: 206,
  },
  {
    chapter_id: 8,
    name_complex: "Al-'Anfāl",
    name_arabic: "الأنفال",
    start_page: 177,
    end_page: 186,
    verses_count: 75,
  },
  {
    chapter_id: 9,
    name_complex: "At-Tawbah",
    name_arabic: "التوبة",
    start_page: 187,
    end_page: 207,
    verses_count: 129,
  },
  {
    chapter_id: 10,
    name_complex: "Yūnus",
    name_arabic: "يونس",
    start_page: 208,
    end_page: 221,
    verses_count: 109,
  },
  {
    chapter_id: 11,
    name_complex: "Hūd",
    name_arabic: "هود",
    start_page: 221,
    end_page: 235,
    verses_count: 123,
  },
  {
    chapter_id: 12,
    name_complex: "Yūsuf",
    name_arabic: "يوسف",
    start_page: 235,
    end_page: 248,
    verses_count: 111,
  },
  {
    chapter_id: 13,
    name_complex: "Ar-Ra`d",
    name_arabic: "الرعد",
    start_page: 249,
    end_page: 255,
    verses_count: 43,
  },
  {
    chapter_id: 14,
    name_complex: "Ibrāhīm",
    name_arabic: "ابراهيم",
    start_page: 255,
    end_page: 261,
    verses_count: 52,
  },
  {
    chapter_id: 15,
    name_complex: "Al-Ĥijr",
    name_arabic: "الحجر",
    start_page: 262,
    end_page: 267,
    verses_count: 99,
  },
  {
    chapter_id: 16,
    name_complex: "An-Naĥl",
    name_arabic: "النحل",
    start_page: 267,
    end_page: 281,
    verses_count: 128,
  },
  {
    chapter_id: 17,
    name_complex: "Al-'Isrā",
    name_arabic: "الإسراء",
    start_page: 282,
    end_page: 293,
    verses_count: 111,
  },
  {
    chapter_id: 18,
    name_complex: "Al-Kahf",
    name_arabic: "الكهف",
    start_page: 293,
    end_page: 304,
    verses_count: 110,
  },
  {
    chapter_id: 19,
    name_complex: "Maryam",
    name_arabic: "مريم",
    start_page: 305,
    end_page: 312,
    verses_count: 98,
  },
  {
    chapter_id: 20,
    name_complex: "Ţāhā",
    name_arabic: "طه",
    start_page: 312,
    end_page: 321,
    verses_count: 135,
  },
  {
    chapter_id: 21,
    name_complex: "Al-'Anbyā",
    name_arabic: "الأنبياء",
    start_page: 322,
    end_page: 331,
    verses_count: 112,
  },
  {
    chapter_id: 22,
    name_complex: "Al-Ĥajj",
    name_arabic: "الحج",
    start_page: 332,
    end_page: 341,
    verses_count: 78,
  },
  {
    chapter_id: 23,
    name_complex: "Al-Mu'minūn",
    name_arabic: "المؤمنون",
    start_page: 342,
    end_page: 349,
    verses_count: 118,
  },
  {
    chapter_id: 24,
    name_complex: "An-Nūr",
    name_arabic: "النور",
    start_page: 350,
    end_page: 359,
    verses_count: 64,
  },
  {
    chapter_id: 25,
    name_complex: "Al-Furqān",
    name_arabic: "الفرقان",
    start_page: 359,
    end_page: 366,
    verses_count: 77,
  },
  {
    chapter_id: 26,
    name_complex: "Ash-Shu`arā",
    name_arabic: "الشعراء",
    start_page: 367,
    end_page: 376,
    verses_count: 227,
  },
  {
    chapter_id: 27,
    name_complex: "An-Naml",
    name_arabic: "النمل",
    start_page: 377,
    end_page: 385,
    verses_count: 93,
  },
  {
    chapter_id: 28,
    name_complex: "Al-Qaşaş",
    name_arabic: "القصص",
    start_page: 385,
    end_page: 396,
    verses_count: 88,
  },
  {
    chapter_id: 29,
    name_complex: "Al-`Ankabūt",
    name_arabic: "العنكبوت",
    start_page: 396,
    end_page: 404,
    verses_count: 69,
  },
  {
    chapter_id: 30,
    name_complex: "Ar-Rūm",
    name_arabic: "الروم",
    start_page: 404,
    end_page: 410,
    verses_count: 60,
  },
  {
    chapter_id: 31,
    name_complex: "Luqmān",
    name_arabic: "لقمان",
    start_page: 411,
    end_page: 414,
    verses_count: 34,
  },
  {
    chapter_id: 32,
    name_complex: "As-Sajdah",
    name_arabic: "السجدة",
    start_page: 415,
    end_page: 417,
    verses_count: 30,
  },
  {
    chapter_id: 33,
    name_complex: "Al-'Aĥzāb",
    name_arabic: "الأحزاب",
    start_page: 418,
    end_page: 427,
    verses_count: 73,
  },
  {
    chapter_id: 34,
    name_complex: "Saba",
    name_arabic: "سبإ",
    start_page: 428,
    end_page: 434,
    verses_count: 54,
  },
  {
    chapter_id: 35,
    name_complex: "Fāţir",
    name_arabic: "فاطر",
    start_page: 434,
    end_page: 440,
    verses_count: 45,
  },
  {
    chapter_id: 36,
    name_complex: "Yā-Sīn",
    name_arabic: "يس",
    start_page: 440,
    end_page: 445,
    verses_count: 83,
  },
  {
    chapter_id: 37,
    name_complex: "Aş-Şāffāt",
    name_arabic: "الصافات",
    start_page: 446,
    end_page: 452,
    verses_count: 182,
  },
  {
    chapter_id: 38,
    name_complex: "Şād",
    name_arabic: "ص",
    start_page: 453,
    end_page: 458,
    verses_count: 88,
  },
  {
    chapter_id: 39,
    name_complex: "Az-Zumar",
    name_arabic: "الزمر",
    start_page: 458,
    end_page: 467,
    verses_count: 75,
  },
  {
    chapter_id: 40,
    name_complex: "Ghāfir",
    name_arabic: "غافر",
    start_page: 467,
    end_page: 476,
    verses_count: 85,
  },
  {
    chapter_id: 41,
    name_complex: "Fuşşilat",
    name_arabic: "فصلت",
    start_page: 477,
    end_page: 482,
    verses_count: 54,
  },
  {
    chapter_id: 42,
    name_complex: "Ash-Shūraá",
    name_arabic: "الشورى",
    start_page: 483,
    end_page: 489,
    verses_count: 53,
  },
  {
    chapter_id: 43,
    name_complex: "Az-Zukhruf",
    name_arabic: "الزخرف",
    start_page: 489,
    end_page: 495,
    verses_count: 89,
  },
  {
    chapter_id: 44,
    name_complex: "Ad-Dukhān",
    name_arabic: "الدخان",
    start_page: 496,
    end_page: 498,
    verses_count: 59,
  },
  {
    chapter_id: 45,
    name_complex: "Al-Jāthiyah",
    name_arabic: "الجاثية",
    start_page: 499,
    end_page: 502,
    verses_count: 37,
  },
  {
    chapter_id: 46,
    name_complex: "Al-'Aĥqāf",
    name_arabic: "الأحقاف",
    start_page: 502,
    end_page: 506,
    verses_count: 35,
  },
  {
    chapter_id: 47,
    name_complex: "Muĥammad",
    name_arabic: "محمد",
    start_page: 507,
    end_page: 510,
    verses_count: 38,
  },
  {
    chapter_id: 48,
    name_complex: "Al-Fatĥ",
    name_arabic: "الفتح",
    start_page: 511,
    end_page: 515,
    verses_count: 29,
  },
  {
    chapter_id: 49,
    name_complex: "Al-Ĥujurāt",
    name_arabic: "الحجرات",
    start_page: 515,
    end_page: 517,
    verses_count: 18,
  },
  {
    chapter_id: 50,
    name_complex: "Qāf",
    name_arabic: "ق",
    start_page: 518,
    end_page: 520,
    verses_count: 45,
  },
  {
    chapter_id: 51,
    name_complex: "Adh-Dhāriyāt",
    name_arabic: "الذاريات",
    start_page: 520,
    end_page: 523,
    verses_count: 60,
  },
  {
    chapter_id: 52,
    name_complex: "Aţ-Ţūr",
    name_arabic: "الطور",
    start_page: 523,
    end_page: 525,
    verses_count: 49,
  },
  {
    chapter_id: 53,
    name_complex: "An-Najm",
    name_arabic: "النجم",
    start_page: 526,
    end_page: 528,
    verses_count: 62,
  },
  {
    chapter_id: 54,
    name_complex: "Al-Qamar",
    name_arabic: "القمر",
    start_page: 528,
    end_page: 531,
    verses_count: 55,
  },
  {
    chapter_id: 55,
    name_complex: "Ar-Raĥmān",
    name_arabic: "الرحمن",
    start_page: 531,
    end_page: 534,
    verses_count: 78,
  },
  {
    chapter_id: 56,
    name_complex: "Al-Wāqi`ah",
    name_arabic: "الواقعة",
    start_page: 534,
    end_page: 537,
    verses_count: 96,
  },
  {
    chapter_id: 57,
    name_complex: "Al-Ĥadīd",
    name_arabic: "الحديد",
    start_page: 537,
    end_page: 541,
    verses_count: 29,
  },
  {
    chapter_id: 58,
    name_complex: "Al-Mujādila",
    name_arabic: "المجادلة",
    start_page: 542,
    end_page: 545,
    verses_count: 22,
  },
  {
    chapter_id: 59,
    name_complex: "Al-Ĥashr",
    name_arabic: "الحشر",
    start_page: 545,
    end_page: 548,
    verses_count: 24,
  },
  {
    chapter_id: 60,
    name_complex: "Al-Mumtaĥanah",
    name_arabic: "الممتحنة",
    start_page: 549,
    end_page: 551,
    verses_count: 13,
  },
  {
    chapter_id: 61,
    name_complex: "Aş-Şaf",
    name_arabic: "الصف",
    start_page: 551,
    end_page: 552,
    verses_count: 14,
  },
  {
    chapter_id: 62,
    name_complex: "Al-Jumu`ah",
    name_arabic: "الجمعة",
    start_page: 553,
    end_page: 554,
    verses_count: 11,
  },
  {
    chapter_id: 63,
    name_complex: "Al-Munāfiqūn",
    name_arabic: "المنافقون",
    start_page: 554,
    end_page: 555,
    verses_count: 11,
  },
  {
    chapter_id: 64,
    name_complex: "At-Taghābun",
    name_arabic: "التغابن",
    start_page: 556,
    end_page: 557,
    verses_count: 18,
  },
  {
    chapter_id: 65,
    name_complex: "Aţ-Ţalāq",
    name_arabic: "الطلاق",
    start_page: 558,
    end_page: 559,
    verses_count: 12,
  },
  {
    chapter_id: 66,
    name_complex: "At-Taĥrīm",
    name_arabic: "التحريم",
    start_page: 560,
    end_page: 561,
    verses_count: 12,
  },
  {
    chapter_id: 67,
    name_complex: "Al-Mulk",
    name_arabic: "الملك",
    start_page: 562,
    end_page: 564,
    verses_count: 30,
  },
  {
    chapter_id: 68,
    name_complex: "Al-Qalam",
    name_arabic: "القلم",
    start_page: 564,
    end_page: 566,
    verses_count: 52,
  },
  {
    chapter_id: 69,
    name_complex: "Al-Ĥāqqah",
    name_arabic: "الحاقة",
    start_page: 566,
    end_page: 568,
    verses_count: 52,
  },
  {
    chapter_id: 70,
    name_complex: "Al-Ma`ārij",
    name_arabic: "المعارج",
    start_page: 568,
    end_page: 570,
    verses_count: 44,
  },
  {
    chapter_id: 71,
    name_complex: "Nūĥ",
    name_arabic: "نوح",
    start_page: 570,
    end_page: 571,
    verses_count: 28,
  },
  {
    chapter_id: 72,
    name_complex: "Al-Jinn",
    name_arabic: "الجن",
    start_page: 572,
    end_page: 573,
    verses_count: 28,
  },
  {
    chapter_id: 73,
    name_complex: "Al-Muzzammil",
    name_arabic: "المزمل",
    start_page: 574,
    end_page: 575,
    verses_count: 20,
  },
  {
    chapter_id: 74,
    name_complex: "Al-Muddaththir",
    name_arabic: "المدثر",
    start_page: 575,
    end_page: 577,
    verses_count: 56,
  },
  {
    chapter_id: 75,
    name_complex: "Al-Qiyāmah",
    name_arabic: "القيامة",
    start_page: 577,
    end_page: 578,
    verses_count: 40,
  },
  {
    chapter_id: 76,
    name_complex: "Al-'Insān",
    name_arabic: "الانسان",
    start_page: 578,
    end_page: 580,
    verses_count: 31,
  },
  {
    chapter_id: 77,
    name_complex: "Al-Mursalāt",
    name_arabic: "المرسلات",
    start_page: 580,
    end_page: 581,
    verses_count: 50,
  },
  {
    chapter_id: 78,
    name_complex: "An-Naba",
    name_arabic: "النبإ",
    start_page: 582,
    end_page: 583,
    verses_count: 40,
  },
  {
    chapter_id: 79,
    name_complex: "An-Nāzi`āt",
    name_arabic: "النازعات",
    start_page: 583,
    end_page: 584,
    verses_count: 46,
  },
  {
    chapter_id: 80,
    name_complex: "`Abasa",
    name_arabic: "عبس",
    start_page: 585,
    end_page: 585,
    verses_count: 42,
  },
  {
    chapter_id: 81,
    name_complex: "At-Takwīr",
    name_arabic: "التكوير",
    start_page: 586,
    end_page: 586,
    verses_count: 29,
  },
  {
    chapter_id: 82,
    name_complex: "Al-'Infiţār",
    name_arabic: "الإنفطار",
    start_page: 587,
    end_page: 587,
    verses_count: 19,
  },
  {
    chapter_id: 83,
    name_complex: "Al-Muţaffifīn",
    name_arabic: "المطففين",
    start_page: 587,
    end_page: 589,
    verses_count: 36,
  },
  {
    chapter_id: 84,
    name_complex: "Al-'Inshiqāq",
    name_arabic: "الإنشقاق",
    start_page: 589,
    end_page: 589,
    verses_count: 25,
  },
  {
    chapter_id: 85,
    name_complex: "Al-Burūj",
    name_arabic: "البروج",
    start_page: 590,
    end_page: 590,
    verses_count: 22,
  },
  {
    chapter_id: 86,
    name_complex: "Aţ-Ţāriq",
    name_arabic: "الطارق",
    start_page: 591,
    end_page: 591,
    verses_count: 17,
  },
  {
    chapter_id: 87,
    name_complex: "Al-'A`lá",
    name_arabic: "الأعلى",
    start_page: 591,
    end_page: 592,
    verses_count: 19,
  },
  {
    chapter_id: 88,
    name_complex: "Al-Ghāshiyah",
    name_arabic: "الغاشية",
    start_page: 592,
    end_page: 592,
    verses_count: 26,
  },
  {
    chapter_id: 89,
    name_complex: "Al-Fajr",
    name_arabic: "الفجر",
    start_page: 593,
    end_page: 594,
    verses_count: 30,
  },
  {
    chapter_id: 90,
    name_complex: "Al-Balad",
    name_arabic: "البلد",
    start_page: 594,
    end_page: 594,
    verses_count: 20,
  },
  {
    chapter_id: 91,
    name_complex: "Ash-Shams",
    name_arabic: "الشمس",
    start_page: 595,
    end_page: 595,
    verses_count: 15,
  },
  {
    chapter_id: 92,
    name_complex: "Al-Layl",
    name_arabic: "الليل",
    start_page: 595,
    end_page: 596,
    verses_count: 21,
  },
  {
    chapter_id: 93,
    name_complex: "Ađ-Đuĥaá",
    name_arabic: "الضحى",
    start_page: 596,
    end_page: 596,
    verses_count: 11,
  },
  {
    chapter_id: 94,
    name_complex: "Ash-Sharĥ",
    name_arabic: "الشرح",
    start_page: 596,
    end_page: 596,
    verses_count: 8,
  },
  {
    chapter_id: 95,
    name_complex: "At-Tīn",
    name_arabic: "التين",
    start_page: 597,
    end_page: 597,
    verses_count: 8,
  },
  {
    chapter_id: 96,
    name_complex: "Al-`Alaq",
    name_arabic: "العلق",
    start_page: 597,
    end_page: 597,
    verses_count: 19,
  },
  {
    chapter_id: 97,
    name_complex: "Al-Qadr",
    name_arabic: "القدر",
    start_page: 598,
    end_page: 598,
    verses_count: 5,
  },
  {
    chapter_id: 98,
    name_complex: "Al-Bayyinah",
    name_arabic: "البينة",
    start_page: 598,
    end_page: 599,
    verses_count: 8,
  },
  {
    chapter_id: 99,
    name_complex: "Az-Zalzalah",
    name_arabic: "الزلزلة",
    start_page: 599,
    end_page: 599,
    verses_count: 8,
  },
  {
    chapter_id: 100,
    name_complex: "Al-`Ādiyāt",
    name_arabic: "العاديات",
    start_page: 599,
    end_page: 600,
    verses_count: 11,
  },
  {
    chapter_id: 101,
    name_complex: "Al-Qāri`ah",
    name_arabic: "القارعة",
    start_page: 600,
    end_page: 600,
    verses_count: 11,
  },
  {
    chapter_id: 102,
    name_complex: "At-Takāthur",
    name_arabic: "التكاثر",
    start_page: 600,
    end_page: 600,
    verses_count: 8,
  },
  {
    chapter_id: 103,
    name_complex: "Al-`Aşr",
    name_arabic: "العصر",
    start_page: 601,
    end_page: 601,
    verses_count: 3,
  },
  {
    chapter_id: 104,
    name_complex: "Al-Humazah",
    name_arabic: "الهمزة",
    start_page: 601,
    end_page: 601,
    verses_count: 9,
  },
  {
    chapter_id: 105,
    name_complex: "Al-Fīl",
    name_arabic: "الفيل",
    start_page: 601,
    end_page: 601,
    verses_count: 5,
  },
  {
    chapter_id: 106,
    name_complex: "Quraysh",
    name_arabic: "قريش",
    start_page: 602,
    end_page: 602,
    verses_count: 4,
  },
  {
    chapter_id: 107,
    name_complex: "Al-Mā`ūn",
    name_arabic: "الماعون",
    start_page: 602,
    end_page: 602,
    verses_count: 7,
  },
  {
    chapter_id: 108,
    name_complex: "Al-Kawthar",
    name_arabic: "الكوثر",
    start_page: 602,
    end_page: 602,
    verses_count: 3,
  },
  {
    chapter_id: 109,
    name_complex: "Al-Kāfirūn",
    name_arabic: "الكافرون",
    start_page: 603,
    end_page: 603,
    verses_count: 6,
  },
  {
    chapter_id: 110,
    name_complex: "An-Naşr",
    name_arabic: "النصر",
    start_page: 603,
    end_page: 603,
    verses_count: 3,
  },
  {
    chapter_id: 111,
    name_complex: "Al-Masad",
    name_arabic: "المسد",
    start_page: 603,
    end_page: 603,
    verses_count: 5,
  },
  {
    chapter_id: 112,
    name_complex: "Al-'Ikhlāş",
    name_arabic: "الإخلاص",
    start_page: 604,
    end_page: 604,
    verses_count: 4,
  },
  {
    chapter_id: 113,
    name_complex: "Al-Falaq",
    name_arabic: "الفلق",
    start_page: 604,
    end_page: 604,
    verses_count: 5,
  },
  {
    chapter_id: 114,
    name_complex: "An-Nās",
    name_arabic: "الناس",
    start_page: 604,
    end_page: 604,
    verses_count: 6,
  },
];

const startSura = document.querySelector("#start-sura");
const endSura = document.querySelector("#end-sura");
const nextBtn = document.querySelector("#next");
const startVerse = document.querySelector("#start-verse");
const endVerse = document.querySelector("#end-verse");
const page = document.querySelector("#page");
const nextPage = document.querySelector("#next-page");
const prevPage = document.querySelector("#prev-page");
const pageNumber = document.querySelector("#page-number");
const text = document.querySelector("#text");
const audioEl = document.querySelector("#audio");
var play = document.querySelector("#play");

var ayahText;
var mode = "text";
let audio;

audioEl.addEventListener("click", () => {
  mode = "audio";
  if (!audioEl.classList.contains("selected"))
    text.classList.remove("selected");
  audioEl.classList.add("selected");
});

text.addEventListener("click", () => {
  mode = "text";
  if (!text.classList.contains("selected")) {
    audioEl.classList.remove("selected");
    text.classList.add("selected");
  }
});

for (let sura of chaptersInfo) {
  startSura.innerHTML += `<option value="${sura.chapter_id}">${sura.name_complex}</option>`;
  endSura.innerHTML += `<option value="${sura.chapter_id}">${sura.name_complex}</option>`;
}
endSura.value = 114;

const questionTextDiv = document.querySelector("#question-text");

function getRandomAyah(startSura, endSura, startVerse, endVerse) {
  let minRange = endSura <= startSura ? endSura : startSura;
  let maxRange = startSura <= endSura ? endSura : startSura;
  let randomSuraNumber =
    Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
  let suraDict = chaptersInfo.find(
    (sura) => sura.chapter_id == randomSuraNumber,
  );
  let randomAyahNumber = Math.ceil(Math.random() * suraDict.verses_count);

  //   check first if it's start or end
  //   thensura
  // -------------------
  // get verse, depending on the surah
  // there are four cases to consider
  // if the same surah is selected for the beginning and end of the range, then
  //   the verse to be selected should be within startVerse and endVerse
  if (randomSuraNumber === startSura && randomSuraNumber == endSura) {
    randomAyahNumber =
      Math.floor(Math.random() * (endVerse - startVerse + 1)) + startVerse;
    // console.log(0);
  }

  // if the selected surah is the first surah in the selected range, then
  //   the verse to be selected should be within startVerse and last verse of the surah
  else if (randomSuraNumber === startSura) {
    const surah_last_verse =
      getChapterByChapterNumber(randomSuraNumber)["verses_count"];
    randomAyahNumber =
      Math.floor(Math.random() * (surah_last_verse - startVerse + 1)) +
      startVerse;
  }

  // if the selected surah is the last surah in the selected range, then
  //   the verse to be selected should be within the first verse of the surah and endVerse
  else if (randomSuraNumber === endSura) {
    const surah_first_verse = 1;
    randomAyahNumber =
      Math.floor(Math.random() * (endVerse - surah_first_verse + 1)) +
      surah_first_verse;
    // console.log(2);
  }

  // if the selected surah is any other surah within the range, then
  //   the verse to be selected should be within the first and last verses of the surah
  else {
    randomAyahNumber =
      Math.floor(Math.random() * (endVerse - startVerse + 1)) + startVerse;
    // console.log(3);
  }
  // -------------------

  let ayahKey = `${suraDict.chapter_id}:${randomAyahNumber}`;

  // get the text first
  questionTextDiv.innerHTML = `<span class="italic text-xl text-text">Loading ...</span>`;
  fetch(
    `https://api.quran.com/api/v4//quran/verses/uthmani?verse_key=${ayahKey}`,
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      ayahText = data.verses[0].text_uthmani;
      if (mode == "text") {
        questionTextDiv.innerHTML = ayahText;
        questionTextDiv.innerHTML = ayahText.slice(0, 70) + "...؟";
      }
    });

  // for the image and audio
  fetch(`https://api.quran.com/api/v4/verses/by_key/${ayahKey}?audio=11`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      currentPage = data.verse.page_number;
      pageNumber.innerHTML = "page " + currentPage;
      page.style.backgroundImage = `url(https://raw.githubusercontent.com/GovarJabbar/Quran-PNG/master/${String(data.verse.page_number).padStart(3, "0")}.png)`;
    });

  if (mode == "audio") {
    fetch(`https://api.quran.com/api/v4/recitations/2/by_ayah/${ayahKey}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        questionTextDiv.innerHTML = `<audio id="audioElement" src="" autoplay controls></audio>`;

        // `<div >
        //   <svg data-slot="icon" style="width: 40px; height: 40px;cursor:pointer;" class="hover:translate-y-2 transition duration-100"  id="play" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        //   <path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"></path>
        //   </svg>
        // </div>
        // `
        // play = document.querySelector("#play");
        // play.addEventListener('click', () => {
        //   audio.play()
        // })

        if (audio) audio.pause();

        let audioUri = `//verses.quran.com/${data.audio_files[0].url}`;
        audioUri = `https:${audioUri}`;
        audio = new Audio(audioUri);
        document.querySelector("#audioElement").src = audioUri;

        // play.click();
      });
  }

  localStorage.setItem("startSura", parseInt(startSura));
  localStorage.setItem("startVerse", parseInt(startVerse));
  localStorage.setItem("endSura", parseInt(endSura));
  localStorage.setItem("endVerse", parseInt(endVerse));
}

nextBtn.addEventListener("click", () => {
  getRandomAyah(
    parseInt(startSura.value),
    parseInt(endSura.value),
    parseInt(startVerse.value),
    parseInt(endVerse.value),
  );
});

function fillParams() {
  const s = document.getElementById("inputS").value;
  const c = document.getElementById("inputC").value;
  const url = new URL(window.location);
  url.searchParams.set("s", s);
  url.searchParams.set("c", c);
  window.location.href = url;
}

let lastStartSura =
  parseInt(localStorage.getItem("startSura")) || parseInt(startSura.value);
let lastStartVerse =
  parseInt(localStorage.getItem("startVerse")) || parseInt(startVerse.value);
let lastEndSura =
  parseInt(localStorage.getItem("endSura")) || parseInt(endSura.value);
let lastEndVerse =
  parseInt(localStorage.getItem("endVerse")) || parseInt(endVerse.value);

// new code
const urlParams = new URLSearchParams(window.location.search);
const s = urlParams.get("s");
const c = urlParams.get("c");
if (s && c) {
  lastStartSura = s;
  lastEndSura = s;
  lastStartVerse = suraData[s][c].start;
  lastEndVerse = suraData[s][c].end;
  document.getElementById("inputS").value = s;
  document.getElementById("inputC").value = c;
}
// end new code

startSura.value = lastStartSura;
endSura.value = lastEndSura;
startVerse.value = lastStartVerse;
endVerse.value = lastEndVerse;

function getChapterByChapterNumber(chapterNumber) {
  for (let chapter of chaptersInfo) {
    if (chapter["chapter_id"] === parseInt(chapterNumber, 10)) return chapter;
  }
  return 0;
}

// dyncamic verse selection based on selected surah
startSura.addEventListener("change", (e) => {
  // selected surah number
  const selectedSurahNumber = e.target.value;

  // get verse numbers of surah
  const selectedSurah = getChapterByChapterNumber(selectedSurahNumber);
  const numberOfVerses = selectedSurah["verses_count"];
  startVerse.max = numberOfVerses;
  startVerse.value = 1;
});

endSura.addEventListener("change", (e) => {
  // selected surah number
  const selectedSurahNumber = e.target.value;

  // get verse numbers of surah
  const selectedSurah = getChapterByChapterNumber(selectedSurahNumber);
  const numberOfVerses = selectedSurah["verses_count"];
  endVerse.max = numberOfVerses;
  endVerse.value = numberOfVerses;
});

nextPage.addEventListener("click", (event) => {
  event.preventDefault();
  if (currentPage < 604) {
    currentPage++;
    page.style.backgroundImage = `url(https://raw.githubusercontent.com/GovarJabbar/Quran-PNG/master/${String(currentPage).padStart(3, "0")}.png)`;
    pageNumber.innerHTML = "page " + currentPage;
  }
});

prevPage.addEventListener("click", (event) => {
  event.preventDefault();
  if (currentPage) {
    currentPage--;
    page.style.backgroundImage = `url(https://raw.githubusercontent.com/GovarJabbar/Quran-PNG/master/${String(currentPage).padStart(3, "0")}.png)`;
    pageNumber.innerHTML = "page " + currentPage;
  }
});

// entry point
getRandomAyah(lastStartSura, lastEndSura, lastStartVerse, lastEndVerse);
