# OpenapiClient::EntrepriseFicheAllOfEvenements

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **type** | **String** | Type d&#39;événement. | [optional] |
| **identifiant_evenement** | **String** | Identifiant de l&#39;événement. | [optional] |
| **reference** | **String** | Référence de l&#39;événement. | [optional] |
| **date** | **String** | Date de l&#39;événement, au format AAAA-MM-JJ. | [optional] |
| **numero_bopi** | **String** | Numéro du BOPI dans lequel l&#39;événement a été publié. | [optional] |
| **date_bopi** | **String** | Date de publication du BOPI au format AAAA-MM-JJ. | [optional] |
| **beneficiaire** | **String** | Bénéficiaire associé à l&#39;événement. | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::EntrepriseFicheAllOfEvenements.new(
  type: Publication,
  identifiant_evenement: null,
  reference: null,
  date: 2008-12-04,
  numero_bopi: 2008-12,
  date_bopi: 2008-12-04,
  beneficiaire: null
)
```

