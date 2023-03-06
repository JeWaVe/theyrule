# OpenapiClient::RechercheDirigeants200Response

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **resultats** | [**Array&lt;RechercheDirigeants200ResponseResultatsInner&gt;**](RechercheDirigeants200ResponseResultatsInner.md) | Liste des dirigeants qui correspondent à la recherche. | [optional] |
| **total** | **Integer** | Nombre de dirigeants qui correspondent à la recherche. | [optional] |
| **page** | **Integer** | Page actuelle. | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::RechercheDirigeants200Response.new(
  resultats: null,
  total: 100,
  page: 1
)
```

