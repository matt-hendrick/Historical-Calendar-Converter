export const J0000 = 1721424.5;
// *Julian date at Unix epoch: 1970-01-01*
export const J1970 = 2440587.5;
// *Epoch of Modified Julian Date system*
export const JMJD = 2400000.5;
// *Epoch (day 1) of Excel 1900 date system (PC)*
export const J1900 = 2415020.5;
// *Epoch (day 0) of Excel 1904 date system (Mac)*
export const J1904 = 2416480.5;
// *Gregorian date: 02000-01-01
export const J2000 = 730120.5;

export const ARYA_SOLAR_YEAR = 1577917500 / 4320000; // 365.258680556,
export const ARYA_SOLAR_MONTH = 1577917500 / 4320000 / 12; // 30.4382233796,
export const ARYA_LUNAR_MONTH = 1577917500 / 53433336; // 29.5305818076,
export const ARYA_LUNAR_DAY = 1577917500 / 53433336 / 30; // 0.984352726919,
export const MEAN_TROPICAL_YEAR = 365.242189;
export const MEAN_SIDEREAL_YEAR = 365.25636;
export const MEAN_SYNODIC_MONTH = 29.530588861;

export const SPRING = 0;
export const SUMMER = 90;
export const AUTUMN = 180;
export const WINTER = 270;

export const JANUARY = 1;
export const FEBRUARY = 2;
export const MARCH = 3;
export const APRIL = 4;
export const MAY = 5;
export const JUNE = 6;
export const JULY = 7;
export const AUGUST = 8;
export const SEPTEMBER = 9;
export const OCTOBER = 10;
export const NOVEMBER = 11;
export const DECEMBER = 12;

export const gregorian = {
  EPOCH: 1721425.5,
  EPOCH_RD: 730120.5,
  MONTHS: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
};

export const julian = {
  EPOCH: 1721423.5,
  MONTHS: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
};

export const hebrew = {
  EPOCH: 347995.5,
  MONTHS: [
    'Nisan',
    'Iyyar',
    'Sivan',
    'Tammuz',
    'Av',
    'Elul',
    'Tishri',
    'Marẖeshvan',
    'Kislev',
    'Teveth',
    'Shevat',
    'Adar',
    'Veadar',
  ],
  H_MONTHS: [
    'נִיסָן',
    'אייר',
    'סיוון',
    'תַּמּוּז',
    'אָב',
    'אֱלוּל',
    'תִּשׁרִי',
    'מרחשוון',
    'כסליו',
    'טֵבֵת',
    'שְׁבָט',
    'אֲדָר א׳',
    'אֲדָר א׳',
  ],
};

export const french_revolutionary = {
  EPOCH: 2375839.5,
  MOIS: [
    'Vendémiaire',
    'Brumaire',
    'Frimaire',
    'Nivôse',
    'Pluviôse',
    'Ventôse',
    'Germinal',
    'Floréal',
    'Prairial',
    'Messidor',
    'Thermidor',
    'Fructidor',
    'Sans-culottides',
  ],
  DECADE: ['I', 'II', 'III'],
  JOUR: [
    'du Primidi (1)',
    'du Duodi (2)',
    'du Tridi (3)',
    'du Quartidi (4)',
    'du Quintidi (5)',
    'du Sextidi (6)',
    'du Septidi (7)',
    'du Octidi (8)',
    'du Nonidi (9)',
    'du Décadi (10)',
    '------------',
    'de la Vertu (1)',
    'du Génie (2)',
    'du Travail (3)',
    "de l'Opinion (4)",
    'des Récompenses (5)',
    'de la Révolution (6)',
  ],
};

