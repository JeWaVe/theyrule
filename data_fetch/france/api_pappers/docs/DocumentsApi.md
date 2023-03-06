# OpenapiClient::DocumentsApi

All URIs are relative to *https://api.pappers.fr/v2*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**document_avis_situation_insee**](DocumentsApi.md#document_avis_situation_insee) | **GET** /document/avis_situation_insee | Télécharge l&#39;avis de situation INSEE d&#39;une entreprise à partir de son SIREN ou SIRET. |
| [**document_beneficiaires_effectifs**](DocumentsApi.md#document_beneficiaires_effectifs) | **GET** /document/declaration_beneficiaires_effectifs | Télécharge la déclaration des bénéficiaires effectifs d&#39;une entreprise à partir de son SIREN. |
| [**document_extrait_inpi**](DocumentsApi.md#document_extrait_inpi) | **GET** /document/extrait_inpi | Télécharge l&#39;extrait INPI d&#39;une entreprise à partir de son SIREN ou SIRET. |
| [**document_extrait_pappers**](DocumentsApi.md#document_extrait_pappers) | **GET** /document/extrait_pappers | Télécharge l&#39;extrait Pappers d&#39;une entreprise à partir de son SIREN ou SIRET. |
| [**document_status**](DocumentsApi.md#document_status) | **GET** /document/statuts | Télécharge les derniers statuts disponibles d&#39;une entreprise à partir de son SIREN ou SIRET. |
| [**document_telechargement**](DocumentsApi.md#document_telechargement) | **GET** /document/telechargement | Télécharge un document PDF ou XLSX à partir de son token. |


## document_avis_situation_insee

> File document_avis_situation_insee(api_token, opts)

Télécharge l'avis de situation INSEE d'une entreprise à partir de son SIREN ou SIRET.

Vous devez fournir soit le SIREN, soit le SIRET. Le document vous sera envoyé au format PDF.

### Examples

```ruby
require 'time'
require 'openapi_client'

api_instance = OpenapiClient::DocumentsApi.new
api_token = 'votre_clé_ici' # String | Clé d'utilisation de l'API
opts = {
  siren: '443061841', # String | SIREN de l'entreprise
  siret: '44306184100047' # String | SIRET de l'entreprise
}

begin
  # Télécharge l'avis de situation INSEE d'une entreprise à partir de son SIREN ou SIRET.
  result = api_instance.document_avis_situation_insee(api_token, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling DocumentsApi->document_avis_situation_insee: #{e}"
end
```

#### Using the document_avis_situation_insee_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(File, Integer, Hash)> document_avis_situation_insee_with_http_info(api_token, opts)

```ruby
begin
  # Télécharge l'avis de situation INSEE d'une entreprise à partir de son SIREN ou SIRET.
  data, status_code, headers = api_instance.document_avis_situation_insee_with_http_info(api_token, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => File
rescue OpenapiClient::ApiError => e
  puts "Error when calling DocumentsApi->document_avis_situation_insee_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **api_token** | **String** | Clé d&#39;utilisation de l&#39;API |  |
| **siren** | **String** | SIREN de l&#39;entreprise | [optional] |
| **siret** | **String** | SIRET de l&#39;entreprise | [optional] |

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/pdf


## document_beneficiaires_effectifs

> File document_beneficiaires_effectifs(api_token, opts)

Télécharge la déclaration des bénéficiaires effectifs d'une entreprise à partir de son SIREN.

Vous devez fournir le SIREN. Le document vous sera envoyé au format PDF.  Seules les autorités de contrôle (<a rel='noreferrer noopener' target='_blank' href='https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000041578272/'>article R. 561-57 du Code monétaire et financier en dénombre 18</a>) et les personnes assujetties à la lutte contre le blanchiment des capitaux et le financement du terrorisme (<a rel='noreferrer noopener' target='_blank' href='https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000042648575/'>article L. 561-2 du code monétaire et financier</a>) peuvent accéder à ces informations.  Pour pouvoir utiliser cette route veuillez nous contacter au préalable à api@pappers.fr

### Examples

```ruby
require 'time'
require 'openapi_client'

api_instance = OpenapiClient::DocumentsApi.new
api_token = 'votre_clé_ici' # String | Clé d'utilisation de l'API
opts = {
  siren: '443061841' # String | SIREN de l'entreprise
}

begin
  # Télécharge la déclaration des bénéficiaires effectifs d'une entreprise à partir de son SIREN.
  result = api_instance.document_beneficiaires_effectifs(api_token, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling DocumentsApi->document_beneficiaires_effectifs: #{e}"
end
```

#### Using the document_beneficiaires_effectifs_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(File, Integer, Hash)> document_beneficiaires_effectifs_with_http_info(api_token, opts)

```ruby
begin
  # Télécharge la déclaration des bénéficiaires effectifs d'une entreprise à partir de son SIREN.
  data, status_code, headers = api_instance.document_beneficiaires_effectifs_with_http_info(api_token, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => File
rescue OpenapiClient::ApiError => e
  puts "Error when calling DocumentsApi->document_beneficiaires_effectifs_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **api_token** | **String** | Clé d&#39;utilisation de l&#39;API |  |
| **siren** | **String** | SIREN de l&#39;entreprise | [optional] |

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/pdf


## document_extrait_inpi

> File document_extrait_inpi(api_token, opts)

Télécharge l'extrait INPI d'une entreprise à partir de son SIREN ou SIRET.

Vous devez fournir soit le SIREN, soit le SIRET. Le document vous sera envoyé au format PDF.

### Examples

```ruby
require 'time'
require 'openapi_client'

api_instance = OpenapiClient::DocumentsApi.new
api_token = 'votre_clé_ici' # String | Clé d'utilisation de l'API
opts = {
  siren: '443061841', # String | SIREN de l'entreprise
  siret: '44306184100047' # String | SIRET de l'entreprise
}

begin
  # Télécharge l'extrait INPI d'une entreprise à partir de son SIREN ou SIRET.
  result = api_instance.document_extrait_inpi(api_token, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling DocumentsApi->document_extrait_inpi: #{e}"
end
```

#### Using the document_extrait_inpi_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(File, Integer, Hash)> document_extrait_inpi_with_http_info(api_token, opts)

```ruby
begin
  # Télécharge l'extrait INPI d'une entreprise à partir de son SIREN ou SIRET.
  data, status_code, headers = api_instance.document_extrait_inpi_with_http_info(api_token, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => File
rescue OpenapiClient::ApiError => e
  puts "Error when calling DocumentsApi->document_extrait_inpi_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **api_token** | **String** | Clé d&#39;utilisation de l&#39;API |  |
| **siren** | **String** | SIREN de l&#39;entreprise | [optional] |
| **siret** | **String** | SIRET de l&#39;entreprise | [optional] |

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/pdf


## document_extrait_pappers

> File document_extrait_pappers(api_token, opts)

Télécharge l'extrait Pappers d'une entreprise à partir de son SIREN ou SIRET.

Vous devez fournir soit le SIREN, soit le SIRET. Le document vous sera envoyé au format PDF.

### Examples

```ruby
require 'time'
require 'openapi_client'

api_instance = OpenapiClient::DocumentsApi.new
api_token = 'votre_clé_ici' # String | Clé d'utilisation de l'API
opts = {
  siren: '443061841', # String | SIREN de l'entreprise
  siret: '44306184100047' # String | SIRET de l'entreprise
}

begin
  # Télécharge l'extrait Pappers d'une entreprise à partir de son SIREN ou SIRET.
  result = api_instance.document_extrait_pappers(api_token, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling DocumentsApi->document_extrait_pappers: #{e}"
end
```

#### Using the document_extrait_pappers_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(File, Integer, Hash)> document_extrait_pappers_with_http_info(api_token, opts)

```ruby
begin
  # Télécharge l'extrait Pappers d'une entreprise à partir de son SIREN ou SIRET.
  data, status_code, headers = api_instance.document_extrait_pappers_with_http_info(api_token, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => File
rescue OpenapiClient::ApiError => e
  puts "Error when calling DocumentsApi->document_extrait_pappers_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **api_token** | **String** | Clé d&#39;utilisation de l&#39;API |  |
| **siren** | **String** | SIREN de l&#39;entreprise | [optional] |
| **siret** | **String** | SIRET de l&#39;entreprise | [optional] |

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/pdf


## document_status

> File document_status(api_token, opts)

Télécharge les derniers statuts disponibles d'une entreprise à partir de son SIREN ou SIRET.

Vous devez fournir soit le SIREN, soit le SIRET. Le document vous sera envoyé au format PDF.

### Examples

```ruby
require 'time'
require 'openapi_client'

api_instance = OpenapiClient::DocumentsApi.new
api_token = 'votre_clé_ici' # String | Clé d'utilisation de l'API
opts = {
  siren: '443061841', # String | SIREN de l'entreprise
  siret: '44306184100047' # String | SIRET de l'entreprise
}

begin
  # Télécharge les derniers statuts disponibles d'une entreprise à partir de son SIREN ou SIRET.
  result = api_instance.document_status(api_token, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling DocumentsApi->document_status: #{e}"
end
```

#### Using the document_status_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(File, Integer, Hash)> document_status_with_http_info(api_token, opts)

```ruby
begin
  # Télécharge les derniers statuts disponibles d'une entreprise à partir de son SIREN ou SIRET.
  data, status_code, headers = api_instance.document_status_with_http_info(api_token, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => File
rescue OpenapiClient::ApiError => e
  puts "Error when calling DocumentsApi->document_status_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **api_token** | **String** | Clé d&#39;utilisation de l&#39;API |  |
| **siren** | **String** | SIREN de l&#39;entreprise | [optional] |
| **siret** | **String** | SIRET de l&#39;entreprise | [optional] |

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/pdf


## document_telechargement

> File document_telechargement(api_token, token)

Télécharge un document PDF ou XLSX à partir de son token.

Vous devez fournir le token du document. Le document vous sera envoyé au format PDF ou XLSX.

### Examples

```ruby
require 'time'
require 'openapi_client'

api_instance = OpenapiClient::DocumentsApi.new
api_token = 'votre_clé_ici' # String | Clé d'utilisation de l'API
token = 'QTQ0MzA2MTg0MTIwMjAwNDA3RMOpY2lzaW9uKHMpIGRlIGwnYXNzb2Npw6kgdW5pcXVl' # String | Token du document

begin
  # Télécharge un document PDF ou XLSX à partir de son token.
  result = api_instance.document_telechargement(api_token, token)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling DocumentsApi->document_telechargement: #{e}"
end
```

#### Using the document_telechargement_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(File, Integer, Hash)> document_telechargement_with_http_info(api_token, token)

```ruby
begin
  # Télécharge un document PDF ou XLSX à partir de son token.
  data, status_code, headers = api_instance.document_telechargement_with_http_info(api_token, token)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => File
rescue OpenapiClient::ApiError => e
  puts "Error when calling DocumentsApi->document_telechargement_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **api_token** | **String** | Clé d&#39;utilisation de l&#39;API |  |
| **token** | **String** | Token du document |  |

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/pdf

