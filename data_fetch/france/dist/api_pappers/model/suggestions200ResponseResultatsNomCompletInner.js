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
exports.Suggestions200ResponseResultatsNomCompletInner = void 0;
class Suggestions200ResponseResultatsNomCompletInner {
    static getAttributeTypeMap() {
        return Suggestions200ResponseResultatsNomCompletInner.attributeTypeMap;
    }
}
exports.Suggestions200ResponseResultatsNomCompletInner = Suggestions200ResponseResultatsNomCompletInner;
Suggestions200ResponseResultatsNomCompletInner.discriminator = undefined;
Suggestions200ResponseResultatsNomCompletInner.attributeTypeMap = [
    {
        "name": "mention",
        "baseName": "mention",
        "type": "string"
    },
    {
        "name": "siren",
        "baseName": "siren",
        "type": "string"
    },
    {
        "name": "sirenFormate",
        "baseName": "siren_formate",
        "type": "string"
    },
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
        "name": "sexe",
        "baseName": "sexe",
        "type": "string"
    },
    {
        "name": "codeNaf",
        "baseName": "code_naf",
        "type": "string"
    },
    {
        "name": "libelleCodeNaf",
        "baseName": "libelle_code_naf",
        "type": "string"
    },
    {
        "name": "domaineActivite",
        "baseName": "domaine_activite",
        "type": "string"
    },
    {
        "name": "conventionsCollectives",
        "baseName": "conventions_collectives",
        "type": "Array<EntrepriseBaseConventionsCollectivesInner>"
    },
    {
        "name": "dateCreation",
        "baseName": "date_creation",
        "type": "string"
    },
    {
        "name": "dateCreationFormate",
        "baseName": "date_creation_formate",
        "type": "string"
    },
    {
        "name": "entrepriseCessee",
        "baseName": "entreprise_cessee",
        "type": "boolean"
    },
    {
        "name": "dateCessation",
        "baseName": "date_cessation",
        "type": "string"
    },
    {
        "name": "entrepriseEmployeuse",
        "baseName": "entreprise_employeuse",
        "type": "boolean"
    },
    {
        "name": "categorieJuridique",
        "baseName": "categorie_juridique",
        "type": "string"
    },
    {
        "name": "formeJuridique",
        "baseName": "forme_juridique",
        "type": "string"
    },
    {
        "name": "effectif",
        "baseName": "effectif",
        "type": "string"
    },
    {
        "name": "effectifMin",
        "baseName": "effectif_min",
        "type": "number"
    },
    {
        "name": "effectifMax",
        "baseName": "effectif_max",
        "type": "number"
    },
    {
        "name": "trancheEffectif",
        "baseName": "tranche_effectif",
        "type": "string"
    },
    {
        "name": "anneeEffectif",
        "baseName": "annee_effectif",
        "type": "number"
    },
    {
        "name": "capital",
        "baseName": "capital",
        "type": "number"
    },
    {
        "name": "statutRcs",
        "baseName": "statut_rcs",
        "type": "string"
    },
    {
        "name": "siege",
        "baseName": "siege",
        "type": "EtablissementRecherche"
    },
    {
        "name": "villes",
        "baseName": "villes",
        "type": "Array<string>"
    },
    {
        "name": "chiffreAffaires",
        "baseName": "chiffre_affaires",
        "type": "number"
    },
    {
        "name": "resultat",
        "baseName": "resultat",
        "type": "number"
    },
    {
        "name": "effectifsFinances",
        "baseName": "effectifs_finances",
        "type": "number"
    },
    {
        "name": "anneeFinances",
        "baseName": "annee_finances",
        "type": "string"
    }
];
//# sourceMappingURL=suggestions200ResponseResultatsNomCompletInner.js.map