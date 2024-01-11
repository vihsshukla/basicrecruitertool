import './Home.css';
const Home=()=>{
  return (<>
    <div className="app">
      <header className="header">
        <h1>Recruitment Tool</h1>
      </header>

      <main className="main">
        <h2>Welcome to our Recruitment Tool!</h2>
        <p>Streamline your hiring process with our powerful recruitment tool. Find the best candidates quickly and efficiently.</p>
        <a href="/add-candidate" className="cta-button">Get Started</a>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Recruitment Tool. All rights reserved.</p>
      </footer>
    </div>
  </>);
}

export default Home;