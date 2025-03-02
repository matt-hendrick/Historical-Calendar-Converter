import * as calendarConstants from './constants';
import * as calendarFunctions from './converterFunctions';

// astro.constants
export const constants = {
  // *Julian day of J2000 epoch*
  J2000: 2451545.0,

  // *Days in Julian century*
  JULIAN_CENTURY: 36525.0,

  // *Days in Julian millennium*
  JULIAN_MILLENIUM: 365250,

  // *Astronomical unit in kilometres*
  ASTRONOMICAL_UNIT: 149597870.0,

  // *Mean solar tropical year*
  TROPICAL_YEAR: 365.24219878,

  // *Weekdays*
  WEEKDAYS: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],

  // *Table of observed Delta T values at the beginning of
  // even numbered years from 1620 through 2002.*
  DELTA_T_TAB: [
    121,
    112,
    103,
    95,
    88,
    82,
    77,
    72,
    68,
    63,
    60,
    56,
    53,
    51,
    48,
    46,
    44,
    42,
    40,
    38,
    35,
    33,
    31,
    29,
    26,
    24,
    22,
    20,
    18,
    16,
    14,
    12,
    11,
    10,
    9,
    8,
    7,
    7,
    7,
    7,
    7,
    7,
    8,
    8,
    9,
    9,
    9,
    9,
    9,
    10,
    10,
    10,
    10,
    10,
    10,
    10,
    10,
    11,
    11,
    11,
    11,
    11,
    12,
    12,
    12,
    12,
    13,
    13,
    13,
    14,
    14,
    14,
    14,
    15,
    15,
    15,
    15,
    15,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    15,
    15,
    14,
    13,
    13.1,
    12.5,
    12.2,
    12,
    12,
    12,
    12,
    12,
    12,
    11.9,
    11.6,
    11,
    10.2,
    9.2,
    8.2,
    7.1,
    6.2,
    5.6,
    5.4,
    5.3,
    5.4,
    5.6,
    5.9,
    6.2,
    6.5,
    6.8,
    7.1,
    7.3,
    7.5,
    7.6,
    7.7,
    7.3,
    6.2,
    5.2,
    2.7,
    1.4,
    -1.2,
    -2.8,
    -3.8,
    -4.8,
    -5.5,
    -5.3,
    -5.6,
    -5.7,
    -5.9,
    -6,
    -6.3,
    -6.5,
    -6.2,
    -4.7,
    -2.8,
    -0.1,
    2.6,
    5.3,
    7.7,
    10.4,
    13.3,
    16,
    18.2,
    20.2,
    21.1,
    22.4,
    23.5,
    23.8,
    24.3,
    24,
    23.9,
    23.9,
    23.7,
    24,
    24.3,
    25.3,
    26.2,
    27.3,
    28.2,
    29.1,
    30,
    30.7,
    31.4,
    32.2,
    33.1,
    34,
    35,
    36.5,
    38.3,
    40.2,
    42.2,
    44.5,
    46.5,
    48.5,
    50.5,
    52.2,
    53.8,
    54.9,
    55.8,
    56.9,
    58.3,
    60,
    61.6,
    63,
    65,
    66.6,
  ],

  // *Periodic terms to obtain true time*
  EQUINOX_P_TERMS: [
    485,
    324.96,
    1934.136,
    203,
    337.23,
    32964.467,
    199,
    342.08,
    20.186,
    182,
    27.85,
    445267.112,
    156,
    73.14,
    45036.886,
    136,
    171.52,
    22518.443,
    77,
    222.54,
    65928.934,
    74,
    296.72,
    3034.906,
    70,
    243.58,
    9037.513,
    58,
    119.81,
    33718.147,
    52,
    297.17,
    150.678,
    50,
    21.02,
    2281.226,
    45,
    247.54,
    29929.562,
    44,
    325.15,
    31555.956,
    29,
    60.93,
    4443.417,
    18,
    155.12,
    67555.328,
    17,
    288.79,
    4562.452,
    16,
    198.04,
    62894.029,
    14,
    199.76,
    31436.921,
    12,
    95.39,
    14577.848,
    12,
    287.11,
    31931.756,
    12,
    320.81,
    34777.259,
    9,
    227.73,
    1222.114,
    8,
    15.45,
    16859.074,
  ],

  JDE0_TAB_1000: [
    [1721139.29189, 365242.1374, 0.06134, 0.00111, -0.00071],
    [1721233.25401, 365241.72562, -0.05323, 0.00907, 0.00025],
    [1721325.70455, 365242.49558, -0.11677, -0.00297, 0.00074],
    [1721414.39987, 365242.88257, -0.00769, -0.00933, -0.00006],
  ],

  JDE0_TAB_2000: [
    [2451623.80984, 365242.37404, 0.05169, -0.00411, -0.00057],
    [2451716.56767, 365241.62603, 0.00325, 0.00888, -0.0003],
    [2451810.21715, 365242.01767, -0.11575, 0.00337, 0.00078],
    [2451900.05952, 365242.74049, -0.06223, -0.00823, 0.00032],
  ],

  SOLAR_LONGITUDE_COEFFICIENTS: [
    403406,
    195207,
    119433,
    112392,
    3891,
    2819,
    1721,
    660,
    350,
    334,
    314,
    268,
    242,
    234,
    158,
    132,
    129,
    114,
    99,
    93,
    86,
    78,
    72,
    68,
    64,
    46,
    38,
    37,
    32,
    29,
    28,
    27,
    27,
    25,
    24,
    21,
    21,
    20,
    18,
    17,
    14,
    13,
    13,
    13,
    12,
    10,
    10,
    10,
    10,
  ],

  SOLAR_LONGITUDE_MULTIPLIERS: [
    0.9287892,
    35999.1376958,
    35999.4089666,
    35998.7287385,
    71998.20261,
    71998.4403,
    36000.35726,
    71997.4812,
    32964.4678,
    -19.441,
    445267.1117,
    45036.884,
    3.1008,
    22518.4434,
    -19.9739,
    65928.9345,
    9038.0293,
    3034.7684,
    33718.148,
    3034.448,
    -2280.773,
    29929.992,
    31556.493,
    149.588,
    9037.75,
    107997.405,
    -4444.176,
    151.771,
    67555.316,
    31556.08,
    -4561.54,
    107996.706,
    1221.655,
    62894.167,
    31437.369,
    14578.298,
    -31931.757,
    34777.243,
    1221.999,
    62894.511,
    -4442.039,
    107997.909,
    119.066,
    16859.071,
    -4.578,
    26895.292,
    -39.127,
    12297.536,
    90073.778,
  ],

  SOLAR_LONGITUDE_ADDENDS: [
    270.54861,
    340.19128,
    63.91854,
    331.2622,
    317.843,
    86.631,
    240.052,
    310.26,
    247.23,
    260.87,
    297.82,
    343.14,
    166.79,
    81.53,
    3.5,
    132.75,
    182.95,
    162.03,
    29.8,
    266.4,
    249.2,
    157.6,
    257.8,
    185.1,
    69.9,
    8.0,
    197.1,
    250.4,
    65.3,
    162.7,
    341.5,
    291.6,
    98.5,
    146.7,
    110.0,
    5.2,
    342.6,
    230.9,
    256.1,
    45.3,
    242.9,
    115.2,
    151.8,
    285.3,
    53.3,
    126.6,
    205.7,
    85.9,
    146.1,
  ],
};

