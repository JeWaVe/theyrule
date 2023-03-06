# OpenapiClient::EntrepriseFicheAllOfRnm

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **date_immatriculation** | **String** | Date d&#39;immatriculation au Répertoire des Métiers, au format AAAA-MM-JJ. | [optional] |
| **date_radiation** | **String** | Date de radiation du Répertoire des Métiers, le cas échéant, au format AAAA-MM-JJ. | [optional] |
| **date_debut_activite** | **String** | Date de début d&#39;activé déclarée au Répertoire des Métiers, au format AAAA-MM-JJ. | [optional] |
| **date_cessation_activite** | **String** | Date de cessation d&#39;activité déclarée au Répertoire des Métiers, le cas échéant, au format AAAA-MM-JJ. | [optional] |
| **chambre_des_metiers** | **String** | Chambre des métiers où l&#39;entreprise est immatriculée. | [optional] |
| **qualification** | **String** | Qualification retenue par le Répertoire des Métiers. | [optional] |
| **derniere_mise_a_jour** | **String** | Date de dernière mise à jour de l&#39;entreprise au Répertoire des Métiers, au format AAAA-MM-JJ. | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::EntrepriseFicheAllOfRnm.new(
  date_immatriculation: 2021-02-16,
  date_radiation: null,
  date_debut_activite: 2021-01-01,
  date_cessation_activite: null,
  chambre_des_metiers: TARN-ET-GARONNE,
  qualification: ARTISAN,
  derniere_mise_a_jour: 2021-02-22
)
```

