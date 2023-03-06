# OpenapiClient::EntrepriseFicheAllOfMarques

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **numero** | **String** | Numéro de la marque. | [optional] |
| **date_enregistrement** | **String** | Date d&#39;enregistrement de la marque, au format AAAA-MM-JJ. | [optional] |
| **date_expiration** | **String** | Date d&#39;expiration de la marque au format AAAA-MM-JJ. | [optional] |
| **lieu_enregistrement** | **String** | Lieu d&#39;enregistrement de la marque. | [optional] |
| **statut** | **String** | Statut de la marque. La description des différents types est disponible en page 14 du document suivant : https://www.inpi.fr/sites/default/files/doctech_marques_v1.6.pdf. | [optional] |
| **texte** | **String** | Texte de la marque. | [optional] |
| **type** | **String** | Type de la marque. | [optional] |
| **lien_image** | **String** | Lien vers l&#39;image déposée. | [optional] |
| **descriptions** | **Array&lt;String&gt;** | Liste des descriptions de la marque. | [optional] |
| **classes** | [**Array&lt;EntrepriseFicheAllOfClasses&gt;**](EntrepriseFicheAllOfClasses.md) | Liste des classes (produits et services) de la marque. La liste des classes est disponible sur le document suivant : https://www.inpi.fr/sites/default/files/classification_nice_2021_0.pdf. | [optional] |
| **deposant** | [**PersonneMarque**](PersonneMarque.md) |  | [optional] |
| **mandataire** | [**PersonneMarque**](PersonneMarque.md) |  | [optional] |
| **evenements** | [**Array&lt;EntrepriseFicheAllOfEvenements&gt;**](EntrepriseFicheAllOfEvenements.md) | Liste des événements associés à la marque. | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::EntrepriseFicheAllOfMarques.new(
  numero: FR7103728,
  date_enregistrement: 2008-12-04,
  date_expiration: 2018-12-04,
  lieu_enregistrement: 92 INPI - Dépôt électronique,
  statut: Marque enregistrée,
  texte: Google,
  type: Figurative,
  lien_image: https://data.inpi.fr/image/marques/FRXXXXXXXX,
  descriptions: null,
  classes: null,
  deposant: null,
  mandataire: null,
  evenements: null
)
```