/**
 * arc seconds to radians
 * @param {float} arcs arc seconds
 * @return {float} radians value
 */
// astro.astor = function (arcs) {
//    return arcs * Math.PI / (180.0 * 3600.0);
// };

/**
 * degrees to radians
 * @param {float} degree angle in degrees
 * @return {float} radians value
 */
function degreesToRadians(degree) {
  return (degree * Math.PI) / 180.0;
}

/**
 * radians to degrees
 * @param {float} radians angle in radians
 * @return {float} degrees value
 */
function radiansToDegrees(radians) {
  return (radians * 180.0) / Math.PI;
}

/**
 * angle from degrees:minutes:seconds
 * @param {float} degree angle integral portion
 * @param {float} minute angle minutes fraction
 * @param {float} second angle seconds fraction
 * @return {float} angle
 */
export function angle(degree, minute, second) {
  return degree + (minute + second / 60) / 60;
}

/**
 * Modulus function which works for non-integers
 * @param {float} amount dividend
 * @param {float} numerator numerator
 * @return {float} modulo value
 */
export function mod(amount, numerator) {
  return amount - numerator * Math.floor(amount / numerator);
}

/**
 * Return a normalized angle theta to range [ 0, 360 ] degrees.
 * @param {float} theta angle in degrees
 * @return {float} normalized angle in degrees
 */
function degrees(theta) {
  return mod(theta, 360);
}

/**
 * Range reduce angle in degrees
 * @param {float} alpha angle
 * @return {float} degrees
 */
// astro.fixAngle = function (alpha) {
//    return alpha - 360.0 * Math.floor (alpha / 360.0);
// };

/**
 * Range reduce angle in radians
 * @param {float} alpha angle
 * @return {float} radians
 */
// astro.fixAngleRadians = function (alpha) {
//    return alpha - 2 * Math.PI * Math.floor (alpha / (2 * Math.PI));
// };

/**
 * Sine of an angle in degrees
 * @param {float} theta angle
 * @return {float} degrees
 */
export function sinDeg(theta) {
  return Math.sin(degreesToRadians(theta));
}

/**
 * Cosine of an angle in degrees
 * @param {float} theta angle
 * @return {float} degrees
 */
function cosDeg(theta) {
  return Math.cos(degreesToRadians(theta));
}

/**
 * Tangens of an angle in degrees
 * @param {float} theta angle
 * @return {float} degrees
 */
function tanDeg(theta) {
  return Math.tan(degreesToRadians(theta));
}

/**
 * Arc-tangent of y0 / x0 in degrees
 * @param {float} y0 y-value
 * @param {float} x0 x-value
 * @return {float} arc tangent
 */
function arcTanDeg(y0, x0) {
  var alpha;

  if (x0 === 0 && y0 !== 0) {
    return mod(Math.sign(y0) * 90, 360);
  }

  alpha = radiansToDegrees(Math.atan(y0 / x0));

  if (x0 >= 0) {
    return alpha;
  }

  return mod(alpha + 180, 360);
}

/**
 * Calculate arc sine in degrees
 * @param {float} alpha angle
 * @return {float} value
 */
function arcSinDeg(alpha) {
  return radiansToDegrees(Math.asin(alpha));
}

/**
 * Modulus function which returns numerator if modulus is zero
 * @param {float} amount dividend
 * @param {float} numerator numerator
 * @return {float} modulo value
 */
export function amod(amount, numerator) {
  return mod(amount - 1, numerator) + 1;
}

/**
 * Return first integer greater or equal to initial index iter,
 * such that condition predicate holds.
 * @param {int} iter iterator
 * @param {function} predicate boolean function applied to each iter until true
 * @return {int} iterator satisfying the predicate
 */
export function next(iter, predicate) {
  return predicate(iter) ? iter : next(iter + 1, predicate);
}

/**
 * Return last integer greater or equal to initial index iter,
 * such that condition predicate holds.
 * @param {int} iter iterator
 * @param {function} predicate boolean function applied to each iter until false
 * @return {int} iterator satisfying the predicate
 */
export function final(iter, predicate) {
  return predicate(iter) ? final(iter + 1, predicate) : iter - 1;
}

