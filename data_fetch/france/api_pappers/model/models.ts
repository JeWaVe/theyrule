import localVarRequest from 'request';

export * from './association';
export * from './associationAdresseGestionnaire';
export * from './associationAdresseSiege';
export * from './associationPublicationsJoafe';
export * from './beneficiaire';
export * from './bodacc';
export * from './bodaccAchat';
export * from './bodaccAchatAllOf';
export * from './bodaccCreation';
export * from './bodaccCreationAllOf';
export * from './bodaccDepotDesComptes';
export * from './bodaccDepotDesComptesAllOf';
export * from './bodaccImmatriculation';
export * from './bodaccImmatriculationAllOf';
export * from './bodaccModification';
export * from './bodaccModificationAllOf';
export * from './bodaccProcedureCollective';
export * from './bodaccProcedureCollectiveAllOf';
export * from './bodaccRadiation';
export * from './bodaccVente';
export * from './bodaccVenteAllOf';
export * from './comptesAnnuels200ResponseValueInner';
export * from './comptesAnnuels200ResponseValueInnerSectionsInner';
export * from './comptesAnnuels200ResponseValueInnerSectionsInnerLiassesInner';
export * from './comptesAnnuels200ResponseValueInnerSectionsInnerLiassesInnerColonnesInner';
export * from './document';
export * from './documentActe';
export * from './documentActeAllOf';
export * from './documentActeAllOfTitres';
export * from './documentComptes';
export * from './documentComptesAllOf';
export * from './entrepriseBase';
export * from './entrepriseBaseConventionsCollectivesInner';
export * from './entrepriseFiche';
export * from './entrepriseFicheAllOf';
export * from './entrepriseFicheAllOfActes';
export * from './entrepriseFicheAllOfBeneficiairesEffectifs';
export * from './entrepriseFicheAllOfClasses';
export * from './entrepriseFicheAllOfComptes';
export * from './entrepriseFicheAllOfDepotsActes';
export * from './entrepriseFicheAllOfDerniersStatuts';
export * from './entrepriseFicheAllOfDetailsPartsDirectes';
export * from './entrepriseFicheAllOfDetailsPartsIndirectes';
export * from './entrepriseFicheAllOfDetailsPartsIndirectesDetailsEnIndivision';
export * from './entrepriseFicheAllOfDetailsPartsIndirectesDetailsEnPersonneMorale';
export * from './entrepriseFicheAllOfDetailsPartsVocationTitulaire';
export * from './entrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsDirectes';
export * from './entrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectes';
export * from './entrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectesDetailsEnIndivision';
export * from './entrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectesDetailsEnPersonneMorale';
export * from './entrepriseFicheAllOfDetailsSocieteDeGestion';
export * from './entrepriseFicheAllOfDetailsVotesDirects';
export * from './entrepriseFicheAllOfDetailsVotesIndirects';
export * from './entrepriseFicheAllOfDetailsVotesIndirectsDetailsEnIndivision';
export * from './entrepriseFicheAllOfDetailsVotesIndirectsDetailsEnPersonneMorale';
export * from './entrepriseFicheAllOfEvenements';
export * from './entrepriseFicheAllOfExtraitImmatriculation';
export * from './entrepriseFicheAllOfMarques';
export * from './entrepriseFicheAllOfProceduresCollectives';
export * from './entrepriseFicheAllOfRnm';
export * from './entrepriseRecherche';
export * from './entrepriseRechercheAllOf';
export * from './etablissementFiche';
export * from './etablissementFicheDomiciliation';
export * from './etablissementRecherche';
export * from './lienSuccession';
export * from './personneMarque';
export * from './publication';
export * from './ratios';
export * from './recherche200Response';
export * from './recherche200ResponseResultatsInner';
export * from './recherche200ResponseResultatsInnerAllOf';
export * from './recherche200ResponseResultatsInnerAllOfPublicationsInner';
export * from './recherche200ResponseResultatsInnerAllOfPublicationsInnerAllOf';
export * from './rechercheBeneficiaires200Response';
export * from './rechercheBeneficiaires200ResponseResultatsInner';
export * from './rechercheBeneficiaires200ResponseResultatsInnerAllOf';
export * from './rechercheDirigeants200Response';
export * from './rechercheDirigeants200ResponseResultatsInner';
export * from './rechercheDirigeants200ResponseResultatsInnerAllOf';
export * from './rechercheDocuments200Response';
export * from './rechercheDocuments200ResponseResultatsInner';
export * from './rechercheDocuments200ResponseResultatsInnerAllOf';
export * from './recherchePublications200Response';
export * from './recherchePublications200ResponseResultatsInner';
export * from './representant';
export * from './representantRecherche';
export * from './representantRechercheAllOf';
export * from './suggestions200Response';
export * from './suggestions200ResponseResultatsDenominationInner';
export * from './suggestions200ResponseResultatsDenominationInnerAllOf';
export * from './suggestions200ResponseResultatsNomCompletInner';
export * from './suggestions200ResponseResultatsNomCompletInnerAllOf';
export * from './suggestions200ResponseResultatsNomEntrepriseInner';
export * from './suggestions200ResponseResultatsNomEntrepriseInnerAllOf';
export * from './suggestions200ResponseResultatsRepresentantInner';
export * from './suggestions200ResponseResultatsRepresentantInnerAllOf';
export * from './suggestions200ResponseResultatsSirenInner';
export * from './suggestions200ResponseResultatsSirenInnerAllOf';
export * from './suggestions200ResponseResultatsSiretInner';
export * from './suggestions200ResponseResultatsSiretInnerAllOf';
export * from './suiviJetons200Response';
export * from './surveillanceDirigeant200Response';
export * from './surveillanceDirigeant201Response';
export * from './surveillanceDirigeantRequestInner';
export * from './surveillanceEntreprise200Response';
export * from './surveillanceEntreprise201Response';
export * from './surveillanceEntrepriseRequestInner';
export * from './surveillanceListeInformationsRequest';
export * from './surveillanceNotificationsDelete200Response';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { Association } from './association';
import { AssociationAdresseGestionnaire } from './associationAdresseGestionnaire';
import { AssociationAdresseSiege } from './associationAdresseSiege';
import { AssociationPublicationsJoafe } from './associationPublicationsJoafe';
import { Beneficiaire } from './beneficiaire';
import { Bodacc } from './bodacc';
import { BodaccAchat } from './bodaccAchat';
import { BodaccAchatAllOf } from './bodaccAchatAllOf';
import { BodaccCreation } from './bodaccCreation';
import { BodaccCreationAllOf } from './bodaccCreationAllOf';
import { BodaccDepotDesComptes } from './bodaccDepotDesComptes';
import { BodaccDepotDesComptesAllOf } from './bodaccDepotDesComptesAllOf';
import { BodaccImmatriculation } from './bodaccImmatriculation';
import { BodaccImmatriculationAllOf } from './bodaccImmatriculationAllOf';
import { BodaccModification } from './bodaccModification';
import { BodaccModificationAllOf } from './bodaccModificationAllOf';
import { BodaccProcedureCollective } from './bodaccProcedureCollective';
import { BodaccProcedureCollectiveAllOf } from './bodaccProcedureCollectiveAllOf';
import { BodaccRadiation } from './bodaccRadiation';
import { BodaccVente } from './bodaccVente';
import { BodaccVenteAllOf } from './bodaccVenteAllOf';
import { ComptesAnnuels200ResponseValueInner } from './comptesAnnuels200ResponseValueInner';
import { ComptesAnnuels200ResponseValueInnerSectionsInner } from './comptesAnnuels200ResponseValueInnerSectionsInner';
import { ComptesAnnuels200ResponseValueInnerSectionsInnerLiassesInner } from './comptesAnnuels200ResponseValueInnerSectionsInnerLiassesInner';
import { ComptesAnnuels200ResponseValueInnerSectionsInnerLiassesInnerColonnesInner } from './comptesAnnuels200ResponseValueInnerSectionsInnerLiassesInnerColonnesInner';
import { Document } from './document';
import { DocumentActe } from './documentActe';
import { DocumentActeAllOf } from './documentActeAllOf';
import { DocumentActeAllOfTitres } from './documentActeAllOfTitres';
import { DocumentComptes } from './documentComptes';
import { DocumentComptesAllOf } from './documentComptesAllOf';
import { EntrepriseBase } from './entrepriseBase';
import { EntrepriseBaseConventionsCollectivesInner } from './entrepriseBaseConventionsCollectivesInner';
import { EntrepriseFiche } from './entrepriseFiche';
import { EntrepriseFicheAllOf } from './entrepriseFicheAllOf';
import { EntrepriseFicheAllOfActes } from './entrepriseFicheAllOfActes';
import { EntrepriseFicheAllOfBeneficiairesEffectifs } from './entrepriseFicheAllOfBeneficiairesEffectifs';
import { EntrepriseFicheAllOfClasses } from './entrepriseFicheAllOfClasses';
import { EntrepriseFicheAllOfComptes } from './entrepriseFicheAllOfComptes';
import { EntrepriseFicheAllOfDepotsActes } from './entrepriseFicheAllOfDepotsActes';
import { EntrepriseFicheAllOfDerniersStatuts } from './entrepriseFicheAllOfDerniersStatuts';
import { EntrepriseFicheAllOfDetailsPartsDirectes } from './entrepriseFicheAllOfDetailsPartsDirectes';
import { EntrepriseFicheAllOfDetailsPartsIndirectes } from './entrepriseFicheAllOfDetailsPartsIndirectes';
import { EntrepriseFicheAllOfDetailsPartsIndirectesDetailsEnIndivision } from './entrepriseFicheAllOfDetailsPartsIndirectesDetailsEnIndivision';
import { EntrepriseFicheAllOfDetailsPartsIndirectesDetailsEnPersonneMorale } from './entrepriseFicheAllOfDetailsPartsIndirectesDetailsEnPersonneMorale';
import { EntrepriseFicheAllOfDetailsPartsVocationTitulaire } from './entrepriseFicheAllOfDetailsPartsVocationTitulaire';
import { EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsDirectes } from './entrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsDirectes';
import { EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectes } from './entrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectes';
import { EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectesDetailsEnIndivision } from './entrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectesDetailsEnIndivision';
import { EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectesDetailsEnPersonneMorale } from './entrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectesDetailsEnPersonneMorale';
import { EntrepriseFicheAllOfDetailsSocieteDeGestion } from './entrepriseFicheAllOfDetailsSocieteDeGestion';
import { EntrepriseFicheAllOfDetailsVotesDirects } from './entrepriseFicheAllOfDetailsVotesDirects';
import { EntrepriseFicheAllOfDetailsVotesIndirects } from './entrepriseFicheAllOfDetailsVotesIndirects';
import { EntrepriseFicheAllOfDetailsVotesIndirectsDetailsEnIndivision } from './entrepriseFicheAllOfDetailsVotesIndirectsDetailsEnIndivision';
import { EntrepriseFicheAllOfDetailsVotesIndirectsDetailsEnPersonneMorale } from './entrepriseFicheAllOfDetailsVotesIndirectsDetailsEnPersonneMorale';
import { EntrepriseFicheAllOfEvenements } from './entrepriseFicheAllOfEvenements';
import { EntrepriseFicheAllOfExtraitImmatriculation } from './entrepriseFicheAllOfExtraitImmatriculation';
import { EntrepriseFicheAllOfMarques } from './entrepriseFicheAllOfMarques';
import { EntrepriseFicheAllOfProceduresCollectives } from './entrepriseFicheAllOfProceduresCollectives';
import { EntrepriseFicheAllOfRnm } from './entrepriseFicheAllOfRnm';
import { EntrepriseRecherche } from './entrepriseRecherche';
import { EntrepriseRechercheAllOf } from './entrepriseRechercheAllOf';
import { EtablissementFiche } from './etablissementFiche';
import { EtablissementFicheDomiciliation } from './etablissementFicheDomiciliation';
import { EtablissementRecherche } from './etablissementRecherche';
import { LienSuccession } from './lienSuccession';
import { PersonneMarque } from './personneMarque';
import { Publication } from './publication';
import { Ratios } from './ratios';
import { Recherche200Response } from './recherche200Response';
import { Recherche200ResponseResultatsInner } from './recherche200ResponseResultatsInner';
import { Recherche200ResponseResultatsInnerAllOf } from './recherche200ResponseResultatsInnerAllOf';
import { Recherche200ResponseResultatsInnerAllOfPublicationsInner } from './recherche200ResponseResultatsInnerAllOfPublicationsInner';
import { Recherche200ResponseResultatsInnerAllOfPublicationsInnerAllOf } from './recherche200ResponseResultatsInnerAllOfPublicationsInnerAllOf';
import { RechercheBeneficiaires200Response } from './rechercheBeneficiaires200Response';
import { RechercheBeneficiaires200ResponseResultatsInner } from './rechercheBeneficiaires200ResponseResultatsInner';
import { RechercheBeneficiaires200ResponseResultatsInnerAllOf } from './rechercheBeneficiaires200ResponseResultatsInnerAllOf';
import { RechercheDirigeants200Response } from './rechercheDirigeants200Response';
import { RechercheDirigeants200ResponseResultatsInner } from './rechercheDirigeants200ResponseResultatsInner';
import { RechercheDirigeants200ResponseResultatsInnerAllOf } from './rechercheDirigeants200ResponseResultatsInnerAllOf';
import { RechercheDocuments200Response } from './rechercheDocuments200Response';
import { RechercheDocuments200ResponseResultatsInner } from './rechercheDocuments200ResponseResultatsInner';
import { RechercheDocuments200ResponseResultatsInnerAllOf } from './rechercheDocuments200ResponseResultatsInnerAllOf';
import { RecherchePublications200Response } from './recherchePublications200Response';
import { RecherchePublications200ResponseResultatsInner } from './recherchePublications200ResponseResultatsInner';
import { Representant } from './representant';
import { RepresentantRecherche } from './representantRecherche';
import { RepresentantRechercheAllOf } from './representantRechercheAllOf';
import { Suggestions200Response } from './suggestions200Response';
import { Suggestions200ResponseResultatsDenominationInner } from './suggestions200ResponseResultatsDenominationInner';
import { Suggestions200ResponseResultatsDenominationInnerAllOf } from './suggestions200ResponseResultatsDenominationInnerAllOf';
import { Suggestions200ResponseResultatsNomCompletInner } from './suggestions200ResponseResultatsNomCompletInner';
import { Suggestions200ResponseResultatsNomCompletInnerAllOf } from './suggestions200ResponseResultatsNomCompletInnerAllOf';
import { Suggestions200ResponseResultatsNomEntrepriseInner } from './suggestions200ResponseResultatsNomEntrepriseInner';
import { Suggestions200ResponseResultatsNomEntrepriseInnerAllOf } from './suggestions200ResponseResultatsNomEntrepriseInnerAllOf';
import { Suggestions200ResponseResultatsRepresentantInner } from './suggestions200ResponseResultatsRepresentantInner';
import { Suggestions200ResponseResultatsRepresentantInnerAllOf } from './suggestions200ResponseResultatsRepresentantInnerAllOf';
import { Suggestions200ResponseResultatsSirenInner } from './suggestions200ResponseResultatsSirenInner';
import { Suggestions200ResponseResultatsSirenInnerAllOf } from './suggestions200ResponseResultatsSirenInnerAllOf';
import { Suggestions200ResponseResultatsSiretInner } from './suggestions200ResponseResultatsSiretInner';
import { Suggestions200ResponseResultatsSiretInnerAllOf } from './suggestions200ResponseResultatsSiretInnerAllOf';
import { SuiviJetons200Response } from './suiviJetons200Response';
import { SurveillanceDirigeant200Response } from './surveillanceDirigeant200Response';
import { SurveillanceDirigeant201Response } from './surveillanceDirigeant201Response';
import { SurveillanceDirigeantRequestInner } from './surveillanceDirigeantRequestInner';
import { SurveillanceEntreprise200Response } from './surveillanceEntreprise200Response';
import { SurveillanceEntreprise201Response } from './surveillanceEntreprise201Response';
import { SurveillanceEntrepriseRequestInner } from './surveillanceEntrepriseRequestInner';
import { SurveillanceListeInformationsRequest } from './surveillanceListeInformationsRequest';
import { SurveillanceNotificationsDelete200Response } from './surveillanceNotificationsDelete200Response';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "ComptesAnnuels200ResponseValueInner.TypeComptesEnum": ComptesAnnuels200ResponseValueInner.TypeComptesEnum,
        "ComptesAnnuels200ResponseValueInner.LibelleTypeComptesEnum": ComptesAnnuels200ResponseValueInner.LibelleTypeComptesEnum,
        "Document.TypeEnum": Document.TypeEnum,
        "EntrepriseFicheAllOfMarques.StatutEnum": EntrepriseFicheAllOfMarques.StatutEnum,
        "EntrepriseFicheAllOfMarques.TypeEnum": EntrepriseFicheAllOfMarques.TypeEnum,
        "EntrepriseFicheAllOfProceduresCollectives.TypeEnum": EntrepriseFicheAllOfProceduresCollectives.TypeEnum,
        "Publication.TypeEnum": Publication.TypeEnum,
        "Recherche200ResponseResultatsInnerAllOfPublicationsInner.TypeEnum": Recherche200ResponseResultatsInnerAllOfPublicationsInner.TypeEnum,
        "RecherchePublications200ResponseResultatsInner.TypeEnum": RecherchePublications200ResponseResultatsInner.TypeEnum,
}

