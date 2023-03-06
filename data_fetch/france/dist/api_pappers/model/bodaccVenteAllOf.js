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
exports.BodaccVenteAllOf = void 0;
class BodaccVenteAllOf {
    static getAttributeTypeMap() {
        return BodaccVenteAllOf.attributeTypeMap;
    }
}
exports.BodaccVenteAllOf = BodaccVenteAllOf;
BodaccVenteAllOf.discriminator = undefined;
BodaccVenteAllOf.attributeTypeMap = [
    {
        "name": "nomEntreprise",
        "baseName": "nom_entreprise",
        "type": "string"
    },
    {
        "name": "personneMorale",
        "baseName": "personne_morale",
        "type": "boolean"
    },
    {
        "name": "denomination",
        "baseName": "denomination",
        "type": "string"
    },
    {
        "name": "nom",
        "baseName": "nom",
        "type": "string"
    },
    {
        "name": "prenom",
        "baseName": "prenom",
        "type": "string"
    },
    {
        "name": "administration",
        "baseName": "administration",
        "type": "string"
    },
    {
        "name": "adresse",
        "baseName": "adresse",
        "type": "string"
    },
    {
        "name": "commentaires",
        "baseName": "commentaires",
        "type": "string"
    },
    {
        "name": "oppositions",
        "baseName": "oppositions",
        "type": "string"
    },
    {
        "name": "declarationCreance",
        "baseName": "declaration_creance",
        "type": "string"
    },
    {
        "name": "publicationLegale",
        "baseName": "publication_legale",
        "type": "string"
    },
    {
        "name": "denominationNouveauProprietaire",
        "baseName": "denomination_nouveau_proprietaire",
        "type": "string"
    },
    {
        "name": "sirenNouveauProprietaire",
        "baseName": "siren_nouveau_proprietaire",
        "type": "string"
    },
    {
        "name": "denominationNouvelExploitant",
        "baseName": "denomination_nouvel_exploitant",
        "type": "string"
    },
    {
        "name": "sirenNouvelExploitant",
        "baseName": "siren_nouvel_exploitant",
        "type": "string"
    }
];
//# sourceMappingURL=bodaccVenteAllOf.js.map