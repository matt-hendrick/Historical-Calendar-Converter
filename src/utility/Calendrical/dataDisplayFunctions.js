import * as astro from './astro';
import * as calendarFunctions from './converterFunctions';
import * as calendarConstants from './constants';
import * as calculatorFunctions from './calculatorFunctions';

export var data = {
  bahai: {},
  excel_serial_1900: {},
  excel_serial_1904: {},
  french: {},
  gregorian: {},
  gregorian_serial: {},
  hebrew: {},
  indian_civil: {},
  islamic: {},
  iso_day: {},
  iso_week: {},
  julian: {},
  julian_day: {},
  mayan_count: {},
  modified_julian_day: {},
  persian: {},
  persian_algorithmic: {},
  unix_time: {},
};

// Return Julian date of given weekday (0 = Sunday)
// in the seven days ending on jd.
export function weekdayBefore(weekday, jd) {
  return jd - astro.jwday(jd - weekday);
}

// Determine the Julian date for:
//
// **weekday**      Day of week desired, 0 = Sunday
// **jd**           Julian date to begin search
// **direction**    1 = next weekday, -1 = last weekday
// **offset**       Offset from jd to begin search
export function searchWeekday(weekday, jd, direction, offset) {
  return weekdayBefore(weekday, jd + direction * offset);
}

// Utility weekday functions, just wrappers for search_weekday
export function nearestWeekday(weekday, jd) {
  return searchWeekday(weekday, jd, 1, 3);
}

export function nextWeekday(weekday, jd) {
  return searchWeekday(weekday, jd, 1, 7);
}

export function nextOrCurrentWeekday(weekday, jd) {
  return searchWeekday(weekday, jd, 1, 6);
}

export function previousWeekday(weekday, jd) {
  return searchWeekday(weekday, jd, -1, 1);
}

export function previousOrCurrentWeekday(weekday, jd) {
  return searchWeekday(weekday, jd, 1, 0);
}

// Update all calendars from Gregorian.
// *"Why not Julian date?"* you ask. Because
// starting from Gregorian guarantees we're
// already snapped to an integral second, so
// we don't get roundoff errors in other calendars.
export function updateFromGregorian() {
  var jd, year, mon, day, hour, min, sec;

  year = data.gregorian.year;
  mon = data.gregorian.month;
  day = data.gregorian.day;
  hour = min = sec = 0;
  hour = data.gregorian.hour;
  min = data.gregorian.min;
  sec = data.gregorian.sec;

  // Update Julian day (fractional day)
  jd =
    calendarFunctions.gregorianToJd(year, mon, day) +
    Math.floor(sec + 60 * (min + 60 * hour) + 0.5) / 86400.0;

  data.julian_day.day = jd;

  augmentGregorian(jd);

  updateModifiedJulianDay(jd);
  updateJulian(jd);
  updateHebrew(jd);
  updateIslamic(jd);
  updatePersian(jd);
  updatePersiana(jd);
  updateMayan(jd);
  updateBahai(jd);
  // updateIndianCivil (jd);
  updateFrenchRevolutionary(jd);
  updateGregorianSerial(jd);
  updateExcel1900(jd);
  updateExcel1904(jd);
  updateUnixTime(jd);
  updateIsoWeek(jd);
  updateIsoDay(jd);
}

export function updateModifiedJulianDay(jd) {
  data.modified_julian_day = {
    day: jd - calendarConstants.JMJD,
  };

  return data.modified_julian_day;
}

// Update the Julian data representation
export function updateJulian(jd) {
  var julcal = calendarFunctions.jdToJulian(jd);

  data.julian = {
    year: julcal[0],
    month: calendarConstants.julian.MONTHS[julcal[1] - 1],
    day: julcal[2],
    leap: calendarFunctions.leapJulian(julcal[0]),
    wday: astro.constants.WEEKDAYS[astro.jwday(jd)],
  };

  return data.julian;
}

