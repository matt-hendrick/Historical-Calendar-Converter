import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Grid } from '@material-ui/core';

import * as Calendrical from '../../utility/Calendrical/converterFunctions';
import * as constants from '../../utility/Calendrical/constants';
import * as astro from '../../utility/Calendrical/astro';
import classes from './MyDatePicker.module.css';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Card from '../../components/Card/Card';
import Footer from '../../components/UI/Footer/Footer';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

toast.configure();
function MyDatePicker() {
  const calcDecimalTime = () => {
    const dateTime = new Date();

    const standardHours = dateTime.getHours();
    const standardMinutes = dateTime.getMinutes();
    const standardSeconds = dateTime.getSeconds();

    const decimal =
      standardHours * 4166.6666667 +
      standardMinutes * 69.444444 +
      standardSeconds * 1.1555555;

    const decimalHours = Math.floor(decimal / 10000);
    let decimalMinutes = Math.floor(decimal / 100).toString();
    if (decimalMinutes.length > 2) {
      decimalMinutes = decimalMinutes.substring(
        decimalMinutes.length - 2,
        decimalMinutes.length
      );
    }
    let decimalSeconds = Math.floor(decimal).toString();
    if (decimalSeconds.length > 2) {
      decimalSeconds = decimalSeconds.substring(
        decimalSeconds.length - 2,
        decimalSeconds.length
      );
    }

    const decimalTime =
      decimalHours + ':' + decimalMinutes + ':' + decimalSeconds;

    return decimalTime;
  };

  const [selectedDecimalTime, setSelectedDecimalTime] = useState(
    calcDecimalTime
  );

  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const [selectedDay, setSelectedDay] = useState(new Date().getDate());

  const [formYear, setFormYear] = useState(new Date().getFullYear());
  const [formMonth, setFormMonth] = useState(new Date().getMonth() + 1);
  const [formDay, setFormDay] = useState(new Date().getDate());

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedDecimalTime(calcDecimalTime);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const notify = (message, position, type) => {
    if (type === 'success') {
      toast.success(message, { position: position, autoClose: 1500 });
    }
    if (type === 'error') {
      toast.error(message, { position: position, autoClose: 2000 });
    }
  };

  const convertDateHandler = (event) => {
    event.preventDefault();
    if (
      formYear < 100000 &&
      formYear > -100000 &&
      formMonth <= 12 &&
      formMonth >= 1 &&
      formDay >= 1
    ) {
      if (parseInt(formDay, 10) === 31) {
        if (
          formMonth === 1 ||
          formMonth === 3 ||
          formMonth === 5 ||
          formMonth === 7 ||
          formMonth === 8 ||
          formMonth === 10 ||
          formMonth === 12
        ) {
          setSelectedYear(parseInt(formYear, 10));
          setSelectedMonth(parseInt(formMonth, 10));
          setSelectedDay(parseInt(formDay, 10));
          notify('Date Converted!', toast.POSITION.TOP_CENTER, 'success');
        } else {
          setFormDay(new Date().getDate());
          notify(
            'Please enter a valid day of the month. There are not 31 days in ' +
              constants.gregorian.MONTHS[formMonth - 1] +
              '.',
            toast.POSITION.TOP_CENTER,
            'error'
          );
        }
      } else if (parseInt(formDay, 10) === 30) {
        if (parseInt(formMonth, 10) === 2) {
          setFormDay(new Date().getDate());
          notify(
            'Please enter a valid day of the month. There are not 30 days in February.',
            toast.POSITION.TOP_CENTER,
            'error'
          );
        } else {
          setSelectedYear(parseInt(formYear, 10));
          setSelectedMonth(parseInt(formMonth, 10));
          setSelectedDay(parseInt(formDay, 10));
          notify('Date Converted!', toast.POSITION.TOP_CENTER, 'success');
        }
      } else if (parseInt(formDay, 10) === 29) {
        if (parseInt(formMonth, 10) === 2) {
          if (Calendrical.leapGregorian(formYear)) {
            setSelectedYear(parseInt(formYear, 10));
            setSelectedMonth(parseInt(formMonth, 10));
            setSelectedDay(parseInt(formDay, 10));
            notify('Date Converted!', toast.POSITION.TOP_CENTER, 'success');
          } else if (!Calendrical.leapGregorian(formYear)) {
            setFormDay(new Date().getDate());
            notify(
              'Please enter a valid day of the month. There are not 29 days in February during a non-leap year.',
              toast.POSITION.TOP_CENTER,
              'error'
            );
          }
        } else {
          setSelectedYear(parseInt(formYear, 10));
          setSelectedMonth(parseInt(formMonth, 10));
          setSelectedDay(parseInt(formDay, 10));
          notify('Date Converted!', toast.POSITION.TOP_CENTER, 'success');
        }
      } else if (parseInt(formDay, 10) <= 28) {
        setSelectedYear(parseInt(formYear, 10));
        setSelectedMonth(parseInt(formMonth, 10));
        setSelectedDay(parseInt(formDay, 10));
        notify('Date Converted!', toast.POSITION.TOP_CENTER, 'success');
      }
    }
    if (formYear > 100000 || formYear < -100000) {
      setFormYear(new Date().getFullYear());
      notify(
        'Please enter a year between -100000 and 100000',
        toast.POSITION.TOP_CENTER,
        'error'
      );
    }
    if (formMonth > 12 || formMonth < 1) {
      setFormMonth(new Date().getMonth() + 1);
      notify(
        'Please enter the number of a month between 1 and 12',
        toast.POSITION.TOP_CENTER,
        'error'
      );
    }
    if (formDay > 31 || formDay < 1) {
      setFormDay(new Date().getDate());
      notify(
        'Please enter a valid day of the month',
        toast.POSITION.TOP_CENTER,
        'error'
      );
    }
    if (isNaN(formDay) || isNaN(formMonth) || isNaN(formYear)) {
      setFormYear(new Date().getFullYear());
      setFormMonth(new Date().getMonth() + 1);
      setFormDay(new Date().getDate());
      notify('Please only enter numbers', toast.POSITION.TOP_CENTER, 'error');
    }
  };

  const handleYearChange = (event) => {
    const updatedYear = event.target.value;
    setFormYear(updatedYear);
  };

  const handleMonthChange = (event) => {
    const updatedMonth = event.target.value;
    setFormMonth(updatedMonth);
  };

  const handleDayChange = (event) => {
    const updatedDay = event.target.value;
    setFormDay(updatedDay);
  };

  // dates
  // Gregorian-Julian Weekdays
  // calculates Julian day and uses that to calculate weekday
  const jwDay =
    astro.jwday(
      Calendrical.gregorianToJd(selectedYear, selectedMonth, selectedDay)
    ) + 2;

  let selectedWeekday = null;
  let islamicWeekday = null;
  let persianWeekday = null;
  let bahaiWeekday = null;
  let indianWeekday = null;

  // corrects jwDay calculation and accounts for that correction creating negative indexes for Sunday/Monday
  if (jwDay === 8) {
    selectedWeekday = astro.constants.WEEKDAYS[1];
    islamicWeekday = 'yawm ' + constants.islamic.WEEKDAYS[1];
    persianWeekday = constants.persian.WEEKDAYS[1];
    bahaiWeekday = constants.bahai.WEEKDAYS[1];
    indianWeekday = constants.hindu.WEEKDAYS[1];
  } else if (jwDay === 7) {
    selectedWeekday = astro.constants.WEEKDAYS[0];
    islamicWeekday = 'yawm ' + constants.islamic.WEEKDAYS[0];
    persianWeekday = constants.persian.WEEKDAYS[0];
    bahaiWeekday = constants.bahai.WEEKDAYS[0];
    indianWeekday = constants.hindu.WEEKDAYS[0];
  } else if (jwDay) {
    selectedWeekday = astro.constants.WEEKDAYS[jwDay];
    islamicWeekday = 'yawm ' + constants.islamic.WEEKDAYS[jwDay];
    persianWeekday = constants.persian.WEEKDAYS[jwDay];
    bahaiWeekday = constants.bahai.WEEKDAYS[jwDay];
    indianWeekday = constants.hindu.WEEKDAYS[jwDay];
  }

  const julianDate = Calendrical.jdToJulian(
    Calendrical.gregorianToJd(selectedYear, selectedMonth, selectedDay)
  );

  const numJulianDate =
    julianDate[1] +
    '/' +
    julianDate[2] +
    '/' +
    julianDate[0] +
    ' (' +
    selectedWeekday +
    ')';

  const hebrewDate = Calendrical.jdToHebrew(
    Calendrical.gregorianToJd(selectedYear, selectedMonth, selectedDay)
  );

  const numHebrewDate =
    hebrewDate[1] + '/' + hebrewDate[2] + '/' + hebrewDate[0];

  const frenchDate = Calendrical.jdToFrenchRevolutionary(
    Calendrical.gregorianToJd(selectedYear, selectedMonth, selectedDay)
  );

  let textFrenchDate =
    constants.french_revolutionary.MOIS[frenchDate[1] - 1] +
    ', Decade ' +
    constants.french_revolutionary.DECADE[frenchDate[2] - 1] +
    ', ' +
    constants.french_revolutionary.JOUR[frenchDate[3] - 1] +
    ', ' +
    frenchDate[0];

  if (frenchDate[1] === 13) {
    textFrenchDate =
      constants.french_revolutionary.MOIS[frenchDate[1] - 1] +
      ', Decade ' +
      constants.french_revolutionary.DECADE[frenchDate[2] - 1] +
      ', ' +
      constants.french_revolutionary.JOUR[frenchDate[3] + 10] +
      ', ' +
      frenchDate[0];
  }

  let frenchDay = frenchDate[3];

  if (frenchDate[2] === 2) {
    frenchDay = frenchDate[3] + 10;
  }
  if (frenchDate[2] === 3) {
    frenchDay = frenchDate[3] + 20;
  }

  const numFrenchDate = frenchDate[1] + '/' + frenchDay + '/' + frenchDate[0];

  const ruralFrenchDay =
    constants.frenchRuralDays[frenchDate[1]][frenchDay - 1];

  const ruralFrenchDateSentence =
    frenchDay +
    ' ' +
    constants.french_revolutionary.MOIS[frenchDate[1] - 1] +
    ' is the French Revolutionary day of the ' +
    ruralFrenchDay +
    '. Current French Revolutionary decimal time is ' +
    selectedDecimalTime +
    '.';

  const islamicDate = Calendrical.jdToIslamic(
    Calendrical.gregorianToJd(selectedYear, selectedMonth, selectedDay)
  );

  const numIslamicDate =
    islamicDate[1] +
    '/' +
    islamicDate[2] +
    '/' +
    islamicDate[0] +
    ' (' +
    islamicWeekday +
    ')';

  const persianDate = Calendrical.jdToPersian(
    Calendrical.gregorianToJd(selectedYear, selectedMonth, selectedDay)
  );

  const numPersianDate =
    persianDate[1] +
    '/' +
    persianDate[2] +
    '/' +
    persianDate[0] +
    ' (' +
    persianWeekday +
    ')';

  const mayanDate = Calendrical.jdToMayanCount(
    Calendrical.gregorianToJd(selectedYear, selectedMonth, selectedDay)
  );

  const numMayanDate =
    mayanDate[0] +
    '.' +
    mayanDate[1] +
    '.' +
    mayanDate[2] +
    '.' +
    mayanDate[3] +
    '.' +
    mayanDate[4];

  const bahaiDate = Calendrical.jdToBahai(
    Calendrical.gregorianToJd(selectedYear, selectedMonth, selectedDay)
  );

  const numBahaiDate =
    bahaiDate[0] +
    '/' +
    bahaiDate[1] +
    '/' +
    bahaiDate[2] +
    '/' +
    bahaiDate[3] +
    '/' +
    bahaiDate[4] +
    ' (' +
    bahaiWeekday +
    ')';

  const indianDate = Calendrical.jdToIndianCivil(
    Calendrical.gregorianToJd(selectedYear, selectedMonth, selectedDay)
  );

  const numIndianDate =
    indianDate[1] +
    '/' +
    indianDate[2] +
    '/' +
    indianDate[0] +
    ' (' +
    indianWeekday +
    ')';

  return (
    <div className={classes.MyDatePicker}>
      <Typography variant="h5" gutterBottom className={classes.GregorianDate}>
        The selected Gregorian date is {selectedWeekday},{' '}
        {constants.gregorian.MONTHS[selectedMonth - 1]} {selectedDay},{' '}
        {selectedYear}.
        <br />
        {Calendrical.leapGregorian(selectedYear)
          ? 'The Gregorian year ' + selectedYear + ' is a leap year.'
          : 'The Gregorian year ' + selectedYear + ' is not a leap year.'}
      </Typography>
      <div>
        <form onSubmit={convertDateHandler} className={classes.Form}>
          <div className={classes.Inputs}>
            <Input
              label="Month"
              value={formMonth}
              changed={(event) => handleMonthChange(event)}
              required
            />
            <Input
              label="Day"
              value={formDay}
              changed={(event) => handleDayChange(event)}
              required
            />
            <Input
              label="Year"
              value={formYear}
              changed={(event) => handleYearChange(event)}
              required
            />
          </div>
          <Button className={classes.Button}>Convert your date!</Button>
        </form>
      </div>
      <Typography variant="h5" gutterBottom>
        Converted Calendar Dates
      </Typography>
      <Grid container spacing={2} justify="center" alignItems="center">
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <Card
            title="Julian Calendar Date"
            secondary={numJulianDate}
            tertiary={
              Calendrical.leapJulian(julianDate[0])
                ? 'The Julian year ' + julianDate[0] + ' is a leap year.'
                : 'The Julian year ' + julianDate[0] + ' is not a leap year.'
            }
          >
            {constants.julian.MONTHS[julianDate[1] - 1]} {julianDate[2]},{' '}
            {julianDate[0]}
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Card
            title="French Revolutionary Calendar Date"
            secondary={numFrenchDate}
            tertiary={ruralFrenchDateSentence}
          >
            {textFrenchDate}
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Card
            title="Islamic (Hijri) Calendar Date"
            secondary={numIslamicDate}
            tertiary={
              Calendrical.leapIslamic(islamicDate[0])
                ? 'The Islamic year ' + islamicDate[0] + ' is a leap year.'
                : 'The Islamic year ' + islamicDate[0] + ' is not a leap year.'
            }
          >
            {constants.islamic.MONTHS[islamicDate[1] - 1]} {islamicDate[2]},{' '}
            {islamicDate[0]}
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Card
            title="Persian Calendar Date"
            secondary={numPersianDate}
            tertiary={
              Calendrical.leapPersian(persianDate[0])
                ? 'The Persian year ' + persianDate[0] + ' is a leap year.'
                : 'The Persian year ' + persianDate[0] + ' is not a leap year.'
            }
          >
            {constants.persian.MONTHS[persianDate[1] - 1]} {persianDate[2]},{' '}
            {persianDate[0]}
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Card
            title="Hebrew Calendar Date"
            secondary={numHebrewDate}
            tertiary={
              Calendrical.hebrewLeap(hebrewDate[0])
                ? 'The Hebrew year ' + hebrewDate[0] + ' is a leap year.'
                : 'The Hebrew year ' + hebrewDate[0] + ' is not a leap year.'
            }
          >
            {constants.hebrew.MONTHS[hebrewDate[1] - 1]} {hebrewDate[2]},{' '}
            {hebrewDate[0]}
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Card
            title="Baháʼí Calendar Converter"
            secondary={numBahaiDate}
            tertiary={
              Calendrical.leapBahai(bahaiDate[2])
                ? 'The Baháʼí year ' + bahaiDate[2] + ' is a leap year.'
                : 'The Baháʼí year ' + bahaiDate[2] + ' is not a leap year.'
            }
          >
            Kull-i-Shay {bahaiDate[0]}, Vahid {bahaiDate[1]},{' '}
            {constants.bahai.YEARS[bahaiDate[2] - 1]},{' '}
            {constants.bahai.MONTHS[bahaiDate[3] - 1]},{' '}
            {constants.bahai.DAYS[bahaiDate[4] - 1]}
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Card
            title="Indian National Calendar Date"
            secondary={numIndianDate}
            tertiary={
              Calendrical.leapGregorian(selectedYear)
                ? 'The Indian National year ' +
                  indianDate[0] +
                  ' is a leap year.'
                : 'The Indian National year ' +
                  indianDate[0] +
                  ' is not a leap year.'
            }
          >
            {constants.hindu.MONTHS[indianDate[1] - 1]} {indianDate[2]},{' '}
            {indianDate[0]}
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Card title="Mayan Calendar Date">{numMayanDate}</Card>
        </Grid>
      </Grid>
      <Footer>
        Credit to{' '}
        <Link href="http://legacy-www.math.harvard.edu/computing/javascript/Calendar/index.html">
          Fourmilab's calendar converter
        </Link>{' '}
        for the conversion equations and credit to{' '}
        <Link href="https://github.com/dzucconi/calendrical">dzucconi</Link> for
        making those equations more accessible
      </Footer>
    </div>
  );
}

export default MyDatePicker;