export const islamic = {
  EPOCH: 1948439.5,
  WEEKDAYS: [
    "al-'ahad",
    "al-'ithnayn",
    "ath-thalatha'",
    "al-'arb`a'",
    'al-khamis',
    'al-jum`a',
    'as-sabt',
  ],
  MONTHS: [
    'Muharram',
    'Safar',
    'Rabi`al-Awwal',
    'Rabi`ath-Thani',
    'Jumada l-Ula',
    'Jumada t-Tania',
    'Rajab',
    'Sha`ban',
    'Ramadan',
    'Shawwal',
    'Dhu l-Qa`da',
    'Dhu l-Hijja',
  ],
  ARABIC_WEEKDAYS: [
    'الأحد',
    'الإثنين',
    'الثلاثاء',
    'الأربعاء',
    'الخميس',
    'الجمعة',
    'السب',
  ],
};

export const persian = {
  EPOCH: 1948320.5,
  EPOCH_RD: 226896,
  TEHRAN_LOCATION: [35.68, 51.42, 1100, 7 / 48],
  WEEKDAYS: [
    'Yekshanbeh',
    'Doshanbeh',
    'Seshhanbeh',
    'Chaharshanbeh',
    'Panjshanbeh',
    'Jomeh',
    'Shanbeh',
  ],
  MONTHS: [
    'Farvardin',
    'Ordibehesht',
    'Khordad',
    'Tir',
    'Mordad',
    'Shahrivar',
    'Mehr',
    'Aban',
    'Azar',
    'Dey',
    'Bahman',
    'Esfand',
  ],
};

export const mayan = {
  COUNT_EPOCH: 584282.5,
  HAAB_MONTHS: [
    'Pop',
    'Uo',
    'Zip',
    'Zotz',
    'Tzec',
    'Xul',
    'Yaxkin',
    'Mol',
    'Chen',
    'Yax',
    'Zac',
    'Ceh',
    'Mac',
    'Kankin',
    'Muan',
    'Pax',
    'Kayab',
    'Cumku',
    'Uayeb',
  ],
  TZOLKIN_MONTHS: [
    'Imix',
    'Ik',
    'Akbal',
    'Kan',
    'Chicchan',
    'Cimi',
    'Manik',
    'Lamat',
    'Muluc',
    'Oc',
    'Chuen',
    'Eb',
    'Ben',
    'Ix',
    'Men',
    'Cib',
    'Caban',
    'Etznab',
    'Cauac',
    'Ahau',
  ],
};

export const bahai = {
  EPOCH: 2394646.5,
  EPOCH172: 2457102.5,
  WEEKDAYS: [
    'Jamál',
    'Kamál',
    'Fidál',
    'Idál',
    'Istijlál',
    'Istiqlál',
    'Jalál',
  ],
  YEARS: [
    'Alif',
    'Bá',
    'Ab',
    'Dál',
    'Báb',
    'Váv',
    'Abad',
    'Jád',
    'Bahá',
    'Hubb',
    'Bahháj',
    'Javáb',
    'Ahad',
    'Vahháb',
    'Vidád',
    'Badí',
    'Bahí',
    'Abhá',
    'Vahíd',
  ],
  MONTHS: [
    'Bahá',
    'Jalál',
    'Jamál',
    '`Azamat',
    'Núr',
    'Rahmat',
    'Kalimát',
    'Kamál',
    'Asmá',
    '`Izzat',
    'Mashíyyat',
    '`Ilm',
    'Qudrat',
    'Qawl',
    'Masáil',
    'Sharaf',
    'Sultán',
    'Mulk',
    'Ayyám-i-Há',
    "`Alá'",
  ],
  DAYS: [
    'Bahá',
    'Jalál',
    'Jamál',
    '`Azamat',
    'Núr',
    'Rahmat',
    'Kalimát',
    'Kamál',
    'Asmá',
    '`Izzat',
    'Mashíyyat',
    '`Ilm',
    'Qudrat',
    'Qawl',
    'Masáil',
    'Sharaf',
    'Sultán',
    'Mulk',
    "`Alá'",
  ],
};

