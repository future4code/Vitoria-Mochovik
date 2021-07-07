import {Switch, Route, BrowserRouter} from 'react-router-dom';
import AdmHomePage from './pages/admHome/AdmHomePage';
import ApplicationFormPage from './pages/applicationForm/ApplicationFormPage';
import CreateTripPage from './pages/createTrip/CreateTripPage';
import HomePage from './pages/home/HomePage';
import ListTripsPage from './pages/listTrips/ListTripsPage';
import LoginPage from './pages/login/LoginPage';
import TripDetailsPage from './pages/tripDetails/TripDetailsPage';

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>

                <Route exact path="/trips/list">
                    <ListTripsPage />
                </Route>

                <Route exact path="/trips/application">
                    <ApplicationFormPage />
                </Route>

                <Route exact path="/login">
                    <LoginPage />
                </Route>

                <Route exact path="/admin/trips/list">
                    <AdmHomePage />
                </Route>

                <Route exact path="/admin/trips/create">
                    <CreateTripPage />
                </Route>

                <Route exact path="/admin/trips/:id">
                    <TripDetailsPage />
                </Route>

                <Route exact path="/">
                    <HomePage />
                </Route>

            </Switch>
        </BrowserRouter>
    )
}

export default Routes;