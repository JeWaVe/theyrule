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
import { Association } from './association';
import { Bodacc } from './bodacc';
import { EntrepriseFicheAllOfBeneficiairesEffectifs } from './entrepriseFicheAllOfBeneficiairesEffectifs';
import { EntrepriseFicheAllOfComptes } from './entrepriseFicheAllOfComptes';
import { EntrepriseFicheAllOfDepotsActes } from './entrepriseFicheAllOfDepotsActes';
import { EntrepriseFicheAllOfDerniersStatuts } from './entrepriseFicheAllOfDerniersStatuts';
import { EntrepriseFicheAllOfExtraitImmatriculation } from './entrepriseFicheAllOfExtraitImmatriculation';
import { EntrepriseFicheAllOfMarques } from './entrepriseFicheAllOfMarques';
import { EntrepriseFicheAllOfProceduresCollectives } from './entrepriseFicheAllOfProceduresCollectives';
import { EntrepriseFicheAllOfRnm } from './entrepriseFicheAllOfRnm';
import { EtablissementFiche } from './etablissementFiche';
import { Representant } from './representant';
import { Ratios } from './ratios';

export class EntrepriseFicheAllOf {
    'siege'?: EtablissementFiche;
    /**
    * Le statut de diffusion de l\'entreprise. Non diffusable correspond à une personne physique ayant demandé à être exclue de la diffusion. Aucune information n\'est alors disponible. Cette modalité n\'est visible que pour les organismes habilités au titre de l\'article R. 123-224 ou les administrations.
    */
    'diffusable'?: boolean;
    /**
    * Sigle de l\'entreprise si personne morale.
    */
    'sigle'?: string;
    /**
    * Objet social de l\'entreprise.
    */
    'objetSocial'?: string;
    /**
    * Capital l\'entreprise au format xx xxx €.
    */
    'capitalFormate'?: string;
    /**
    * Capital actuel de l\'entreprise si variable.
    */
    'capitalActuelSiVariable'?: string;
    /**
    * Devise de capital_formate et capital_actuel_si_variable.
    */
    'deviseCapital'?: string;
    /**
    * Numéro RCS de l\'entreprise.
    */
    'numeroRcs'?: string;
    /**
    * Date de clôture d\'exercice de l\'entreprise.
    */
    'dateClotureExercice'?: string;
    /**
    * Date de clôture d\'exercice exceptionnel de l\'entreprise.
    */
    'dateClotureExerciceExceptionnelle'?: string;
    /**
    * Date de clôture d\'exercice exceptionnel formatée de l\'entreprise.
    */
    'dateClotureExerciceExceptionnelleFormate'?: string;
    /**
    * Prochaine date de clôture d\'exercice de l\'entreprise.
    */
    'prochaineDateClotureExercice'?: string;
    /**
    * Prochaine date de clôture d\'exercice formatée de l\'entreprise.
    */
    'prochaineDateClotureExerciceFormate'?: string;
    /**
    * Vrai si l\'entreprise est une entreprise de l\'économie sociale et solidaire.
    */
    'economieSocialeSolidaire'?: boolean;
    /**
    * Durée de la personne morale.
    */
    'dureePersonneMorale'?: string;
    /**
    * Date de dernier traitement de l\'entreprise.
    */
    'dernierTraitement'?: string;
    /**
    * Dernière mise à jour de la base de donnée sirène au format AAAA-MM-JJ.
    */
    'derniereMiseAJourSirene'?: string;
    /**
    * Dernière mise à jour de la base de donnée RCS au format AAAA-MM-JJ.
    */
    'derniereMiseAJourRcs'?: string;
    /**
    * Statut de l\'entreprise au RCS. Peut valoir \"Inscrit\", \"Non inscrit\" ou \"Radié\".
    */
    'statutRcs'?: string;
    /**
    * Greffe RCS de l\'entreprise.
    */
    'greffe'?: string;
    /**
    * Code greffe RCS de l\'entreprise.
    */
    'codeGreffe'?: string;
    /**
    * Date d\'immatriculation de l\'entreprise au RCS.
    */
    'dateImmatriculationRcs'?: string;
    /**
    * Date de la première immatriculation de l\'entreprise au RCS.
    */
    'datePremiereImmatriculationRcs'?: string;
    /**
    * Date de début d\'activité de l\'entreprise.
    */
    'dateDebutActivite'?: string;
    /**
    * Date de début d\'activité de l\'entreprise.
    */
    'dateDebutPremiereActivite'?: string;
    /**
    * Date de radiation de l\'entreprise au RCS.
    */
    'dateRadiationRcs'?: string;
    /**
    * Numéro de TVA intracommunautaire de l\'entreprise.
    */
    'numeroTvaIntracommunautaire'?: string;
    /**
    * Présent uniquement si le paramètre validite_tva_intracommunautaire a été mis à vrai.  Si vrai, le numéro de TVA intracommunautaire est valide. Si faux, il est invalide. Si null, la validité n\'a pas pu être vérifiée.
    */
    'validiteTvaIntracommunautaire'?: boolean;
    /**
    * Si vrai, l\'entreprise est à associé unique (notamment pour les SASU et les EURL).
    */
    'associeUnique'?: boolean;
    /**
    * Liste des établissements de l\'entreprise.
    */
    'etablissements'?: Array<EtablissementFiche>;
    /**
    * Liste des finances de l\'entreprise.
    */
    'finances'?: Array<object & Ratios>;
    /**
    * Liste des représentants de l\'entreprise.
    */
    'representants'?: Array<Representant>;
    /**
    * Liste des bénéficiaires effectifs de l\'entreprise (si disponibles).
    */
    'beneficiairesEffectifs'?: Array<EntrepriseFicheAllOfBeneficiairesEffectifs>;
    /**
    * Liste des actes de l\'entreprise.
    */
    'depotsActes'?: Array<EntrepriseFicheAllOfDepotsActes>;
    /**
    * Liste des comptes de l\'entreprise.
    */
    'comptes'?: Array<EntrepriseFicheAllOfComptes>;
    /**
    * Liste des publications au Bodacc de l\'entreprise.
    */
    'publicationsBodacc'?: Array<Bodacc>;
    /**
    * Liste des procédures collectives de l\'entreprise.
    */
    'proceduresCollectives'?: Array<EntrepriseFicheAllOfProceduresCollectives>;
    /**
    * Vrai si l\'entreprise a des procédures collectives (en cours ou terminées), faux sinon.
    */
    'procedureCollectiveExiste'?: boolean;
    /**
    * Vrai si l\'entreprise a des procédures collectives en cours, faux sinon.
    */
    'procedureCollectiveEnCours'?: boolean;
    'derniersStatuts'?: EntrepriseFicheAllOfDerniersStatuts;
    'extraitImmatriculation'?: EntrepriseFicheAllOfExtraitImmatriculation;
    'rnm'?: EntrepriseFicheAllOfRnm;
    /**
    * Liste des marques françaises déposées par l\'entreprise. Uniquement présent si le paramètre \"marques\" a été mis à vrai.
    */
    'marques'?: Array<EntrepriseFicheAllOfMarques>;
    'association'?: Association;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "siege",
            "baseName": "siege",
            "type": "EtablissementFiche"
        },
        {
            "name": "diffusable",
            "baseName": "diffusable",
            "type": "boolean"
        },
        {
            "name": "sigle",
            "baseName": "sigle",
            "type": "string"
        },
        {
            "name": "objetSocial",
            "baseName": "objet_social",
            "type": "string"
        },
        {
            "name": "capitalFormate",
            "baseName": "capital_formate",
            "type": "string"
        },
        {
            "name": "capitalActuelSiVariable",
            "baseName": "capital_actuel_si_variable",
            "type": "string"
        },
        {
            "name": "deviseCapital",
            "baseName": "devise_capital",
            "type": "string"
        },
        {
            "name": "numeroRcs",
            "baseName": "numero_rcs",
            "type": "string"
        },
        {
            "name": "dateClotureExercice",
            "baseName": "date_cloture_exercice",
            "type": "string"
        },
        {
            "name": "dateClotureExerciceExceptionnelle",
            "baseName": "date_cloture_exercice_exceptionnelle",
            "type": "string"
        },
        {
            "name": "dateClotureExerciceExceptionnelleFormate",
            "baseName": "date_cloture_exercice_exceptionnelle_formate",
            "type": "string"
        },
        {
            "name": "prochaineDateClotureExercice",
            "baseName": "prochaine_date_cloture_exercice",
            "type": "string"
        },
        {
            "name": "prochaineDateClotureExerciceFormate",
            "baseName": "prochaine_date_cloture_exercice_formate",
            "type": "string"
        },
        {
            "name": "economieSocialeSolidaire",
            "baseName": "economie_sociale_solidaire",
            "type": "boolean"
        },
        {
            "name": "dureePersonneMorale",
            "baseName": "duree_personne_morale",
            "type": "string"
        },
        {
            "name": "dernierTraitement",
            "baseName": "dernier_traitement",
            "type": "string"
        },
        {
            "name": "derniereMiseAJourSirene",
            "baseName": "derniere_mise_a_jour_sirene",
            "type": "string"
        },
        {
            "name": "derniereMiseAJourRcs",
            "baseName": "derniere_mise_a_jour_rcs",
            "type": "string"
        },
        {
            "name": "statutRcs",
            "baseName": "statut_rcs",
            "type": "string"
        },
        {
            "name": "greffe",
            "baseName": "greffe",
            "type": "string"
        },
        {
            "name": "codeGreffe",
            "baseName": "code_greffe",
            "type": "string"
        },
        {
            "name": "dateImmatriculationRcs",
            "baseName": "date_immatriculation_rcs",
            "type": "string"
        },
        {
            "name": "datePremiereImmatriculationRcs",
            "baseName": "date_premiere_immatriculation_rcs",
            "type": "string"
        },
        {
            "name": "dateDebutActivite",
            "baseName": "date_debut_activite",
            "type": "string"
        },
        {
            "name": "dateDebutPremiereActivite",
            "baseName": "date_debut_premiere_activite",
            "type": "string"
        },
        {
            "name": "dateRadiationRcs",
            "baseName": "date_radiation_rcs",
            "type": "string"
        },
        {
            "name": "numeroTvaIntracommunautaire",
            "baseName": "numero_tva_intracommunautaire",
            "type": "string"
        },
        {
            "name": "validiteTvaIntracommunautaire",
            "baseName": "validite_tva_intracommunautaire",
            "type": "boolean"
        },
        {
            "name": "associeUnique",
            "baseName": "associe_unique",
            "type": "boolean"
        },
        {
            "name": "etablissements",
            "baseName": "etablissements",
            "type": "Array<EtablissementFiche>"
        },
        {
            "name": "finances",
            "baseName": "finances",
            "type": "Array<object & Ratios>"
        },
        {
            "name": "representants",
            "baseName": "representants",
            "type": "Array<Representant>"
        },
        {
            "name": "beneficiairesEffectifs",
            "baseName": "beneficiaires_effectifs",
            "type": "Array<EntrepriseFicheAllOfBeneficiairesEffectifs>"
        },
        {
            "name": "depotsActes",
            "baseName": "depots_actes",
            "type": "Array<EntrepriseFicheAllOfDepotsActes>"
        },
        {
            "name": "comptes",
            "baseName": "comptes",
            "type": "Array<EntrepriseFicheAllOfComptes>"
        },
        {
            "name": "publicationsBodacc",
            "baseName": "publications_bodacc",
            "type": "Array<Bodacc>"
        },
        {
            "name": "proceduresCollectives",
            "baseName": "procedures_collectives",
            "type": "Array<EntrepriseFicheAllOfProceduresCollectives>"
        },
        {
            "name": "procedureCollectiveExiste",
            "baseName": "procedure_collective_existe",
            "type": "boolean"
        },
        {
            "name": "procedureCollectiveEnCours",
            "baseName": "procedure_collective_en_cours",
            "type": "boolean"
        },
        {
            "name": "derniersStatuts",
            "baseName": "derniers_statuts",
            "type": "EntrepriseFicheAllOfDerniersStatuts"
        },
        {
            "name": "extraitImmatriculation",
            "baseName": "extrait_immatriculation",
            "type": "EntrepriseFicheAllOfExtraitImmatriculation"
        },
        {
            "name": "rnm",
            "baseName": "rnm",
            "type": "EntrepriseFicheAllOfRnm"
        },
        {
            "name": "marques",
            "baseName": "marques",
            "type": "Array<EntrepriseFicheAllOfMarques>"
        },
        {
            "name": "association",
            "baseName": "association",
            "type": "Association"
        }    ];

    static getAttributeTypeMap() {
        return EntrepriseFicheAllOf.attributeTypeMap;
    }
}
