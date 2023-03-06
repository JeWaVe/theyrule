# OpenapiClient::EtablissementFiche

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **siret** | **String** | Numéro siret de l&#39;établissement au format xxxxxxxxxxxxxx. | [optional] |
| **siret_formate** | **String** | Numéro siret de l&#39;établissement au format xxx xxx xxx xxxxx. | [optional] |
| **nic** | **String** | Numéro NIC de l&#39;établissement. | [optional] |
| **code_postal** | **String** | Code postal de l&#39;établissement. | [optional] |
| **ville** | **String** | Ville de l&#39;établissement. | [optional] |
| **pays** | **String** | Pays de l&#39;établissement | [optional] |
| **code_pays** | **String** | Code du pays de l&#39;établissement | [optional] |
| **latitude** | **Float** | Latitude de l&#39;établissement. | [optional] |
| **longitude** | **Float** | Longitude de l&#39;établissement. | [optional] |
| **etablissement_cesse** | **Boolean** | Vrai si l&#39;établissement est cessé, faux si il est en activité. | [optional] |
| **siege** | **Boolean** | Vrai si l&#39;établissement est siège, faux s&#39;il ne l&#39;est pas. | [optional] |
| **etablissement_employeur** | **Boolean** | Si vrai, l&#39;établissement a au moins un employé. | [optional] |
| **effectif** | **String** | Tranche d&#39;effectif de l&#39;établissement. | [optional] |
| **effectif_min** | **Integer** | Effectif minimal de l&#39;établissement. | [optional] |
| **effectif_max** | **Integer** | Effectif maximal de l&#39;établissement. | [optional] |
| **tranche_effectif** | **String** | Tranche d&#39;effectif de l&#39;établissement, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen#:~:text&#x3D;Cette%20variable%20correspond%20%C3%A0%20la,effectif%20salari%C3%A9%20de%20l&#39;entreprise.). | [optional] |
| **annee_effectif** | **Integer** | Année correspondante à la tranche d&#39;effectif de l&#39;établissement. | [optional] |
| **code_naf** | **String** | Code NAF de l&#39;établissement. | [optional] |
| **libelle_code_naf** | **String** | Libellé du code NAF de l&#39;établissement. | [optional] |
| **date_de_creation** | **String** |  | [optional] |
| **numero_voie** | **Integer** | Numéro de voie de l&#39;établissement. | [optional] |
| **indice_repetition** | **String** | Indice de répétition de l&#39;établissement. | [optional] |
| **type_voie** | **String** | Type de voie de l&#39;établissement. | [optional] |
| **libelle_voie** | **String** | Libellé de la voie de l&#39;établissement. | [optional] |
| **complement_adresse** | **String** | Complément d&#39;adresse de l&#39;établissement. | [optional] |
| **adresse_ligne_1** | **String** | Première ligne de l&#39;adresse de l&#39;établissement. Correspond à l&#39;ensemble des données numero_voie, indice_repetition, type_voie et libelle_voie. | [optional] |
| **adresse_ligne_2** | **String** | Seconde ligne de l&#39;adresse de l&#39;établissement. Est égal à complement_adresse | [optional] |
| **date_cessation** | **String** | Date de fermeture de l&#39;établissement | [optional] |
| **enseigne** | **String** | Enseigne de l&#39;établissement | [optional] |
| **nom_commercial** | **String** | Nom commercial de l&#39;établissement | [optional] |
| **domiciliation** | [**EtablissementFicheDomiciliation**](EtablissementFicheDomiciliation.md) |  | [optional] |
| **predecesseurs** | [**Array&lt;LienSuccession&gt;**](LienSuccession.md) | Liste des prédécesseurs de l&#39;établissement. | [optional] |
| **successeurs** | [**Array&lt;LienSuccession&gt;**](LienSuccession.md) | Liste des successeurs de l&#39;établissement. | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::EtablissementFiche.new(
  siret: 44306184100047,
  siret_formate: 443 061 841 00047,
  nic: 00047,
  code_postal: 75009,
  ville: PARIS 9,
  pays: France,
  code_pays: FR,
  latitude: 48.876947,
  longitude: 2.329981,
  etablissement_cesse: null,
  siege: null,
  etablissement_employeur: null,
  effectif: Entre 500 et 999 salariés,
  effectif_min: 500,
  effectif_max: 999,
  tranche_effectif: 41,
  annee_effectif: 2017,
  code_naf: 70.10Z,
  libelle_code_naf: Activités des sièges sociaux,
  date_de_creation: 2011-05-12T22:00:00.000Z,
  numero_voie: 8,
  indice_repetition: null,
  type_voie: RUE,
  libelle_voie: DE LONDRES,
  complement_adresse: null,
  adresse_ligne_1: 8 RUE DE LONDRES,
  adresse_ligne_2: null,
  date_cessation: 2014-05-12,
  enseigne: FROOGLE,
  nom_commercial: Froogle,
  domiciliation: null,
  predecesseurs: null,
  successeurs: null
)
```

