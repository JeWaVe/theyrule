# OpenapiClient::EtablissementRecherche

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **siret** | **String** | Numéro siret de l&#39;établissement au format xxxxxxxxxxxxxx. | [optional] |
| **siret_formate** | **String** | Numéro siret de l&#39;établissement au format xxx xxx xxx xxxxx. | [optional] |
| **nic** | **String** | Numéro NIC de l&#39;établissement. | [optional] |
| **numero_voie** | **Integer** | Numéro de voie de l&#39;établissement. | [optional] |
| **indice_repetition** | **String** | Indice de répétition de l&#39;établissement. | [optional] |
| **type_voie** | **String** | Type de voie de l&#39;établissement. | [optional] |
| **libelle_voie** | **String** | Libellé de la voie de l&#39;établissement. | [optional] |
| **complement_adresse** | **String** | Complément d&#39;adresse de l&#39;établissement. | [optional] |
| **adresse_ligne_1** | **String** | Première ligne de l&#39;adresse de l&#39;établissement. Correspond à l&#39;ensemble des données numero_voie, indice_repetition, type_voie et libelle_voie. | [optional] |
| **adresse_ligne_2** | **String** | Seconde ligne de l&#39;adresse de l&#39;établissement. Est égal à complement_adresse | [optional] |
| **code_postal** | **String** | Code postal de l&#39;établissement. | [optional] |
| **ville** | **String** | Ville de l&#39;établissement. | [optional] |
| **latitude** | **Float** | Latitude de l&#39;établissement. | [optional] |
| **longitude** | **Float** | Longitude de l&#39;établissement. | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::EtablissementRecherche.new(
  siret: 44306184100047,
  siret_formate: 443 061 841 00047,
  nic: 00047,
  numero_voie: 8,
  indice_repetition: null,
  type_voie: RUE,
  libelle_voie: DE LONDRES,
  complement_adresse: null,
  adresse_ligne_1: 8 RUE DE LONDRES,
  adresse_ligne_2: null,
  code_postal: 75009,
  ville: PARIS 9,
  latitude: 48.876947,
  longitude: 2.329981
)
```

