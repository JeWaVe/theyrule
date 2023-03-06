# OpenapiClient::Association

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **is_waldec** | **Boolean** | Détermine si l&#39;association possède un numéro WALDEC/RNA. | [optional] |
| **id_association** | **String** | L&#39;identifiant l&#39;association au format Wxxxxxxxxx si WALDEC, xxxxxxxxxxxxxx sinon. | [optional] |
| **id_ex_association** | **String** | Ancien numéro de l&#39;association. | [optional] |
| **denomination** | **String** | Dénomination de l&#39;association. | [optional] |
| **siret** | **String** | Numéro siret de l&#39;association au format xxxxxxxxxxxxxx. | [optional] |
| **numero_rup** | **String** | Numéro de Reconnaissance d&#39;Utilité Publique. | [optional] |
| **objet** | **String** | Objet de l&#39;association. | [optional] |
| **objet_social_1** | **String** | Objet social 1 de l&#39;association. | [optional] |
| **categorie_social_1** | **String** | Libellé correspondant à l&#39;objet social 1. | [optional] |
| **objet_social_2** | **String** | Objet social 2 de l&#39;association. | [optional] |
| **categorie_social_2** | **String** | Libellé correspondant à l&#39;objet social 1. | [optional] |
| **date_creation** | **String** | Date de déclaration de création au format AAAA-MM-JJ. | [optional] |
| **date_derniere_declaration** | **String** | Date de dernière déclaration au format AAAA-MM-JJ. | [optional] |
| **date_publication_creation** | **String** | Date de publication du Journal Officiel de l&#39;avis de création au format AAAA-MM-JJ. | [optional] |
| **date_declaration_dissolution** | **String** | Date de déclaration de dissolution au format AAAA-MM-JJ. | [optional] |
| **groupement** | **String** | Groupement de l&#39;association. | [optional] |
| **position_activite** | **String** | Position d&#39;activité de l&#39;association. | [optional] |
| **nature** | **String** | Nature de l&#39;association. | [optional] |
| **site_web** | **String** | Site web de l&#39;association. | [optional] |
| **telephone** | **String** | Numéro de téléphone de l&#39;association. | [optional] |
| **email** | **String** | Email de l&#39;association. | [optional] |
| **adresse_siege** | [**AssociationAdresseSiege**](AssociationAdresseSiege.md) |  | [optional] |
| **adresse_gestionnaire** | [**AssociationAdresseGestionnaire**](AssociationAdresseGestionnaire.md) |  | [optional] |
| **observation** | **String** | Observation relative à l&#39;association. | [optional] |
| **code_gestion** | **String** | Code du site gestionnaire (préfecture, sous-préfecture) de l&#39;association. | [optional] |
| **dirigeant_civilite** | **String** | Civilité du dirigeant. | [optional] |
| **derniere_maj** | **String** | Date de la dernière mise à jour des informations au RNA au format AAAA-MM-JJ. | [optional] |
| **publications_joafe** | [**AssociationPublicationsJoafe**](AssociationPublicationsJoafe.md) |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::Association.new(
  is_waldec: false,
  id_association: W142005389,
  id_ex_association: 0142004593,
  denomination: COMITÉ RÉGIONAL DE BRIDGE DE BASSE NORMANDIE,
  siret: 95037097300014,
  numero_rup: null,
  objet: Grouper tous les clubs et joueurs de bridge de Basse-Normandie de soutenir leurs efforts et de développer sous toutes ses formes la pratique du jeu de bridge,
  objet_social_1: 3589,
  categorie_social_1: Bridge, jeux de cartes, échecs, dames, jeux de société...,
  objet_social_2: 0,
  categorie_social_2: Non connue,
  date_creation: 1978-09-28,
  date_derniere_declaration: 2019-09-18,
  date_publication_creation: 1978-10-12,
  date_declaration_dissolution: 2019-09-18,
  groupement: Simple,
  position_activite: Active,
  nature: Simplement Declarée,
  site_web: null,
  telephone: null,
  email: null,
  adresse_siege: null,
  adresse_gestionnaire: null,
  observation: Reprise auto &#x3D;&gt;  date publication création au JO à vérifier,
  code_gestion: 142P,
  dirigeant_civilite: PM,
  derniere_maj: 2020-03-18,
  publications_joafe: null
)
```

