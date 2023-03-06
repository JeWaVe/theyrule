# OpenapiClient::SuggestionsAutocompleteApi

All URIs are relative to *https://api.pappers.fr/v2*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**suggestions**](SuggestionsAutocompleteApi.md#suggestions) | **GET** /suggestions | Recherche les entreprises qui correspondent à un début de recherche textuelle (type autocomplete). |


## suggestions

> <Suggestions200Response> suggestions(q, opts)

Recherche les entreprises qui correspondent à un début de recherche textuelle (type autocomplete).

Cette route nécessite généralement d'avoir un temps de réponse très faible. Une URL avec un temps de réponse plus faible a été mise en place : `https://suggestions.pappers.fr/v2?q=googl`. D'autre part, afin de permettre une intégration en front-end la plus directe, cette route ne nécessite pas de token d'authentification.

### Examples

```ruby
require 'time'
require 'openapi_client'

api_instance = OpenapiClient::SuggestionsAutocompleteApi.new
q = 'googl' # String | Début de recherche textuelle
opts = {
  longueur: 20, # Integer | Nombre de résultats. Maximum 100. Valeur par défaut : `10`.
  cibles: 'nom_entreprise' # String | Cibles de la recherche, séparées par des virgules. Valeur par défaut : `\"nom_entreprise\"`.
}

begin
  # Recherche les entreprises qui correspondent à un début de recherche textuelle (type autocomplete).
  result = api_instance.suggestions(q, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SuggestionsAutocompleteApi->suggestions: #{e}"
end
```

#### Using the suggestions_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Suggestions200Response>, Integer, Hash)> suggestions_with_http_info(q, opts)

```ruby
begin
  # Recherche les entreprises qui correspondent à un début de recherche textuelle (type autocomplete).
  data, status_code, headers = api_instance.suggestions_with_http_info(q, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Suggestions200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling SuggestionsAutocompleteApi->suggestions_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **q** | **String** | Début de recherche textuelle |  |
| **longueur** | **Integer** | Nombre de résultats. Maximum 100. Valeur par défaut : &#x60;10&#x60;. | [optional] |
| **cibles** | **String** | Cibles de la recherche, séparées par des virgules. Valeur par défaut : &#x60;\&quot;nom_entreprise\&quot;&#x60;. | [optional] |

### Return type

[**Suggestions200Response**](Suggestions200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

