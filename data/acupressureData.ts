export type PracticeMode = "learning" | "clinical";

export type PointTechnique = "Tonification" | "Dispersion" | "Harmonisation" | "Ancrage";

export type AcupressurePoint = {
  id: string;
  code: string;
  name: string;
  commonName: string;
  meridian: string;
  category: "essentiel" | "cabinet";
  location: string;
  stimulation: string;
  duration: string;
  precautions: string;
  indications: string[];
};

export type LearningEntry = {
  id: string;
  name: string;
  type: "zone" | "symptome";
  shortDescription: string;
  icon: string;
  pointIds: string[];
};

export type Protocol = {
  id: string;
  title: string;
  context: string;
  objective: string;
  technique: PointTechnique;
  mainPointIds: string[];
  secondaryPointIds: string[];
  associations: string[];
  precautions: string;
};

export type Syndrome = {
  id: string;
  title: string;
  signs: string[];
  objective: string;
  strategy: string;
  mainPointIds: string[];
  secondaryPointIds: string[];
  associations: string[];
  technique: PointTechnique;
  precautions: string;
};

export type Meridian = {
  id: string;
  name: string;
  element: string;
  pathway: string;
  keySigns: string[];
  mainPointIds: string[];
  usefulCombinations: string[];
  technique: PointTechnique;
  precautions: string;
};

export const safetyNotice =
  "Cette application est une antisèche de travail destinée à accompagner une pratique professionnelle. Elle ne remplace pas le raisonnement clinique, le diagnostic énergétique complet, ni les précautions propres à chaque patient.";

export const globalPrecautions = [
  "Grossesse : prudence avec LI4 et SP6.",
  "Éviter toute pression ou puncture sur zone blessée, inflammée ou douloureuse anormalement.",
  "Adapter la pratique au terrain du patient, à son âge, à sa sensibilité et à ses traitements.",
  "Orienter vers un médecin en cas de douleur intense, persistante ou de symptômes inhabituels."
];

