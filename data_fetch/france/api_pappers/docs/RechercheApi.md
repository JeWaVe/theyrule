# OpenapiClient::RechercheApi

All URIs are relative to *https://api.pappers.fr/v2*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**recherche**](RechercheApi.md#recherche) | **GET** /recherche | Recherche les entreprises qui correspondent à des critères. |
| [**recherche_beneficiaires**](RechercheApi.md#recherche_beneficiaires) | **GET** /recherche-beneficiaires | Recherche les bénéficiaires effectifs qui correspondent à des critères. |
| [**recherche_dirigeants**](RechercheApi.md#recherche_dirigeants) | **GET** /recherche-dirigeants | Recherche les dirigeants qui correspondent à des critères. |
| [**recherche_documents**](RechercheApi.md#recherche_documents) | **GET** /recherche-documents | Recherche les documents qui correspondent à des critères. |
| [**recherche_publications**](RechercheApi.md#recherche_publications) | **GET** /recherche-publications | Recherche les publications BODACC qui correspondent à des critères. |


## recherche

> <Recherche200Response> recherche(api_token, opts)

Recherche les entreprises qui correspondent à des critères.

Tous les paramètres sont optionnels et servent à filtrer la recherche. Les différentes entreprises seront renvoyées dans un tableau `resultats`, et le nombre total de résultats sera renvoyé dans le champ `total`.  Pour parcourir l'ensemble des résultats, deux solutions sont possibles :  - La pagination (paramètres `page` et `par_page`), limitée aux 400 premiers résultats ; - Les curseurs (paramètres `curseur` et `par_curseur`).  Cette route permet également le téléchargement d'un export des résultats de recherche au format xlsx, csv ou json. Il faut pour cela utiliser le paramètre `export`. 

### Examples

```ruby
require 'time'
require 'openapi_client'

api_instance = OpenapiClient::RechercheApi.new
api_token = 'votre_clé_ici' # String | Clé d'utilisation de l'API
opts = {
  page: 1, # Integer | Page de résultats. Valeur par défaut : `1`.
  par_page: 20, # Integer | Nombre de résultats affichés sur une page. Valeur par défaut : `10`.
  curseur: '*', # String | Curseur servant à parcourir l'ensemble des résultats (alternativement à la pagination qui est limitée à 400 résultats maximum). Doit valoir `*` pour la première requête, et doit pour les requêtes suivantes reprendre la valeur `curseurSuivant` retournée par la dernière réponse.
  par_curseur: 20, # Integer | Nombre de résultats affichés par curseur. Valeur par défaut : `50`. Valeur minimale: `1`. Valeur maximale : `1000`.
  bases: 'entreprises', # String | Bases de données dans lesquelles rechercher. Il est possible d'indiquer plusieurs bases en les séparant par des virgules. Valeur par défaut : `\"entreprises\"`.
  precision: 'approximative', # String | Niveau de précision de la recherche. Valeur par défaut : `\"standard\"`.
  export: 'xlsx', # String | Si ce champ est renseigné, la requête renverra directement un export de l'ensemble des résultats de la recherche.
  q: 'Google France', # String | Texte à rechercher. Dénomination pour une personne morale, nom et prénom pour une personne physique. Si vous recherchez dans plusieurs bases, ce paramètre sera utilisé pour rechercher dans toutes les bases.
  siege: 'true', # String | Défini si la requête se base sur le siège
  code_naf: '70.10Z', # String | Code NAF de l'entreprise. Il est possible d'indiquer plusieurs codes NAF en les séparant par des virgules.
  departement: '75', # String | Numéro de département de l'un des établissements de l'entreprise. Il est possible d'indiquer plusieurs départements en les séparant par des virgules.
  region: '11', # String | Code de la région de l'un des établissements de l'entreprise, selon la [nomenclature Insee](https://www.insee.fr/fr/information/4316069#titre-bloc-18). Il est possible d'indiquer plusieurs codes régions en les séparant par des virgules.
  code_postal: '75009', # String | Code postal de l'un des établissements de l'entreprise. Il est possible d'indiquer plusieurs codes postaux en les séparant par des virgules.
  convention_collective: '1486', # String | Convention collective de l'entreprise.
  categorie_juridique: '5499', # String | Catégorie juridique de l'entreprise, selon la [nomenclature Insee](https://www.insee.fr/fr/information/2028129).   **Note** : Le code correspond à celui de l'INSEE, à l'exception des SASU qui auront comme code 5720 et les EURL qui auront comme code 5498.
  entreprise_cessee: false, # Boolean | Activité de l'entreprise cessée ou non.
  statut_rcs: 'inscrit', # String | Statut au RCS
  objet_social: 'La conception de moteurs de recherche sur internet.', # String | Objet social de l'entreprise déclaré au RCS.
  date_immatriculation_rcs_min: '15-05-2002', # String | Date d'immatriculation au RCS minimale de l'entreprise, au format JJ-MM-AAAA.
  date_immatriculation_rcs_max: '15-05-2002', # String | d'immatriculation au RCS minimale de l'entreprise, au format JJ-MM-AAAA.
  date_radiation_rcs_min: '15-05-2002', # String | Date de radiation au RCS minimale de l'entreprise, au format JJ-MM-AAAA.
  date_radiation_rcs_max: '17-05-2002', # String | Date de radiation au RCS maximale de l'entreprise, au format JJ-MM-AAAA.
  capital_min: '411016200', # String | Capital minimum de l'entreprise.
  capital_max: '411016400', # String | Capital maximum de l'entreprise.
  chiffre_affaires_min: '411016200', # String | Chiffre d'affaires minimum de l'entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d'office toutes les entreprises dont les comptes ne sont pas publiés.
  chiffre_affaires_max: '411016400', # String | Chiffre d'affaires maximum de l'entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d'office toutes les entreprises dont les comptes ne sont pas publiés.
  resultat_min: '29327000', # String | Résultat minimum de l'entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d'office toutes les entreprises dont les comptes ne sont pas publiés.
  resultat_max: '29327100', # String | Résultat maximum de l'entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d'office toutes les entreprises dont les comptes ne sont pas publiés.
  date_creation_min: '15-05-2002', # String | Date de création minimale de l'entreprise, au format JJ-MM-AAAA.
  date_creation_max: '17-05-2002', # String | Date de création maximale de l'entreprise, au format JJ-MM-AAAA.
  tranche_effectif_min: '40', # String | Tranche d'effectifs minimale de l'entreprise, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen).  **Note** : 00 ou NN donneront les mêmes résultats et veulent dire non employeur
  tranche_effectif_max: '42', # String | Tranche d'effectifs maximale de l'entreprise, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen).  **Note** : 00 ou NN donneront les mêmes résultats et veulent dire non employeur
  type_dirigeant: 'personne physique', # String | Type du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).
  qualite_dirigeant: 'Administrateur', # String | Qualité du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).
  nationalite_dirigeant: 'Française', # String | Nationalité du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).
  prenom_dirigeant: 'Kenneth H.', # String | Prénom du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).
  age_dirigeant_min: 40, # Integer | Âge minimal du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).
  age_dirigeant_max: 42, # Integer | Âge maximal du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).
  date_de_naissance_dirigeant_min: Date.parse('Thu Jan 01 01:00:00 CET 1970'), # Date | Date de naissance minimale du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises), au format JJ-MM-AAAA.
  date_de_naissance_dirigeant_max: Date.parse('Thu Dec 31 01:00:00 CET 1970'), # Date | Date de naissance maximale du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises) de l'entreprise, au format JJ-MM-AAAA.
  age_beneficiaire_min: 40, # Integer | Âge minimal du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises).
  age_beneficiaire_max: 42, # Integer | Âge maximal du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises).
  date_de_naissance_beneficiaire_min: Date.parse('Thu Jan 01 01:00:00 CET 1970'), # Date | Date de naissance minimale du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises), au format JJ-MM-AAAA.
  date_de_naissance_beneficiaire_max: Date.parse('Thu Dec 31 01:00:00 CET 1970'), # Date | Date de naissance maximale du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises) de l'entreprise, au format JJ-MM-AAAA.
  nationalite_beneficiaire: 'Française', # String | Nationalité du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises).
  date_depot_document_min: Date.parse('Sat Jan 01 01:00:00 CET 2000'), # Date | Date de dépôt minimale du document, au format JJ-MM-AAAA.
  date_depot_document_max: Date.parse('Sun Dec 31 01:00:00 CET 2000'), # Date | Date de dépôt maximale du document, au format JJ-MM-AAAA.
  type_publication: 'Création', # String | Type de publication
  date_publication_min: Date.parse('Sat Jan 01 01:00:00 CET 2000'), # Date | Date publication minimale de la publication, au format JJ-MM-AAAA.
  date_publication_max: Date.parse('Sun Dec 31 01:00:00 CET 2000'), # Date | Date de publication maximale de la publication, au format JJ-MM-AAAA.
  siren: 'siren_example' # String | SIREN de l'entreprise.
}

begin
  # Recherche les entreprises qui correspondent à des critères.
  result = api_instance.recherche(api_token, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling RechercheApi->recherche: #{e}"
end
```

#### Using the recherche_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<Recherche200Response>, Integer, Hash)> recherche_with_http_info(api_token, opts)

```ruby
begin
  # Recherche les entreprises qui correspondent à des critères.
  data, status_code, headers = api_instance.recherche_with_http_info(api_token, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <Recherche200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling RechercheApi->recherche_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **api_token** | **String** | Clé d&#39;utilisation de l&#39;API |  |
| **page** | **Integer** | Page de résultats. Valeur par défaut : &#x60;1&#x60;. | [optional] |
| **par_page** | **Integer** | Nombre de résultats affichés sur une page. Valeur par défaut : &#x60;10&#x60;. | [optional] |
| **curseur** | **String** | Curseur servant à parcourir l&#39;ensemble des résultats (alternativement à la pagination qui est limitée à 400 résultats maximum). Doit valoir &#x60;*&#x60; pour la première requête, et doit pour les requêtes suivantes reprendre la valeur &#x60;curseurSuivant&#x60; retournée par la dernière réponse. | [optional] |
| **par_curseur** | **Integer** | Nombre de résultats affichés par curseur. Valeur par défaut : &#x60;50&#x60;. Valeur minimale: &#x60;1&#x60;. Valeur maximale : &#x60;1000&#x60;. | [optional] |
| **bases** | **String** | Bases de données dans lesquelles rechercher. Il est possible d&#39;indiquer plusieurs bases en les séparant par des virgules. Valeur par défaut : &#x60;\&quot;entreprises\&quot;&#x60;. | [optional] |
| **precision** | **String** | Niveau de précision de la recherche. Valeur par défaut : &#x60;\&quot;standard\&quot;&#x60;. | [optional] |
| **export** | **String** | Si ce champ est renseigné, la requête renverra directement un export de l&#39;ensemble des résultats de la recherche. | [optional] |
| **q** | **String** | Texte à rechercher. Dénomination pour une personne morale, nom et prénom pour une personne physique. Si vous recherchez dans plusieurs bases, ce paramètre sera utilisé pour rechercher dans toutes les bases. | [optional] |
| **siege** | **String** | Défini si la requête se base sur le siège | [optional] |
| **code_naf** | **String** | Code NAF de l&#39;entreprise. Il est possible d&#39;indiquer plusieurs codes NAF en les séparant par des virgules. | [optional] |
| **departement** | **String** | Numéro de département de l&#39;un des établissements de l&#39;entreprise. Il est possible d&#39;indiquer plusieurs départements en les séparant par des virgules. | [optional] |
| **region** | **String** | Code de la région de l&#39;un des établissements de l&#39;entreprise, selon la [nomenclature Insee](https://www.insee.fr/fr/information/4316069#titre-bloc-18). Il est possible d&#39;indiquer plusieurs codes régions en les séparant par des virgules. | [optional] |
| **code_postal** | **String** | Code postal de l&#39;un des établissements de l&#39;entreprise. Il est possible d&#39;indiquer plusieurs codes postaux en les séparant par des virgules. | [optional] |
| **convention_collective** | **String** | Convention collective de l&#39;entreprise. | [optional] |
| **categorie_juridique** | **String** | Catégorie juridique de l&#39;entreprise, selon la [nomenclature Insee](https://www.insee.fr/fr/information/2028129).   **Note** : Le code correspond à celui de l&#39;INSEE, à l&#39;exception des SASU qui auront comme code 5720 et les EURL qui auront comme code 5498. | [optional] |
| **entreprise_cessee** | **Boolean** | Activité de l&#39;entreprise cessée ou non. | [optional] |
| **statut_rcs** | **String** | Statut au RCS | [optional] |
| **objet_social** | **String** | Objet social de l&#39;entreprise déclaré au RCS. | [optional] |
| **date_immatriculation_rcs_min** | **String** | Date d&#39;immatriculation au RCS minimale de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] |
| **date_immatriculation_rcs_max** | **String** | d&#39;immatriculation au RCS minimale de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] |
| **date_radiation_rcs_min** | **String** | Date de radiation au RCS minimale de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] |
| **date_radiation_rcs_max** | **String** | Date de radiation au RCS maximale de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] |
| **capital_min** | **String** | Capital minimum de l&#39;entreprise. | [optional] |
| **capital_max** | **String** | Capital maximum de l&#39;entreprise. | [optional] |
| **chiffre_affaires_min** | **String** | Chiffre d&#39;affaires minimum de l&#39;entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d&#39;office toutes les entreprises dont les comptes ne sont pas publiés. | [optional] |
| **chiffre_affaires_max** | **String** | Chiffre d&#39;affaires maximum de l&#39;entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d&#39;office toutes les entreprises dont les comptes ne sont pas publiés. | [optional] |
| **resultat_min** | **String** | Résultat minimum de l&#39;entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d&#39;office toutes les entreprises dont les comptes ne sont pas publiés. | [optional] |
| **resultat_max** | **String** | Résultat maximum de l&#39;entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d&#39;office toutes les entreprises dont les comptes ne sont pas publiés. | [optional] |
| **date_creation_min** | **String** | Date de création minimale de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] |
| **date_creation_max** | **String** | Date de création maximale de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] |
| **tranche_effectif_min** | **String** | Tranche d&#39;effectifs minimale de l&#39;entreprise, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen).  **Note** : 00 ou NN donneront les mêmes résultats et veulent dire non employeur | [optional] |
| **tranche_effectif_max** | **String** | Tranche d&#39;effectifs maximale de l&#39;entreprise, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen).  **Note** : 00 ou NN donneront les mêmes résultats et veulent dire non employeur | [optional] |
| **type_dirigeant** | **String** | Type du dirigeant (ou de l&#39;un des dirigeants de l&#39;entreprise pour une recherche d&#39;entreprises). | [optional] |
| **qualite_dirigeant** | **String** | Qualité du dirigeant (ou de l&#39;un des dirigeants de l&#39;entreprise pour une recherche d&#39;entreprises). | [optional] |
| **nationalite_dirigeant** | **String** | Nationalité du dirigeant (ou de l&#39;un des dirigeants de l&#39;entreprise pour une recherche d&#39;entreprises). | [optional] |
| **prenom_dirigeant** | **String** | Prénom du dirigeant (ou de l&#39;un des dirigeants de l&#39;entreprise pour une recherche d&#39;entreprises). | [optional] |
| **age_dirigeant_min** | **Integer** | Âge minimal du dirigeant (ou de l&#39;un des dirigeants de l&#39;entreprise pour une recherche d&#39;entreprises). | [optional] |
| **age_dirigeant_max** | **Integer** | Âge maximal du dirigeant (ou de l&#39;un des dirigeants de l&#39;entreprise pour une recherche d&#39;entreprises). | [optional] |
| **date_de_naissance_dirigeant_min** | **Date** | Date de naissance minimale du dirigeant (ou de l&#39;un des dirigeants de l&#39;entreprise pour une recherche d&#39;entreprises), au format JJ-MM-AAAA. | [optional] |
| **date_de_naissance_dirigeant_max** | **Date** | Date de naissance maximale du dirigeant (ou de l&#39;un des dirigeants de l&#39;entreprise pour une recherche d&#39;entreprises) de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] |
| **age_beneficiaire_min** | **Integer** | Âge minimal du bénéficiaire effectif (ou de l&#39;un des bénéficiaires effectifs de l&#39;entreprise pour une recherche d&#39;entreprises). | [optional] |
| **age_beneficiaire_max** | **Integer** | Âge maximal du bénéficiaire effectif (ou de l&#39;un des bénéficiaires effectifs de l&#39;entreprise pour une recherche d&#39;entreprises). | [optional] |
| **date_de_naissance_beneficiaire_min** | **Date** | Date de naissance minimale du bénéficiaire effectif (ou de l&#39;un des bénéficiaires effectifs de l&#39;entreprise pour une recherche d&#39;entreprises), au format JJ-MM-AAAA. | [optional] |
| **date_de_naissance_beneficiaire_max** | **Date** | Date de naissance maximale du bénéficiaire effectif (ou de l&#39;un des bénéficiaires effectifs de l&#39;entreprise pour une recherche d&#39;entreprises) de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] |
| **nationalite_beneficiaire** | **String** | Nationalité du bénéficiaire effectif (ou de l&#39;un des bénéficiaires effectifs de l&#39;entreprise pour une recherche d&#39;entreprises). | [optional] |
| **date_depot_document_min** | **Date** | Date de dépôt minimale du document, au format JJ-MM-AAAA. | [optional] |
| **date_depot_document_max** | **Date** | Date de dépôt maximale du document, au format JJ-MM-AAAA. | [optional] |
| **type_publication** | **String** | Type de publication | [optional] |
| **date_publication_min** | **Date** | Date publication minimale de la publication, au format JJ-MM-AAAA. | [optional] |
| **date_publication_max** | **Date** | Date de publication maximale de la publication, au format JJ-MM-AAAA. | [optional] |
| **siren** | **String** | SIREN de l&#39;entreprise. | [optional] |

### Return type

[**Recherche200Response**](Recherche200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## recherche_beneficiaires

> <RechercheBeneficiaires200Response> recherche_beneficiaires(api_token, opts)

Recherche les bénéficiaires effectifs qui correspondent à des critères.

Tous les paramètres sont optionnels et servent à filtrer la recherche. Les différents bénéficiaires effectifs seront renvoyées dans un tableau `resultats`.

### Examples

```ruby
require 'time'
require 'openapi_client'

api_instance = OpenapiClient::RechercheApi.new
api_token = 'votre_clé_ici' # String | Clé d'utilisation de l'API
opts = {
  par_page: 20, # Integer | Nombre de résultats affichés sur une page. Valeur par défaut : `10`.
  page: 1, # Integer | Page de résultats. Valeur par défaut : `1`.
  precision: 'approximative', # String | Niveau de précision de la recherche. Valeur par défaut : `\"standard\"`.
  q: 'Xavier Niel', # String | Nom et/ou prénom du bénéficiaire effectif.
  age_beneficiaire_min: 40, # Integer | Âge minimal du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises).
  age_beneficiaire_max: 42, # Integer | Âge maximal du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises).
  date_de_naissance_beneficiaire_min: Date.parse('Thu Jan 01 01:00:00 CET 1970'), # Date | Date de naissance minimale du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises), au format JJ-MM-AAAA.
  date_de_naissance_beneficiaire_max: Date.parse('Thu Dec 31 01:00:00 CET 1970'), # Date | Date de naissance maximale du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises) de l'entreprise, au format JJ-MM-AAAA.
  nationalite_beneficiaire: 'Française', # String | Nationalité du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises).
  code_naf: '70.10Z', # String | Code NAF de l'entreprise. Il est possible d'indiquer plusieurs codes NAF en les séparant par des virgules.
  departement: '75', # String | Numéro de département de l'un des établissements de l'entreprise. Il est possible d'indiquer plusieurs départements en les séparant par des virgules.
  region: '11', # String | Code de la région de l'un des établissements de l'entreprise, selon la [nomenclature Insee](https://www.insee.fr/fr/information/4316069#titre-bloc-18). Il est possible d'indiquer plusieurs codes régions en les séparant par des virgules.
  code_postal: '75009', # String | Code postal de l'un des établissements de l'entreprise. Il est possible d'indiquer plusieurs codes postaux en les séparant par des virgules.
  convention_collective: '1486', # String | Convention collective de l'entreprise.
  categorie_juridique: '5499', # String | Catégorie juridique de l'entreprise, selon la [nomenclature Insee](https://www.insee.fr/fr/information/2028129).   **Note** : Le code correspond à celui de l'INSEE, à l'exception des SASU qui auront comme code 5720 et les EURL qui auront comme code 5498.
  entreprise_cessee: false, # Boolean | Activité de l'entreprise cessée ou non.
  statut_rcs: 'inscrit', # String | Statut au RCS
  objet_social: 'La conception de moteurs de recherche sur internet.', # String | Objet social de l'entreprise déclaré au RCS.
  date_immatriculation_rcs_min: '15-05-2002', # String | Date d'immatriculation au RCS minimale de l'entreprise, au format JJ-MM-AAAA.
  date_immatriculation_rcs_max: '15-05-2002', # String | d'immatriculation au RCS minimale de l'entreprise, au format JJ-MM-AAAA.
  date_radiation_rcs_min: '15-05-2002', # String | Date de radiation au RCS minimale de l'entreprise, au format JJ-MM-AAAA.
  date_radiation_rcs_max: '17-05-2002', # String | Date de radiation au RCS maximale de l'entreprise, au format JJ-MM-AAAA.
  capital_min: '411016200', # String | Capital minimum de l'entreprise.
  capital_max: '411016400', # String | Capital maximum de l'entreprise.
  chiffre_affaires_min: '411016200', # String | Chiffre d'affaires minimum de l'entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d'office toutes les entreprises dont les comptes ne sont pas publiés.
  chiffre_affaires_max: '411016400', # String | Chiffre d'affaires maximum de l'entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d'office toutes les entreprises dont les comptes ne sont pas publiés.
  resultat_min: '29327000', # String | Résultat minimum de l'entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d'office toutes les entreprises dont les comptes ne sont pas publiés.
  resultat_max: '29327100', # String | Résultat maximum de l'entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d'office toutes les entreprises dont les comptes ne sont pas publiés.
  date_creation_min: '15-05-2002', # String | Date de création minimale de l'entreprise, au format JJ-MM-AAAA.
  date_creation_max: '17-05-2002', # String | Date de création maximale de l'entreprise, au format JJ-MM-AAAA.
  tranche_effectif_min: '40', # String | Tranche d'effectifs minimale de l'entreprise, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen).  **Note** : 00 ou NN donneront les mêmes résultats et veulent dire non employeur
  tranche_effectif_max: '42', # String | Tranche d'effectifs maximale de l'entreprise, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen).  **Note** : 00 ou NN donneront les mêmes résultats et veulent dire non employeur
  type_dirigeant: 'personne physique', # String | Type du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).
  qualite_dirigeant: 'Administrateur', # String | Qualité du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).
  nationalite_dirigeant: 'Française', # String | Nationalité du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).
  prenom_dirigeant: 'Kenneth H.', # String | Prénom du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).
  age_dirigeant_min: 40, # Integer | Âge minimal du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).
  age_dirigeant_max: 42, # Integer | Âge maximal du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).
  date_de_naissance_dirigeant_min: Date.parse('Thu Jan 01 01:00:00 CET 1970'), # Date | Date de naissance minimale du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises), au format JJ-MM-AAAA.
  date_de_naissance_dirigeant_max: Date.parse('Thu Dec 31 01:00:00 CET 1970'), # Date | Date de naissance maximale du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises) de l'entreprise, au format JJ-MM-AAAA.
  date_depot_document_min: Date.parse('Sat Jan 01 01:00:00 CET 2000'), # Date | Date de dépôt minimale du document, au format JJ-MM-AAAA.
  date_depot_document_max: Date.parse('Sun Dec 31 01:00:00 CET 2000'), # Date | Date de dépôt maximale du document, au format JJ-MM-AAAA.
  type_publication: 'Création', # String | Type de publication
  date_publication_min: Date.parse('Sat Jan 01 01:00:00 CET 2000'), # Date | Date publication minimale de la publication, au format JJ-MM-AAAA.
  date_publication_max: Date.parse('Sun Dec 31 01:00:00 CET 2000'), # Date | Date de publication maximale de la publication, au format JJ-MM-AAAA.
  siren: 'siren_example' # String | SIREN de l'entreprise.
}

begin
  # Recherche les bénéficiaires effectifs qui correspondent à des critères.
  result = api_instance.recherche_beneficiaires(api_token, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling RechercheApi->recherche_beneficiaires: #{e}"
end
```

#### Using the recherche_beneficiaires_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<RechercheBeneficiaires200Response>, Integer, Hash)> recherche_beneficiaires_with_http_info(api_token, opts)

```ruby
begin
  # Recherche les bénéficiaires effectifs qui correspondent à des critères.
  data, status_code, headers = api_instance.recherche_beneficiaires_with_http_info(api_token, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <RechercheBeneficiaires200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling RechercheApi->recherche_beneficiaires_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **api_token** | **String** | Clé d&#39;utilisation de l&#39;API |  |
| **par_page** | **Integer** | Nombre de résultats affichés sur une page. Valeur par défaut : &#x60;10&#x60;. | [optional] |
| **page** | **Integer** | Page de résultats. Valeur par défaut : &#x60;1&#x60;. | [optional] |
| **precision** | **String** | Niveau de précision de la recherche. Valeur par défaut : &#x60;\&quot;standard\&quot;&#x60;. | [optional] |
| **q** | **String** | Nom et/ou prénom du bénéficiaire effectif. | [optional] |
| **age_beneficiaire_min** | **Integer** | Âge minimal du bénéficiaire effectif (ou de l&#39;un des bénéficiaires effectifs de l&#39;entreprise pour une recherche d&#39;entreprises). | [optional] |
| **age_beneficiaire_max** | **Integer** | Âge maximal du bénéficiaire effectif (ou de l&#39;un des bénéficiaires effectifs de l&#39;entreprise pour une recherche d&#39;entreprises). | [optional] |
| **date_de_naissance_beneficiaire_min** | **Date** | Date de naissance minimale du bénéficiaire effectif (ou de l&#39;un des bénéficiaires effectifs de l&#39;entreprise pour une recherche d&#39;entreprises), au format JJ-MM-AAAA. | [optional] |
| **date_de_naissance_beneficiaire_max** | **Date** | Date de naissance maximale du bénéficiaire effectif (ou de l&#39;un des bénéficiaires effectifs de l&#39;entreprise pour une recherche d&#39;entreprises) de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] |
| **nationalite_beneficiaire** | **String** | Nationalité du bénéficiaire effectif (ou de l&#39;un des bénéficiaires effectifs de l&#39;entreprise pour une recherche d&#39;entreprises). | [optional] |
| **code_naf** | **String** | Code NAF de l&#39;entreprise. Il est possible d&#39;indiquer plusieurs codes NAF en les séparant par des virgules. | [optional] |
| **departement** | **String** | Numéro de département de l&#39;un des établissements de l&#39;entreprise. Il est possible d&#39;indiquer plusieurs départements en les séparant par des virgules. | [optional] |
| **region** | **String** | Code de la région de l&#39;un des établissements de l&#39;entreprise, selon la [nomenclature Insee](https://www.insee.fr/fr/information/4316069#titre-bloc-18). Il est possible d&#39;indiquer plusieurs codes régions en les séparant par des virgules. | [optional] |
| **code_postal** | **String** | Code postal de l&#39;un des établissements de l&#39;entreprise. Il est possible d&#39;indiquer plusieurs codes postaux en les séparant par des virgules. | [optional] |
| **convention_collective** | **String** | Convention collective de l&#39;entreprise. | [optional] |
| **categorie_juridique** | **String** | Catégorie juridique de l&#39;entreprise, selon la [nomenclature Insee](https://www.insee.fr/fr/information/2028129).   **Note** : Le code correspond à celui de l&#39;INSEE, à l&#39;exception des SASU qui auront comme code 5720 et les EURL qui auront comme code 5498. | [optional] |
| **entreprise_cessee** | **Boolean** | Activité de l&#39;entreprise cessée ou non. | [optional] |
| **statut_rcs** | **String** | Statut au RCS | [optional] |
| **objet_social** | **String** | Objet social de l&#39;entreprise déclaré au RCS. | [optional] |
| **date_immatriculation_rcs_min** | **String** | Date d&#39;immatriculation au RCS minimale de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] |
| **date_immatriculation_rcs_max** | **String** | d&#39;immatriculation au RCS minimale de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] |
| **date_radiation_rcs_min** | **String** | Date de radiation au RCS minimale de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] |
| **date_radiation_rcs_max** | **String** | Date de radiation au RCS maximale de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] |
| **capital_min** | **String** | Capital minimum de l&#39;entreprise. | [optional] |
| **capital_max** | **String** | Capital maximum de l&#39;entreprise. | [optional] |
| **chiffre_affaires_min** | **String** | Chiffre d&#39;affaires minimum de l&#39;entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d&#39;office toutes les entreprises dont les comptes ne sont pas publiés. | [optional] |
| **chiffre_affaires_max** | **String** | Chiffre d&#39;affaires maximum de l&#39;entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d&#39;office toutes les entreprises dont les comptes ne sont pas publiés. | [optional] |
| **resultat_min** | **String** | Résultat minimum de l&#39;entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d&#39;office toutes les entreprises dont les comptes ne sont pas publiés. | [optional] |
| **resultat_max** | **String** | Résultat maximum de l&#39;entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d&#39;office toutes les entreprises dont les comptes ne sont pas publiés. | [optional] |
| **date_creation_min** | **String** | Date de création minimale de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] |
| **date_creation_max** | **String** | Date de création maximale de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] |
| **tranche_effectif_min** | **String** | Tranche d&#39;effectifs minimale de l&#39;entreprise, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen).  **Note** : 00 ou NN donneront les mêmes résultats et veulent dire non employeur | [optional] |
| **tranche_effectif_max** | **String** | Tranche d&#39;effectifs maximale de l&#39;entreprise, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen).  **Note** : 00 ou NN donneront les mêmes résultats et veulent dire non employeur | [optional] |
| **type_dirigeant** | **String** | Type du dirigeant (ou de l&#39;un des dirigeants de l&#39;entreprise pour une recherche d&#39;entreprises). | [optional] |
| **qualite_dirigeant** | **String** | Qualité du dirigeant (ou de l&#39;un des dirigeants de l&#39;entreprise pour une recherche d&#39;entreprises). | [optional] |
| **nationalite_dirigeant** | **String** | Nationalité du dirigeant (ou de l&#39;un des dirigeants de l&#39;entreprise pour une recherche d&#39;entreprises). | [optional] |
| **prenom_dirigeant** | **String** | Prénom du dirigeant (ou de l&#39;un des dirigeants de l&#39;entreprise pour une recherche d&#39;entreprises). | [optional] |
| **age_dirigeant_min** | **Integer** | Âge minimal du dirigeant (ou de l&#39;un des dirigeants de l&#39;entreprise pour une recherche d&#39;entreprises). | [optional] |
| **age_dirigeant_max** | **Integer** | Âge maximal du dirigeant (ou de l&#39;un des dirigeants de l&#39;entreprise pour une recherche d&#39;entreprises). | [optional] |
| **date_de_naissance_dirigeant_min** | **Date** | Date de naissance minimale du dirigeant (ou de l&#39;un des dirigeants de l&#39;entreprise pour une recherche d&#39;entreprises), au format JJ-MM-AAAA. | [optional] |
| **date_de_naissance_dirigeant_max** | **Date** | Date de naissance maximale du dirigeant (ou de l&#39;un des dirigeants de l&#39;entreprise pour une recherche d&#39;entreprises) de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] |
| **date_depot_document_min** | **Date** | Date de dépôt minimale du document, au format JJ-MM-AAAA. | [optional] |
| **date_depot_document_max** | **Date** | Date de dépôt maximale du document, au format JJ-MM-AAAA. | [optional] |
| **type_publication** | **String** | Type de publication | [optional] |
| **date_publication_min** | **Date** | Date publication minimale de la publication, au format JJ-MM-AAAA. | [optional] |
| **date_publication_max** | **Date** | Date de publication maximale de la publication, au format JJ-MM-AAAA. | [optional] |
| **siren** | **String** | SIREN de l&#39;entreprise. | [optional] |

### Return type

[**RechercheBeneficiaires200Response**](RechercheBeneficiaires200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## recherche_dirigeants

> <RechercheDirigeants200Response> recherche_dirigeants(api_token, opts)

Recherche les dirigeants qui correspondent à des critères.

Tous les paramètres sont optionnels et servent à filtrer la recherche. Les différents dirigeants seront renvoyées dans un tableau `resultats`.

### Examples

```ruby
require 'time'
require 'openapi_client'

api_instance = OpenapiClient::RechercheApi.new
api_token = 'votre_clé_ici' # String | Clé d'utilisation de l'API
opts = {
  par_page: 20, # Integer | Nombre de résultats affichés sur une page. Valeur par défaut : `10`.
  page: 1, # Integer | Page de résultats. Valeur par défaut : `1`.
  precision: 'approximative', # String | Niveau de précision de la recherche. Valeur par défaut : `\"standard\"`.
  q: 'Google France', # String | Texte à rechercher. Nom et prénom du dirigeant pour une personne physique, dénomination pour une personne morale.
  type_dirigeant: 'personne physique', # String | Type du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).
  qualite_dirigeant: 'Administrateur', # String | Qualité du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).
  nationalite_dirigeant: 'Française', # String | Nationalité du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).
  prenom_dirigeant: 'Kenneth H.', # String | Prénom du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).
  age_dirigeant_min: 40, # Integer | Âge minimal du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).
  age_dirigeant_max: 42, # Integer | Âge maximal du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).
  date_de_naissance_dirigeant_min: Date.parse('Thu Jan 01 01:00:00 CET 1970'), # Date | Date de naissance minimale du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises), au format JJ-MM-AAAA.
  date_de_naissance_dirigeant_max: Date.parse('Thu Dec 31 01:00:00 CET 1970'), # Date | Date de naissance maximale du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises) de l'entreprise, au format JJ-MM-AAAA.
  code_naf: '70.10Z', # String | Code NAF de l'entreprise. Il est possible d'indiquer plusieurs codes NAF en les séparant par des virgules.
  departement: '75', # String | Numéro de département de l'un des établissements de l'entreprise. Il est possible d'indiquer plusieurs départements en les séparant par des virgules.
  region: '11', # String | Code de la région de l'un des établissements de l'entreprise, selon la [nomenclature Insee](https://www.insee.fr/fr/information/4316069#titre-bloc-18). Il est possible d'indiquer plusieurs codes régions en les séparant par des virgules.
  code_postal: '75009', # String | Code postal de l'un des établissements de l'entreprise. Il est possible d'indiquer plusieurs codes postaux en les séparant par des virgules.
  convention_collective: '1486', # String | Convention collective de l'entreprise.
  categorie_juridique: '5499', # String | Catégorie juridique de l'entreprise, selon la [nomenclature Insee](https://www.insee.fr/fr/information/2028129).   **Note** : Le code correspond à celui de l'INSEE, à l'exception des SASU qui auront comme code 5720 et les EURL qui auront comme code 5498.
  entreprise_cessee: false, # Boolean | Activité de l'entreprise cessée ou non.
  statut_rcs: 'inscrit', # String | Statut au RCS
  objet_social: 'La conception de moteurs de recherche sur internet.', # String | Objet social de l'entreprise déclaré au RCS.
  date_immatriculation_rcs_min: '15-05-2002', # String | Date d'immatriculation au RCS minimale de l'entreprise, au format JJ-MM-AAAA.
  date_immatriculation_rcs_max: '15-05-2002', # String | d'immatriculation au RCS minimale de l'entreprise, au format JJ-MM-AAAA.
  date_radiation_rcs_min: '15-05-2002', # String | Date de radiation au RCS minimale de l'entreprise, au format JJ-MM-AAAA.
  date_radiation_rcs_max: '17-05-2002', # String | Date de radiation au RCS maximale de l'entreprise, au format JJ-MM-AAAA.
  capital_min: '411016200', # String | Capital minimum de l'entreprise.
  capital_max: '411016400', # String | Capital maximum de l'entreprise.
  chiffre_affaires_min: '411016200', # String | Chiffre d'affaires minimum de l'entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d'office toutes les entreprises dont les comptes ne sont pas publiés.
  chiffre_affaires_max: '411016400', # String | Chiffre d'affaires maximum de l'entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d'office toutes les entreprises dont les comptes ne sont pas publiés.
  resultat_min: '29327000', # String | Résultat minimum de l'entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d'office toutes les entreprises dont les comptes ne sont pas publiés.
  resultat_max: '29327100', # String | Résultat maximum de l'entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d'office toutes les entreprises dont les comptes ne sont pas publiés.
  date_creation_min: '15-05-2002', # String | Date de création minimale de l'entreprise, au format JJ-MM-AAAA.
  date_creation_max: '17-05-2002', # String | Date de création maximale de l'entreprise, au format JJ-MM-AAAA.
  tranche_effectif_min: '40', # String | Tranche d'effectifs minimale de l'entreprise, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen).  **Note** : 00 ou NN donneront les mêmes résultats et veulent dire non employeur
  tranche_effectif_max: '42', # String | Tranche d'effectifs maximale de l'entreprise, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen).  **Note** : 00 ou NN donneront les mêmes résultats et veulent dire non employeur
  age_beneficiaire_min: 40, # Integer | Âge minimal du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises).
  age_beneficiaire_max: 42, # Integer | Âge maximal du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises).
  date_de_naissance_beneficiaire_min: Date.parse('Thu Jan 01 01:00:00 CET 1970'), # Date | Date de naissance minimale du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises), au format JJ-MM-AAAA.
  date_de_naissance_beneficiaire_max: Date.parse('Thu Dec 31 01:00:00 CET 1970'), # Date | Date de naissance maximale du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises) de l'entreprise, au format JJ-MM-AAAA.
  nationalite_beneficiaire: 'Française', # String | Nationalité du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises).
  date_depot_document_min: Date.parse('Sat Jan 01 01:00:00 CET 2000'), # Date | Date de dépôt minimale du document, au format JJ-MM-AAAA.
  date_depot_document_max: Date.parse('Sun Dec 31 01:00:00 CET 2000'), # Date | Date de dépôt maximale du document, au format JJ-MM-AAAA.
  type_publication: 'Création', # String | Type de publication
  date_publication_min: Date.parse('Sat Jan 01 01:00:00 CET 2000'), # Date | Date publication minimale de la publication, au format JJ-MM-AAAA.
  date_publication_max: Date.parse('Sun Dec 31 01:00:00 CET 2000'), # Date | Date de publication maximale de la publication, au format JJ-MM-AAAA.
  siren: 'siren_example' # String | SIREN de l'entreprise.
}

begin
  # Recherche les dirigeants qui correspondent à des critères.
  result = api_instance.recherche_dirigeants(api_token, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling RechercheApi->recherche_dirigeants: #{e}"
end
```

#### Using the recherche_dirigeants_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<RechercheDirigeants200Response>, Integer, Hash)> recherche_dirigeants_with_http_info(api_token, opts)

```ruby
begin
  # Recherche les dirigeants qui correspondent à des critères.
  data, status_code, headers = api_instance.recherche_dirigeants_with_http_info(api_token, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <RechercheDirigeants200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling RechercheApi->recherche_dirigeants_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **api_token** | **String** | Clé d&#39;utilisation de l&#39;API |  |
| **par_page** | **Integer** | Nombre de résultats affichés sur une page. Valeur par défaut : &#x60;10&#x60;. | [optional] |
| **page** | **Integer** | Page de résultats. Valeur par défaut : &#x60;1&#x60;. | [optional] |
| **precision** | **String** | Niveau de précision de la recherche. Valeur par défaut : &#x60;\&quot;standard\&quot;&#x60;. | [optional] |
| **q** | **String** | Texte à rechercher. Nom et prénom du dirigeant pour une personne physique, dénomination pour une personne morale. | [optional] |
| **type_dirigeant** | **String** | Type du dirigeant (ou de l&#39;un des dirigeants de l&#39;entreprise pour une recherche d&#39;entreprises). | [optional] |
| **qualite_dirigeant** | **String** | Qualité du dirigeant (ou de l&#39;un des dirigeants de l&#39;entreprise pour une recherche d&#39;entreprises). | [optional] |
| **nationalite_dirigeant** | **String** | Nationalité du dirigeant (ou de l&#39;un des dirigeants de l&#39;entreprise pour une recherche d&#39;entreprises). | [optional] |
| **prenom_dirigeant** | **String** | Prénom du dirigeant (ou de l&#39;un des dirigeants de l&#39;entreprise pour une recherche d&#39;entreprises). | [optional] |
| **age_dirigeant_min** | **Integer** | Âge minimal du dirigeant (ou de l&#39;un des dirigeants de l&#39;entreprise pour une recherche d&#39;entreprises). | [optional] |
| **age_dirigeant_max** | **Integer** | Âge maximal du dirigeant (ou de l&#39;un des dirigeants de l&#39;entreprise pour une recherche d&#39;entreprises). | [optional] |
| **date_de_naissance_dirigeant_min** | **Date** | Date de naissance minimale du dirigeant (ou de l&#39;un des dirigeants de l&#39;entreprise pour une recherche d&#39;entreprises), au format JJ-MM-AAAA. | [optional] |
| **date_de_naissance_dirigeant_max** | **Date** | Date de naissance maximale du dirigeant (ou de l&#39;un des dirigeants de l&#39;entreprise pour une recherche d&#39;entreprises) de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] |
| **code_naf** | **String** | Code NAF de l&#39;entreprise. Il est possible d&#39;indiquer plusieurs codes NAF en les séparant par des virgules. | [optional] |
| **departement** | **String** | Numéro de département de l&#39;un des établissements de l&#39;entreprise. Il est possible d&#39;indiquer plusieurs départements en les séparant par des virgules. | [optional] |
| **region** | **String** | Code de la région de l&#39;un des établissements de l&#39;entreprise, selon la [nomenclature Insee](https://www.insee.fr/fr/information/4316069#titre-bloc-18). Il est possible d&#39;indiquer plusieurs codes régions en les séparant par des virgules. | [optional] |
| **code_postal** | **String** | Code postal de l&#39;un des établissements de l&#39;entreprise. Il est possible d&#39;indiquer plusieurs codes postaux en les séparant par des virgules. | [optional] |
| **convention_collective** | **String** | Convention collective de l&#39;entreprise. | [optional] |
| **categorie_juridique** | **String** | Catégorie juridique de l&#39;entreprise, selon la [nomenclature Insee](https://www.insee.fr/fr/information/2028129).   **Note** : Le code correspond à celui de l&#39;INSEE, à l&#39;exception des SASU qui auront comme code 5720 et les EURL qui auront comme code 5498. | [optional] |
| **entreprise_cessee** | **Boolean** | Activité de l&#39;entreprise cessée ou non. | [optional] |
| **statut_rcs** | **String** | Statut au RCS | [optional] |
| **objet_social** | **String** | Objet social de l&#39;entreprise déclaré au RCS. | [optional] |
| **date_immatriculation_rcs_min** | **String** | Date d&#39;immatriculation au RCS minimale de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] |
| **date_immatriculation_rcs_max** | **String** | d&#39;immatriculation au RCS minimale de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] |
| **date_radiation_rcs_min** | **String** | Date de radiation au RCS minimale de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] |
| **date_radiation_rcs_max** | **String** | Date de radiation au RCS maximale de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] |
| **capital_min** | **String** | Capital minimum de l&#39;entreprise. | [optional] |
| **capital_max** | **String** | Capital maximum de l&#39;entreprise. | [optional] |
| **chiffre_affaires_min** | **String** | Chiffre d&#39;affaires minimum de l&#39;entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d&#39;office toutes les entreprises dont les comptes ne sont pas publiés. | [optional] |
| **chiffre_affaires_max** | **String** | Chiffre d&#39;affaires maximum de l&#39;entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d&#39;office toutes les entreprises dont les comptes ne sont pas publiés. | [optional] |
| **resultat_min** | **String** | Résultat minimum de l&#39;entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d&#39;office toutes les entreprises dont les comptes ne sont pas publiés. | [optional] |
| **resultat_max** | **String** | Résultat maximum de l&#39;entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d&#39;office toutes les entreprises dont les comptes ne sont pas publiés. | [optional] |
| **date_creation_min** | **String** | Date de création minimale de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] |
| **date_creation_max** | **String** | Date de création maximale de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] |
| **tranche_effectif_min** | **String** | Tranche d&#39;effectifs minimale de l&#39;entreprise, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen).  **Note** : 00 ou NN donneront les mêmes résultats et veulent dire non employeur | [optional] |
| **tranche_effectif_max** | **String** | Tranche d&#39;effectifs maximale de l&#39;entreprise, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen).  **Note** : 00 ou NN donneront les mêmes résultats et veulent dire non employeur | [optional] |
| **age_beneficiaire_min** | **Integer** | Âge minimal du bénéficiaire effectif (ou de l&#39;un des bénéficiaires effectifs de l&#39;entreprise pour une recherche d&#39;entreprises). | [optional] |
| **age_beneficiaire_max** | **Integer** | Âge maximal du bénéficiaire effectif (ou de l&#39;un des bénéficiaires effectifs de l&#39;entreprise pour une recherche d&#39;entreprises). | [optional] |
| **date_de_naissance_beneficiaire_min** | **Date** | Date de naissance minimale du bénéficiaire effectif (ou de l&#39;un des bénéficiaires effectifs de l&#39;entreprise pour une recherche d&#39;entreprises), au format JJ-MM-AAAA. | [optional] |
| **date_de_naissance_beneficiaire_max** | **Date** | Date de naissance maximale du bénéficiaire effectif (ou de l&#39;un des bénéficiaires effectifs de l&#39;entreprise pour une recherche d&#39;entreprises) de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] |
| **nationalite_beneficiaire** | **String** | Nationalité du bénéficiaire effectif (ou de l&#39;un des bénéficiaires effectifs de l&#39;entreprise pour une recherche d&#39;entreprises). | [optional] |
| **date_depot_document_min** | **Date** | Date de dépôt minimale du document, au format JJ-MM-AAAA. | [optional] |
| **date_depot_document_max** | **Date** | Date de dépôt maximale du document, au format JJ-MM-AAAA. | [optional] |
| **type_publication** | **String** | Type de publication | [optional] |
| **date_publication_min** | **Date** | Date publication minimale de la publication, au format JJ-MM-AAAA. | [optional] |
| **date_publication_max** | **Date** | Date de publication maximale de la publication, au format JJ-MM-AAAA. | [optional] |
| **siren** | **String** | SIREN de l&#39;entreprise. | [optional] |

### Return type

[**RechercheDirigeants200Response**](RechercheDirigeants200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## recherche_documents

> <RechercheDocuments200Response> recherche_documents(api_token, opts)

Recherche les documents qui correspondent à des critères.

Tous les paramètres sont optionnels et servent à filtrer la recherche. Les différents documents seront renvoyées dans un tableau `resultats`.

### Examples

```ruby
require 'time'
require 'openapi_client'

api_instance = OpenapiClient::RechercheApi.new
api_token = 'votre_clé_ici' # String | Clé d'utilisation de l'API
opts = {
  par_page: 20, # Integer | Nombre de résultats affichés sur une page. Valeur par défaut : `10`.
  page: 1, # Integer | Page de résultats. Valeur par défaut : `1`.
  precision: 'approximative', # String | Niveau de précision de la recherche. Valeur par défaut : `\"standard\"`.
  q: 'Rémunération', # String | Mot-clé à rechercher dans le contenu du document.
  date_depot_document_min: Date.parse('Sat Jan 01 01:00:00 CET 2000'), # Date | Date de dépôt minimale du document, au format JJ-MM-AAAA.
  date_depot_document_max: Date.parse('Sun Dec 31 01:00:00 CET 2000'), # Date | Date de dépôt maximale du document, au format JJ-MM-AAAA.
  code_naf: '70.10Z', # String | Code NAF de l'entreprise. Il est possible d'indiquer plusieurs codes NAF en les séparant par des virgules.
  departement: '75', # String | Numéro de département de l'un des établissements de l'entreprise. Il est possible d'indiquer plusieurs départements en les séparant par des virgules.
  region: '11', # String | Code de la région de l'un des établissements de l'entreprise, selon la [nomenclature Insee](https://www.insee.fr/fr/information/4316069#titre-bloc-18). Il est possible d'indiquer plusieurs codes régions en les séparant par des virgules.
  code_postal: '75009', # String | Code postal de l'un des établissements de l'entreprise. Il est possible d'indiquer plusieurs codes postaux en les séparant par des virgules.
  convention_collective: '1486', # String | Convention collective de l'entreprise.
  categorie_juridique: '5499', # String | Catégorie juridique de l'entreprise, selon la [nomenclature Insee](https://www.insee.fr/fr/information/2028129).   **Note** : Le code correspond à celui de l'INSEE, à l'exception des SASU qui auront comme code 5720 et les EURL qui auront comme code 5498.
  entreprise_cessee: false, # Boolean | Activité de l'entreprise cessée ou non.
  statut_rcs: 'inscrit', # String | Statut au RCS
  objet_social: 'La conception de moteurs de recherche sur internet.', # String | Objet social de l'entreprise déclaré au RCS.
  date_immatriculation_rcs_min: '15-05-2002', # String | Date d'immatriculation au RCS minimale de l'entreprise, au format JJ-MM-AAAA.
  date_immatriculation_rcs_max: '15-05-2002', # String | d'immatriculation au RCS minimale de l'entreprise, au format JJ-MM-AAAA.
  date_radiation_rcs_min: '15-05-2002', # String | Date de radiation au RCS minimale de l'entreprise, au format JJ-MM-AAAA.
  date_radiation_rcs_max: '17-05-2002', # String | Date de radiation au RCS maximale de l'entreprise, au format JJ-MM-AAAA.
  capital_min: '411016200', # String | Capital minimum de l'entreprise.
  capital_max: '411016400', # String | Capital maximum de l'entreprise.
  chiffre_affaires_min: '411016200', # String | Chiffre d'affaires minimum de l'entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d'office toutes les entreprises dont les comptes ne sont pas publiés.
  chiffre_affaires_max: '411016400', # String | Chiffre d'affaires maximum de l'entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d'office toutes les entreprises dont les comptes ne sont pas publiés.
  resultat_min: '29327000', # String | Résultat minimum de l'entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d'office toutes les entreprises dont les comptes ne sont pas publiés.
  resultat_max: '29327100', # String | Résultat maximum de l'entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d'office toutes les entreprises dont les comptes ne sont pas publiés.
  date_creation_min: '15-05-2002', # String | Date de création minimale de l'entreprise, au format JJ-MM-AAAA.
  date_creation_max: '17-05-2002', # String | Date de création maximale de l'entreprise, au format JJ-MM-AAAA.
  tranche_effectif_min: '40', # String | Tranche d'effectifs minimale de l'entreprise, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen).  **Note** : 00 ou NN donneront les mêmes résultats et veulent dire non employeur
  tranche_effectif_max: '42', # String | Tranche d'effectifs maximale de l'entreprise, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen).  **Note** : 00 ou NN donneront les mêmes résultats et veulent dire non employeur
  type_dirigeant: 'personne physique', # String | Type du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).
  qualite_dirigeant: 'Administrateur', # String | Qualité du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).
  nationalite_dirigeant: 'Française', # String | Nationalité du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).
  prenom_dirigeant: 'Kenneth H.', # String | Prénom du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).
  age_dirigeant_min: 40, # Integer | Âge minimal du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).
  age_dirigeant_max: 42, # Integer | Âge maximal du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).
  date_de_naissance_dirigeant_min: Date.parse('Thu Jan 01 01:00:00 CET 1970'), # Date | Date de naissance minimale du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises), au format JJ-MM-AAAA.
  date_de_naissance_dirigeant_max: Date.parse('Thu Dec 31 01:00:00 CET 1970'), # Date | Date de naissance maximale du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises) de l'entreprise, au format JJ-MM-AAAA.
  age_beneficiaire_min: 40, # Integer | Âge minimal du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises).
  age_beneficiaire_max: 42, # Integer | Âge maximal du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises).
  date_de_naissance_beneficiaire_min: Date.parse('Thu Jan 01 01:00:00 CET 1970'), # Date | Date de naissance minimale du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises), au format JJ-MM-AAAA.
  date_de_naissance_beneficiaire_max: Date.parse('Thu Dec 31 01:00:00 CET 1970'), # Date | Date de naissance maximale du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises) de l'entreprise, au format JJ-MM-AAAA.
  nationalite_beneficiaire: 'Française', # String | Nationalité du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises).
  type_publication: 'Création', # String | Type de publication
  date_publication_min: Date.parse('Sat Jan 01 01:00:00 CET 2000'), # Date | Date publication minimale de la publication, au format JJ-MM-AAAA.
  date_publication_max: Date.parse('Sun Dec 31 01:00:00 CET 2000'), # Date | Date de publication maximale de la publication, au format JJ-MM-AAAA.
  siren: 'siren_example' # String | SIREN de l'entreprise.
}

begin
  # Recherche les documents qui correspondent à des critères.
  result = api_instance.recherche_documents(api_token, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling RechercheApi->recherche_documents: #{e}"
end
```

#### Using the recherche_documents_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<RechercheDocuments200Response>, Integer, Hash)> recherche_documents_with_http_info(api_token, opts)

```ruby
begin
  # Recherche les documents qui correspondent à des critères.
  data, status_code, headers = api_instance.recherche_documents_with_http_info(api_token, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <RechercheDocuments200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling RechercheApi->recherche_documents_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **api_token** | **String** | Clé d&#39;utilisation de l&#39;API |  |
| **par_page** | **Integer** | Nombre de résultats affichés sur une page. Valeur par défaut : &#x60;10&#x60;. | [optional] |
| **page** | **Integer** | Page de résultats. Valeur par défaut : &#x60;1&#x60;. | [optional] |
| **precision** | **String** | Niveau de précision de la recherche. Valeur par défaut : &#x60;\&quot;standard\&quot;&#x60;. | [optional] |
| **q** | **String** | Mot-clé à rechercher dans le contenu du document. | [optional] |
| **date_depot_document_min** | **Date** | Date de dépôt minimale du document, au format JJ-MM-AAAA. | [optional] |
| **date_depot_document_max** | **Date** | Date de dépôt maximale du document, au format JJ-MM-AAAA. | [optional] |
| **code_naf** | **String** | Code NAF de l&#39;entreprise. Il est possible d&#39;indiquer plusieurs codes NAF en les séparant par des virgules. | [optional] |
| **departement** | **String** | Numéro de département de l&#39;un des établissements de l&#39;entreprise. Il est possible d&#39;indiquer plusieurs départements en les séparant par des virgules. | [optional] |
| **region** | **String** | Code de la région de l&#39;un des établissements de l&#39;entreprise, selon la [nomenclature Insee](https://www.insee.fr/fr/information/4316069#titre-bloc-18). Il est possible d&#39;indiquer plusieurs codes régions en les séparant par des virgules. | [optional] |
| **code_postal** | **String** | Code postal de l&#39;un des établissements de l&#39;entreprise. Il est possible d&#39;indiquer plusieurs codes postaux en les séparant par des virgules. | [optional] |
| **convention_collective** | **String** | Convention collective de l&#39;entreprise. | [optional] |
| **categorie_juridique** | **String** | Catégorie juridique de l&#39;entreprise, selon la [nomenclature Insee](https://www.insee.fr/fr/information/2028129).   **Note** : Le code correspond à celui de l&#39;INSEE, à l&#39;exception des SASU qui auront comme code 5720 et les EURL qui auront comme code 5498. | [optional] |
| **entreprise_cessee** | **Boolean** | Activité de l&#39;entreprise cessée ou non. | [optional] |
| **statut_rcs** | **String** | Statut au RCS | [optional] |
| **objet_social** | **String** | Objet social de l&#39;entreprise déclaré au RCS. | [optional] |
| **date_immatriculation_rcs_min** | **String** | Date d&#39;immatriculation au RCS minimale de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] |
| **date_immatriculation_rcs_max** | **String** | d&#39;immatriculation au RCS minimale de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] |
| **date_radiation_rcs_min** | **String** | Date de radiation au RCS minimale de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] |
| **date_radiation_rcs_max** | **String** | Date de radiation au RCS maximale de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] |
| **capital_min** | **String** | Capital minimum de l&#39;entreprise. | [optional] |
| **capital_max** | **String** | Capital maximum de l&#39;entreprise. | [optional] |
| **chiffre_affaires_min** | **String** | Chiffre d&#39;affaires minimum de l&#39;entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d&#39;office toutes les entreprises dont les comptes ne sont pas publiés. | [optional] |
| **chiffre_affaires_max** | **String** | Chiffre d&#39;affaires maximum de l&#39;entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d&#39;office toutes les entreprises dont les comptes ne sont pas publiés. | [optional] |
| **resultat_min** | **String** | Résultat minimum de l&#39;entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d&#39;office toutes les entreprises dont les comptes ne sont pas publiés. | [optional] |
| **resultat_max** | **String** | Résultat maximum de l&#39;entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d&#39;office toutes les entreprises dont les comptes ne sont pas publiés. | [optional] |
| **date_creation_min** | **String** | Date de création minimale de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] |
| **date_creation_max** | **String** | Date de création maximale de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] |
| **tranche_effectif_min** | **String** | Tranche d&#39;effectifs minimale de l&#39;entreprise, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen).  **Note** : 00 ou NN donneront les mêmes résultats et veulent dire non employeur | [optional] |
| **tranche_effectif_max** | **String** | Tranche d&#39;effectifs maximale de l&#39;entreprise, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen).  **Note** : 00 ou NN donneront les mêmes résultats et veulent dire non employeur | [optional] |
| **type_dirigeant** | **String** | Type du dirigeant (ou de l&#39;un des dirigeants de l&#39;entreprise pour une recherche d&#39;entreprises). | [optional] |
| **qualite_dirigeant** | **String** | Qualité du dirigeant (ou de l&#39;un des dirigeants de l&#39;entreprise pour une recherche d&#39;entreprises). | [optional] |
| **nationalite_dirigeant** | **String** | Nationalité du dirigeant (ou de l&#39;un des dirigeants de l&#39;entreprise pour une recherche d&#39;entreprises). | [optional] |
| **prenom_dirigeant** | **String** | Prénom du dirigeant (ou de l&#39;un des dirigeants de l&#39;entreprise pour une recherche d&#39;entreprises). | [optional] |
| **age_dirigeant_min** | **Integer** | Âge minimal du dirigeant (ou de l&#39;un des dirigeants de l&#39;entreprise pour une recherche d&#39;entreprises). | [optional] |
| **age_dirigeant_max** | **Integer** | Âge maximal du dirigeant (ou de l&#39;un des dirigeants de l&#39;entreprise pour une recherche d&#39;entreprises). | [optional] |
| **date_de_naissance_dirigeant_min** | **Date** | Date de naissance minimale du dirigeant (ou de l&#39;un des dirigeants de l&#39;entreprise pour une recherche d&#39;entreprises), au format JJ-MM-AAAA. | [optional] |
| **date_de_naissance_dirigeant_max** | **Date** | Date de naissance maximale du dirigeant (ou de l&#39;un des dirigeants de l&#39;entreprise pour une recherche d&#39;entreprises) de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] |
| **age_beneficiaire_min** | **Integer** | Âge minimal du bénéficiaire effectif (ou de l&#39;un des bénéficiaires effectifs de l&#39;entreprise pour une recherche d&#39;entreprises). | [optional] |
| **age_beneficiaire_max** | **Integer** | Âge maximal du bénéficiaire effectif (ou de l&#39;un des bénéficiaires effectifs de l&#39;entreprise pour une recherche d&#39;entreprises). | [optional] |
| **date_de_naissance_beneficiaire_min** | **Date** | Date de naissance minimale du bénéficiaire effectif (ou de l&#39;un des bénéficiaires effectifs de l&#39;entreprise pour une recherche d&#39;entreprises), au format JJ-MM-AAAA. | [optional] |
| **date_de_naissance_beneficiaire_max** | **Date** | Date de naissance maximale du bénéficiaire effectif (ou de l&#39;un des bénéficiaires effectifs de l&#39;entreprise pour une recherche d&#39;entreprises) de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] |
| **nationalite_beneficiaire** | **String** | Nationalité du bénéficiaire effectif (ou de l&#39;un des bénéficiaires effectifs de l&#39;entreprise pour une recherche d&#39;entreprises). | [optional] |
| **type_publication** | **String** | Type de publication | [optional] |
| **date_publication_min** | **Date** | Date publication minimale de la publication, au format JJ-MM-AAAA. | [optional] |
| **date_publication_max** | **Date** | Date de publication maximale de la publication, au format JJ-MM-AAAA. | [optional] |
| **siren** | **String** | SIREN de l&#39;entreprise. | [optional] |

### Return type

[**RechercheDocuments200Response**](RechercheDocuments200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## recherche_publications

> <RecherchePublications200Response> recherche_publications(api_token, opts)

Recherche les publications BODACC qui correspondent à des critères.

Tous les paramètres sont optionnels et servent à filtrer la recherche. Les différentes publications seront renvoyées dans un tableau `resultats`.

### Examples

```ruby
require 'time'
require 'openapi_client'

api_instance = OpenapiClient::RechercheApi.new
api_token = 'votre_clé_ici' # String | Clé d'utilisation de l'API
opts = {
  par_page: 20, # Integer | Nombre de résultats affichés sur une page. Valeur par défaut : `10`.
  page: 1, # Integer | Page de résultats. Valeur par défaut : `1`.
  precision: 'approximative', # String | Niveau de précision de la recherche. Valeur par défaut : `\"standard\"`.
  q: 'Liquidation', # String | Mot-clé à rechercher dans le contenu de la publication.
  code_naf: '70.10Z', # String | Code NAF de l'entreprise. Il est possible d'indiquer plusieurs codes NAF en les séparant par des virgules.
  departement: '75', # String | Numéro de département de l'un des établissements de l'entreprise. Il est possible d'indiquer plusieurs départements en les séparant par des virgules.
  region: '11', # String | Code de la région de l'un des établissements de l'entreprise, selon la [nomenclature Insee](https://www.insee.fr/fr/information/4316069#titre-bloc-18). Il est possible d'indiquer plusieurs codes régions en les séparant par des virgules.
  code_postal: '75009', # String | Code postal de l'un des établissements de l'entreprise. Il est possible d'indiquer plusieurs codes postaux en les séparant par des virgules.
  convention_collective: '1486', # String | Convention collective de l'entreprise.
  categorie_juridique: '5499', # String | Catégorie juridique de l'entreprise, selon la [nomenclature Insee](https://www.insee.fr/fr/information/2028129).   **Note** : Le code correspond à celui de l'INSEE, à l'exception des SASU qui auront comme code 5720 et les EURL qui auront comme code 5498.
  entreprise_cessee: false, # Boolean | Activité de l'entreprise cessée ou non.
  statut_rcs: 'inscrit', # String | Statut au RCS
  objet_social: 'La conception de moteurs de recherche sur internet.', # String | Objet social de l'entreprise déclaré au RCS.
  date_immatriculation_rcs_min: '15-05-2002', # String | Date d'immatriculation au RCS minimale de l'entreprise, au format JJ-MM-AAAA.
  date_immatriculation_rcs_max: '15-05-2002', # String | d'immatriculation au RCS minimale de l'entreprise, au format JJ-MM-AAAA.
  date_radiation_rcs_min: '15-05-2002', # String | Date de radiation au RCS minimale de l'entreprise, au format JJ-MM-AAAA.
  date_radiation_rcs_max: '17-05-2002', # String | Date de radiation au RCS maximale de l'entreprise, au format JJ-MM-AAAA.
  capital_min: '411016200', # String | Capital minimum de l'entreprise.
  capital_max: '411016400', # String | Capital maximum de l'entreprise.
  chiffre_affaires_min: '411016200', # String | Chiffre d'affaires minimum de l'entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d'office toutes les entreprises dont les comptes ne sont pas publiés.
  chiffre_affaires_max: '411016400', # String | Chiffre d'affaires maximum de l'entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d'office toutes les entreprises dont les comptes ne sont pas publiés.
  resultat_min: '29327000', # String | Résultat minimum de l'entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d'office toutes les entreprises dont les comptes ne sont pas publiés.
  resultat_max: '29327100', # String | Résultat maximum de l'entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d'office toutes les entreprises dont les comptes ne sont pas publiés.
  date_creation_min: '15-05-2002', # String | Date de création minimale de l'entreprise, au format JJ-MM-AAAA.
  date_creation_max: '17-05-2002', # String | Date de création maximale de l'entreprise, au format JJ-MM-AAAA.
  tranche_effectif_min: '40', # String | Tranche d'effectifs minimale de l'entreprise, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen).  **Note** : 00 ou NN donneront les mêmes résultats et veulent dire non employeur
  tranche_effectif_max: '42', # String | Tranche d'effectifs maximale de l'entreprise, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen).  **Note** : 00 ou NN donneront les mêmes résultats et veulent dire non employeur
  type_dirigeant: 'personne physique', # String | Type du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).
  qualite_dirigeant: 'Administrateur', # String | Qualité du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).
  nationalite_dirigeant: 'Française', # String | Nationalité du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).
  prenom_dirigeant: 'Kenneth H.', # String | Prénom du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).
  age_dirigeant_min: 40, # Integer | Âge minimal du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).
  age_dirigeant_max: 42, # Integer | Âge maximal du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises).
  date_de_naissance_dirigeant_min: Date.parse('Thu Jan 01 01:00:00 CET 1970'), # Date | Date de naissance minimale du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises), au format JJ-MM-AAAA.
  date_de_naissance_dirigeant_max: Date.parse('Thu Dec 31 01:00:00 CET 1970'), # Date | Date de naissance maximale du dirigeant (ou de l'un des dirigeants de l'entreprise pour une recherche d'entreprises) de l'entreprise, au format JJ-MM-AAAA.
  age_beneficiaire_min: 40, # Integer | Âge minimal du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises).
  age_beneficiaire_max: 42, # Integer | Âge maximal du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises).
  date_de_naissance_beneficiaire_min: Date.parse('Thu Jan 01 01:00:00 CET 1970'), # Date | Date de naissance minimale du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises), au format JJ-MM-AAAA.
  date_de_naissance_beneficiaire_max: Date.parse('Thu Dec 31 01:00:00 CET 1970'), # Date | Date de naissance maximale du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises) de l'entreprise, au format JJ-MM-AAAA.
  nationalite_beneficiaire: 'Française', # String | Nationalité du bénéficiaire effectif (ou de l'un des bénéficiaires effectifs de l'entreprise pour une recherche d'entreprises).
  date_depot_document_min: Date.parse('Sat Jan 01 01:00:00 CET 2000'), # Date | Date de dépôt minimale du document, au format JJ-MM-AAAA.
  date_depot_document_max: Date.parse('Sun Dec 31 01:00:00 CET 2000'), # Date | Date de dépôt maximale du document, au format JJ-MM-AAAA.
  type_publication: 'Création', # String | Type de publication
  date_publication_min: Date.parse('Sat Jan 01 01:00:00 CET 2000'), # Date | Date publication minimale de la publication, au format JJ-MM-AAAA.
  date_publication_max: Date.parse('Sun Dec 31 01:00:00 CET 2000'), # Date | Date de publication maximale de la publication, au format JJ-MM-AAAA.
  siren: 'siren_example' # String | SIREN de l'entreprise.
}

begin
  # Recherche les publications BODACC qui correspondent à des critères.
  result = api_instance.recherche_publications(api_token, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling RechercheApi->recherche_publications: #{e}"
end
```

#### Using the recherche_publications_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<RecherchePublications200Response>, Integer, Hash)> recherche_publications_with_http_info(api_token, opts)

```ruby
begin
  # Recherche les publications BODACC qui correspondent à des critères.
  data, status_code, headers = api_instance.recherche_publications_with_http_info(api_token, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <RecherchePublications200Response>
rescue OpenapiClient::ApiError => e
  puts "Error when calling RechercheApi->recherche_publications_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **api_token** | **String** | Clé d&#39;utilisation de l&#39;API |  |
| **par_page** | **Integer** | Nombre de résultats affichés sur une page. Valeur par défaut : &#x60;10&#x60;. | [optional] |
| **page** | **Integer** | Page de résultats. Valeur par défaut : &#x60;1&#x60;. | [optional] |
| **precision** | **String** | Niveau de précision de la recherche. Valeur par défaut : &#x60;\&quot;standard\&quot;&#x60;. | [optional] |
| **q** | **String** | Mot-clé à rechercher dans le contenu de la publication. | [optional] |
| **code_naf** | **String** | Code NAF de l&#39;entreprise. Il est possible d&#39;indiquer plusieurs codes NAF en les séparant par des virgules. | [optional] |
| **departement** | **String** | Numéro de département de l&#39;un des établissements de l&#39;entreprise. Il est possible d&#39;indiquer plusieurs départements en les séparant par des virgules. | [optional] |
| **region** | **String** | Code de la région de l&#39;un des établissements de l&#39;entreprise, selon la [nomenclature Insee](https://www.insee.fr/fr/information/4316069#titre-bloc-18). Il est possible d&#39;indiquer plusieurs codes régions en les séparant par des virgules. | [optional] |
| **code_postal** | **String** | Code postal de l&#39;un des établissements de l&#39;entreprise. Il est possible d&#39;indiquer plusieurs codes postaux en les séparant par des virgules. | [optional] |
| **convention_collective** | **String** | Convention collective de l&#39;entreprise. | [optional] |
| **categorie_juridique** | **String** | Catégorie juridique de l&#39;entreprise, selon la [nomenclature Insee](https://www.insee.fr/fr/information/2028129).   **Note** : Le code correspond à celui de l&#39;INSEE, à l&#39;exception des SASU qui auront comme code 5720 et les EURL qui auront comme code 5498. | [optional] |
| **entreprise_cessee** | **Boolean** | Activité de l&#39;entreprise cessée ou non. | [optional] |
| **statut_rcs** | **String** | Statut au RCS | [optional] |
| **objet_social** | **String** | Objet social de l&#39;entreprise déclaré au RCS. | [optional] |
| **date_immatriculation_rcs_min** | **String** | Date d&#39;immatriculation au RCS minimale de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] |
| **date_immatriculation_rcs_max** | **String** | d&#39;immatriculation au RCS minimale de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] |
| **date_radiation_rcs_min** | **String** | Date de radiation au RCS minimale de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] |
| **date_radiation_rcs_max** | **String** | Date de radiation au RCS maximale de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] |
| **capital_min** | **String** | Capital minimum de l&#39;entreprise. | [optional] |
| **capital_max** | **String** | Capital maximum de l&#39;entreprise. | [optional] |
| **chiffre_affaires_min** | **String** | Chiffre d&#39;affaires minimum de l&#39;entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d&#39;office toutes les entreprises dont les comptes ne sont pas publiés. | [optional] |
| **chiffre_affaires_max** | **String** | Chiffre d&#39;affaires maximum de l&#39;entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d&#39;office toutes les entreprises dont les comptes ne sont pas publiés. | [optional] |
| **resultat_min** | **String** | Résultat minimum de l&#39;entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d&#39;office toutes les entreprises dont les comptes ne sont pas publiés. | [optional] |
| **resultat_max** | **String** | Résultat maximum de l&#39;entreprise.  **Note** : Filtrer sur ce critère restreint énormément les entreprises retournées car cela élimine d&#39;office toutes les entreprises dont les comptes ne sont pas publiés. | [optional] |
| **date_creation_min** | **String** | Date de création minimale de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] |
| **date_creation_max** | **String** | Date de création maximale de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] |
| **tranche_effectif_min** | **String** | Tranche d&#39;effectifs minimale de l&#39;entreprise, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen).  **Note** : 00 ou NN donneront les mêmes résultats et veulent dire non employeur | [optional] |
| **tranche_effectif_max** | **String** | Tranche d&#39;effectifs maximale de l&#39;entreprise, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen).  **Note** : 00 ou NN donneront les mêmes résultats et veulent dire non employeur | [optional] |
| **type_dirigeant** | **String** | Type du dirigeant (ou de l&#39;un des dirigeants de l&#39;entreprise pour une recherche d&#39;entreprises). | [optional] |
| **qualite_dirigeant** | **String** | Qualité du dirigeant (ou de l&#39;un des dirigeants de l&#39;entreprise pour une recherche d&#39;entreprises). | [optional] |
| **nationalite_dirigeant** | **String** | Nationalité du dirigeant (ou de l&#39;un des dirigeants de l&#39;entreprise pour une recherche d&#39;entreprises). | [optional] |
| **prenom_dirigeant** | **String** | Prénom du dirigeant (ou de l&#39;un des dirigeants de l&#39;entreprise pour une recherche d&#39;entreprises). | [optional] |
| **age_dirigeant_min** | **Integer** | Âge minimal du dirigeant (ou de l&#39;un des dirigeants de l&#39;entreprise pour une recherche d&#39;entreprises). | [optional] |
| **age_dirigeant_max** | **Integer** | Âge maximal du dirigeant (ou de l&#39;un des dirigeants de l&#39;entreprise pour une recherche d&#39;entreprises). | [optional] |
| **date_de_naissance_dirigeant_min** | **Date** | Date de naissance minimale du dirigeant (ou de l&#39;un des dirigeants de l&#39;entreprise pour une recherche d&#39;entreprises), au format JJ-MM-AAAA. | [optional] |
| **date_de_naissance_dirigeant_max** | **Date** | Date de naissance maximale du dirigeant (ou de l&#39;un des dirigeants de l&#39;entreprise pour une recherche d&#39;entreprises) de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] |
| **age_beneficiaire_min** | **Integer** | Âge minimal du bénéficiaire effectif (ou de l&#39;un des bénéficiaires effectifs de l&#39;entreprise pour une recherche d&#39;entreprises). | [optional] |
| **age_beneficiaire_max** | **Integer** | Âge maximal du bénéficiaire effectif (ou de l&#39;un des bénéficiaires effectifs de l&#39;entreprise pour une recherche d&#39;entreprises). | [optional] |
| **date_de_naissance_beneficiaire_min** | **Date** | Date de naissance minimale du bénéficiaire effectif (ou de l&#39;un des bénéficiaires effectifs de l&#39;entreprise pour une recherche d&#39;entreprises), au format JJ-MM-AAAA. | [optional] |
| **date_de_naissance_beneficiaire_max** | **Date** | Date de naissance maximale du bénéficiaire effectif (ou de l&#39;un des bénéficiaires effectifs de l&#39;entreprise pour une recherche d&#39;entreprises) de l&#39;entreprise, au format JJ-MM-AAAA. | [optional] |
| **nationalite_beneficiaire** | **String** | Nationalité du bénéficiaire effectif (ou de l&#39;un des bénéficiaires effectifs de l&#39;entreprise pour une recherche d&#39;entreprises). | [optional] |
| **date_depot_document_min** | **Date** | Date de dépôt minimale du document, au format JJ-MM-AAAA. | [optional] |
| **date_depot_document_max** | **Date** | Date de dépôt maximale du document, au format JJ-MM-AAAA. | [optional] |
| **type_publication** | **String** | Type de publication | [optional] |
| **date_publication_min** | **Date** | Date publication minimale de la publication, au format JJ-MM-AAAA. | [optional] |
| **date_publication_max** | **Date** | Date de publication maximale de la publication, au format JJ-MM-AAAA. | [optional] |
| **siren** | **String** | SIREN de l&#39;entreprise. | [optional] |

### Return type

[**RecherchePublications200Response**](RecherchePublications200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

