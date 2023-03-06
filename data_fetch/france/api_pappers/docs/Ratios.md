# OpenapiClient::Ratios

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **chiffre_affaires** | **Integer** | Chiffre d&#39;affaires de l&#39;entreprise. | [optional] |
| **resultat** | **Integer** | Résultat de l&#39;entreprise. | [optional] |
| **effectif** | **Integer** | Effectif de l&#39;entreprise. | [optional] |
| **marge_brute** | **Integer** | Marge brute de l&#39;entreprise. | [optional] |
| **excedent_brut_exploitation** | **Integer** | Excédent brut d&#39;exploitation (EBITDA) de l&#39;entreprise. | [optional] |
| **resultat_exploitation** | **Integer** | Résultat d&#39;exploitation (EBIT) de l&#39;entreprise. | [optional] |
| **taux_croissance_chiffre_affaires** | **Integer** | Taux de croissance du chiffre d&#39;affaires (en %) de l&#39;entreprise. | [optional] |
| **taux_marge_brute** | **Integer** | Taux de marge brute (en %) de l&#39;entreprise. | [optional] |
| **taux_marge_ebitda** | **Integer** | Taux de marge d&#39;EBITDA (en %) de l&#39;entreprise. | [optional] |
| **taux_marge_operationnelle** | **Integer** | Taux de marge opérationnelle (EBIT) (en %) de l&#39;entreprise. | [optional] |
| **bfr** | **Integer** | BFR (Besoin en fonds de roulement) de l&#39;entreprise. | [optional] |
| **bfr_exploitation** | **Integer** | BFR exploitation de l&#39;entreprise. | [optional] |
| **bfr_hors_exploitation** | **Integer** | BFR hors exploitation de l&#39;entreprise. | [optional] |
| **bfr_jours_ca** | **Integer** | BFR (en jours de CA) de l&#39;entreprise. | [optional] |
| **bfr_exploitation_jours_ca** | **Integer** | BFR exploitation (en jours de CA) de l&#39;entreprise. | [optional] |
| **bfr_hors_exploitation_jours_ca** | **Integer** | BFR hors exploitation (en jours de CA) de l&#39;entreprise. | [optional] |
| **delai_paiement_clients_jours** | **Integer** | Délai de paiement clients (en jours) de l&#39;entreprise. | [optional] |
| **delai_paiement_fournisseurs_jours** | **Integer** | Délai de paiement fournisseurs (en jours) de l&#39;entreprise. | [optional] |
| **ratio_stock_ca_jours** | **Integer** | Ratio des stocks / CA (en jours) de l&#39;entreprise. | [optional] |
| **capacite_autofinancement** | **Integer** | Capacité d&#39;autofinancement de l&#39;entreprise. | [optional] |
| **capacite_autofinancement_ca** | **Integer** | Capacité d&#39;autofinancement / CA (en %) de l&#39;entreprise. | [optional] |
| **fonds_roulement_net_global** | **Integer** | Fonds de roulement net global de l&#39;entreprise. | [optional] |
| **couverture_bfr** | **Integer** | Couverture du BFR de l&#39;entreprise. | [optional] |
| **tresorerie** | **Integer** | Trésorerie de l&#39;entreprise. | [optional] |
| **dettes_financieres** | **Integer** | Dettes financières de l&#39;entreprise. | [optional] |
| **capacite_remboursement** | **Integer** | Capacité de remboursement de l&#39;entreprise. | [optional] |
| **ratio_endettement** | **Integer** | Ratio d&#39;endettement (Gearing) de l&#39;entreprise. | [optional] |
| **autonomie_financiere** | **Integer** | Autonomie financière (en %) de l&#39;entreprise. | [optional] |
| **taux_levier** | **Integer** | Taux de levier (DFN/EBITDA) de l&#39;entreprise. | [optional] |
| **etat_dettes_1_an_au_plus** | **Integer** | Etat des dettes à 1 an au plus de l&#39;entreprise. | [optional] |
| **liquidite_generale** | **Integer** | Liquidité générale de l&#39;entreprise. | [optional] |
| **couverture_dettes** | **Integer** | Couverture des dettes de l&#39;entreprise. | [optional] |
| **marge_nette** | **Integer** | Marge nette (en %) de l&#39;entreprise. | [optional] |
| **rentabilite_fonds_propres** | **Integer** | Rentabilité sur fonds propres (en %) de l&#39;entreprise. | [optional] |
| **rentabilite_economique** | **Integer** | Rentabilité économique (en %) de l&#39;entreprise. | [optional] |
| **valeur_ajoutee** | **Integer** | Valeur ajoutée de l&#39;entreprise. | [optional] |
| **valeur_ajoutee_ca** | **Integer** | Valeur ajoutée / CA (en %) de l&#39;entreprise. | [optional] |
| **salaires_charges_sociales** | **Integer** | Salaires et charges sociales de l&#39;entreprise. | [optional] |
| **salaires_ca** | **Integer** | Salaires / CA (en %) de l&#39;entreprise. | [optional] |
| **impots_taxes** | **Integer** | Impôts et taxes de l&#39;entreprise. | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::Ratios.new(
  chiffre_affaires: 411016329,
  resultat: 29327087,
  effectif: 723,
  marge_brute: null,
  excedent_brut_exploitation: null,
  resultat_exploitation: null,
  taux_croissance_chiffre_affaires: null,
  taux_marge_brute: null,
  taux_marge_ebitda: null,
  taux_marge_operationnelle: null,
  bfr: null,
  bfr_exploitation: null,
  bfr_hors_exploitation: null,
  bfr_jours_ca: null,
  bfr_exploitation_jours_ca: null,
  bfr_hors_exploitation_jours_ca: null,
  delai_paiement_clients_jours: null,
  delai_paiement_fournisseurs_jours: null,
  ratio_stock_ca_jours: null,
  capacite_autofinancement: null,
  capacite_autofinancement_ca: null,
  fonds_roulement_net_global: null,
  couverture_bfr: null,
  tresorerie: null,
  dettes_financieres: null,
  capacite_remboursement: null,
  ratio_endettement: null,
  autonomie_financiere: null,
  taux_levier: null,
  etat_dettes_1_an_au_plus: null,
  liquidite_generale: null,
  couverture_dettes: null,
  marge_nette: null,
  rentabilite_fonds_propres: null,
  rentabilite_economique: null,
  valeur_ajoutee: null,
  valeur_ajoutee_ca: null,
  salaires_charges_sociales: null,
  salaires_ca: null,
  impots_taxes: null
)
```

