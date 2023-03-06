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
import { EntrepriseRecherche } from './entrepriseRecherche';

export class RechercheBeneficiaires200ResponseResultatsInnerAllOf {
    /**
    * Liste des entreprises dont le bénéficiaire effectif est bénéficiaire effectif, dans la limite de 100 entreprises.
    */
    'entreprises'?: Array<EntrepriseRecherche>;
    /**
    * Nombre d\'entreprises du bénéficiaire effectif au total.
    */
    'nbEntreprisesTotal'?: number;
    /**
    * Liste des entreprises dont le bénéficiaire effectif est dirigeant (sans forcément en être bénéficiaire effectif), dans la limite de 100 entreprises.
    */
    'entreprisesDirigeant'?: Array<EntrepriseRecherche>;
    /**
    * Nombre d\'entreprises dont le bénéficiaire effectif est dirigeant au total.
    */
    'nbEntreprisesDirigeantTotal'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "entreprises",
            "baseName": "entreprises",
            "type": "Array<EntrepriseRecherche>"
        },
        {
            "name": "nbEntreprisesTotal",
            "baseName": "nb_entreprises_total",
            "type": "number"
        },
        {
            "name": "entreprisesDirigeant",
            "baseName": "entreprises_dirigeant",
            "type": "Array<EntrepriseRecherche>"
        },
        {
            "name": "nbEntreprisesDirigeantTotal",
            "baseName": "nb_entreprises_dirigeant_total",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return RechercheBeneficiaires200ResponseResultatsInnerAllOf.attributeTypeMap;
    }
}
