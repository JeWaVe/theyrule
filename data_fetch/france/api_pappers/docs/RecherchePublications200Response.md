# OpenapiClient::RecherchePublications200Response

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **resultats** | [**Array&lt;RecherchePublications200ResponseResultatsInner&gt;**](RecherchePublications200ResponseResultatsInner.md) | Liste des publications qui correspondent à la recherche. | [optional] |
| **total** | **Integer** | Nombre de publications qui correspondent à la recherche. | [optional] |
| **page** | **Integer** | Page actuelle. | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::RecherchePublications200Response.new(
  resultats: null,
  total: 100,
  page: 1
)
```

