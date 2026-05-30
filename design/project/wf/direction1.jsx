// Direction 1 — Clean & minimal with Greek pillar / temple motifs.
function D1Landing() {
  const I = window.HERMES.info;
  return (
    <div className="page d1">
      {/* ---- HERO: temple front ---- */}
      <header className="d1-hero">
        <Note style={{ position: "absolute", top: 14, right: 18 }}>
          Tempel-Front: Giebel + 2 Säulen rahmen den Namen. Viel Weißraum.
        </Note>
        <div className="d1-temple">
          <Pediment w={420} h={104} />
          <div className="d1-temple-body">
            <Column h={250} w={50} />
            <div className="d1-namewrap">
              <p className="d1-eyebrow">SEIT 1989 · MANNHEIM</p>
              <h1 className="d1-name">HERMES&nbsp;GRILL</h1>
              <p className="d1-tag">{I.tagline}</p>
            </div>
            <Column h={250} w={50} />
          </div>
        </div>
        <div className="d1-cta">
          <WBtn solid>Speisekarte ansehen</WBtn>
          <WBtn>Tisch reservieren · {I.phone}</WBtn>
        </div>
        <Meander style={{ marginTop: 30 }} />
      </header>

      {/* ---- NOTICE ---- */}
      <div className="d1-notice">
        <span className="d1-notice-k">●</span> {I.notice}
      </div>

      {/* ---- ABOUT ---- */}
      <section className="d1-about">
        <span className="d1-section-k">ΚΑΛΩΣ ΟΡΙΣΑΤΕ</span>
        <h2 className="d1-h2">Willkommen bei Hermes</h2>
        <Lines n={4} className="d1-abouttext" />
        <Note>Echter About-Text aus den Daten; mittig, max. 60 Zeichen breit.</Note>
      </section>

      {/* ---- GALLERY divided by columns ---- */}
      <section className="d1-gallery">
        <Img label="Gericht" h={210} />
        <div className="d1-galcol"><Column h={210} w={34} /></div>
        <Img label="Innenraum" h={210} />
        <div className="d1-galcol"><Column h={210} w={34} /></div>
        <Img label="Festsaal" h={210} />
      </section>

      {/* ---- INFO band framed by meander ---- */}
      <section className="d1-info">
        <Meander />
        <div className="d1-info-grid">
          <div className="d1-info-col">
            <h3 className="d1-info-t">Öffnungszeiten</h3>
            {I.hours.map(([a, b], i) => (
              <div className="d1-hours-row" key={i}>
                <span>{a}</span>
                <span className="d1-hours-b">{b}</span>
              </div>
            ))}
          </div>
          <div className="d1-info-col d1-info-mid">
            <h3 className="d1-info-t">Adresse</h3>
            {I.address.map((l, i) => (
              <p className="d1-info-line" key={i}>{l}</p>
            ))}
            <Img label="Karte / Lageplan" h={92} style={{ marginTop: 12 }} />
          </div>
          <div className="d1-info-col">
            <h3 className="d1-info-t">Reservierung</h3>
            <p className="d1-phone">{I.phone}</p>
            <p className="d1-info-line">Inhaberin: {I.owner}</p>
            <WBtn>Anrufen</WBtn>
          </div>
        </div>
        <Meander />
      </section>

      {/* ---- MENU PREVIEW ---- */}
      <section className="d1-preview">
        <h2 className="d1-h2">Aus unserer Küche</h2>
        <div className="d1-preview-grid">
          {[
            ["Gyros vom Drehspieß", "17,50"],
            ["Lammkoteletts (Lammkrone)", "32,50"],
            ["Mousaka", "18,50"],
            ["Dorade Royal", "21,50"],
          ].map(([n, p], i) => (
            <div className="d1-prev-card" key={i}>
              <Img label="" h={110} />
              <div className="d1-prev-row">
                <span>{n}</span>
                <b>{p} €</b>
              </div>
            </div>
          ))}
        </div>
        <div className="d1-cta"><WBtn solid>Zur kompletten Speisekarte</WBtn></div>
      </section>

      <footer className="d1-foot">
        <Column h={70} w={26} />
        <div>
          <b>HERMES GRILL</b> · {I.address.join(", ")} · {I.phone}
        </div>
        <Column h={70} w={26} />
      </footer>
    </div>
  );
}

function D1Menu() {
  const I = window.HERMES.info;
  return (
    <div className="page d1">
      <header className="d1-menuhead">
        <Pediment w={300} h={74} />
        <h1 className="d1-name d1-name-sm">SPEISEKARTE</h1>
        <p className="d1-tag">{I.tagline} · Zu allen Suppen, Vorspeisen & Salaten reichen wir geröstetes Weißbrot.</p>
        <Meander style={{ marginTop: 18 }} />
        <Note style={{ marginTop: 12 }}>Sticky Kategorie-Navigation; Layout über den Umschalter testbar.</Note>
      </header>
      <MenuView defaultLayout="scroll" />
    </div>
  );
}

Object.assign(window, { D1Landing, D1Menu });
