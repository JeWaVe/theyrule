# OpenapiClient::RechercheDocuments200Response

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **resultats** | [**Array&lt;RechercheDocuments200ResponseResultatsInner&gt;**](RechercheDocuments200ResponseResultatsInner.md) | Liste des documents qui correspondent à la recherche. | [optional] |
| **total** | **Integer** | Nombre de documents qui correspondent à la recherche. | [optional] |
| **page** | **Integer** | Page actuelle. | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::RechercheDocuments200Response.new(
  resultats: null,
  total: 100,
  page: 1
)
```