// Update the Hebrew data representation
export function updateHebrew(jd) {
  var hebcal = calendarFunctions.jdToHebrew(jd);

  data.hebrew = {
    year: hebcal[0],
    month: calendarConstants.hebrew.MONTHS[hebcal[1] - 1],
    day: hebcal[2],
    hebmonth: calendarConstants.hebrew.H_MONTHS[hebcal[1] - 1],
  };

  switch (calendarFunctions.hebrewYearDays(hebcal[0])) {
    case 353:
      data.hebrew.leap = 'Common deficient (353 days)';
      break;

    case 354:
      data.hebrew.leap = 'Common regular (354 days)';
      break;

    case 355:
      data.hebrew.leap = 'Common complete (355 days)';
      break;

    case 383:
      data.hebrew.leap = 'Embolismic deficient (383 days)';
      break;

    case 384:
      data.hebrew.leap = 'Embolismic regular (384 days)';
      break;

    case 385:
      data.hebrew.leap = 'Embolismic complete (385 days)';
      break;

    default:
      data.hebrew.leap =
        'Invalid year length: ' +
        calendarFunctions.hebrewYearDays(hebcal[0]) +
        ' days.';
      break;
  }

  return data.hebrew;
}

// Update the Islamic data representation
export function updateIslamic(jd) {
  var islcal = calendarFunctions.jdToIslamic(jd);

  data.islamic = {
    year: islcal[0],
    month: calendarConstants.islamic.MONTHS[islcal[1] - 1],
    day: islcal[2],
    wday: 'yawm ' + calendarConstants.islamic.WEEKDAYS[astro.jwday(jd)],
    leap: calendarFunctions.leapIslamic(islcal[0]),
  };

  return data.islamic;
}

// Update the Persian data representation
export function updatePersian(jd) {
  var perscal = calendarFunctions.jdToPersian(jd);

  data.persian = {
    year: perscal[0],
    month: calendarConstants.persian.MONTHS[perscal[1] - 1],
    day: perscal[2],
    wday: calendarConstants.persian.WEEKDAYS[astro.jwday(jd)],
    leap: calendarFunctions.leapPersian(perscal[0]),
  };

  return data.persian;
}

// Update the Persian algorithmic data representation
export function updatePersiana(jd) {
  var perscal = calendarFunctions.jdToPersianArithmetic(jd);

  data.persian_algorithmic = {
    year: perscal[0],
    month: calendarConstants.persian.MONTHS[perscal[1] - 1],
    day: perscal[2],
    wday: calendarConstants.persian.WEEKDAYS[astro.jwday(jd)],
    leap: calendarFunctions.leapPersianArithmetic(perscal[0]),
  };

  return data.persian_algorithmic;
}

// Update the Mayan data representation
export function updateMayan(jd) {
  var mayancal = calendarFunctions.jdToMayanCount(jd),
    mayhaabcal = calendarFunctions.jdToMayanHaab(jd),
    maytzolkincal = calendarFunctions.jdToMayanTzolkin(jd);

  data.mayan_count = {
    baktun: mayancal[0],
    katun: mayancal[1],
    tun: mayancal[2],
    uinal: mayancal[3],
    kin: mayancal[4],
    haab:
      mayhaabcal[1] +
      ' ' +
      calendarConstants.mayan.HAAB_MONTHS[mayhaabcal[0] - 1],
    tzolkin:
      maytzolkincal[1] +
      ' ' +
      calendarConstants.mayan.TZOLKIN_MONTHS[maytzolkincal[0] - 1],
  };

  return data.mayan_count;
}

// Update the Bahai data representation
export function updateBahai(jd) {
  var bahcal = calendarFunctions.jdToBahai(jd),
    bahYear = ((bahcal[0] - 1) * 19 + bahcal[1] - 1) * 19 + bahcal[2];

  data.bahai = {
    kull_i_shay: bahcal[0],
    vahid: bahcal[1],
    year: calendarConstants.bahai.YEARS[bahcal[2] - 1],
    month: calendarConstants.bahai.MONTHS[bahcal[3] - 1],
    day: calendarConstants.bahai.DAYS[bahcal[4] - 1],
    weekday: calendarConstants.bahai.WEEKDAYS[astro.jwday(jd)],
    leap: calendarFunctions.leapBahai(bahYear),
    official: bahYear < 223,
  };

  return data.bahai;
}

