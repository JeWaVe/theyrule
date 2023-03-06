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
exports.EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectes = void 0;
/**
* Détails des parts dont le bénéficiaire effectif a vocation à devenir titulaire de façon indirecte.
*/
class EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectes {
    static getAttributeTypeMap() {
        return EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectes.attributeTypeMap;
    }
}
exports.EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectes = EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectes;
EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectes.discriminator = undefined;
EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectes.attributeTypeMap = [
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
        "type": "EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectesDetailsEnIndivision"
    },
    {
        "name": "detailsEnPersonneMorale",
        "baseName": "details_en_personne_morale",
        "type": "EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectesDetailsEnPersonneMorale"
    }
];
//# sourceMappingURL=entrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectes.js.map