# OpenapiClient::EntrepriseFiche

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **siren** | **String** | Le numéro SIREN de l&#39;entreprise au format xxxxxxxxx. | [optional] |
| **siren_formate** | **String** | Le numéro SIREN de l&#39;entreprise au format xxx xxx xxx. | [optional] |
| **nom_entreprise** | **String** | Le nom de l&#39;entreprise. Il est égal à sigle + dénomination en cas de personne morale, ou à nom + prénom en cas de personne physique. | [optional] |
| **personne_morale** | **Boolean** | Vrai en cas de personne morale, faux en cas de personne physique. | [optional] |
| **denomination** | **String** | Dénomination de l&#39;entreprise si personne morale. | [optional] |
| **nom** | **String** | Nom si personne physique. | [optional] |
| **prenom** | **String** | Prénom si personne physique. | [optional] |
| **sexe** | **String** | Sexe si personne physique. F pour féminin, M pour masculin. | [optional] |
| **code_naf** | **String** | Code NAF de l&#39;entreprise. | [optional] |
| **libelle_code_naf** | **String** | Libellé du code NAF de l&#39;entreprise. | [optional] |
| **domaine_activite** | **String** | Domaine d&#39;activité de l&#39;entreprise. | [optional] |
| **conventions_collectives** | [**Array&lt;EntrepriseBaseConventionsCollectivesInner&gt;**](EntrepriseBaseConventionsCollectivesInner.md) | Liste des conventions collectives de l&#39;entreprise. | [optional] |
| **date_creation** | **Date** | Date de création de l&#39;entreprise au format AAAA-MM-JJ. | [optional] |
| **date_creation_formate** | **String** | Date de création de l&#39;entreprise au format JJ/MM/AAAA. | [optional] |
| **entreprise_cessee** | **Boolean** | Si vrai, l&#39;entreprise n&#39;est plus en activité. Sinon, elle est toujours en activité. | [optional] |
| **date_cessation** | **String** | Date de cessation de l&#39;entreprise au format AAAA-MM-JJ. | [optional] |
| **entreprise_employeuse** | **Boolean** | Si vrai, l&#39;entreprise a au moins un employé. | [optional] |
| **categorie_juridique** | **String** | Catégorie juridique de l&#39;entreprise, selon la [nomenclature Insee](https://www.insee.fr/fr/information/2028129).   **Note** : Le code correspond à celui de l&#39;INSEE, à l&#39;exception des SASU qui auront comme code 5720 et les EURL qui auront comme code 5498. | [optional] |
| **forme_juridique** | **String** | Forme juridique de l&#39;entreprise. | [optional] |
| **effectif** | **String** | Tranche d&#39;effectif de l&#39;entreprise. | [optional] |
| **effectif_min** | **Integer** | Effectif minimal de l&#39;entreprise. | [optional] |
| **effectif_max** | **Integer** | Effectif maximal de l&#39;entreprise. | [optional] |
| **tranche_effectif** | **String** | Tranche d&#39;effectif de l&#39;entreprise, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen#:~:text&#x3D;Cette%20variable%20correspond%20%C3%A0%20la,effectif%20salari%C3%A9%20de%20l&#39;entreprise.). | [optional] |
| **annee_effectif** | **Integer** | Année de validité des variables effectif, effectif_min et effectif_max. | [optional] |
| **capital** | **Float** | Capital de l&#39;entreprise. | [optional] |
| **statut_rcs** | **String** | Statut de l&#39;entreprise au RCS. Peut valoir \&quot;Inscrit\&quot;, \&quot;Non inscrit\&quot; ou \&quot;Radié\&quot;. | [optional] |
| **siege** | [**EtablissementFiche**](EtablissementFiche.md) |  | [optional] |
| **diffusable** | **Boolean** | Le statut de diffusion de l&#39;entreprise. Non diffusable correspond à une personne physique ayant demandé à être exclue de la diffusion. Aucune information n&#39;est alors disponible. Cette modalité n&#39;est visible que pour les organismes habilités au titre de l&#39;article R. 123-224 ou les administrations. | [optional] |
| **sigle** | **String** | Sigle de l&#39;entreprise si personne morale. | [optional] |
| **objet_social** | **String** | Objet social de l&#39;entreprise. | [optional] |
| **capital_formate** | **String** | Capital l&#39;entreprise au format xx xxx €. | [optional] |
| **capital_actuel_si_variable** | **String** | Capital actuel de l&#39;entreprise si variable. | [optional] |
| **devise_capital** | **String** | Devise de capital_formate et capital_actuel_si_variable. | [optional] |
| **numero_rcs** | **String** | Numéro RCS de l&#39;entreprise. | [optional] |
| **date_cloture_exercice** | **String** | Date de clôture d&#39;exercice de l&#39;entreprise. | [optional] |
| **date_cloture_exercice_exceptionnelle** | **String** | Date de clôture d&#39;exercice exceptionnel de l&#39;entreprise. | [optional] |
| **date_cloture_exercice_exceptionnelle_formate** | **String** | Date de clôture d&#39;exercice exceptionnel formatée de l&#39;entreprise. | [optional] |
| **prochaine_date_cloture_exercice** | **String** | Prochaine date de clôture d&#39;exercice de l&#39;entreprise. | [optional] |
| **prochaine_date_cloture_exercice_formate** | **String** | Prochaine date de clôture d&#39;exercice formatée de l&#39;entreprise. | [optional] |
| **economie_sociale_solidaire** | **Boolean** | Vrai si l&#39;entreprise est une entreprise de l&#39;économie sociale et solidaire. | [optional] |
| **duree_personne_morale** | **String** | Durée de la personne morale. | [optional] |
| **dernier_traitement** | **Date** | Date de dernier traitement de l&#39;entreprise. | [optional] |
| **derniere_mise_a_jour_sirene** | **Date** | Dernière mise à jour de la base de donnée sirène au format AAAA-MM-JJ. | [optional] |
| **derniere_mise_a_jour_rcs** | **Date** | Dernière mise à jour de la base de donnée RCS au format AAAA-MM-JJ. | [optional] |
| **greffe** | **String** | Greffe RCS de l&#39;entreprise. | [optional] |
| **code_greffe** | **String** | Code greffe RCS de l&#39;entreprise. | [optional] |
| **date_immatriculation_rcs** | **String** | Date d&#39;immatriculation de l&#39;entreprise au RCS. | [optional] |
| **date_premiere_immatriculation_rcs** | **String** | Date de la première immatriculation de l&#39;entreprise au RCS. | [optional] |
| **date_debut_activite** | **String** | Date de début d&#39;activité de l&#39;entreprise. | [optional] |
| **date_debut_premiere_activite** | **String** | Date de début d&#39;activité de l&#39;entreprise. | [optional] |
| **date_radiation_rcs** | **String** | Date de radiation de l&#39;entreprise au RCS. | [optional] |
| **numero_tva_intracommunautaire** | **String** | Numéro de TVA intracommunautaire de l&#39;entreprise. | [optional] |
| **validite_tva_intracommunautaire** | **Boolean** | Présent uniquement si le paramètre validite_tva_intracommunautaire a été mis à vrai.  Si vrai, le numéro de TVA intracommunautaire est valide. Si faux, il est invalide. Si null, la validité n&#39;a pas pu être vérifiée. | [optional] |
| **associe_unique** | **Boolean** | Si vrai, l&#39;entreprise est à associé unique (notamment pour les SASU et les EURL). | [optional] |
| **etablissements** | [**Array&lt;EtablissementFiche&gt;**](EtablissementFiche.md) | Liste des établissements de l&#39;entreprise. | [optional] |
| **finances** | **Array&lt;Object&gt;** | Liste des finances de l&#39;entreprise. | [optional] |
| **representants** | [**Array&lt;Representant&gt;**](Representant.md) | Liste des représentants de l&#39;entreprise. | [optional] |
| **beneficiaires_effectifs** | [**Array&lt;EntrepriseFicheAllOfBeneficiairesEffectifs&gt;**](EntrepriseFicheAllOfBeneficiairesEffectifs.md) | Liste des bénéficiaires effectifs de l&#39;entreprise (si disponibles). | [optional] |
| **depots_actes** | [**Array&lt;EntrepriseFicheAllOfDepotsActes&gt;**](EntrepriseFicheAllOfDepotsActes.md) | Liste des actes de l&#39;entreprise. | [optional] |
| **comptes** | [**Array&lt;EntrepriseFicheAllOfComptes&gt;**](EntrepriseFicheAllOfComptes.md) | Liste des comptes de l&#39;entreprise. | [optional] |
| **publications_bodacc** | [**Array&lt;Bodacc&gt;**](Bodacc.md) | Liste des publications au Bodacc de l&#39;entreprise. | [optional] |
| **procedures_collectives** | [**Array&lt;EntrepriseFicheAllOfProceduresCollectives&gt;**](EntrepriseFicheAllOfProceduresCollectives.md) | Liste des procédures collectives de l&#39;entreprise. | [optional] |
| **procedure_collective_existe** | **Boolean** | Vrai si l&#39;entreprise a des procédures collectives (en cours ou terminées), faux sinon. | [optional] |
| **procedure_collective_en_cours** | **Boolean** | Vrai si l&#39;entreprise a des procédures collectives en cours, faux sinon. | [optional] |
| **derniers_statuts** | [**EntrepriseFicheAllOfDerniersStatuts**](EntrepriseFicheAllOfDerniersStatuts.md) |  | [optional] |
| **extrait_immatriculation** | [**EntrepriseFicheAllOfExtraitImmatriculation**](EntrepriseFicheAllOfExtraitImmatriculation.md) |  | [optional] |
| **rnm** | [**EntrepriseFicheAllOfRnm**](EntrepriseFicheAllOfRnm.md) |  | [optional] |
| **marques** | [**Array&lt;EntrepriseFicheAllOfMarques&gt;**](EntrepriseFicheAllOfMarques.md) | Liste des marques françaises déposées par l&#39;entreprise. Uniquement présent si le paramètre \&quot;marques\&quot; a été mis à vrai. | [optional] |
| **association** | [**Association**](Association.md) |  | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::EntrepriseFiche.new(
  siren: 443061841,
  siren_formate: 443 061 841,
  nom_entreprise: GOOGLE FRANCE,
  personne_morale: null,
  denomination: GOOGLE FRANCE,
  nom: null,
  prenom: null,
  sexe: null,
  code_naf: 70.10Z,
  libelle_code_naf: Activités des sièges sociaux,
  domaine_activite: Activités des sièges sociaux ; conseil de gestion,
  conventions_collectives: null,
  date_creation: Thu May 16 02:00:00 CEST 2002,
  date_creation_formate: 16/05/2002,
  entreprise_cessee: null,
  date_cessation: 2002-05-16,
  entreprise_employeuse: null,
  categorie_juridique: 5499,
  forme_juridique: Société à responsabilité limitée (SARL),
  effectif: Entre 500 et 999 salariés,
  effectif_min: 500,
  effectif_max: 999,
  tranche_effectif: 41,
  annee_effectif: 2017,
  capital: 464884017,
  statut_rcs: Inscrit,
  siege: null,
  diffusable: null,
  sigle: null,
  objet_social: Fourniture de services et/ou conseils relatifs aux logiciels au réseau internet aux réseaux télématiques ou en ligne notamment L&#39;intermediation en matière de vente de publicité en ligne la promotion sous toutes ses formes de la publicité en ligne la promotion directe de produits et services et la mise en oeuvre de centres de traitement de l&#39;information,
  capital_formate: 464 884 017,00 €,
  capital_actuel_si_variable: null,
  devise_capital: Euros,
  numero_rcs: 464884017 R.C.S. Paris,
  date_cloture_exercice: null,
  date_cloture_exercice_exceptionnelle: null,
  date_cloture_exercice_exceptionnelle_formate: null,
  prochaine_date_cloture_exercice: null,
  prochaine_date_cloture_exercice_formate: null,
  economie_sociale_solidaire: null,
  duree_personne_morale: null,
  dernier_traitement: Thu Jul 09 02:00:00 CEST 2020,
  derniere_mise_a_jour_sirene: Thu Aug 13 02:00:00 CEST 2020,
  derniere_mise_a_jour_rcs: Thu Jun 25 02:00:00 CEST 2020,
  greffe: Paris,
  code_greffe: 7501,
  date_immatriculation_rcs: null,
  date_premiere_immatriculation_rcs: null,
  date_debut_activite: 2002-08-14,
  date_debut_premiere_activite: null,
  date_radiation_rcs: null,
  numero_tva_intracommunautaire: FR64443061841,
  validite_tva_intracommunautaire: true,
  associe_unique: null,
  etablissements: null,
  finances: null,
  representants: null,
  beneficiaires_effectifs: null,
  depots_actes: null,
  comptes: null,
  publications_bodacc: null,
  procedures_collectives: null,
  procedure_collective_existe: null,
  procedure_collective_en_cours: null,
  derniers_statuts: null,
  extrait_immatriculation: null,
  rnm: null,
  marques: null,
  association: null
)
```

