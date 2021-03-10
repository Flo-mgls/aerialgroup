# Aerialgroup
**Frontend de l'exercice de recrutement par AerialGroup**

***Pour tester l'app:***
```
npm install
npm run serve
```
***Principales dépendances et technos:***

* Vue.js: v2.6.11
* Bootstrap: v5.0.0
* Splide: v0.3.5 -> Carrousel
* Axios: v0.21.1

***Fonctionnalités:***

* Page Accueil affichant les produits
* Menu "panier" de la barre de navigation permettant de le visualiser même en dehors de la page Panier
* Page Produit permettant d'afficher toutes les infos d'un produit
* Page Panier montrant les produits ajoutés, leur prix à l'unité, leur quantité, et leur coût total

***Remarques et axes d'améliorations:***

* J'ai préféré utilisé Bootstrap pour ne pas perdre trop de temps sur le design, de plus c'est toujours un plaisir de s'en servir.
* J'ai up le fichier JSON sur mon serveur personnel ce qui m'a permis d'aller le récupérer directement avec Axios.
* Concernant la partie backend sur Laravel je donne des précisions directement en mail.
* Enfin comme principales améliorations et avec un peu plus de temps:
  * Lorsque l'on ajoute un produit dans le panier ou si on le vide, si l'on est sur la vue Product ou Cart il faut actualiser la page pour que le panier se mette à jour, ceci est mon plus grand regret mais je dois finir et l'envoyer.
  * Rendre le code encore plus propre avec par exemple l'utilisation de Mixin.
  * Améliorer le design

***J'ai beaucoup aimé travailler sur ce projet et je vous souhaite une bonne lecture de mon code***
