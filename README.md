# PointPression V2

PointPression est une application web statique en français destinée à servir d'antisèche professionnelle pour une praticienne en médecine chinoise, acupression, Tuina, acupuncture et diagnostic énergétique MTC.

La V2 ajoute un switch dès l'accueil :

- **Mode Apprentissage** : version simple issue de la V1, avec zones douloureuses, symptômes courants et points essentiels.
- **Mode Cabinet** : vue plus clinique avec protocoles, syndromes MTC et méridiens.

L'application ne contient aucun backend, aucune authentification, aucune base de données distante et aucun appel API. Toutes les données sont stockées localement dans `data/acupressureData.ts`.

## Fonctionnalités

- Switch visible entre Mode Apprentissage et Mode Cabinet.
- Mode Apprentissage avec cartes cliquables, 10 points essentiels maximum, localisation, stimulation, durée et précautions.
- Mode Cabinet avec 3 entrées : Symptômes, Syndromes MTC, Méridiens.
- Protocoles de points combinés : céphalée tension, insomnie, anxiété, digestion lente, lombalgie, vide de Qi, stagnation du Qi du Foie, vide Rate/Estomac, vide de Yin du Rein, montée du Yang du Foie.
- Recherche simple en Mode Cabinet.
- Badges pour points principaux, secondaires et techniques.
- Avertissement professionnel et précautions visibles.
- Interface responsive, mobile first, compatible Vercel.

## Stack technique

- Next.js App Router
- TypeScript
- Tailwind CSS
- Données locales TypeScript

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

Le script utilise `next build --webpack`, ce qui reste compatible Vercel et évite certains blocages Windows/Turbopack en environnement local contraint.

## Pousser sur GitHub

Depuis le dossier du projet :

```bash
git init
git add .
git commit -m "PointPression V2"
git branch -M main
git remote add origin https://github.com/votre-utilisateur/pointpression.git
git push -u origin main
```

Remplacez l'URL par celle de votre dépôt GitHub.

## Déployer sur Vercel

1. Créez ou mettez à jour le dépôt GitHub avec le code du projet.
2. Connectez-vous à Vercel.
3. Cliquez sur `Add New Project`.
4. Importez le dépôt GitHub.
5. Gardez les réglages par défaut de Next.js.
6. Lancez le déploiement.

Vercel détecte automatiquement Next.js. La commande de build attendue est :

```bash
npm run build
```

## Organisation des données

Les données sont centralisées dans :

```text
data/acupressureData.ts
```

Structure principale :

- `points`
- `learningMode`
- `protocols`
- `syndromes`
- `meridians`
- `globalPrecautions`

Pour ajouter un protocole, créez une entrée dans `protocols` et référencez les identifiants des points dans `mainPointIds` et `secondaryPointIds`.

## Avertissement

Cette application est une antisèche de travail destinée à accompagner une pratique professionnelle. Elle ne remplace pas le raisonnement clinique, le diagnostic énergétique complet, ni les précautions propres à chaque patient.
