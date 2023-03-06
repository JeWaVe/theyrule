# OpenapiClient::Recherche200ResponseResultatsInnerAllOf

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **dirigeants** | [**Array&lt;RepresentantRecherche&gt;**](RepresentantRecherche.md) | Dirigeants de l&#39;entreprise qui correspondent à la recherche (si vous recherchez dans la base dirigeants). | [optional] |
| **beneficiaires** | [**Array&lt;Beneficiaire&gt;**](Beneficiaire.md) | Bénéficiaires effectifs de l&#39;entreprise qui correspondent à la recherche (si vous recherchez dans la base bénéficiaires effectifs). | [optional] |
| **documents** | [**Array&lt;Document&gt;**](Document.md) | Documents de l&#39;entreprise qui correspondent à la recherche (si vous recherchez dans la base documents). | [optional] |
| **publications** | [**Array&lt;Recherche200ResponseResultatsInnerAllOfPublicationsInner&gt;**](Recherche200ResponseResultatsInnerAllOfPublicationsInner.md) | Publications de l&#39;entreprise qui correspondent à la recherche (si vous recherchez dans la base publications). | [optional] |
| **nb_dirigeants_total** | **Integer** | Nombre de dirigeants total de l&#39;entreprise. | [optional] |
| **nb_beneficiaires_total** | **Integer** | Nombre de bénéficiaires effectifs total de l&#39;entreprise. | [optional] |
| **nb_documents_avec_mentions** | **Integer** | Nombre de documents de l&#39;entreprise qui correspondent à la recherche. | [optional] |
| **nb_documents_total** | **Integer** | Nombre de documents total de l&#39;entreprise. | [optional] |
| **nb_publications_avec_mentions** | **Integer** | Nombre de publications de l&#39;entreprise qui correspondent à la recherche. | [optional] |
| **nb_publications_total** | **Integer** | Nombre de publications total de l&#39;entreprise. | [optional] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::Recherche200ResponseResultatsInnerAllOf.new(
  dirigeants: null,
  beneficiaires: null,
  documents: null,
  publications: null,
  nb_dirigeants_total: null,
  nb_beneficiaires_total: null,
  nb_documents_avec_mentions: null,
  nb_documents_total: null,
  nb_publications_avec_mentions: null,
  nb_publications_total: null
)
```

