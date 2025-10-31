export const getShamsiDate = () => {
  const today = new Date();
  const gregorianToJalali = (
    gYear: number,
    gMonth: number,
    gDay: number
  ): [number, number, number] => {
    const g_d_m = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    let jy, jm, jd;
    let gy = gYear - 1600;
    let gm: number = gMonth - 1;
    let gd: number = gDay - 1;

    let g_day_no =
      365 * gy +
      Math.floor((gy + 3) / 4) -
      Math.floor((gy + 99) / 100) +
      Math.floor((gy + 399) / 400);

    if (gm > 1 && ((gy % 4 === 0 && gy % 100 !== 0) || gy % 400 === 0)) {
      g_day_no++;
    }
    g_day_no += g_d_m[gm] + gd;

    let j_day_no = g_day_no - 79;

    let j_np = Math.floor(j_day_no / 12053);
    j_day_no %= 12053;

    jy = 979 + 33 * j_np + 4 * Math.floor(j_day_no / 1461);
    j_day_no %= 1461;

    if (j_day_no >= 366) {
      jy += Math.floor((j_day_no - 1) / 365);
      j_day_no = (j_day_no - 1) % 365;
    }

    const j_m_d = [0, 31, 62, 93, 124, 155, 186, 216, 246, 276, 306, 336];
    for (let i = 11; i >= 0; i--) {
      if (j_day_no >= j_m_d[i]) {
        jm = i + 1;
        jd = j_day_no - j_m_d[i] + 1;
        break;
      }
    }

    return [jy, jm!, jd!];
  };

  const [jYear, jMonth, jDay] = gregorianToJalali(
    today.getFullYear(),
    today.getMonth() + 1,
    today.getDate()
  );

  const weekdays = [
    "یک‌شنبه",
    "دوشنبه",
    "سه‌شنبه",
    "چهارشنبه",
    "پنج‌شنبه",
    "جمعه",
    "شنبه",
  ];
  const months = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ];

  const weekdayName = weekdays[today.getDay()];
  const persianWeekdayIndex = (today.getDay() + 1) % 7; 
  const correctWeekdayName = [
    "شنبه",
    "یک‌شنبه",
    "دوشنبه",
    "سه‌شنبه",
    "چهارشنبه",
    "پنج‌شنبه",
    "جمعه",
  ][persianWeekdayIndex];

  return {
    weekday: correctWeekdayName,
    day: jDay,
    month: months[jMonth - 1],
    year: jYear,
    full: `${correctWeekdayName}، ${jDay} ${months[jMonth - 1]} ${jYear}`,
  };
};