/**
 * Calculate polynomial with coefficients 'a' at point x.
 * The polynomial is  a[0] + a[1] * x + a[2] * x^2 + ...a[n-1]x^(n-1)
 * @param {float} term denotes x in the formula above
 * @param {float[]} array denotes a[] in the formula above
 * @return {float} polynomial value
 */
function poly(term, array) {
  var len = array.length,
    result = array[len - 1],
    index = len - 2;

  while (index >= 0) {
    result = result * term + array[index];
    index -= 1;
  }

  return result;
}

/**
 * Zip up arrays element-wise
 * @param {float[]} arrays multi-dimensional array (matrix)
 * @return {float} zipped array
 */
function zip(arrays) {
  return arrays.length === 0
    ? []
    : arrays[0].map(function (igore, index) {
        return arrays.map(function (array) {
          return array[index];
        });
      });
}

/**
 * Return the sum of applying the function func for indices i [ 1 .. n ]
 * running simultaneously thru columns c [ 1 .. n ].
 * Matrix matrix is of the form [ [i1 c1] [i1 c2] .. [ in cn ] ].
 * @param {float[]} matrix 2-dimensional array of floats
 * @param {function} func application function
 * @return {float} sum of products
 */
function sigma(matrix, func) {
  return zip(matrix)
    .map(function (v0) {
      return func.apply(null, v0);
    })
    .reduce(function (memo, n0) {
      return memo + n0;
    }, 0);
}

/**
 * Bisection search for x in [low, high] such that condition 'predicate' holds.
 * 'discriminator' determines when to go left.
 * @param {floa} low low end of the range
 * @param {float} high high end of the range
 * @param {function} predicate selection function
 * @param {function} discriminator partitioning function
 * @return {float} sorted value
 */
export function binarySearch(low, high, predicate, discriminator) {
  var x0 = (low + high) / 2;

  if (predicate(low, high)) {
    return x0;
  }

  if (discriminator(x0)) {
    return binarySearch(low, x0, predicate, discriminator);
  }

  return binarySearch(x0, high, predicate, discriminator);
}

/**
 * Return fixed momentToFixed
 * @param {float} tee moment in time
 * @return {int} fixed momentToFixed
 */
function momentToFixed(tee) {
  return Math.floor(tee);
}

/**
 * Return standard time from teeRomU in universal time at location
 * @param {float} teeRomU moment in time
 * @param {location} location geographic location
 * @return {float} converted time
 */
function universalToStandard(teeRomU, location) {
  return teeRomU + location[3];
}

/**
 * Return universal time from teeRomU in standard time at location
 * @param {float} teeRomS moment in time
 * @param {location} location geographic location
 * @return {float} converted time
 */
export function standardToUniversal(teeRomS, location) {
  return teeRomS - location[3];
}

/**
 * Return the difference between UT and local mean time at longitude
 * 'phi' as a fraction of a day
 * @param {float} phi geo-location
 * @return {float} fraction of a day
 */
function longitudeToZone(phi) {
  return phi / 360;
}

/**
 * Return local time from teeRomU in universal time at location
 * @param {float} teeRomU moment in time
 * @param {location} location geographic location
 * @return {float} converted time
 */
// function universalToLocal (teeRomU, location) {
//   return teeRomU + longitudeToZone (location[1]);
// }

/**
 * Return universal time from teeEll in local time at location
 * @param {float} teeEll moment in time
 * @param {location} location geographic location
 * @return {float} converted time
 */
function localToUniversal(teeEll, location) {
  return teeEll - longitudeToZone(location[1]);
}

/**
 * Return standard time from teeEll in local time at location
 * @param {float} teeEll moment in time
 * @param {location} location geographic location
 * @return {float} converted time
 */
function localToStandard(teeEll, location) {
  return universalToStandard(localToUniversal(teeEll, location), location);
}

/**
 * Return local time from teeRomS in standard time at location
 * @param {float} teeRomS moment in time
 * @param {location} location geographic location
 * @return {float} converted time
 */
// function standardToLocal (teeRomS, location) {
//    return universalToLocal (standardToUniversal (teeRomS, location), location);
// }

/**
 * Return Dynamical Time minus Universal Time (in days) for moment, tee.
 * Adapted from "Astronomical Algorithms" by Jean Meeus, Willmann_Bell, Inc., 1991.
 * @param {float} tee moment in time
 * @return {float} converted time
 */
function ephemerisCorrection(tee) {
  var year, centuries, result;

  year = calendarFunctions.jdToGregorianYear(
    Math.floor(tee + calendarConstants.gregorian.EPOCH)
  );

  if (year >= 1988 && year <= 2019) {
    return (year - 1933) / 86400;
  }

  centuries =
    (calendarFunctions.gregorianToJd(year, calendarConstants.JULY, 1) -
      calendarFunctions.gregorianToJd(1900, calendarConstants.JANUARY, 1)) /
    36525;

  if (year >= 1900 && year <= 1987) {
    return poly(centuries, [
      -0.00002,
      0.000297,
      0.025184,
      -0.181133,
      0.55304,
      -0.861938,
      0.677066,
      -0.212591,
    ]);
  }

  if (year >= 1800 && year <= 1899) {
    return poly(centuries, [
      -0.000009,
      0.003844,
      0.083563,
      0.865736,
      4.867575,
      15.845535,
      31.332267,
      38.291999,
      28.316289,
      11.636204,
      2.043794,
    ]);
  }

  if (year >= 1700 && year <= 1799) {
    return (
      poly(year - 1700, [
        8.118780842,
        -0.005092142,
        0.003336121,
        -0.0000266484,
      ]) / 86400
    );
  }

  if (year >= 1620 && year <= 1699) {
    return poly(year - 1600, [196.58333, -4.0675, 0.0219167]) / 86400;
  }

  result =
    0.5 +
    (calendarFunctions.gregorianToJd(year, calendarConstants.JANUARY, 1) -
      calendarFunctions.gregorianToJd(1810, calendarConstants.JANUARY, 1));

  return ((result * result) / 41048480 - 15) / 86400;
}

