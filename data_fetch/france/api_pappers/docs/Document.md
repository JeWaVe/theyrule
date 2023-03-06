# OpenapiClient::Document

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **type** | **String** | Type de document | [optional] |
| **date_depot** | **Date** | Date de dépôt du document | [optional] |
| **mentions** | **Array&lt;String&gt;** | Mentions de la recherche dans le document. | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::Document.new(
  type: acte,
  date_depot: Tue Aug 04 02:00:00 CEST 2020,
  mentions: null
)
```

