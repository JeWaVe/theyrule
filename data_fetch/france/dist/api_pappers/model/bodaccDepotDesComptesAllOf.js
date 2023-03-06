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
exports.BodaccDepotDesComptesAllOf = void 0;
class BodaccDepotDesComptesAllOf {
    static getAttributeTypeMap() {
        return BodaccDepotDesComptesAllOf.attributeTypeMap;
    }
}
exports.BodaccDepotDesComptesAllOf = BodaccDepotDesComptesAllOf;
BodaccDepotDesComptesAllOf.discriminator = undefined;
BodaccDepotDesComptesAllOf.attributeTypeMap = [
    {
        "name": "dateCloture",
        "baseName": "date_cloture",
        "type": "string"
    },
    {
        "name": "typeDepot",
        "baseName": "type_depot",
        "type": "string"
    },
    {
        "name": "descriptif",
        "baseName": "descriptif",
        "type": "string"
    }
];
//# sourceMappingURL=bodaccDepotDesComptesAllOf.js.map