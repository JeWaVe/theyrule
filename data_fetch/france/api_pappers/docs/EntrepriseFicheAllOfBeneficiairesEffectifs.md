# OpenapiClient::EntrepriseFicheAllOfBeneficiairesEffectifs

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **date_greffe** | **Date** | Date de génération des bénéficiaires effectifs, au format AAAA-MM-JJ. | [optional] |
| **type** | **String** | Type du bénéficiaire effectif | [optional] |
| **nom** | **String** | Nom du bénéficiaire effectif. | [optional] |
| **nom_usage** | **String** | Nom d&#39;usage du bénéficiaire effectif. | [optional] |
| **prenom** | **String** | Prénom du bénéficiaire effectif. | [optional] |
| **pseudonyme** | **String** |  | [optional] |
| **date_de_naissance_formatee** | **String** | Mois et année de naissance du bénéficiaire effectif, au format MM/AAAA. | [optional] |
| **date_de_naissance_complete_formatee** | **Date** | Date de naissance complète du bénéficiaire effectif, au format JJ/MM/AAAA. | [optional] |
| **nationalite** | **String** | Nationalité du bénéficiaire effectif. | [optional] |
| **code_nationalite** | **String** | Code de la nationalité du bénéficiaire effectif. | [optional] |
| **ville_de_naissance** | **String** | Ville de naissance du bénéficiaire effectif. | [optional] |
| **pays_de_naissance** | **String** | Pays de naissance du bénéficiaire effectif. | [optional] |
| **code_pays_de_naissance** | **String** | Code du pays de naissance du bénéficiaire effectif. | [optional] |
| **adresse_ligne_1** | **String** | Première ligne de l&#39;adresse du bénéficiaire effectif. | [optional] |
| **adresse_ligne_2** | **String** | Deuxième ligne de l&#39;adresse du bénéficiaire effectif. | [optional] |
| **adresse_ligne_3** | **String** | Troisième ligne de l&#39;adresse du bénéficiaire effectif. | [optional] |
| **code_postal** | **String** | Code postal du bénéficiaire effectif. | [optional] |
| **ville** | **String** | Ville du bénéficiaire effectif. | [optional] |
| **pays** | **String** | Pays du bénéficiaire effectif. | [optional] |
| **code_pays** | **String** | Code du pays du bénéficiaire effectif. | [optional] |
| **pourcentage_parts** | **Float** | Parts détenues par le bénéficiaire effectif, en pourcentage des parts totales. | [optional] |
| **pourcentage_parts_directes** | **Float** | Parts détenues de façon directe par le bénéficiaire effectif, en pourcentage des parts totales. | [optional] |
| **pourcentage_parts_indirectes** | **Float** | Parts détenues de façon indirecte par le bénéficiaire effectif, en pourcentage des parts totales. | [optional] |
| **pourcentage_parts_vocation_titulaire** | **Float** | Parts dont le bénéficiaire effectif a vocation à devenir titulaire par l&#39;effet d&#39;un acte juridique, en pourcentage des parts totales. | [optional] |
| **details_parts_directes** | [**EntrepriseFicheAllOfDetailsPartsDirectes**](EntrepriseFicheAllOfDetailsPartsDirectes.md) |  | [optional] |
| **details_parts_indirectes** | [**EntrepriseFicheAllOfDetailsPartsIndirectes**](EntrepriseFicheAllOfDetailsPartsIndirectes.md) |  | [optional] |
| **details_parts_vocation_titulaire** | [**EntrepriseFicheAllOfDetailsPartsVocationTitulaire**](EntrepriseFicheAllOfDetailsPartsVocationTitulaire.md) |  | [optional] |
| **pourcentage_votes** | **Float** | Droits de vote détenus par le bénéficiaire effectif, en pourcentage des droits de vote totaux. | [optional] |
| **pourcentage_votes_directs** | **Float** | Droits de vote détenus de façon directe par le bénéficiaire effectif, en pourcentage des droits de vote totaux. | [optional] |
| **pourcentage_votes_indirect** | **Float** | Droits de vote détenus de façon indirecte par le bénéficiaire effectif, en pourcentage des droits de vote totaux. | [optional] |
| **details_votes_directs** | [**EntrepriseFicheAllOfDetailsVotesDirects**](EntrepriseFicheAllOfDetailsVotesDirects.md) |  | [optional] |
| **details_votes_indirects** | [**EntrepriseFicheAllOfDetailsVotesIndirects**](EntrepriseFicheAllOfDetailsVotesIndirects.md) |  | [optional] |
| **details_societe_de_gestion** | [**EntrepriseFicheAllOfDetailsSocieteDeGestion**](EntrepriseFicheAllOfDetailsSocieteDeGestion.md) |  | [optional] |
| **detention_pouvoir_decision_ag** | **Boolean** | Vaut vrai pour les moyens de contrôle sur les organes d&#39;administration, de gestion, de direction ou de surveillance de la personne morale autre que le pouvoir de nommer ou de révoquer la majorité des membres. | [optional] |
| **detention_pouvoir_nom_membre_conseil_administration** | **Boolean** | Vaut vrai si le moyen de contrôle est le pouvoir de nommer ou de révoquer la majorité des membres des organes d&#39;administration, de gestion, de direction ou de surveillance de la personne morale. | [optional] |
| **detention_autres_moyens_controle** | **Boolean** | Vaut vrai s&#39;il existe d&#39;autres moyens de contrôle. | [optional] |
| **beneficiaire_representant_legal** | **Boolean** | Vaut vrai dans le cas où le bénéficiaire effectif a été défini comme le représentant légal par défaut. | [optional] |
| **representant_legal_placement_sans_gestion_delegation** | **Boolean** | Vaut vrai dans le cas où le bénéficiaire effectif est le représentant légal du placement collectif (cas où le placement collectif n&#39;a pas délégué sa gestion à une société de gestion). | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::EntrepriseFicheAllOfBeneficiairesEffectifs.new(
  date_greffe: Wed Jan 06 01:00:00 CET 2021,
  type: BE_SOC,
  nom: McCourt JR,
  nom_usage: null,
  prenom: Frank,
  pseudonyme: null,
  date_de_naissance_formatee: 08/1953,
  date_de_naissance_complete_formatee: null,
  nationalite: Américaine (Etats Unis),
  code_nationalite: US,
  ville_de_naissance: Massachusetts,
  pays_de_naissance: ETATS-UNIS D&#39;AMERIQUE,
  code_pays_de_naissance: US,
  adresse_ligne_1: null,
  adresse_ligne_2: 888 Seventh Avenue 43rd Floor New York (Etat de New York),
  adresse_ligne_3: null,
  code_postal: null,
  ville: null,
  pays: ETATS-UNIS D&#39;AMERIQUE,
  code_pays: US,
  pourcentage_parts: null,
  pourcentage_parts_directes: null,
  pourcentage_parts_indirectes: null,
  pourcentage_parts_vocation_titulaire: null,
  details_parts_directes: null,
  details_parts_indirectes: null,
  details_parts_vocation_titulaire: null,
  pourcentage_votes: null,
  pourcentage_votes_directs: null,
  pourcentage_votes_indirect: null,
  details_votes_directs: null,
  details_votes_indirects: null,
  details_societe_de_gestion: null,
  detention_pouvoir_decision_ag: null,
  detention_pouvoir_nom_membre_conseil_administration: null,
  detention_autres_moyens_controle: null,
  beneficiaire_representant_legal: null,
  representant_legal_placement_sans_gestion_delegation: null
)
```

