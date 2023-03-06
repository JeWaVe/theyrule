# OpenapiClient::ComptesAnnuels200ResponseValueInnerSectionsInner

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **libelle** | **String** | Libellé de la section. | [optional] |
| **liasses** | [**Array&lt;ComptesAnnuels200ResponseValueInnerSectionsInnerLiassesInner&gt;**](ComptesAnnuels200ResponseValueInnerSectionsInnerLiassesInner.md) | Liste des liasses fiscales de la section. | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::ComptesAnnuels200ResponseValueInnerSectionsInner.new(
  libelle: Actif (bilan),
  liasses: null
)
```