export const points: AcupressurePoint[] = [
  {
    id: "li4",
    code: "LI4",
    name: "Hegu",
    commonName: "Vallée de la main",
    meridian: "Gros Intestin",
    category: "essentiel",
    location: "Dos de la main, dans le creux charnu entre le pouce et l'index.",
    stimulation: "Pression progressive ou petits cercles, sans rechercher une douleur forte.",
    duration: "30 à 60 secondes par main.",
    precautions: "À éviter pendant la grossesse. Prudence si douleur locale ou inflammation.",
    indications: ["céphalée", "douleurs de la face", "stress", "stagnation"]
  },
  {
    id: "gb20",
    code: "GB20",
    name: "Fengchi",
    commonName: "Portes du vent",
    meridian: "Vésicule Biliaire",
    category: "essentiel",
    location: "Base du crâne, dans les creux de chaque côté de la nuque.",
    stimulation: "Pouces dans les creux, massage lent en cercles, tête légèrement inclinée.",
    duration: "45 à 90 secondes.",
    precautions: "Pression modérée. Stopper si vertige, douleur vive ou inconfort neurologique.",
    indications: ["nuque", "céphalée", "vent", "yang du foie"]
  },
  {
    id: "pc6",
    code: "PC6",
    name: "Neiguan",
    commonName: "Passe intérieure",
    meridian: "Maître Coeur",
    category: "essentiel",
    location: "Intérieur de l'avant-bras, trois largeurs de doigt sous le pli du poignet.",
    stimulation: "Pression maintenue avec le pouce, relâchement progressif.",
    duration: "1 à 2 minutes par poignet.",
    precautions: "Éviter sur irritation, blessure ou chirurgie récente du poignet.",
    indications: ["nausée", "anxiété", "oppression thoracique", "digestion"]
  },
  {
    id: "st36",
    code: "ST36",
    name: "Zusanli",
    commonName: "Trois lieues de la jambe",
    meridian: "Estomac",
    category: "essentiel",
    location: "Sous la rotule, quatre largeurs de doigt plus bas, légèrement en dehors du tibia.",
    stimulation: "Pression circulaire ferme mais confortable.",
    duration: "1 à 2 minutes par jambe.",
    precautions: "Éviter si blessure, inflammation ou douleur inhabituelle du genou.",
    indications: ["fatigue", "digestion", "vide de qi", "immunité"]
  },
  {
    id: "sp6",
    code: "SP6",
    name: "Sanyinjiao",
    commonName: "Réunion des trois yin",
    meridian: "Rate",
    category: "essentiel",
    location: "Intérieur de la jambe, quatre largeurs de doigt au-dessus de la malléole interne.",
    stimulation: "Pression douce avec le pouce, massage lent.",
    duration: "45 à 90 secondes par jambe.",
    precautions: "À éviter pendant la grossesse. Prudence en cas de varices douloureuses.",
    indications: ["digestion", "sommeil", "yin", "gynécologie"]
  },
  {
    id: "lv3",
    code: "LV3",
    name: "Taichong",
    commonName: "Grand assaut",
    meridian: "Foie",
    category: "essentiel",
    location: "Dessus du pied, dans le creux entre le premier et le deuxième métatarsien.",
    stimulation: "Petits cercles avec pression progressive.",
    duration: "1 minute par pied.",
    precautions: "Éviter si pied blessé, gonflé, inflammé ou très sensible.",
    indications: ["stagnation du qi", "irritabilité", "céphalée", "stress"]
  },
  {
    id: "yintang",
    code: "Yintang",
    name: "Yintang",
    commonName: "Point du calme",
    meridian: "Extra",
    category: "essentiel",
    location: "Entre les sourcils.",
    stimulation: "Contact très doux, pression légère ou cercles lents.",
    duration: "30 à 90 secondes.",
    precautions: "Rester léger. Stopper si céphalée aggravée ou inconfort.",
    indications: ["calme", "sommeil", "stress", "céphalée frontale"]
  },
  {
    id: "kd1",
    code: "KD1",
    name: "Yongquan",
    commonName: "Source jaillissante",
    meridian: "Rein",
    category: "essentiel",
    location: "Plante du pied, dans le creux du premier tiers antérieur.",
    stimulation: "Pouce ou balle souple, pression lente vers l'ancrage.",
    duration: "1 à 2 minutes par pied.",
    precautions: "Éviter en cas de plaie, neuropathie importante ou perte de sensibilité.",
    indications: ["ancrage", "sommeil", "agitation", "vide de yin"]
  },
  {
    id: "ht7",
    code: "HT7",
    name: "Shenmen",
    commonName: "Porte de l'esprit",
    meridian: "Coeur",
    category: "essentiel",
    location: "Pli du poignet côté auriculaire, dans le creux près du tendon.",
    stimulation: "Pression douce et régulière, respiration lente.",
    duration: "1 minute par poignet.",
    precautions: "Éviter sur douleur locale ou irritation du poignet.",
    indications: ["insomnie", "anxiété", "palpitations", "shen"]
  },
  {
    id: "cv12",
    code: "CV12",
    name: "Zhongwan",
    commonName: "Centre de l'estomac",
    meridian: "Ren Mai",
    category: "essentiel",
    location: "Ligne médiane de l'abdomen, à mi-distance entre nombril et sternum.",
    stimulation: "Pression très douce ou chaleur, jamais après un repas lourd.",
    duration: "30 à 90 secondes.",
    precautions: "Prudence grossesse, douleur abdominale aiguë, fièvre ou signe digestif inhabituel.",
    indications: ["ballonnements", "digestion lente", "estomac", "nausée"]
  },
  {
    id: "taiyang",
    code: "Taiyang",
    name: "Taiyang",
    commonName: "Tempe",
    meridian: "Extra",
    category: "cabinet",
    location: "Dépression de la tempe, en dehors de l'extrémité du sourcil.",
    stimulation: "Pression douce ou massage circulaire lent.",
    duration: "30 à 60 secondes.",
    precautions: "Pression légère, éviter en cas de traumatisme local.",
    indications: ["céphalée temporale", "tension oculaire", "yang du foie"]
  },
  {
    id: "bl23",
    code: "BL23",
    name: "Shenshu",
    commonName: "Shu du Rein",
    meridian: "Vessie",
    category: "cabinet",
    location: "Dos, à hauteur de L2, à 1,5 cun de la ligne médiane.",
    stimulation: "Pression ou travail Tuina local selon terrain.",
    duration: "Technique courte et adaptée au patient.",
    precautions: "Éviter pression forte sur douleur aiguë, traumatisme ou suspicion rénale.",
    indications: ["lombalgie", "vide du rein", "fatigue profonde"]
  },
  {
    id: "bl40",
    code: "BL40",
    name: "Weizhong",
    commonName: "Milieu du pli poplité",
    meridian: "Vessie",
    category: "cabinet",
    location: "Centre du pli derrière le genou.",
    stimulation: "Pression mesurée, mobilisation douce de la chaîne postérieure.",
    duration: "30 à 60 secondes.",
    precautions: "Prudence varices, phlébite suspectée, douleur poplitée ou gonflement.",
    indications: ["lombalgie", "douleur postérieure", "chaleur du sang"]
  },
  {
    id: "gb30",
    code: "GB30",
    name: "Huantiao",
    commonName: "Saut de la ceinture",
    meridian: "Vésicule Biliaire",
    category: "cabinet",
    location: "Région fessière, zone profonde entre sacrum et grand trochanter.",
    stimulation: "Pression Tuina large et progressive, jamais brutale.",
    duration: "Selon tolérance, par séquences courtes.",
    precautions: "Adapter fortement en cas de sciatique aiguë, grossesse ou douleur neurologique.",
    indications: ["lombalgie", "sciatique", "hanche"]
  },
  {
    id: "kd3",
    code: "KD3",
    name: "Taixi",
    commonName: "Grand torrent",
    meridian: "Rein",
    category: "cabinet",
    location: "Creux entre malléole interne et tendon d'Achille.",
    stimulation: "Tonification douce, pression stable.",
    duration: "45 à 90 secondes.",
    precautions: "Éviter si douleur locale, inflammation ou blessure de cheville.",
    indications: ["vide du rein", "lombes", "yin", "fatigue"]
  },
  {
    id: "cv6",
    code: "CV6",
    name: "Qihai",
    commonName: "Mer du Qi",
    meridian: "Ren Mai",
    category: "cabinet",
    location: "Ligne médiane, environ 1,5 cun sous l'ombilic.",
    stimulation: "Chaleur ou pression très douce en tonification.",
    duration: "30 à 90 secondes.",
    precautions: "Prudence grossesse, douleur abdominale aiguë ou pathologie abdominale connue.",
    indications: ["vide de qi", "fatigue", "froid", "centre"]
  },
  {
    id: "du20",
    code: "DU20",
    name: "Baihui",
    commonName: "Cent réunions",
    meridian: "Du Mai",
    category: "cabinet",
    location: "Sommet du crâne, sur la ligne médiane.",
    stimulation: "Pression très légère, intention de tonification ou clarification selon cas.",
    duration: "30 à 60 secondes.",
    precautions: "Prudence hypertension non contrôlée, vertiges, céphalée intense.",
    indications: ["fatigue", "prolapsus", "clarté mentale", "yang"]
  },
  {
    id: "gb34",
    code: "GB34",
    name: "Yanglingquan",
    commonName: "Source de la colline yang",
    meridian: "Vésicule Biliaire",
    category: "cabinet",
    location: "Sous et en avant de la tête de la fibula.",
    stimulation: "Harmonisation ou dispersion douce des tensions tendino-musculaires.",
    duration: "45 à 90 secondes.",
    precautions: "Éviter en cas de traumatisme local ou douleur nerveuse vive.",
    indications: ["tendons", "stagnation foie-vb", "hypochondres", "raideur"]
  },
  {
    id: "cv4",
    code: "CV4",
    name: "Guanyuan",
    commonName: "Barrière de l'origine",
    meridian: "Ren Mai",
    category: "cabinet",
    location: "Ligne médiane, environ 3 cun sous l'ombilic.",
    stimulation: "Tonification douce, chaleur indirecte selon indication professionnelle.",
    duration: "30 à 90 secondes.",
    precautions: "Prudence grossesse, douleur abdominale, infection ou suspicion chirurgicale.",
    indications: ["vide de yin", "vide du rein", "essence", "fatigue"]
  },
  {
    id: "kd6",
    code: "KD6",
    name: "Zhaohai",
    commonName: "Mer lumineuse",
    meridian: "Rein",
    category: "cabinet",
    location: "Sous la malléole interne, dans une petite dépression.",
    stimulation: "Tonification douce du yin, pression stable et calme.",
    duration: "45 à 90 secondes.",
    precautions: "Éviter en cas de blessure ou inflammation locale.",
    indications: ["vide de yin", "gorge sèche", "insomnie", "chaleur vide"]
  }
];

