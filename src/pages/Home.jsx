import "../styles/Home.css";
import heroImage from "../assets/mulher-dormindo.png";
import logoProbel from "../assets/logoP.png";
import Michelini from "../assets/Michelini.jpg";
import DivinoSoft from "../assets/divinosoft.jpg";
import DivinoForce from "../assets/DivinoForce.jpg";
import Robuste from "../assets/robuste.jpg";
import Athos from "../assets/athos.jpg";
import Creative from "../assets/Creative.jpg";
import Star from "../assets/star.jpg";
import Hiper from "../assets/divinoHiperF.jpg";
import OneMax from "../assets/Onemax.jpg";
import whatsappIcon from "../assets/whatsapp.png";

function Home() {
  return (
    <>
      <section className="hero-home">
        <div className="hero-text">
          <img src={logoProbel} alt="Logo Probel" className="logo-probel" />

          <h1>
            Sempre sua
            <br />
            melhor escolha.
          </h1>

          <p>
            Há mais de 85 anos, criamos colchões que transformam noites em
            bem-estar e dias em conquistas.
          </p>

          <div className="hero-actions">
            <a href="#colchoes">CONHEÇA NOSSOS COLCHÕES</a>

    
          </div>
        </div>

        <div className="hero-right">
  <img src={heroImage} alt="Mulher dormindo" className="hero-image" />
</div>
      </section>

      <section className="benefits">
  <div>
    <h3>LOCALIZAÇÃO</h3>
    <p>Av. Armando Salles de Oliveira, 1520 - Jd Iraí</p>
    <p>Suzano - SP, 08673-000</p>
  </div>

  <div>
    <h3>CONTATO</h3>
    <p>(11) 2500-2303</p>
  
    <p>@probel.suzano</p>
  </div>

  <div>
    <h3>HORÁRIO</h3>
    <p>Seg a Sáb: 10H às 21H</p>
    <p>Domingos e feriados: 10H às 16H</p>
  </div>

  <div>
    <h3>DESDE 1940</h3>
    <p>Mais de 85 anos oferecendo conforto e qualidade.</p>
  </div>
</section>

<section id="colchoes" className="colchoes-section">
  <div className="colchoes-header">
    
  </div>

  <div className="colchoes-grid">
    {[
  [Michelini, "Michelini", "Firme", "200 kg", "D45", "Molas ensacadas"],
  [DivinoSoft, "Divino Soft", "Macio", "120 kg", "D29", "Molas ensacadas"],
  [DivinoForce, "Divino Force Extreme", "Extra firme", "150 kg", "D65", "100% espuma"],
  [Robuste, "Robuste", "Firme", "200 kg", "D45", "Molas ensacadas"],
  [Athos, "Athos Bambu", "Firme", "140 kg", "D33", "Molas ensacadas"],
  [Creative, "Creative", "Macio", "120 kg", "D29", "Molas ensacadas"],
  [Star, "Star", "Intermediário", "120 kg", "D33", "Molas ensacadas"],
  [OneMax, "One Max", "Intermediário", "110 kg", "D28", "Molas ensacadas"],
  [Hiper, "Hiper Firme", "Extra firme", "120 kg", "D40", "100% espuma"],
].map((colchao) => (
      <div className="colchao-card" key={colchao[0]}>
        
        <div className="colchao-img">
  <img src={colchao[0]} alt={colchao[1]} />
</div>

        <div className="colchao-info">
          <h3>{colchao[1]}</h3>

          <ul>
            <li>
              <strong>Conforto:</strong> {colchao[2]}
            </li>

            <li>
              <strong>Suporte:</strong>  {colchao[3]} 
            </li>

            <li>
              <strong>Densidade:</strong> {colchao[4]}
            </li>

            <li>
              <strong>Molejo:</strong> {colchao[5]}
            </li>
          </ul>

          <a
            className="interesse-btn"
            href={`https://wa.me/551125002303?text=${encodeURIComponent(
              `Olá, vim do site e me interessei pelo modelo ${colchao[1]}, pode me falar mais informações?`
            )}`}
            target="_blank"
            rel="noreferrer"
          >
            Tenho interesse
          </a>
        </div>
      </div>
    ))}
  </div>
</section>
<a
  href="https://wa.me/551125002303?text=Olá, gostaria de saber mais sobre os colchões, pode me mostrar alguns modelos?"
  className="whatsapp-float"
  target="_blank"
  rel="noreferrer"
>
  <img src={whatsappIcon} alt="WhatsApp" />
</a>
    </>
  );
}

export default Home;