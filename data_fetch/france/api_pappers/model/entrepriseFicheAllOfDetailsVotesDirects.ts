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
* Détails des droits de vote détenus de façon directe par le bénéficiaire effectif.
*/
export class EntrepriseFicheAllOfDetailsVotesDirects {
    /**
    * Droits de vote détenus de façon directe en pleine propriété par le bénéficiaire effectif, en pourcentage des droits de vote totaux.
    */
    'pourcentagePleinePropriete'?: number;
    /**
    * Droits de vote détenus de façon directe en nue propriété par le bénéficiaire effectif, en pourcentage des droits de vote totaux.
    */
    'pourcentageNuePropriete'?: number;
    /**
    * Droits de vote détenus de façon directe en usufruit par le bénéficiaire effectif, en pourcentage des droits de vote totaux.
    */
    'pourcentageUsufruit'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "pourcentagePleinePropriete",
            "baseName": "pourcentage_pleine_propriete",
            "type": "number"
        },
        {
            "name": "pourcentageNuePropriete",
            "baseName": "pourcentage_nue_propriete",
            "type": "number"
        },
        {
            "name": "pourcentageUsufruit",
            "baseName": "pourcentage_usufruit",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return EntrepriseFicheAllOfDetailsVotesDirects.attributeTypeMap;
    }
}

