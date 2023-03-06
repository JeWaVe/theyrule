# OpenapiClient::ComptesAnnuelsApi

All URIs are relative to *https://api.pappers.fr/v2*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**comptes_annuels**](ComptesAnnuelsApi.md#comptes_annuels) | **GET** /entreprise/comptes | Récupère les comptes annuels publiés d&#39;une entreprise. |


## comptes_annuels

> Hash&lt;String, Array&lt;ComptesAnnuels200ResponseValueInner&gt;&gt; comptes_annuels(api_token, opts)

Récupère les comptes annuels publiés d'une entreprise.

Vous devez fournir le SIREN de l'entreprise pour laquelle vous souhaitez obtenir les comptes annuels.

### Examples

```ruby
require 'time'
require 'openapi_client'

api_instance = OpenapiClient::ComptesAnnuelsApi.new
api_token = 'votre_clé_ici' # String | Clé d'utilisation de l'API
opts = {
  siren: '443061841', # String | SIREN de l'entreprise
  annee: '2016,2017,2018' # String | Année de cloture des comptes souhaités. Il est possible d'indiquer plusieurs années en les séparant par des virgules. Si le paramètre n'est pas fourni, toutes les années disponibles seront retournées.
}

begin
  # Récupère les comptes annuels publiés d'une entreprise.
  result = api_instance.comptes_annuels(api_token, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling ComptesAnnuelsApi->comptes_annuels: #{e}"
end
```

#### Using the comptes_annuels_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(Hash&lt;String, Array&lt;ComptesAnnuels200ResponseValueInner&gt;&gt;, Integer, Hash)> comptes_annuels_with_http_info(api_token, opts)

```ruby
begin
  # Récupère les comptes annuels publiés d'une entreprise.
  data, status_code, headers = api_instance.comptes_annuels_with_http_info(api_token, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Hash&lt;String, Array&lt;ComptesAnnuels200ResponseValueInner&gt;&gt;
rescue OpenapiClient::ApiError => e
  puts "Error when calling ComptesAnnuelsApi->comptes_annuels_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **api_token** | **String** | Clé d&#39;utilisation de l&#39;API |  |
| **siren** | **String** | SIREN de l&#39;entreprise | [optional] |
| **annee** | **String** | Année de cloture des comptes souhaités. Il est possible d&#39;indiquer plusieurs années en les séparant par des virgules. Si le paramètre n&#39;est pas fourni, toutes les années disponibles seront retournées. | [optional] |

### Return type

**Hash&lt;String, Array&lt;ComptesAnnuels200ResponseValueInner&gt;&gt;**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

