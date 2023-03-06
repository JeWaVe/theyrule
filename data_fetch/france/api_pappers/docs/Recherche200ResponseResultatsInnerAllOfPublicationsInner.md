# OpenapiClient::Recherche200ResponseResultatsInnerAllOfPublicationsInner

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **type** | **String** | Type de publication | [optional] |
| **date** | **Date** | Date de publication, au format AAAA-MM-JJ. | [optional] |
| **contenu** | **String** | Contenu de la publication, avec les mentions correspondant à la recherche encerclée par une balise HTML &lt;em&gt;. | [optional] |
| **mentions** | **Array&lt;String&gt;** | Mentions de la recherche dans la publication. | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::Recherche200ResponseResultatsInnerAllOfPublicationsInner.new(
  type: acte,
  date: Tue Aug 04 02:00:00 CEST 2020,
  contenu: null,
  mentions: null
)
```

