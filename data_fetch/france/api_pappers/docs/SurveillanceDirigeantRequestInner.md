# OpenapiClient::SurveillanceDirigeantRequestInner

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **siren** | **String** | SIREN de la personne morale (si ajout d&#39;une personne morale) |  |
| **denomination** | **String** | Dénomination de la personne morale (si ajout d&#39;une personne morale) | [optional] |
| **nom** | **String** | Nom de la personne physique (si ajout d&#39;une personne physique) | [optional] |
| **prenom** | **String** | Prénom de la personne physique (si ajout d&#39;une personne physique) | [optional] |
| **date_de_naissance** | **String** | Date de naissance de la personne physique au format AAAA-MM-JJ (si ajout d&#39;une personne physique) | [optional] |
| **recherche_elargie** | **Boolean** | Active la recherche élargie du dirigeant : &lt;ul&gt;&lt;li&gt;Pour une personne physique : c&#39;est un cas rare mais la date de naissance du dirigeant n&#39;est pas toujours connue de Pappers. Si vous activer ce filtre et que la date de naissance est inconnue, l&#39;alerte sera générée uniquement sur la base du nom et prénom.&lt;/li&gt;&lt;li&gt;Pour une personne morale : c&#39;est un cas rare mais le SIREN du dirigeant n&#39;est pas toujours connu de Pappers. Si vous activer ce filtre et que le SIREN est inconnu, l&#39;alerte sera générée uniquement sur la base de la dénomination. Activable uniquement si le champ denomination est présent.&lt;/li&gt;&lt;/ul&gt; | [optional][default to false] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::SurveillanceDirigeantRequestInner.new(
  siren: null,
  denomination: null,
  nom: null,
  prenom: null,
  date_de_naissance: null,
  recherche_elargie: null
)
```