export const learningMode: LearningEntry[] = [
  {
    id: "tete",
    name: "Tête",
    type: "zone",
    shortDescription: "Tensions du front, des tempes ou de l'arrière du crâne.",
    icon: "head",
    pointIds: ["li4", "gb20", "yintang", "lv3"]
  },
  {
    id: "nuque",
    name: "Nuque",
    type: "zone",
    shortDescription: "Raideur de la base du crâne ou haut du cou.",
    icon: "neck",
    pointIds: ["gb20", "li4", "yintang"]
  },
  {
    id: "digestion",
    name: "Ventre / digestion",
    type: "zone",
    shortDescription: "Digestion lente, ballonnements ou nausée légère.",
    icon: "digestion",
    pointIds: ["cv12", "st36", "pc6", "sp6"]
  },
  {
    id: "stress",
    name: "Stress / anxiété",
    type: "symptome",
    shortDescription: "Agitation, tension interne ou besoin de recentrage.",
    icon: "stress",
    pointIds: ["pc6", "ht7", "yintang", "lv3"]
  },
  {
    id: "sommeil",
    name: "Sommeil",
    type: "symptome",
    shortDescription: "Rituel doux pour apaiser le shen avant le coucher.",
    icon: "sleep",
    pointIds: ["ht7", "pc6", "yintang", "sp6", "kd1"]
  },
  {
    id: "fatigue",
    name: "Fatigue",
    type: "symptome",
    shortDescription: "Sensation de baisse d'énergie ou récupération lente.",
    icon: "back",
    pointIds: ["st36", "cv12", "sp6", "kd1"]
  },
  {
    id: "lombaires",
    name: "Lombaires",
    type: "zone",
    shortDescription: "Tensions légères du bas du dos, hors douleur aiguë.",
    icon: "lower-back",
    pointIds: ["kd1", "st36", "lv3"]
  },
  {
    id: "mains",
    name: "Mains",
    type: "zone",
    shortDescription: "Tensions après gestes répétitifs ou travail sur écran.",
    icon: "hands",
    pointIds: ["li4", "pc6"]
  }
];

