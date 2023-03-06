# OpenapiClient::EntrepriseFicheAllOfDepotsActes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **date_depot** | **Date** | Date de dépôt de l&#39;acte, au format AAAA-MM-JJ. | [optional] |
| **date_depot_formate** | **String** | Date de dépôt formatée de l&#39;acte, au format JJ/MM/AAAA. | [optional] |
| **disponible** | **Boolean** | Disponibilité de l&#39;acte. Un acte peut être indisponible car il a été publié avant le 1er janvier 1993 ou bien car il est confidentiel. | [optional] |
| **nom_fichier_pdf** | **String** | Nom du fichier pdf de l&#39;acte. | [optional] |
| **token** | **String** | Token de l&#39;acte. | [optional] |
| **actes** | [**Array&lt;EntrepriseFicheAllOfActes&gt;**](EntrepriseFicheAllOfActes.md) | Détails de l&#39;acte. | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::EntrepriseFicheAllOfDepotsActes.new(
  date_depot: Tue Apr 07 02:00:00 CEST 2020,
  date_depot_formate: 07/04/2020,
  disponible: null,
  nom_fichier_pdf: GOOGLE FRANCE - Actes du 07-04-2020.pdf,
  token: QTQ0MzA2MTg0MTIwMjAwNDA3RMOpY2lzaW9uKHMpIGRlIGwnYXNzb2Npw6kgdW5pcXVl,
  actes: null
)
```

