export interface FaqDataItem {
  quizRu: string;
  quizUz: string;
  answerRu: string;
  answerUz: string;
}

export interface StepItem {
  txtRu: string;
  txtUz: string;
  img: string;
}

export interface FaqtInstallation {
  quizRu: string;
  quizUz: string;
  steps: StepItem[];
}

export const faqData: FaqDataItem[] = [
  {
    quizRu: "Как сделать заказ?",
    quizUz: "Buyurtmani qanday qilish kerak?",
    answerRu:
      "онлайн (на сайте компании) с помощью звонка на контактные телефоны организации.",
    answerUz:
      "onlayn (kompaniya veb-saytida) tashkilotning aloqa raqamlariga qo'ng'iroq qilish orqali.",
  },
  {
    quizRu: "В ПРОЕМЫ КАКОГО РАЗМЕРА МОЖНО УСТАНОВИТЬ ГАРАЖНЫЕ ВОРОТА ?",
    quizUz: "GARAJ ESHIKLARINI QAYSI O'lchamdagi TECHIKLARGA O'RNATISH MUMKIN?",
    answerRu:
      "Секционные ворота с пружинами растяжения устанавливаются в гаражные проемы высотой до 3 м, шириной до 3,5 м, а промышленная с торсионными пружинами – в проемы до 8 м по ширине и высоте.",
    answerUz:
      "Kirish kamonlari bo'lgan seksiyali eshiklar balandligi 3 m gacha, kengligi 3,5 m gacha bo'lgan garaj teshiklarida va buralish kamonlari bo'lgan sanoat eshiklari - kengligi va balandligi 8 m gacha bo'lgan teshiklarda o'rnatiladi.",
  },
  {
    quizRu: "КАКИЕ ВОРОТНЫЕ СИСТЕМЫ ВЫБРАТЬ – СЕКЦИОННЫЕ ИЛИ РУЛОННЫЕ?",
    quizUz: "QAYSI GATE TIZIMLARINI TANLASH MUMKIN - SEKSIONLI YOKI ROLL?",
    answerRu:
      "Каждый вид имеет свои преимущества. Секционные гаражные ворота хорошо защищают от холода, так как изготавливаются из сэндвич-панелей толщиной 42 мм. Они могут устанавливаться в отапливаемых помещениях. Роллетные системы компактные, подходят для помещений с низкими потолками. Поэтому выбор зависит от особенностей гаража и бюджета на покупку.",
    answerUz:
      "Har bir turning o'ziga xos afzalliklari bor. Seksiyonel garaj eshiklari sovuqdan yaxshi himoya qiladi, chunki ular 42 mm qalinlikdagi sendvich panellardan tayyorlangan. Ular isitiladigan xonalarga o'rnatilishi mumkin. Rolikli panjur tizimlari ixcham, past shiftli xonalarga mos keladi. Shuning uchun tanlov garajning xususiyatlariga va sotib olish uchun byudjetga bog'liq.",
  },
  {
    quizRu: "КАКИЕ ВОРОТА ПРОЩЕ УСТАНОВИТЬ?",
    quizUz: "QAYSI DAROVNONI O'RNATISH Osonroq?",
    answerRu:
      "Монтаж ворот – это сложный процесс, который должен выполняться сертифицированными мастерами. У нас можно не только купить продукцию, но и заказать ее установку.",
    answerUz:
      "Darvoza o'rnatish - bu sertifikatlangan ustalar tomonidan bajarilishi kerak bo'lgan murakkab jarayon. Siz nafaqat bizdan mahsulotlar sotib olishingiz, balki uni o'rnatishga buyurtma berishingiz mumkin.",
  },
  {
    quizRu: "Не нашли ответа на свой вопрос?",
    quizUz: "Savolingizga javob topa olmadingizmi?",
    answerRu: "Свяжитесь с нами, и мы предоставим необходимую информацию.",
    answerUz:
      "Biz bilan bog'laning va biz kerakli ma'lumotlarni taqdim etamiz.",
  },
];

export const faqtInstallationData: FaqtInstallation = {
  quizRu: "КАК ЗАМЕРИТЬ ПРОЕМ?",
  quizUz: "OCHILGANNI QANDAY O‘LCHISH MUMKIN?",
  steps: [
    {
      txtRu:
        "1.Внимание! Все замеры проводятся в трех разных точках. Замерьте ширину проема (B) и запишите максимальное значение.",
      txtUz:
        "1.Diqqat! Barcha o'lchovlar uch xil nuqtada olinadi. Ochilishning kengligini o'lchang (B) va maksimal qiymatni yozing.",
      img: "/media/faq1.jpg",
    },
    {
      txtRu:
        "2.Замерьте высоту проема (H) от выведенного, чистого пола. Для правильного замера необходимо знать точное положение нулевой отметки. Запишите максимальное значение",
      txtUz:
        "2. Teshikning balandligini (H) ochiq, toza zamindan o'lchang. To'g'ri o'lchash uchun nol belgisining aniq o'rnini bilish kerak. Maksimal qiymatni yozing",
      img: "/media/faq2.jpg",
    },
    {
      txtRu:
        "3.Замерьте притолоку проема (h). Если в зоне притолоки проходят балки, кабели, вентиляционные короба, обратите на это внимание инженера. Запишите минимальное значение.",
      txtUz:
        "3.Ochishning lintelini o'lchang (h). Agar lintel zonasida nurlar, kabellar, shamollatish kanallari o'tib ketsa, bunga muhandisning e'tiborini qarating. Minimal qiymatni yozing.",
      img: "/media/faq3.jpg",
    },
    {
      txtRu:
        "4.Замерьте левый пристенок (bл) до ближайшего препятствия (труба, короб, стена и др.). Запишите минимальное значение",
      txtUz:
        "4. Chap devorni (bl) eng yaqin to'siqqa (quvur, kanal, devor va boshqalar) o'lchang. Minimal qiymatni yozing",
      img: "/media/faq4.jpg",
    },
    {
      txtRu:
        "5.Замерьте правый пристенок (bп) до ближайшего препятствия (труба, короб, стена и др.). Запишите минимальное значение",
      txtUz:
        "5. O'ng devorni (bp) eng yaqin to'siqqa (quvur, kanal, devor va boshqalar) o'lchang. Minimal qiymatni yozing",
      img: "/media/faq5.jpg",
    },
    {
      txtRu:
        "6.Замерьте длину помещения (L), как показано на рисунке. Запишите минимальное значение",
      txtUz:
        "6.Ko'rsatilganidek, xonaning uzunligini (L) o'lchang. Minimal qiymatni yozing",
      img: "/media/faq6.jpg",
    },
  ],
};
