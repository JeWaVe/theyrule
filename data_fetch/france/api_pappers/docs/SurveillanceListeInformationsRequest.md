# OpenapiClient::SurveillanceListeInformationsRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **notifications** | **Array&lt;String&gt;** | Tableau d&#39;identifiant de notifications | [optional] |
| **informations** | **String** | Information à rajouter sur les notifications | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::SurveillanceListeInformationsRequest.new(
  notifications: null,
  informations: Information quelconque
)
```

