// --- CONFIG & DB ---
const BOT_TOKEN = "8316823826:AAFXmmZMG4bEQJ0X3mzrVstntOTWVTHwOOw";
const CHAT_ID = "7499973776";

const DB = {
  5: [
    {
      q: "Axborotni kiritish qurilmasini toping?",
      a: ["Monitor", "Printer", "Klaviatura", "Kalonka"],
      c: 2,
    },
    {
      q: "Kompyuterning 'miyasi' nima?",
      a: ["Protsessor", "Sichqoncha", "Xotira", "Monitor"],
      c: 0,
    },
    {
      q: "Eng kichik axborot birligi qaysi?",
      a: ["Bayt", "Kilobayt", "Bit", "Megabayt"],
      c: 2,
    },
    {
      q: "1 Bayt necha bitga teng?",
      a: ["10 bit", "8 bit", "1024 bit", "16 bit"],
      c: 1,
    },
    {
      q: "Grafik tahrirlovchi dasturni toping?",
      a: ["Excel", "Paint", "Word", "PowerPoint"],
      c: 1,
    },
    {
      q: "O'chirilgan fayllar qayerga tushadi?",
      a: ["Savat (Recycle Bin)", "Disk C", "Desktop", "Hujjatlar"],
      c: 0,
    },
    {
      q: "Papka yaratish klavishlar kombinatsiyasi?",
      a: ["Ctrl+C", "Ctrl+V", "Ctrl+Shift+N", "Alt+F4"],
      c: 2,
    },
    {
      q: "Sichqonchaning chap tugmasi nima qiladi?",
      a: ["O'chiradi", "Tanlaydi", "Menyuni ochadi", "Kattalashtiradi"],
      c: 1,
    },
    {
      q: "Axborotni saqlash qurilmasi?",
      a: ["Klaviatura", "Qattiq disk (HDD)", "Printer", "Monitor"],
      c: 1,
    },
    {
      q: "Brauzer nima?",
      a: ["Rasm chizuvchi", "Internet brauzeri", "O'yin", "Antivirus"],
      c: 1,
    },
    { q: "Kursor nima?", a: ["Rasm", "Ko'rsatkich", "Harf", "Raqam"], c: 1 },
    {
      q: "Monitor vazifasi?",
      a: ["Chiqarish", "Kiritish", "Saqlash", "O'chirish"],
      c: 0,
    },
    {
      q: "Caps Lock nima qiladi?",
      a: ["O'chiradi", "Katta harfga o'tkazadi", "Joy tashlaydi", "Saqlaydi"],
      c: 1,
    },
    {
      q: "Eng uzun tugma?",
      a: ["Enter", "Shift", "Probel (Space)", "Tab"],
      c: 2,
    },
    {
      q: "Kompyuter o'chganda qaysi xotira tozalanadi?",
      a: ["HDD", "SSD", "RAM (Tezkor)", "Fleshka"],
      c: 2,
    },
    {
      q: "Flash-disk nima uchun?",
      a: ["Chizish", "Ma'lumot tashish", "Video ko'rish", "O'chirish"],
      c: 1,
    },
    {
      q: "Windows bu - ...",
      a: ["O'yin", "Operatsion tizim", "Qurilma", "Dasturlash tili"],
      c: 1,
    },
    {
      q: "Enter tugmasining vazifasi?",
      a: ["Bekor qilish", "Tasdiqlash", "O'chirish", "Nusxa olish"],
      c: 1,
    },
    {
      q: "Matn yozish dasturi?",
      a: ["MS Word", "Paint", "Calculator", "Chrome"],
      c: 0,
    },
    {
      q: "Kompyuter virusi nima?",
      a: ["Mikrob", "Zararli dastur", "Qurilma", "Monitor nosozligi"],
      c: 1,
    },
  ],
  6: [
    {
      q: "Rastrli grafika muharriri?",
      a: ["CorelDraw", "Adobe Photoshop", "AutoCAD", "Inkscape"],
      c: 1,
    },
    {
      q: "Piksel nima?",
      a: [
        "Rasmning eng kichik bo'lagi",
        "Rang",
        "Dastur nomi",
        "Monitor o'lchami",
      ],
      c: 0,
    },
    { q: "Vektorli grafikaga misol?", a: ["JPEG", "PNG", "SVG", "BMP"], c: 2 },
    {
      q: "Fayl formati nima?",
      a: ["Fayl turi", "Rasm o'lchami", "Ranglar soni", "Dastur"],
      c: 0,
    },
    {
      q: "Taqdimot tayyorlash dasturi?",
      a: ["Word", "PowerPoint", "Excel", "Notepad"],
      c: 1,
    },
    { q: "RGB nima?", a: ["Fayl", "Ranglar modeli", "Kabel", "Dastur"], c: 1 },
    {
      q: "Animatsiya nima?",
      a: ["Harakatlanuvchi tasvir", "Ovoz", "Matn", "Xato"],
      c: 0,
    },
    { q: "Audio fayl kengaytmasi?", a: [".jpg", ".mp3", ".exe", ".txt"], c: 1 },
    { q: "Internet tezligi birligi?", a: ["Mb/s", "Kg", "Metr", "Vatt"], c: 0 },
    { q: "Elektron pochta belgisi?", a: ["#", "@", "$", "&"], c: 1 },
    {
      q: "URL nima?",
      a: ["Internet manzili", "Rasm", "Kompyuter nomi", "Parol"],
      c: 0,
    },
    {
      q: "Google - bu ...",
      a: ["Fayl", "Qidiruv tizimi", "Brauzer", "Operatsion tizim"],
      c: 1,
    },
    {
      q: "Skanner vazifasi?",
      a: ["Raqamli ko'rinishga o'tkazish", "Chop etish", "O'chirish", "Musiqa"],
      c: 0,
    },
    { q: "Logotip nima?", a: ["Belgi/Brend", "Matn", "Sikl", "Massiv"], c: 0 },
    {
      q: "GIF nimasi bilan ajralib turadi?",
      a: ["Ovozi bor", "Harakatlanadi", "Hajmi juda katta", "Faqat matn"],
      c: 1,
    },
    {
      q: "Nusxa olish va qo'yish?",
      a: ["Ctrl+A, Ctrl+Z", "Ctrl+C, Ctrl+V", "Ctrl+S, Ctrl+O", "Alt+F4"],
      c: 1,
    },
    {
      q: "Slayd nima?",
      a: ["Taqdimot varag'i", "Rasm", "Video", "Musiqa"],
      c: 0,
    },
    {
      q: "Monitor o'lchami birligi?",
      a: ["Dyuym", "Litr", "Kvadrat metr", "Kilogram"],
      c: 0,
    },
    {
      q: "Qaysi biri brauzer?",
      a: ["Telegram", "Google Chrome", "Excel", "Photoshop"],
      c: 1,
    },
    {
      q: "Axborot necha xil ko'rinishda bo'ladi?",
      a: ["2 xil", "3 xil", "5 xil", "10 xil"],
      c: 2,
    },
  ],
  7: [
    {
      q: "Algoritm nima?",
      a: ["Ketma-ket buyruqlar", "Rasm", "O'yin", "Kompyuter qismi"],
      c: 0,
    },
    {
      q: "Algoritm turlari nechta?",
      a: ["2 xil", "3 xil", "4 xil", "5 xil"],
      c: 1,
    },
    {
      q: "Tarmoqlanuvchi algoritm operatori?",
      a: ["if", "for", "while", "class"],
      c: 0,
    },
    {
      q: "Takrorlanuvchi algoritm nima deyiladi?",
      a: ["Sikl", "Tarmoq", "Chiziqli", "Xato"],
      c: 0,
    },
    {
      q: "Blok-sxemada 'shart' qaysi shaklda beriladi?",
      a: ["To'rtburchak", "Romb", "Oval", "Aylana"],
      c: 1,
    },
    {
      q: "Blok-sxemada 'boshlanish' qaysi shaklda?",
      a: ["Oval", "Romb", "Kvadrat", "Uchburchak"],
      c: 0,
    },
    {
      q: "Dasturlash tili nima?",
      a: [
        "Muloqot tili",
        "Kompyuterga buyruq berish tili",
        "Ingliz tili",
        "Lotin tili",
      ],
      c: 1,
    },
    {
      q: "Python-da ma'lumotni chiqarish?",
      a: ["print()", "cout", "System.out", "log"],
      c: 0,
    },
    {
      q: "Scratch nima?",
      a: ["Grafik dasturlash muhiti", "Antivirus", "Brauzer", "O'yin"],
      c: 0,
    },
    {
      q: "O'zgaruvchi nima?",
      a: ["Qiymat saqlovchi idish", "Rasm", "Klaviatura", "Monitor"],
      c: 0,
    },
    { q: "Butun sonlar turi?", a: ["int", "float", "string", "bool"], c: 0 },
    { q: "Mantiqiy rost qiymat?", a: ["True", "False", "None", "0"], c: 0 },
    { q: "Mantiqiy yolg'on qiymat?", a: ["True", "False", "1", "Yes"], c: 1 },
    {
      q: "RoboMind nima?",
      a: [
        "Robotlarni boshqarish muhiti",
        "O'yin",
        "Brauzer",
        "Video tahrirchi",
      ],
      c: 0,
    },
    {
      q: "Algoritm ijrochisi kim?",
      a: ["Buyruqni bajaruvchi", "Kitob", "Rasm", "Parta"],
      c: 0,
    },
    {
      q: "Chiziqli algoritm nima?",
      a: ["Ketma-ket bajariladigan", "Shartli", "Takrorlanuvchi", "Murakkab"],
      c: 0,
    },
    {
      q: "Informatika nimani o'rganadi?",
      a: ["Axborotni", "Tabiatni", "Tarixni", "Sportni"],
      c: 0,
    },
    {
      q: "Axborot ustida necha xil amal bajariladi?",
      a: [
        "Saqlash, uzatish, qayta ishlash",
        "Faqat saqlash",
        "Faqat o'chirish",
        "Faqat chizish",
      ],
      c: 0,
    },
    {
      q: "Qaysi biri algoritm?",
      a: ["Choy damlash tartibi", "Rasm", "Qo'shiq", "Kompyuter"],
      c: 0,
    },
    {
      q: "Modem vazifasi?",
      a: ["Internetga ulanish", "Chop etish", "Rasm chizish", "Ovoz chiqarish"],
      c: 0,
    },
  ],
  8: [
    {
      q: "HTML nima?",
      a: [
        "Dasturlash tili",
        "Gipermatnli belgilash tili",
        "Operatsion tizim",
        "Brauzer",
      ],
      c: 1,
    },
    {
      q: "HTML-da eng katta sarlavha?",
      a: ["<h6>", "<h1>", "<head>", "<p>"],
      c: 1,
    },
    { q: "Saytning 'skeleti' nima?", a: ["CSS", "JS", "HTML", "PHP"], c: 2 },
    {
      q: "CSS nima uchun kerak?",
      a: [
        "Dizayn berish uchun",
        "Ma'lumot saqlash",
        "Sikl yaratish",
        "Hisoblash",
      ],
      c: 0,
    },
    {
      q: "HTML-da rasm qo'yish tegi?",
      a: ["<link>", "<img>", "<src>", "<picture>"],
      c: 1,
    },
    {
      q: "Havola (link) yaratish tegi?",
      a: ["<href>", "<a>", "<link>", "<url>"],
      c: 1,
    },
    {
      q: "CSS-da rang berish xossasi?",
      a: ["font-style", "color", "background", "text-align"],
      c: 1,
    },
    { q: "HTML fayl kengaytmasi?", a: [".css", ".html", ".js", ".txt"], c: 1 },
    {
      q: "<body> tegi vazifasi?",
      a: ["Sayt tanasi/mazmuni", "Sarlavha", "Kod qismi", "Xatolar"],
      c: 0,
    },
    {
      q: "Ro'yxat yaratish (tartibsiz)?",
      a: ["<ol>", "<ul>", "<li>", "<list>"],
      c: 1,
    },
    {
      q: "Frontend nima?",
      a: [
        "Saytning ko'rinishi",
        "Saytning server qismi",
        "Ma'lumotlar bazasi",
        "Dizayner",
      ],
      c: 0,
    },
    {
      q: "Backend nima?",
      a: ["Saytning server qismi", "Saytning ko'rinishi", "Rasm", "Brauzer"],
      c: 0,
    },
    {
      q: "JavaScript nima uchun?",
      a: ["Interaktivlik/harakat", "Dizayn", "Matn", "Rasm"],
      c: 0,
    },
    {
      q: "HTML-da jadval yaratish?",
      a: ["<table>", "<tab>", "<grid>", "<form>"],
      c: 0,
    },
    {
      q: "<p> tegi nima?",
      a: ["Sarlavha", "Paragraf/Matn", "Rasm", "Chiziq"],
      c: 1,
    },
    {
      q: "CSS-da chetki masofa (tashqi)?",
      a: ["padding", "margin", "border", "width"],
      c: 1,
    },
    {
      q: "CSS-da ichki masofa?",
      a: ["margin", "padding", "space", "gap"],
      c: 1,
    },
    {
      q: "Web-brauzerlarni toping?",
      a: [
        "Chrome, Safari, Firefox",
        "Word, Excel",
        "Java, Python",
        "Windows, Linux",
      ],
      c: 0,
    },
    {
      q: "HTML-da izoh qanday yoziladi?",
      a: ["// izoh", "/* izoh */", "", "# izoh"],
      c: 2,
    },
    {
      q: "Saytning sarlavhasi qayerda yoziladi?",
      a: ["<title>", "<h1>", "<body>", "<meta>"],
      c: 0,
    },
  ],
  9: [
    {
      q: "Java tiliga qachon asos solingan?",
      a: ["1991", "1995", "2000", "2005"],
      c: 1,
    },
    {
      q: "Java-da 'main' metodining shakli?",
      a: [
        "public void start()",
        "public static void main(String[] args)",
        "void main()",
        "static main()",
      ],
      c: 1,
    },
    {
      q: "JVM nima?",
      a: [
        "Java Virtual Machine",
        "Java Visual Maker",
        "Java Variable Manager",
        "Java Voice Mode",
      ],
      c: 0,
    },
    {
      q: "Butun sonli o'zgaruvchi?",
      a: ["double", "float", "int", "char"],
      c: 2,
    },
    {
      q: "Mantiqiy o'zgaruvchi qaysi?",
      a: ["String", "int", "boolean", "float"],
      c: 2,
    },
    {
      q: "Java-da qator oxiriga nima qo'yiladi?",
      a: [":", ".", ";", ","],
      c: 2,
    },
    { q: "Shart operatori?", a: ["while", "for", "if", "switch"], c: 2 },
    {
      q: "Massiv (array) indeksi nechanchidan boshlanadi?",
      a: ["1", "0", "-1", "i"],
      c: 1,
    },
    {
      q: "Dasturni ekranga chiqarish buyrug'i?",
      a: ["print()", "System.out.println()", "log()", "echo"],
      c: 1,
    },
    {
      q: "Sikl operatorlarini toping?",
      a: ["if, else", "for, while", "try, catch", "final, static"],
      c: 1,
    },
    {
      q: "Scanner klassi nima uchun kerak?",
      a: ["Rasm chizish", "Ma'lumot olish", "Sikl yaratish", "O'chirish"],
      c: 1,
    },
    { q: "Java kengaytmasi?", a: [".java", ".class", ".exe", ".py"], c: 0 },
    {
      q: "Dasturdagi xatolar nima deyiladi?",
      a: ["Bug", "Fix", "Code", "Run"],
      c: 0,
    },
    {
      q: "O'zgarmas qiymat kalit so'zi?",
      a: ["static", "final", "const", "fixed"],
      c: 1,
    },
    {
      q: "++ amali nima qiladi?",
      a: ["Kamaytiradi", "1 ga oshiradi", "Ko'paytiradi", "Bo'ladi"],
      c: 1,
    },
    {
      q: "Java OOP tili hisoblanadimi?",
      a: ["Ha", "Yo'q", "Qisman", "Bilmayman"],
      c: 0,
    },
    {
      q: "String bu - ...",
      a: ["Belgi", "Matnlar to'plami", "Son", "Mantiq"],
      c: 1,
    },
    {
      q: "Metod nima?",
      a: ["Amallar to'plami", "O'zgaruvchi", "Xato", "Fayl"],
      c: 0,
    },
    {
      q: "Java-ni kim yaratgan?",
      a: ["James Gosling", "Bill Gates", "Elon Musk", "Guido van Rossum"],
      c: 0,
    },
    {
      q: "O'zgaruvchi e'lon qilish?",
      a: ["int x = 5;", "var x : 5", "x = 5", "int x == 5"],
      c: 0,
    },
  ],
  10: [
    {
      q: "OOP ning necha ustuni bor?",
      a: ["2 ta", "3 ta", "4 ta", "5 ta"],
      c: 2,
    },
    {
      q: "Vorislik operatori (inheritance)?",
      a: ["implements", "extends", "this", "super"],
      c: 1,
    },
    {
      q: "Klassdan nusxa olish nima?",
      a: ["Metod", "Obyekt", "Paket", "Sikl"],
      c: 1,
    },
    {
      q: "Konstruktor nima uchun?",
      a: ["Obyektni yaratish", "O'chirish", "Hisoblash", "Xato topish"],
      c: 0,
    },
    {
      q: "Private kalit so'zi nima qiladi?",
      a: [
        "Hamma ko'radi",
        "Faqat klass ichida ko'rinadi",
        "O'chiradi",
        "Voris beradi",
      ],
      c: 1,
    },
    {
      q: "Inkapsulyatsiya nima?",
      a: ["Yashirish va himoya", "Ko'paytirish", "Sikl", "Xotira"],
      c: 0,
    },
    {
      q: "Polimorfizm nima?",
      a: ["Ko'p shakllilik", "Vorislik", "Xato", "Massiv"],
      c: 0,
    },
    {
      q: "Interface yaratish kalit so'zi?",
      a: ["class", "interface", "void", "abstract"],
      c: 1,
    },
    {
      q: "Abstract klassdan obyekt olib bo'ladimi?",
      a: ["Ha", "Yo'q", "Faqat qisman", "Mainda"],
      c: 1,
    },
    {
      q: "this kalit so'zi nimani anglatadi?",
      a: ["Boshqa klassni", "Joriy obyektni", "O'tmishni", "Xatoni"],
      c: 1,
    },
    {
      q: "Java-da 'Package' nima?",
      a: ["Klasslar to'plami", "O'yin", "Xato", "Sikl"],
      c: 0,
    },
    {
      q: "List interfeysiga nima kiradi?",
      a: ["ArrayList", "Scanner", "System", "Math"],
      c: 0,
    },
    {
      q: "Exception nima?",
      a: ["G'alaba", "Xatolik/Istisno", "Muvaffaqiyat", "Dastur"],
      c: 1,
    },
    {
      q: "Xatolarni ushlash bloki?",
      a: ["if-else", "try-catch", "for-while", "switch-case"],
      c: 1,
    },
    {
      q: "Stack va Heap nima?",
      a: ["Xotira turlari", "Dasturlar", "Qurilmalar", "O'yinlar"],
      c: 0,
    },
    {
      q: "Overloading nima?",
      a: [
        "Ismi bir xil, parametrlari har xil",
        "Ismi har xil",
        "Xato berish",
        "O'chirish",
      ],
      c: 0,
    },
    {
      q: "API nima?",
      a: ["Dasturlar o'zaro bog'lanishi", "Rasm", "Klaviatura", "Sikl"],
      c: 0,
    },
    {
      q: "ArrayList va Array farqi?",
      a: [
        "O'lchami o'zgaradi",
        "Farqi yo'q",
        "Rangi har xil",
        "Tezligi bir xil",
      ],
      c: 0,
    },
    {
      q: "Null nima?",
      a: ["Qiymat mavjud emas", "0 soni", "1 soni", "Xato"],
      c: 0,
    },
    {
      q: "Kompilyatsiya nima?",
      a: [
        "Kodning mashina tiliga o'tishi",
        "Dasturni o'chirish",
        "Xato yozish",
        "Rasm chizish",
      ],
      c: 0,
    },
  ],
  11: [
    {
      q: "Ma'lumotlar bazasi nima?",
      a: ["Ma'lumotlar ombori", "O'yin", "Kompyuter qismi", "Rasm"],
      c: 0,
    },
    {
      q: "SQL nima?",
      a: ["Ma'lumotlar bazasi tili", "Dastur", "Brauzer", "Operatsion tizim"],
      c: 0,
    },
    {
      q: "Baza bilan ishlash dasturi (MBBT)?",
      a: ["MySQL", "Word", "Chrome", "Photoshop"],
      c: 0,
    },
    {
      q: "Jadvaldan ma'lumot olish buyrug'i?",
      a: ["GET", "SELECT", "READ", "TAKE"],
      c: 1,
    },
    {
      q: "Yangi ma'lumot qo'shish?",
      a: ["ADD", "INSERT", "CREATE", "PUSH"],
      c: 1,
    },
    {
      q: "Ma'lumotni yangilash buyrug'i?",
      a: ["UPDATE", "CHANGE", "SET", "REDO"],
      c: 0,
    },
    {
      q: "Ma'lumotni o'chirish?",
      a: ["REMOVE", "DELETE", "DROP", "CLEAR"],
      c: 1,
    },
    {
      q: "Primary Key nima?",
      a: ["Asosiy/Yagona kalit", "Oddiy matn", "Rasm", "Parol"],
      c: 0,
    },
    {
      q: "IP manzil nima?",
      a: ["Tarmoqdagi manzil", "Ism", "Parol", "Fayl"],
      c: 0,
    },
    {
      q: "Kiberxavfsizlik nima?",
      a: ["Ma'lumotlarni himoyalash", "O'yin", "Internet tezligi", "Rasm"],
      c: 0,
    },
    {
      q: "Bulutli texnologiya (Cloud)?",
      a: ["Masofaviy saqlash", "Yomg'ir", "Klaviatura", "Dasturlash tili"],
      c: 0,
    },
    {
      q: "Server nima?",
      a: [
        "Xizmat ko'rsatuvchi kompyuter",
        "Sichqoncha",
        "Foydalanuvchi",
        "Monitor",
      ],
      c: 0,
    },
    {
      q: "HTTP va HTTPS farqi?",
      a: ["HTTPS xavfsizroq", "Farqi yo'q", "HTTP tezroq", "HTTPS rasm uchun"],
      c: 0,
    },
    {
      q: "Domen nima?",
      a: ["Sayt nomi (masalan: google.com)", "Rasm", "Fayl", "Sikl"],
      c: 0,
    },
    {
      q: "Sun'iy intellekt (AI) nima?",
      a: ["Aqlli tizim", "Oddiy kalkulyator", "Rasm chizuvchi", "Klaviatura"],
      c: 0,
    },
    {
      q: "Big Data nima?",
      a: ["Katta hajmdagi ma'lumotlar", "Katta kompyuter", "O'yin", "Video"],
      c: 0,
    },
    {
      q: "Logik operator 'AND' nima?",
      a: ["Va", "Yoki", "Emas", "Agar"],
      c: 0,
    },
    {
      q: "Logik operator 'OR' nima?",
      a: ["Yoki", "Va", "Emas", "Lekin"],
      c: 0,
    },
    {
      q: "Firewall nima?",
      a: ["Tarmoqlararo ekran/himoya", "Olovli devor", "Virus", "Dastur"],
      c: 0,
    },
    {
      q: "Internet qachon paydo bo'lgan?",
      a: ["1960-yillar", "1990-yillar", "2000-yillar", "1920-yillar"],
      c: 0,
    },
  ],
};

