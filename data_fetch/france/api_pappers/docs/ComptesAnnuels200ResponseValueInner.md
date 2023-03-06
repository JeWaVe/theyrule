# OpenapiClient::ComptesAnnuels200ResponseValueInner

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **date_depot** | **String** | Date de dépôt des comptes, au format AAAA-MM-JJ. | [optional] |
| **code_greffe** | **String** | Code du greffe de dépôt des comptes. | [optional] |
| **numero_depot** | **String** | Numéro de dépôt des comptes au greffe. | [optional] |
| **numero_gestion** | **String** | Numéro de gestion au greffe. | [optional] |
| **date_cloture** | **String** | Date de cloture des comptes, au format AAAA-MM-JJ. | [optional] |
| **date_cloture_n_1** | **String** | Date de cloture des comptes n-1, lorsque présents, au format AAAA-MM-JJ. | [optional] |
| **duree_exercice_n** | **Integer** | Durée de l&#39;exercice déposé, en mois. | [optional] |
| **duree_exercice_n_1** | **Integer** | Durée de l&#39;exercice précédent, lorsque présent, en mois. | [optional] |
| **type_comptes** | **String** | Type de comptes (C &#x3D; complets ; S &#x3D; simplifiés ; K &#x3D; consolidés ; CS &#x3D; mélange complets/simplifiés ; B &#x3D; banques ; A &#x3D; assurances). | [optional] |
| **libelle_type_comptes** | **String** | Libellé du type de comptes. | [optional] |
| **devise** | **String** | Devise des comptes. | [optional] |
| **devise_origine** | **String** | Devise d&#39;origine en cas de conversion. | [optional] |
| **confidentialite** | **Boolean** | Confidentialité totale des comptes. | [optional] |
| **confidentialite_compte_de_resultat** | **Boolean** | Confidentialité partielle des comptes (seul le compte de résultat est confidentiel, le reste des comptes sont disponibles). | [optional] |
| **type_saisie** | **String** | Description du type de saisie des comptes. | [optional] |
| **informations_traitement** | **Array&lt;String&gt;** | Informations complémentaires sur le traitement des comptes. | [optional] |
| **sections** | [**Array&lt;ComptesAnnuels200ResponseValueInnerSectionsInner&gt;**](ComptesAnnuels200ResponseValueInnerSectionsInner.md) | Liste des sections de liasses fiscales. | [optional] |
| **ratios** | [**Ratios**](Ratios.md) |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::ComptesAnnuels200ResponseValueInner.new(
  date_depot: 2021-04-23,
  code_greffe: 7501,
  numero_depot: 75548,
  numero_gestion: 2003B09427,
  date_cloture: 2020-12-31,
  date_cloture_n_1: null,
  duree_exercice_n: 12,
  duree_exercice_n_1: null,
  type_comptes: C,
  libelle_type_comptes: Complets,
  devise: EUR,
  devise_origine: null,
  confidentialite: null,
  confidentialite_compte_de_resultat: null,
  type_saisie: null,
  informations_traitement: null,
  sections: null,
  ratios: null
)
```

