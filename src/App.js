import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Home,
  Agents,
  Listings,
  Login,
  Signup,
  Forgot,
  Agentt,
  Listing,
  Dashboard,
  UserProfile,
  Messages,
  Password,
  AddLisiting,
  AdminListingList,
  AdminAgentsList,
  AgentListing,
} from "./pages";
import VerifyOtp from '../src/pages/verify-email'
import VerifyToken from '../src/pages/verify-token'
import ChangePassword from '../src/pages/update-password'
import PrivateRoute from "./PrivateRoute";
const App = () => {
  return (
    <Router>
      <Switch>

        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/forgot-password" component={Forgot} />



        <PrivateRoute exact path="/verify-email"  >
          <VerifyOtp/>
        </PrivateRoute>

        <PrivateRoute exact path="/verify-token"  >
          <VerifyToken/>
        </PrivateRoute>

        <PrivateRoute exact path="/new-password"  >
          <ChangePassword/>
        </PrivateRoute>
{/* 
        <PrivateRoute exact path="/home"  >
          <Home/>
        </PrivateRoute> */}
        <Route exact path="/home" component={Home} />
        
        <Route exact path="/agents" component={Agents} />
        <Route exact path="/listing" component={Listings} />
        <Route exact path="/agent/:id" component={Agentt} />
        <Route exact path="/property/:id" component={Listing} />
        <Route exact path="/property-item/:id" component={Listing} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/profile" component={UserProfile} />
        <Route exact path="/messages" component={Messages} />
        <Route exact path="/change-password" component={Password} />
        <Route exact path="/add-listing/:id?" component={AddLisiting} />
        <Route exact path="/all-listing" component={AdminListingList} />
        <Route exact path="/all-agents" component={AdminAgentsList} />
        <Route exact path="/mylisting" component={AgentListing} />
      </Switch>
    </Router>
  );
};

export default App;
