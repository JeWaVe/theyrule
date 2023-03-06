# OpenapiClient::FicheAssociationApi

All URIs are relative to *https://api.pappers.fr/v2*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**association**](FicheAssociationApi.md#association) | **GET** /association | Récupère l&#39;ensemble des informations disponibles sur une association. |


## association

> <Association> association(api_token, opts)

Récupère l'ensemble des informations disponibles sur une association.

Vous devez fournir soit l'identifiant de l'association, soit le SIREN, soit le SIRET.

### Examples

```ruby
require 'time'
require 'openapi_client'

api_instance = OpenapiClient::FicheAssociationApi.new
api_token = 'votre_clé_ici' # String | Clé d'utilisation de l'API
opts = {
  id_association: 'W142005389', # String | Identifiant de l'association
  siret: '95037097300014', # String | SIRET de l'association
  siren: '950370973' # String | SIREN de l'association
}

begin
  # Récupère l'ensemble des informations disponibles sur une association.
  result = api_instance.association(api_token, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling FicheAssociationApi->association: #{e}"
end
```

#### Using the association_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Association>, Integer, Hash)> association_with_http_info(api_token, opts)

```ruby
begin
  # Récupère l'ensemble des informations disponibles sur une association.
  data, status_code, headers = api_instance.association_with_http_info(api_token, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Association>
rescue OpenapiClient::ApiError => e
  puts "Error when calling FicheAssociationApi->association_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **api_token** | **String** | Clé d&#39;utilisation de l&#39;API |  |
| **id_association** | **String** | Identifiant de l&#39;association | [optional] |
| **siret** | **String** | SIRET de l&#39;association | [optional] |
| **siren** | **String** | SIREN de l&#39;association | [optional] |

### Return type

[**Association**](Association.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

