# FirstApp

Ce projet a été généré avec Angular CLI version **19.0.5**.

## Auteur
**Mohamed Lakssir**  
Classe : **2ACI Info**

---

## Table des Matières
- [Serveur de Développement](#serveur-de-développement)
- [Génération de Code](#génération-de-code)
- [Compilation](#compilation)
- [Tests Unitaires](#tests-unitaires)
- [Tests End-to-End](#tests-end-to-end)
- [Linting](#linting)
- [Compatibilité des Versions](#compatibilité-des-versions)
- [Structure du Projet](#structure-du-projet)
- [Captures d’Écran](#captures-d’écran)
- [Notes](#notes)

---

## Serveur de Développement

Pour démarrer le serveur de développement local, exécutez la commande suivante :

```bash
ng serve
```

Une fois le serveur lancé, ouvrez votre navigateur et accédez à [http://localhost:4200/](http://localhost:4200/). L’application se rechargera automatiquement lorsque vous modifiez un fichier source.

---

## Génération de Code

Angular CLI offre des outils puissants pour générer du code. Voici quelques commandes courantes :

- **Générer un composant** :
  ```bash
  ng generate component <nom-du-composant>
  ```
- **Générer un service** :
  ```bash
  ng generate service <nom-du-service>
  ```
- **Générer un module** :
  ```bash
  ng generate module <nom-du-module>
  ```

Pour voir toutes les options de génération, utilisez :
```bash
ng generate --help
```

---

## Compilation

Pour compiler le projet pour la production, utilisez :

```bash
ng build
```

Les fichiers compilés seront placés dans le répertoire `dist/`. Pour spécifier un environnement ou une configuration particulière :

```bash
ng build --configuration=<nom-de-la-configuration>
```

---

## Tests Unitaires

Pour exécuter les tests unitaires avec [Karma Test Runner](https://karma-runner.github.io), utilisez :

```bash
ng test
```

Pour surveiller les modifications des fichiers pendant les tests :
```bash
ng test --watch
```

---

## Tests End-to-End

Pour effectuer des tests end-to-end, utilisez :

```bash
ng e2e
```

Si un framework e2e n'est pas configuré, vous pouvez utiliser [Cypress](https://www.cypress.io/) ou [Protractor](https://www.protractortest.org/).

---

## Linting

Pour vérifier la qualité du code et sa cohérence, exécutez :

```bash
ng lint
```

Pour corriger automatiquement les erreurs de linting :
```bash
ng lint --fix
```

---

## Compatibilité des Versions

Assurez-vous que Node.js est compatible. Angular CLI **19.0.5** est optimisé pour les versions LTS de Node.js. Vérifiez votre version actuelle de Node.js avec :

```bash
node -v
```

Pour mettre à jour Node.js à la dernière version LTS :
```bash
nvm install --lts
nvm use --lts
```

---

## Structure du Projet

Après les modifications apportées, voici la structure actuelle du projet :

```
.
├── README.md
├── angular.json
├── package-lock.json
├── package.json
├── src
│   ├── app
│   │   ├── accounts
│   │   │   ├── accounts.component.css
│   │   │   ├── accounts.component.html
│   │   │   ├── accounts.component.spec.ts
│   │   │   └── accounts.component.ts
│   │   ├── app-routing.module.ts
│   │   ├── app.component.css
│   │   ├── app.component.html
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── customers
│   │   │   ├── customers.component.css
│   │   │   ├── customers.component.html
│   │   │   ├── customers.component.spec.ts
│   │   │   └── customers.component.ts
│   │   ├── customer-accounts
│   │   │   ├── customer-accounts.component.css
│   │   │   ├── customer-accounts.component.html
│   │   │   ├── customer-accounts.component.spec.ts
│   │   │   └── customer-accounts.component.ts
│   │   ├── home
│   │   │   ├── home.component.css
│   │   │   ├── home.component.html
│   │   │   ├── home.component.spec.ts
│   │   │   └── home.component.ts
│   │   ├── model
│   │   │   ├── account.model.ts
│   │   │   └── customer.model.ts
│   │   ├── navbar
│   │   │   ├── navbar.component.css
│   │   │   ├── navbar.component.html
│   │   │   ├── navbar.component.spec.ts
│   │   │   └── navbar.component.ts
│   │   ├── new-customer
│   │   │   ├── new-customer.component.css
│   │   │   ├── new-customer.component.html
│   │   │   ├── new-customer.component.spec.ts
│   │   │   └── new-customer.component.ts
│   │   └── services
│   │       ├── accounts.service.ts
│   │       └── customer.service.ts
│   ├── environments
│   │   ├── environment.prod.ts
│   │   └── environment.ts
│   ├── index.html
│   ├── main.ts
│   └── styles.css
└── tsconfig.json
```

---

## Captures d’Écran

Voici quelques captures d'écran de l'application :

- **Composant Home** :
  ![Composant Home](ScreenShot/HomeComponent.png)

- **Composant Products** :
  ![Composant Products](ScreenShot/ProductsComponent.png)

- **Composant Customers** :
  ![Composant Customers](ScreenShot/CustomersComponent.png)

---

## Notes
- Toutes les modifications ont été effectuées en suivant les consignes du professeur.
- Les nouveaux fichiers et dossiers ajoutés incluent :
  - `customer-accounts`
  - `model`
  - `new-customer`
  - `services`
  - `environments`

En cas de problèmes, référez-vous à la [documentation officielle Angular](https://angular.io/docs).