/**
 * Return Dynamical Time at Universal moment tee
 * @param {float} tee moment in time
 * @return {float} converted time
 */
function universalToDynamical(tee) {
  return tee + ephemerisCorrection(tee);
}

/**
 * Return Universal moment from Dynamical time, tee
 * @param {float} tee moment in time
 * @return {float} converted time
 */
function dynamicalToUniversal(tee) {
  return tee - ephemerisCorrection(tee);
}

/**
 * Return Julian centuries since 2000 at moment tee.
 * @param {float} tee moment in time
 * @return {int} number of centuries relative to 2000-01-01
 */
function julianCenturies(tee) {
  return (universalToDynamical(tee) - calendarConstants.J2000) / 36525;
}

/**
 * Calculate the obliquity of the ecliptic for a given Julian date.
 * This uses Laskar's tenth-degree polynomial fit (*J.
 * Laskar, **Astronomy and Astrophysics**, Vol. 157, page 68 [1986]*) which is
 * accurate to within 0.01 arc second between AD 1000 and AD 3000, and within
 * a few seconds of arc for +/-10000 years around AD 2000. If we're outside the
 * range in which this fit is valid (deep time) we simply return the J2000
 * value of the obliquity, which happens to be almost precisely the mean.
 * @param {float} jd Julian day number
 * @return {float} obliquity at moment jd
 */
function obliquity(jd) {
  var centuries = julianCenturies(jd);

  return (
    angle(23, 26, 21.448) +
    poly(centuries, [
      0,
      angle(0, 0, -46.815),
      angle(0, 0, -0.00059),
      angle(0, 0, 0.001813),
    ])
  );
}

/**
 * Compute equation of time for a given moment.
 * Return the equation of time (as fraction of day) for moment, tee.
 * Adapted from "Astronomical Algorithms" by Jean Meeus, Willmann_Bell, Inc., 1991.
 * @param {float} tee moment in time
 * @return {float} equation of time
 */
export function equationOfTime(tee) {
  var centuries, lambda, anomaly, eccentricity, varepsilon, y0, equation;

  centuries = julianCenturies(tee);

  lambda = poly(centuries, [280.46645, 36000.76983, 0.0003032]);
  anomaly = poly(centuries, [357.5291, 35999.0503, -0.0001559, -0.00000048]);
  eccentricity = poly(centuries, [0.016708617, -0.000042037, -0.0000001236]);
  varepsilon = obliquity(tee);
  y0 = tanDeg(varepsilon / 2);
  y0 = Math.pow(y0, 2);

  equation =
    (0.5 / Math.PI) *
    (y0 * sinDeg(2 * lambda) +
      -2 * eccentricity * sinDeg(anomaly) +
      4 * eccentricity * y0 * sinDeg(anomaly) * cosDeg(2 * lambda) +
      -0.5 * y0 * y0 * sinDeg(4 * lambda) +
      -1.25 * eccentricity * eccentricity * sinDeg(2 * anomaly));

  return Math.sign(equation) * Math.min(Math.abs(equation), 0.5);
}

/**
 * Return sundial time at local time tee at location, location
 * @param {float} tee moment in time
 * @param {location} location geographic location
 * @return {float} converted time
 */
// function localToApparent (tee, location) {
//   return tee + equationOfTime (localToUniversal (tee, location));
// }

/**
 * Return local time from sundial time tee at location, location
 * @param {float} tee moment in time
 * @param {location} location geographic location
 * @return {float} converted time
 */
function apparentToLocal(tee, location) {
  return tee - equationOfTime(localToUniversal(tee, location));
}

/**
 * Return standard time on fixed date date, of midday at location location
 * @param {float} date fixed
 * @param {location} location geographic location
 * @return {float} converted time
 */
export function midDay(date, location) {
  return localToStandard(apparentToLocal(date + 0.5, location), location);
}

/**
 * Convert Julian time to hour, minutes, and seconds, returned as a three-element array
 * @param {float} jd Julian day number
 * @return {float[]} day portion of Julian day number, as array [ hours, minutes, seconds ]
 */
export function jhms(jd) {
  var ij, j2;

  // Astronomical to civil
  j2 = jd + 0.5;
  ij = (j2 - Math.floor(j2)) * 86400.0 + 0.5;

  return [
    Math.floor(ij / 3600),
    Math.floor((ij / 60) % 60),
    Math.floor(ij % 60),
  ];
}

/**
 * Calculate day of week from Julian day
 * @param {float} jd Julian day number
 * @return {int} week day
 */
export function jwday(jd) {
  return mod(Math.floor(jd - 0.5), 7);
}

/**
 * Return the longitudinal nutation at moment tee
 * @param {float} tee moment in time
 * @return {float} nutation at tee
 */
function nutation(tee) {
  var centuries = julianCenturies(tee),
    capA = poly(centuries, [124.9, -1934.134, 0.002063]),
    capB = poly(centuries, [201.11, 72001.5377, 0.00057]);

  return -0.004778 * sinDeg(capA) + -0.0003667 * sinDeg(capB);
}

/**
 * Determine the difference, in seconds, between Dynamical time and Universal time.
 * @param {int} year Gregorian year
 * @return {float} time difference
 */
export function deltat(year) {
  var dt, fraction, index, t0;

  if (year >= 1620 && year <= 2000) {
    index = Math.floor((year - 1620) / 2);
    // Fractional part of year
    fraction = (year - 1620) / 2 - index;

    return (
      constants.DELTA_T_TAB[index] +
      (constants.DELTA_T_TAB[index + 1] - constants.DELTA_T_TAB[index]) *
        fraction
    );
  }

  t0 = (year - 2000) / 100;

  if (year < 948) {
    return 2177 + 497 * t0 + 44.1 * t0 * t0;
  }

  dt = 102 + 102 * t0 + 25.3 * t0 * t0;

  if (year > 2000 && year < 2100) {
    dt += 0.37 * (year - 2100);
  }

  return dt;
}

