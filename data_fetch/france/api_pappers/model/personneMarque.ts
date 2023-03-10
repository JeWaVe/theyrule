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

export class PersonneMarque {
    /**
    * Siren de l\'entité, dans le cas d\'une personne morale.
    */
    'siren'?: string;
    /**
    * Entité légale.
    */
    'entiteLegale'?: string;
    /**
    * Nom de l\'entité.
    */
    'nom'?: string;
    /**
    * Bâtiment de l\'entité.
    */
    'batiment'?: string;
    /**
    * Rue de l\'entité.
    */
    'rue'?: string;
    /**
    * Ville de l\'entité.
    */
    'ville'?: string;
    /**
    * Boîte postale de l\'entité.
    */
    'boitePostale'?: string;
    /**
    * Code postal de l\'entité.
    */
    'codePostal'?: string;
    /**
    * Code pays de l\'entité.
    */
    'codePays'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "siren",
            "baseName": "siren",
            "type": "string"
        },
        {
            "name": "entiteLegale",
            "baseName": "entite_legale",
            "type": "string"
        },
        {
            "name": "nom",
            "baseName": "nom",
            "type": "string"
        },
        {
            "name": "batiment",
            "baseName": "batiment",
            "type": "string"
        },
        {
            "name": "rue",
            "baseName": "rue",
            "type": "string"
        },
        {
            "name": "ville",
            "baseName": "ville",
            "type": "string"
        },
        {
            "name": "boitePostale",
            "baseName": "boite_postale",
            "type": "string"
        },
        {
            "name": "codePostal",
            "baseName": "code_postal",
            "type": "string"
        },
        {
            "name": "codePays",
            "baseName": "code_pays",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PersonneMarque.attributeTypeMap;
    }
}