export const protocols: Protocol[] = [
  {
    id: "cephalee-tension",
    title: "Céphalée tension / stress",
    context: "Tension fronto-temporale ou occipitale, nuque serrée, surmenage.",
    objective: "Libérer la tête, détendre la nuque, calmer le shen.",
    technique: "Harmonisation",
    mainPointIds: ["li4", "gb20", "taiyang", "yintang"],
    secondaryPointIds: ["lv3"],
    associations: ["Respiration lente", "Travail doux trapèzes / sous-occipital"],
    precautions: "Orienter si céphalée inhabituelle, brutale, neurologique ou persistante."
  },
  {
    id: "insomnie",
    title: "Insomnie",
    context: "Endormissement difficile, agitation mentale, réveils nocturnes.",
    objective: "Calmer le shen et soutenir le yin si nécessaire.",
    technique: "Harmonisation",
    mainPointIds: ["ht7", "pc6", "yintang", "sp6"],
    secondaryPointIds: ["kd1"],
    associations: ["Routine du soir", "Respiration basse", "Ancrage plantaire"],
    precautions: "SP6 à éviter pendant la grossesse. Adapter si anxiété sévère ou traitement sédatif."
  },
  {
    id: "stress-anxiete",
    title: "Stress / anxiété",
    context: "Oppression, agitation, soupirs, tensions liées au Foie ou au Coeur.",
    objective: "Harmoniser Coeur-Foie, ouvrir la poitrine, apaiser.",
    technique: "Harmonisation",
    mainPointIds: ["pc6", "ht7", "yintang", "lv3"],
    secondaryPointIds: ["li4"],
    associations: ["Ancrage KD1", "Mobilisation douce diaphragme"],
    precautions: "Orienter si attaque de panique répétée, douleur thoracique ou idées noires."
  },
  {
    id: "digestion-lente",
    title: "Digestion lente / ballonnements",
    context: "Lourdeur post-prandiale, ballonnements, nausée légère.",
    objective: "Harmoniser Estomac-Rate, faire descendre le Qi rebelle.",
    technique: "Tonification",
    mainPointIds: ["cv12", "st36", "sp6", "pc6"],
    secondaryPointIds: ["lv3"],
    associations: ["Chaleur douce sur le centre", "Conseils repas simples"],
    precautions: "Orienter si douleur abdominale aiguë, fièvre, vomissements persistants ou amaigrissement."
  },
  {
    id: "lombalgie",
    title: "Lombalgie",
    context: "Bas du dos douloureux, raideur, terrain Rein ou chaîne postérieure.",
    objective: "Détendre la zone lombaire, soutenir le Rein selon terrain.",
    technique: "Harmonisation",
    mainPointIds: ["bl23", "bl40", "gb30", "kd3"],
    secondaryPointIds: ["st36"],
    associations: ["Tuina lombaire doux", "Mobilisation hanche", "Chaleur si froid"],
    precautions: "Orienter si traumatisme, douleur irradiée sévère, déficit neurologique ou fièvre."
  },
  {
    id: "fatigue-vide-qi",
    title: "Fatigue / vide de Qi",
    context: "Fatigue chronique légère, voix faible, récupération lente.",
    objective: "Tonifier Qi, soutenir Rate-Estomac et relancer l'axe central.",
    technique: "Tonification",
    mainPointIds: ["st36", "cv6", "sp6", "du20"],
    secondaryPointIds: ["cv12"],
    associations: ["Respiration basse", "Chaleur douce", "Hygiène de récupération"],
    precautions: "Orienter si fatigue brutale, inexpliquée, fièvre, perte de poids ou dyspnée."
  },
  {
    id: "stagnation-qi-foie",
    title: "Stagnation du Qi du Foie",
    context: "Soupirs, irritabilité, oppression, tensions latérales.",
    objective: "Faire circuler le Qi, détendre Foie-VB, ouvrir la poitrine.",
    technique: "Dispersion",
    mainPointIds: ["lv3", "li4", "gb34", "pc6"],
    secondaryPointIds: ["yintang"],
    associations: ["Étirements doux des flancs", "Expiration longue"],
    precautions: "LI4 à éviter pendant la grossesse. Adapter si épuisement ou vide marqué."
  },
  {
    id: "vide-qi-rate-estomac",
    title: "Vide de Qi Rate / Estomac",
    context: "Ballonnements, selles molles, fatigue post-prandiale, manque d'appétit.",
    objective: "Tonifier Rate-Estomac et soutenir la transformation.",
    technique: "Tonification",
    mainPointIds: ["st36", "sp6", "cv12", "cv6"],
    secondaryPointIds: ["pc6"],
    associations: ["Chaleur douce", "Régularité alimentaire"],
    precautions: "SP6 à éviter pendant grossesse. Prudence douleur abdominale atypique."
  },
  {
    id: "vide-yin-rein",
    title: "Vide de Yin du Rein",
    context: "Chaleur vide, sécheresse, lombes faibles, sommeil léger.",
    objective: "Nourrir Yin du Rein, calmer chaleur vide et ancrer.",
    technique: "Tonification",
    mainPointIds: ["kd3", "sp6", "cv4", "kd6"],
    secondaryPointIds: ["kd1"],
    associations: ["Rythme de repos", "Travail calme et non chauffant"],
    precautions: "SP6 à éviter pendant grossesse. Éviter toute stimulation trop dispersante."
  },
  {
    id: "montee-yang-foie",
    title: "Montée du Yang du Foie",
    context: "Céphalée temporale, irritabilité, tension nuque, rougeur du visage.",
    objective: "Faire descendre le Yang, libérer la tête et calmer le Foie.",
    technique: "Dispersion",
    mainPointIds: ["lv3", "gb20", "taiyang", "li4"],
    secondaryPointIds: ["yintang", "kd1"],
    associations: ["Ancrage plantaire", "Expiration longue", "Calme sensoriel"],
    precautions: "Contrôler contexte tensionnel. Orienter si céphalée brutale ou signes neurologiques."
  }
];

