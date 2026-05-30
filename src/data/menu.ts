/**
 * Hermes Grill menu data — German dish names with additive codes and EUR prices.
 * Rendered at build time on the Speisekarte page (no client-side JS).
 */

export interface MenuItem {
  /** Menu number printed on the physical card. */
  no: number;
  /** Dish name (German), optionally with a short description after an em dash. */
  name: string;
  /** Comma-separated additive codes (see `additives`), shown as superscript. */
  additives?: string;
  /** Price string in EUR, German formatting (e.g. "12,50"). */
  price: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  /** Optional italic note shown under the category title. */
  note?: string;
  items: MenuItem[];
}

export interface MenuGroup {
  id: string;
  title: string;
  sub: string;
  /** Category ids belonging to this group, in display order. */
  categories: string[];
}

/** Deklarationspflichtige Zusatzstoffe — code → label. */
export const additives: ReadonlyArray<readonly [string, string]> = [
  ["1", "mit Farbstoff"],
  ["2", "mit Konservierungsstoff"],
  ["3", "mit Antioxidationsmittel"],
  ["4", "mit Geschmacksverstärker"],
  ["5", "geschwefelt"],
  ["6", "geschwärzt"],
  ["7", "gewachst"],
  ["8", "mit Süßungsmittel"],
  ["9", "enthält eine Phenylalaninquelle"],
  ["10", "mit Phosphat"],
  ["11", "coffeinhaltig"],
  ["12", "chininhaltig"],
];

