import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import * as Calendrical from '../../utility/Calendrical/converterFunctions';
import * as constants from '../../utility/Calendrical/constants';
import classes from './NYtimesOnThisDay.module.css';
import * as actions from '../../store/actions/index';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Spinner from '../../components/UI/Spinner/Spinner';

toast.configure();
function OnThisDay(props) {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const [selectedDay, setSelectedDay] = useState(new Date().getDate());

  const [formYear, setFormYear] = useState(new Date().getFullYear());
  const [formMonth, setFormMonth] = useState(new Date().getMonth() + 1);
  const [formDay, setFormDay] = useState(new Date().getDate());

  const [loading, setLoading] = useState(false);

  const { onGetNYTimes, NYTimesInfo } = props;

  const notify = (message, position, type) => {
    if (type === 'success') {
      toast.success(message, { position: position, autoClose: 1500 });
    }
    if (type === 'error') {
      toast.error(message, { position: position, autoClose: 2000 });
    }
  };

  let date =
    constants.gregorian.MONTHS[selectedMonth - 1].toLowerCase() +
    '-' +
    String(selectedDay);

  useEffect(() => {
    setLoading(true);
    onGetNYTimes(date);
    setLoading(false);
  }, [date, onGetNYTimes]);

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
          notify('Date Selected!', toast.POSITION.TOP_CENTER, 'success');
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
          notify('Date Selected!', toast.POSITION.TOP_CENTER, 'success');
        }
      } else if (parseInt(formDay, 10) === 29) {
        if (parseInt(formMonth, 10) === 2) {
          if (Calendrical.leapGregorian(formYear)) {
            setSelectedYear(parseInt(formYear, 10));
            setSelectedMonth(parseInt(formMonth, 10));
            setSelectedDay(parseInt(formDay, 10));
            notify('Date Selected!', toast.POSITION.TOP_CENTER, 'success');
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
          notify('Date Selected!', toast.POSITION.TOP_CENTER, 'success');
        }
      } else if (parseInt(formDay, 10) <= 28) {
        setSelectedYear(parseInt(formYear, 10));
        setSelectedMonth(parseInt(formMonth, 10));
        setSelectedDay(parseInt(formDay, 10));
        notify('Date Selected!', toast.POSITION.TOP_CENTER, 'success');
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

  let NYtimesLink = 'https://learning.blogs.nytimes.com/on-this-day/' + date;

  let previousDate = null;

  let eventData = <Spinner />;

  if (NYTimesInfo) {
    eventData = NYTimesInfo.map((data) => {
      let birthdays = null;
      if (!previousDate) {
        previousDate = data.date;
      } else if (previousDate && !birthdays) {
        if (data.date.length < previousDate.length) {
          birthdays = (
            <Typography variant="h6" gutterBottom>
              Famous Birthdays on{' '}
              {constants.gregorian.MONTHS[selectedMonth - 1]} {selectedDay}
            </Typography>
          );
          previousDate = data.date;
        }
      } else if (birthdays) {
        birthdays = null;
        previousDate = data.date;
      }
      return (
        <div key={data.event}>
          {birthdays}
          <div className={classes.EventCard}>
            <div className={classes.Date}>{data.date}: </div>
            <div className={classes.Event}> {data.event}</div>
          </div>
        </div>
      );
    });
  }

  if (loading) {
    eventData = <Spinner />;
  }

  return (
    <div className={classes.MyDatePicker}>
      <Typography variant="h5" gutterBottom>
        The selected date is {constants.gregorian.MONTHS[selectedMonth - 1]}{' '}
        {selectedDay}, {selectedYear}
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
          <Button className={classes.Button}>Select your date!</Button>
        </form>
      </div>
      <Typography variant="h6" gutterBottom>
        <Link href={NYtimesLink} color="inherit">
          The New York Times List of Historical Events that Occured on{' '}
          {constants.gregorian.MONTHS[selectedMonth - 1]} {selectedDay}
        </Link>
      </Typography>
      <div>{eventData}</div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    NYTimesInfo: state.NYTimesData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetNYTimes: (date) => dispatch(actions.getNYTimes(date)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OnThisDay);
