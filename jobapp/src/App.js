import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AddJobForm from './components/AddJobForm';
import AllJobs from './components/AllJobs';
import AppliedJobs from './components/AppliedJobs';
import MainPage from './components/MainPage';
import Notes from './components/Notes';
import RejectedJobs from './components/RejectedJobs';
import './index.css';


function App() {
//     return (
//         <Router>
//     <Switch>
//       <Route exact path='/' component={AddJobForm} />
//       <Route exact path='/alljobs' component={AllJobs} />
//       <Route exact path='/appliedjobs' component={AppliedJobs} />
//       <Route exact path='/rejectedjobs' component={RejectedJobs} />
//     </Switch>
//   </Router>
//     )
return (
    <>
    <Router>
    <Switch>
      <Route exact path='/' component={MainPage} />
      <Route path='/form' component={AddJobForm} />
      <Route path='/alljobs' component={AllJobs} />
      <Route path='/appliedjobs' component={AppliedJobs} />
      <Route path='/rejectedjobs' component={RejectedJobs} />
      <Route path='/notes' component={Notes} />

    </Switch>
  </Router>
    </>

)

}
  
export default App;