/**
 * Determine the Julian Ephemeris Day of an equinox or solstice.
 * The `which` argument selects the event to be computed:
 *
 * 0 - March equinox
 * 1 - June solstice
 * 2 - September equinox
 * 3 - December solstice
 * @param {int} year the Gregorian year
 * @param {int} which event
 * @return {float} moment in time when event occurs
 */
export function equinox(year, which) {
  var deltaL, index, j0, JDE0, JDE0tab, sum, t0, w0, y0;

  // Initialise terms for mean equinox and solstices. We have two sets:
  // one for years prior to 1000 and a second for subsequent years.
  if (year < 1000) {
    JDE0tab = constants.JDE0_TAB_1000;
    y0 = year / 1000;
  } else {
    JDE0tab = constants.JDE0_TAB_2000;
    y0 = (year - 2000) / 1000;
  }

  JDE0 =
    JDE0tab[which][0] +
    JDE0tab[which][1] * y0 +
    JDE0tab[which][2] * Math.pow(y0, 2) +
    JDE0tab[which][3] * Math.pow(y0, 3) +
    JDE0tab[which][4] * Math.pow(y0, 4);

  t0 = (JDE0 - 2451545.0) / 36525;
  w0 = 35999.373 * t0 - 2.47;
  deltaL = 1 + 0.0334 * cosDeg(w0) + 0.0007 * cosDeg(2 * w0);

  // Sum the periodic terms for time t0
  sum = index = j0 = 0;
  while (index < 24) {
    sum +=
      constants.EQUINOX_P_TERMS[j0] *
      cosDeg(
        constants.EQUINOX_P_TERMS[j0 + 1] +
          constants.EQUINOX_P_TERMS[j0 + 2] * t0
      );
    j0 += 3;
    index += 1;
  }

  return JDE0 + (sum * 0.00001) / deltaL;
}

/**
 * Return the aberration at moment, tee.
 * @param {float} tee moment in time
 * @return {float} aberration
 */
function aberration(tee) {
  var centuries = julianCenturies(tee);

  return 0.0000974 * cosDeg(177.63 + 35999.01848 * centuries) - 0.005575;
}

/**
 * Return the longitude of sun at moment 'tee'.
 * Adapted from 'Planetary Programs and Tables from -4000 to +2800'
 * by Pierre Bretagnon and Jean_Louis Simon, Willmann_Bell, Inc., 1986.
 * See also pag 166 of 'Astronomical Algorithms' by Jean Meeus, 2nd Ed 1998,
 * with corrections Jun 2005.
 * @param {float} tee moment in time
 * @return {float} solar longitude
 */
export function solarLongitude(tee) {
  var centuries, lambda;

  centuries = julianCenturies(tee);
  lambda =
    282.7771834 +
    36000.76953744 * centuries +
    0.000005729577951308232 *
      sigma(
        [
          constants.SOLAR_LONGITUDE_COEFFICIENTS,
          constants.SOLAR_LONGITUDE_ADDENDS,
          constants.SOLAR_LONGITUDE_MULTIPLIERS,
        ],
        function (x0, y0, z0) {
          return x0 * sinDeg(y0 + z0 * centuries);
        }
      );

  return mod(lambda + aberration(tee) + nutation(tee), 360);
}

/**
 * Return approximate moment at or before tee when solar longitude
 * just exceeded lambda degrees.
 * @param {float} lambda degrees
 * @param {float} tee moment in time
 * @return {float} longitude
 */
export function estimatePriorSolarLongitude(lambda, tee) {
  var rate = calendarConstants.MEAN_TROPICAL_YEAR / 360,
    tau = tee - rate * mod(solarLongitude(tee) - lambda, 360),
    capDelta = mod(solarLongitude(tau) - lambda + 180, 360) - 180;

  return Math.min(tee, tau - rate * capDelta);
}

/**
 * Return the precession at moment tee using 0,0 as J2000 coordinates.
 * Adapted from "Astronomical Algorithms" by Jean Meeus, Willmann-Bell, Inc., 1991.
 * @param {float} tee moment in time
 * @return {float} precession value
 */
export function precession(tee) {
  var centuries, eta, capP, p0, capA, capB, arg;

  centuries = julianCenturies(tee);
  eta = mod(
    poly(centuries, [0, 47.0029 / 3600, -0.03302 / 3600, 0.00006 / 3600]),
    360
  );
  capP = mod(
    poly(centuries, [174.876384, -869.8089 / 3600, 0.03536 / 3600]),
    360
  );
  p0 = mod(
    poly(centuries, [0, 5029.0966 / 3600, 1.11113 / 3600, 0.000006 / 3600]),
    360
  );
  capA = cosDeg(eta) * sinDeg(capP);
  capB = cosDeg(capP);
  arg = arcTanDeg(capA, capB);

  return mod(p0 + capP - arg, 360);
}

/**
 * Return declination at moment UT tee of object at longitude lambda and latitude beta.
 * @param {float} tee moment in time
 * @param {float} beta latitude
 * @param {float} lambda longitude
 * @return {float} declination
 */
function declination(tee, beta, lambda) {
  var eps = obliquity(tee);

  return arcSinDeg(
    sinDeg(beta) * cosDeg(eps) + cosDeg(beta) * sinDeg(eps) * sinDeg(lambda)
  );
}

/**
 * Return sine of angle between position of sun at local time tee and when
 * its depression is alpha at location. Out of range when it does not occur.
 * @param {float} tee moment ini time
 * @param {location} location geo-location
 * @param {float} alpha angle
 * @return {float} sine offset
 */
