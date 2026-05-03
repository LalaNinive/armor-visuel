import { useState } from 'react';
import './App.css';
import logoAV from "./assets/mini logo AV.png";

const services = [
  {
    title: 'Identité visuelle',
    text: 'Un logo et une identité visuelle qui reflètent votre activité et inspirent confiance.',    
    tag: 'Logo & charte',
  },
  {
    title: 'Supports imprimés',
    text: 'Des supports imprimés professionnels prêts à être distribués (flyers, affiches, cartes…).',
    tag: 'Print',
  },
  {
    title: 'Réseaux sociaux',
    text: 'Des visuels efficaces pour capter l’attention sur les réseaux sociaux.',
    tag: 'Social media',
  },
  {
    title: 'Web & digital',
    text: 'Une présence digitale cohérente pour valoriser votre image en ligne.',
    tag: 'Digital',
  },
];

const packs = [
  {
    name: 'Pack Essentiel',
    price: '149 €',
    details: ['Logo professionnel', '2 propositions', 'Fichiers haute résolution', 'Création sous 5 à 7 jours'],
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
  const [selectedOffer, setSelectedOffer] = useState('');

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
      return 'Merci d’indiquer un numéro français valide.';
    }

    if (!values.type_de_projet) {
      return 'Merci de sélectionner un type de projet.';
    }

    if (values.delai.length < 3) {
      return 'Merci d’indiquer un délai souhaité.';
    }

    if (values.message.length < 60) {
      return 'Merci de détailler votre besoin. Minimum 60 caractères.';
    }

    return '';
  };

  const handleSelectOffer = (offer) => {
    setSelectedOffer(offer);

    document.getElementById("devis")?.scrollIntoView({
      behavior: "smooth",
    });
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
      setSelectedOffer('');
      form.reset();
    } catch (error) {
      setFormStatus('idle');
      setFormError(
        'Le formulaire n’a pas pu être envoyé. Envoyez directement votre demande à armorvisuel@gmail.com.'
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

<h1>
  Attirez plus de clients avec des visuels <span className="gold">professionnels</span>
</h1>

<p className="lead">
  Logo, affiches, réseaux sociaux… Armor Visuel crée des visuels clairs, modernes et impactants pour développer votre activité.
</p>
            <p className="lead">
              Armor Visuel accompagne les entreprises, associations et indépendants dans la création
              de leur identité visuelle et de leurs supports de communication.
            </p>

            <div className="actions">
              <a className="btn primary" href="#devis">Obtenir mon devis</a>

              <a className="btn secondary" href="#services">Voir les services</a>
            </div>

            <div className="proof">
              <span>Recevez une proposition personnalisée sous 48h</span>
              <span>Design professionnel</span>
              <span>100% sur mesure</span>
            </div>

          <div className="mockup" aria-hidden="true">
            <div className="phone phone-left">
              <div className="status"><span>9:41</span><span>● ● ●</span></div>
              <div className="app-logo">A</div>
              <h2>Donnez vie à vos idées.</h2>
              <p>Décrivez votre projet et recevez une proposition claire, adaptée à vos besoins et à votre budget.</p>
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
                {pack.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>

              <button
                type="button"
                className={`btn ${pack.featured ? 'primary' : 'secondary'}`}
                onClick={() => handleSelectOffer(pack.name)}
              >
                Choisir cette offre
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="quote-section" id="devis">
        <div>
          <p className="eyebrow">Demande de devis</p>
          <h2>Décrivez votre besoin en quelques informations.</h2>
          <p>
            Pour recevoir une réponse précise, indiquez votre objectif, le format souhaité,
            le délai, les textes à intégrer et le style recherché.
          </p>
        </div>

        {formStatus === 'sent' ? (
          <div className="success-message">
            <h3>Votre demande a bien été envoyée ✅</h3>
            <p>
              Merci pour votre confiance. Vous recevrez une proposition personnalisée sous 48h.
            </p>
            <button className="btn secondary" type="button" onClick={() => setFormStatus('idle')}>
              Envoyer une autre demande
            </button>
          </div>
        ) : (

          
          <form className="quote-form" onSubmit={handleSubmit} noValidate>
            <input
              type="text"
              name="_honey"
              style={{ display: "none" }}
              tabIndex="-1"
              autoComplete="off"
            />

            {formError && <p className="form-error full">{formError}</p>}

            {selectedOffer && (
              <p className="form-note full">
                Offre sélectionnée : <strong>{selectedOffer}</strong> ✅
              </p>
            )}

            <label>
              Nom / Prénom *
              <input type="text" name="nom" placeholder="Ex : Marie Dupont" autoComplete="name" required />
            </label>

            <label>
              Email *
              <input type="email" name="email" placeholder="Ex : marie@email.fr" autoComplete="email" required />
            </label>

            <label>
              Téléphone *
              <input type="tel" name="telephone" placeholder="Ex : 06 12 34 56 78" autoComplete="tel" required />
            </label>

            <label>
              Type de projet *
              <select
                name="type_de_projet"
                required
                value={selectedOffer}
                onChange={(e) => setSelectedOffer(e.target.value)}
              >
                <option value="">Sélectionnez un type</option>
                <option value="Pack Essentiel">Pack Essentiel</option>
                <option value="Pack Complet">Pack Complet</option>
                <option value="Projet sur mesure">Projet sur mesure</option>
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
              <input type="text" name="delai" placeholder="Ex : sous 7 jours / avant le 15 juin" required />
            </label>

            <label className="full">
              Décrivez votre besoin *
              <textarea
                name="message"
                rows="6"
                minLength="10"
                placeholder="Ex : Je souhaite une affiche A4 pour un événement. Texte à intégrer : nom, date, lieu, tarif. Style souhaité : moderne, sobre, couleurs vert/beige."
                required
              ></textarea>
            </label>

            <button type="submit" className="btn primary full" disabled={formStatus === 'loading'}>
              {formStatus === 'loading' ? 'Envoi en cours...' : 'Obtenir mon devis'}
            </button>

            <p className="form-note full">
              Vos informations sont utilisées uniquement pour répondre à votre demande de devis. Elles ne sont pas revendues.
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