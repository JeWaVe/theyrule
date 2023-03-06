# OpenapiClient::RepresentantRecherche

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **qualite** | **String** | Qualité du représentant. | [optional] |
| **personne_morale** | **Boolean** | Vrai si le représentant est une personne morale, faux si personne physique. | [optional] |
| **date_prise_de_poste** | **String** | Date de prise de poste du représentant. | [optional] |
| **sexe** | **String** | Sexe supposé du dirigeant si personne physique. F pour féminin, M pour masculin. Ce champ est estimé à partir du prénom du dirigeant. | [optional] |
| **nom** | **String** | Nom du représentant. | [optional] |
| **prenom** | **String** | Prénoms du représentant. | [optional] |
| **prenom_usuel** | **String** | Prénom usuel du représentant. | [optional] |
| **nom_complet** | **String** | Nom complet du représentant. | [optional] |
| **date_de_naissance** | **String** | Date de naissance du représentant. | [optional] |
| **date_de_naissance_formate** | **String** | Date de naissance formatée du représentant. | [optional] |
| **age** | **Integer** | Age du représentant. | [optional] |
| **nationalite** | **String** | Nationalité du représentant. | [optional] |
| **code_nationalite** | **String** | Code nationalité du représentant | [optional] |
| **ville_de_naissance** | **String** | Ville de naissance du représentant. | [optional] |
| **pays_de_naissance** | **String** | Pays de naissance du représentant. | [optional] |
| **code_pays_de_naissance** | **String** | Code du pays de naissance du représentant. | [optional] |
| **adresse_ligne_1** | **String** | Première ligne de l&#39;adresse du représentant. | [optional] |
| **adresse_ligne_2** | **String** | Deuxième ligne de l&#39;adresse du représentant. | [optional] |
| **adresse_ligne_3** | **String** | Troisième ligne de l&#39;adresse du représentant. | [optional] |
| **code_postal** | **String** | Code postal du représentant. | [optional] |
| **ville** | **String** | Ville du représentant. | [optional] |
| **pays** | **String** | Pays du représentant. | [optional] |
| **code_pays** | **String** | Code du pays du représentant | [optional] |
| **actuel** | **Boolean** | Vaut vrai si le représentant est toujours à son poste. | [optional] |
| **date_depart_de_poste** | **String** | Date de départ de poste dans le cas où le représentant n&#39;est plus un représentant actuel, au format AAAA-MM-JJ. | [optional] |
| **forme_juridique** | **String** | Forme juridique du représentant dans le cas d&#39;une personne morale. | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::RepresentantRecherche.new(
  qualite: Gérant,
  personne_morale: false,
  date_prise_de_poste: 2017-08-03,
  sexe: M,
  nom: Yi,
  prenom: Kenneth H.,
  prenom_usuel: Kenneth,
  nom_complet: Kenneth H. Yi,
  date_de_naissance: 1970-01-06,
  date_de_naissance_formate: 06/01/1970,
  age: 50,
  nationalite: Américaine (Etats Unis),
  code_nationalite: US,
  ville_de_naissance: Séoul,
  pays_de_naissance: COREE DU SUD,
  code_pays_de_naissance: KR,
  adresse_ligne_1: 1600 Amphitheatre Parkway Mountain View CA 94043,
  adresse_ligne_2: null,
  adresse_ligne_3: null,
  code_postal: null,
  ville: null,
  pays: Etats-Unis,
  code_pays: US,
  actuel: null,
  date_depart_de_poste: null,
  forme_juridique: null
)
```

