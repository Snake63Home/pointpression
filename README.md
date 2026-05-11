# PointPression

PointPression est un MVP d'application web statique en français autour de l'acupression et de la médecine traditionnelle chinoise. L'utilisateur choisit une zone douloureuse ou un besoin, puis l'application affiche des points d'acupression associés avec des explications simples, des durées conseillées et des précautions.

L'application ne contient aucun backend, aucune authentification, aucune base de données distante et aucun appel API. Toutes les données sont stockées localement dans `data/acupressureData.ts`.

## Fonctionnalités

- Page d'accueil avec avertissement médical visible.
- Sélection de zone par cartes cliquables.
- Résultats avec 2 à 4 points d'acupression par zone.
- Fiches détaillées pour LI4 / Hegu, GB20 / Fengchi, PC6 / Neiguan, ST36 / Zusanli, SP6 / Sanyinjiao, LV3 / Taichong, Yintang et KD1 / Yongquan.
- Interface responsive, mobile first, douce et rassurante.
- Architecture simple à étendre pour ajouter de nouvelles zones ou de nouveaux points.

## Stack technique

- Next.js avec App Router
- TypeScript
- Tailwind CSS
- Données locales TypeScript
- Compatible Vercel

## Installation

```bash
npm install
```

## Lancement en local

```bash
npm run dev
```

Ouvrez ensuite l'adresse affichée dans le terminal, généralement :

```text
http://localhost:3000
```

## Build de production

```bash
npm run build
```

La commande vérifie que le projet compile correctement pour un déploiement.

## Pousser sur GitHub

Depuis le dossier du projet :

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/votre-utilisateur/pointpression.git
git push -u origin main
```

Remplacez l'URL par celle de votre dépôt GitHub.

## Déployer sur Vercel

1. Créez un dépôt GitHub avec le code du projet.
2. Connectez-vous à Vercel.
3. Cliquez sur `Add New Project`.
4. Importez le dépôt GitHub.
5. Gardez les réglages par défaut de Next.js.
6. Lancez le déploiement.

Vercel détecte automatiquement Next.js. La commande de build attendue est :

```bash
npm run build
```

## Modifier les données

Les points et les zones sont dans :

```text
data/acupressureData.ts
```

Pour ajouter une zone, ajoutez une entrée dans `painZones` et référencez les identifiants des points dans `pointIds`. Pour ajouter un point, ajoutez une entrée dans `acupressurePoints`.

## Avertissement médical

Cette application propose des informations de bien-être inspirées de l'acupression. Elle ne permet pas d'établir un diagnostic médical. En cas de douleur intense, persistante, inhabituelle, grossesse, problème de santé connu ou traitement médical, consultez un professionnel de santé.