let typeMap: {[index: string]: any} = {
    "Association": Association,
    "AssociationAdresseGestionnaire": AssociationAdresseGestionnaire,
    "AssociationAdresseSiege": AssociationAdresseSiege,
    "AssociationPublicationsJoafe": AssociationPublicationsJoafe,
    "Beneficiaire": Beneficiaire,
    "Bodacc": Bodacc,
    "BodaccAchat": BodaccAchat,
    "BodaccAchatAllOf": BodaccAchatAllOf,
    "BodaccCreation": BodaccCreation,
    "BodaccCreationAllOf": BodaccCreationAllOf,
    "BodaccDepotDesComptes": BodaccDepotDesComptes,
    "BodaccDepotDesComptesAllOf": BodaccDepotDesComptesAllOf,
    "BodaccImmatriculation": BodaccImmatriculation,
    "BodaccImmatriculationAllOf": BodaccImmatriculationAllOf,
    "BodaccModification": BodaccModification,
    "BodaccModificationAllOf": BodaccModificationAllOf,
    "BodaccProcedureCollective": BodaccProcedureCollective,
    "BodaccProcedureCollectiveAllOf": BodaccProcedureCollectiveAllOf,
    "BodaccRadiation": BodaccRadiation,
    "BodaccVente": BodaccVente,
    "BodaccVenteAllOf": BodaccVenteAllOf,
    "ComptesAnnuels200ResponseValueInner": ComptesAnnuels200ResponseValueInner,
    "ComptesAnnuels200ResponseValueInnerSectionsInner": ComptesAnnuels200ResponseValueInnerSectionsInner,
    "ComptesAnnuels200ResponseValueInnerSectionsInnerLiassesInner": ComptesAnnuels200ResponseValueInnerSectionsInnerLiassesInner,
    "ComptesAnnuels200ResponseValueInnerSectionsInnerLiassesInnerColonnesInner": ComptesAnnuels200ResponseValueInnerSectionsInnerLiassesInnerColonnesInner,
    "Document": Document,
    "DocumentActe": DocumentActe,
    "DocumentActeAllOf": DocumentActeAllOf,
    "DocumentActeAllOfTitres": DocumentActeAllOfTitres,
    "DocumentComptes": DocumentComptes,
    "DocumentComptesAllOf": DocumentComptesAllOf,
    "EntrepriseBase": EntrepriseBase,
    "EntrepriseBaseConventionsCollectivesInner": EntrepriseBaseConventionsCollectivesInner,
    "EntrepriseFiche": EntrepriseFiche,
    "EntrepriseFicheAllOf": EntrepriseFicheAllOf,
    "EntrepriseFicheAllOfActes": EntrepriseFicheAllOfActes,
    "EntrepriseFicheAllOfBeneficiairesEffectifs": EntrepriseFicheAllOfBeneficiairesEffectifs,
    "EntrepriseFicheAllOfClasses": EntrepriseFicheAllOfClasses,
    "EntrepriseFicheAllOfComptes": EntrepriseFicheAllOfComptes,
    "EntrepriseFicheAllOfDepotsActes": EntrepriseFicheAllOfDepotsActes,
    "EntrepriseFicheAllOfDerniersStatuts": EntrepriseFicheAllOfDerniersStatuts,
    "EntrepriseFicheAllOfDetailsPartsDirectes": EntrepriseFicheAllOfDetailsPartsDirectes,
    "EntrepriseFicheAllOfDetailsPartsIndirectes": EntrepriseFicheAllOfDetailsPartsIndirectes,
    "EntrepriseFicheAllOfDetailsPartsIndirectesDetailsEnIndivision": EntrepriseFicheAllOfDetailsPartsIndirectesDetailsEnIndivision,
    "EntrepriseFicheAllOfDetailsPartsIndirectesDetailsEnPersonneMorale": EntrepriseFicheAllOfDetailsPartsIndirectesDetailsEnPersonneMorale,
    "EntrepriseFicheAllOfDetailsPartsVocationTitulaire": EntrepriseFicheAllOfDetailsPartsVocationTitulaire,
    "EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsDirectes": EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsDirectes,
    "EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectes": EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectes,
    "EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectesDetailsEnIndivision": EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectesDetailsEnIndivision,
    "EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectesDetailsEnPersonneMorale": EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectesDetailsEnPersonneMorale,
    "EntrepriseFicheAllOfDetailsSocieteDeGestion": EntrepriseFicheAllOfDetailsSocieteDeGestion,
    "EntrepriseFicheAllOfDetailsVotesDirects": EntrepriseFicheAllOfDetailsVotesDirects,
    "EntrepriseFicheAllOfDetailsVotesIndirects": EntrepriseFicheAllOfDetailsVotesIndirects,
    "EntrepriseFicheAllOfDetailsVotesIndirectsDetailsEnIndivision": EntrepriseFicheAllOfDetailsVotesIndirectsDetailsEnIndivision,
    "EntrepriseFicheAllOfDetailsVotesIndirectsDetailsEnPersonneMorale": EntrepriseFicheAllOfDetailsVotesIndirectsDetailsEnPersonneMorale,
    "EntrepriseFicheAllOfEvenements": EntrepriseFicheAllOfEvenements,
    "EntrepriseFicheAllOfExtraitImmatriculation": EntrepriseFicheAllOfExtraitImmatriculation,
    "EntrepriseFicheAllOfMarques": EntrepriseFicheAllOfMarques,
    "EntrepriseFicheAllOfProceduresCollectives": EntrepriseFicheAllOfProceduresCollectives,
    "EntrepriseFicheAllOfRnm": EntrepriseFicheAllOfRnm,
    "EntrepriseRecherche": EntrepriseRecherche,
    "EntrepriseRechercheAllOf": EntrepriseRechercheAllOf,
    "EtablissementFiche": EtablissementFiche,
    "EtablissementFicheDomiciliation": EtablissementFicheDomiciliation,
    "EtablissementRecherche": EtablissementRecherche,
    "LienSuccession": LienSuccession,
    "PersonneMarque": PersonneMarque,
    "Publication": Publication,
    "Ratios": Ratios,
    "Recherche200Response": Recherche200Response,
    "Recherche200ResponseResultatsInner": Recherche200ResponseResultatsInner,
    "Recherche200ResponseResultatsInnerAllOf": Recherche200ResponseResultatsInnerAllOf,
    "Recherche200ResponseResultatsInnerAllOfPublicationsInner": Recherche200ResponseResultatsInnerAllOfPublicationsInner,
    "Recherche200ResponseResultatsInnerAllOfPublicationsInnerAllOf": Recherche200ResponseResultatsInnerAllOfPublicationsInnerAllOf,
    "RechercheBeneficiaires200Response": RechercheBeneficiaires200Response,
    "RechercheBeneficiaires200ResponseResultatsInner": RechercheBeneficiaires200ResponseResultatsInner,
    "RechercheBeneficiaires200ResponseResultatsInnerAllOf": RechercheBeneficiaires200ResponseResultatsInnerAllOf,
    "RechercheDirigeants200Response": RechercheDirigeants200Response,
    "RechercheDirigeants200ResponseResultatsInner": RechercheDirigeants200ResponseResultatsInner,
    "RechercheDirigeants200ResponseResultatsInnerAllOf": RechercheDirigeants200ResponseResultatsInnerAllOf,
    "RechercheDocuments200Response": RechercheDocuments200Response,
    "RechercheDocuments200ResponseResultatsInner": RechercheDocuments200ResponseResultatsInner,
    "RechercheDocuments200ResponseResultatsInnerAllOf": RechercheDocuments200ResponseResultatsInnerAllOf,
    "RecherchePublications200Response": RecherchePublications200Response,
    "RecherchePublications200ResponseResultatsInner": RecherchePublications200ResponseResultatsInner,
    "Representant": Representant,
    "RepresentantRecherche": RepresentantRecherche,
    "RepresentantRechercheAllOf": RepresentantRechercheAllOf,
    "Suggestions200Response": Suggestions200Response,
    "Suggestions200ResponseResultatsDenominationInner": Suggestions200ResponseResultatsDenominationInner,
    "Suggestions200ResponseResultatsDenominationInnerAllOf": Suggestions200ResponseResultatsDenominationInnerAllOf,
    "Suggestions200ResponseResultatsNomCompletInner": Suggestions200ResponseResultatsNomCompletInner,
    "Suggestions200ResponseResultatsNomCompletInnerAllOf": Suggestions200ResponseResultatsNomCompletInnerAllOf,
    "Suggestions200ResponseResultatsNomEntrepriseInner": Suggestions200ResponseResultatsNomEntrepriseInner,
    "Suggestions200ResponseResultatsNomEntrepriseInnerAllOf": Suggestions200ResponseResultatsNomEntrepriseInnerAllOf,
    "Suggestions200ResponseResultatsRepresentantInner": Suggestions200ResponseResultatsRepresentantInner,
    "Suggestions200ResponseResultatsRepresentantInnerAllOf": Suggestions200ResponseResultatsRepresentantInnerAllOf,
    "Suggestions200ResponseResultatsSirenInner": Suggestions200ResponseResultatsSirenInner,
    "Suggestions200ResponseResultatsSirenInnerAllOf": Suggestions200ResponseResultatsSirenInnerAllOf,
    "Suggestions200ResponseResultatsSiretInner": Suggestions200ResponseResultatsSiretInner,
    "Suggestions200ResponseResultatsSiretInnerAllOf": Suggestions200ResponseResultatsSiretInnerAllOf,
    "SuiviJetons200Response": SuiviJetons200Response,
    "SurveillanceDirigeant200Response": SurveillanceDirigeant200Response,
    "SurveillanceDirigeant201Response": SurveillanceDirigeant201Response,
    "SurveillanceDirigeantRequestInner": SurveillanceDirigeantRequestInner,
    "SurveillanceEntreprise200Response": SurveillanceEntreprise200Response,
    "SurveillanceEntreprise201Response": SurveillanceEntreprise201Response,
    "SurveillanceEntrepriseRequestInner": SurveillanceEntrepriseRequestInner,
    "SurveillanceListeInformationsRequest": SurveillanceListeInformationsRequest,
    "SurveillanceNotificationsDelete200Response": SurveillanceNotificationsDelete200Response,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
