import './App.css';

function App() {
  return (
    <main className="app">

      <h1>Welcome to Our Blog</h1>
      {/* FIX 1: h4 → h2 — heading must not skip levels after h1 (WCAG 1.3.1) */}
      <h2>Latest Articles</h2>

      <section className="article" aria-labelledby="article-one-heading">
        {/* FIX 2: h6 → h3 — follows h2 above without skipping levels (WCAG 1.3.1) */}
        <h3 id="article-one-heading">Article One: Getting Started</h3>
        <p>
          This is an introduction to our blog. We cover topics on technology, design, and
          accessibility in web development.
        </p>

        {/* FIX 3: color updated in App.css — .low-contrast now uses #595959 (~7:1 on white) */}
        <p className="low-contrast">
          Published on January 5, 2026 · 5 min read
        </p>
      </section>

      <section className="contact" aria-labelledby="contact-heading">
        <h2 id="contact-heading">Contact Us</h2>

        {/* FIX 4: Added <label> with htmlFor/id pairing for each input (WCAG 1.3.1, 4.1.2) */}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" className="input-field" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input id="email" type="email" className="input-field" />
        </div>

        {/* FIX 5: font-size updated in App.css — .tiny-text now uses 0.875rem (WCAG 1.4.4) */}
        <p className="tiny-text">
          By submitting this form you agree to our terms and conditions and privacy policy.
        </p>

        {/* FIX 6: aria-label added — icon-only button now has an accessible name (WCAG 4.1.2) */}
        <button className="icon-btn" aria-label="Send message">&#9993;</button>
      </section>
    </main>
  );
}

export default App;
