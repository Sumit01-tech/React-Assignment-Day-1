const { BrowserRouter, Routes, Route, Link, NavLink } = ReactRouterDOM;

    function Home() {
      return (
        <div>
          <h2>Welcome to Home</h2>
          <p>This is the Home page.</p>
        </div>
      );
    }

    function About() {
      return (
        <div>
          <h2>About Us</h2>
          <p>This is the About page.</p>
        </div>
      );
    }

    function Contact() {
      return (
        <div>
          <h2>Contact Us</h2>
          <p>This is the Contact page.</p>
        </div>
      );
    }

    function App() {
      return (
        <BrowserRouter>
          <div>
            <nav>
              <ul>
                <li>
                  <NavLink to="/" end activeClassName="active">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about" activeClassName="active">About</NavLink>
                </li>
                <li>
                  <NavLink to="/contact" activeClassName="active">Contact</NavLink>
                </li>
              </ul>
            </nav>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </BrowserRouter>
      );
    }
    ReactDOM.createRoot(document.getElementById('root')).render(<App />);