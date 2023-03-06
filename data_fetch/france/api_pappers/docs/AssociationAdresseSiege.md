# OpenapiClient::AssociationAdresseSiege

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **code_postal** | **String** | Code postal du siège social. | [optional] |
| **code_insee** | **String** | Code insee du siège social. | [optional] |
| **ville** | **String** | Ville du siège social. | [optional] |
| **numero_voie** | **String** | Numéro de voie du siège social. | [optional] |
| **indice_repetition** | **String** | Indice de répétition du siège social. | [optional] |
| **type_voie** | **String** | Type de voie du siège social. | [optional] |
| **libelle_voie** | **String** | Libellé de la voie du siège social. | [optional] |
| **complement_adresse** | **String** | Complément de l&#39;adresse du siège social. | [optional] |
| **distribution** | **String** | Complément de distribution du siege social. | [optional] |
| **adresse_ligne_1** | **String** | Adresse complète du siège social. | [optional] |
| **adresse_ligne_2** | **String** | Renseignement supplémentaire à l&#39;adresse du siège social. | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::AssociationAdresseSiege.new(
  code_postal: 14075,
  code_insee: 14118,
  ville: Caen  cedex 05,
  numero_voie: 115ter,
  indice_repetition: null,
  type_voie: BD,
  libelle_voie: Vanier  - La Pierre Heuzé,
  complement_adresse: null,
  distribution: _BP 75156,
  adresse_ligne_1: 115ter BD Vanier  - La Pierre Heuzé,
  adresse_ligne_2: null
)
```

