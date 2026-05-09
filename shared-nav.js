// shared-nav.js — injects identical NAV + FOOTER into every page
// so we don't repeat 60 lines of markup. Marks current link via [data-page].
(function () {
  const page = document.body.dataset.page || "";
  const navHTML = `
    <nav class="nav" id="nav">
      <a href="index.html" class="brand">
        Hugues Fantino
        <small>Compositeur · Animateur</small>
      </a>
      <div class="nav-links">
        <a href="index.html"      ${page === "accueil" ? 'aria-current="page"' : ""}>Accueil</a>
        <a href="biographie.html" ${page === "biographie" ? 'aria-current="page"' : ""}>Biographie</a>
        <a href="activites.html"  ${page === "activites" ? 'aria-current="page"' : ""}>Activités</a>
        <a href="agenda.html"     ${page === "agenda" ? 'aria-current="page"' : ""}>Agenda</a>
        <a href="contact.html"    ${page === "contact" ? 'aria-current="page"' : ""}>Contact</a>
      </div>
    </nav>`;
  const footHTML = `
    <footer>
      <div class="foot-grid">
        <div><div class="foot-brand">Hugues Fantino<small>Compositeur · Animateur</small></div></div>
        <div class="foot-col">
          <h4>Site</h4>
          <ul>
            <li><a href="biographie.html">Biographie</a></li>
            <li><a href="activites.html">Activités</a></li>
            <li><a href="agenda.html">Agenda</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
            <div class="foot-col">
      <h4>Écouter</h4>
      <ul>
        <li><a href="https://www.youtube.com/channel/UC7vRUtxSlDuDxGAqqaNrtAQ"><i class="fa-brands fa-youtube"></i>YouTube</a></li>
        <li><a href="https://open.spotify.com/intl-fr/artist/6vfGMNIgUUbdzDLjPV6Ne3"> <i class="fa-brands fa-spotify"></i>Spotify</a></li>
      </ul>
    </div>
    <div class="foot-col">
      <h4>Contact</h4>
      <ul>
        <li><a href="mailto:huguesfantino@gmail.com">huguesfantino@gmail.com</a></li>
        <li><a href="tel:+33613414097">+33 6 13 41 40 97</a></li>
        <li><a href="https://www.facebook.com/onitnafhug"><i class="fa-brands fa-facebook"></i>Facebook</a></li>
      </ul>
    </div>
      <div class="foot-bottom">
        <span>© 2026 Hugues Fantino. Tous droits réservés.</span>
        <span>Mentions légales · Confidentialité</span>
      </div>
    </footer>`;
  const navMount = document.getElementById("nav-mount");
  const footMount = document.getElementById("foot-mount");
  if (navMount) navMount.outerHTML = navHTML;
  if (footMount) footMount.outerHTML = footHTML;
})();
