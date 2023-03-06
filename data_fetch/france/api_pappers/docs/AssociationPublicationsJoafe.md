# OpenapiClient::AssociationPublicationsJoafe

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **numero_parution** | **String** | Numéro de parution JOAFE | [optional] |
| **date_parution** | **String** | Date de parution JOAFE au format AAAA-MM-JJ | [optional] |
| **date_declaration** | **String** | Date de déclaration au format AAAA-MM-JJ | [optional] |
| **numero_annonce** | **Integer** | Numéro de l&#39;annonce JOAFE | [optional] |
| **titre** | **String** | Nom de l&#39;association | [optional] |
| **type** | **String** | Type d&#39;annonce (Création, Modification, Dissolution) | [optional] |
| **prefecture** | **String** | Lieu de la déclaration | [optional] |
| **objet** | **String** | Description de l&#39;association | [optional] |
| **site_web** | **String** | Lien du site web | [optional] |
| **adresse** | **String** | Adresse de l&#39;association | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::AssociationPublicationsJoafe.new(
  numero_parution: 20180024,
  date_parution: 2018-06-16,
  date_declaration: 2018-06-12,
  numero_annonce: 1766,
  titre: ASSOCIATION QUARTIER FOSSES-JEAN,
  type: Création,
  prefecture: Hauts-de-Seine,
  objet: la défense des droits des habitants du quartier auprès éventuellement des bailleurs sociaux ; aide à la gestion des problèmes de voisinage ; superviser le prêt des Lieux Communs de Résidences pour proposer des activités aux jeunes du quartier (jeux, échanges, anniversaires, prêt de livres ou divers) ; l&#39;organisation de rencontres pluriculturelles (apprentissage de l&#39;art culinaire des différentes ethnies qui composent le quartier) ; organisation de goûter et sorties, vide grenier annuel ou semestriel plus couramment brocante ; organisation de rencontres inter-générations retraités qui pourraient apporter une aide aux devoirs pour les enfants (bénévolement),
  site_web: null,
  adresse: 9, avenue D&#39;Orgemont, 92700 Colombes
)
```

