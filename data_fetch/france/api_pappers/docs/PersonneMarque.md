# OpenapiClient::PersonneMarque

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **siren** | **String** | Siren de l&#39;entité, dans le cas d&#39;une personne morale. | [optional] |
| **entite_legale** | **String** | Entité légale. | [optional] |
| **nom** | **String** | Nom de l&#39;entité. | [optional] |
| **batiment** | **String** | Bâtiment de l&#39;entité. | [optional] |
| **rue** | **String** | Rue de l&#39;entité. | [optional] |
| **ville** | **String** | Ville de l&#39;entité. | [optional] |
| **boite_postale** | **String** | Boîte postale de l&#39;entité. | [optional] |
| **code_postal** | **String** | Code postal de l&#39;entité. | [optional] |
| **code_pays** | **String** | Code pays de l&#39;entité. | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::PersonneMarque.new(
  siren: null,
  entite_legale: null,
  nom: null,
  batiment: null,
  rue: null,
  ville: null,
  boite_postale: null,
  code_postal: null,
  code_pays: null
)
```

