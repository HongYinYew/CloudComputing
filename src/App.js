import "./App.css"
import Navbar from "./Common/Navbar/Navbar"
import Home from "./Components/pages/Home"
import About from "./Components/About/About"
//import Destinations from "./Components/Destinations/Destinations"
//import DHome from "./Components/Destinations/Home"
import Destinations from "./Components/Destinations/Home"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SinglePage from "./SinglePage/SinglePage"

/*-------------blog------------ */
import Review from "./Components/review/Review"
import Contact from "./Components/Contact/Contact"
import Footer from "./Common/footer/Footer"
import Login from "./Components/login/Login"
import Register from "./Components/login/Register"
/*-------------blog------------ */

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/destinations' exact component={Destinations} />
          <Route path='/singlepage/:id' component={SinglePage} />
          <Route path='/review' component={Review} />
          <Route path='/contact' component={Contact} />
          <Route path='/sign-in' component={Login} />
          <Route path='/Register' component={Register} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
