export type AcupressurePoint = {
  id: string;
  commonName: string;
  traditionalName: string;
  location: string;
  pressureMethod: string;
  duration: string;
  precautions: string;
};

export type PainZone = {
  id: string;
  name: string;
  shortDescription: string;
  icon: string;
  pointIds: string[];
};

export const medicalSafetyNotice =
  "Cette application propose des informations de bien-être inspirées de l'acupression. Elle ne permet pas d'établir un diagnostic médical. En cas de douleur intense, persistante, inhabituelle, grossesse, problème de santé connu ou traitement médical, consultez un professionnel de santé.";

export const acupressurePoints: AcupressurePoint[] = [
  {
    id: "li4",
    commonName: "Vallée de la main",
    traditionalName: "LI4 / Hegu",
    location: "Sur le dos de la main, dans le creux charnu entre le pouce et l'index.",
    pressureMethod:
      "Pincez doucement la zone avec le pouce et l'index de l'autre main, puis effectuez une pression stable ou de petits cercles.",
    duration: "30 à 60 secondes par main, en respirant lentement.",
    precautions:
      "À éviter pendant la grossesse. Ne pas appuyer sur une zone blessée, enflammée ou douloureuse anormalement."
  },
  {
    id: "gb20",
    commonName: "Portes du vent",
    traditionalName: "GB20 / Fengchi",
    location:
      "À la base du crâne, dans les deux creux situés de chaque côté de la nuque, sous l'os occipital.",
    pressureMethod:
      "Placez les pouces dans les creux, inclinez légèrement la tête vers l'avant et massez en cercles lents.",
    duration: "45 à 90 secondes, sans forcer sur la nuque.",
    precautions:
      "Éviter les pressions fortes. Arrêter si cela provoque vertige, douleur vive ou inconfort important."
  },
  {
    id: "pc6",
    commonName: "Passe intérieure",
    traditionalName: "PC6 / Neiguan",
    location:
      "Sur l'intérieur de l'avant-bras, environ trois largeurs de doigt sous le pli du poignet, entre les deux tendons.",
    pressureMethod:
      "Appuyez avec le pouce, maintenez une pression confortable, puis relâchez progressivement.",
    duration: "1 à 2 minutes par poignet.",
    precautions:
      "Ne pas utiliser sur une zone irritée, blessée ou après une chirurgie récente du poignet."
  },
  {
    id: "st36",
    commonName: "Trois lieues de la jambe",
    traditionalName: "ST36 / Zusanli",
    location:
      "Sous le genou, environ quatre largeurs de doigt sous la rotule et légèrement vers l'extérieur du tibia.",
    pressureMethod:
      "Massez avec le pouce ou deux doigts en petits cercles, avec une pression modérée.",
    duration: "1 à 2 minutes par jambe.",
    precautions:
      "Éviter en cas de blessure, inflammation ou douleur inhabituelle du genou ou de la jambe."
  },
  {
    id: "sp6",
    commonName: "Réunion des trois yin",
    traditionalName: "SP6 / Sanyinjiao",
    location:
      "Sur l'intérieur de la jambe, environ quatre largeurs de doigt au-dessus de la malléole interne, près du tibia.",
    pressureMethod:
      "Appuyez doucement avec le pouce et massez lentement, sans chercher une douleur forte.",
    duration: "45 à 90 secondes par jambe.",
    precautions:
      "À éviter pendant la grossesse. Ne pas appuyer en cas de varices douloureuses, blessure ou inflammation."
  },
  {
    id: "lv3",
    commonName: "Grand assaut",
    traditionalName: "LV3 / Taichong",
    location:
      "Sur le dessus du pied, dans le creux entre le gros orteil et le deuxième orteil, en remontant légèrement vers la cheville.",
    pressureMethod:
      "Massez le creux avec le pouce en petits cercles, avec une pression progressive.",
    duration: "1 minute par pied.",
    precautions:
      "Éviter si le pied est blessé, gonflé, inflammé ou très sensible."
  },
  {
    id: "yintang",
    commonName: "Point du calme",
    traditionalName: "Yintang",
    location: "Entre les sourcils, au centre de la zone parfois appelée troisième oeil.",
    pressureMethod:
      "Posez un doigt au centre, massez très doucement en cercles ou maintenez une pression légère.",
    duration: "30 à 90 secondes, avec une respiration calme.",
    precautions:
      "La pression doit rester très douce. Arrêter en cas de maux de tête aggravés ou d'inconfort."
  },
  {
    id: "kd1",
    commonName: "Source jaillissante",
    traditionalName: "KD1 / Yongquan",
    location:
      "Sur la plante du pied, dans le creux situé environ au premier tiers avant du pied, sous les coussinets.",
    pressureMethod:
      "Appuyez avec le pouce ou une balle souple, puis massez lentement la plante du pied.",
    duration: "1 à 2 minutes par pied.",
    precautions:
      "Éviter en cas de plaie, douleur vive, neuropathie importante ou perte de sensibilité du pied."
  }
];

