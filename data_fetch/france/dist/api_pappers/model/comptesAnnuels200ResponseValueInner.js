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
exports.ComptesAnnuels200ResponseValueInner = void 0;
/**
* Année
*/
class ComptesAnnuels200ResponseValueInner {
    static getAttributeTypeMap() {
        return ComptesAnnuels200ResponseValueInner.attributeTypeMap;
    }
}
exports.ComptesAnnuels200ResponseValueInner = ComptesAnnuels200ResponseValueInner;
ComptesAnnuels200ResponseValueInner.discriminator = undefined;
ComptesAnnuels200ResponseValueInner.attributeTypeMap = [
    {
        "name": "dateDepot",
        "baseName": "date_depot",
        "type": "string"
    },
    {
        "name": "codeGreffe",
        "baseName": "code_greffe",
        "type": "string"
    },
    {
        "name": "numeroDepot",
        "baseName": "numero_depot",
        "type": "string"
    },
    {
        "name": "numeroGestion",
        "baseName": "numero_gestion",
        "type": "string"
    },
    {
        "name": "dateCloture",
        "baseName": "date_cloture",
        "type": "string"
    },
    {
        "name": "dateClotureN1",
        "baseName": "date_cloture_n-1",
        "type": "string"
    },
    {
        "name": "dureeExerciceN",
        "baseName": "duree_exercice_n",
        "type": "number"
    },
    {
        "name": "dureeExerciceN1",
        "baseName": "duree_exercice_n-1",
        "type": "number"
    },
    {
        "name": "typeComptes",
        "baseName": "type_comptes",
        "type": "ComptesAnnuels200ResponseValueInner.TypeComptesEnum"
    },
    {
        "name": "libelleTypeComptes",
        "baseName": "libelle_type_comptes",
        "type": "ComptesAnnuels200ResponseValueInner.LibelleTypeComptesEnum"
    },
    {
        "name": "devise",
        "baseName": "devise",
        "type": "string"
    },
    {
        "name": "deviseOrigine",
        "baseName": "devise_origine",
        "type": "string"
    },
    {
        "name": "confidentialite",
        "baseName": "confidentialite",
        "type": "boolean"
    },
    {
        "name": "confidentialiteCompteDeResultat",
        "baseName": "confidentialite_compte_de_resultat",
        "type": "boolean"
    },
    {
        "name": "typeSaisie",
        "baseName": "type_saisie",
        "type": "string"
    },
    {
        "name": "informationsTraitement",
        "baseName": "informations_traitement",
        "type": "Array<string>"
    },
    {
        "name": "sections",
        "baseName": "sections",
        "type": "Array<ComptesAnnuels200ResponseValueInnerSectionsInner>"
    },
    {
        "name": "ratios",
        "baseName": "ratios",
        "type": "Ratios"
    }
];
(function (ComptesAnnuels200ResponseValueInner) {
    let TypeComptesEnum;
    (function (TypeComptesEnum) {
        TypeComptesEnum[TypeComptesEnum["C"] = 'C'] = "C";
        TypeComptesEnum[TypeComptesEnum["S"] = 'S'] = "S";
        TypeComptesEnum[TypeComptesEnum["K"] = 'K'] = "K";
        TypeComptesEnum[TypeComptesEnum["Cs"] = 'CS'] = "Cs";
        TypeComptesEnum[TypeComptesEnum["B"] = 'B'] = "B";
        TypeComptesEnum[TypeComptesEnum["A"] = 'A'] = "A";
    })(TypeComptesEnum = ComptesAnnuels200ResponseValueInner.TypeComptesEnum || (ComptesAnnuels200ResponseValueInner.TypeComptesEnum = {}));
    let LibelleTypeComptesEnum;
    (function (LibelleTypeComptesEnum) {
        LibelleTypeComptesEnum[LibelleTypeComptesEnum["Complets"] = 'Complets'] = "Complets";
        LibelleTypeComptesEnum[LibelleTypeComptesEnum["Simplifis"] = 'Simplifiés'] = "Simplifis";
        LibelleTypeComptesEnum[LibelleTypeComptesEnum["Consolids"] = 'Consolidés'] = "Consolids";
        LibelleTypeComptesEnum[LibelleTypeComptesEnum["CompletsSimplifis"] = 'Complets/Simplifiés'] = "CompletsSimplifis";
        LibelleTypeComptesEnum[LibelleTypeComptesEnum["Banques"] = 'Banques'] = "Banques";
        LibelleTypeComptesEnum[LibelleTypeComptesEnum["Assurances"] = 'Assurances'] = "Assurances";
    })(LibelleTypeComptesEnum = ComptesAnnuels200ResponseValueInner.LibelleTypeComptesEnum || (ComptesAnnuels200ResponseValueInner.LibelleTypeComptesEnum = {}));
})(ComptesAnnuels200ResponseValueInner = exports.ComptesAnnuels200ResponseValueInner || (exports.ComptesAnnuels200ResponseValueInner = {}));
//# sourceMappingURL=comptesAnnuels200ResponseValueInner.js.map