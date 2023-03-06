# OpenapiClient::SurveillanceApi

All URIs are relative to *https://api.pappers.fr/v2*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**surveillance_dirigeant**](SurveillanceApi.md#surveillance_dirigeant) | **POST** /liste/ | Ajoute un (ou plusieurs) dirigeant(s) à une liste de dirigeants. |
| [**surveillance_entreprise**](SurveillanceApi.md#surveillance_entreprise) | **POST** /liste | Ajoute une (ou plusieurs) entreprise(s) à une liste d&#39;entreprises. |
| [**surveillance_liste_informations**](SurveillanceApi.md#surveillance_liste_informations) | **POST** /liste-informations | Ajoute des informations à une (ou plusieurs) notification(s). |
| [**surveillance_notifications_delete**](SurveillanceApi.md#surveillance_notifications_delete) | **DELETE** /liste/ | Supprime une (ou plusieurs) notification(s) d&#39;une liste. |


## surveillance_dirigeant

> <SurveillanceDirigeant200Response> surveillance_dirigeant(api_token, id_liste, surveillance_dirigeant_request_inner)

Ajoute un (ou plusieurs) dirigeant(s) à une liste de dirigeants.

Vous devez fournir la clé d'utilisation de l'API ainsi que l'identifiant de votre liste. Les informations à renseigner sont différentes selon le type de personne à ajouter (morale ou physique)

### Examples

```ruby
require 'time'
require 'openapi_client'

api_instance = OpenapiClient::SurveillanceApi.new
api_token = 'votre_clé_ici' # String | Clé d'utilisation de l'API
id_liste = 'votre_identifiant_ici' # String | Identifiant unique de votre liste de surveillance de dirigeants
surveillance_dirigeant_request_inner = [OpenapiClient::SurveillanceDirigeantRequestInner.new({siren: 'siren_example'})] # Array<SurveillanceDirigeantRequestInner> | 

begin
  # Ajoute un (ou plusieurs) dirigeant(s) à une liste de dirigeants.
  result = api_instance.surveillance_dirigeant(api_token, id_liste, surveillance_dirigeant_request_inner)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SurveillanceApi->surveillance_dirigeant: #{e}"
end
```

#### Using the surveillance_dirigeant_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<SurveillanceDirigeant200Response>, Integer, Hash)> surveillance_dirigeant_with_http_info(api_token, id_liste, surveillance_dirigeant_request_inner)

```ruby
begin
  # Ajoute un (ou plusieurs) dirigeant(s) à une liste de dirigeants.
  data, status_code, headers = api_instance.surveillance_dirigeant_with_http_info(api_token, id_liste, surveillance_dirigeant_request_inner)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <SurveillanceDirigeant200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling SurveillanceApi->surveillance_dirigeant_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **api_token** | **String** | Clé d&#39;utilisation de l&#39;API |  |
| **id_liste** | **String** | Identifiant unique de votre liste de surveillance de dirigeants |  |
| **surveillance_dirigeant_request_inner** | [**Array&lt;SurveillanceDirigeantRequestInner&gt;**](SurveillanceDirigeantRequestInner.md) |  |  |

### Return type

[**SurveillanceDirigeant200Response**](SurveillanceDirigeant200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## surveillance_entreprise

> <SurveillanceEntreprise200Response> surveillance_entreprise(api_token, id_liste, surveillance_entreprise_request_inner)

Ajoute une (ou plusieurs) entreprise(s) à une liste d'entreprises.

Vous devez fournir la clé d'utilisation de l'API ainsi que l'identifiant de votre liste.

### Examples

```ruby
require 'time'
require 'openapi_client'

api_instance = OpenapiClient::SurveillanceApi.new
api_token = 'votre_clé_ici' # String | Clé d'utilisation de l'API
id_liste = 'votre_identifiant_ici' # String | Identifiant unique de votre liste de surveillance d'entreprises
surveillance_entreprise_request_inner = [OpenapiClient::SurveillanceEntrepriseRequestInner.new({siren: '443061841'})] # Array<SurveillanceEntrepriseRequestInner> | 

begin
  # Ajoute une (ou plusieurs) entreprise(s) à une liste d'entreprises.
  result = api_instance.surveillance_entreprise(api_token, id_liste, surveillance_entreprise_request_inner)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SurveillanceApi->surveillance_entreprise: #{e}"
end
```

#### Using the surveillance_entreprise_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<SurveillanceEntreprise200Response>, Integer, Hash)> surveillance_entreprise_with_http_info(api_token, id_liste, surveillance_entreprise_request_inner)

```ruby
begin
  # Ajoute une (ou plusieurs) entreprise(s) à une liste d'entreprises.
  data, status_code, headers = api_instance.surveillance_entreprise_with_http_info(api_token, id_liste, surveillance_entreprise_request_inner)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <SurveillanceEntreprise200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling SurveillanceApi->surveillance_entreprise_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **api_token** | **String** | Clé d&#39;utilisation de l&#39;API |  |
| **id_liste** | **String** | Identifiant unique de votre liste de surveillance d&#39;entreprises |  |
| **surveillance_entreprise_request_inner** | [**Array&lt;SurveillanceEntrepriseRequestInner&gt;**](SurveillanceEntrepriseRequestInner.md) |  |  |

### Return type

[**SurveillanceEntreprise200Response**](SurveillanceEntreprise200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## surveillance_liste_informations

> surveillance_liste_informations(api_token, id_liste, surveillance_liste_informations_request)

Ajoute des informations à une (ou plusieurs) notification(s).

Vous devez fournir la clé d'utilisation de l'API ainsi que l'identifiant de votre liste.

### Examples

```ruby
require 'time'
require 'openapi_client'

api_instance = OpenapiClient::SurveillanceApi.new
api_token = 'votre_clé_ici' # String | Clé d'utilisation de l'API
id_liste = 'votre_identifiant_ici' # String | Identifiant unique de votre liste de surveillance d'entreprises
surveillance_liste_informations_request = OpenapiClient::SurveillanceListeInformationsRequest.new # SurveillanceListeInformationsRequest | 

begin
  # Ajoute des informations à une (ou plusieurs) notification(s).
  api_instance.surveillance_liste_informations(api_token, id_liste, surveillance_liste_informations_request)
rescue OpenapiClient::ApiError => e
  puts "Error when calling SurveillanceApi->surveillance_liste_informations: #{e}"
end
```

#### Using the surveillance_liste_informations_with_http_info variant

This returns an Array which contains the response data (`nil` in this case), status code and headers.

> <Array(nil, Integer, Hash)> surveillance_liste_informations_with_http_info(api_token, id_liste, surveillance_liste_informations_request)

```ruby
begin
  # Ajoute des informations à une (ou plusieurs) notification(s).
  data, status_code, headers = api_instance.surveillance_liste_informations_with_http_info(api_token, id_liste, surveillance_liste_informations_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => nil
rescue OpenapiClient::ApiError => e
  puts "Error when calling SurveillanceApi->surveillance_liste_informations_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **api_token** | **String** | Clé d&#39;utilisation de l&#39;API |  |
| **id_liste** | **String** | Identifiant unique de votre liste de surveillance d&#39;entreprises |  |
| **surveillance_liste_informations_request** | [**SurveillanceListeInformationsRequest**](SurveillanceListeInformationsRequest.md) |  |  |

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## surveillance_notifications_delete

> <SurveillanceNotificationsDelete200Response> surveillance_notifications_delete(api_token, id_liste, opts)

Supprime une (ou plusieurs) notification(s) d'une liste.

Vous devez fournir la clé d'utilisation de l'API ainsi que l'identifiant de votre liste.

### Examples

```ruby
require 'time'
require 'openapi_client'

api_instance = OpenapiClient::SurveillanceApi.new
api_token = 'votre_clé_ici' # String | Clé d'utilisation de l'API
id_liste = 'votre_identifiant_ici' # String | Identifiant unique de votre liste de surveillance
opts = {
  siren: '443061841,950370973', # String | Liste des sirens des notifications à supprimer, séparés par une virgule
  id: 'ecfca3e5fb1ce07bb3fdfe8760a28df5aa617ed4951b7f61,a67b9de66189ba98eb4aede09f4b2b565b0f18fe694da7bc', # String | Liste des ids des notifications à supprimer, séparés par une virgule
  supprimer_totalite: true # Boolean | Suppression de toutes les notifications de la liste
}

begin
  # Supprime une (ou plusieurs) notification(s) d'une liste.
  result = api_instance.surveillance_notifications_delete(api_token, id_liste, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling SurveillanceApi->surveillance_notifications_delete: #{e}"
end
```

#### Using the surveillance_notifications_delete_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<SurveillanceNotificationsDelete200Response>, Integer, Hash)> surveillance_notifications_delete_with_http_info(api_token, id_liste, opts)

```ruby
begin
  # Supprime une (ou plusieurs) notification(s) d'une liste.
  data, status_code, headers = api_instance.surveillance_notifications_delete_with_http_info(api_token, id_liste, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <SurveillanceNotificationsDelete200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling SurveillanceApi->surveillance_notifications_delete_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **api_token** | **String** | Clé d&#39;utilisation de l&#39;API |  |
| **id_liste** | **String** | Identifiant unique de votre liste de surveillance |  |
| **siren** | **String** | Liste des sirens des notifications à supprimer, séparés par une virgule | [optional] |
| **id** | **String** | Liste des ids des notifications à supprimer, séparés par une virgule | [optional] |
| **supprimer_totalite** | **Boolean** | Suppression de toutes les notifications de la liste | [optional] |

### Return type

[**SurveillanceNotificationsDelete200Response**](SurveillanceNotificationsDelete200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

