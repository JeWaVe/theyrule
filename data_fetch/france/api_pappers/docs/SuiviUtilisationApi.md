# OpenapiClient::SuiviUtilisationApi

All URIs are relative to *https://api.pappers.fr/v2*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**suivi_jetons**](SuiviUtilisationApi.md#suivi_jetons) | **GET** /suivi-jetons | Récupère le suivi d&#39;utilisation des jetons. |


## suivi_jetons

> <SuiviJetons200Response> suivi_jetons(api_token)

Récupère le suivi d'utilisation des jetons.

Vous devez fournir la clé d'utilisation de l'API.

### Examples

```ruby
require 'time'
require 'openapi_client'

api_instance = OpenapiClient::SuiviUtilisationApi.new
api_token = 'votre_clé_ici' # String | Clé d'utilisation de l'API

begin
  # Récupère le suivi d'utilisation des jetons.
  result = api_instance.suivi_jetons(api_token)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SuiviUtilisationApi->suivi_jetons: #{e}"
end
```

#### Using the suivi_jetons_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<SuiviJetons200Response>, Integer, Hash)> suivi_jetons_with_http_info(api_token)

```ruby
begin
  # Récupère le suivi d'utilisation des jetons.
  data, status_code, headers = api_instance.suivi_jetons_with_http_info(api_token)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <SuiviJetons200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling SuiviUtilisationApi->suivi_jetons_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **api_token** | **String** | Clé d&#39;utilisation de l&#39;API |  |

### Return type

[**SuiviJetons200Response**](SuiviJetons200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

