# OpenapiClient::Suggestions200ResponseResultatsSirenInner

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **mention** | **String** | SIREN de l&#39;entreprise, avec le texte recherché encerclé d&#39;une balise HTML &#x60;&lt;em&gt;&#x60;. | [optional] |
| **siren** | **String** | Le numéro SIREN de l&#39;entreprise au format xxxxxxxxx. | [optional] |
| **siren_formate** | **String** | Le numéro SIREN de l&#39;entreprise au format xxx xxx xxx. | [optional] |
| **nom_entreprise** | **String** | Le nom de l&#39;entreprise. Il est égal à sigle + dénomination en cas de personne morale, ou à nom + prénom en cas de personne physique. | [optional] |
| **personne_morale** | **Boolean** | Vrai en cas de personne morale, faux en cas de personne physique. | [optional] |
| **denomination** | **String** | Dénomination de l&#39;entreprise si personne morale. | [optional] |
| **nom** | **String** | Nom si personne physique. | [optional] |
| **prenom** | **String** | Prénom si personne physique. | [optional] |
| **sexe** | **String** | Sexe si personne physique. F pour féminin, M pour masculin. | [optional] |
| **code_naf** | **String** | Code NAF de l&#39;entreprise. | [optional] |
| **libelle_code_naf** | **String** | Libellé du code NAF de l&#39;entreprise. | [optional] |
| **domaine_activite** | **String** | Domaine d&#39;activité de l&#39;entreprise. | [optional] |
| **conventions_collectives** | [**Array&lt;EntrepriseBaseConventionsCollectivesInner&gt;**](EntrepriseBaseConventionsCollectivesInner.md) | Liste des conventions collectives de l&#39;entreprise. | [optional] |
| **date_creation** | **Date** | Date de création de l&#39;entreprise au format AAAA-MM-JJ. | [optional] |
| **date_creation_formate** | **String** | Date de création de l&#39;entreprise au format JJ/MM/AAAA. | [optional] |
| **entreprise_cessee** | **Boolean** | Si vrai, l&#39;entreprise n&#39;est plus en activité. Sinon, elle est toujours en activité. | [optional] |
| **date_cessation** | **String** | Date de cessation de l&#39;entreprise au format AAAA-MM-JJ. | [optional] |
| **entreprise_employeuse** | **Boolean** | Si vrai, l&#39;entreprise a au moins un employé. | [optional] |
| **categorie_juridique** | **String** | Catégorie juridique de l&#39;entreprise, selon la [nomenclature Insee](https://www.insee.fr/fr/information/2028129).   **Note** : Le code correspond à celui de l&#39;INSEE, à l&#39;exception des SASU qui auront comme code 5720 et les EURL qui auront comme code 5498. | [optional] |
| **forme_juridique** | **String** | Forme juridique de l&#39;entreprise. | [optional] |
| **effectif** | **String** | Tranche d&#39;effectif de l&#39;entreprise. | [optional] |
| **effectif_min** | **Integer** | Effectif minimal de l&#39;entreprise. | [optional] |
| **effectif_max** | **Integer** | Effectif maximal de l&#39;entreprise. | [optional] |
| **tranche_effectif** | **String** | Tranche d&#39;effectif de l&#39;entreprise, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen#:~:text&#x3D;Cette%20variable%20correspond%20%C3%A0%20la,effectif%20salari%C3%A9%20de%20l&#39;entreprise.). | [optional] |
| **annee_effectif** | **Integer** | Année de validité des variables effectif, effectif_min et effectif_max. | [optional] |
| **capital** | **Float** | Capital de l&#39;entreprise. | [optional] |
| **statut_rcs** | **String** | Statut de l&#39;entreprise au RCS | [optional] |
| **siege** | [**EtablissementRecherche**](EtablissementRecherche.md) |  | [optional] |
| **villes** | **Array&lt;String&gt;** | Liste des villes où l&#39;entreprise a au moins un établissement. | [optional] |
| **chiffre_affaires** | **Integer** | Chiffre d&#39;affaires de l&#39;entreprise. | [optional] |
| **resultat** | **Integer** | Résultat de l&#39;entreprise. | [optional] |
| **effectifs_finances** | **Integer** | Effectif de l&#39;entreprise. | [optional] |
| **annee_finances** | **String** | Année de correspondance des variables financières (chiffre_affaires, resultat, effectifs_finances). | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::Suggestions200ResponseResultatsSirenInner.new(
  mention: null,
  siren: 443061841,
  siren_formate: 443 061 841,
  nom_entreprise: GOOGLE FRANCE,
  personne_morale: null,
  denomination: GOOGLE FRANCE,
  nom: null,
  prenom: null,
  sexe: null,
  code_naf: 70.10Z,
  libelle_code_naf: Activités des sièges sociaux,
  domaine_activite: Activités des sièges sociaux ; conseil de gestion,
  conventions_collectives: null,
  date_creation: Thu May 16 02:00:00 CEST 2002,
  date_creation_formate: 16/05/2002,
  entreprise_cessee: null,
  date_cessation: 2002-05-16,
  entreprise_employeuse: null,
  categorie_juridique: 5499,
  forme_juridique: Société à responsabilité limitée (SARL),
  effectif: Entre 500 et 999 salariés,
  effectif_min: 500,
  effectif_max: 999,
  tranche_effectif: 41,
  annee_effectif: 2017,
  capital: 464884017,
  statut_rcs: Inscrit,
  siege: null,
  villes: null,
  chiffre_affaires: 411016329,
  resultat: 29327087,
  effectifs_finances: 723,
  annee_finances: 2018
)
```

