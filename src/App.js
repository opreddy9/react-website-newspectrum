import "./App.css";
import Index from "./pages/Index";
import ED from "./pages/ED";
import EH from "./pages/EH";
import PE from "./pages/PE";
import RES from "./pages/RES";
import Search from "./pages/Search";
import Seeresponse from "./pages/Seeresponse";
import Studentdashboard from "./pages/Studentdashboard";
import Studentdetails from "./pages/Studentdetails";
import Studenthome from "./pages/Studenthome";
import Viewmoreproject from "./pages/Viewmoreproject";
// import AboutUs from "./pages/AboutUs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/" element={<AboutUs />} /> */}
          <Route path="/" element={<Index />} />
          <Route path="/enterdash" element={<ED />} />
          <Route path="/enterhome" element={<EH />} />
          <Route path="/responses" element={<RES />} />
          <Route path="/postenter" element={<PE />} />
          <Route path="/search" element={<Search />} />
          <Route path="/seeresponse" element={<Seeresponse />} />
          <Route path="/studentdash" element={<Studentdashboard />} />
          <Route path="/studentdetails" element={<Studentdetails />} />
          <Route path="/studenthome" element={<Studenthome />} />
          <Route path="/viewmore" element={<Viewmoreproject />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