function sineOffset(tee, location, alpha) {
  var phi = location[0],
    teePrime = localToUniversal(tee, location),
    delta = declination(teePrime, 0, solarLongitude(teePrime));

  return (
    tanDeg(phi) * tanDeg(delta) + (sinDeg(alpha) / cosDeg(delta)) * cosDeg(phi)
  );
}

/**
 * Return the moment in local time near tee when depression angle of sun is
 * alpha (negative if above horizon) at location; early is true when MORNING
 * event is sought and false for EVENING.
 * Returns -1 if depression angle is not reached.
 * @param {float} tee moment in time
 * @param {location} location geo-location
 * @param {float} alpha angle
 * @param {boolean} early MORNING or EVENING
 * @return {float} moment of depression
 */
function approxMomentOfDepression(tee, location, alpha, early) {
  var ttry = sineOffset(tee, location, alpha),
    date = momentToFixed(tee),
    alt,
    value,
    temp;

  if (alpha >= 0) {
    alt = early ? date : date + 1;
  } else {
    alt = date + 0.5;
  }

  if (Math.abs(ttry) > 1) {
    value = sineOffset(alt, location, alpha);
  } else {
    value = ttry;
  }

  if (Math.abs(value) <= 1) {
    temp = early ? -1 : 1;
    temp *= mod(0.5 + arcSinDeg(value) / 360, 1) - 0.25;
    temp += date + 0.5;

    return apparentToLocal(temp, location);
  }

  return -1;
}

/**
 * Return the moment in local time near approx when depression angle of sun is
 * alpha (negative if above horizon) at location; early is true when MORNING
 * event is sought, and false for EVENING.
 * Returns -1 if depression angle is not reached.
 * @param {float} approx approximation
 * @param {location} location geo-location
 * @param {float} alpha angle of the sun
 * @param {boolean} early MORNING or EVENING
 * @return {float} moment of depression
 */
function momentOfDepression(approx, location, alpha, early) {
  var tee = approxMomentOfDepression(approx, location, alpha, early);

  if (tee === -1) {
    return -1;
  }

  if (Math.abs(approx - tee) < 30 / 86400) {
    return tee;
  }

  return momentOfDepression(tee, location, alpha, early);
}

/**
 * Return standard time in morning on fixed date date at location when
 * depression angle of sun is alpha.
 * Returns -1 if there is no dawn on date.
 * @param {float} date moment in time
 * @param {location} location geo-location
 * @param {float} alpha angle
 * @return {float} time of dawn
 */
export function dawn(date, location, alpha) {
  var result = momentOfDepression(date + 0.25, location, alpha, true);

  if (result === -1) {
    return -1;
  }

  return localToStandard(result, location);
}

/**
 * Return standard time in evening on fixed date at location when depression
 * angle of sun is alpha.
 * Return -1 if there is no dusk on date.
 * @param {float} date moment in time
 * @param {location} location geo-location
 * @param {float} alpha angle
 * @return {float} time of dusk
 */
export function dusk(date, location, alpha) {
  var result = momentOfDepression(date + 0.75, location, alpha, false);

  if (result === -1) {
    return -1;
  }

  return localToStandard(result, location);
}

/**
 * Return the moment of n-th new moon after (or before) the new moon of January 11, 1.
 * Adapted from "Astronomical Algorithms" by Jean Meeus, Willmann_Bell, Inc., 2nd ed., 1998.
 * @param {float} n0 moment in time
 * @return {float} moment of the n-th moon
 */
function nthNewMoon(n0) {
  var k0,
    c0,
    approx,
    capE,
    solarAnomaly2,
    lunarAnomaly2,
    moonArg,
    capO,
    eFactor,
    solarCoeff,
    lunarCoeff,
    moonCoeff,
    sineCoeff,
    correction,
    addConst,
    addCoeff,
    addFactor,
    extra,
    additional;

  k0 = n0 - 24724;
  c0 = k0 / 1236.85;
  approx =
    calendarConstants.J2000 +
    poly(c0, [
      5.09766,
      calendarConstants.MEAN_SYNODIC_MONTH * 1236.85,
      0.0001437,
      -0.00000015,
      0.00000000073,
    ]);
  capE = poly(c0, [1, -0.002516, -0.0000074]);
  solarAnomaly2 = poly(c0, [
    2.5534,
    1236.85 * 29.10535669,
    -0.0000014,
    -0.00000011,
  ]);
  lunarAnomaly2 = poly(c0, [
    201.5643,
    385.81693528 * 1236.85,
    0.0107582,
    0.00001238,
    -0.000000058,
  ]);
  moonArg = poly(c0, [
    160.7108,
    390.67050284 * 1236.85,
    -0.0016118,
    -0.00000227,
    0.000000011,
  ]);
  capO = poly(c0, [124.7746, -1.56375588 * 1236.85, 0.0020672, 0.00000215]);
  eFactor = [
    0,
    1,
    0,
    0,
    1,
    1,
    2,
    0,
    0,
    1,
    0,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
  ];
  solarCoeff = [
    0,
    1,
    0,
    0,
    -1,
    1,
    2,
    0,
    0,
    1,
    0,
    1,
    1,
    -1,
    2,
    0,
    3,
    1,
    0,
    1,
    -1,
    -1,
    1,
    0,
  ];
  lunarCoeff = [
    1,
    0,
    2,
    0,
    1,
    1,
    0,
    1,
    1,
    2,
    3,
    0,
    0,
    2,
    1,
    2,
    0,
    1,
    2,
    1,
    1,
    1,
    3,
    4,
  ];
  moonCoeff = [
    0,
    0,
    0,
    2,
    0,
    0,
    0,
    -2,
    2,
    0,
    0,
    2,
    -2,
    0,
    0,
    -2,
    0,
    -2,
    2,
    2,
    2,
    -2,
    0,
    0,
  ];
  sineCoeff = [
    -0.4072,
    0.17241,
    0.01608,
    0.01039,
    0.00739,
    -0.00514,
    0.00208,
    -0.00111,
    -0.00057,
    0.00056,
    -0.00042,
    0.00042,
    0.00038,
    -0.00024,
    -0.00007,
    0.00004,
    0.00004,
    0.00003,
    0.00003,
    -0.00003,
    0.00003,
    -0.00002,
    -0.00002,
    0.00002,
  ];
  correction =
    -0.00017 * sinDeg(capO) +
    sigma([sineCoeff, eFactor, solarCoeff, lunarCoeff, moonCoeff], function (
      v0,
      w0,
      x0,
      y0,
      z0
    ) {
      return (
        v0 *
        Math.pow(capE, w0) *
        sinDeg(x0 * solarAnomaly2 + y0 * lunarAnomaly2 + z0 * moonArg)
      );
    });
  addConst = [
    251.88,
    251.83,
    349.42,
    84.66,
    141.74,
    207.14,
    154.84,
    34.52,
    207.19,
    291.34,
    161.72,
    239.56,
    331.55,
  ];
  addCoeff = [
    0.016321,
    26.651886,
    36.412478,
    18.206239,
    53.303771,
    2.453732,
    7.30686,
    27.261239,
    0.121824,
    1.844379,
    24.198154,
    25.513099,
    3.592518,
  ];
  addFactor = [
    0.000165,
    0.000164,
    0.000126,
    0.00011,
    0.000062,
    0.00006,
    0.000056,
    0.000047,
    0.000042,
    0.00004,
    0.000037,
    0.000035,
    0.000023,
  ];
  extra = 0.000325 * sinDeg(poly(c0, [299.77, 132.8475848, -0.009173]));
  additional = sigma([addConst, addCoeff, addFactor], function (i0, j0, l0) {
    return l0 * sinDeg(i0 + j0 * k0);
  });

  return dynamicalToUniversal(approx + correction + extra + additional);
}