export const syndromes: Syndrome[] = [
  {
    id: "stagnation-qi-foie",
    title: "Stagnation du Qi du Foie",
    signs: ["soupirs", "irritabilité", "oppression thoracique", "tensions des flancs"],
    objective: "Faire circuler le Qi et détendre l'axe Foie-Vésicule Biliaire.",
    strategy: "Associer dispersion douce, respiration et ouverture du diaphragme.",
    mainPointIds: ["lv3", "li4", "gb34"],
    secondaryPointIds: ["pc6", "yintang"],
    associations: ["Stress / anxiété", "Céphalée tension", "Cycle menstruel tendu"],
    technique: "Dispersion",
    precautions: "Ne pas disperser fortement un patient épuisé. LI4 prudent en grossesse."
  },
  {
    id: "vide-qi-rate",
    title: "Vide de Qi Rate / Estomac",
    signs: ["fatigue", "ballonnements", "selles molles", "lourdeur post-prandiale"],
    objective: "Tonifier le Qi du centre et soutenir la transformation des liquides.",
    strategy: "Renforcer ST36, SP6, CV12 et CV6 avec chaleur douce si froid.",
    mainPointIds: ["st36", "sp6", "cv12", "cv6"],
    secondaryPointIds: ["pc6"],
    associations: ["Digestion lente", "Fatigue / vide de Qi"],
    technique: "Tonification",
    precautions: "SP6 à éviter pendant la grossesse. Écarter troubles digestifs alarmants."
  },
  {
    id: "vide-yin-rein",
    title: "Vide de Yin du Rein",
    signs: ["chaleur des cinq coeurs", "sueurs nocturnes", "lombes faibles", "sommeil léger"],
    objective: "Nourrir le Yin, ancrer et calmer chaleur vide.",
    strategy: "Tonification douce, rythme lent, éviter stimulation chaude excessive.",
    mainPointIds: ["kd3", "kd6", "sp6", "cv4"],
    secondaryPointIds: ["kd1", "ht7"],
    associations: ["Insomnie", "Fatigue profonde", "Chaleur vide"],
    technique: "Tonification",
    precautions: "Adapter aux traitements et au terrain. SP6 prudent en grossesse."
  },
  {
    id: "montee-yang-foie",
    title: "Montée du Yang du Foie",
    signs: ["céphalée temporale", "vertiges", "nuque tendue", "irritabilité"],
    objective: "Abaisser le Yang, libérer la tête et calmer le Vent interne léger.",
    strategy: "Disperser LV3/GB20, calmer Taiyang/Yintang, ancrer avec KD1 si besoin.",
    mainPointIds: ["lv3", "gb20", "taiyang"],
    secondaryPointIds: ["li4", "kd1"],
    associations: ["Céphalée tension", "Stress", "Hygiène sensorielle"],
    technique: "Dispersion",
    precautions: "Orienter en cas de signes neurologiques, hypertension sévère ou céphalée explosive."
  }
];

