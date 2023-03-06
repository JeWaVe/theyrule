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
import { EntrepriseBaseConventionsCollectivesInner } from './entrepriseBaseConventionsCollectivesInner';

export class EntrepriseBase {
    /**
    * Le numéro SIREN de l\'entreprise au format xxxxxxxxx.
    */
    'siren'?: string;
    /**
    * Le numéro SIREN de l\'entreprise au format xxx xxx xxx.
    */
    'sirenFormate'?: string;
    /**
    * Le nom de l\'entreprise. Il est égal à sigle + dénomination en cas de personne morale, ou à nom + prénom en cas de personne physique.
    */
    'nomEntreprise'?: string;
    /**
    * Vrai en cas de personne morale, faux en cas de personne physique.
    */
    'personneMorale'?: boolean;
    /**
    * Dénomination de l\'entreprise si personne morale.
    */
    'denomination'?: string;
    /**
    * Nom si personne physique.
    */
    'nom'?: string;
    /**
    * Prénom si personne physique.
    */
    'prenom'?: string;
    /**
    * Sexe si personne physique. F pour féminin, M pour masculin.
    */
    'sexe'?: string;
    /**
    * Code NAF de l\'entreprise.
    */
    'codeNaf'?: string;
    /**
    * Libellé du code NAF de l\'entreprise.
    */
    'libelleCodeNaf'?: string;
    /**
    * Domaine d\'activité de l\'entreprise.
    */
    'domaineActivite'?: string;
    /**
    * Liste des conventions collectives de l\'entreprise.
    */
    'conventionsCollectives'?: Array<EntrepriseBaseConventionsCollectivesInner>;
    /**
    * Date de création de l\'entreprise au format AAAA-MM-JJ.
    */
    'dateCreation'?: string;
    /**
    * Date de création de l\'entreprise au format JJ/MM/AAAA.
    */
    'dateCreationFormate'?: string;
    /**
    * Si vrai, l\'entreprise n\'est plus en activité. Sinon, elle est toujours en activité.
    */
    'entrepriseCessee'?: boolean;
    /**
    * Date de cessation de l\'entreprise au format AAAA-MM-JJ.
    */
    'dateCessation'?: string;
    /**
    * Si vrai, l\'entreprise a au moins un employé.
    */
    'entrepriseEmployeuse'?: boolean;
    /**
    * Catégorie juridique de l\'entreprise, selon la [nomenclature Insee](https://www.insee.fr/fr/information/2028129).   **Note** : Le code correspond à celui de l\'INSEE, à l\'exception des SASU qui auront comme code 5720 et les EURL qui auront comme code 5498.
    */
    'categorieJuridique'?: string;
    /**
    * Forme juridique de l\'entreprise.
    */
    'formeJuridique'?: string;
    /**
    * Tranche d\'effectif de l\'entreprise.
    */
    'effectif'?: string;
    /**
    * Effectif minimal de l\'entreprise.
    */
    'effectifMin'?: number;
    /**
    * Effectif maximal de l\'entreprise.
    */
    'effectifMax'?: number;
    /**
    * Tranche d\'effectif de l\'entreprise, selon la [nomenclature Sirene](https://www.sirene.fr/sirene/public/variable/tefen#:~:text=Cette%20variable%20correspond%20%C3%A0%20la,effectif%20salari%C3%A9%20de%20l\'entreprise.).
    */
    'trancheEffectif'?: string;
    /**
    * Année de validité des variables effectif, effectif_min et effectif_max.
    */
    'anneeEffectif'?: number;
    /**
    * Capital de l\'entreprise.
    */
    'capital'?: number;
    /**
    * Statut de l\'entreprise au RCS
    */
    'statutRcs'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
        }    ];

    static getAttributeTypeMap() {
        return EntrepriseBase.attributeTypeMap;
    }
}

