import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Grid } from '@material-ui/core';

import * as Calendrical from '../../utility/Calendrical/converterFunctions';
import * as constants from '../../utility/Calendrical/constants';
import * as astro from '../../utility/Calendrical/astro';
import classes from './IslamicCalendar.module.css';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Card from '../../components/Card/Card';
import Footer from '../../components/UI/Footer/Footer';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

toast.configure();
function FrenchCalendar() {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const [selectedDay, setSelectedDay] = useState(new Date().getDate());

  const [formYear, setFormYear] = useState(new Date().getFullYear());
  const [formMonth, setFormMonth] = useState(new Date().getMonth() + 1);
  const [formDay, setFormDay] = useState(new Date().getDate());

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
      formDay <= 31 &&
      formDay >= 0
    ) {
      setSelectedYear(parseInt(formYear, 10));
      setSelectedMonth(parseInt(formMonth, 10));
      setSelectedDay(parseInt(formDay, 10));
      notify('Date Converted!', toast.POSITION.TOP_CENTER, 'success');
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

  const islamicDate = Calendrical.jdToIslamic(
    Calendrical.gregorianToJd(selectedYear, selectedMonth, selectedDay)
  );

  const islamicWeekday =
    'yawm ' +
    constants.islamic.WEEKDAYS[
      astro.jwday(
        Calendrical.gregorianToJd(selectedYear, selectedMonth, selectedDay)
      ) + 2
    ];

  const arabicIslamicWeekday =
    constants.islamic.ARABIC_WEEKDAYS[
      astro.jwday(
        Calendrical.gregorianToJd(selectedYear, selectedMonth, selectedDay)
      ) + 2
    ];

  const numIslamicDate =
    islamicDate[1] +
    '/' +
    islamicDate[2] +
    '/' +
    islamicDate[0] +
    ' (' +
    islamicWeekday +
    ')';

  const arabicNumIslamicDate =
    islamicDate[1] +
    '/' +
    islamicDate[2] +
    '/' +
    islamicDate[0] +
    ' (' +
    arabicIslamicWeekday +
    ')';

  const britannicaDefinition =
    'Muslim calendar, also called Hijrī calendar or Islamic calendar, dating system used in the Muslim world for religious purposes. (Most countries now use the Gregorian calendar for civil purposes.) It is based on a year of 12 months, each month beginning approximately at the time of the new moon. The months are alternately 30 and 29 days long except for the 12th, Dhū al-Ḥijjah, the length of which is varied in a 30-year cycle intended to keep the calendar in step with the true phases of the moon. In 11 years of this cycle, Dhū al-Ḥijjah has 30 days, and in the other 19 years it has 29. Thus, the year has either 354 or 355 days. No months are intercalated, so that the named months do not remain in the same seasons but retrogress through the entire solar, or seasonal, year (of about 365.25 days) every 32.5 solar years.';

  const britannicaLink = (
    <Link href="https://www.britannica.com/topic/Muslim-calendar">
      Visit Encyclopedia Britannica
    </Link>
  );

  return (
    <div className={classes.IslamicCalendar}>
      <Typography variant="h5" gutterBottom className={classes.GregorianDate}>
        The selected Gregorian date is{' '}
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
      <Grid container spacing={2} justify="center" alignItems="center">
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
            title="تاريخ التقويم الهجري"
            secondary={arabicNumIslamicDate}
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
        {/* <Grid item xs={12} sm={6} lg={4}>
          <Card
            title="Prayer Time Placeholder"
            secondary={standardTimeSentence}
          >
            {selectedDecimalTime}
          </Card>
        </Grid> */}
        <Grid item xs={12} sm={12} lg={12}>
          <Card
            title="Encyclopedia Britannica's Entry on the Islamic (Hijri) Calendar"
            button={britannicaLink}
          >
            {britannicaDefinition}
          </Card>
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

export default FrenchCalendar;
