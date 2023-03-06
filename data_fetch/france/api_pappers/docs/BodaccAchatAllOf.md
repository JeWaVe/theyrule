# OpenapiClient::BodaccAchatAllOf

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **nom_entreprise** | **String** | Nom de l&#39;entreprise concernée par la publication. Correspond à la dénomination en cas de personne morale et à nom + prenom en cas de personne physique. | [optional] |
| **personne_morale** | **Boolean** | Vrai si l&#39;entreprise concernée par la publication est une personne morale, faux si c&#39;est une personne physique. | [optional] |
| **denomination** | **String** | Dénomination de l&#39;entreprise concernée par la publication (uniquement en cas de personne morale). | [optional] |
| **nom** | **String** | Nom de la personne physique concernée par la publication (uniquement en cas de personne physique). | [optional] |
| **prenom** | **String** | Prénom de la personne physique concernée par la publication (uniquement en cas de personne physique). | [optional] |
| **administration** | **String** | Administration (dans le cas d&#39;une personne morale). | [optional] |
| **adresse** | **String** | Adresse de l&#39;entreprise concernée par la publication. | [optional] |
| **commentaires** | **String** | Commentaires sur la publication. | [optional] |
| **oppositions** | **String** | Détails sur les oppositions. | [optional] |
| **declaration_creance** | **String** | Détails sur la déclaration de créance. | [optional] |
| **publication_legale** | **String** | Journal où a été publiée la publication légale. | [optional] |
| **denomination_ancien_proprietaire** | **String** | Dénomination de l&#39;ancien propriétaire de l&#39;établisement. | [optional] |
| **siren_ancien_proprietaire** | **String** | Siren de l&#39;ancien propriétaire de l&#39;établisement. | [optional] |
| **denomination_ancien_exploitant** | **String** | Dénomination de l&#39;ancien exploitant de l&#39;établisement. | [optional] |
| **siren_ancien_exploitant** | **String** | Siren de l&#39;ancien exploitant de l&#39;établisement. | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::BodaccAchatAllOf.new(
  nom_entreprise: GOOGLE FRANCE,
  personne_morale: false,
  denomination: GOOGLE FRANCE,
  nom: null,
  prenom: null,
  administration: Président : xxxx ; Commissaire aux comptes titulaire : xxxx,
  adresse: 8 rue de Londres 75009 Paris,
  commentaires: null,
  oppositions: null,
  declaration_creance: null,
  publication_legale: null,
  denomination_ancien_proprietaire: null,
  siren_ancien_proprietaire: null,
  denomination_ancien_exploitant: null,
  siren_ancien_exploitant: null
)
```

