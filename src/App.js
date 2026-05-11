import './App.css';

function App() {
  return (
    <main className="app">
      <h1>Welcome to Our Blog</h1>
      <h4>Latest Articles</h4>

      <section className="article" aria-labelledby="article-one-heading">
        <h6 id="article-one-heading">Article One: Getting Started</h6>
        <p>
          This is an introduction to our blog. We cover topics on technology, design, and
          accessibility in web development.
        </p>

        <p className="low-contrast">
          Published on January 5, 2026 · 5 min read
        </p>

        <img src="https://picsum.photos/seed/accs/400/120" alt="" className="hero-thumb" />
      </section>

      <section className="contact">
        <h2>Contact Us</h2>

        <div className="form-group">
          <input type="text" className="input-field" placeholder="Your name" />
        </div>
        <div className="form-group">
          <input type="email" className="input-field" placeholder="Email address" />
        </div>

        <p className="tiny-text">
          By submitting this form you agree to our terms and conditions and privacy policy.
        </p>

        <button type="button" className="icon-btn">&#9993;</button>

        <div className="fake-submit" onClick={() => {}}>
          Submit (div)
        </div>
      </section>
    </main>
  );
}

export default App;
