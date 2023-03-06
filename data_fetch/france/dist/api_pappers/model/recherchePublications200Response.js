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
exports.RecherchePublications200Response = void 0;
class RecherchePublications200Response {
    static getAttributeTypeMap() {
        return RecherchePublications200Response.attributeTypeMap;
    }
}
exports.RecherchePublications200Response = RecherchePublications200Response;
RecherchePublications200Response.discriminator = undefined;
RecherchePublications200Response.attributeTypeMap = [
    {
        "name": "resultats",
        "baseName": "resultats",
        "type": "Array<RecherchePublications200ResponseResultatsInner>"
    },
    {
        "name": "total",
        "baseName": "total",
        "type": "number"
    },
    {
        "name": "page",
        "baseName": "page",
        "type": "number"
    }
];
//# sourceMappingURL=recherchePublications200Response.js.map