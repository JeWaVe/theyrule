/**
 * Pappers API
 * L\'API de Pappers vous permet de récupérer des informations et documents sur les entreprises françaises à partir de leur numéro SIREN ou SIRET.  Vous devez indiquer votre clé d\'API dans les requêtes, en utilisant le paramètre `api_token`.  L\'URL d\'accès à l\'API est https://api.pappers.fr/v2/  Lien vers la documentation de la V1 : https://www.pappers.fr/api/documentation/v1  L\'historique des modifications (changelog) est accessible à l\'url suivante : https://www.pappers.fr/api/changelog 
 *
 * The version of the OpenAPI document: 2.7.0
 * Contact: support@pappers.fr
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { Beneficiaire } from './beneficiaire';
import { Document } from './document';
import { Recherche200ResponseResultatsInnerAllOfPublicationsInner } from './recherche200ResponseResultatsInnerAllOfPublicationsInner';
import { RepresentantRecherche } from './representantRecherche';

export class Recherche200ResponseResultatsInnerAllOf {
    /**
    * Dirigeants de l\'entreprise qui correspondent à la recherche (si vous recherchez dans la base dirigeants).
    */
    'dirigeants'?: Array<RepresentantRecherche>;
    /**
    * Bénéficiaires effectifs de l\'entreprise qui correspondent à la recherche (si vous recherchez dans la base bénéficiaires effectifs).
    */
    'beneficiaires'?: Array<Beneficiaire>;
    /**
    * Documents de l\'entreprise qui correspondent à la recherche (si vous recherchez dans la base documents).
    */
    'documents'?: Array<Document>;
    /**
    * Publications de l\'entreprise qui correspondent à la recherche (si vous recherchez dans la base publications).
    */
    'publications'?: Array<Recherche200ResponseResultatsInnerAllOfPublicationsInner>;
    /**
    * Nombre de dirigeants total de l\'entreprise.
    */
    'nbDirigeantsTotal'?: number;
    /**
    * Nombre de bénéficiaires effectifs total de l\'entreprise.
    */
    'nbBeneficiairesTotal'?: number;
    /**
    * Nombre de documents de l\'entreprise qui correspondent à la recherche.
    */
    'nbDocumentsAvecMentions'?: number;
    /**
    * Nombre de documents total de l\'entreprise.
    */
    'nbDocumentsTotal'?: number;
    /**
    * Nombre de publications de l\'entreprise qui correspondent à la recherche.
    */
    'nbPublicationsAvecMentions'?: number;
    /**
    * Nombre de publications total de l\'entreprise.
    */
    'nbPublicationsTotal'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "dirigeants",
            "baseName": "dirigeants",
            "type": "Array<RepresentantRecherche>"
        },
        {
            "name": "beneficiaires",
            "baseName": "beneficiaires",
            "type": "Array<Beneficiaire>"
        },
        {
            "name": "documents",
            "baseName": "documents",
            "type": "Array<Document>"
        },
        {
            "name": "publications",
            "baseName": "publications",
            "type": "Array<Recherche200ResponseResultatsInnerAllOfPublicationsInner>"
        },
        {
            "name": "nbDirigeantsTotal",
            "baseName": "nb_dirigeants_total",
            "type": "number"
        },
        {
            "name": "nbBeneficiairesTotal",
            "baseName": "nb_beneficiaires_total",
            "type": "number"
        },
        {
            "name": "nbDocumentsAvecMentions",
            "baseName": "nb_documents_avec_mentions",
            "type": "number"
        },
        {
            "name": "nbDocumentsTotal",
            "baseName": "nb_documents_total",
            "type": "number"
        },
        {
            "name": "nbPublicationsAvecMentions",
            "baseName": "nb_publications_avec_mentions",
            "type": "number"
        },
        {
            "name": "nbPublicationsTotal",
            "baseName": "nb_publications_total",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return Recherche200ResponseResultatsInnerAllOf.attributeTypeMap;
    }
}

