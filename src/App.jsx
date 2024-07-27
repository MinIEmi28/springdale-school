// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
// import AboutUs from './pages/AboutUs';
// import Academics from './pages/Academics';
// import Admissions from './pages/Admissions';
// import Faculty from './pages/Faculty';
// import Students from './pages/Students';
// import Gallery from './pages/Gallery';
// import ContactUs from './pages/ContactUs';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';


// const App = () => {
//   return (
//     <div >
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about-us" element={<AboutUs />} />
//         <Route path="/academics" element={<Academics />} />
//         <Route path="/admissions" element={<Admissions />} />
//         <Route path="/faculty" element={<Faculty />} />
//         <Route path="/students" element={<Students />} />
//         <Route path="/gallery" element={<Gallery />} />
//         <Route path="/contact-us" element={<ContactUs />} />
//         {/* <Route path="*" element={<NotFound />} /> */}
//       </Routes>
//       <Footer/>
//     </div>
//   );
// };

// export default App
import React from 'react';
import { HashRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import Faculty from './pages/Faculty';
import Students from './pages/Students';
import Gallery from './pages/Gallery';
import ContactUs from './pages/ContactUs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ContactFormProvider } from './context/ContactFormContext'; 
import { AdmissionFormProvider } from './context/AdmissionFormContext';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <HashRouter>
      <Navbar />
      <ContactFormProvider>
      <AdmissionFormProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/students" element={<Students />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact-us" element={<ContactUs />} />
          {/* Uncomment and implement NotFound page if needed */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
        </AdmissionFormProvider>
      </ContactFormProvider>
      <Footer />
    </HashRouter>
  );
};

export default App;
