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

export class RepresentantRechercheAllOf {
    /**
    * Vaut vrai si le représentant est toujours à son poste.
    */
    'actuel'?: boolean;
    /**
    * Date de départ de poste dans le cas où le représentant n\'est plus un représentant actuel, au format AAAA-MM-JJ.
    */
    'dateDepartDePoste'?: string;
    /**
    * Forme juridique du représentant dans le cas d\'une personne morale.
    */
    'formeJuridique'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "actuel",
            "baseName": "actuel",
            "type": "boolean"
        },
        {
            "name": "dateDepartDePoste",
            "baseName": "date_depart_de_poste",
            "type": "string"
        },
        {
            "name": "formeJuridique",
            "baseName": "forme_juridique",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return RepresentantRechercheAllOf.attributeTypeMap;
    }
}

