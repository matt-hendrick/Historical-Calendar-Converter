import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Grid } from '@material-ui/core';

import * as Calendrical from '../../utility/Calendrical/converterFunctions';
import * as constants from '../../utility/Calendrical/constants';
import classes from './FrenchCalendar.module.css';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Card from '../../components/Card/Card';
import Footer from '../../components/UI/Footer/Footer';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

toast.configure();
function FrenchCalendar() {
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

  const calcStandardTime = () => {
    const dateTime = new Date();

    const standardHours = dateTime.getHours();
    const standardMinutes = dateTime.getMinutes();
    const standardSeconds = dateTime.getSeconds();

    const standardTime =
      standardHours + ':' + standardMinutes + ':' + standardSeconds;

    return standardTime;
  };

  const [selectedDecimalTime, setSelectedDecimalTime] = useState(
    calcDecimalTime
  );
  const [selectedStandardTime, setSelectedStandardTime] = useState(
    calcStandardTime
  );

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

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedDecimalTime(calcDecimalTime);
      setSelectedStandardTime(calcStandardTime);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

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
    ruralFrenchDay;

  const standardTimeSentence = 'Standard Time is ' + selectedStandardTime + '.';

  const britannicaDefinition =
    'French republican calendar, dating system that was adopted in 1793 during the French Revolution and which was intended to replace the Gregorian calendar with a more scientific and rational system that would avoid Christian associations. The Revolutionary Convention established the calendar on October 5, 1793, setting its beginning (1 Vendémiaire, year I) to a date nearly a year prior (September 22, 1792), when the National Convention had proclaimed France a republic.';

  const britannicaLink = (
    <Link href="https://www.britannica.com/science/French-republican-calendar">
      Visit Encyclopedia Britannica
    </Link>
  );

  return (
    <div className={classes.FrenchCalendar}>
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
            title="French Revolutionary Calendar Date"
            secondary={numFrenchDate}
            tertiary={ruralFrenchDateSentence}
          >
            {textFrenchDate}
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Card
            title="French Revolutionary Decimal Time"
            secondary={standardTimeSentence}
          >
            {selectedDecimalTime}
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} lg={12}>
          <Card
            title="Encyclopedia Britannica's Entry on the French Republican Calendar"
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
