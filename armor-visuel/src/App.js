import "./App.css";
import logo from "./logoAV.png";

function App() {
  const services = [
    {
      title: "Pack Starter",
      price: "49€",
      items: [
        "1 visuel au choix",
        "1 aller-retour de modification",
        "Livraison sous 48h",
        "Format web prêt à l'emploi",
      ],
      highlight: false,
    },
    {
      title: "Pack Pro",
      price: "99€",
      items: [
        "3 visuels professionnels",
        "2 allers-retours de modification",
        "Optimisé réseaux sociaux",
        "Livraison prioritaire",
      ],
      highlight: true,
    },
    {
      title: "Pack Business",
      price: "199€",
      items: [
        "6 visuels professionnels",
        "Cohérence graphique",
        "Conseil de présentation",
        "Priorité + livraison rapide",
      ],
      highlight: false,
    },
  ];

  const portfolio = [
    {
      title: "Affiche événementielle",
      text: "Création d’un visuel clair, attractif et professionnel pour promouvoir un événement.",
    },
    {
      title: "Logo & identité visuelle",
      text: "Conception d’une image de marque simple, mémorable et adaptée à l’activité du client.",
    },
    {
      title: "Contenus réseaux sociaux",
      text: "Création de visuels engageants pour Instagram, Facebook et supports de communication digitale.",
    },
  ];

  const targets = [
    "Entrepreneurs",
    "Associations",
    "Commerces locaux",
    "Artisans",
    "Petites entreprises",
    "Porteurs de projet",
  ];

  const whatsappLink =
    "https://wa.me/33600000000?text=Bonjour%2C%20je%20souhaite%20un%20devis%20pour%20un%20visuel.";
  const emailLink = "mailto:armorvisuel@gmail.com?subject=Demande%20de%20devis";

  return (
    <div className="site">
      <header className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <div className="brand">
            <img src={logo} alt="Logo Armor Visuel" className="brand-logo" />
            <div>
              <p className="brand-name">Armor Visuel</p>
              <p className="brand-tag">Création de visuels professionnels</p>
            </div>
          </div>

          <div className="hero-grid">
            <div className="hero-text">
              <span className="badge">Design pro • Rapide • Accessible</span>

              <h1>
                Des visuels professionnels qui donnent envie de vous contacter
              </h1>

              <p className="hero-description">
                J’aide les entrepreneurs, associations et entreprises locales à
                améliorer leur image avec des visuels clairs, modernes et prêts
                à être utilisés rapidement.
              </p>

              <div className="hero-buttons">
                <a href={emailLink} className="btn btn-primary">
                  Demander un devis
                </a>
                <a
                  href={whatsappLink}
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Me contacter sur WhatsApp
                </a>
              </div>

              <div className="hero-trust">
                <div className="trust-item">
                  <strong>Rapide</strong>
                  <span>Réponse simple et efficace</span>
                </div>
                <div className="trust-item">
                  <strong>Sur mesure</strong>
                  <span>Visuels adaptés à votre activité</span>
                </div>
                <div className="trust-item">
                  <strong>Professionnel</strong>
                  <span>Image claire et crédible</span>
                </div>
              </div>
            </div>

            <div className="hero-card">
              <p className="mini-title">Pourquoi choisir Armor Visuel ?</p>
              <ul>
                <li>Des visuels pensés pour attirer l’attention</li>
                <li>Une présentation professionnelle</li>
                <li>Un service simple, humain et réactif</li>
                <li>Des créations adaptées au web et aux réseaux sociaux</li>
              </ul>
              <a href={emailLink} className="card-link">
                Recevoir mon devis
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="stats-section">
          <div className="container stats-grid">
            <div className="stat-card">
              <h2>Image plus pro</h2>
              <p>
                Un visuel soigné améliore la première impression et renforce la
                crédibilité de votre activité.
              </p>
            </div>
            <div className="stat-card">
              <h2>Gain de temps</h2>
              <p>
                Vous obtenez un support prêt à être publié sans passer des
                heures à le créer vous-même.
              </p>
            </div>
            <div className="stat-card">
              <h2>Communication claire</h2>
              <p>
                Votre message devient plus lisible, plus attractif et plus
                mémorable.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-heading">
              <p className="section-kicker">Offres</p>
              <h2>Des formules simples pour passer à l’action</h2>
              <p>
                Choisissez la formule adaptée à votre besoin et à votre budget.
              </p>
            </div>

            <div className="pricing-grid">
              {services.map((service, index) => (
                <article
                  key={index}
                  className={`pricing-card ${
                    service.highlight ? "pricing-card-highlight" : ""
                  }`}
                >
                  {service.highlight && (
                    <span className="popular-badge">Le plus demandé</span>
                  )}
                  <h3>{service.title}</h3>
                  <p className="price">{service.price}</p>
                  <ul>
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                  <a href={emailLink} className="btn btn-primary full-width">
                    Commander
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-soft">
          <div className="container">
            <div className="section-heading">
              <p className="section-kicker">Pour qui ?</p>
              <h2>Un service pensé pour les structures qui veulent être visibles</h2>
            </div>

            <div className="targets-grid">
              {targets.map((target, index) => (
                <div key={index} className="target-card">
                  {target}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-heading">
              <p className="section-kicker">Portfolio</p>
              <h2>Exemples de réalisations</h2>
              <p>
                Voici les types de créations que je peux réaliser pour valoriser
                votre activité.
              </p>
            </div>

            <div className="portfolio-grid">
              {portfolio.map((item, index) => (
                <article key={index} className="portfolio-card">
                  <div className="portfolio-visual">Projet {index + 1}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-soft">
          <div className="container">
            <div className="section-heading">
              <p className="section-kicker">Méthode</p>
              <h2>Comment ça se passe ?</h2>
            </div>

            <div className="steps-grid">
              <article className="step-card">
                <span className="step-number">1</span>
                <h3>Vous m’expliquez votre besoin</h3>
                <p>
                  Vous m’envoyez votre demande, votre activité et le type de
                  visuel souhaité.
                </p>
              </article>

              <article className="step-card">
                <span className="step-number">2</span>
                <h3>Je crée votre visuel</h3>
                <p>
                  Je conçois un support clair, esthétique et cohérent avec votre
                  image.
                </p>
              </article>

              <article className="step-card">
                <span className="step-number">3</span>
                <h3>Vous recevez un rendu prêt à utiliser</h3>
                <p>
                  Votre visuel est livré dans un format simple à publier ou à
                  imprimer.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container cta-box">
            <div>
              <p className="section-kicker">Passons à l’action</p>
              <h2>Besoin d’un visuel professionnel pour votre activité ?</h2>
              <p>
                Je peux vous aider à créer une communication plus claire, plus
                crédible et plus attractive.
              </p>
            </div>

            <div className="cta-actions">
              <a href={emailLink} className="btn btn-primary">
                Demander un devis
              </a>
              <a
                href={whatsappLink}
                className="btn btn-secondary"
                target="_blank"
                rel="noreferrer"
              >
                Contact rapide
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-content">
          <div>
            <h3>Armor Visuel</h3>
            <p>
              Création de visuels professionnels pour entrepreneurs,
              associations et entreprises locales.
            </p>
          </div>

          <div className="footer-links">
            <a href="mailto:armorvisuel@gmail.com">armorvisuel@gmail.com</a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;