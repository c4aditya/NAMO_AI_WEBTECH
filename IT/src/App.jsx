import Navbar from "./components/Navbar";
import Poster from "./components/Poster";
import Services from "./components/Services";
import Wedo from "./components/WeDo";
import Counter from "./components/Counter";
import OurClient from "./components/OurClients";
import  "./components/main.css";
import Footer from "./components/Footer"
import Industryes from "./components/Industryes";


function App() {
 

  return (
    <>
    <div className='h'>
     <Navbar/>     
      <Poster/>
       <Services/>
      <Counter/>
      <Wedo/>  
      <Industryes/> 
      <OurClient/>
      <Footer/>
     
    
      </div>
    </>
  
  )
}

export default App