// Update the Indian Civil data representation
export function updateIndianCivil(jd) {
  var indcal = calendarFunctions.jdToIndianCivil(jd);

  data.indian_civil = {
    year: indcal[0],
    month: calendarConstants.hindu.MONTHS[indcal[1] - 1],
    day: indcal[2],
    weekday: calendarConstants.hindu.WEEKDAYS[astro.jwday(jd)],
    leap: calendarFunctions.leapGregorian(indcal[0] + 78),
  };

  return data.indian_civil;
}

// Update the French data representation
export function updateFrenchRevolutionary(jd) {
  var frrcal = calendarFunctions.jdToFrenchRevolutionary(jd);

  data.french = {
    an: frrcal[0],
    mois: calendarConstants.french_revolutionary.MOIS[frrcal[1] - 1],
    decade: calendarConstants.french_revolutionary.DECADE[frrcal[2] - 1],
    jour:
      calendarConstants.french_revolutionary.JOUR[
        (frrcal[1] <= 12 ? frrcal[3] : frrcal[3] + 11) - 1
      ],
  };

  return data.french;
}

// Update the Gregorian Serial data representation
export function updateGregorianSerial(jd) {
  data.gregorian_serial = {
    day: jd - calendarConstants.J0000,
  };

  return data.gregorian_serial;
}

// Update the Excel 1900 data representation
// Microsoft marching morons thought 1900 was a leap year.
// Adjust dates after 1900-02-28 to compensate for their idiocy.
export function updateExcel1900(jd) {
  data.excel_serial_1900.day =
    jd - calendarConstants.J1900 + 1 + (jd > 2415078.5) ? 1 : 0;

  return data.excel_serial_1900;
}

// Update the Excel 1904 data representation
export function updateExcel1904(jd) {
  data.excel_serial_1904 = {
    day: jd - calendarConstants.J1904,
  };

  return data.excel_serial_1904;
}

// Update the Unix Time data representation
export function updateUnixTime(jd) {
  var utime = (jd - calendarConstants.J1970) * 60 * 60 * 24 * 1000;

  data.unix_time = {
    time: Math.round(utime / 1000),
  };

  return data.unix_time;
}

// Update the ISO Week data representation
export function updateIsoWeek(jd) {
  var isoWeek = calendarFunctions.jdToIso(jd);

  data.iso_week = {
    year: isoWeek[0],
    week: isoWeek[1],
    day: isoWeek[2],
  };

  return data.iso_week;
}

// Update the ISO Day data representation
export function updateIsoDay(jd) {
  var isoDay = calendarFunctions.jdToIsoDay(jd);

  data.iso_day = {
    year: isoDay[0],
    day: isoDay[1],
  };

  return data.iso_day;
}

// Augment the Gregorian data representation
// with weekday and leap
export function augmentGregorian(jd) {
  data.gregorian.wday = astro.constants.WEEKDAYS[astro.jwday(jd)];
  data.gregorian.leap = calendarFunctions.leapGregorian(data.gregorian.year);

  return data.gregorian;
}

// Sets the Gregorian fields in the data representation
export function setDateTo(date) {
  data.gregorian = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    hour: date.getHours(),
    min: date.getMinutes(),
    sec: date.getSeconds(),
  };

  return data.gregorian;
}

// Preset the fields in
// the request form to the time now.
export function setDateToNow() {
  var today = new Date();

  setDateTo(today);
}

// Update the internal data representation
// once per second
export function start() {
  exports.intervalId = window.setInterval(function () {
    updateTo();
  }, 1000);

  return this;
}

// Clear the interval to stop the updating
export function stop() {
  window.clearInterval(exports.intervalId);

  return this;
}

// Update the data representation to the specified date
// If no date is passed in then the data representation
// is updated to the time of invocation
export function updateTo(date) {
  var dt = date;

  if (typeof dt === 'undefined') {
    dt = new Date();
  }

  setDateTo(dt);
  calculatorFunctions.calcGregorian();

  return this;
}
