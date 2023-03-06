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
* Suivi d\'utilisation des jetons.
*/
export class SuiviJetons200Response {
    /**
    * Le nombre de jetons mensuels initiaux de votre abonnement.
    */
    'jetonsAbonnement'?: number;
    /**
    * Le nombre de jetons mensuels de votre abonnement que vous avez utilisés
    */
    'jetonsAbonnementUtilises'?: number;
    /**
    * Le nombre de jetons pay as you go qu\'il vous reste.
    */
    'jetonsPayAsYouGoRestants'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "jetonsAbonnement",
            "baseName": "jetons_abonnement",
            "type": "number"
        },
        {
            "name": "jetonsAbonnementUtilises",
            "baseName": "jetons_abonnement_utilises",
            "type": "number"
        },
        {
            "name": "jetonsPayAsYouGoRestants",
            "baseName": "jetons_pay_as_you_go_restants",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return SuiviJetons200Response.attributeTypeMap;
    }
}

