"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntrepriseFicheAllOfDetailsVotesIndirects = void 0;
/**
* Détails des droits de vote détenus de façon indirecte par le bénéficiaire effectif.
*/
class EntrepriseFicheAllOfDetailsVotesIndirects {
    static getAttributeTypeMap() {
        return EntrepriseFicheAllOfDetailsVotesIndirects.attributeTypeMap;
    }
}
exports.EntrepriseFicheAllOfDetailsVotesIndirects = EntrepriseFicheAllOfDetailsVotesIndirects;
EntrepriseFicheAllOfDetailsVotesIndirects.discriminator = undefined;
EntrepriseFicheAllOfDetailsVotesIndirects.attributeTypeMap = [
    {
        "name": "pourcentageEnIndivision",
        "baseName": "pourcentage_en_indivision",
        "type": "number"
    },
    {
        "name": "pourcentageEnPersonneMorale",
        "baseName": "pourcentage_en_personne_morale",
        "type": "number"
    },
    {
        "name": "detailsEnIndivision",
        "baseName": "details_en_indivision",
        "type": "EntrepriseFicheAllOfDetailsVotesIndirectsDetailsEnIndivision"
    },
    {
        "name": "detailsEnPersonneMorale",
        "baseName": "details_en_personne_morale",
        "type": "EntrepriseFicheAllOfDetailsVotesIndirectsDetailsEnPersonneMorale"
    }
];
//# sourceMappingURL=entrepriseFicheAllOfDetailsVotesIndirects.js.map