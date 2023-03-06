# OpenapiClient::EntrepriseFicheAllOfDerniersStatuts

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **date_depot** | **Date** | Date de dépôt des statuts, au format AAAA-MM-JJ. | [optional] |
| **date_depot_formate** | **String** | Date de dépôt formaté des statuts, au format JJ/MM/AAAA. | [optional] |
| **disponible** | **Boolean** | Disponibilité des statuts. | [optional] |
| **nom_fichier_pdf** | **String** | Nom du fichier pdf des statuts. | [optional] |
| **token** | **String** | Token des statuts. | [optional] |
| **type** | **String** | Champ \&quot;type\&quot; du document contenant les statuts. | [optional] |
| **decision** | **String** | Champ \&quot;decision\&quot; du document contenant les statuts. | [optional] |
| **date_acte** | **Date** | Date de publication des statuts, au format AAAA-MM-JJ. | [optional] |
| **date_acte_formate** | **String** | Date de publication des statuts, au format JJ/MM/AAAA. | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::EntrepriseFicheAllOfDerniersStatuts.new(
  date_depot: Tue Apr 07 02:00:00 CEST 2020,
  date_depot_formate: 07/04/2020,
  disponible: null,
  nom_fichier_pdf: GOOGLE FRANCE - Actes du 07-04-2020.pdf,
  token: QTQ0MzA2MTg0MTIwMjAwNDA3RMOpY2lzaW9uKHMpIGRlIGwnYXNzb2Npw6kgdW5pcXVl,
  type: Statuts mis à jour,
  decision: null,
  date_acte: Wed Mar 04 01:00:00 CET 2020,
  date_acte_formate: 04/03/2020
)
```

