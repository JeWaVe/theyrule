# OpenapiClient::BodaccProcedureCollectiveAllOf

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **famille** | **String** | Famille de la procédure collective | [optional] |
| **nature** | **String** | Nature de la procédure collective | [optional] |
| **complement_jugement** | **String** | Complément sur le jugement de procédure collective | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::BodaccProcedureCollectiveAllOf.new(
  famille: Jugement de clôture,
  nature: Jugement de clôture pour insuffisance d&#39;actif,
  complement_jugement: Jugement prononçant la clôture de la procédure de liquidation judiciaire pour insuffisance d&#39;actif.
)
```