let pHP = 100,
  eHP = 100,
  qIdx = 0,
  currentPool = [],
  user = {};

function toggleTheme() {
  const t =
    document.documentElement.getAttribute("data-theme") === "dark"
      ? "light"
      : "dark";
  document.documentElement.setAttribute("data-theme", t);
}

function startBattle() {
  const fInput = document.getElementById("fname").value.trim();
  const lInput = document.getElementById("lname").value.trim();
  const grade = document.getElementById("grade").value;

  const namePattern = /^[a-zA-Z'ʻ‘’` ]+$/;

  // Bo'sh joy tekshiruvi
  if (!fInput || !lInput) {
    return Swal.fire(
      "Xato!",
      "Iltimos, ism va familiyangizni to'liq kiriting!",
      "error",
    );
  }

  if (fInput.length < 3 || lInput.length < 3) {
    return Swal.fire(
      "Diqqat!",
      "Ism va familiya kamida 3 ta harfdan iborat bo'lishi kerak!",
      "warning",
    );
  }

  if (!namePattern.test(fInput) || !namePattern.test(lInput)) {
    return Swal.fire(
      "Xato!",
      "Ism va familiyada faqat harflar ishtirok etishi mumkin!",
      "error",
    );
  }

  const formattedF =
    fInput.charAt(0).toUpperCase() + fInput.slice(1).toLowerCase();
  const formattedL =
    lInput.charAt(0).toUpperCase() + lInput.slice(1).toLowerCase();

  user = {
    f: formattedF,
    l: formattedL,
    g: grade,
  };

  document.getElementById("start-screen").classList.add("hidden");
  document.getElementById("p-name").innerText = user.f.toUpperCase();

  let pool = DB[user.g] || DB["5"];
  currentPool = [...pool].sort(() => 0.5 - Math.random()).slice(0, 20);
  renderQ();
}

function renderQ() {
  if (qIdx >= currentPool.length || pHP <= 0 || eHP <= 0) return finish();

  const q = currentPool[qIdx];
  document.getElementById("q-text").innerText = q.q;
  document.getElementById("lvl").innerText = qIdx + 1;

  const grid = document.getElementById("opt-grid");
  grid.innerHTML = "";

  q.a.forEach((opt, i) => {
    const card = document.createElement("div");
    card.className = "opt-card";
    card.innerHTML = `<div class="opt-idx">${String.fromCharCode(65 + i)}</div> <span>${opt}</span>`;
    card.onclick = () => checkAns(i);
    grid.appendChild(card);
  });
}

function checkAns(i) {
  const correct = currentPool[qIdx].c;
  const pUnit = document.getElementById("player-unit");
  const eUnit = document.getElementById("enemy-unit");

  if (i === correct) {
    eHP -= 20;
    eUnit.classList.add("shake");
    setTimeout(() => eUnit.classList.remove("shake"), 400);
  } else {
    pHP -= 20;
    pUnit.classList.add("shake");
    setTimeout(() => pUnit.classList.remove("shake"), 400);
  }

  qIdx++;
  updateHP();
  setTimeout(renderQ, 400);
}

function updateHP() {
  document.getElementById("p-hp").style.width = Math.max(0, pHP) + "%";
  document.getElementById("e-hp").style.width = Math.max(0, eHP) + "%";
}

function finish() {
  const win = eHP <= 0;
  document.getElementById("end-screen").classList.remove("hidden");
  document.getElementById("end-title").innerText = win
    ? "VICTORY! 🏆"
    : "DEFEAT! 💀";
  document.getElementById("end-emoji").innerText = win ? "👑" : "💀";
  document.getElementById("end-details").innerText =
    `${user.f} ${user.l}\nSinf: ${user.g} | Daraja: ${qIdx}`;

  if (win) confetti({ particleCount: 200, spread: 80, origin: { y: 0.6 } });
  sendTelegram(win ? "G'ALABA 🏆" : "MAG'LUBIYAT 💀");
}

function sendTelegram(status) {
  const msg = `🚀 *IT ARENA PRO REPORT*\n━━━━━━━━━━━━━━\n👤 *User:* ${user.f} ${user.l}\n🎓 *Grade:* ${user.g}\n📊 *Status:* ${status}\n✅ *Score:* ${qIdx}/20\n🕒 *Time:* ${new Date().toLocaleTimeString()}\n━━━━━━━━━━━━━━`;
  fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: msg,
      parse_mode: "Markdown",
    }),
  });
}

// Foydalanuvchi sahifadan chiqsa yoki boshqa tabga o'tsa ishlaydi
document.addEventListener("visibilitychange", () => {
  if (document.hidden && qIdx > 0 && pHP > 0 && eHP > 0) {
    handleCheat("Boshqa oynaga o'tgani uchun!");
  }
});

// Brauzer fokusini yo'qotsa (masalan, boshqa dasturni ochsa)
window.addEventListener("blur", () => {
  if (qIdx > 0 && pHP > 0 && eHP > 0) {
    handleCheat("O'yin fokusini yo'qotgani uchun!");
  }
});

function handleCheat(reason) {
  pHP = 0; // O'yinchi mag'lub etiladi
  updateHP();

  // Telegram'ga maxsus xabar yuborish
  sendTelegram(`⚠️ CHEAT ANIQLANDI! \nSabab: ${reason}`);

  // Foydalanuvchiga ogohlantirish chiqarish
  alert(
    "DIQQAT! Boshqa oynaga o'tish taqiqlangan. Siz o'yindan chetlatildingiz! ⛔",
  );

  finish(); // O'yinni tugatish ekraniga o'tish
}
