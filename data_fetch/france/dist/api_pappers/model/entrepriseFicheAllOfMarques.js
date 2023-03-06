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
exports.EntrepriseFicheAllOfMarques = void 0;
class EntrepriseFicheAllOfMarques {
    static getAttributeTypeMap() {
        return EntrepriseFicheAllOfMarques.attributeTypeMap;
    }
}
exports.EntrepriseFicheAllOfMarques = EntrepriseFicheAllOfMarques;
EntrepriseFicheAllOfMarques.discriminator = undefined;
EntrepriseFicheAllOfMarques.attributeTypeMap = [
    {
        "name": "numero",
        "baseName": "numero",
        "type": "string"
    },
    {
        "name": "dateEnregistrement",
        "baseName": "date_enregistrement",
        "type": "string"
    },
    {
        "name": "dateExpiration",
        "baseName": "date_expiration",
        "type": "string"
    },
    {
        "name": "lieuEnregistrement",
        "baseName": "lieu_enregistrement",
        "type": "string"
    },
    {
        "name": "statut",
        "baseName": "statut",
        "type": "EntrepriseFicheAllOfMarques.StatutEnum"
    },
    {
        "name": "texte",
        "baseName": "texte",
        "type": "string"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "EntrepriseFicheAllOfMarques.TypeEnum"
    },
    {
        "name": "lienImage",
        "baseName": "lien_image",
        "type": "string"
    },
    {
        "name": "descriptions",
        "baseName": "descriptions",
        "type": "Array<string>"
    },
    {
        "name": "classes",
        "baseName": "classes",
        "type": "Array<EntrepriseFicheAllOfClasses>"
    },
    {
        "name": "deposant",
        "baseName": "deposant",
        "type": "PersonneMarque"
    },
    {
        "name": "mandataire",
        "baseName": "mandataire",
        "type": "PersonneMarque"
    },
    {
        "name": "evenements",
        "baseName": "evenements",
        "type": "Array<EntrepriseFicheAllOfEvenements>"
    }
];
(function (EntrepriseFicheAllOfMarques) {
    let StatutEnum;
    (function (StatutEnum) {
        StatutEnum[StatutEnum["DemandeDpose"] = 'Demande déposée'] = "DemandeDpose";
        StatutEnum[StatutEnum["DemandePublie"] = 'Demande publiée'] = "DemandePublie";
        StatutEnum[StatutEnum["DemandeNonPublie"] = 'Demande non publiée'] = "DemandeNonPublie";
        StatutEnum[StatutEnum["DemandeIrrecevableAprsPublication"] = 'Demande irrecevable après publication'] = "DemandeIrrecevableAprsPublication";
        StatutEnum[StatutEnum["MarqueEnregistre"] = 'Marque enregistrée'] = "MarqueEnregistre";
        StatutEnum[StatutEnum["RenouvellementDemand"] = 'Renouvellement demandé'] = "RenouvellementDemand";
        StatutEnum[StatutEnum["MarqueRenouvele"] = 'Marque renouvelée'] = "MarqueRenouvele";
        StatutEnum[StatutEnum["DemandeTotalementRejete"] = 'Demande totalement rejetée'] = "DemandeTotalementRejete";
        StatutEnum[StatutEnum["MarqueAyantFaitLobjetDuneRenonciationTotale"] = 'Marque ayant fait l\'objet d\'une renonciation totale'] = "MarqueAyantFaitLobjetDuneRenonciationTotale";
        StatutEnum[StatutEnum["MarqueAyantFaitLobjetDunRetraitTotal"] = 'Marque ayant fait l\'objet d\'un retrait total'] = "MarqueAyantFaitLobjetDunRetraitTotal";
        StatutEnum[StatutEnum["MarqueAnnule"] = 'Marque annulée'] = "MarqueAnnule";
        StatutEnum[StatutEnum["MarqueExpire"] = 'Marque expirée'] = "MarqueExpire";
    })(StatutEnum = EntrepriseFicheAllOfMarques.StatutEnum || (EntrepriseFicheAllOfMarques.StatutEnum = {}));
    let TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["Mixte"] = 'Mixte'] = "Mixte";
        TypeEnum[TypeEnum["Figuratif"] = 'Figuratif'] = "Figuratif";
        TypeEnum[TypeEnum["Hologramme"] = 'Hologramme'] = "Hologramme";
        TypeEnum[TypeEnum["Son"] = 'Son'] = "Son";
        TypeEnum[TypeEnum["Texte"] = 'Texte'] = "Texte";
        TypeEnum[TypeEnum["_3D"] = '3D'] = "_3D";
        TypeEnum[TypeEnum["Position"] = 'Position'] = "Position";
        TypeEnum[TypeEnum["Mouvement"] = 'Mouvement'] = "Mouvement";
        TypeEnum[TypeEnum["Multimedia"] = 'Multimedia'] = "Multimedia";
        TypeEnum[TypeEnum["Motifs"] = 'Motifs'] = "Motifs";
        TypeEnum[TypeEnum["Couleur"] = 'Couleur'] = "Couleur";
        TypeEnum[TypeEnum["Forme"] = 'Forme'] = "Forme";
        TypeEnum[TypeEnum["Autre"] = 'Autre'] = "Autre";
    })(TypeEnum = EntrepriseFicheAllOfMarques.TypeEnum || (EntrepriseFicheAllOfMarques.TypeEnum = {}));
})(EntrepriseFicheAllOfMarques = exports.EntrepriseFicheAllOfMarques || (exports.EntrepriseFicheAllOfMarques = {}));
//# sourceMappingURL=entrepriseFicheAllOfMarques.js.map