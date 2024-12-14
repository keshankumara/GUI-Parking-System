import './App.css';
import './style/MainStylSheet.css';
import './style/Section_1_styleSheet.css';
import './style/Section_2_styleSheet.css';
import './style/Section_3_styleSheet.css';
import './style/footer.css';

function App() {
  return (
    <div className="App">
      <body>
        <div class="container_1">
        <section class="parking-nav">
            <h1 class="nav_h1">Find Parking</h1>
            <nav class="navbar">
                <nav class="navbar">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Contact</a>
                </nav>
            </nav>
        </section>
        <section class="container_2">
            <section class="slots">
                <h3 class="h3">Available Parking Slots</h3>
            </section>
            <section class="slots">
                <h3 class="h3">Available Parking Slots</h3>
            </section>
            <section class="slots">
                <h3 class="h3">Available Parking Slots</h3>
            </section>
        </section>
        <section class="container_3">
            <button class="btn">
            Booking Now
            </button>
        </section>
        </div>
      </body>
      <footer>
      <section class="footer">
      <h1>The Best Parking</h1>
      <p>© 2020 Vehicle Parking. All rights reserved.</p>
      </section>
    </footer>
    </div>
    
  );
}

export default App;
