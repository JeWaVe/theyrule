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
import { EntrepriseRecherche } from './entrepriseRecherche';

export class RecherchePublications200ResponseResultatsInner {
    /**
    * Type de publication
    */
    'type'?: RecherchePublications200ResponseResultatsInner.TypeEnum;
    /**
    * Date de publication, au format AAAA-MM-JJ.
    */
    'date'?: string;
    /**
    * Contenu de la publication, avec les mentions correspondant à la recherche encerclée par une balise HTML <em>.
    */
    'contenu'?: string;
    'entreprise'?: EntrepriseRecherche;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "RecherchePublications200ResponseResultatsInner.TypeEnum"
        },
        {
            "name": "date",
            "baseName": "date",
            "type": "string"
        },
        {
            "name": "contenu",
            "baseName": "contenu",
            "type": "string"
        },
        {
            "name": "entreprise",
            "baseName": "entreprise",
            "type": "EntrepriseRecherche"
        }    ];

    static getAttributeTypeMap() {
        return RecherchePublications200ResponseResultatsInner.attributeTypeMap;
    }
}

export namespace RecherchePublications200ResponseResultatsInner {
    export enum TypeEnum {
        Cration = <any> 'Création',
        Immatriculation = <any> 'Immatriculation',
        Modification = <any> 'Modification',
        Vente = <any> 'Vente',
        Radiation = <any> 'Radiation',
        ProcdureCollective = <any> 'Procédure collective',
        DptDesComptes = <any> 'Dépôt des comptes'
    }
}
