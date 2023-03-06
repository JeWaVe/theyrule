# OpenapiClient::Bodacc

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **numero_parution** | **String** | Numéro de parution de la publication. | [optional] |
| **date** | **String** | Date de la publication, au format AAAA-MM-JJ. | [optional] |
| **numero_annonce** | **String** | Numéro d&#39;annonce de la publication. | [optional] |
| **bodacc** | **String** | Bodacc de la publication (A, B ou C). | [optional] |
| **type** | **String** | Type de la publication parmi la liste suivante : Création, Immatriculation, Modification, Vente, Achat, Radiation, Procédure collective, Dépôt des comptes. | [optional] |
| **greffe** | **String** | Greffe de publication. | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::Bodacc.new(
  numero_parution: 20200075,
  date: 2020-04-16,
  numero_annonce: 670,
  bodacc: B,
  type: Modification,
  greffe: Paris
)
```

