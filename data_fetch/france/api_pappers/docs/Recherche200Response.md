# OpenapiClient::Recherche200Response

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **resultats** | [**Array&lt;Recherche200ResponseResultatsInner&gt;**](Recherche200ResponseResultatsInner.md) | Liste des entreprises qui correspondent à la recherche. | [optional] |
| **total** | **Integer** | Nombre d&#39;entreprises qui correspondent à la recherche. | [optional] |
| **page** | **Integer** | Page actuelle. | [optional] |
| **curseur_suivant** | **String** | Présent uniquement en cas d&#39;utilisation du paramètre &#x60;curseur&#x60;. Contient le curseur courant à envoyer en paramètre &#x60;curseur&#x60; de la requête suivantes. | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::Recherche200Response.new(
  resultats: null,
  total: 100,
  page: 1,
  curseur_suivant: QxNRrqKiBFDQq54SpHsrw8r5Z3yWZMDAAzcvwywX
)
```

