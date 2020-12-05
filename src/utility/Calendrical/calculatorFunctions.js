import * as astro from './astro';
import * as calendarConstants from './constants';
import * as calendarFunctions from './converterFunctions';
import { data } from './dataDisplayFunctions';

/**
 * Pad a string to a given length with a given fill character.
 * @param {String} str initial string
 * @param {int} length max. length
 * @param {character} filler the character to fill in the gaps
 * @return {String} padded String
 */
function pad(str, length, filler) {
  var s0 = str.toString();

  while (s0.length < length) {
    s0 = filler + s0;
  }

  return s0;
}

// Perform calculation starting with a Gregorian date
export function calcGregorian() {
  this.updateFromGregorian();
}

// Perform calculation starting with a Julian date
export function calcJulian() {
  var jd, date, time;

  jd = data.julianday.day;
  date = this.jdToGregorian(jd);
  time = astro.jhms(jd);

  data.gregorian.year = date[0];
  data.gregorian.month = date[1] - 1;
  data.gregorian.day = date[2];
  data.gregorian.hour = pad(time[0], 2, ' ');
  data.gregorian.min = pad(time[1], 2, '0');
  data.gregorian.sec = pad(time[2], 2, '0');

  this.updateFromGregorian();
}

// Set Julian date and update all calendars
export function setJulian(jd) {
  data.julianday.day = jd;
  this.calcJulian();
}

// Update from Modified Julian day
export function calcModifiedJulian() {
  this.setJulian(data.modifiedjulianday.day + calendarConstants.JMJD);
}

// Update from Julian calendar
export function calcJulianCalendar() {
  this.setJulian(
    this.julianToJd(data.juliancalendar.year),
    data.juliancalendar.month.selectedIndex + 1,
    data.juliancalendar.day
  );
}

// Update from Hebrew calendar
export function calcHebrew() {
  this.setJulian(
    this.hebrewToJd(data.hebrew.year),
    data.hebrew.month.selectedIndex + 1,
    data.hebrew.day
  );
}

// Update from Islamic calendar
export function calcIslamic() {
  this.setJulian(
    this.islamicToJd(
      data.islamic.year,
      data.islamic.month.selectedIndex + 1,
      data.islamic.day
    )
  );
}

// Update from Persian calendar
export function calcPersian() {
  this.setJulian(
    this.persianToJd(
      data.persian.year,
      data.persian.month.selectedIndex + 1,
      data.persian.day
    )
  );
}

// Update from Persian algorithmic calendar
export function calcPersiana() {
  this.setJulian(
    this.persianaToJd(
      data.persiana.year,
      data.persiana.month.selectedIndex + 1,
      data.persiana.day
    ) + 0.5
  );
}

// Update from the Mayan Long Count
export function calcMayanCount() {
  this.setJulian(
    this.mayanCountToJd(
      data.mayancount.baktun,
      data.mayancount.katun,
      data.mayancount.tun,
      data.mayancount.uinal,
      data.mayancount.kin
    )
  );
}

// Update from Bahai calendar
export function calcBahai() {
  this.setJulian(
    this.bahaiToJd(
      data.bahai.kull_i_shay,
      data.bahai.vahid,
      data.bahai.year.selectedIndex + 1,
      data.bahai.month.selectedIndex + 1,
      data.bahai.day.selectedIndex + 1
    )
  );
}

// Update from Indian Civil Calendar
export function calcIndianCivilCalendar() {
  this.setJulian(
    this.indianCivilToJd(
      data.indiancivilcalendar.year,
      data.indiancivilcalendar.month.selectedIndex + 1,
      data.indiancivilcalendar.day
    )
  );
}

// Update from French Republican calendar
export function calcFrench() {
  var decade, jours, mois;

  jours = data.french.jour.selectedIndex;
  decade = data.french.decade.selectedIndex;
  mois = data.french.mois.selectedIndex;

  // If the currently selected day is one of the sansculottides,
  // adjust the index to be within that period and force the
  // decade to zero and the month to 12, designating the
  // intercalary interval.
  if (jours > 9) {
    jours -= 11;
    decade = 0;
    mois = 12;
  }

  // If the selected month is the pseudo-month of the five or
  // six sansculottides, ensure that the decade is 0 and the day
  // number doesn't exceed six. To avoid additional overhead, we
  // don't test whether a day number of 6 is valid for this year,
  // but rather simply permit it to wrap into the first day of
  // the following year if this is a 365 day year.
  if (mois === 12) {
    decade = 0;

    if (jours > 5) {
      jours = 0;
    }
  }

  this.setJulian(
    this.frenchRevolutionaryToJd(
      data.french.an,
      mois + 1,
      decade + 1,
      jours + 1
    )
  );
}

// Update from Gregorian serial day number
export function calcGregSerial() {
  this.setJulian(data.gregserial.day + calendarConstants.J0000);
}

// Perform calculation starting with an Excel 1900 serial date
export function calcExcelSerial1900() {
  var day = data.excelserial1900.day;

  // Idiot Kode Kiddies didn't twig to the fact
  // (proclaimed in 1582) that 1900 wasn't a leap year,
  // so every Excel day number in every database on Earth
  // which represents a date subsequent to February 28,
  // 1900 is off by one. Note that there is no
  // acknowledgement of this betrayal or warning of its
  // potential consequences in the Excel help file. Thank
  // you so much Mister Talking Paper Clip. Some day
  // we're going to celebrate your extinction like it was
  // February 29 ... 1900.
  if (day > 60) {
    day -= 1;
  }

  this.setJulian(day - 1 + calendarConstants.J1900);
}

// Perform calculation starting with an Excel 1904 serial date
export function calcExcelSerial1904() {
  this.setJulian(data.excelserial1904.day + calendarConstants.J1904);
}

// Update from specified Unix time () value
export function calcUnixTime() {
  var time = data.unixtime.time;

  this.setJulian(calendarConstants.J1970 + time / (60 * 60 * 24));
}

// Update from specified ISO year, week, and day
export function calcIsoWeek() {
  var year = data.isoweek.year,
    week = data.isoweek.week,
    day = data.isoweek.day;

  this.setJulian(calendarFunctions.isoToJulian(year, week, day));
}

// Update from specified ISO year and day of year
export function calcIsoDay() {
  var year = data.isoday.year,
    day = data.isoday.day;

  this.setJulian(this.isoDayToJulian(year, day));
}
