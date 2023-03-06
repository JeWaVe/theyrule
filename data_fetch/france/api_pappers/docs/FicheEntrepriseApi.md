# OpenapiClient::FicheEntrepriseApi

All URIs are relative to *https://api.pappers.fr/v2*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**entreprise**](FicheEntrepriseApi.md#entreprise) | **GET** /entreprise | Récupère l&#39;ensemble des informations disponibles sur une entreprise. |


## entreprise

> <EntrepriseFiche> entreprise(api_token, opts)

Récupère l'ensemble des informations disponibles sur une entreprise.

Vous devez fournir soit le SIREN, soit le SIRET. Si vous indiquez le SIREN, tous les établissements associés à ce SIREN seront renvoyés dans la clé `etablissements`. Si vous indiquez le SIRET, seul l'établissement associé sera renvoyé dans la clé `etablissement`.

### Examples

```ruby
require 'time'
require 'openapi_client'

api_instance = OpenapiClient::FicheEntrepriseApi.new
api_token = 'votre_clé_ici' # String | Clé d'utilisation de l'API
opts = {
  siren: '443061841', # String | SIREN de l'entreprise
  siret: '44306184100047', # String | SIRET de l'entreprise
  format_publications_bodacc: 'objet', # String | Format attendu pour les publications BODACC. Valeur par défaut : `\"objet\"`.
  marques: true, # Boolean | Si vrai, le retour inclura les marques éventuelles de l'entreprise. Valeur par défaut : `false`.
  validite_tva_intracommunautaire: true, # Boolean | Si vrai, le champ validite_tva_intracommunautaire du retour indiquera si le numéro de tva est valide auprès de la Commission européenne. Valeur par défaut : `false`.
  publications_bodacc_brutes: true # Boolean | Pappers traite les publications BODACC afin de supprimer les publications périmée. Si vrai, le retour inclura les publications bodacc sans traitement. Valeur par défaut : `false`.
}

begin
  # Récupère l'ensemble des informations disponibles sur une entreprise.
  result = api_instance.entreprise(api_token, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling FicheEntrepriseApi->entreprise: #{e}"
end
```

#### Using the entreprise_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<EntrepriseFiche>, Integer, Hash)> entreprise_with_http_info(api_token, opts)

```ruby
begin
  # Récupère l'ensemble des informations disponibles sur une entreprise.
  data, status_code, headers = api_instance.entreprise_with_http_info(api_token, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <EntrepriseFiche>
rescue OpenapiClient::ApiError => e
  puts "Error when calling FicheEntrepriseApi->entreprise_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **api_token** | **String** | Clé d&#39;utilisation de l&#39;API |  |
| **siren** | **String** | SIREN de l&#39;entreprise | [optional] |
| **siret** | **String** | SIRET de l&#39;entreprise | [optional] |
| **format_publications_bodacc** | **String** | Format attendu pour les publications BODACC. Valeur par défaut : &#x60;\&quot;objet\&quot;&#x60;. | [optional] |
| **marques** | **Boolean** | Si vrai, le retour inclura les marques éventuelles de l&#39;entreprise. Valeur par défaut : &#x60;false&#x60;. | [optional] |
| **validite_tva_intracommunautaire** | **Boolean** | Si vrai, le champ validite_tva_intracommunautaire du retour indiquera si le numéro de tva est valide auprès de la Commission européenne. Valeur par défaut : &#x60;false&#x60;. | [optional] |
| **publications_bodacc_brutes** | **Boolean** | Pappers traite les publications BODACC afin de supprimer les publications périmée. Si vrai, le retour inclura les publications bodacc sans traitement. Valeur par défaut : &#x60;false&#x60;. | [optional] |

### Return type

[**EntrepriseFiche**](EntrepriseFiche.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

