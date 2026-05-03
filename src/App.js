import { useState } from 'react';
import './App.css';
import logoAV from "./assets/mini logo AV.png";


const services = [
  {
    title: 'Identité visuelle',
    text: 'Logo, palette, typographies et cohérence graphique pour poser une image solide.',
    tag: 'Logo & charte',
  },
  {
    title: 'Supports imprimés',
    text: 'Affiches, flyers, cartes de visite, plaquettes et documents prêts pour l’impression.',
    tag: 'Print',
  },
  {
    title: 'Réseaux sociaux',
    text: 'Visuels clairs et professionnels pour annoncer, promouvoir et fidéliser.',
    tag: 'Social media',
  },
  {
    title: 'Web & digital',
    text: 'Bannières, visuels de site, mini-identité digitale, site web et supports de présentation.',
    tag: 'Digital',
  },
];

const packs = [
  {
    name: 'Pack Essentiel',
    price: '149 €',
    details: ['Logo professionnel', '2 propositions', 'Fichiers haute résolution'],
  },
  {
    name: 'Pack Complet',
    price: '299 €',
    details: ['Logo professionnel', 'Carte de visite', 'Papier à en-tête', 'Fichiers sources inclus'],
    featured: true,
  },
  {
    name: 'Projet sur mesure',
    price: 'Sur devis',
    details: ['Brief personnalisé', 'Supports adaptés', 'Accompagnement jusqu’à validation'],
  },
];

