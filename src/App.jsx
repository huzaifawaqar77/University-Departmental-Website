import "./App.css";
import Courses from "./components/Courses/Courses";
import EventComponent from "./components/EventComponent/EventComponent";
import Faculty from "./components/Faculty/Faculty";
import LandingPage from "./components/LandingPage/LandingPage";
import LocationComponent from "./components/Location/Location";
import NavBar from "./components/Navbar/NavBar";
import StudentResource from "./components/StudentResources/StudentResource";
function App() {
  return (
    <div className="App">
      <NavBar />
      <LandingPage />
      <Courses />
      <Faculty />
      <StudentResource />
      <LocationComponent />
      <EventComponent />
    </div>
  );
}

export default App;
