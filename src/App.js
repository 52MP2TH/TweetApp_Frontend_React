import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Registration from './components/Registration';
import Login from './components/Login';
import DirectLogin from './components/DirectLogin';
import Success from './components/Success';
import PostTweets from './components/PostTweets';
import ViewReplies from './components/ViewReplies';
import ViewTweet from './components/ViewTweets';
import UpdateTweet from './components/UpdateTweet';
import DeleteTweet from './components/DeleteTweet';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ForgotPassword from './components/ForgotPassword';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home register="false"/>} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot" element={<ForgotPassword/>}/>
          <Route path="/directlogin" element={<DirectLogin />} />
          <Route path="/success" element={<Success/>}/>
          <Route path="/viewtweets" element={<ViewTweet/>}/>
          <Route path="/posttweets" element = {<PostTweets/>}/>
          <Route path="/viewreplies" element = {<ViewReplies/>}/>
          <Route path="/updatetweet" element = {<UpdateTweet/>}/>
          <Route path="/deletetweet" element = {<DeleteTweet/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
