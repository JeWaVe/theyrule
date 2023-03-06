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
exports.Suggestions200ResponseResultatsRepresentantInner = void 0;
class Suggestions200ResponseResultatsRepresentantInner {
    static getAttributeTypeMap() {
        return Suggestions200ResponseResultatsRepresentantInner.attributeTypeMap;
    }
}
exports.Suggestions200ResponseResultatsRepresentantInner = Suggestions200ResponseResultatsRepresentantInner;
Suggestions200ResponseResultatsRepresentantInner.discriminator = undefined;
Suggestions200ResponseResultatsRepresentantInner.attributeTypeMap = [
    {
        "name": "mention",
        "baseName": "mention",
        "type": "string"
    },
    {
        "name": "qualite",
        "baseName": "qualite",
        "type": "string"
    },
    {
        "name": "personneMorale",
        "baseName": "personne_morale",
        "type": "boolean"
    },
    {
        "name": "datePriseDePoste",
        "baseName": "date_prise_de_poste",
        "type": "string"
    },
    {
        "name": "sexe",
        "baseName": "sexe",
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
        "name": "prenomUsuel",
        "baseName": "prenom_usuel",
        "type": "string"
    },
    {
        "name": "nomComplet",
        "baseName": "nom_complet",
        "type": "string"
    },
    {
        "name": "dateDeNaissance",
        "baseName": "date_de_naissance",
        "type": "string"
    },
    {
        "name": "dateDeNaissanceFormate",
        "baseName": "date_de_naissance_formate",
        "type": "string"
    },
    {
        "name": "age",
        "baseName": "age",
        "type": "number"
    },
    {
        "name": "nationalite",
        "baseName": "nationalite",
        "type": "string"
    },
    {
        "name": "codeNationalite",
        "baseName": "code_nationalite",
        "type": "string"
    },
    {
        "name": "villeDeNaissance",
        "baseName": "ville_de_naissance",
        "type": "string"
    },
    {
        "name": "paysDeNaissance",
        "baseName": "pays_de_naissance",
        "type": "string"
    },
    {
        "name": "codePaysDeNaissance",
        "baseName": "code_pays_de_naissance",
        "type": "string"
    },
    {
        "name": "adresseLigne1",
        "baseName": "adresse_ligne_1",
        "type": "string"
    },
    {
        "name": "adresseLigne2",
        "baseName": "adresse_ligne_2",
        "type": "string"
    },
    {
        "name": "adresseLigne3",
        "baseName": "adresse_ligne_3",
        "type": "string"
    },
    {
        "name": "codePostal",
        "baseName": "code_postal",
        "type": "string"
    },
    {
        "name": "ville",
        "baseName": "ville",
        "type": "string"
    },
    {
        "name": "pays",
        "baseName": "pays",
        "type": "string"
    },
    {
        "name": "codePays",
        "baseName": "code_pays",
        "type": "string"
    }
];
//# sourceMappingURL=suggestions200ResponseResultatsRepresentantInner.js.map