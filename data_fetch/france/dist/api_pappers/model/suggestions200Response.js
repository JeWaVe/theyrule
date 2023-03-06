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
exports.Suggestions200Response = void 0;
class Suggestions200Response {
    static getAttributeTypeMap() {
        return Suggestions200Response.attributeTypeMap;
    }
}
exports.Suggestions200Response = Suggestions200Response;
Suggestions200Response.discriminator = undefined;
Suggestions200Response.attributeTypeMap = [
    {
        "name": "resultatsNomEntreprise",
        "baseName": "resultats_nom_entreprise",
        "type": "Array<Suggestions200ResponseResultatsNomEntrepriseInner>"
    },
    {
        "name": "resultatsDenomination",
        "baseName": "resultats_denomination",
        "type": "Array<Suggestions200ResponseResultatsDenominationInner>"
    },
    {
        "name": "resultatsNomComplet",
        "baseName": "resultats_nom_complet",
        "type": "Array<Suggestions200ResponseResultatsNomCompletInner>"
    },
    {
        "name": "resultatsRepresentant",
        "baseName": "resultats_representant",
        "type": "Array<Suggestions200ResponseResultatsRepresentantInner>"
    },
    {
        "name": "resultatsSiren",
        "baseName": "resultats_siren",
        "type": "Array<Suggestions200ResponseResultatsSirenInner>"
    },
    {
        "name": "resultatsSiret",
        "baseName": "resultats_siret",
        "type": "Array<Suggestions200ResponseResultatsSiretInner>"
    }
];
//# sourceMappingURL=suggestions200Response.js.map