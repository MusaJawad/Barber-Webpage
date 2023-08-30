import './App.css';

function App() {
  return (
    <div className="App">

      <div className = "NavBar">
        <button className = "NavButton">HOME</button>
        <button className = "NavButton">SERVICES</button>
        <button className = "NavButton">GALLERY</button>
        <button className = "NavButton">APPOINTMENT</button>
        <button className = "NavButton">CONTACT</button>
      </div>

      <header className="App-header">
        <h1>DSBLENDZ</h1>
        <p>Slogan</p>
      </header>

      <div className="Home">
        <section id="app-background"></section>
        <div className="HomeText">
          DSBLENDZ is commited to providing complete customer satisfaction and elite customer service.
          With a wide variety of services and staff, DSBLENDZ has the perfect combination to provide
          you with a one of a kind look.
        </div>
        

      </div>
          
      <div className = "Services">
        Services section
      </div>

      <div className = "Gallery">
        Gallary Section
      </div>

      <div className = "Appointment">
        Appointment section
      </div>
      
      <div className = "Contact">
        Contact
      </div>  
      

    </div>
  );
}

export default App;
