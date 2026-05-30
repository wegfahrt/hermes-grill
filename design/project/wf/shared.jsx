// Shared low-fi wireframe primitives + the themeable menu renderer.
// Styling lives in index.html; direction themes set CSS variables on the .wf root.
const { useState } = React;

/* ---- text placeholder bars ---- */
function Lines({ n = 3, w = "100%", className = "" }) {
  const rows = [];
  for (let i = 0; i < n; i++) {
    const ww = i === n - 1 && n > 1 ? "62%" : typeof w === "string" ? w : w[i] || "100%";
    rows.push(<span className="ln" style={{ width: ww }} key={i} />);
  }
  return <div className={"lines " + className}>{rows}</div>;
}

/* ---- scribbled image placeholder ---- */
function Img({ label = "Foto", h = 160, className = "", style = {} }) {
  return (
    <div className={"img-ph " + className} style={{ height: h, ...style }}>
      <svg className="img-x" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <line x1="2" y1="2" x2="98" y2="98" />
        <line x1="98" y1="2" x2="2" y2="98" />
      </svg>
      <span className="img-label">▣ {label}</span>
    </div>
  );
}

/* ---- red wireframe annotation ---- */
function Note({ children, style = {} }) {
  return <div className="note" style={style}>✎ {children}</div>;
}

/* ---- button / pill placeholder ---- */
function WBtn({ children, solid = false, className = "" }) {
  return <span className={"wbtn " + (solid ? "wbtn-solid " : "") + className}>{children}</span>;
}

/* ---- SVG fluted Doric-ish column ---- */
function Column({ h = 220, w = 46, style = {} }) {
  const flutes = [];
  const inner = w - 10;
  const cols = 5;
  for (let i = 1; i < cols; i++) {
    const x = 5 + (inner / cols) * i;
    flutes.push(<line key={i} x1={x} y1="26" x2={x} y2={h - 22} />);
  }
  return (
    <svg className="col" width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={style} aria-hidden="true">
      {/* capital */}
      <rect x="1" y="14" width={w - 2} height="12" />
      <rect x="6" y="2" width={w - 12} height="13" />
      {/* shaft */}
      <rect x="5" y="26" width={w - 10} height={h - 48} />
      {flutes}
      {/* base */}
      <rect x="1" y={h - 22} width={w - 2} height="9" />
      <rect x="-2" y={h - 13} width={w + 4} height="12" />
    </svg>
  );
}

/* ---- SVG temple pediment ---- */
function Pediment({ w = 360, h = 90, style = {} }) {
  return (
    <svg className="pediment" width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={style} aria-hidden="true">
      <polygon points={`4,${h - 4} ${w / 2},6 ${w - 4},${h - 4}`} />
      <line x1="4" y1={h - 4} x2={w - 4} y2={h - 4} />
      <circle cx={w / 2} cy={h - 26} r="8" />
    </svg>
  );
}

/* ---- Greek-key meander border strip ---- */
function Meander({ style = {} }) {
  const key =
    "data-:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='42' height='22' viewBox='0 0 42 22'%3E%3Cg fill='none' stroke='%23394b63' stroke-width='2'%3E%3Cpath d='M3 19 V6 H30 V13 H12 V11'/%3E%3C/g%3E%3C/svg%3E";
  return <div className="meander" style={{ ...style }} aria-hidden="true" />;
}

/* ================= MENU RENDERER (themed by parent) ================= */
function Sup({ a }) {
  if (!a) return null;
  return <sup className="add">{a}</sup>;
}

function MenuRow({ it }) {
  return (
    <div className="mrow">
      <span className="mno">{it.no}</span>
      <span className="mname">
        {it.n}
        <Sup a={it.a} />
      </span>
      <span className="mdots" />
      <span className="mprice">{it.p}</span>
    </div>
  );
}

function MenuSection({ c }) {
  return (
    <section className="msec" id={"sec-" + c.id}>
      <h3 className="msec-t">{c.title}</h3>
      {c.note && <p className="msec-note">{c.note}</p>}
      <div className="mrows">
        {c.items.map((it) => (
          <MenuRow it={it} key={it.no} />
        ))}
      </div>
    </section>
  );
}

function AdditiveLegend() {
  return (
    <div className="legend">
      <h4 className="legend-t">Zusatzstoffe (deklarationspflichtig)</h4>
      <div className="legend-grid">
        {window.HERMES.additives.map(([k, v]) => (
          <span className="legend-i" key={k}>
            <b>{k}</b> {v}
          </span>
        ))}
      </div>
      <p className="legend-foot">Allergeninformationen erhalten Sie gerne auf Anfrage.</p>
    </div>
  );
}

function MenuLayoutToggle({ layout, setLayout }) {
  const opts = [
    ["scroll", "Lange Liste"],
    ["tabs", "Kategorie-Tabs"],
    ["columns", "Zweispaltig (Druck)"],
  ];
  return (
    <div className="mlt">
      <span className="mlt-lbl">✎ Menü-Layout:</span>
      <div className="mlt-seg">
        {opts.map(([k, l]) => (
          <button
            key={k}
            className={"mlt-b" + (layout === k ? " on" : "")}
            onClick={() => setLayout(k)}
          >
            {l}
          </button>
        ))}
      </div>
    </div>
  );
}

function MenuView({ defaultLayout = "scroll" }) {
  const [layout, setLayout] = useState(defaultLayout);
  const cats = window.HERMES.categories;
  const [active, setActive] = useState(cats[0].id);

  return (
    <div className="menuview" data-layout={layout}>
      <MenuLayoutToggle layout={layout} setLayout={setLayout} />

      {layout === "scroll" && (
        <div className="m-scroll">
          <nav className="cat-nav">
            {cats.map((c) => (
              <a href={"#sec-" + c.id} className="cat-chip" key={c.id}>
                {c.title}
              </a>
            ))}
          </nav>
          <div className="m-body">
            {cats.map((c) => (
              <MenuSection c={c} key={c.id} />
            ))}
            <AdditiveLegend />
          </div>
        </div>
      )}

      {layout === "tabs" && (
        <div className="m-tabs">
          <div className="tabrow">
            {cats.map((c) => (
              <button
                key={c.id}
                className={"tab" + (active === c.id ? " on" : "")}
                onClick={() => setActive(c.id)}
              >
                {c.title}
              </button>
            ))}
          </div>
          <div className="tabpanel">
            <MenuSection c={cats.find((c) => c.id === active)} />
          </div>
          <AdditiveLegend />
        </div>
      )}

      {layout === "columns" && (
        <div className="m-cols">
          <div className="cols-body">
            {cats.map((c) => (
              <MenuSection c={c} key={c.id} />
            ))}
          </div>
          <AdditiveLegend />
        </div>
      )}
    </div>
  );
}

Object.assign(window, {
  Lines, Img, Note, WBtn, Column, Pediment, Meander,
  MenuRow, MenuSection, AdditiveLegend, MenuView,
});
