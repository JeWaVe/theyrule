# OpenapiClient::AssociationAdresseGestionnaire

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **gestionnaire** | **String** | Nom du gestionnaire de l&#39;association. | [optional] |
| **code_postal** | **String** | Code postal du gestionnaire. | [optional] |
| **ville** | **String** | Ville du gestionnaire. | [optional] |
| **distribution** | **String** | Complément de distribution du gestionnaire. | [optional] |
| **adresse_ligne** | **String** | Adresse complète du gestionnaire. | [optional] |
| **complement_adresse** | **String** | Complément de l&#39;adresse du gestionnaire. | [optional] |
| **indication** | **String** | Indication supplémentaire à l&#39;adresse du gestionnaire. | [optional] |
| **pays** | **String** | Pays du gestionnaire. | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::AssociationAdresseGestionnaire.new(
  gestionnaire: null,
  code_postal: 14075,
  ville: CAEN,
  distribution: null,
  adresse_ligne: 115TER  BOULEVARD VANIER  - LA PIERRE,
  complement_adresse: null,
  indication: null,
  pays: FRANCE
)
```