export const hindu = {
  EPOCH: 588465.5,
  EPOCH_RD: -1132959, // Julian 3102/02/18 BCE
  SIDEREAL_YEAR: 365 + 279457 / 1080000,
  CREATION: -714403429586.0, // EPOCH - 1955880000 * SIDEREAL_YEAR
  SIDEREAL_MONTH: 27 + 4644439 / 14438334,
  SYNODIC_MONTH: 29 + 7087771 / 13358334,
  ANOMALISTIC_YEAR: 1577917828000 / (4320000000 - 387),
  ANOMALISTIC_MONTH: 1577917828 / (57753336 - 488199),
  SOLAR_ERA: 3179,
  LUNAR_ERA: 3044,
  UJJAIN_LOCATION: [23.15, 75 + 461 / 600, 0, (5 + 461 / 9000) / 24],
  SIDEREAL_START: 336.13605090692613,
  WEEKDAYS: [
    'ravivara',
    'somavara',
    'mangalavara',
    'budhavara',
    'brahaspativara',
    'sukravara',
    'sanivara',
  ],
  MONTHS: [
    'Caitra',
    'Vaisakha',
    'Jyaistha',
    'Asadha',
    'Sravana',
    'Bhadra',
    'Asvina',
    'Kartika',
    'Agrahayana',
    'Pausa',
    'Magha',
    'Phalguna',
  ],
};

export const tibetan = {
  EPOCH: -46410 + 1721424.5, // 172/12/07 BCE (Gregorian)
  EPOCH_RD: -46410, // 172/12/07 BCE (Gregorian)
};

