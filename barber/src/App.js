import './App.css';


function App() {
  return (
    <div className="App">
      
      <div className = "NavBar">

        <button className = "NavButton">HOME</button>
        <button className = "NavButton">SERVICES/PRICING</button>
        <button className = "NavButton">GALLERY</button>
        <button className = "NavButton">APPOINTMENT/STAFF</button>
        <button className = "NavButton">CONTACT</button>

      </div>
    <section id = "app-background">
        <img src="../images/logo-symbol.jpg" alt="" className = "logo-symbol" />
        <div className = "logo-name">
          <h1>DSBLENDZ</h1>
          <p>Sharper Cuts, Sharper Minds</p>
          <img src="../images/logo-symbol.jpg" alt="" className = "logo-symbol" />
          <div className='logo-button'>
            <button>Learn More</button>
          </div>
        </div>
      </section>
      <h2>SERVICES</h2>
      <p>Men's Haircut - $25<br></br>
        Women's Haircut <br></br>
        Kid's Haircut <br></br>
        Fade <br></br>
        Shave <br></br>
        Beard Lineup
      </p>


    </div>
  );
}

export default App;
