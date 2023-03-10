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

import { RequestFile } from './models';

export class EntrepriseFicheAllOfComptes {
    /**
    * Date de dépôt des comptes.
    */
    'dateDepot'?: string;
    /**
    * Date de dépôt formatée des comptes.
    */
    'dateDepotFormate'?: string;
    /**
    * Date de clôture des comptes, au format AAAA-MM-JJ.
    */
    'dateCloture'?: string;
    /**
    * Année de clôture des comptes.
    */
    'anneeCloture'?: number;
    /**
    * Confidentialité totale des comptes.
    */
    'confidentialite'?: boolean;
    /**
    * Confidentialité partielle des comptes (seul le compte de résultat est confidentiel, le reste des comptes sont disponibles).
    */
    'confidentialiteCompteDeResultat'?: boolean;
    /**
    * Disponibilité des comptes au format PDF.
    */
    'disponible'?: boolean;
    /**
    * Nom du fichier PDF des comptes.
    */
    'nomFichierPdf'?: string;
    /**
    * Token des comptes.
    */
    'token'?: string;
    /**
    * Disponibilité des comptes au format XLSX.
    */
    'disponibleXlsx'?: boolean;
    /**
    * Nom du fichier XLSX des comptes.
    */
    'nomFichierXlsx'?: string;
    /**
    * Token des comptes XLSX.
    */
    'tokenXlsx'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "dateDepot",
            "baseName": "date_depot",
            "type": "string"
        },
        {
            "name": "dateDepotFormate",
            "baseName": "date_depot_formate",
            "type": "string"
        },
        {
            "name": "dateCloture",
            "baseName": "date_cloture",
            "type": "string"
        },
        {
            "name": "anneeCloture",
            "baseName": "annee_cloture",
            "type": "number"
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
            "name": "disponible",
            "baseName": "disponible",
            "type": "boolean"
        },
        {
            "name": "nomFichierPdf",
            "baseName": "nom_fichier_pdf",
            "type": "string"
        },
        {
            "name": "token",
            "baseName": "token",
            "type": "string"
        },
        {
            "name": "disponibleXlsx",
            "baseName": "disponible_xlsx",
            "type": "boolean"
        },
        {
            "name": "nomFichierXlsx",
            "baseName": "nom_fichier_xlsx",
            "type": "string"
        },
        {
            "name": "tokenXlsx",
            "baseName": "token_xlsx",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return EntrepriseFicheAllOfComptes.attributeTypeMap;
    }
}