export const categories: MenuCategory[] = [
  {
    id: "suppen",
    title: "Suppen",
    items: [
      { no: 121, name: "Spargelcremesuppe", additives: "4", price: "5,80" },
      { no: 122, name: "Tomatensuppe mit Sahnehäubchen", price: "5,80" },
      { no: 123, name: "Pfeffersuppe", price: "5,80" },
      { no: 124, name: "Hühnersuppe", price: "5,80" },
    ],
  },
  {
    id: "warme-vorspeisen",
    title: "Warme Vorspeisen",
    items: [
      { no: 102, name: "Schafskäse in der Pfanne — mit Champignons, Paprika, Tomaten, Knoblauch", price: "9,50" },
      { no: 103, name: "Schafskäse paniert", price: "8,50" },
      { no: 104, name: "Schafskäse gegrillt", price: "8,80" },
      { no: 105, name: "Gegrillte Peperoni — mit Kräuterbutter & Knoblauch", additives: "2,3", price: "7,90" },
      { no: 107, name: "Gigantes — weiße Bohnen mit Schafskäse überbacken", additives: "3", price: "8,20" },
      { no: 108, name: "Champignons mit Käsefüllung", additives: "1", price: "9,20" },
      { no: 126, name: "Gebackene Auberginen und Zucchini", price: "8,80" },
      { no: 127, name: "Pourakia gebacken (6 St.) — Blätterteigröllchen mit Tsatsiki", price: "8,20" },
      { no: 116, name: "Käsekroketten", additives: "1", price: "7,80" },
    ],
  },
  {
    id: "thalassina",
    title: "Thalassina — Aus dem Meer",
    items: [
      { no: 111, name: "Calamaresringe paniert", additives: "1,4", price: "10,50" },
      { no: 112, name: "Calamares natur gebacken", price: "14,50" },
      { no: 114, name: "Sardellen gebacken", price: "8,90" },
      { no: 113, name: "Riesengarnelen gegrillt (4 St.)", price: "14,80" },
      { no: 118, name: "Oktapodi „Salata“ — Oktopus in Öl & Essig mariniert", price: "18,50" },
      { no: 135, name: "Oktapodi „Stifado“ — Oktopus mit Perlzwiebeln, pikant", additives: "4", price: "19,80" },
      { no: 106, name: "Garides „Skordates“ — Garnelen in scharfem Knoblauchöl", price: "15,80" },
    ],
  },
  {
    id: "kalte-vorspeisen",
    title: "Kalte Vorspeisen",
    items: [
      { no: 100, name: "Tsatsiki — Joghurt, Gurke, Knoblauch", price: "7,50" },
      { no: 109, name: "Dolmades — gefüllte Weinblätter", price: "7,80" },
      { no: 115, name: "Taramosalata — Fischrogencreme mit Olivenöl & Zitrone", additives: "1", price: "7,80" },
      { no: 119, name: "Tirosalata — pürierter Schafskäse, würzig", additives: "3", price: "7,80" },
      { no: 117, name: "Vorspeisenplatte (ab 2 Personen)", price: "12,00 p.P." },
    ],
  },
  {
    id: "salate",
    title: "Salate",
    items: [
      { no: 133, name: "Kleiner gemischter Salat", additives: "2", price: "5,00" },
      { no: 139, name: "Griechischer Bauernsalat mit Schafskäse", additives: "2", price: "9,50" },
      { no: 131, name: "Horiatiki — Schafskäse, Tomaten, Gurke, Zwiebeln", price: "8,50" },
      { no: 130, name: "Salat „Hermes“ — Garnelen, Oktopus, Champignons, Joghurtdressing", additives: "3", price: "15,20" },
      { no: 129, name: "Salat „nach Art des Hauses“ — Putenstreifen & Champignons", additives: "3", price: "13,80" },
      { no: 128, name: "Lammstreifen auf Blattsalat der Saison", additives: "2", price: "15,50" },
      { no: 237, name: "Rinderfiletstreifen auf Blattsalat, Balsamico-Knoblauch", additives: "2", price: "16,20" },
      { no: 138, name: "Salat „Poseidon“ — Riesengarnelen, Zucchini & Paprika", additives: "2", price: "15,20" },
      { no: 137, name: "Feldsalat mit gerösteten Baconstreifen", additives: "2", price: "8,40" },
    ],
  },
  {
    id: "frischfisch",
    title: "Frischfisch & Fischkarte",
    note: "Die frische Fischauswahl wird Ihnen wie in Griechenland üblich gezeigt. Serviert mit marktfrischem Salat.",
    items: [
      { no: 300, name: "Fischsuppe „mediterraner Art“ — mit Garnelen, Muscheln & mehr", price: "14,80" },
      { no: 302, name: "Cambas — 5 Riesengarnelen am Spieß mit Reis & Gemüse", price: "18,50" },
      { no: 305, name: "Dorade Royal — mit Reis & Gemüse", price: "21,50" },
      { no: 308, name: "Kabeljaufilet gebacken — mit mediterranem Gemüsereis", price: "24,50" },
      { no: 310, name: "Lachssteak gegrillt — in Sherry-Sahnesauce auf Tagliatelle", price: "21,50" },
      { no: 304, name: "Thunfisch gegrillt (auf Anfrage)", price: "32,50" },
    ],
  },
  {
    id: "lamm-grill",
    title: "Vom Lamm — Vom Grill",
    note: "Nur neuseeländisches Weidelamm. Mit griechischen Ofenkartoffeln, grünen Bohnen & Salat.",
    items: [
      { no: 146, name: "Lammkoteletts (Lammkrone)", price: "32,50" },
      { no: 145, name: "Lammfilet am Spieß", price: "32,50" },
      { no: 147, name: "Zarte Lammhüfte mit Schafskäse", price: "29,50" },
      { no: 250, name: "Lamm Platte — Koteletts, Filet & Rückensteak", price: "32,50" },
    ],
  },
  {
    id: "lamm-ofen",
    title: "Vom Lamm — Aus dem Backofen",
    note: "Arni = Junglamm, Fournos = Ofen. Mit marktfrischem Salat.",
    items: [
      { no: 152, name: "Arni sto Fourno me Patates — mit Zitronenkartoffeln", price: "23,50" },
      { no: 153, name: "Arni sto Fourno me Kritharaki — mit Reisnudeln", price: "23,50" },
      { no: 155, name: "Arni sto Fourno me Fasolakia — mit grünen Bohnen", price: "23,50" },
      { no: 156, name: "Arni sto Fourno me Gigantes — mit Riesenbohnen", additives: "3", price: "23,50" },
      { no: 157, name: "Ganze Lammkeule (ab 4 Personen, Vorbestellung)", price: "27,20 p.P." },
    ],
  },
  {
    id: "rind",
    title: "Vom Rind",
    note: "Nur frisches Angus-Rinderfilet. Steaks ab 290 g, medium gegrillt.",
    items: [
      { no: 163, name: "Ochsenspieß", price: "30,50" },
      { no: 161, name: "Knoblauchspieß — mit frischem Knoblauch", price: "31,00" },
      { no: 162, name: "Rinderfilet am Spieß", price: "31,50" },
      { no: 193, name: "Rinderfilet am Spieß — mit Paprika & Zwiebeln", price: "32,50" },
      { no: 178, name: "Zwei Filetsteaks — in feiner Metaxasauce", price: "38,00" },
      { no: 179, name: "Filetsteak — mit frischen Champignons", price: "38,50" },
      { no: 180, name: "Filetsteak", price: "37,00" },
      { no: 181, name: "Knoblauchsteak", price: "38,50" },
      { no: 182, name: "Pfeffersteak — in Madagaskar-Pfeffersauce", price: "38,50" },
      { no: 183, name: "Rumpsteak — mit Zwiebeln oder Kräuterbutter", price: "32,50" },
      { no: 272, name: "Kalbskotelett", price: "32,50" },
    ],
  },
  {
    id: "schwein",
    title: "Grillspezialitäten — Vom Schwein",
    items: [
      { no: 140, name: "Spieß und zwei Suzukakia", additives: "2", price: "12,50" },
      { no: 141, name: "Spießbraten", additives: "2", price: "12,50" },
      { no: 142, name: "Suzukakia", additives: "2", price: "17,20" },
      { no: 143, name: "Bauernhacksteak — gefüllt mit Schafskäse", additives: "2", price: "18,80" },
      { no: 159, name: "Mixgrill", additives: "2", price: "17,50" },
      { no: 167, name: "Mixgrill mit Käse überbacken", additives: "1,2", price: "18,50" },
      { no: 160, name: "Teufelsspieß — mit scharfer Sauce", additives: "2,3", price: "19,40" },
      { no: 164, name: "Hermesspieß — mit Peperoni & Zwiebeln", additives: "2,3", price: "18,50" },
    ],
  },
  {
    id: "gyros",
    title: "Gyros",
    note: "Mittwoch, Freitag, Samstag & Sonntag ab 17:00 Uhr.",
    items: [
      { no: 144, name: "Gyros vom Drehspieß — mit Tomaten, Zwiebeln, Tsatsiki", additives: "2", price: "17,50" },
      { no: 158, name: "Gyros mit Metaxasauce", additives: "1,2", price: "18,80" },
      { no: 190, name: "Gyros Spezial — mit Metaxasauce & Käse überbacken", additives: "1,2", price: "20,50" },
    ],
  },
  {
    id: "lenden",
    title: "Lendenspieße & Schweinefilet",
    items: [
      { no: 165, name: "Lendenspieß", additives: "2", price: "21,50" },
      { no: 166, name: "Lendenspieß — mit Käse überbacken", additives: "1,2", price: "22,50" },
      { no: 168, name: "Fetaspieß — Lendenmedaillons mit Schafskäse", additives: "2", price: "22,50" },
      { no: 185, name: "Bauernspieß — mit Tomaten, Paprika, Zwiebeln", additives: "2", price: "21,50" },
      { no: 169, name: "Manitarispieß — mit gefüllten Champignons", additives: "1,2", price: "22,50" },
      { no: 191, name: "Schweinefiletpfännchen — in Metaxasauce", additives: "1,2", price: "22,80" },
      { no: 189, name: "Lendensteak „nach Balkan Art“ — in Rahmsauce", additives: "2", price: "22,50" },
    ],
  },
  {
    id: "gefluegel",
    title: "Geflügel",
    items: [
      { no: 194, name: "Putenspieß — mit Paprika, Zwiebeln, Käse überbacken", additives: "1,2", price: "17,80" },
      { no: 195, name: "Putensteak", additives: "2", price: "17,20" },
      { no: 198, name: "Putensteak — mit Champignons in Rieslingsauce & Rösti", additives: "2", price: "18,80" },
    ],
  },
  {
    id: "platten",
    title: "Platten",
    note: "Mit Beilagen & gemischtem Salat. Auch für mehrere Personen.",
    items: [
      { no: 170, name: "Theo Platte — Spieß, Steak & kleines Hacksteak", additives: "2", price: "19,50" },
      { no: 171, name: "Spezial Platte — Lammlende, Schweinelende, Filetsteak & Lammkotelett", additives: "2", price: "33,50" },
      { no: 173, name: "Parga Platte — Spieß, Steak & zwei Suzukakia", additives: "2", price: "20,80" },
      { no: 174, name: "Gyros Platte — Gyros & kleines Hacksteak", additives: "2", price: "18,50" },
      { no: 175, name: "Bauern Platte — Spieß, Steak, Lammkotelett, Suzukakia & Feta", additives: "2", price: "23,50" },
    ],
  },
  {
    id: "vegetarisch",
    title: "Vegetarisch",
    items: [
      { no: 192, name: "Vegetarischer Spieß — Tomaten, Paprika, Zwiebeln, Champignons & Feta", additives: "2", price: "17,20" },
      { no: 151, name: "Mousaka — Auflauf mit Auberginen, Hackfleisch & Béchamel", additives: "1,2", price: "18,50" },
    ],
  },
  {
    id: "deutsch",
    title: "Aus der deutschen Küche",
    items: [
      { no: 188, name: "Schnitzel paniert", price: "16,50" },
      { no: 186, name: "Jägerschnitzel", price: "17,80" },
      { no: 260, name: "Putenschnitzel", price: "17,20" },
    ],
  },
  {
    id: "kinder",
    title: "Für unsere kleinen Gäste",
    note: "Mit Pommes & kleinem Salat. Malblock & Stifte vorhanden.",
    items: [
      { no: 80, name: "Zarter Lendenspieß — mit Käse überbacken", additives: "1", price: "10,80" },
      { no: 81, name: "Kleines paniertes Schnitzel", price: "9,50" },
      { no: 82, name: "Mini Mix", price: "9,50" },
      { no: 83, name: "Kleines paniertes Putenschnitzel", price: "9,50" },
      { no: 99, name: "Kleines Lachssteak", price: "12,80" },
    ],
  },
  {
    id: "beilagen",
    title: "Beilagen",
    items: [
      { no: 84, name: "Geröstetes Knoblauchbrot", price: "3,00" },
      { no: 85, name: "Pommes frites", price: "3,50" },
      { no: 87, name: "Griechische Kartoffeln aus dem Backofen", price: "3,50" },
      { no: 88, name: "Kroketten", price: "3,50" },
      { no: 89, name: "Djuwetschreis", price: "3,50" },
    ],
  },
  {
    id: "dessert",
    title: "Dessert",
    items: [
      { no: 90, name: "Dimi Becher — gemischtes Eis mit Eierlikör", additives: "1", price: "7,50" },
      { no: 92, name: "Gemischtes Eis mit Sahne", additives: "1", price: "6,50" },
      { no: 93, name: "Vanilleeis mit flambierten Himbeeren", additives: "1", price: "7,50" },
      { no: 94, name: "Vanilleeis mit heißer Schokoladensauce", additives: "1", price: "7,50" },
      { no: 96, name: "Griechischer Sahnejoghurt mit Honig & Walnüssen", price: "7,50" },
      { no: 97, name: "Griechischer Sahnejoghurt mit frischem Obst", price: "9,50" },
      { no: 91, name: "Kataifi — Süßgebäck mit Vanilleeis & Walnüssen", additives: "1", price: "8,50" },
      { no: 98, name: "Pagoto — gemischtes Eis mit frischem Obst", additives: "1", price: "9,50" },
    ],
  },
];

