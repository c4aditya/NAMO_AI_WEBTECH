import Navbar from "./components/Navbar";
import Poster from "./components/Poster";
import Services from "./components/Services";
import Wedo from "./components/WeDo";
import Counter from "./components/Counter";
import OurClient from "./components/OurClients";
import  "./components/main.css";



function App() {
 

  return (
    <>
    <div className='h'>
     <Navbar/>     
      <Poster/>
       <Services/>
      <Counter/>
      <Wedo/>   
      <OurClient/>
     
    
      </div>
    </>
  
  )
}

export default App
