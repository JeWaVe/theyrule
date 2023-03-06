# OpenapiClient::SuiviJetons200Response

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **jetons_abonnement** | **Float** | Le nombre de jetons mensuels initiaux de votre abonnement. | [optional] |
| **jetons_abonnement_utilises** | **Float** | Le nombre de jetons mensuels de votre abonnement que vous avez utilisés | [optional] |
| **jetons_pay_as_you_go_restants** | **Float** | Le nombre de jetons pay as you go qu&#39;il vous reste. | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::SuiviJetons200Response.new(
  jetons_abonnement: 10000,
  jetons_abonnement_utilises: 650,
  jetons_pay_as_you_go_restants: 0
)
```