function App() {
  const [formStatus, setFormStatus] = useState('idle');
  const [formError, setFormError] = useState('');

  const validateForm = (values) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const phoneRegex = /^(?:(?:\+33|0033|0)[1-9])(?:[\s.-]?\d{2}){4}$/;

    if (values.nom.length < 3 || !values.nom.includes(' ')) {
      return 'Merci d’indiquer votre nom et prénom.';
    }

    if (!emailRegex.test(values.email)) {
      return 'Merci d’indiquer une adresse email valide.';
    }

    if (!phoneRegex.test(values.telephone)) {
      return 'Merci d’indiquer un numéro de téléphone français valide, par exemple 06 12 34 56 78.';
    }

    if (!values.type_de_projet) {
      return 'Merci de sélectionner un type de projet.';
    }

    if (values.delai.length < 3) {
      return 'Merci d’indiquer un délai souhaité, même approximatif.';
    }

    if (values.message.length < 60) {
      return 'Merci de détailler votre besoin : objectif, format, texte à intégrer, style souhaité. Minimum 60 caractères.';
    }

    return '';
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormError('');

    const form = event.currentTarget;

    const values = {
      nom: form.nom.value.trim(),
      email: form.email.value.trim(),
      telephone: form.telephone.value.trim(),
      type_de_projet: form.type_de_projet.value,
      delai: form.delai.value.trim(),
      message: form.message.value.trim(),
    };

    const validationMessage = validateForm(values);

    if (validationMessage) {
      setFormError(validationMessage);
      return;
    }

    setFormStatus('loading');

    const formData = new FormData(form);
    formData.append('_subject', 'Nouvelle demande de devis - Armor Visuel');
    formData.append('_captcha', 'false');
    formData.append('_template', 'table');

    try {
      const response = await fetch('https://formsubmit.co/ajax/armorvisuel@gmail.com', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l’envoi.');
      }

      setFormStatus('sent');
      form.reset();
    } catch (error) {
      setFormStatus('idle');
      setFormError(
        'Le formulaire n’a pas pu être envoyé. Vérifiez votre connexion ou envoyez directement votre demande à armorvisuel@gmail.com.'
      );
    }
  };

  return (
    <main className="page">
      <header className="hero" id="accueil">
       
<nav className="nav">
  <a className="logo" href="#accueil" aria-label="Armor Visuel Accueil">
    
    <img src={logoAV} alt="Armor Visuel" className="logo-img" />

    <span className="logo-text">
      <strong>Armor</strong>
      <small>Visuel</small>
    </span>

  </a>

  <div className="nav-links">
    <a href="#services">Services</a>
    <a href="#offres">Offres</a>
    <a href="#devis">Devis</a>
  </div>
</nav>
        <section className="hero-grid">
          <div className="hero-content">
            <p className="eyebrow">Studio graphique · Bretagne</p>
            <h1>Des visuels qui racontent votre histoire.</h1>
            <p className="lead">
              Armor Visuel accompagne les entreprises, associations et indépendants dans la création de leur identité visuelle et de leurs supports de communication, avec une approche simple, professionnelle et sur mesure.
            </p>

            <div className="actions">
              <a className="btn primary" href="#devis">Demander un devis</a>
              <a className="btn secondary" href="#services">Voir les services</a>
            </div>

            <div className="proof">
              <span>Devis rapide</span>
              <span>Design pro</span>
              <span>Sur mesure</span>
            </div>
          </div>

          <div className="mockup" aria-hidden="true">
            <div className="phone phone-left">
              <div className="status"><span>9:41</span><span>● ● ●</span></div>
              <div className="app-logo">A</div>
              <h2>Donnez vie à vos idées.</h2>
              <p>Décrivez votre projet et recevez une proposition claire.</p>
              <button>Commencer</button>
            </div>

            <div className="phone phone-right">
              <div className="status"><span>9:41</span><span>● ● ●</span></div>
              <p className="hello">Bonjour 👋</p>
              <h3>Nouveau projet</h3>
              <div className="mini-card">
                <span>Pack Complet</span>
                <strong>299 €</strong>
              </div>
              <div className="service-lines">
                <span></span><span></span><span></span>
              </div>
            </div>
          </div>
        </section>
      </header>

      <section className="section" id="services">
        <div className="section-title">
          <p className="eyebrow">Services</p>
          <h2>Une image cohérente sur tous vos supports.</h2>
          <p>Chaque création est pensée pour être lisible, crédible et adaptée à votre public.</p>
        </div>

        <div className="cards">
          {services.map((service) => (
            <article className="card" key={service.title}>
              <span className="tag">{service.tag}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section soft" id="offres">
        <div className="section-title">
          <p className="eyebrow">Offres</p>
          <h2>Des packs simples, avec une option personnalisée.</h2>
        </div>

        <div className="packs">
          {packs.map((pack) => (
            <article className={`pack ${pack.featured ? 'featured' : ''}`} key={pack.name}>
              {pack.featured && <span className="badge">Recommandé</span>}
              <h3>{pack.name}</h3>
              <p className="price">{pack.price}</p>
              <ul>
                {pack.details.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
              <a href="#devis">Choisir cette offre</a>
            </article>
          ))}
        </div>
      </section>

      <section className="quote-section" id="devis">
        <div>
          <p className="eyebrow">Demande de devis</p>
          <h2>Décrivez votre besoin en quelques informations.</h2>
          <p>
            Pour recevoir une réponse précise sous 48h, merci d’indiquer votre objectif, le format souhaité, le délai,
            les textes à intégrer et le style recherché.
          </p>
        </div>

        {formStatus === 'sent' ? (
          <div className="success-message">
            <h3>Demande bien envoyée ✅</h3>
            <p>
              Merci pour votre demande de devis Armor Visuel. Je vous répondrai sous 48h avec une proposition adaptée
              à votre projet.
            </p>
            <button className="btn secondary" type="button" onClick={() => setFormStatus('idle')}>
              Envoyer une autre demande
            </button>
          </div>
        ) : (
          <form className="quote-form" onSubmit={handleSubmit} noValidate>
            {formError && <p className="form-error full">{formError}</p>}

            <label>
              Nom / Prénom *
              <input
                type="text"
                name="nom"
                placeholder="Ex : Marie Dupont"
                autoComplete="name"
                minLength="3"
                required
              />
            </label>

            <label>
              Email *
              <input
                type="email"
                name="email"
                placeholder="Ex : marie@email.fr"
                autoComplete="email"
                required
              />
            </label>

            <label>
              Téléphone *
              <input
                type="tel"
                name="telephone"
                placeholder="Ex : 06 12 34 56 78"
                autoComplete="tel"
                required
              />
            </label>

            <label>
              Type de projet *
              <select name="type_de_projet" required defaultValue="">
                <option value="" disabled>Sélectionnez un type</option>
                <option value="Logo">Logo</option>
                <option value="Affiche">Affiche</option>
                <option value="Flyer ou plaquette">Flyer ou plaquette</option>
                <option value="Visuel réseaux sociaux">Visuel réseaux sociaux</option>
                <option value="Identité visuelle">Identité visuelle</option>
                <option value="Carte de visite">Carte de visite</option>
                <option value="Autre">Autre</option>
              </select>
            </label>

            <label>
              Délai souhaité *
              <input
                type="text"
                name="delai"
                placeholder="Ex : avant le 15 juin / sous 7 jours"
                required
              />
            </label>

            <label className="full">
              Décrivez votre besoin *
              <textarea
                name="message"
                rows="6"
                minLength="60"
                placeholder="Ex : Je souhaite une affiche A4 pour un événement le 15 juin. Texte à intégrer : nom de l’événement, date, lieu, tarif. Style souhaité : moderne, sobre, couleurs vert/beige. Je peux fournir un logo."
                required
              ></textarea>
            </label>

            <button type="submit" className="btn primary full" disabled={formStatus === 'loading'}>
              {formStatus === 'loading' ? 'Envoi en cours...' : 'Obtenir mon devis'}
            </button>

            <p className="form-note full">
              En envoyant ce formulaire, vous acceptez d’être recontacté au sujet de votre demande. Réponse sous 48h.
            </p>
          </form>
        )}
      </section>

      <footer className="footer">
        <strong>Armor Visuel</strong>
        <p>Création graphique sur mesure · contact : armorvisuel@gmail.com</p>
      </footer>
    </main>
  );
}

export default App;