/**
 * Return mean longitude of moon (in degrees) at moment given in Julian centuries.
 * including the constant term of the effect of the light-time (-0".70).
 * Adapted from eq. 47.1 in "Astronomical Algorithms" by Jean Meeus,
 * Willmann_Bell, Inc., 2nd ed. with corrections, 2005.
 * @param {float} centuries Julian centuries relative to 2000-01-01
 * @return {float} mean lunar longitude
 */
function meanLunarLongitude(centuries) {
  return degrees(
    poly(centuries, [
      218.3164477,
      481267.88123421,
      -0.0015786,
      1 / 538841,
      -1 / 65194000,
    ])
  );
}

/**
 * Return elongation of moon (in degrees) at moment given in Julian centuries.
 * Adapted from eq. 47.2 in "Astronomical Algorithms" by Jean Meeus,
 * Willmann_Bell, Inc., 2nd ed. with corrections, 2005.
 * @param {float} centuries Julian centuries relative to 2000-01-01
 * @return {float} lunar elongation
 */
function lunarElongation(centuries) {
  return degrees(
    poly(centuries, [
      297.8501921,
      445267.1114034,
      -0.0018819,
      1 / 545868,
      -1 / 113065000,
    ])
  );
}

/**
 * Return mean anomaly of sun (in degrees) at moment given in Julian centuries.
 * Adapted from eq. 47.3 in "Astronomical Algorithms" by Jean Meeus,
 * Willmann_Bell, Inc., 2nd ed. with corrections, 2005.
 * @param {float} centuries Julian centuries relative to 2000-01-01
 * @return {float} solar anomaly
 */
function solarAnomaly(centuries) {
  return degrees(
    poly(centuries, [357.5291092, 35999.0502909, -0.0001536, 1 / 24490000])
  );
}

/**
 * Return mean anomaly of moon (in degrees) at moment given in Julian centuries.
 * Adapted from eq. 47.4 in "Astronomical Algorithms" by Jean Meeus,
 * Willmann_Bell, Inc., 2nd ed. with corrections, 2005.
 * @param {float} centuries Julian centuries relative to 2000-01-01
 * @return {float} lunar anomaly
 */
function lunarAnomaly(centuries) {
  return degrees(
    poly(centuries, [
      134.9633964,
      477198.8675055,
      0.0087414,
      1 / 69699,
      -1 / 14712000,
    ])
  );
}

/**
 * Return Moon's argument of latitude (in degrees) at moment given in Julian centuries.
 * Adapted from eq. 47.5 in "Astronomical Algorithms" by Jean Meeus,
 * Willmann_Bell, Inc., 2nd ed. with corrections, 2005.
 * @param {float} centuries Julian centuries relative to 2000-01-01
 * @return {float} moon node
 */
function moonNode(centuries) {
  return degrees(
    poly(centuries, [
      93.272095,
      483202.0175233,
      -0.0036539,
      -1 / 3526000,
      1 / 863310000,
    ])
  );
}

/**
 * Return longitude of moon (in degrees) at moment tee.
 * Adapted from "Astronomical Algorithms" by Jean Meeus, Willmann_Bell, Inc., 2nd ed., 1998.
 * @param {float} tee moment in time
 * @return {float} lunar longitude
 */