export const groups: MenuGroup[] = [
  {
    id: "g-vorspeisen",
    title: "Vorspeisen & Salate",
    sub: "Zum Anfang – warm, kalt und aus dem Meer",
    categories: ["suppen", "warme-vorspeisen", "kalte-vorspeisen", "thalassina", "salate"],
  },
  {
    id: "g-fisch",
    title: "Fisch",
    sub: "Wie in Griechenland zeigen wir Ihnen die frische Auswahl",
    categories: ["frischfisch"],
  },
  {
    id: "g-grill",
    title: "Vom Grill & aus dem Ofen",
    sub: "Weidelamm, Angus-Rind, Spieße und Platten",
    categories: ["lamm-grill", "lamm-ofen", "rind", "schwein", "gyros", "lenden", "gefluegel", "platten"],
  },
  {
    id: "g-klassiker",
    title: "Vegetarisch & Klassiker",
    sub: "Fleischlos, deutsche Küche und für die Kleinen",
    categories: ["vegetarisch", "deutsch", "kinder"],
  },
  {
    id: "g-dessert",
    title: "Beilagen & Dessert",
    sub: "Zum Abrunden",
    categories: ["beilagen", "dessert"],
  },
];

const byId = new Map(categories.map((c) => [c.id, c]));

/** Resolve a group's category ids to their full category objects. */
export function categoriesForGroup(group: MenuGroup): MenuCategory[] {
  return group.categories
    .map((id) => byId.get(id))
    .filter((c): c is MenuCategory => Boolean(c));
}
