# OpenapiClient::RechercheBeneficiaires200ResponseResultatsInner

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **nom** | **String** | Nom du bénéficiaire effectif. | [optional] |
| **nom_usage** | **String** | Nom d&#39;usage du bénéficiaire effectif. | [optional] |
| **prenom** | **String** | Prénom du bénéficiaire effectif. | [optional] |
| **pseudonyme** | **String** | Pseudonyme du bénéficiaire effectif. | [optional] |
| **nom_complet** | **String** | Nom complet du bénéficiaire effectif. | [optional] |
| **date_de_naissance_formate** | **String** | Mois et année de naissance du bénéficiaire effectif, au format MM/AAAA. | [optional] |
| **nationalite** | **String** | Nationalité du bénéficiaire effectif. | [optional] |
| **pourcentage_parts** | **Float** | Parts détenues par le bénéficiaire effectif, en pourcentage des parts totales. | [optional] |
| **pourcentage_votes** | **Float** | Droits de vote détenus par le bénéficiaire effectif, en pourcentage des droits de vote totaux. | [optional] |
| **pourcentage_votes_indirect** | **Float** | Droits de vote détenus de façon indirecte par le bénéficiaire effectif, en pourcentage des droits de vote totaux. | [optional] |
| **pourcentage_votes_directs** | **Float** | Droits de vote détenus de façon directe par le bénéficiaire effectif, en pourcentage des droits de vote totaux. | [optional] |
| **detention_autres_moyens_controle** | **Boolean** | Vaut vrai s&#39;il existe d&#39;autres moyens de contrôle. | [optional] |
| **beneficiaire_representant_legal** | **Boolean** | Vaut vrai dans le cas où le bénéficiaire effectif a été défini comme le représentant légal par défaut. | [optional] |
| **adresse_ligne_1** | **String** | Première ligne de l&#39;adresse du bénéficiaire effectif. | [optional] |
| **adresse_ligne_2** | **String** | Deuxième ligne de l&#39;adresse du bénéficiaire effectif. | [optional] |
| **adresse_ligne_3** | **String** | Troisième ligne de l&#39;adresse du bénéficiaire effectif. | [optional] |
| **pourcentage_parts_vocation_titulaire** | **Float** | Parts dont le bénéficiaire effectif a vocation à devenir titulaire par l&#39;effet d&#39;un acte juridique, en pourcentage des parts totales. | [optional] |
| **representant_legal_placement_sans_gestion_delegation** | **Boolean** | Vaut vrai dans le cas où le bénéficiaire effectif est le représentant légal du placement collectif (cas où le placement collectif n&#39;a pas délégué sa gestion à une société de gestion). | [optional] |
| **code_postal** | **String** | Code postal du bénéficiaire effectif. | [optional] |
| **detention_pouvoir_nom_membre_conseil_administration** | **Boolean** | Vaut vrai si le moyen de contrôle est le pouvoir de nommer ou de révoquer la majorité des membres des organes d&#39;administration, de gestion, de direction ou de surveillance de la personne morale. | [optional] |
| **ville** | **String** | Ville du bénéficiaire effectif. | [optional] |
| **date_de_naissance_complete_formatee** | **Date** | Date de naissance complète du bénéficiaire effectif, au format JJ/MM/AAAA. | [optional] |
| **pourcentage_parts_directes** | **Float** | Parts détenues de façon directe par le bénéficiaire effectif, en pourcentage des parts totales. | [optional] |
| **pourcentage_parts_indirectes** | **Float** | Parts détenues de façon indirecte par le bénéficiaire effectif, en pourcentage des parts totales. | [optional] |
| **pays_de_naissance** | **String** | Pays de naissance du bénéficiaire effectif. | [optional] |
| **code_pays_de_naissance** | **String** | Code du pays de naissance du bénéficiaire effectif. | [optional] |
| **ville_de_naissance** | **String** | Ville de naissance du bénéficiaire effectif. | [optional] |
| **detention_pouvoir_decision_ag** | **Boolean** | Vaut vrai pour les moyens de contrôle sur les organes d&#39;administration, de gestion, de direction ou de surveillance de la personne morale autre que le pouvoir de nommer ou de révoquer la majorité des membres. | [optional] |
| **pays** | **String** | Pays du bénéficiaire effectif. | [optional] |
| **date_de_naissance_formatee** | **String** | Mois et année de naissance du bénéficiaire effectif, au format MM/AAAA. | [optional] |
| **code_pays** | **String** | Code pays du bénéficiaire effectif. | [optional] |
| **entreprises** | [**Array&lt;EntrepriseRecherche&gt;**](EntrepriseRecherche.md) | Liste des entreprises dont le bénéficiaire effectif est bénéficiaire effectif, dans la limite de 100 entreprises. | [optional] |
| **nb_entreprises_total** | **Integer** | Nombre d&#39;entreprises du bénéficiaire effectif au total. | [optional] |
| **entreprises_dirigeant** | [**Array&lt;EntrepriseRecherche&gt;**](EntrepriseRecherche.md) | Liste des entreprises dont le bénéficiaire effectif est dirigeant (sans forcément en être bénéficiaire effectif), dans la limite de 100 entreprises. | [optional] |
| **nb_entreprises_dirigeant_total** | **Integer** | Nombre d&#39;entreprises dont le bénéficiaire effectif est dirigeant au total. | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::RechercheBeneficiaires200ResponseResultatsInner.new(
  nom: Yi,
  nom_usage: null,
  prenom: Kenneth H.,
  pseudonyme: null,
  nom_complet: Kenneth H. Yi,
  date_de_naissance_formate: 01/1970,
  nationalite: Française,
  pourcentage_parts: null,
  pourcentage_votes: null,
  pourcentage_votes_indirect: null,
  pourcentage_votes_directs: null,
  detention_autres_moyens_controle: null,
  beneficiaire_representant_legal: null,
  adresse_ligne_1: null,
  adresse_ligne_2: null,
  adresse_ligne_3: null,
  pourcentage_parts_vocation_titulaire: null,
  representant_legal_placement_sans_gestion_delegation: null,
  code_postal: null,
  detention_pouvoir_nom_membre_conseil_administration: null,
  ville: null,
  date_de_naissance_complete_formatee: null,
  pourcentage_parts_directes: null,
  pourcentage_parts_indirectes: null,
  pays_de_naissance: null,
  code_pays_de_naissance: null,
  ville_de_naissance: null,
  detention_pouvoir_decision_ag: null,
  pays: null,
  date_de_naissance_formatee: null,
  code_pays: null,
  entreprises: null,
  nb_entreprises_total: null,
  entreprises_dirigeant: null,
  nb_entreprises_dirigeant_total: null
)
```

