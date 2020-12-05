import React from 'react';
import { Grid } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';

import Sidedrawer from './components/Navigation/Sidedrawer/Sidedrawer';
import MyDatePicker from './containers/MyDatePicker/MyDatePicker';
// import FrenchCalendar from './containers/FrenchCalendar/FrenchCalendar';
// import NYtimesOnThisDay from './containers/NYtimesOnThisDay/NYtimesOnThisDay';
import WikipediaOnThisDay from './containers/WikipediaOnThisDay/WikipediaOnThisDay';
// import IslamicCalendar from './containers/IslamicCalendar/IslamicCalendar';

function App() {
  return (
    <React.Fragment>
      <Grid container direction="column">
        <Grid item>
          <Sidedrawer />
        </Grid>
        <Grid item container>
          <Grid item xs={false} sm={2} />
          <Grid item xs={12} sm={8}>
            <Switch>
              {/* <Route path="/NYTimes" exact component={NYtimesOnThisDay} /> */}
              <Route path="/OnThisDay" exact component={WikipediaOnThisDay} />
              {/* <Route path="/FrenchCalendar" exact component={FrenchCalendar} /> */}
              {/* <Route
                path="/IslamicCalendar"
                exact
                component={IslamicCalendar}
              /> */}
              <Route path="/" component={MyDatePicker} />
            </Switch>
          </Grid>
          <Grid item xs={false} sm={2} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default App;