export const painZones: PainZone[] = [
  {
    id: "tete",
    name: "Tête",
    shortDescription:
      "Pour les tensions légères autour du front, des tempes ou de l'arrière du crâne.",
    icon: "head",
    pointIds: ["li4", "gb20", "yintang", "lv3"]
  },
  {
    id: "nuque",
    name: "Nuque",
    shortDescription:
      "Pour les raideurs et tensions situées à la base du crâne ou dans le haut du cou.",
    icon: "neck",
    pointIds: ["gb20", "li4", "yintang"]
  },
  {
    id: "epaules",
    name: "Épaules",
    shortDescription:
      "Pour accompagner les tensions liées à la posture, au stress ou à une fatigue musculaire légère.",
    icon: "shoulders",
    pointIds: ["li4", "gb20", "lv3"]
  },
  {
    id: "dos",
    name: "Dos",
    shortDescription:
      "Pour les inconforts diffus du dos liés à la fatigue ou aux tensions quotidiennes.",
    icon: "back",
    pointIds: ["st36", "lv3", "kd1"]
  },
  {
    id: "lombaires",
    name: "Lombaires",
    shortDescription:
      "Pour les tensions légères du bas du dos, sans douleur aiguë ni traumatisme.",
    icon: "lower-back",
    pointIds: ["kd1", "st36", "lv3"]
  },
  {
    id: "digestion",
    name: "Ventre / digestion",
    shortDescription:
      "Pour un inconfort digestif léger, une sensation de lourdeur ou de nausée passagère.",
    icon: "digestion",
    pointIds: ["pc6", "st36", "sp6"]
  },
  {
    id: "stress",
    name: "Stress / anxiété",
    shortDescription:
      "Pour favoriser une pause calme lorsque le corps semble tendu ou agité.",
    icon: "stress",
    pointIds: ["yintang", "pc6", "lv3", "kd1"]
  },
  {
    id: "sommeil",
    name: "Sommeil",
    shortDescription:
      "Pour créer un rituel doux avant le coucher et relâcher les tensions de la journée.",
    icon: "sleep",
    pointIds: ["yintang", "kd1", "pc6", "sp6"]
  },
  {
    id: "mains",
    name: "Mains",
    shortDescription:
      "Pour les tensions légères des mains après le travail, les écrans ou les gestes répétitifs.",
    icon: "hands",
    pointIds: ["li4", "pc6"]
  },
  {
    id: "pieds",
    name: "Pieds",
    shortDescription:
      "Pour détendre les pieds fatigués et relancer une sensation d'ancrage.",
    icon: "feet",
    pointIds: ["kd1", "lv3", "st36"]
  }
];

export function getPointById(id: string) {
  return acupressurePoints.find((point) => point.id === id);
}