export const frenchRuralDays = {
  1: [
    'Raisin (Grape)',
    'Safran (Saffron)',
    'Châtaigne (Chestnut)',
    'Colchique (Crocus)',
    'Cheval (Horse)',
    'Balsamine (Impatiens)',
    'Carotte (Carrot)',
    'Amarante (Amaranth)',
    'Panais (Parsnip)',
    'Cuve (Barrel)',
    'Pomme de terre (Potato)',
    'Immortelle (Strawflower)',
    'Potiron (Pumpkin)',
    'Réséda (Mignonette)',
    'Âne (Donkey)',
    'Belle de nuit (The four o’clock flower)',
    'Citrouille (Pumpkin)',
    'Sarrasin (Buckwheat)',
    'Tournesol (Sunflower)',
    'Pressoir (Wine-Press)',
    'Chanvre (Hemp)',
    'Pêche (Peach)',
    'Navet (Turnip)',
    'Amaryllis (Amaryllis)',
    'Boeuf (Cow)',
    'Aubergine (Eggplant)',
    'Piment (Chile Pepper)',
    'Tomate (Tomato)',
    'Orge (Barley)',
    'Tonneau (Barrel)',
  ],
  2: [
    'Pomme (Apple)',
    'Céleri (Celery)',
    'Poire (Pear)',
    'Betterave (Beet root)',
    'Oie (Goose)',
    'Héliotrope (Heliotrope)',
    'Figue (Fig)',
    'Scorsonère (Black Salsify)',
    'Alisier (Chequer Tree)',
    'Charrue (Plough)',
    'Salsifis (Salsify)',
    'Macre (Water chestnut)',
    'Topinambour (Jerusalem Artichoke)',
    'Endive (Endive)',
    'Dindon (Turkey)',
    'Chervis (Skirret)',
    'Cresson (Watercress)',
    'Dentelaire (Leadworts)',
    'Grenade (Pomegranate)',
    'Herse (Harrow)',
    'Bacchante (Baccharis halimifolia)',
    'Azerole (Acerola)',
    'Garance (Madder)',
    'Orange (Orange)',
    'Faisan (Pheasant)',
    'Pistache (Pistachio)',
    'Macjonc (Tuberous pea)',
    'Coing (Quince)',
    'Cormier (Service tree)',
    'Rouleau (Roller)',
  ],
  3: [
    'Raiponce (Rampion)',
    'Turneps (Turnip)',
    'Chicorée (Chicory)',
    'Nèfle (Medlar)',
    'Cochon (Pig)',
    'Mâche (Corn Salad)',
    'Chou-fleur (Cauliflower)',
    'Miel (Honey)',
    'Genièvre (Juniper)',
    'Pioche (Pick)',
    'Cire (Wax)',
    'Raifort (Horseradish)',
    'Cèdre (Cedar tree)',
    'Sapin (Fir tree)',
    'Chevreuil (Roe Deer)',
    'Ajonc (Gorse)',
    'Cyprès (Cypress Tree)',
    'Lierre (Ivy)',
    'Sabine (Juniper)',
    'Hoyau (Grub-hoe)',
    'Erable sucré (Maple Tree)',
    'Bruyère (Heather)',
    'Roseau (Reed plant)',
    'Oseille (Sorrel)',
    'Grillon (Cricket)',
    'Pignon (Pinenut)',
    'Liège (Cork)',
    'Truffe (Truffle)',
    'Olive (Olive)',
    'Pelle (Shovel)',
  ],
  4: [
    'Tourbe (Peat)',
    'Houille (Coal)',
    'Bitume (Bitumen)',
    'Soufre (Sulphur)',
    'Chien (Dog)',
    'Lave (Lava)',
    'Terre végétale (Topsoil)',
    'Fumier (Manure)',
    'Salpêtre (Saltpeter)',
    'Fléau (Flail)',
    'Granit (Granite stone)',
    'Argile (Clay)',
    'Ardoise (Slate)',
    'Grès (Sandstone)',
    'Lapin (Rabbit)',
    'Silex (Flint)',
    'Marne (Marl)',
    'Pierre à chaux (Limestone)',
    'Marbre (Marble)',
    'Van (Winnowing basket)',
    'Pierre à plâtre (Gypsum)',
    'Sel (Salt)',
    'Fer (Iron)',
    'Cuivre (Copper)',
    'Chat (Cat)',
    'Étain (Tin)',
    'Plomb (Lead)',
    'Zinc (Zinc)',
    'Mercure (Mercury)',
    'Crible (Sieve)',
  ],
  5: [
    'Lauréole (Spurge-laurel)',
    'Mousse (Moss)',
    'Fragon (Butcher’s Broom)',
    'Perce-neige (Snowdrop)',
    'Taureau (Bull)',
    'Laurier-thym (Laurustinus)',
    'Amadouvier (Tinder polypore)',
    'Mézéréon (Daphne mezereum)',
    'Peuplier (Poplar Tree)',
    'Coignée (Axe)',
    'Ellébore (Hellebore)',
    'Brocoli (Broccoli)',
    'Laurier (Laurel)',
    'Avelinier (Hazelnut tree)',
    'Vache (Cow)',
    'Buis (Box Tree)',
    'Lichen (Lichen)',
    'If (Yew tree)',
    'Pulmonaire (Lungwort)',
    'Serpette (Billhook)',
    'Thlaspi (Pennycress)',
    'Thimelé (Rose Daphne)',
    'Chiendent (Couch Grass)',
    'Trainasse (Knotweed)',
    'Lièvre (Hare)',
    'Guède (Woad)',
    'Noisetier (Hazel)',
    'Cyclamen (Cyclamen)',
    'Chélidoine (Celandine)',
    'Traîneau (Sleigh)',
  ],
  6: [
    'Tussilage (Coltsfoot)',
    'Cornouiller (Dogwood)',
    'Violier (Matthiola)',
    'Troène (Privet)',
    'Bouc (Billygoat)',
    'Asaret (Wild Ginger)',
    'Alaterne (Buckthorn)',
    'Violette (Violet)',
    'Marceau (Goat Willow)',
    'Bêche (Spade)',
    'Narcisse (Narcissus)',
    'Orme (Elm Tree)',
    'Fumeterre (Common fumitory)',
    'Vélar (Hedge Mustard)',
    'Chèvre (Goat)',
    'Épinard (Spinach)',
    'Doronic (Large-flowered Leopard’s Bane)',
    'Mouron (Pimpernel)',
    'Cerfeuil (Chervil)',
    'Cordeau (Twine)',
    'Mandragore (Mandrake)',
    'Persil (Parsley)',
    'Cochléaria (Scurvy-grass)',
    'Pâquerette (Daisy)',
    'Thon (Tuna)',
    'Pissenlit (Dandelion)',
    'Sylve (Forest)',
    'Capillaire (Maidenhair fern)',
    'Frêne (Ash Tree)',
    'Plantoir (Dibble)',
  ],
  7: [
    'Primevère (Primrose)',
    'Platane (Plane Tree)',
    'Asperge (Asparagus)',
    'Tulipe (Tulip)',
    'Poule (Hen)',
    'Bette (Chard Plant)',
    'Bouleau (Birch Tree)',
    'Jonquille (Daffodil)',
    'Aulne (Alder)',
    'Couvoir (Hatchery)',
    'Pervenche (Periwinkle)',
    'Charme (Ironwood)',
    'Morille (Morel)',
    'Hêtre (Beech Tree)',
    'Abeille (Bee)',
    'Laitue (Lettuce)',
    'Mélèze (Larch)',
    'Ciguë (Hemlock)',
    'Radis (Radish)',
    'Ruche (Hive)',
    'Gainier (Judas tree)',
    'Romaine (Lettuce)',
    'Marronnier (Chestnut Oak)',
    'Roquette (Rocket)',
    'Pigeon (Pigeon)',
    'Lilas (Lilac)',
    'Anémone (Anemone)',
    'Pensée (Pansy)',
    'Myrtille (Blueberry)',
    'Greffoir (Knife)',
  ],
  8: [
    'Rose (Rose)',
    'Chêne (Oak Tree)',
    'Fougère (Fern)',
    'Aubépine (Hawthorn)',
    'Rossignol (Nightingale)',
    'Ancolie (Columbine)',
    'Muguet (Lily of the Valley)',
    'Champignon (Mushroom)',
    'Hyacinthe (Hyacinth)',
    'Râteau (Rake)',
    'Rhubarbe (Rhubarb)',
    'Sainfoin (Sainfoin)',
    'Bâton-d’or (Wallflower)',
    'Chamérops (Palm tree)',
    'Ver à soie (Silkworm)',
    'Consoude (Comfrey)',
    'Pimprenelle (Salad Burnet)',
    'Corbeille d’or (Basket of Gold)',
    'Arroche (Orache)',
    'Sarcloir (Garden hoe)',
    'Statice (Sea Lavender)',
    'Fritillaire (Fritillary)',
    'Bourrache (Borage)',
    'Valériane (Valerian)',
    'Carpe (Carp)',
    'Fusain (Spindle shrub)',
    'Civette (Chive)',
    'Buglosse (Bugloss)',
    'Sénevé (Wild mustard)',
    'Houlette (Shepherd’s crook)',
  ],
  9: [
    'Luzerne (Alfalfa)',
    'Hémérocalle (Daylily)',
    'Trèfle (Clover)',
    'Angélique (Angelica)',
    'Canard (Duck)',
    'Mélisse (Lemon Balm)',
    'Fromental (Oat grass)',
    'Martagon (Martagon lily)',
    'Serpolet (Thyme plant)',
    'Faux (Scythe)',
    'Fraise (Strawberry)',
    'Bétoine (Woundwort)',
    'Pois (Pea)',
    'Acacia (Acacia)',
    'Caille (Quail)',
    'Oeillet (Carnation)',
    'Sureau (Elder Tree)',
    'Pavot (Poppy plant)',
    'Tilleul (Linden tree)',
    'Fourche (Pitchfork)',
    'Barbeau (Cornflower)',
    'Camomille (Camomile)',
    'Chèvrefeuille (Honeysuckle)',
    'caille-lait (Bedstraw)',
    'Tanche (Tench)',
    'Jasmin (Jasmine Plant)',
    'Verveine (Verbena)',
    'Thym (Thyme Plant)',
    'Pivoine (Peony Plant)',
    'Chariot (Hand Cart)',
  ],
  10: [
    'Seigle (Rye)',
    'Avoine (Oats)',
    'Oignon (Onion)',
    'Véronique (Speedwell)',
    'Mulet (Mule)',
    'Romarin (Rosemary)',
    'Concombre (Cucumber)',
    'Echalote (Shallot)',
    'Absinthe (Wormwood)',
    'Faucille (Sickle)',
    'Coriandre (Coriander)',
    'Artichaut (Artichoke)',
    'Girofle (Clove)',
    'Lavande (Lavender)',
    'Chamois (Chamois)',
    'Tabac (Tobacco)',
    'Groseille (Currant)',
    'Gesse (Hairy Vetchling)',
    'Cerise (Cherry)',
    'Parc (Park)',
    'Menthe (Mint)',
    'Cumin (Cumin)',
    'Haricot (Bean)',
    'Orcanète (Alkanet)',
    'Pintade (Guinea fowl)',
    'Sauge (Sage Plant)',
    'Ail (Garlic)',
    'Vesce (Tare)',
    'Blé (Wheat)',
    'Chalémie (Shawm)',
  ],
  11: [
    'Epeautre (Einkorn Wheat)',
    'Bouillon blanc (Common Mullein)',
    'Melon (Honeydew Melon)',
    'Ivraie (Ryegrass)',
    'Bélier (Ram)',
    'Prêle (Horsetail)',
    'Armoise (Mugwort)',
    'Carthame (Safflower)',
    'Mûre (Blackberry)',
    'Arrosoir (Watering Can)',
    'Panis (Panic grass)',
    'Salicorne (Common Glasswort)',
    'Abricot (Apricot)',
    'Basilic (Basil)',
    'Brebis (Ewe)',
    'Guimauve (Marshmallow root)',
    'Lin (Flax)',
    'Amande (Almond)',
    'Gentiane (Gentian)',
    'Ecluse (Lock)',
    'Carline (Carline thistle)',
    'Câprier (Caper)',
    'Lentille (Lentil)',
    'Aunée (Yellow starwort)',
    'Loutre (Otter)',
    'Myrte (Myrtle)',
    'Colza (Rapeseed)',
    'Lupin (Lupin)',
    'Coton (Cotton)',
    'Moulin (Mill)',
  ],
  12: [
    'Prune (Plum)',
    'Millet (Millet)',
    'Lycoperdon (Puffball)',
    'Escourgeon (Six-row Barley)',
    'Saumon (Salmon)',
    'Tubéreuse (Tuberose)',
    'Sucrion (Sugar melon)',
    'Apocyn (Apocynum)',
    'Réglisse (Liquorice)',
    'Echelle (Ladder)',
    'Pastèque (Watermelon)',
    'Fenouil (Fennel)',
    'Epine vinette (Barberry)',
    'Noix (Walnut)',
    'Truite (Trout)',
    'Citron (Lemon)',
    'Cardère (Teasel)',
    'Nerprun (Buckthorn)',
    'Tagette (Mexican Marigold)',
    'Hotte (Sack)',
    'Eglantine (Wild Rose)',
    'Noisette (Hazelnut)',
    'Houblon (Hops)',
    'Sorgho (Sorghum)',
    'Ecrevisse (Crayfish)',
    'Bigarade (Bitter Orange)',
    'Verge d’or (Goldenrod)',
    'Maïs (Maize)',
    'Marron (Chestnut)',
    'Panier (Basket)',
  ],
  13: [
    'La Fête de la Vertu (Celebration of Virtue)',
    'La Fête du Génie (Celebration of Talent)',
    'La Fête du Travail (Celebration of Labour)',
    "La Fête de l'Opinion (Celebration of Convictions)",
    'La Fête des Récompenses (Celebration of Honors)',
    'La Fête de la Révolution (Celebration of the Revolution)',
  ],
};
