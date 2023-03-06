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

/**
* Publications JOAFE.
*/
export class AssociationPublicationsJoafe {
    /**
    * Numéro de parution JOAFE
    */
    'numeroParution'?: string;
    /**
    * Date de parution JOAFE au format AAAA-MM-JJ
    */
    'dateParution'?: string;
    /**
    * Date de déclaration au format AAAA-MM-JJ
    */
    'dateDeclaration'?: string;
    /**
    * Numéro de l\'annonce JOAFE
    */
    'numeroAnnonce'?: number;
    /**
    * Nom de l\'association
    */
    'titre'?: string;
    /**
    * Type d\'annonce (Création, Modification, Dissolution)
    */
    'type'?: string;
    /**
    * Lieu de la déclaration
    */
    'prefecture'?: string;
    /**
    * Description de l\'association
    */
    'objet'?: string;
    /**
    * Lien du site web
    */
    'siteWeb'?: string;
    /**
    * Adresse de l\'association
    */
    'adresse'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "numeroParution",
            "baseName": "numero_parution",
            "type": "string"
        },
        {
            "name": "dateParution",
            "baseName": "date_parution",
            "type": "string"
        },
        {
            "name": "dateDeclaration",
            "baseName": "date_declaration",
            "type": "string"
        },
        {
            "name": "numeroAnnonce",
            "baseName": "numero_annonce",
            "type": "number"
        },
        {
            "name": "titre",
            "baseName": "titre",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "prefecture",
            "baseName": "prefecture",
            "type": "string"
        },
        {
            "name": "objet",
            "baseName": "objet",
            "type": "string"
        },
        {
            "name": "siteWeb",
            "baseName": "site_web",
            "type": "string"
        },
        {
            "name": "adresse",
            "baseName": "adresse",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AssociationPublicationsJoafe.attributeTypeMap;
    }
}
