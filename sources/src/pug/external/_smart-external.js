
const locations = [
    {
      nameRu: "Кухня",
      id: "kitchen",
      imageSmall: "./images/pages/smart/locations/kitchen.webp",
      image: "./images/pages/smart/locations/full/kitchen.webp",
    },
    {
      nameRu: "Гостиная",
      id: "living-room",
      imageSmall: "./images/pages/smart/locations/living-room.webp",
      image: "./images/pages/smart/locations/full/living-room.webp",
    },
    {
      nameRu: "Спальня",
      id: "bedroom",
      imageSmall: "./images/pages/smart/locations/bedroom.webp",
      image: "./images/pages/smart/locations/full/bedroom.webp",
    },
    {
      nameRu: "Ванная",
      id: "bath",
      imageSmall: "./images/pages/smart/locations/bath.webp",
      image: "./images/pages/smart/locations/full/bath.webp",
    },
    {
      nameRu: "Для животных",
      id: "pets",
      imageSmall: "./images/pages/smart/locations/pets.webp",
      image: "./images/pages/smart/locations/full/pets.webp",
    },
    {
      nameRu: "Гараж",
      id: "garage",
      imageSmall: "./images/pages/smart/locations/garage.webp",
      image: "./images/pages/smart/locations/full/garage.webp",
    },
];
const goods = [
  //========================================================================================================================================================
  // RELATED
  // READY
  {
    id: "xiaomi-tv-box-s-2nd-gen",
    nameRu: "Приставка смарт-ТВ Xiaomi TV Box S 2nd Gen",
    image: "./images/pages/smart/goods/xiaomi-tv-box-s-2nd-gen.webp",
    imageSmall: "./images/pages/smart/goods/xiaomi-tv-box-s-2nd-gen.webp",
    link: "https://shop.mts.by/tv/tv-boxes/xiaomi-tv-box-s-2nd-gen",
    group: "",
    app: ["mi"],
    //list: [
    //  "Подключайте контроллер ко всем устройствам умного дома для одновременной коммуникации с разными устройствами и создавайте собственный сценария взаимодействия устройств умного дома",
    //  "Управляйте всеми устройствами умного дома с помощью голосового помощника Siri, приложений HomeKit и Mi Home App",
    //  "Назначьте кнопке различные действия для одного нажатия, двойного нажатия и долгого нажатия, чтобы управлять несколькими устройствами",
    //],
    //related: ["xiaomi-mi-smart-air-fryer-15"]
  },
  // READY
  {
    id: "yandeks-yndx-0006-chernyy",
    nameRu: "Умный пульт Яндекс YNDX-0006",
    image: "./images/pages/smart/goods/yandeks-yndx-0006-chernyy.webp",
    imageSmall: "./images/pages/smart/goods/yandeks-yndx-0006-chernyy.webp",
    link: "https://shop.mts.by/smart-house/sensors/yandeks-yndx-0006-chernyy/",
    group: "",
    app: ["alice"],
    //list: [
    //  "Подключайте контроллер ко всем устройствам умного дома для одновременной коммуникации с разными устройствами и создавайте собственный сценария взаимодействия устройств умного дома",
    //  "Управляйте всеми устройствами умного дома с помощью голосового помощника Siri, приложений HomeKit и Mi Home App",
    //  "Назначьте кнопке различные действия для одного нажатия, двойного нажатия и долгого нажатия, чтобы управлять несколькими устройствами",
    //],
    //related: ["xiaomi-mi-smart-air-fryer-15"]
  },
  //
  // READY
  {
    id: "yandeks-yndx-00524-white",
    nameRu: "Беспроводная кнопка Яндекс YNDX-00524",
    image: "./images/pages/smart/goods/yandeks-yndx-00524-white.webp",
    imageSmall: "./images/pages/smart/goods/yandeks-yndx-00524-white.webp",
    link: "https://shop.mts.by/smart-house/sensors/yandeks-yndx-00524-white/",
    group: "",
    app: ["alice"],
    //list: [
    //  "Подключайте контроллер ко всем устройствам умного дома для одновременной коммуникации с разными устройствами и создавайте собственный сценария взаимодействия устройств умного дома",
    //  "Управляйте всеми устройствами умного дома с помощью голосового помощника Siri, приложений HomeKit и Mi Home App",
    //  "Назначьте кнопке различные действия для одного нажатия, двойного нажатия и долгого нажатия, чтобы управлять несколькими устройствами",
    //],
    //related: ["xiaomi-mi-smart-air-fryer-15"]
  },
  //
  // >>> Led Lamp >>>
  // READY
  {
    id: "yandeks-lampa-3-e27",
    nameRu: "Яндекс.Лампа 3. Е27 ",
    image: "./images/pages/smart/goods/yandeks-lampa-3-e27.webp",
    imageSmall: "./images/pages/smart/goods/yandeks-lampa-3-e27.webp",
    link: "https://shop.mts.by/smart-house/sensors/yandeks-lampa-3-e27/",
    group: "smart-lamp",
    app: ["alice"],
    list: [
      "Настраивайте яркость и цветовую температуру под собственные предпочтения",
      "Включайте освещение, переключайте цвета, настраивайте яркость и цветовую температуру или включайте режим умной работы всего несколькими словами с помощью Amazon Alexa и Google Ассистента.",
      "Настраивайте лампу в соответствии с Вашим распорядком дня через приложение Дом с Алисой",
    ],
    related: ["yandeks-yndx-0006-chernyy"]
  },
  {
    id: "yandeks-lampa-3-e14",
    nameRu: "Яндекс.Лампа 3. Е14 ",
    image: "./images/pages/smart/goods/yandeks-lampa-3-e14.webp",
    imageSmall: "./images/pages/smart/goods/yandeks-lampa-3-e14.webp",
    link: "https://shop.mts.by/smart-house/sensors/yandeks-lampa-3-e14/",
    group: "smart-lamp",
    app: ["alice"],
    list: [
      "Настраивайте яркость и цветовую температуру под собственные предпочтения",
      "Включайте освещение, переключайте цвета, настраивайте яркость и цветовую температуру или включайте режим умной работы всего несколькими словами с помощью Amazon Alexa и Google Ассистента.",
      "Настраивайте лампу в соответствии с Вашим распорядком дня через приложение Дом с Алисой",
    ],
    //list: [
    //  "Управление через приложение и с помощью Алисы",
    //  "16 миллионов цветов для создания уникального освещения",
    //  "Рассчитана на 25000 часов службы",
    //],
    related: ["yandeks-yndx-0006-chernyy"]
  },
  // <<< Led Lamp <<<
  // >>> smart-speaker >>>
  // READY
  {
    id: "yandex-stantsiya-duo-maks-black",
    nameRu: "Яндекс.Станция Дуо Макс",
    image: "./images/pages/smart/goods/yandex-stantsiya-duo-maks-black.webp",
    imageSmall: "./images/pages/smart/goods/yandex-stantsiya-duo-maks-black.webp",
    link: "https://shop.mts.by/smart-house/speakers/stantsiya-duo-maks/",
    group: "smart-speaker1",
    app: ["alice"],
    list: [
      "Яндекс.Станция Дуо Макс имеет полноценный сенсорный экран с поворотным механизмом и разрешением Full HD, что позволит настроить оптимальный угол наклона по своему усмотрению. Для совершения видеозвонков предусмотрена встроенная камера.",
      "Управляйте умными гаджетами вашего дома с помощью голоса.",
      "Подключайте смартфон к Яндекс Станции для удобного прослушивания.",
      "Позволяет настроить уборку и сценарии работы устройств умного дома, включать и выключать электроприборы и свет при помощи умных розеток и лампочек.",
      "Слышит и распознает голоса в шумной обстановке благодаря встроенным микрофонам.",
      "Станция развлекает викторинами и квестами, быстро находит ответы на вопросы, рассказывает сказки и помогает с домашними заданиями, заменяет радионяню.",
    ],
    //related: ["yandeks-lampa-3-e27"]
  },
  // <<< smart-speaker <<<
  // >>> smart-speaker2 >>>
  // READY
  {
    id: "yandeks-stantsiya-lite-brown",
    nameRu: "Яндекс.Станция Лайт",
    image: "./images/pages/smart/goods/yandeks-stantsiya-lite-brown.webp",
    imageSmall: "./images/pages/smart/goods/yandeks-stantsiya-lite-brown.webp",
    link: "https://shop.mts.by/smart-house/speakers/ctantsiya-layt/",
    group: "smart-speaker2",
    app: ["alice"],
    list: [
      "Управляйте умными гаджетами вашего дома с помощью голоса.",
      "Подключайте смартфон к Яндекс Станции для удобного прослушивания.",
      "Позволяет настроить уборку и сценарии работы устройств умного дома, включать и выключать электроприборы и свет при помощи умных розеток и лампочек.",
      "Слышит и распознает голоса в шумной обстановке благодаря встроенным микрофонам.",
      "Станция развлекает викторинами и квестами, быстро находит ответы на вопросы, рассказывает сказки и помогает с домашними заданиями, заменяет радионяню.",
    ],
    related: ["yandeks-lampa-3-e14"]
  },
  // <<< smart-speaker2 <<<
  // >>> smart-speaker3 >>>
  // READY
  {
    id: "yandex-stantsiya-maks-s-zigbee",
    nameRu: "Яндекс. Станция Макс с Zigbee",
    image: "./images/pages/smart/goods/yandex-stantsiya-maks-s-zigbee.webp",
    imageSmall: "./images/pages/smart/goods/yandex-stantsiya-maks-s-zigbee.webp",
    link: "https://shop.mts.by/smart-house/speakers/ctantsiya-maks/",
    group: "smart-speaker3",
    app: ["alice"],
    list: [
      "Управляйте умными гаджетами вашего дома с помощью голоса.",
      "Подключайте смартфон к Яндекс Станции для удобного прослушивания.",
      "Позволяет настроить уборку и сценарии работы устройств умного дома, включать и выключать электроприборы и свет при помощи умных розеток и лампочек.",
      "Слышит и распознает голоса в шумной обстановке благодаря встроенным микрофонам.",
      "Станция развлекает викторинами и квестами, быстро находит ответы на вопросы, рассказывает сказки и помогает с домашними заданиями, заменяет радионяню.",
    ],
    related: ["yandeks-lampa-3-e27"]
  },
  {
    id: "yandex-stantsiya-midi-s-zigbee",
    nameRu: "Yandex.Станция Миди с Zigbee",
    image: "./images/pages/smart/goods/yandex-stantsiya-midi-s-zigbee.webp",
    imageSmall: "./images/pages/smart/goods/yandex-stantsiya-midi-s-zigbee.webp",
    link: "https://shop.mts.by/smart-house/speakers/ctantsiya-midi/",
    group: "smart-speaker3",
    app: ["alice"],
    list: [
      "Управляйте умными гаджетами вашего дома с помощью голоса.",
      "Подключайте смартфон к Яндекс Станции для удобного прослушивания.",
      "Позволяет настроить уборку и сценарии работы устройств умного дома, включать и выключать электроприборы и свет при помощи умных розеток и лампочек.",
      "Слышит и распознает голоса в шумной обстановке благодаря встроенным микрофонам.",
      "Станция развлекает викторинами и квестами, быстро находит ответы на вопросы, рассказывает сказки и помогает с домашними заданиями, заменяет радионяню.",
    ],
    related: ["yandeks-lampa-3-e27"]
  },
  // <<< smart-speaker3 <<<
  // >>> smart-speaker4 >>>
  // READY
  {
    id: "yandeks-stantsiya-2",
    nameRu: "Яндекс.Станция 2",
    image: "./images/pages/smart/goods/yandeks-stantsiya-2.webp",
    imageSmall: "./images/pages/smart/goods/yandeks-stantsiya-2.webp",
    link: "https://shop.mts.by/smart-house/speakers/ctantsiya-2/",
    group: "smart-speaker4",
    app: ["alice"],
    list: [
      "Управляйте умными гаджетами вашего дома с помощью голоса.",
      "Подключайте смартфон к Яндекс Станции для удобного прослушивания.",
      "Позволяет настроить уборку и сценарии работы устройств умного дома, включать и выключать электроприборы и свет при помощи умных розеток и лампочек.",
      "Слышит и распознает голоса в шумной обстановке благодаря встроенным микрофонам.",
      "Станция развлекает викторинами и квестами, быстро находит ответы на вопросы, рассказывает сказки и помогает с домашними заданиями, заменяет радионяню.",
    ],
    related: ["yandeks-lampa-3-e27", "yandeks-yndx-00524-white"]
  },
  // <<< smart-speaker4 <<<
  // >>> smart-speaker5 >>>
  // READY
  {
    id: "yandeks-stantsiya-mini-black",
    nameRu: "Яндекс.Станция Мини",
    image: "./images/pages/smart/goods/yandeks-stantsiya-mini-black.webp",
    imageSmall: "./images/pages/smart/goods/yandeks-stantsiya-mini-black.webp",
    link: "https://shop.mts.by/smart-house/speakers/ctantsiya-mini/",
    group: "smart-speaker5",
    app: ["alice"],
    list: [
      "Управляйте умными гаджетами вашего дома с помощью голоса.",
      "Подключайте смартфон к Яндекс Станции для удобного прослушивания.",
      "Позволяет настроить уборку и сценарии работы устройств умного дома, включать и выключать электроприборы и свет при помощи умных розеток и лампочек.",
      "Слышит и распознает голоса в шумной обстановке благодаря встроенным микрофонам.",
      "Станция развлекает викторинами и квестами, быстро находит ответы на вопросы, рассказывает сказки и помогает с домашними заданиями, заменяет радионяню.",
    ],
    //related: ["yandeks-lampa-3-e27", "yandeks-yndx-00524-white"]
  },
  // <<< smart-speaker5 <<<
  // >>> massager >>>
  // READY
  {
    id: "xiaomi-massage-gun-mini",
    nameRu: "Xiaomi Massage Gun Mini",
    image: "./images/pages/smart/goods/xiaomi-massage-gun-mini.webp",
    imageSmall: "./images/pages/smart/goods/xiaomi-massage-gun-mini.webp",
    link: "https://shop.mts.by/smart-house/smart-technology/xiaomi-massage-gun-mini/",
    group: "massager",
    app: ["mi"],
    list: [
      "Имеет 3 уровня интенсивности и 3 насадки, предназначенные для определенных участков тела.",
      "Интеллектуальный индикатор на 360° помогает определить идеальное давление для безопасного и эффективного массажа, способствуя расслаблению во время процедуры.",
      "При ежедневном 10-минутном использовании заряда хватит до 35 дней.",
      "Вес массажера всего 375 грамм.",
    ],
    //related: ["yandeks-yndx-00524-white"]
  },
  {
    id: "xiaomi-massage-gun-black",
    nameRu: "Xiaomi Massage Gun",
    image: "./images/pages/smart/goods/xiaomi-massage-gun.webp",
    imageSmall: "./images/pages/smart/goods/xiaomi-massage-gun.webp",
    link: "https://shop.mts.by/smart-house/smart-technology/xiaomi-massage-gun-black/",
    group: "massager",
    app: ["mi"],
    list: [
      "Массажер имеет 3 уровня интенсивности и 3 насадки, предназначенные для определенных участков тела",
      "Интеллектуальный индикатор на 360° помогает определить идеальное давление для безопасного и эффективного массажа, способствуя расслаблению во время процедуры",
      "При ежедневном 10-минутном использовании заряда хватит до 35 дней",
    ],
    //related: ["yandeks-yndx-00524-white"]
  },
  // <<< massager <<<
  // >>> Kettles >>>
  // READY
  {
    id: "xiaomi-mi-smart-kettle-pro",
    nameRu: "Xiaomi Mi Smart Kettle Pro",
    image: "./images/pages/smart/goods/xiaomi-mi-smart-kettle-pro.webp",
    imageSmall: "./images/pages/smart/goods/xiaomi-mi-smart-kettle-pro.webp",
    link: "https://shop.mts.by/smart-house/xiaomi-mi-smart-kettle-pro-white/",
    group: "kettles",
    app: ["mi"],
    list: [
      "Объема 1,7 литра хватит на 8 чашек горячих напитков",
      "Прозрачная колба изготовлена из боросиликатного стекла, которое отлично выдерживает термические удары и механические повреждения",
      "Оснащён четырёхуровневой систему защиты. Чайник не боится перепадов температур и напряжения в сети, а также автоматически выключается после вскипания или при отсутствии в колбе воды",
    ],
    related: ["yandeks-yndx-0007-white"]
  },
  // READY
  {
    id: "xiaomi-electric-glass-kettle",
    nameRu: "Xiaomi Electric Glass Kettle",
    image: "./images/pages/smart/goods/xiaomi-electric-glass-kettle.webp",
    imageSmall: "./images/pages/smart/goods/xiaomi-electric-glass-kettle.webp",
    link: "https://shop.mts.by/smart-house/xiaomi-electric-glass-kettle/",
    group: "kettles",
    app: ["mi"],
    list: [
      "Оснащен прозрачной колбой из боросиликатного стекла, которое отлично выдерживает термические удары и механические повреждения, а также служит долго и является на 100% безопасным материалом.",
      "Высокая мощность в 2200Вт.",
      "Xiaomi Electric Glass Kettle получил четырехуровневую систему защиты. Он не боится перепадов температур и напряжения в сети, а также автоматически выключается после вскипания или при отсутствии в колбе воды.",
    ],
    related: ["yandeks-yndx-0007-white"]
  },
  // READY
  {
    id: "xiaomi-electric-kettle-2-white",
    nameRu: "Xiaomi Electric Kettle 2",
    image: "./images/pages/smart/goods/xiaomi-electric-kettle-2-white.webp",
    imageSmall: "./images/pages/smart/goods/xiaomi-electric-kettle-2-white.webp",
    link: "https://shop.mts.by/smart-house/xiaomi-electric-kettle-2-white/",
    group: "kettles",
    app: ["mi"],
    list: [
      "При мощности электрочайника в 1800 Вт вода вскипает за 5 минут. Ускоряет процесс и обеспечивает равномерный нагрев утолщенная пластинка из алюминия.",
      "В качестве материала емкости использована нержавеющая сталь 304. Материал выдерживает нагревание до 900 градусов, защищен от коррозии и окисления, на нем не остается накипи.",
      "Цельный бесшовный корпус прибора не боится ударов и легко моется.",
    ],
    related: ["yandeks-yndx-0007-white"]
  },
  // <<< Kettles <<<
  // >>> socket >>>
  // TODO! \ QUESTION
  {
    id: "yandeks-yndx-0007-white",
    nameRu: "Яндекс YNDX-0007",
    image: "./images/pages/smart/goods/yandeks-yndx-0007-white.webp",
    imageSmall: "./images/pages/smart/goods/yandeks-yndx-0007-white.webp",
    link: "https://shop.mts.by/smart-house/sensors/yandeks-yndx-0007-white/",
    group: "socket",
    app: ["alice"],
    list: [
      "Наблюдайте за происходящим вокруг дома, захватывая большую площадь благодаря широкому углу обзора в 130°",
      "Получайте предупреждения о подозрительной активности прямо на телефон в реальном времени",
      "Подключите 4 наружных камер к одному внутреннему приёмнику, чтобы максимально обезопасить себя и быть в курсе происходящего",
      "Выберите подходящий способ хранения: внутренний приемник может хранить видео через локальную TF-карту; USB-накопитель; трехдневное динамическое облачное хранилище",
    ],
    //related: ["yandeks-yndx-00524-white"]
  },
  {
    id: "xiaomi-smart-plug-2",
    nameRu: "Xiaomi Smart Plug 2",
    image: "./images/pages/smart/goods/xiaomi-smart-plug-2.webp",
    imageSmall: "./images/pages/smart/goods/xiaomi-smart-plug-2.webp",
    link: "https://shop.mts.by/smart-house/xiaomi-smart-plug-2/",
    group: "socket",
    app: ["mi"],
    list: [
      "Управляйте бытовыми приборами дистанционно, превращая любое из них в смарт-устройство через Mi Home App",
      "Настройте голосовое управление с Amazon Alexa, Google Assistant, Алиса",
      "Интегрируйте розетку в систему умного дома. Мыслите шире и придумывайте различные умные сценарии использования в приложении Mi Home",
      "Отслеживайте энергопотребление с помощью таймера включения/ выключения",
    ],
    //related: ["yandeks-yndx-00524-white"]
  },
  // <<< socket <<<
  // >>> Table Lamp >>>
  // READY
  {
    id: "xiaomi-mi-led-desk-lamp-1s-white",
    nameRu: "Xiaomi Mi LED Desk Lamp 1S",
    image: "./images/pages/smart/goods/xiaomi-mi-led-desk-lamp-1s-white.webp",
    imageSmall: "./images/pages/smart/goods/xiaomi-mi-led-desk-lamp-1s-white.webp",
    link: "https://shop.mts.by/smart-house/xiaomi-mi-led-desk-lamp-1s-white/",
    group: "table-lamp",
    app: ["mi"],
    list: [
      "Управляйте лампой через Google Ассистента, Alexa, Siri, а также приложения Mi Home App и Apple Homekit.",
      "Регулируйте температуру и яркость освещения",
      "Настраивайте собственный сценарии освещения в утренние часы и вечернее время",
      "Заводите таймер выключения для комфортного засыпания",
    ],
    //related: ["yandeks-yndx-00524-white"]
  },
  // <<< Table Lamp <<<
  // >>> Smart Blender >>>
  // READY
  {
    id: "xiaomi-smart-blender-white",
    nameRu: "Xiaomi Smart Blender",
    image: "./images/pages/smart/goods/xiaomi-smart-blender-white.webp",
    imageSmall: "./images/pages/smart/goods/xiaomi-smart-blender-white.webp",
    link: "https://shop.mts.by/smart-house/smart-technology/xiaomi-smart-blender-white/",
    group: "smart-blender",
    app: ["mi"],
    list: [
      "Мощный двигатель 1000 Вт, холодное и горячее смешивание в двух режимах, 9 скоростей смешивания для мягких и твердых продуктов, 8 лезвий из стали для быстрой резки под любыми углами, рассчитан на 120 мл горячих и 160 мм холодных напитков",
      "Чаша из прочного боросиликатного стекла выдерживает как быстрый нагрев, так и охлаждение",
      "Функция отложенного старта (до 12 часов) позволяет запланировать удобное время для приготовления напитка, чтобы насладиться им утром или вечером.",
      "Блендер поддерживает интеллектуальное управление через фирменное приложение Mi Home, в котором также доступны различные онлайн-рецепты.",
    ],
    //related: ["yandeks-yndx-00524-white"]
  },
  // <<< Smart Blender <<<
  // >>> ip cam complex >>>
  // READY
  {
    id: "xiaomi-mi-wireless-outdoor-security-camera-1080p-set",
    nameRu: "Xiaomi Mi Wireless Outdoor Security Camera 1080p Set",
    image: "./images/pages/smart/goods/xiaomi-mi-wireless-outdoor-security-camera-1080p-set.webp",
    imageSmall: "./images/pages/smart/goods/xiaomi-mi-wireless-outdoor-security-camera-1080p-set.webp",
    link: "https://shop.mts.by/smart-house/xiaomi-mi-wireless-outdoor-security-camera-1080p-set/",
    group: "ip-cam-complex",
    app: ["mi"],
    list: [
      "Наблюдайте за происходящим вокруг дома, захватывая большую площадь благодаря широкому углу обзора в 130°",
      "Получайте предупреждения о подозрительной активности прямо на телефон в реальном времени",
      "Подключите 4 наружных камер к одному внутреннему приёмнику, чтобы максимально обезопасить себя и быть в курсе происходящего",
      "Выберите подходящий способ хранения: внутренний приемник может хранить видео через локальную TF-карту; USB-накопитель; трехдневное динамическое облачное хранилище",
    ],
    //related: ["yandeks-yndx-00524-white"]
  },
  // READY
  {
    id: "xiaomi-mi-wireless-outdoor-security-camera-1080p",
    nameRu: "Xiaomi Mi Wireless Outdoor Security Camera 1080p",
    image: "./images/pages/smart/goods/xiaomi-mi-wireless-outdoor-security-camera-1080p.webp",
    imageSmall: "./images/pages/smart/goods/xiaomi-mi-wireless-outdoor-security-camera-1080p.webp",
    link: "https://shop.mts.by/smart-house/xiaomi-mi-wireless-outdoor-security-camera-1080p/",
    group: "ip-cam-complex",
    app: ["mi"],
    list: [
      "Наблюдайте за происходящим вокруг дома, захватывая большую площадь благодаря широкому углу обзора в 130°",
      "Получайте предупреждения о подозрительной активности прямо на телефон в реальном времени",
      "Подключите 4 наружных камер к одному внутреннему приёмнику, чтобы максимально обезопасить себя и быть в курсе происходящего",
      "Выберите подходящий способ хранения: внутренний приемник может хранить видео через локальную TF-карту; USB-накопитель; трехдневное динамическое облачное хранилище",
    ],
    //related: ["yandeks-yndx-00524-white"]
  },
  // <<< ip cam complex <<<
  // >>> LED Strip >>>
  // READY
  {
    id: "xiaomi-smart-lightstrip",
    nameRu: "Xiaomi Smart Lightstrip",
    image: "./images/pages/smart/goods/xiaomi-smart-lightstrip.webp",
    imageSmall: "./images/pages/smart/goods/xiaomi-smart-lightstrip.webp",
    link: "https://shop.mts.by/smart-house/sensors/xiaomi-smart-lightstrip/",
    group: "led-strip",
    app: ["mi"],
    list: [
      "Lightstrip светит и реагирует на звук благодаря встроенному микрофону. Теперь можно создать собственную цветомузыку в такт любимым трекам.",
      "8 режимов свечения и 5 динамических эффектов, а также пользовательские настройки.",
      "Возможна интеграция в систему умного дома с приложением Mi Home.",
    ],
    //related: ["yandeks-yndx-00524-white"]
  },
  // READY
  {
    id: "xiaomi-smart-lightstrip-pro",
    nameRu: "Xiaomi Smart Lightstrip Pro",
    image: "./images/pages/smart/goods/xiaomi-smart-lightstrip-pro.webp",
    imageSmall: "./images/pages/smart/goods/xiaomi-smart-lightstrip-pro.webp",
    link: "https://shop.mts.by/smart-house/sensors/xiaomi-smart-lightstrip-pro/",
    group: "led-strip",
    app: ["mi"],
    list: [
      "Lightstrip Pro не просто светит, но и реагирует на звук благодаря встроенному микрофону. Теперь можно создать собственную цветомузыку в такт любимым трекам.",
      "8 режимов свечения и 4 динамических эффекта, а также более 100 настроек. Для каждой конфигурации доступны три уровня чувствительности. Имеет мощное трехмерное освещение.",
      "Имеются режимы «Теплый камин» и «Северное сияние». Возможна интеграция в систему умного дома с приложением Mi Home.",
    ],
    //related: ["yandeks-yndx-00524-white"]
  },
  // READY
  {
    id: "xiaomi-smart-lightstrip-pro-extension",
    nameRu: "Xiaomi Smart Lightstrip Pro Extension (удлинитель)",
    image: "./images/pages/smart/goods/xiaomi-smart-lightstrip-pro-extension.webp",
    imageSmall: "./images/pages/smart/goods/xiaomi-smart-lightstrip-pro-extension.webp",
    link: "https://shop.mts.by/smart-house/sensors/xiaomi-smart-lightstrip-pro-extension/",
    group: "led-strip",
    app: ["mi"],
    list: [
      "Позволяет увеличить светодиодные ленты Xiaomi Smart Lightstrip и Xiaomi Smart Lightstrip Pro",
      "Длина 1 м, мощность 7 Вт.",
    ],
    //related: ["yandeks-yndx-00524-white"]
  },
  // <<< LED Strip <<<
  // >>> TV >>>
  // READY
  {
    id: "xiaomi-tv-a2",
    nameRu: 'Xiaomi TV A2 32", 43", 50", 55"',
    image: "./images/pages/smart/goods/xiaomi-tv-a2.webp",
    imageSmall: "./images/pages/smart/goods/xiaomi-tv-a2.webp",
    link: "https://shop.mts.by/tv/tv2/xiaomi/",
    group: "tv",
    app: ["mi"],
    list: [
      "В МТС представлены ТВ разных брендов",
      "Большой выбор диагоналей",
      "Удобная рассрочка до 24 месяцев без первоначального взноса",
      "Ассортимент регулярно дополняется новыми моделями",
    ],
    related: ["xiaomi-tv-box-s-2nd-gen"]
  },
  // READY
  {
    id: "xiaomi-tv-q2",
    nameRu: 'Xiaomi TV Q2 50", 55" и 65"',
    image: "./images/pages/smart/goods/xiaomi-tv-q2.webp",
    imageSmall: "./images/pages/smart/goods/xiaomi-tv-q2.webp",
    link: "https://shop.mts.by/tv/tv2/xiaomi/",
    group: "tv",
    app: ["mi"],
    list: [
      "В МТС представлены ТВ разных брендов",
      "Большой выбор диагоналей",
      "Удобная рассрочка до 24 месяцев без первоначального взноса",
      "Ассортимент регулярно дополняется новыми моделями",
    ],
    related: ["xiaomi-tv-box-s-2nd-gen"]
  },
  // READY
  {
    id: "lg-tv",
    nameRu: 'LG 32LQ570B6LA, 43UR81006LJ, 50UR81006LJ, 55UR81006LJ и 65UR81006LJ',
    image: "./images/pages/smart/goods/lg-tv.webp",
    imageSmall: "./images/pages/smart/goods/lg-tv.webp",
    link: "https://shop.mts.by/tv/tv2/lg/",
    group: "tv",
    app: ["mi"],
    list: [
      "В МТС представлены ТВ разных брендов",
      "Большой выбор диагоналей",
      "Удобная рассрочка до 24 месяцев без первоначального взноса",
      "Ассортимент регулярно дополняется новыми моделями",
    ],
    related: ["xiaomi-tv-box-s-2nd-gen"]
  },
  // READY
  {
    id: "iffalcon-tv",
    nameRu: 'iFFalcon IFF32S52, IFF43Q73, IFF50Q73, IFF55Q73, IFF65Q73, IFF75Q73',
    image: "./images/pages/smart/goods/iffalcon-tv.webp",
    imageSmall: "./images/pages/smart/goods/iffalcon-tv.webp",
    link: "https://shop.mts.by/tv/tv2/iffalcon/",
    group: "tv",
    app: ["mi"],
    list: [
      "В МТС представлены ТВ разных брендов",
      "Большой выбор диагоналей",
      "Удобная рассрочка до 24 месяцев без первоначального взноса",
      "Ассортимент регулярно дополняется новыми моделями",
    ],
    related: ["xiaomi-tv-box-s-2nd-gen"]
  },
  // READY \\ QUESTION
  {
    id: "xiaomi-mi-tv-a2-fhd-43",
    nameRu: 'Xiaomi A2 43 FHD',
    image: "./images/pages/smart/goods/xiaomi-mi-tv-a2-fhd-43.webp",
    imageSmall: "./images/pages/smart/goods/xiaomi-mi-tv-a2-fhd-43.webp",
    link: "https://shop.mts.by/tv/tv2/xiaomi-mi-tv-a2-fhd-43",
    group: "tv",
    app: ["mi"],
    list: [
      "В МТС представлены ТВ разных брендов",
      "Большой выбор диагоналей",
      "Удобная рассрочка до 24 месяцев без первоначального взноса",
      "Ассортимент регулярно дополняется новыми моделями",
    ],
    related: ["xiaomi-tv-box-s-2nd-gen"]
  },
  // READY \\ QUESTION
  {
    id: "yandeks-s-alisoy-55-",
    nameRu: 'Яндекса с Алисой 43", 50", 55"',
    image: "./images/pages/smart/goods/yandeks-s-alisoy-55-.webp",
    imageSmall: "./images/pages/smart/goods/yandeks-s-alisoy-55-.webp",
    link: "https://shop.mts.by/tv/tv2/yandeks/",
    group: "tv",
    app: ["alice"],
    list: [
      "В МТС представлены ТВ разных брендов",
      "Большой выбор диагоналей",
      "Удобная рассрочка до 24 месяцев без первоначального взноса",
      "Ассортимент регулярно дополняется новыми моделями",
    ],
    related: ["yandeks-yndx-0006-chernyy"]
  },
  // HIDDEN
  //{
  //  id: "yandeks-s-alisoy-55-",
  //  nameRu: 'Яндекса с Алисой 55"',
  //  image: "./images/pages/smart/goods/yandeks-s-alisoy-55-.webp",
  //  imageSmall: "./images/pages/smart/goods/yandeks-s-alisoy-55-.webp",
  //  link: "https://shop.mts.by/tv/tv2/yandeks-s-alisoy-55-/",
  //  group: "tv",
  //  app: ["alice"],
  //  list: [
  //    "В МТС представлены ТВ разных брендов",
  //    "Большой выбор диагоналей",
  //    "Удобная рассрочка до 24 месяцев без первоначального взноса",
  //    "Ассортимент регулярно дополняется новыми моделями",
  //  ],
  //  related: ["yandeks-yndx-0006-chernyy"]
  //},
  //// READY \\ QUESTION
  //{
  //  id: "yandeks-s-alisoy-50-",
  //  nameRu: 'Яндекса с Алисой 50"',
  //  image: "./images/pages/smart/goods/yandeks-s-alisoy-50-.webp",
  //  imageSmall: "./images/pages/smart/goods/yandeks-s-alisoy-50-.webp",
  //  link: "https://shop.mts.by/tv/tv2/yandeks-s-alisoy-50-/",
  //  group: "tv",
  //  app: ["alice"],
  //  list: [
  //    "В МТС представлены ТВ разных брендов",
  //    "Большой выбор диагоналей",
  //    "Удобная рассрочка до 24 месяцев без первоначального взноса",
  //    "Ассортимент регулярно дополняется новыми моделями",
  //  ],
  //  related: ["yandeks-yndx-0006-chernyy"]
  //},
  //// READY \\ QUESTION
  //{
  //  id: "yandeks-s-alisoy-43-",
  //  nameRu: 'Яндекс с Алисой 43"',
  //  image: "./images/pages/smart/goods/yandeks-s-alisoy-43-.webp",
  //  imageSmall: "./images/pages/smart/goods/yandeks-s-alisoy-43-.webp",
  //  link: "https://shop.mts.by/tv/tv2/yandeks-s-alisoy-43-/",
  //  group: "tv",
  //  app: ["alice"],
  //  list: [
  //    "В МТС представлены ТВ разных брендов",
  //    "Большой выбор диагоналей",
  //    "Удобная рассрочка до 24 месяцев без первоначального взноса",
  //    "Ассортимент регулярно дополняется новыми моделями",
  //  ],
  //  related: ["yandeks-yndx-0006-chernyy"]
  //},
  // READY \\ QUESTION
  {
    id: "yandeks-stantsiya-s-alisoy-50",
    nameRu: 'Яндекс ТВ Станция с Алисой 43", 50"',
    image: "./images/pages/smart/goods/yandeks-stantsiya-s-alisoy-50.webp",
    imageSmall: "./images/pages/smart/goods/yandeks-stantsiya-s-alisoy-50.webp",
    link: "https://shop.mts.by/tv/tv2/yandeks/",
    group: "tv",
    app: ["alice"],
    list: [
      "В МТС представлены ТВ разных брендов",
      "Большой выбор диагоналей",
      "Удобная рассрочка до 24 месяцев без первоначального взноса",
      "Ассортимент регулярно дополняется новыми моделями",
    ],
    related: ["yandeks-yndx-0006-chernyy"]
  },
  // HIDDEN
  //{
  //  id: "yandeks-stantsiya-s-alisoy-43",
  //  nameRu: 'Яндекс ТВ Станция с Алисой 43"',
  //  image: "./images/pages/smart/goods/yandeks-stantsiya-s-alisoy-43.webp",
  //  imageSmall: "./images/pages/smart/goods/yandeks-stantsiya-s-alisoy-43.webp",
  //  link: "https://shop.mts.by/tv/tv2/yandeks-stantsiya-s-alisoy-43/",
  //  group: "tv",
  //  app: ["alice"],
  //  list: [
  //    "В МТС представлены ТВ разных брендов",
  //    "Большой выбор диагоналей",
  //    "Удобная рассрочка до 24 месяцев без первоначального взноса",
  //    "Ассортимент регулярно дополняется новыми моделями",
  //  ],
  //  related: ["yandeks-yndx-0006-chernyy"]
  //},
  //// READY \\ QUESTION
  //{
  //  id: "yandeks-stantsiya-s-alisoy-50",
  //  nameRu: 'Яндекс ТВ Станция с Алисой 50"',
  //  image: "./images/pages/smart/goods/yandeks-stantsiya-s-alisoy-50.webp",
  //  imageSmall: "./images/pages/smart/goods/yandeks-stantsiya-s-alisoy-50.webp",
  //  link: "https://shop.mts.by/tv/tv2/yandeks-s-alisoy-50/",
  //  group: "tv",
  //  app: ["alice"],
  //  list: [
  //    "В МТС представлены ТВ разных брендов",
  //    "Большой выбор диагоналей",
  //    "Удобная рассрочка до 24 месяцев без первоначального взноса",
  //    "Ассортимент регулярно дополняется новыми моделями",
  //  ],
  //  related: ["yandeks-yndx-0006-chernyy"]
  //},
  // READY \\ QUESTION
  {
    id: "yandeks-stantsiya-pro-s-alisoy-65",
    nameRu: 'Яндекс ТВ Станция Про с Алисой 55", 65"',
    image: "./images/pages/smart/goods/yandeks-stantsiya-pro-s-alisoy-65.webp",
    imageSmall: "./images/pages/smart/goods/yandeks-stantsiya-pro-s-alisoy-65.webp",
    link: "https://shop.mts.by/tv/tv2/yandeks/",
    group: "tv",
    app: ["alice"],
    list: [
      "В МТС представлены ТВ разных брендов",
      "Большой выбор диагоналей",
      "Удобная рассрочка до 24 месяцев без первоначального взноса",
      "Ассортимент регулярно дополняется новыми моделями",
    ],
    related: ["yandeks-yndx-0006-chernyy"]
  },
  // HIDDEN
  //{
  //  id: "yandeks-stantsiya-pro-s-alisoy-55-",
  //  nameRu: 'Яндекс ТВ Станция Про с Алисой 55"',
  //  image: "./images/pages/smart/goods/yandeks-stantsiya-pro-s-alisoy-55-.webp",
  //  imageSmall: "./images/pages/smart/goods/yandeks-stantsiya-pro-s-alisoy-55-.webp",
  //  link: "https://shop.mts.by/tv/tv2/yandeks-stantsiya-pro-s-alisoy-55-/",
  //  group: "tv",
  //  app: ["alice"],
  //  list: [
  //    "В МТС представлены ТВ разных брендов",
  //    "Большой выбор диагоналей",
  //    "Удобная рассрочка до 24 месяцев без первоначального взноса",
  //    "Ассортимент регулярно дополняется новыми моделями",
  //  ],
  //  related: ["yandeks-yndx-0006-chernyy"]
  //},
  //// READY \\ QUESTION
  //{
  //  id: "yandeks-stantsiya-pro-s-alisoy-65",
  //  nameRu: 'Яндекс ТВ Станция Про с Алисой 65"',
  //  image: "./images/pages/smart/goods/yandeks-stantsiya-pro-s-alisoy-65.webp",
  //  imageSmall: "./images/pages/smart/goods/yandeks-stantsiya-pro-s-alisoy-65.webp",
  //  link: "https://shop.mts.by/tv/tv2/yandeks-stantsiya-pro-s-alisoy-65/",
  //  group: "tv",
  //  app: ["alice"],
  //  list: [
  //    "В МТС представлены ТВ разных брендов",
  //    "Большой выбор диагоналей",
  //    "Удобная рассрочка до 24 месяцев без первоначального взноса",
  //    "Ассортимент регулярно дополняется новыми моделями",
  //  ],
  //  related: ["yandeks-yndx-0006-chernyy"]
  //},
  // <<< TV <<<
  // >>> Convector heater >>>
  // READY
  {
    id: "xiaomi-mi-smart-space-heater-s-belyy",
    nameRu: "Xiaomi Mi Smart Space Heater S",
    image: "./images/pages/smart/goods/xiaomi-mi-smart-space-heater-s-belyy.webp",
    imageSmall: "./images/pages/smart/goods/xiaomi-mi-smart-space-heater-s-belyy.webp",
    link: "https://shop.mts.by/smart-house/smart-technology/xiaomi-mi-smart-space-heater-s-belyy/",
    group: "convector-heater",
    app: ["mi"],
    list: [
      "Поддерживает регулировку температуры в пределах 16–28 °C, имеет двойной датчик температуры и интеллектуальную поддержку тепла.",
      "Имеет сенсорный дисплей, влагозащиту IPX4, нагревательный элемент мощностью 2200Вт.",
      "При опрокидывании или перегреве устройство автоматически отключается, что делает его более безопасным в использовании.",
      "Возможна интеграция в систему умного дома с приложением Mi Home и удаленное управление.",
    ],
    //related: ["yandeks-yndx-00524-white"]
  },
  // READY
  {
    id: "xiaomi-smart-tower-heater-lite-white",
    nameRu: "Xiaomi Smart Tower Heater Lite",
    image: "./images/pages/smart/goods/xiaomi-smart-tower-heater-lite-white.webp",
    imageSmall: "./images/pages/smart/goods/xiaomi-smart-tower-heater-lite-white.webp",
    link: "https://shop.mts.by/smart-house/smart-technology/xiaomi-smart-tower-heater-lite-white/",
    group: "convector-heater",
    app: ["mi"],
    list: [
      "Четыре режима работы: горячий воздух для сильных морозов, теплый - в межсезонье, естественный обдув увеличивает поток воздуха, режим постоянной температуры позволяет поддерживать уровень 22-28 °C.",
      "Мощность 2000 Вт, защита от перегрева и опрокидывания, 30 - секунднуя функция охлаждения.",
      "Возможна интеграция в систему умного дома с приложением Mi Home и удаленное управление."
    ],
    //related: ["yandeks-yndx-00524-white"]
  },
  // <<< Convector heater <<<
  // >>> Food feeder >>>
  // READY
  {
    id: "xiaomi-smart-pet-food-feeder",
    nameRu: "Умная автоматическая кормушка для животных Xiaomi Smart Pet Food Feeder",
    image: "./images/pages/smart/goods/xiaomi-smart-pet-food-feeder.webp",
    imageSmall: "./images/pages/smart/goods/xiaomi-smart-pet-food-feeder.webp",
    link: "https://shop.mts.by/smart-house/smart-technology/xiaomi-smart-pet-food-feeder/",
    group: "pet-items",
    //group: "food-feeder",
    app: ["mi"],
    list: [
      "Устройство обеспечивает автоматическую дозированную подачу сухого корма в соответствии с установленными интервалами",
      "Контейнер вмещает около 1,8 килограмм пищи, которой хватит для питания взрослой кошки или небольшой собаки в течение 15–20 дней",
      "Трехуровневая система защиты помогает сохранять лакомство сухим и свежим в течение долгого времени",
    ],
    //related: ["yandeks-yndx-00524-white"]
  },
  // <<< Food feeder <<<
  // >>> Pet Fountain >>>
  // READY
  {
    id: "xiaomi-smart-pet-fountain",
    nameRu: "Диспенсер для воды Xiaomi Smart Pet Fountain",
    image: "./images/pages/smart/goods/xiaomi-smart-pet-fountain.webp",
    imageSmall: "./images/pages/smart/goods/xiaomi-smart-pet-fountain.webp",
    link: "https://shop.mts.by/smart-house/smart-technology/xiaomi-smart-pet-fountain/",
    group: "pet-items",
    //group: "pet-fountain",
    app: ["mi"],
    list: [
      "Встроенный набор специальных фильтров, которые позволяют тщательно очищать воду и насыщать ее кислородом",
      "Оснащена двухлитровым объемом бака для воды и системой умной индикации, которая позволяет настроить автоматическую подачу воды",
      "Несколько встроенных уровней безопасности исключают короткое замыкание",
    ],
    //related: ["yandeks-yndx-00524-white"]
  },
  // <<< Pet Fountain <<<
  // >>> Portable Compressor >>>
  // READY
  {
    id: "xiaomi-portable-electric-air-2-black",
    nameRu: "Xiaomi Portable Electric Air 2",
    image: "./images/pages/smart/goods/xiaomi-portable-electric-air-2-black.webp",
    imageSmall: "./images/pages/smart/goods/xiaomi-portable-electric-air-2-black.webp",
    link: "https://shop.mts.by/smart-house/smart-technology/xiaomi-portable-electric-air-2-black/",
    group: "portable-compressor",
    //app: ["mi"],
    list: [
      "6 режимов работы накачивания: мяч, велосипед, мотоцикл, автомобиль, электросамокат и ручной.",
      "Корректировать уровень давления можно кнопками на корпусе гаджета.",
      "Присутствует LED-фонарь и комплект различных насадок.",
      "Давление до 10,3 Бар и встроенный манометр.",
    ],
    //related: ["yandeks-yndx-00524-white"]
  },
  // <<< Portable Compressor <<<
  // >>> pressure-washer >>>
  // READY
  {
    id: "xiaomi-cordless-pressure-washer",
    nameRu: "Xiaomi Cordless Pressure Washer",
    image: "./images/pages/smart/goods/xiaomi-cordless-pressure-washer.webp",
    imageSmall: "./images/pages/smart/goods/xiaomi-cordless-pressure-washer.webp",
    link: "https://shop.mts.by/smart-house/smart-technology/xiaomi-cordless-pressure-washer/",
    group: "pressure-washer",
    //app: ["mi"],
    list: [
      "Беспроводная мойка оснащена двухпоршневым насосом с производительностью до 180л/ч.",
      "Имеет съемный аккумулятор емкостью 2000 мАч, зарядный порт Type-C с возможностью быстрой зарядки примерно за 1,3ч., и гибкий шланг 6 метров длиной.",
      "Класс водонепроницаемости IPX6.",
      "Имеет 5 режимов: режим для очистки засоров, температура 20 градусов, температура 40градусов, режим высокого давления, режим «пены»/ «распыления».",
    ],
    //related: ["yandeks-yndx-00524-white"]
  },
  // <<< pressure-washer <<<
  // >>> Sensor Controller >>>
  // READY
  {
    id: "xiaomi-smart-home-hub-2",
    nameRu: "Xiaomi Smart Home Hub 2",
    image: "./images/pages/smart/goods/xiaomi-smart-home-hub-2.webp",
    imageSmall: "./images/pages/smart/goods/xiaomi-smart-home-hub-2.webp",
    link: "https://shop.mts.by/smart-house/xiaomi-smart-home-hub-2/",
    group: "sensor-controller",
    app: ["mi"],
    list: [
      "Подключайте контроллер ко всем устройствам умного дома для одновременной коммуникации с разными устройствами и создавайте собственный сценария взаимодействия устройств умного дома",
      "Управляйте всеми устройствами умного дома с помощью голосового помощника Siri, приложений HomeKit и Mi Home App",
      "Назначьте кнопке различные действия для одного нажатия, двойного нажатия и долгого нажатия, чтобы управлять несколькими устройствами",
    ],
    related: ["yandeks-yndx-00524-white"]
  },
  // <<< Sensor Controller <<<
  // >>> Leak Sensor >>>
  // READY
  {
    id: "yandeks-yndx-00521-white",
    nameRu: "Яндекс YNDX-00521",
    image: "./images/pages/smart/goods/yandeks-yndx-00521-white.webp",
    imageSmall: "./images/pages/smart/goods/yandeks-yndx-00521-white.webp",
    link: "https://shop.mts.by/smart-house/sensors/yandeks-yndx-00521-white/",
    group: "leak-sensor",
    app: ["alice"],
    list: [
      "Алиса предупредит Вас, если обнаружит протечку.",
      "Возможно настроить отключение умных розеток при обнаружении протечки.",
      "В приложении Умный дом с Алисой можно просмотреть информацию об устройстве.",
    ],
    //related: ["xiaomi-mi-smart-air-fryer-15"]
  },
  // <<< Leak Sensor <<<
  // >>> Air Humidifier >>>
  // READY
  {
    id: "xiaomi-smart-antibacterial-humidifier-2-white",
    nameRu: "Xiaomi Smart Antibacterial Humidifier 2",
    image: "./images/pages/smart/goods/xiaomi-smart-antibacterial-humidifier-2-white.webp",
    imageSmall: "./images/pages/smart/goods/xiaomi-smart-antibacterial-humidifier-2-white.webp",
    link: "https://shop.mts.by/smart-house/smart-technology/xiaomi-smart-antibacterial-humidifier-2-white/",
    group: "air-humidifier",
    app: ["mi"],
    list: [
      "Управляйте увлажнителем через приложение или умного ассистента Yandex Алиса",
      "Настраивайте автоматическое время включения и выключения, чтобы к Вашему приходу воздух был чистым, как в горах",
    ],
    //related: ["xiaomi-mi-smart-air-fryer-15"]
  },
  // READY
  {
    id: "xiaomi-humidifier-2-lite-white",
    nameRu: "Xiaomi Humidifier 2 Lite",
    image: "./images/pages/smart/goods/xiaomi-humidifier-2-lite-white.webp",
    imageSmall: "./images/pages/smart/goods/xiaomi-humidifier-2-lite-white.webp",
    link: "https://shop.mts.by/smart-house/smart-technology/xiaomi-humidifier-2-lite-white/",
    group: "air-humidifier",
    app: ["mi"],
    list: [
      "Управляйте увлажнителем через приложение или умного ассистента Yandex Алиса",
      "Настраивайте автоматическое время включения и выключения, чтобы к Вашему приходу воздух был чистым, как в горах",
    ],
    //related: ["xiaomi-mi-smart-air-fryer-15"]
  },
  // <<< Air Humidifier <<<
  // >>> IP-cam >>>
  // READY
  {
    id: "xiaomi-smart-camera-c200",
    nameRu: "Xiaomi Smart Camera C200",
    image: "./images/pages/smart/goods/xiaomi-smart-camera-c200.webp",
    imageSmall: "./images/pages/smart/goods/xiaomi-smart-camera-c200.webp",
    link: "https://shop.mts.by/smart-house/smart-technology/xiaomi-smart-camera-c200/",
    group: "ip-cam",
    app: ["mi"],
    list: [
      "Следите за тем, что видит камера, в любой момент времени благодаря удаленному доступу с выводом видео на экран смартфона, планшета, Mi AI Smart Display Speaker и Mi TV.",
      "Управляйте панорамой через приложение Mi Home для полного обзора.",
      "Если вы хотите отключить мониторинг камерой, активируйте функцию физической защиты в приложении Mi Home. При этом объектив камеры автоматически повернется вниз, внутрь корпуса, для вашей защиты.",
    ],
    //related: ["xiaomi-mi-smart-air-fryer-15"]
  },
  // READY
  {
    id: "xiaomi-smart-camera-c300",
    nameRu: "Xiaomi Smart Camera C300",
    image: "./images/pages/smart/goods/xiaomi-smart-camera-c300.webp",
    imageSmall: "./images/pages/smart/goods/xiaomi-smart-camera-c300.webp",
    link: "https://shop.mts.by/smart-house/smart-technology/xiaomi-smart-camera-c300/",
    group: "ip-cam",
    app: ["mi"],
    list: [
      "Следите за тем, что видит камера, в любой момент времени благодаря удаленному доступу с выводом видео на экран смартфона, планшета, Mi AI Smart Display Speaker и Mi TV.",
      "Управляйте панорамой через приложение Mi Home для полного обзора.",
      "Если вы хотите отключить мониторинг камерой, активируйте функцию физической защиты в приложении Mi Home. При этом объектив камеры автоматически повернется вниз, внутрь корпуса, для вашей защиты.",
    ],
    //related: ["xiaomi-mi-smart-air-fryer-15"]
  },
  // <<< IP-cam <<<
  // >>> ROBOT VACUUM >>>
  // READY
  {
    id: "xiaomi-robot-vacuum-e10-white",
    nameRu: "Xiaomi Robot Vacuum E10",
    image: "./images/pages/smart/goods/xiaomi-robot-vacuum-e10-white.webp",
    imageSmall: "./images/pages/smart/goods/xiaomi-robot-vacuum-e10-white.webp",
    link: "https://shop.mts.by/smart-house/smart-technology/roboty-pylesosy/xiaomi-robot-vacuum-e10-white/",
    group: "robot-vacuum",
    app: ["mi"],
    list: [
      "Настраивайте графики работы",
      "Дистанционно управляйте различными регулировками и функциями пылесоса",
      "Наблюдайте в реальном времени за ходом уборки",
      "Выбирайте режим мощности от беззвучного до турборежима",
      "Управляйте с помощью умного ассистента Yandex Алиса и приложения Mi Home App",
    ],
    //related: ["xiaomi-mi-smart-air-fryer-15"]
  },
  // READY
  {
    id: "xiaomi-robot-vacuum-s10-belyy",
    nameRu: "Xiaomi Robot Vacuum S10",
    image: "./images/pages/smart/goods/xiaomi-robot-vacuum-s10-belyy.webp",
    imageSmall: "./images/pages/smart/goods/xiaomi-robot-vacuum-s10-belyy.webp",
    link: "https://shop.mts.by/smart-house/smart-technology/roboty-pylesosy/xiaomi-robot-vacuum-s10-belyy/",
    group: "robot-vacuum",
    app: ["mi"],
    list: [
      "Настраивайте графики работы",
      "Дистанционно управляйте различными регулировками и функциями пылесоса",
      "Наблюдайте в реальном времени за ходом уборки",
      "Выбирайте режим мощности от беззвучного до турборежима",
      "Управляйте с помощью умного ассистента Yandex Алиса и приложения Mi Home App",
    ],
    //related: ["xiaomi-mi-smart-air-fryer-15"]
  },
  // READY
  {
    id: "xiaomi-robot-vacuum-s10-white",
    nameRu: "Xiaomi Robot Vacuum S10+",
    image: "./images/pages/smart/goods/xiaomi-robot-vacuum-s10-white.webp",
    imageSmall: "./images/pages/smart/goods/xiaomi-robot-vacuum-s10-white.webp",
    link: "https://shop.mts.by/smart-house/smart-technology/roboty-pylesosy/xiaomi-robot-vacuum-s10-white/",
    group: "robot-vacuum",
    app: ["mi"],
    list: [
      "Настраивайте графики работы",
      "Дистанционно управляйте различными регулировками и функциями пылесоса",
      "Наблюдайте в реальном времени за ходом уборки",
      "Выбирайте режим мощности от беззвучного до турборежима",
      "Управляйте с помощью умного ассистента Yandex Алиса и приложения Mi Home App",
    ],
    //related: ["xiaomi-mi-smart-air-fryer-15"]
  },
  // READY
  {
    id: "xiaomi-robot-vacuum-x10-white",
    nameRu: "Xiaomi Robot Vacuum X10",
    image: "./images/pages/smart/goods/xiaomi-robot-vacuum-x10-white.webp",
    imageSmall: "./images/pages/smart/goods/xiaomi-robot-vacuum-x10-white.webp",
    link: "https://shop.mts.by/smart-house/smart-technology/roboty-pylesosy/xiaomi-robot-vacuum-x10-white/",
    group: "robot-vacuum",
    app: ["mi"],
    list: [
      "Настраивайте графики работы",
      "Дистанционно управляйте различными регулировками и функциями пылесоса",
      "Наблюдайте в реальном времени за ходом уборки",
      "Выбирайте режим мощности от беззвучного до турборежима",
      "Управляйте с помощью умного ассистента Yandex Алиса и приложения Mi Home App",
    ],
    //related: ["xiaomi-mi-smart-air-fryer-15"]
  },
  // READY
  {
    id: "xiaomi-robot-vacuum-s10t-black",
    nameRu: "Xiaomi Robot Vacuum S10T",
    image: "./images/pages/smart/goods/xiaomi-robot-vacuum-s10t-black.webp",
    imageSmall: "./images/pages/smart/goods/xiaomi-robot-vacuum-s10t-black.webp",
    link: "https://shop.mts.by/smart-house/smart-technology/roboty-pylesosy/xiaomi-robot-vacuum-s10t-black/",
    group: "robot-vacuum",
    app: ["mi"],
    list: [
      "Настраивайте графики работы",
      "Дистанционно управляйте различными регулировками и функциями пылесоса",
      "Наблюдайте в реальном времени за ходом уборки",
      "Выбирайте режим мощности от беззвучного до турборежима",
      "Управляйте с помощью умного ассистента Yandex Алиса и приложения Mi Home App",
    ],
    //related: ["xiaomi-mi-smart-air-fryer-15"]
  },
  // READY
  {
    id: "xiaomi-robot-vacuum-x10-plus-white",
    nameRu: "Xiaomi Robot Vacuum X10+",
    image: "./images/pages/smart/goods/xiaomi-robot-vacuum-x10-plus-white.webp",
    imageSmall: "./images/pages/smart/goods/xiaomi-robot-vacuum-x10-plus-white.webp",
    link: "https://shop.mts.by/smart-house/smart-technology/roboty-pylesosy/xiaomi-robot-vacuum-x10-plus-white/",
    group: "robot-vacuum",
    app: ["mi"],
    list: [
      "Настраивайте графики работы",
      "Дистанционно управляйте различными регулировками и функциями пылесоса",
      "Наблюдайте в реальном времени за ходом уборки",
      "Выбирайте режим мощности от беззвучного до турборежима",
      "Управляйте с помощью умного ассистента Yandex Алиса и приложения Mi Home App",
    ],
    //related: ["xiaomi-mi-smart-air-fryer-15"]
  },
  // <<< ROBOT VACUUM <<<
  // >>> air purifier >>>
  // READY
  {
    id: "xiaomi-smart-air-purifier-4-compact-white",
    nameRu: "Xiaomi Smart Air Purifier 4 Compact",
    image: "./images/pages/smart/goods/xiaomi-smart-air-purifier-4-compact-white.webp",
    imageSmall: "./images/pages/smart/goods/xiaomi-smart-air-purifier-4-compact-white.webp",
    link: "https://shop.mts.by/smart-house/smart-technology/xiaomi-smart-air-purifier-4-compact-white/",
    group: "air-purifier",
    app: ["mi"],
    list: [
      "Очиститель воздуха получил систему из трех фильтров для удаления 99,97% частиц до 0,3 мкм. Он очищает воздух от шерсти, аллергенов, пыльцы и неприятных запахов.",
      "Имеет сенсорное управление и функцию таймера. Индикаторы подскажут, когда пора менять фильтры.",
      "Очиститель воздуха может имеет ночной режим и может работать без подсветки и очень тихо.",
      "Очиститель поддерживает удаленное управление через фирменное приложению Mi Home. К вашему приходу дома будет чистый и свежий воздух.",
    ],
    //related: ["xiaomi-mi-smart-air-fryer-15"]
  },
  // READY
  {
    id: "xiaomi-smart-air-purifier-4-lite",
    nameRu: "Xiaomi Smart Air Purifier 4 Lite",
    image: "./images/pages/smart/goods/xiaomi-smart-air-purifier-4-lite.webp",
    imageSmall: "./images/pages/smart/goods/xiaomi-smart-air-purifier-4-lite.webp",
    link: "https://shop.mts.by/smart-house/smart-technology/xiaomi-smart-air-purifier-4-lite/",
    group: "air-purifier",
    app: ["mi"],
    list: [
      "Очиститель воздуха получил систему из трех фильтров для удаления 99,97% частиц до 0,3 мкм. Он очищает воздух от шерсти, аллергенов, пыльцы и неприятных запахов.",
      "Имеет сенсорное управление и функцию таймера. Индикаторы подскажут, когда пора менять фильтры.",
      "Очиститель воздуха может имеет ночной режим и может работать без подсветки и очень тихо.",
      "Очиститель поддерживает удаленное управление через фирменное приложению Mi Home. К вашему приходу дома будет чистый и свежий воздух.",
    ],
    //related: ["xiaomi-mi-smart-air-fryer-15"]
  },
  // <<< air purifier <<<
  // >>> Hair Clipper >>>
  // READY
  {
    id: "xiaomi-hair-clipper",
    nameRu: "Xiaomi Hair Clipper",
    image: "./images/pages/smart/goods/xiaomi-hair-clipper.webp",
    imageSmall: "./images/pages/smart/goods/xiaomi-hair-clipper.webp",
    link: "https://shop.mts.by/smart-house/smart-technology/xiaomi-hair-clipper/",
    group: "hair-clipper",
    app: ["mi"],
    list: [
      "Машинка получила керамические ножи с титановым покрытием",
      "На одном заряде работает до 180 минут",
      "Имеет регулировку длины от 0,5 до 1,7 мм без насадок и три насадки с регулировкой длины от 3 мм до 41мм",
    ],
    //related: ["xiaomi-mi-smart-air-fryer-15"]
  },
  // <<< Hair Clipper <<<
  // >>> Hairdryer >>>
  // READY
  {
    id: "xiaomi-water-ionic-hair-dryer-h500-silver",
    nameRu: "Xiaomi Water Ionic Hair Dryer H500",
    image: "./images/pages/smart/goods/xiaomi-water-ionic-hair-dryer-h500-silver.webp",
    imageSmall: "./images/pages/smart/goods/xiaomi-water-ionic-hair-dryer-h500-silver.webp",
    link: "https://shop.mts.by/smart-house/smart-technology/xiaomi-water-ionic-hair-dryer-h500-silver/",
    group: "hairdryer",
    app: ["mi"],
    list: [
      "Компактные габариты фена позволяют брать его с собой в любое путешествие",
      "Есть режим чередования горячего и холодного воздуха для большей эффективности",
      "Наличие технологии воздействия отрицательными ионами поможет избавиться от пушистости волос и секущихся кончиков",
    ],
    //related: ["xiaomi-mi-smart-air-fryer-15"]
  },
  // READY
  {
    id: "xiaomi-mi-ionic-hair-dryer-h300",
    nameRu: "Xiaomi Mi Ionic Hair Dryer H300",
    image: "./images/pages/smart/goods/xiaomi-mi-ionic-hair-dryer-h300.webp",
    imageSmall: "./images/pages/smart/goods/xiaomi-mi-ionic-hair-dryer-h300.webp",
    link: "https://shop.mts.by/smart-house/smart-technology/xiaomi-mi-ionic-hair-dryer-h300/",
    group: "hairdryer",
    app: ["mi"],
    list: [
      "Компактные габариты фена позволяют брать его с собой в любое путешествие",
      "Три режима использования: горячий воздух, холодный воздух и интеллектуальный режим",
      "Поддержка постоянной температуры и наличие функции ионизации поможет добится идеальной укладки.",
    ],
    //related: ["xiaomi-mi-smart-air-fryer-15"]
  },
  // READY
  {
    id: "xiaomi-compact-hair-dryer-h101-white",
    nameRu: "Xiaomi Compact Hair Dryer H101",
    image: "./images/pages/smart/goods/xiaomi-compact-hair-dryer-h101-white.webp",
    imageSmall: "./images/pages/smart/goods/xiaomi-compact-hair-dryer-h101-white.webp",
    link: "https://shop.mts.by/smart-house/smart-technology/xiaomi-compact-hair-dryer-h101-white/",
    group: "hairdryer",
    app: ["mi"],
    list: [
      "Фен имеет 6-лопастной встроенный аэродинамический вентилятор и производительный мотор на 1600 Вт, которые обеспечивают до 20 000 об/мин и скорость воздушного потока до 15 м/с. ",
      "Присутствует два температурных режима — горячий и холодный, и два режима обдува — слабый и сильный.",
      "Xiaomi Compact Hair Dryer H101 компактный и весит всего 428 грамм, поэтому поместится даже в небольшую сумку.",
    ],
    //related: ["xiaomi-mi-smart-air-fryer-15"]
  },
  // <<< Hairdryer <<<
  // >>> Shaver >>>
  // READY
  {
    id: "xiaomi-mi-electric-shaver-s500-black",
    nameRu: "Xiaomi Mi Electric Shaver S500",
    image: "./images/pages/smart/goods/xiaomi-mi-electric-shaver-s500-black.webp",
    imageSmall: "./images/pages/smart/goods/xiaomi-mi-electric-shaver-s500-black.webp",
    link: "https://shop.mts.by/smart-house/smart-technology/xiaomi-mi-electric-shaver-s500-black/",
    group: "shaver",
    app: ["mi"],
    list: [
      "Электробритва получила двухслойные режущие лезвия и интеллектуальную систему анти-зажима",
      "Предусмотрены режимы сухого и влажного бритья и система плавающей головки на 360°",
      "До 60 минут автономной работы и защита от влаги по стандарту IPX7",
    ],
    //related: ["xiaomi-mi-smart-air-fryer-15"]
  },
  // READY
  {
    id: "xiaomi-electric-shaver-s101-blue",
    nameRu: "Xiaomi Electric Shaver S101",
    image: "./images/pages/smart/goods/xiaomi-electric-shaver-s101-blue.webp",
    imageSmall: "./images/pages/smart/goods/xiaomi-electric-shaver-s101-blue.webp",
    link: "https://shop.mts.by/smart-house/smart-technology/xiaomi-electric-shaver-s101-blue/",
    group: "shaver",
    app: ["mi"],
    list: [
      "Бритва имеет умную регулировку скорости -скорость остается постоянной даже при низкой мощности или почти разряженном аккумуляторе.",
      "Бритва получила три комплекта двойных кольцевых лезвий.",
      "Независимый плавающий механизм с тремя лезвиями обеспечивает 6-стороннее бритье.",
      "Заряда аккумулятора хватит на 60 минут автономной работы.",
    ],
    //related: ["xiaomi-mi-smart-air-fryer-15"]
  },
  // READY
  {
    id: "xiaomi-uniblade-trimmer-x300",
    nameRu: "Xiaomi UniBlade Trimmer X300",
    image: "./images/pages/smart/goods/xiaomi-uniblade-trimmer-x300.webp",
    imageSmall: "./images/pages/smart/goods/xiaomi-uniblade-trimmer-x300.webp",
    link: "https://shop.mts.by/smart-house/smart-technology/xiaomi-uniblade-trimmer-x300/",
    group: "shaver",
    app: ["mi"],
    list: [
      "Триммер имеет трехходовую систему лезвий и гибкую головку, которая поворачивается в двух направлениях под углом до 40°.",
      "Предусмотрены режимы сухого и влажного бритья волос как на лице, так и на теле.",
      "До 60 минут автономной работы и защита от влаги по стандарту IPX7 в матово-черном дизайне с нескользящей рукояткой.",
      "Прекрасный триммер для обладателей чувствительной или проблемной кожи.",
    ],
    //related: ["xiaomi-mi-smart-air-fryer-15"]
  },
  // READY
  {
    id: "xiaomi-electric-shaver-s301",
    nameRu: "Xiaomi Electric Shaver S301",
    image: "./images/pages/smart/goods/xiaomi-electric-shaver-s301.webp",
    imageSmall: "./images/pages/smart/goods/xiaomi-electric-shaver-s301.webp",
    link: "https://shop.mts.by/smart-house/smart-technology/xiaomi-electric-shaver-s301/",
    group: "shaver",
    app: ["mi"],
    list: [
      "Обеспечивает комфортное бритье без выдергивания волосков благодаря трем независимым бреющим головкам, которые подстраиваются под форму лица, обеспечивая захват волосков на сложных участках. Благодаря тонким сеткам, лезвия хорошо прижимаются к коже, обеспечивая идеально чистое бритье.",
      "Имеет двухслойные режущие лезвия и интеллектуальную систему анти-зажима, автоматическую регулировку скорости.",
      "Предусмотрены режимы сухого и влажного бритья и система плавающей головки на 360°",
      "Интеллектуальный светодиодный дисплей корпуса отображает важную информацию: режим работы, включение дорожного замка, напоминание о необходимости очистки и уровень заряда батареи.",
      "Бритва поддерживает до 90 минут автономной работы и имеет защиту от влаги по стандарту IPX7.",
    ],
    //related: ["xiaomi-mi-smart-air-fryer-15"]
  },
  // <<< Shaver <<<
  // >>> hair-care-kit >>>
  // READY
  {
    id: "nabor-xiaomi-grooming-kit-pro",
    nameRu: "Xiaomi Grooming Kit Pro",
    image: "./images/pages/smart/goods/nabor-xiaomi-grooming-kit-pro.webp",
    imageSmall: "./images/pages/smart/goods/nabor-xiaomi-grooming-kit-pro.webp",
    link: "https://shop.mts.by/smart-house/smart-technology/nabor-xiaomi-grooming-kit-pro/",
    group: "hair-care-kit",
    app: ["mi"],
    list: [
      "Устройство подходит для стрижки волос, усов и бороды, а также удаления нежелательных волос в ушах и носу.",
      "Два гребня с четырьмя насадками позволяют использовать 40 разных регулировок длины.",
      "Grooming Kit Pro получил АКБ 800 мАч, который пополняется на 100% за 2 часа. Время автономной работы - 90 минут. Есть быстрой зарядка - всего 5 минут подзарядки обеспечивают до 12 минут работы.",
    ],
    //related: ["xiaomi-mi-smart-air-fryer-15"]
  },
  // <<< hair-care-kit <<<
  // >>> Multistyler >>>
  // READY
  {
    id: "dyson-airwrap-complete-long-hs05-mednyy",
    nameRu: "Dyson Airwrap Complete Long HS05",
    image: "./images/pages/smart/goods/dyson-airwrap-complete-long-hs05-mednyy.webp",
    imageSmall: "./images/pages/smart/goods/dyson-airwrap-complete-long-hs05-mednyy.webp",
    link: "https://shop.mts.by/smart-house/smart-technology/dyson-airwrap-complete-long-hs05-mednyy/",
    group: "multistyler",
    app: ["mi"],
    list: [
      "Двигатель с цифровым управлением, который обеспечивает мощнейший поток воздуха и точно регулирует его температуру благодаря интеллектуальной системе контроля, которая более 40 раз в секунду оценивает этот параметр и самостоятельно регулирует настройки. Температура всегда держится на уровне ниже +150 °C, благодаря чему волосы остаются здоровыми.",
      "Прибор подходит для создания волн и закрученных локонов, ровных и гладких причесок благодаря набору из шести насадок. Стайлер работает в трех режимах и имеет обдув холодным воздухом и ионизацию, благодаря которой использовать его можно ежедневно, не беспокоясь о здоровье волос. Отрицательные ионы помогают снизить наэлектризованность прядей, делают их более послушными.",
      "Экономия времени. Стайлер объединяет сушку и укладку, не нужно использовать фен.",
    ],
    //related: ["xiaomi-mi-smart-air-fryer-15"]
  },
  // <<< Multistyler <<<
  // >>> Toothbrush >>>
  // READY
  {
    id: "xiaomi-mi-smart-electric-toothbrush-t302-blue",
    nameRu: "Xiaomi Electric Toothbrush T302 (синий/серый)",
    image: "./images/pages/smart/goods/xiaomi-mi-smart-electric-toothbrush-t302-blue.webp",
    imageSmall: "./images/pages/smart/goods/xiaomi-mi-smart-electric-toothbrush-t302-blue.webp",
    link: "https://shop.mts.by/smart-house/smart-technology/xiaomi-mi-smart-electric-toothbrush-t302-blue/",
    group: "toothbrush",
    app: ["mi"],
    list: [
      "Electric Toothbrush T302 быстро и эффективно очистит зубы от налета и остатков пищи за счет частоты пульсации до 31 000 об/мин, бесщеточного двигателя и антибактериальной щетины DuPont, у которой на 40% больше ворсинок.",
      "Имеет 4 режима работы: для здоровых зубов, чувствительный или мягкий — для проблемных зубов, режим массажа — для бережного ухода за деснами, а режим отбеливания и полировки — для аккуратного удаления налета.",
      "В комплекте 4 разные насадки и беспроводное зарядное устройство-подставка. База вращается на 360° и позволяет быстро подзарядить щетку всего за 2 минуты (хватит на одну чистку)",
    ],
    //related: ["xiaomi-mi-smart-air-fryer-15"]
  },
  // READY
  {
    id: "xiaomi-mi-smart-electric-toothbrush-t500-white",
    nameRu: "Xiaomi Mi Smart Electric Toothbrush T500",
    image: "./images/pages/smart/goods/xiaomi-mi-smart-electric-toothbrush-t500-white.webp",
    imageSmall: "./images/pages/smart/goods/xiaomi-mi-smart-electric-toothbrush-t500-white.webp",
    link: "https://shop.mts.by/smart-house/smart-technology/xiaomi-mi-smart-electric-toothbrush-t500-white/",
    group: "toothbrush",
    app: ["mi"],
    list: [
      "Использует звуковой двигатель 2-го поколения с магнитной подвеской",
      "Частота вибрации достигает 31 000 в минуту, что позволяет легко удалять даже стойкие загрязнения между зубами",
      "Имеет емкий аккумулятор, обеспечивающий до 18 дней автономной работы при двухразовом ежедневном использовании",
    ],
    //related: ["xiaomi-mi-smart-air-fryer-15"]
  },
  // <<< Toothbrush <<<
  // >>> Floor Scales >>>
  // READY
  {
    id: "xiaomi-mi-body-composition-scale-2-white",
    nameRu: "Xiaomi Mi Body Composition Scale 2",
    image: "./images/pages/smart/goods/xiaomi-mi-body-composition-scale-2-white.webp",
    imageSmall: "./images/pages/smart/goods/xiaomi-mi-body-composition-scale-2-white.webp",
    link: "https://shop.mts.by/smart-house/smart-technology/xiaomi-mi-body-composition-scale-2-white/",
    group: "floor-scales",
    app: ["mi"],
    list: [
      "Высокоточный BIA-чип отслеживает 13 физических параметров для более полной картины о вашем состоянии здоровья",
      "G-датчик, выполненный из марганцевой стали, измеряет вес с точностью до 50 грамм",
      "Mi Body Composition Scale 2 используют Bluetooth 5.0 с низким энергопотреблением",
    ],
    //related: ["xiaomi-mi-smart-air-fryer-15"]
  },
  // <<< Floor Scales <<<
  // >>> Airfryer >>>
  // READY
  {
    id: "xiaomi-mi-smart-air-fryer-3-5l",
    nameRu: "Xiaomi Mi Smart Air Fryer 3.5L",
    image: "./images/pages/smart/goods/xiaomi-mi-smart-air-fryer-3-5l.webp",
    imageSmall: "./images/pages/smart/goods/xiaomi-mi-smart-air-fryer-3-5l.webp",
    link: "https://shop.mts.by/smart-house/smart-technology/xiaomi-mi-smart-air-fryer-3-5l/",
    group: "airfryer",
    app: ["mi"],
    list: [
      "Мощность 1500 Вт обеспечивает быстрый и равномерный нагрев до заданной температуры от 40°C до 200°C и циркуляцию нагретого воздуха на 360°",
      "Двухслойное антипригарное покрытие чаши на 3,5 литра не требует использования масла, но при этом подарит хрустящую корочку.",
      "Аэрофритюрница имеет функцию отложенного старта и более 100 предустановленных рецептов в фирменном приложении.",
      "Такие дополнительные функции как йогуртница, сушилка для фруктов, микроволновая печь и электрическая духовка позволят существенно разнообразить способы использования аэрофритюрницы",
    ],
    //related: ["xiaomi-mi-smart-air-fryer-15"]
  },
  // READY
  {
    id: "xiaomi-mi-smart-air-fryer-pro-4l",
    nameRu: "Xiaomi Mi Smart Air Fryer Pro 4L",
    image: "./images/pages/smart/goods/xiaomi-mi-smart-air-fryer-pro-4l.webp",
    imageSmall: "./images/pages/smart/goods/xiaomi-mi-smart-air-fryer-pro-4l.webp",
    link: "https://shop.mts.by/smart-house/smart-technology/xiaomi-mi-smart-air-fryer-pro-4l/",
    group: "airfryer",
    app: ["mi"],
    list: [
      "Мощность 1600 Вт обеспечивает быстрый и равномерный нагрев до заданной температуры от 40°C до 200°C и циркуляцию нагретого воздуха на 360°",
      "Чаши на 4 литра позволит приготовить больше вкусных блюд, имеется 11 предустановленных режимов, функция отложенного старта и более 100 предустановленных рецептов в фирменном приложении. ",
      "Существует возможность сохранить рецепты понравившихся блюд — отличное решение для тех, кто любит вкусно поесть, но не любит стоять у плиты часами.",
    ],
    //related: ["xiaomi-mi-smart-air-fryer-15"]
  },
  // READY
  {
    id: "xiaomi-smart-air-fryer-6-5l",
    nameRu: "Xiaomi Mi Smart Air Fryer 6.5L",
    image: "./images/pages/smart/goods/xiaomi-smart-air-fryer-6-5l.webp",
    imageSmall: "./images/pages/smart/goods/xiaomi-smart-air-fryer-6-5l.webp",
    link: "https://shop.mts.by/smart-house/smart-technology/xiaomi-smart-air-fryer-6-5l/",
    group: "airfryer",
    app: ["mi"],
    list: [
      "Аэрофритюрница имеет конвекционный нагрев на 360˚ для равномерного приготовления без переворачивания.",
      "Большая емкость 6,5 л и температурный диапазон от 40˚C до 220˚C для приготовления большого количества разнообразных блюд.",
      "Xiaomi Smart Air Fryer 6.5L автоматически сохраняет блюда теплыми после приготовления.",
      "Простое интеллектуальное управление, включая 24-часовую отсрочку старта и предустановленные рецепты в одно касание.",
    ],
    //related: ["xiaomi-mi-smart-air-fryer-15"]
  },
  // <<< Airfryer <<<
  //========================================================================================================================================================
  
  {
    id: "xiaomi-mi-vacuum-cleaner-g9-plus",
    nameRu: "Xiaomi Mi Vacuum Cleaner G9 Plus",
    image: "./images/pages/smart/goods/xiaomi-mi-vacuum-cleaner-g9-plus.webp",
    imageSmall: "./images/pages/smart/goods/xiaomi-mi-vacuum-cleaner-g9-plus.webp",
    link: "https://shop.mts.by/smart-house/smart-technology/xiaomi-mi-vacuum-cleaner-g9-plus/",
    group: "vacuum",
    app: ["mi"],
    list: [
      "Мощность всасывания — до 120 аВт",
      "Роликовая щетка с конструкцией, предотвращающей наматывание волос",
      "Поддержка 3 режимов работы для высокоэффективной ежедневной уборки",
      "Встроенный аккумулятор повышенной емкости 2500 мА ч позволяет с легкостью использовать робот - пылесос каждый день"
    ],
    //related: ["xiaomi-mi-smart-air-fryer-15"]
  },
  {
    id: "xiaomi-mi-vacuum-cleaner-g10-plus",
    nameRu: "Xiaomi Mi Vacuum Cleaner G10 Plus",
    image: "./images/pages/smart/goods/xiaomi-mi-vacuum-cleaner-g10-plus.webp",
    imageSmall: "./images/pages/smart/goods/xiaomi-mi-vacuum-cleaner-g10-plus.webp",
    link: "https://shop.mts.by/smart-house/smart-technology/xiaomi-mi-vacuum-cleaner-g10-plus/",
    group: "vacuum",
    app: ["mi"],
    list: [
      "Мощность всасывания — до 150 аВт*",
      "Роликовая щетка с конструкцией, предотвращающей наматывание волос",
      "Поддержка 3 режимов работы для высокоэффективной ежедневной уборки",
      "Встроенный аккумулятор повышенной емкости 3000 мА ч позволяет с легкостью использовать робот-пылесос каждый день."
    ],
    //related: ["xiaomi-mi-smart-air-fryer-15"]
  },
  {
    id: "dyson-v12-detect-slim-absolute-sv30",
    nameRu: "Dyson v12 Detect slim Absolute SV30",
    image: "./images/pages/smart/goods/dyson-v12-detect-slim-absolute-sv30.webp",
    imageSmall: "./images/pages/smart/goods/dyson-v12-detect-slim-absolute-sv30.webp",
    link: "https://shop.mts.by/smart-house/smart-technology/dyson-v12-detect-slim-absolute-sv30/",
    group: "vacuum",
    //app: ["mi"],
    list: [
      "Беспроводной вертикальный пылесос Dyson v12 Detect slim Absolute SV30 обладает высокой мощностью всасывания в 150 Вт. Лазерный датчик позволяет находить даже самые мельчайшие частицы мусора на полу, а пьезоэлектрический датчик измеряет и подсчитывает частицы пыли, чтобы при необходимости автоматически увеличить мощность всасывания.",
      "Пылесос оснащен высокоэффективным фильтром HEPA, который улавливает до 99,97% аллергенов и микроскопических частиц размером до 0,3 микрона. А различные насадки обеспечат чистоту во всем доме.",
      "Имеет три режима мощности. Управление осуществляется одной кнопкой. Встроенный ЖК-экран показывает, что именно попадает в пылесборник. Вес пылесоса всего 2,2 кг. Аккумулятор обеспечивает до 60 минут автономной работы в режиме «Эко»."
    ],
    //related: ["xiaomi-mi-smart-air-fryer-15"]
  },
  {
    id: "xiaomi-mi-smart-led-ceiling-light",
    nameRu: "Xiaomi Mi Smart LED Ceiling Light",
    image: "./images/pages/smart/goods/xiaomi-mi-smart-led-ceiling-light.webp",
    imageSmall: "./images/pages/smart/goods/xiaomi-mi-smart-led-ceiling-light.webp",
    link: "https://shop.mts.by/smart-house/xiaomi-mi-smart-led-ceiling-light/",
    group: "ceiling-lamp",
    app: ["mi"],
    list: [
      `Максимальная яркость светильника достигает 8000 лм, а диапазон цветовой температуры — от 2700 до 6300 К, которые вы сможете регулировать в мобильном приложении.`,
      "Также осветительный прибор поддерживает дневной и лунный режимы освещения.",
      "Поддерживается и голосовое управление, и интегрирование в систему умного дома для создания различных сценариев работы. Также возможно подключение пульта дистанционного управления."
    ],
    //related: ["xiaomi-mi-smart-air-fryer-15"]
  },
  {
    id: "xiaomi-mi-smart-led-ceiling-light-350mm",
    nameRu: "Xiaomi Mi Smart LED Ceiling Light (350 мм)",
    image: "./images/pages/smart/goods/xiaomi-mi-smart-led-ceiling-light-350mm.webp",
    imageSmall: "./images/pages/smart/goods/xiaomi-mi-smart-led-ceiling-light-350mm.webp",
    link: "https://shop.mts.by/smart-house/xiaomi-mi-smart-led-ceiling-light-350-mm/",
    group: "ceiling-lamp",
    app: ["mi"],
    list: [
      `Максимальная яркость светильника достигает 8000 лм, а диапазон цветовой температуры — от 2700 до 6300 К, которые вы сможете регулировать в мобильном приложении.`,
      "Также осветительный прибор поддерживает дневной и лунный режимы освещения.",
      "Поддерживается и голосовое управление, и интегрирование в систему умного дома для создания различных сценариев работы. Также возможно подключение пульта дистанционного управления."
    ],
    //related: ["xiaomi-mi-smart-air-fryer-15"]
  },
  //{
  //  id: "xiaomi-mi-smart-air-fryer-15",
  //  nameRu: "Xiaomi Mi Smart Air Fryer 1.5L",
  //  image: "./images/pages/smart/goods/xiaomi-electric-glass-kettle.webp",
  //  imageSmall: "./images/pages/smart/goods/xiaomi-electric-glass-kettle.webp",
  //  link: "#",
  //  group: "kettles",
  //  app: ["mi"],
  //  list: [
  //    "Мощность 1500 Вт обеспечивает быстрый и равномерный нагрев до заданной температуры от 40°C до 200°C и циркуляцию нагретого воздуха на 360°.",
  //    "Двухслойное антипригарное покрытие чаши на 3,5 литра не требует использования масла, но при этом подарит хрустящую корочку.",
  //    "Имеет функцию отложенного старта и более 100 предустановленных рецептов в фирменном приложении.",
  //    "Такие дополнительные функции как йогуртница, сушилка для фруктов, микроволновая печь и электрическая духовка позволят существенно разнообразить способы использования аэрофритюрницы"
  //  ],
  //  related: ["xiaomi-smart-plug-wifi"]
  //},
];
const groups = [
  //{
  //  id: "hair-care-kit",
  //  nameRu: "Набор инструментов для ухода за волосами",
  //  image: "./images/pages/smart/categories/hair-care-kit.webp",
  //  locations: [
  //    {
  //      id: "bath",
  //      x: 1125,
  //      y: 526,
  //      order: 0
  //    },
  //  ]
  //},
  {
    id: "shaver",
    nameRu: "Электробритва",
    image: "./images/pages/smart/categories/shaver.webp",
    locations: [
      {
        id: "bath",
        x: 534,
        y: 524,
        order: 0
      },
    ]
  },
  //{
  //  id: "multistyler",
  //  nameRu: "Мультистайлер",
  //  image: "./images/pages/smart/categories/multistyler.webp",
  //  locations: [
  //    {
  //      id: "bath",
  //      x: 750,
  //      y: 412,
  //      order: 0
  //    },
  //  ]
  //},
  {
    id: "hairdryer",
    nameRu: "Фен",
    image: "./images/pages/smart/categories/hairdryer.webp",
    locations: [
      {
        id: "bath",
        x: 695,
        y: 412,
        order: 0
      },
    ]
  },
  {
    id: "toothbrush",
    nameRu: "Щетка зубная",
    image: "./images/pages/smart/categories/toothbrush.webp",
    locations: [
      {
        id: "bath",
        x: 1000,
        y: 400,
        order: 0
      },
    ]
  },
  {
    id: "floor-scales",
    nameRu: "Весы напольные",
    image: "./images/pages/smart/categories/floor-scales.webp",
    locations: [
      {
        id: "bath",
        x: 1125,
        y: 700,
        order: 0
      },
    ]
  },
  {
    id: "hair-clipper",
    nameRu: "Машинка для стрижки волос",
    image: "./images/pages/smart/categories/hair-clipper.webp",
    locations: [
      {
        id: "bath",
        x: 1109,
        y: 586,
        order: 0
      },
    ]
  },
  {
    id: "portable-compressor",
    nameRu: "Компрессор воздушный портативный",
    image: "./images/pages/smart/categories/portable-compressor.webp",
    locations: [
      {
        id: "garage",
        x: 353,
        y: 526,
        order: 0
      },
    ]
  },
  {
    id: "pressure-washer",
    nameRu: "Мойка высокого давления аккумуляторная",
    image: "./images/pages/smart/categories/pressure-washer.webp",
    locations: [
      {
        id: "garage",
        x: 518,
        y: 447,
        order: 0
      },
    ]
  },
  //{
  //  id: "food-feeder",
  //  nameRu: "Умная автоматическая кормушка для животных",
  //  image: "./images/pages/smart/categories/food-feeder.webp",
  //  locations: [
  //    {
  //      id: "pets",
  //      x: 911,
  //      y: 425,
  //      order: 0
  //    },
  //  ]
  //},
  {
    id: "pet-items",
    nameRu: "Товары для домашних животных",
    image: "./images/pages/smart/categories/pet-fountine.webp",
    locations: [
      {
        id: "pets",
        x: 911,
        y: 425,
        order: 0
      },
    ]
  },
  //{
  //  id: "pet-fountain",
  //  nameRu: "Диспенсер воды для домашних животных",
  //  image: "./images/pages/smart/categories/pet-fountine.webp",
  //  locations: [
  //    {
  //      id: "pets",
  //      x: 1285,
  //      y: 573,
  //      order: 0
  //    },
  //  ]
  //},
  {
    id: "ceiling-lamp",
    nameRu: "Потолочный светильник",
    image: "./images/pages/smart/categories/ceiling-lamp.webp",
    locations: [
      {
        id: "kitchen",
        x: 494,
        y: 9,
        order: 0
      },
      //{
      //  id: "living-room",
      //  x: 367,
      //  y: 9,
      //  order: 0
      //},
      //{
      //  id: "bedroom",
      //  x: 1200,
      //  y: 72,
      //  order: 0
      //},
      //{
      //  id: "bath",
      //  x: 534,
      //  y: 9,
      //  order: 0
      //},
      {
        id: "garage",
        x: 737,
        y: 241,
        order: 0
      },
    ]
  },
  {
    id: "air-purifier",
    nameRu: "Очиститель воздуха",
    image: "./images/pages/smart/categories/air-purifier.webp",
    locations: [
      {
        id: "bedroom",
        x: 1125,
        y: 555,
        order: 0
      }
    ]
  },
  {
    id: "table-lamp",
    nameRu: "Лампа настольная",
    image: "./images/pages/smart/categories/table-lamp.webp",
    locations: [
      {
        id: "bedroom",
        x: 1269,
        y: 353,
        order: 0
      }
    ]
  },
  {
    id: "smart-speaker1",
    nameRu: "Колонка портативная с экраном",
    image: "./images/pages/smart/categories/smart-speaker1.webp",
    locations: [
      {
        id: "kitchen",
        x: 716,
        y: 443,
        order: 0
      }
    ]
  },
  {
    id: "smart-speaker2",
    nameRu: "Колонка портативная",
    image: "./images/pages/smart/categories/portable-speaker.webp",
    locations: [
      {
        id: "kitchen",
        x: 349,
        y: 451,
        order: 0
      }
    ]
  },
  {
    id: "smart-speaker3",
    nameRu: "Колонка портативная",
    image: "./images/pages/smart/categories/portable-speaker.webp",
    locations: [
      {
        id: "living-room",
        x: 980,
        y: 462,
        order: 0
      }
    ]
  },
  {
    id: "smart-speaker4",
    nameRu: "Колонка портативная",
    image: "./images/pages/smart/categories/smart-speaker4.webp",
    locations: [
      {
        id: "bedroom",
        x: 1040,
        y: 418,
        order: 0
      }
    ]
  },
  {
    id: "smart-speaker5",
    nameRu: "Колонка портативная",
    image: "./images/pages/smart/categories/smart-speaker5.webp",
    locations: [
      {
        id: "bath",
        x: 403,
        y: 408,
        order: 0
      }
    ]
  },
  {
    id: "smart-blender",
    nameRu: "Смарт-блендер",
    image: "./images/pages/smart/categories/smart-blender.webp",
    locations: [
      {
        id: "kitchen",
        x: 382,
        y: 365,
        order: 0
      }
    ]
  },
  {
    id: "leak-sensor",
    nameRu: "Датчик протечки",
    image: "./images/pages/smart/categories/leak-sensor.webp",
    locations: [
      {
        id: "kitchen",
        x: 485,
        y: 356,
        order: 0
      },
      {
        id: "bath",
        x: 716,
        y: 490,
        order: 0
      },
    ]
  },
  {
    id: "airfryer",
    nameRu: "Аэрофритюрница",
    image: "./images/pages/smart/categories/air-fryer.webp",
    locations: [
      {
        id: "kitchen",
        x: 631,
        y: 340,
        order: 0
      },
    ]
  },
  //{
  //  id: "ip-cam-complex",
  //  nameRu: "Комплект беспроводной IP-камеры видеонаблюдения",
  //  image: "./images/pages/smart/categories/ip-cam-complex.webp",
  //  locations: [
  //    {
  //      id: "living-room",
  //      x: 1406,
  //      y: 48,
  //      order: 0
  //    },
  //    {
  //      id: "garage",
  //      x: 1400,
  //      y: 27,
  //      order: 0
  //    },
  //  ]
  //},
  {
    id: "massager",
    nameRu: "Массажер перкуссионный",
    image: "./images/pages/smart/categories/massager.webp",
    locations: [
      //{
      //  id: "bedroom",
      //  x: 462,
      //  y: 472,
      //  order: 0
      //},
      {
        id: "bath",
        x: 935,
        y: 608,
        order: 0
      },
    ]
  },
  {
    id: "air-humidifier",
    nameRu: "Увлажнитель воздуха",
    image: "./images/pages/smart/categories/air-humidifier.webp",
    locations: [
      {
        id: "living-room",
        x: 1373,
        y: 223,
        order: 0
      },
      {
        id: "bedroom",
        x: 427,
        y: 408,
        order: 0
      },
    ]
  },
  {
    id: "ip-cam",
    nameRu: "IP-камера",
    image: "./images/pages/smart/categories/ip-cam.webp",
    locations: [
      {
        id: "living-room",
        x: 1381,
        y: 364,
        order: 0
      },
    ]
  },
  {
    id: "sensor-controller",
    nameRu: "Контроллер датчиков",
    image: "./images/pages/smart/categories/sensor-controller.webp",
    locations: [
      {
        id: "living-room",
        x: 646,
        y: 539,
        order: 0
      },
      //{
      //  id: "bedroom",
      //  x: 987,
      //  y: 477,
      //  order: 0
      //},
    ]
  },
  {
    id: "robot-vacuum",
    nameRu: "Робот пылесос",
    image: "./images/pages/smart/categories/robot-vacuum.webp",
    locations: [
      {
        id: "living-room",
        x: 565,
        y: 700,
        order: 0
      },
      {
        id: "bedroom",
        x: 380,
        y: 684,
        order: 0
      },
    ]
  },
  {
    id: "convector-heater",
    nameRu: "Обогреватель конвекторный",
    image: "./images/pages/smart/categories/convector-heater.webp",
    locations: [
      {
        id: "living-room",
        x: 346,
        y: 587,
        order: 0
      },
      {
        id: "bedroom",
        x: 432,
        y: 578,
        order: 0
      },
      {
        id: "garage",
        x: 1034,
        y: 445,
        order: 0
      },
    ]
  },
  {
    id: "tv",
    nameRu: "ЖК телевизор",
    image: "./images/pages/smart/categories/tv.webp",
    locations: [
      {
        id: "living-room",
        x: 804,
        y: 331,
        order: 0
      },
    ]
  },
  {
    id: "socket",
    nameRu: "Умная розетка",
    image: "./images/pages/smart/categories/socket.webp",
    locations: [
      {
        id: "bedroom",
        x: 1192,
        y: 426,
        order: 0
      },
      {
        id: "garage",
        x: 453,
        y: 409,
        order: 0
      },
    ]
  },
  {
    id: "led-strip",
    nameRu: "Лента светодиодная",
    image: "./images/pages/smart/categories/led-strip.webp",
    locations: [
      {
        id: "living-room",
        x: 665,
        y: 210,
        order: 0
      },
      {
        id: "bedroom",
        x: 762,
        y: 209,
        order: 0
      },
    ]
  },
  {
    id: "smart-lamp",
    nameRu: "Умная лампа",
    image: "./images/pages/smart/categories/smart-lamp.webp",
    locations: [
      {
        id: "kitchen",
        x: 773,
        y: 20,
        order: 0
      },
      //{
      //  id: "living-room",
      //  x: 717,
      //  y: 9,
      //  order: 0
      //},
      //{
      //  id: "bedroom",
      //  x: 965,
      //  y: 359,
      //  order: 0
      //},
      {
        id: "garage",
        x: 611,
        y: 230,
        order: 0
      },
    ]
  },
  //{
  //  id: "vacuum",
  //  nameRu: "Пылесос вертикальный",
  //  image: "./images/pages/smart/categories/upright-hoover.webp",
  //  locations: [
  //    {
  //      id: "kitchen",
  //      x: 1150,
  //      y: 648,
  //      order: 0
  //    }
  //  ]
  //},
  {
    id: "kettles",
    nameRu: "Электрочайник",
    image: "./images/pages/smart/categories/kettle.webp",
    locations: [
      {
        id: "kitchen",
        x: 810,
        y: 350,
        order: 0
      }
    ]
  }
];
document.addEventListener("DOMContentLoaded", (e) => {
  setTimeout(() => {
    document.dispatchEvent(new CustomEvent("loadSmartData", {
      detail: {
        data: { locations, groups, goods }
      }
    }));
  }, 0);
});
//console.log("EXTERNAL")