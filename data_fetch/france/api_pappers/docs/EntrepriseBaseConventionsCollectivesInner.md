# OpenapiClient::EntrepriseBaseConventionsCollectivesInner

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **nom** | **String** | Nom de la convention collective. | [optional] |
| **idcc** | **Integer** | Code IDCC de l&#39;entreprise. | [optional] |
| **confirmee** | **Boolean** | Si confirmée, l&#39;information est issue de la DSN de l&#39;entreprise et fournie par le ministère du Travail. Si non confirmée, ce n&#39;est qu&#39;une estimation à partir du code NAF de l&#39;entreprise. | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::EntrepriseBaseConventionsCollectivesInner.new(
  nom: Convention collective nationale applicable au personnel des bureaux d&#39;études techniques des cabinets d&#39;ingénieurs-conseils et des sociétés de conseils(BET SYNTEC),
  idcc: 1486,
  confirmee: null
)
```

