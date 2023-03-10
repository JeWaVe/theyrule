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
import { AssociationAdresseGestionnaire } from './associationAdresseGestionnaire';
import { AssociationAdresseSiege } from './associationAdresseSiege';
import { AssociationPublicationsJoafe } from './associationPublicationsJoafe';

/**
* Association liée à l\'entreprise.
*/
export class Association {
    /**
    * Détermine si l\'association possède un numéro WALDEC/RNA.
    */
    'isWaldec'?: boolean;
    /**
    * L\'identifiant l\'association au format Wxxxxxxxxx si WALDEC, xxxxxxxxxxxxxx sinon.
    */
    'idAssociation'?: string;
    /**
    * Ancien numéro de l\'association.
    */
    'idExAssociation'?: string;
    /**
    * Dénomination de l\'association.
    */
    'denomination'?: string;
    /**
    * Numéro siret de l\'association au format xxxxxxxxxxxxxx.
    */
    'siret'?: string;
    /**
    * Numéro de Reconnaissance d\'Utilité Publique.
    */
    'numeroRup'?: string;
    /**
    * Objet de l\'association.
    */
    'objet'?: string;
    /**
    * Objet social 1 de l\'association.
    */
    'objetSocial1'?: string;
    /**
    * Libellé correspondant à l\'objet social 1.
    */
    'categorieSocial1'?: string;
    /**
    * Objet social 2 de l\'association.
    */
    'objetSocial2'?: string;
    /**
    * Libellé correspondant à l\'objet social 1.
    */
    'categorieSocial2'?: string;
    /**
    * Date de déclaration de création au format AAAA-MM-JJ.
    */
    'dateCreation'?: string;
    /**
    * Date de dernière déclaration au format AAAA-MM-JJ.
    */
    'dateDerniereDeclaration'?: string;
    /**
    * Date de publication du Journal Officiel de l\'avis de création au format AAAA-MM-JJ.
    */
    'datePublicationCreation'?: string;
    /**
    * Date de déclaration de dissolution au format AAAA-MM-JJ.
    */
    'dateDeclarationDissolution'?: string;
    /**
    * Groupement de l\'association.
    */
    'groupement'?: string;
    /**
    * Position d\'activité de l\'association.
    */
    'positionActivite'?: string;
    /**
    * Nature de l\'association.
    */
    'nature'?: string;
    /**
    * Site web de l\'association.
    */
    'siteWeb'?: string;
    /**
    * Numéro de téléphone de l\'association.
    */
    'telephone'?: string;
    /**
    * Email de l\'association.
    */
    'email'?: string;
    'adresseSiege'?: AssociationAdresseSiege;
    'adresseGestionnaire'?: AssociationAdresseGestionnaire;
    /**
    * Observation relative à l\'association.
    */
    'observation'?: string;
    /**
    * Code du site gestionnaire (préfecture, sous-préfecture) de l\'association.
    */
    'codeGestion'?: string;
    /**
    * Civilité du dirigeant.
    */
    'dirigeantCivilite'?: string;
    /**
    * Date de la dernière mise à jour des informations au RNA au format AAAA-MM-JJ.
    */
    'derniereMaj'?: string;
    'publicationsJoafe'?: AssociationPublicationsJoafe;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "isWaldec",
            "baseName": "is_waldec",
            "type": "boolean"
        },
        {
            "name": "idAssociation",
            "baseName": "id_association",
            "type": "string"
        },
        {
            "name": "idExAssociation",
            "baseName": "id_ex_association",
            "type": "string"
        },
        {
            "name": "denomination",
            "baseName": "denomination",
            "type": "string"
        },
        {
            "name": "siret",
            "baseName": "siret",
            "type": "string"
        },
        {
            "name": "numeroRup",
            "baseName": "numero_rup",
            "type": "string"
        },
        {
            "name": "objet",
            "baseName": "objet",
            "type": "string"
        },
        {
            "name": "objetSocial1",
            "baseName": "objet_social_1",
            "type": "string"
        },
        {
            "name": "categorieSocial1",
            "baseName": "categorie_social_1",
            "type": "string"
        },
        {
            "name": "objetSocial2",
            "baseName": "objet_social_2",
            "type": "string"
        },
        {
            "name": "categorieSocial2",
            "baseName": "categorie_social_2",
            "type": "string"
        },
        {
            "name": "dateCreation",
            "baseName": "date_creation",
            "type": "string"
        },
        {
            "name": "dateDerniereDeclaration",
            "baseName": "date_derniere_declaration",
            "type": "string"
        },
        {
            "name": "datePublicationCreation",
            "baseName": "date_publication_creation",
            "type": "string"
        },
        {
            "name": "dateDeclarationDissolution",
            "baseName": "date_declaration_dissolution",
            "type": "string"
        },
        {
            "name": "groupement",
            "baseName": "groupement",
            "type": "string"
        },
        {
            "name": "positionActivite",
            "baseName": "position_activite",
            "type": "string"
        },
        {
            "name": "nature",
            "baseName": "nature",
            "type": "string"
        },
        {
            "name": "siteWeb",
            "baseName": "site_web",
            "type": "string"
        },
        {
            "name": "telephone",
            "baseName": "telephone",
            "type": "string"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "adresseSiege",
            "baseName": "adresse_siege",
            "type": "AssociationAdresseSiege"
        },
        {
            "name": "adresseGestionnaire",
            "baseName": "adresse_gestionnaire",
            "type": "AssociationAdresseGestionnaire"
        },
        {
            "name": "observation",
            "baseName": "observation",
            "type": "string"
        },
        {
            "name": "codeGestion",
            "baseName": "code_gestion",
            "type": "string"
        },
        {
            "name": "dirigeantCivilite",
            "baseName": "dirigeant_civilite",
            "type": "string"
        },
        {
            "name": "derniereMaj",
            "baseName": "derniere_maj",
            "type": "string"
        },
        {
            "name": "publicationsJoafe",
            "baseName": "publications_joafe",
            "type": "AssociationPublicationsJoafe"
        }    ];

    static getAttributeTypeMap() {
        return Association.attributeTypeMap;
    }
}

