# OpenapiClient::EntrepriseFicheAllOfComptes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **date_depot** | **Date** | Date de dépôt des comptes. | [optional] |
| **date_depot_formate** | **String** | Date de dépôt formatée des comptes. | [optional] |
| **date_cloture** | **Date** | Date de clôture des comptes, au format AAAA-MM-JJ. | [optional] |
| **annee_cloture** | **Integer** | Année de clôture des comptes. | [optional] |
| **confidentialite** | **Boolean** | Confidentialité totale des comptes. | [optional] |
| **confidentialite_compte_de_resultat** | **Boolean** | Confidentialité partielle des comptes (seul le compte de résultat est confidentiel, le reste des comptes sont disponibles). | [optional] |
| **disponible** | **Boolean** | Disponibilité des comptes au format PDF. | [optional] |
| **nom_fichier_pdf** | **String** | Nom du fichier PDF des comptes. | [optional] |
| **token** | **String** | Token des comptes. | [optional] |
| **disponible_xlsx** | **Boolean** | Disponibilité des comptes au format XLSX. | [optional] |
| **nom_fichier_xlsx** | **String** | Nom du fichier XLSX des comptes. | [optional] |
| **token_xlsx** | **String** | Token des comptes XLSX. | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::EntrepriseFicheAllOfComptes.new(
  date_depot: Thu Jul 16 02:00:00 CEST 2020,
  date_depot_formate: 16/07/2020,
  date_cloture: Tue Dec 31 01:00:00 CET 2019,
  annee_cloture: 2019,
  confidentialite: null,
  confidentialite_compte_de_resultat: null,
  disponible: null,
  nom_fichier_pdf: GOOGLE FRANCE - Comptes 2019.pdf,
  token: QzQ0MzA2MTg0MTIwMjAwNzE2,
  disponible_xlsx: null,
  nom_fichier_xlsx: GOOGLE FRANCE - Comptes 2019.xlsx,
  token_xlsx: ASQSMAA2MTg8MTIwMjAwNz2s
)
```

