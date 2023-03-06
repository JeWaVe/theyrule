# OpenapiClient::ComptesAnnuels200ResponseValueInnerSectionsInnerLiassesInner

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **code** | **String** | Code de la liasse. | [optional] |
| **libelle** | **String** | Libellé de la liasse. | [optional] |
| **colonnes** | [**Array&lt;ComptesAnnuels200ResponseValueInnerSectionsInnerLiassesInnerColonnesInner&gt;**](ComptesAnnuels200ResponseValueInnerSectionsInnerLiassesInnerColonnesInner.md) | Colonnes de la liasse. | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::ComptesAnnuels200ResponseValueInnerSectionsInnerLiassesInner.new(
  code: AN,
  libelle: Terrains,
  colonnes: null
)
```