function lunarLongitude(tee) {
  var centuries,
    capLprime,
    capD,
    capM,
    capMprime,
    capF,
    capE,
    lunarElongationArgs,
    solarAnomalyArgs,
    lunarAnomalyArgs,
    moonNodeArgs,
    sineCoeff,
    correction,
    A1,
    venus,
    A2,
    jupiter,
    flatEarth;

  centuries = julianCenturies(tee);
  capLprime = meanLunarLongitude(centuries);
  capD = lunarElongation(centuries);
  capM = solarAnomaly(centuries);
  capMprime = lunarAnomaly(centuries);
  capF = moonNode(centuries);
  // see eq. 47.6 in Meeus
  capE = poly(centuries, [1, -0.002516, -0.0000074]);

  lunarElongationArgs = [
    0,
    2,
    2,
    0,
    0,
    0,
    2,
    2,
    2,
    2,
    0,
    1,
    0,
    2,
    0,
    0,
    4,
    0,
    4,
    2,
    2,
    1,
    1,
    2,
    2,
    4,
    2,
    0,
    2,
    2,
    1,
    2,
    0,
    0,
    2,
    2,
    2,
    4,
    0,
    3,
    2,
    4,
    0,
    2,
    2,
    2,
    4,
    0,
    4,
    1,
    2,
    0,
    1,
    3,
    4,
    2,
    0,
    1,
    2,
  ];
  solarAnomalyArgs = [
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    -1,
    0,
    -1,
    1,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    0,
    1,
    -1,
    0,
    0,
    0,
    1,
    0,
    -1,
    0,
    -2,
    1,
    2,
    -2,
    0,
    0,
    -1,
    0,
    0,
    1,
    -1,
    2,
    2,
    1,
    -1,
    0,
    0,
    -1,
    0,
    1,
    0,
    1,
    0,
    0,
    -1,
    2,
    1,
    0,
  ];
  lunarAnomalyArgs = [
    1,
    -1,
    0,
    2,
    0,
    0,
    -2,
    -1,
    1,
    0,
    -1,
    0,
    1,
    0,
    1,
    1,
    -1,
    3,
    -2,
    -1,
    0,
    -1,
    0,
    1,
    2,
    0,
    -3,
    -2,
    -1,
    -2,
    1,
    0,
    2,
    0,
    -1,
    1,
    0,
    -1,
    2,
    -1,
    1,
    -2,
    -1,
    -1,
    -2,
    0,
    1,
    4,
    0,
    -2,
    0,
    2,
    1,
    -2,
    -3,
    2,
    1,
    -1,
    3,
  ];
  moonNodeArgs = [
    0,
    0,
    0,
    0,
    0,
    2,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    -2,
    2,
    -2,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    2,
    0,
    0,
    0,
    0,
    0,
    0,
    -2,
    2,
    0,
    2,
    0,
    0,
    0,
    0,
    0,
    0,
    -2,
    0,
    0,
    0,
    0,
    -2,
    -2,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
  ];
  sineCoeff = [
    6288774,
    1274027,
    658314,
    213618,
    -185116,
    -114332,
    58793,
    57066,
    53322,
    45758,
    -40923,
    -34720,
    -30383,
    15327,
    -12528,
    10980,
    10675,
    10034,
    8548,
    -7888,
    -6766,
    -5163,
    4987,
    4036,
    3994,
    3861,
    3665,
    -2689,
    -2602,
    2390,
    -2348,
    2236,
    -2120,
    -2069,
    2048,
    -1773,
    -1595,
    1215,
    -1110,
    -892,
    -810,
    759,
    -713,
    -700,
    691,
    596,
    549,
    537,
    520,
    -487,
    -399,
    -381,
    351,
    -340,
    330,
    327,
    -323,
    299,
    294,
  ];
  correction =
    (1 / 1000000) *
    sigma(
      [
        sineCoeff,
        lunarElongationArgs,
        solarAnomalyArgs,
        lunarAnomalyArgs,
        moonNodeArgs,
      ],
      function (v0, w0, x0, y0, z0) {
        return (
          v0 *
          Math.pow(capE, Math.abs(x0)) *
          sinDeg(w0 * capD + x0 * capM + y0 * capMprime + z0 * capF)
        );
      }
    );

  A1 = 119.75 + centuries * 131.849;
  venus = (3958 / 1000000) * sinDeg(A1);
  A2 = 53.09 + centuries * 479264.29;
  jupiter = (318 / 1000000) * sinDeg(A2);
  flatEarth = (1962 / 1000000) * sinDeg(capLprime - capF);

  return mod(
    capLprime + correction + venus + jupiter + flatEarth + nutation(tee),
    360
  );
}

/**
 * Return the lunar phase, as an angle in degrees, at moment tee.
 * An angle of
 *    0 means a new moon
 *   90 means the first quarter,
 *  180 means a full moon
 *  270 degrees means the last quarter
 * @param {float} tee moment in time
 * @return {float} lunar phase at tee
 */
export function lunarPhase(tee) {
  var phi, t0, n0, phi2;

  phi = mod(lunarLongitude(tee) - solarLongitude(tee), 360);
  t0 = nthNewMoon(0);
  n0 = Math.round((tee - t0) / calendarConstants.MEAN_SYNODIC_MONTH);
  phi2 =
    360 * mod((tee - nthNewMoon(n0)) / calendarConstants.MEAN_SYNODIC_MONTH, 1);

  if (Math.abs(phi - phi2) > 180) {
    return phi2;
  }

  return phi;
}

/**
 * Return the moment UT of last new moon before moment tee.
 * @param {float} tee moment in time
 * @return {float} new moon event before tee
 */
export function newMoonBefore(tee) {
  var t0 = nthNewMoon(0),
    phi = lunarPhase(tee),
    n0 = Math.round(
      (tee - t0) / calendarConstants.MEAN_SYNODIC_MONTH - phi / 360
    );

  return nthNewMoon(
    final(n0 - 1, function (k0) {
      return nthNewMoon(k0) < tee;
    })
  );
}

/**
 * Return the moment UT of first new moon at or after moment tee.
 * @param {float} tee moment in time
 * @return {float} new moon event before tee
 */
export function newMoonAtOrAfter(tee) {
  var t0 = nthNewMoon(0),
    phi = lunarPhase(tee),
    n0 = Math.round(
      (tee - t0) / calendarConstants.MEAN_SYNODIC_MONTH - phi / 360
    );

  return nthNewMoon(
    next(n0, function (k0) {
      return nthNewMoon(k0) >= tee;
    })
  );
}