export const meridians: Meridian[] = [
  {
    id: "foie",
    name: "Foie",
    element: "Bois",
    pathway: "Pied, face interne de la jambe, organes génitaux, flancs, poitrine, gorge, yeux.",
    keySigns: ["stagnation", "irritabilité", "tensions latérales", "céphalées temporales"],
    mainPointIds: ["lv3", "gb34"],
    usefulCombinations: ["LV3 + LI4 pour faire circuler", "LV3 + PC6 pour oppression et stress"],
    technique: "Harmonisation",
    precautions: "Évaluer vide sous-jacent avant dispersion appuyée."
  },
  {
    id: "rate-estomac",
    name: "Rate / Estomac",
    element: "Terre",
    pathway: "Axe digestif, abdomen, membres inférieurs, soutien du Qi et des liquides.",
    keySigns: ["fatigue", "ballonnements", "lourdeur", "digestion lente"],
    mainPointIds: ["st36", "sp6", "cv12"],
    usefulCombinations: ["ST36 + CV12 pour harmoniser l'Estomac", "ST36 + CV6 pour tonifier le Qi"],
    technique: "Tonification",
    precautions: "SP6 prudent en grossesse. Rester doux sur abdomen douloureux."
  },
  {
    id: "rein",
    name: "Rein",
    element: "Eau",
    pathway: "Plante du pied, face interne de la jambe, lombes, axe profond et ancrage.",
    keySigns: ["lombes faibles", "fatigue profonde", "peur", "signes de yin ou yang du Rein"],
    mainPointIds: ["kd1", "kd3", "kd6"],
    usefulCombinations: ["KD3 + SP6 pour nourrir le Yin", "KD1 + Yintang pour ancrer et calmer"],
    technique: "Tonification",
    precautions: "Adapter chez patients âgés, neuropathies ou perte de sensibilité plantaire."
  },
  {
    id: "coeur-maitre-coeur",
    name: "Coeur / Maître Coeur",
    element: "Feu",
    pathway: "Thorax, bras, poignets, relation au shen et à l'ouverture de la poitrine.",
    keySigns: ["anxiété", "palpitations", "oppression", "insomnie"],
    mainPointIds: ["ht7", "pc6"],
    usefulCombinations: ["HT7 + PC6 pour calmer le shen", "PC6 + CV12 pour nausée et anxiété"],
    technique: "Harmonisation",
    precautions: "Orienter en cas de douleur thoracique, malaise, dyspnée ou palpitations sévères."
  },
  {
    id: "vessie-du-mai",
    name: "Vessie / Du Mai",
    element: "Eau / axe postérieur",
    pathway: "Chaîne postérieure, dos, nuque, crâne, axe vertébral.",
    keySigns: ["lombalgie", "raideur dorsale", "nuque tendue", "fatigue de l'axe"],
    mainPointIds: ["bl23", "bl40", "du20"],
    usefulCombinations: ["BL23 + KD3 pour lombes/Rein", "DU20 + ST36 pour relever le Qi"],
    technique: "Harmonisation",
    precautions: "Évaluer drapeaux rouges lombaires et signes neurologiques."
  }
];

export function getPointById(id: string) {
  return points.find((point) => point.id === id);
}

export function getPointsByIds(ids: string[]) {
  return ids.map((id) => getPointById(id)).filter((point): point is AcupressurePoint => Boolean(point));
}
