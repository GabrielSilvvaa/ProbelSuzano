import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">

        <div className="logo-area">
          <h1 className="logo">Probel</h1>
          <span className="since">DESDE 1940</span>
        </div>

        <nav className="nav">
          <a href="/">HOME</a>
          <a href="/colchoes">COLCHÕES</a>
          <a href="/baus-e-bases">BAÚS E BASES</a>
        </nav>

        <a
          className="whatsapp-btn"
          href="https://wa.me/551125002303"
          target="_blank"
        >
          FALAR NO WHATSAPP
        </a>

      </div>
    </header>
  );
}

