# OpenapiClient::RechercheBeneficiaires200Response

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **resultats** | [**Array&lt;RechercheBeneficiaires200ResponseResultatsInner&gt;**](RechercheBeneficiaires200ResponseResultatsInner.md) | Liste des bénéficiaires effectifs qui correspondent à la recherche. | [optional] |
| **total** | **Integer** | Nombre de bénéficiaires effectifs qui correspondent à la recherche. | [optional] |
| **page** | **Integer** | Page actuelle. | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::RechercheBeneficiaires200Response.new(
  resultats: null,
  total: 100,
  page: 1
)
```

