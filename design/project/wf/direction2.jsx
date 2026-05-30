// Direction 2 — Warm & rustic taverna (textured, homey, chalkboard + polaroids).
function D2Landing() {
  const I = window.HERMES.info;
  return (
    <div className="page d2">
      {/* ---- HERO: full-bleed photo w/ name overlay ---- */}
      <header className="d2-hero">
        <Img label="Stimmungsbild: Grill / Taverne (vollflächig)" h={380} className="d2-herophoto" />
        <div className="d2-hero-overlay">
          <span className="d2-seal">★ ΕΣΤΙΑΤΟΡΙΟ ★</span>
          <h1 className="d2-name">Hermes Grill</h1>
          <p className="d2-tag">{I.tagline} · gemütlich &amp; herzlich</p>
          <div className="d2-cta">
            <WBtn solid>Speisekarte</WBtn>
            <WBtn>{I.phone}</WBtn>
          </div>
        </div>
        <Note style={{ position: "absolute", left: 16, bottom: 14 }}>
          Großes, warmes Vollbild. Name handgeschrieben, dunkles Overlay.
        </Note>
      </header>

      {/* ---- NOTICE: torn paper ---- */}
      <div className="d2-notice">📌 {I.notice}</div>

      {/* ---- ABOUT w/ polaroid ---- */}
      <section className="d2-about">
        <div className="d2-polaroid">
          <Img label="Inhaberin / Team" h={180} />
          <span className="d2-poly-cap">Bei uns daheim</span>
        </div>
        <div className="d2-about-txt">
          <h2 className="d2-h2">Καλώς ορίσατε — herzlich willkommen</h2>
          <Lines n={5} />
          <p className="d2-sign">— Familie Milona</p>
        </div>
      </section>

      {/* ---- CHALKBOARD: hours + specials ---- */}
      <section className="d2-board">
        <Note style={{ position: "absolute", top: -10, right: 20 }}>Tafel-Optik: Kreideschrift auf dunklem Holz.</Note>
        <div className="d2-board-col">
          <h3 className="d2-board-t">Öffnungszeiten</h3>
          {I.hours.map(([a, b], i) => (
            <div className="d2-board-row" key={i}>
              <span>{a || "—"}</span>
              <span className="d2-dots" />
              <span>{b}</span>
            </div>
          ))}
        </div>
        <div className="d2-board-div" />
        <div className="d2-board-col">
          <h3 className="d2-board-t">Heute empfehlen wir</h3>
          {[
            ["Gyros vom Drehspieß", "17,50"],
            ["Bauernhacksteak m. Feta", "18,80"],
            ["Lamm Platte", "32,50"],
            ["Kataifi", "8,50"],
          ].map(([n, p], i) => (
            <div className="d2-board-row" key={i}>
              <span>{n}</span>
              <span className="d2-dots" />
              <span>{p} €</span>
            </div>
          ))}
        </div>
      </section>

      {/* ---- SCATTERED POLAROID GALLERY ---- */}
      <section className="d2-gallery">
        <h2 className="d2-h2 d2-center">Aus unserer Küche &amp; Taverne</h2>
        <div className="d2-poly-row">
          <div className="d2-polaroid tilt-a"><Img label="Souvlaki" h={140} /><span className="d2-poly-cap">vom Grill</span></div>
          <div className="d2-polaroid tilt-b"><Img label="Nebenzimmer" h={140} /><span className="d2-poly-cap">für Feste</span></div>
          <div className="d2-polaroid tilt-c"><Img label="Meze" h={140} /><span className="d2-poly-cap">Vorspeisen</span></div>
          <div className="d2-polaroid tilt-a"><Img label="Wein" h={140} /><span className="d2-poly-cap">aus Hellas</span></div>
        </div>
      </section>

      {/* ---- INFO / CONTACT ---- */}
      <section className="d2-contact">
        <div className="d2-contact-card">
          <h3 className="d2-board-t d2-dark">So finden Sie uns</h3>
          {I.address.map((l, i) => <p className="d2-c-line" key={i}>{l}</p>)}
          <p className="d2-phone">☎ {I.phone}</p>
          <p className="d2-c-line">Festlichkeiten im Nebenzimmer &amp; Anbau auf Anfrage.</p>
        </div>
        <Img label="Karte / Anfahrt" h={200} className="d2-map" />
      </section>

      <footer className="d2-foot">
        <span>★</span> Hermes Grill · {I.owner} · {I.phone} <span>★</span>
      </footer>
    </div>
  );
}

function D2Menu() {
  const I = window.HERMES.info;
  return (
    <div className="page d2">
      <header className="d2-menuhead">
        <span className="d2-seal">★ ΚΑΤΑΛΟΓΟΣ ★</span>
        <h1 className="d2-name">Unsere Speisekarte</h1>
        <p className="d2-tag d2-dark">Zu allen Suppen, Vorspeisen &amp; Salaten reichen wir geröstetes Weißbrot.</p>
        <Note style={{ marginTop: 10 }}>Tafel-/Kreide-Optik überträgt sich auf Kategorie-Titel.</Note>
      </header>
      <MenuView defaultLayout="tabs" />
    </div>
  );
}

Object.assign(window, { D2Landing, D2Menu });
