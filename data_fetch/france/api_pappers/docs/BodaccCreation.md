# OpenapiClient::BodaccCreation

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
| **capital** | **Integer** | Capital de l&#39;entreprise concernée par la publication. | [optional] |
| **activite** | **String** | Activité de l&#39;entreprise concernée par la publication. | [optional] |
| **date_debut_activite** | **String** | Date de début d&#39;activité de l&#39;entreprise concernée par la publication, au format AAAA-MM-JJ. | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::BodaccCreation.new(
  nom_entreprise: GOOGLE FRANCE,
  personne_morale: false,
  denomination: GOOGLE FRANCE,
  nom: null,
  prenom: null,
  administration: Président : xxxx ; Commissaire aux comptes titulaire : xxxx,
  adresse: 8 rue de Londres 75009 Paris,
  capital: 464884017,
  activite: Fourniture de services et/ou conseils relatifs aux logiciels, au réseau internet.,
  date_debut_activite: 2020-08-02
)
```

