# OpenapiClient::LienSuccession

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **siret** | **String** | Numéro siret de l&#39;établissement au format xxxxxxxxxxxxxx. | [optional] |
| **date** | **String** | Date à laquelle la succession a eu lieu. | [optional] |
| **transfert_siege** | **Boolean** | Vrai si le lien de succession concerne l&#39;établissement siège, faux sinon. | [optional] |
| **continuite_economique** | **Boolean** | Vrai s&#39;il y a [continuité économique](https://www.sirene.fr/sirene/public/variable/continuiteEconomique), faux sinon. | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::LienSuccession.new(
  siret: 44306184100047,
  date: 1993-20-02,
  transfert_siege: false,
  continuite_economique: true
)
```

