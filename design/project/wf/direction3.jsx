// Direction 3 — Mediterranean bright (whitewashed walls + Aegean blue accents).
function D3Landing() {
  const I = window.HERMES.info;
  return (
    <div className="page d3">
      {/* ---- SPLIT HERO ---- */}
      <header className="d3-hero">
        <div className="d3-hero-l">
          <span className="d3-sun" aria-hidden="true">◠</span>
          <p className="d3-eyebrow">MANNHEIM · GRIECHISCHE KÜCHE</p>
          <h1 className="d3-name">Hermes<br/>Grill</h1>
          <p className="d3-tag">{I.tagline} — frisch, hell, mediterran.</p>
          <div className="d3-cta">
            <WBtn solid>Speisekarte</WBtn>
            <WBtn>Reservieren · {I.phone}</WBtn>
          </div>
        </div>
        <div className="d3-hero-r">
          <Img label="Ägäis / Gericht (hochformat)" h={420} className="d3-herophoto" />
        </div>
        <Note style={{ position: "absolute", left: 18, bottom: 12 }}>
          Geteilter Hero: Text auf Kalkweiß, Foto in Ägäisblau-Rahmen.
        </Note>
      </header>

      {/* ---- BLUE NOTICE BAND ---- */}
      <div className="d3-notice">{I.notice}</div>

      {/* ---- ABOUT centered ---- */}
      <section className="d3-about">
        <div className="d3-wave" aria-hidden="true">≈≈≈≈≈≈≈</div>
        <h2 className="d3-h2">Entspannt genießen</h2>
        <Lines n={4} className="d3-abouttext" />
      </section>

      {/* ---- INFO CARDS ---- */}
      <section className="d3-cards">
        <div className="d3-card">
          <span className="d3-card-ic">◷</span>
          <h3 className="d3-card-t">Öffnungszeiten</h3>
          {I.hours.map(([a, b], i) => (
            <div className="d3-card-row" key={i}><span>{a || "—"}</span><span className="d3-b">{b}</span></div>
          ))}
        </div>
        <div className="d3-card d3-card-accent">
          <span className="d3-card-ic">⚲</span>
          <h3 className="d3-card-t">Adresse</h3>
          {I.address.map((l, i) => <p className="d3-card-line" key={i}>{l}</p>)}
          <Img label="Karte" h={86} style={{ marginTop: 10 }} />
        </div>
        <div className="d3-card">
          <span className="d3-card-ic">☎</span>
          <h3 className="d3-card-t">Reservierung</h3>
          <p className="d3-phone">{I.phone}</p>
          <p className="d3-card-line">Inhaberin: {I.owner}</p>
          <p className="d3-card-line">Nebenzimmer &amp; Anbau für Feste.</p>
        </div>
      </section>

      {/* ---- GALLERY grid ---- */}
      <section className="d3-gallery">
        <h2 className="d3-h2 d3-center">Eindrücke</h2>
        <div className="d3-grid">
          <Img label="Gericht" h={150} className="g-tall" />
          <Img label="Innenraum" h={150} />
          <Img label="Terrasse" h={150} />
          <Img label="Dessert" h={150} />
          <Img label="Festsaal" h={150} className="g-wide" />
        </div>
      </section>

      {/* ---- MENU PREVIEW strip ---- */}
      <section className="d3-preview">
        <h2 className="d3-h2 d3-center">Beliebte Gerichte</h2>
        <div className="d3-prev-row">
          {[
            ["Horiatiki", "8,50"],
            ["Riesengarnelen gegrillt", "14,80"],
            ["Gyros Spezial", "20,50"],
            ["Sahnejoghurt m. Honig", "7,50"],
          ].map(([n, p], i) => (
            <div className="d3-prev-card" key={i}>
              <Img label="" h={104} />
              <p className="d3-prev-n">{n}</p>
              <p className="d3-prev-p">{p} €</p>
            </div>
          ))}
        </div>
        <div className="d3-cta d3-center"><WBtn solid>Ganze Speisekarte ansehen</WBtn></div>
      </section>

      <footer className="d3-foot">
        <div className="d3-wave" aria-hidden="true">≈≈≈≈≈≈≈≈≈≈≈</div>
        Hermes Grill · {I.address.join(", ")} · {I.phone}
      </footer>
    </div>
  );
}

function D3Menu() {
  const I = window.HERMES.info;
  return (
    <div className="page d3">
      <header className="d3-menuhead">
        <p className="d3-eyebrow">ΚΑΤΑΛΟΓΟΣ · SPEISEKARTE</p>
        <h1 className="d3-name d3-name-sm">Speisekarte</h1>
        <p className="d3-tag">Zu allen Suppen, Vorspeisen &amp; Salaten reichen wir geröstetes Weißbrot.</p>
        <div className="d3-wave" aria-hidden="true">≈≈≈≈≈≈≈≈≈</div>
        <Note style={{ marginTop: 6 }}>Zweispaltige Druck-Optik zeigt die ganze Karte auf einmal.</Note>
      </header>
      <MenuView defaultLayout="columns" />
    </div>
  );
}

Object.assign(window, { D3Landing, D3Menu });
