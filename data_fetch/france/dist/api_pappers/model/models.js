"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoidAuth = exports.OAuth = exports.ApiKeyAuth = exports.HttpBearerAuth = exports.HttpBasicAuth = exports.ObjectSerializer = void 0;
__exportStar(require("./association"), exports);
__exportStar(require("./associationAdresseGestionnaire"), exports);
__exportStar(require("./associationAdresseSiege"), exports);
__exportStar(require("./associationPublicationsJoafe"), exports);
__exportStar(require("./beneficiaire"), exports);
__exportStar(require("./bodacc"), exports);
__exportStar(require("./bodaccAchat"), exports);
__exportStar(require("./bodaccAchatAllOf"), exports);
__exportStar(require("./bodaccCreation"), exports);
__exportStar(require("./bodaccCreationAllOf"), exports);
__exportStar(require("./bodaccDepotDesComptes"), exports);
__exportStar(require("./bodaccDepotDesComptesAllOf"), exports);
__exportStar(require("./bodaccImmatriculation"), exports);
__exportStar(require("./bodaccImmatriculationAllOf"), exports);
__exportStar(require("./bodaccModification"), exports);
__exportStar(require("./bodaccModificationAllOf"), exports);
__exportStar(require("./bodaccProcedureCollective"), exports);
__exportStar(require("./bodaccProcedureCollectiveAllOf"), exports);
__exportStar(require("./bodaccRadiation"), exports);
__exportStar(require("./bodaccVente"), exports);
__exportStar(require("./bodaccVenteAllOf"), exports);
__exportStar(require("./comptesAnnuels200ResponseValueInner"), exports);
__exportStar(require("./comptesAnnuels200ResponseValueInnerSectionsInner"), exports);
__exportStar(require("./comptesAnnuels200ResponseValueInnerSectionsInnerLiassesInner"), exports);
__exportStar(require("./comptesAnnuels200ResponseValueInnerSectionsInnerLiassesInnerColonnesInner"), exports);
__exportStar(require("./document"), exports);
__exportStar(require("./documentActe"), exports);
__exportStar(require("./documentActeAllOf"), exports);
__exportStar(require("./documentActeAllOfTitres"), exports);
__exportStar(require("./documentComptes"), exports);
__exportStar(require("./documentComptesAllOf"), exports);
__exportStar(require("./entrepriseBase"), exports);
__exportStar(require("./entrepriseBaseConventionsCollectivesInner"), exports);
__exportStar(require("./entrepriseFiche"), exports);
__exportStar(require("./entrepriseFicheAllOf"), exports);
__exportStar(require("./entrepriseFicheAllOfActes"), exports);
__exportStar(require("./entrepriseFicheAllOfBeneficiairesEffectifs"), exports);
__exportStar(require("./entrepriseFicheAllOfClasses"), exports);
__exportStar(require("./entrepriseFicheAllOfComptes"), exports);
__exportStar(require("./entrepriseFicheAllOfDepotsActes"), exports);
__exportStar(require("./entrepriseFicheAllOfDerniersStatuts"), exports);
__exportStar(require("./entrepriseFicheAllOfDetailsPartsDirectes"), exports);
__exportStar(require("./entrepriseFicheAllOfDetailsPartsIndirectes"), exports);
__exportStar(require("./entrepriseFicheAllOfDetailsPartsIndirectesDetailsEnIndivision"), exports);
__exportStar(require("./entrepriseFicheAllOfDetailsPartsIndirectesDetailsEnPersonneMorale"), exports);
__exportStar(require("./entrepriseFicheAllOfDetailsPartsVocationTitulaire"), exports);
__exportStar(require("./entrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsDirectes"), exports);
__exportStar(require("./entrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectes"), exports);
__exportStar(require("./entrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectesDetailsEnIndivision"), exports);
__exportStar(require("./entrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectesDetailsEnPersonneMorale"), exports);
__exportStar(require("./entrepriseFicheAllOfDetailsSocieteDeGestion"), exports);
__exportStar(require("./entrepriseFicheAllOfDetailsVotesDirects"), exports);
__exportStar(require("./entrepriseFicheAllOfDetailsVotesIndirects"), exports);
__exportStar(require("./entrepriseFicheAllOfDetailsVotesIndirectsDetailsEnIndivision"), exports);
__exportStar(require("./entrepriseFicheAllOfDetailsVotesIndirectsDetailsEnPersonneMorale"), exports);
__exportStar(require("./entrepriseFicheAllOfEvenements"), exports);
__exportStar(require("./entrepriseFicheAllOfExtraitImmatriculation"), exports);
__exportStar(require("./entrepriseFicheAllOfMarques"), exports);
__exportStar(require("./entrepriseFicheAllOfProceduresCollectives"), exports);
__exportStar(require("./entrepriseFicheAllOfRnm"), exports);
__exportStar(require("./entrepriseRecherche"), exports);
__exportStar(require("./entrepriseRechercheAllOf"), exports);
__exportStar(require("./etablissementFiche"), exports);
__exportStar(require("./etablissementFicheDomiciliation"), exports);
__exportStar(require("./etablissementRecherche"), exports);
__exportStar(require("./lienSuccession"), exports);
__exportStar(require("./personneMarque"), exports);
__exportStar(require("./publication"), exports);
__exportStar(require("./ratios"), exports);
__exportStar(require("./recherche200Response"), exports);
__exportStar(require("./recherche200ResponseResultatsInner"), exports);
__exportStar(require("./recherche200ResponseResultatsInnerAllOf"), exports);
__exportStar(require("./recherche200ResponseResultatsInnerAllOfPublicationsInner"), exports);
__exportStar(require("./recherche200ResponseResultatsInnerAllOfPublicationsInnerAllOf"), exports);
__exportStar(require("./rechercheBeneficiaires200Response"), exports);
__exportStar(require("./rechercheBeneficiaires200ResponseResultatsInner"), exports);
__exportStar(require("./rechercheBeneficiaires200ResponseResultatsInnerAllOf"), exports);
__exportStar(require("./rechercheDirigeants200Response"), exports);
__exportStar(require("./rechercheDirigeants200ResponseResultatsInner"), exports);
__exportStar(require("./rechercheDirigeants200ResponseResultatsInnerAllOf"), exports);
__exportStar(require("./rechercheDocuments200Response"), exports);
__exportStar(require("./rechercheDocuments200ResponseResultatsInner"), exports);
__exportStar(require("./rechercheDocuments200ResponseResultatsInnerAllOf"), exports);
__exportStar(require("./recherchePublications200Response"), exports);
__exportStar(require("./recherchePublications200ResponseResultatsInner"), exports);
__exportStar(require("./representant"), exports);
__exportStar(require("./representantRecherche"), exports);
__exportStar(require("./representantRechercheAllOf"), exports);
__exportStar(require("./suggestions200Response"), exports);
__exportStar(require("./suggestions200ResponseResultatsDenominationInner"), exports);
__exportStar(require("./suggestions200ResponseResultatsDenominationInnerAllOf"), exports);
__exportStar(require("./suggestions200ResponseResultatsNomCompletInner"), exports);
__exportStar(require("./suggestions200ResponseResultatsNomCompletInnerAllOf"), exports);
__exportStar(require("./suggestions200ResponseResultatsNomEntrepriseInner"), exports);
__exportStar(require("./suggestions200ResponseResultatsNomEntrepriseInnerAllOf"), exports);
__exportStar(require("./suggestions200ResponseResultatsRepresentantInner"), exports);
__exportStar(require("./suggestions200ResponseResultatsRepresentantInnerAllOf"), exports);
__exportStar(require("./suggestions200ResponseResultatsSirenInner"), exports);
__exportStar(require("./suggestions200ResponseResultatsSirenInnerAllOf"), exports);
__exportStar(require("./suggestions200ResponseResultatsSiretInner"), exports);
__exportStar(require("./suggestions200ResponseResultatsSiretInnerAllOf"), exports);
__exportStar(require("./suiviJetons200Response"), exports);
__exportStar(require("./surveillanceDirigeant200Response"), exports);
__exportStar(require("./surveillanceDirigeant201Response"), exports);
__exportStar(require("./surveillanceDirigeantRequestInner"), exports);
__exportStar(require("./surveillanceEntreprise200Response"), exports);
__exportStar(require("./surveillanceEntreprise201Response"), exports);
__exportStar(require("./surveillanceEntrepriseRequestInner"), exports);
__exportStar(require("./surveillanceListeInformationsRequest"), exports);
__exportStar(require("./surveillanceNotificationsDelete200Response"), exports);
const association_1 = require("./association");
const associationAdresseGestionnaire_1 = require("./associationAdresseGestionnaire");
const associationAdresseSiege_1 = require("./associationAdresseSiege");
const associationPublicationsJoafe_1 = require("./associationPublicationsJoafe");
const beneficiaire_1 = require("./beneficiaire");
const bodacc_1 = require("./bodacc");
const bodaccAchat_1 = require("./bodaccAchat");
const bodaccAchatAllOf_1 = require("./bodaccAchatAllOf");
const bodaccCreation_1 = require("./bodaccCreation");
const bodaccCreationAllOf_1 = require("./bodaccCreationAllOf");
const bodaccDepotDesComptes_1 = require("./bodaccDepotDesComptes");
const bodaccDepotDesComptesAllOf_1 = require("./bodaccDepotDesComptesAllOf");
const bodaccImmatriculation_1 = require("./bodaccImmatriculation");
const bodaccImmatriculationAllOf_1 = require("./bodaccImmatriculationAllOf");
const bodaccModification_1 = require("./bodaccModification");
const bodaccModificationAllOf_1 = require("./bodaccModificationAllOf");
const bodaccProcedureCollective_1 = require("./bodaccProcedureCollective");
const bodaccProcedureCollectiveAllOf_1 = require("./bodaccProcedureCollectiveAllOf");
const bodaccRadiation_1 = require("./bodaccRadiation");
const bodaccVente_1 = require("./bodaccVente");
const bodaccVenteAllOf_1 = require("./bodaccVenteAllOf");
const comptesAnnuels200ResponseValueInner_1 = require("./comptesAnnuels200ResponseValueInner");
const comptesAnnuels200ResponseValueInnerSectionsInner_1 = require("./comptesAnnuels200ResponseValueInnerSectionsInner");
const comptesAnnuels200ResponseValueInnerSectionsInnerLiassesInner_1 = require("./comptesAnnuels200ResponseValueInnerSectionsInnerLiassesInner");
const comptesAnnuels200ResponseValueInnerSectionsInnerLiassesInnerColonnesInner_1 = require("./comptesAnnuels200ResponseValueInnerSectionsInnerLiassesInnerColonnesInner");
const document_1 = require("./document");
const documentActe_1 = require("./documentActe");
const documentActeAllOf_1 = require("./documentActeAllOf");
const documentActeAllOfTitres_1 = require("./documentActeAllOfTitres");
const documentComptes_1 = require("./documentComptes");
const documentComptesAllOf_1 = require("./documentComptesAllOf");
const entrepriseBase_1 = require("./entrepriseBase");
const entrepriseBaseConventionsCollectivesInner_1 = require("./entrepriseBaseConventionsCollectivesInner");
const entrepriseFiche_1 = require("./entrepriseFiche");
const entrepriseFicheAllOf_1 = require("./entrepriseFicheAllOf");
const entrepriseFicheAllOfActes_1 = require("./entrepriseFicheAllOfActes");
const entrepriseFicheAllOfBeneficiairesEffectifs_1 = require("./entrepriseFicheAllOfBeneficiairesEffectifs");
const entrepriseFicheAllOfClasses_1 = require("./entrepriseFicheAllOfClasses");
const entrepriseFicheAllOfComptes_1 = require("./entrepriseFicheAllOfComptes");
const entrepriseFicheAllOfDepotsActes_1 = require("./entrepriseFicheAllOfDepotsActes");
const entrepriseFicheAllOfDerniersStatuts_1 = require("./entrepriseFicheAllOfDerniersStatuts");
const entrepriseFicheAllOfDetailsPartsDirectes_1 = require("./entrepriseFicheAllOfDetailsPartsDirectes");
const entrepriseFicheAllOfDetailsPartsIndirectes_1 = require("./entrepriseFicheAllOfDetailsPartsIndirectes");
const entrepriseFicheAllOfDetailsPartsIndirectesDetailsEnIndivision_1 = require("./entrepriseFicheAllOfDetailsPartsIndirectesDetailsEnIndivision");
const entrepriseFicheAllOfDetailsPartsIndirectesDetailsEnPersonneMorale_1 = require("./entrepriseFicheAllOfDetailsPartsIndirectesDetailsEnPersonneMorale");
const entrepriseFicheAllOfDetailsPartsVocationTitulaire_1 = require("./entrepriseFicheAllOfDetailsPartsVocationTitulaire");
const entrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsDirectes_1 = require("./entrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsDirectes");
const entrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectes_1 = require("./entrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectes");
const entrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectesDetailsEnIndivision_1 = require("./entrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectesDetailsEnIndivision");
const entrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectesDetailsEnPersonneMorale_1 = require("./entrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectesDetailsEnPersonneMorale");
const entrepriseFicheAllOfDetailsSocieteDeGestion_1 = require("./entrepriseFicheAllOfDetailsSocieteDeGestion");
const entrepriseFicheAllOfDetailsVotesDirects_1 = require("./entrepriseFicheAllOfDetailsVotesDirects");
const entrepriseFicheAllOfDetailsVotesIndirects_1 = require("./entrepriseFicheAllOfDetailsVotesIndirects");
const entrepriseFicheAllOfDetailsVotesIndirectsDetailsEnIndivision_1 = require("./entrepriseFicheAllOfDetailsVotesIndirectsDetailsEnIndivision");
const entrepriseFicheAllOfDetailsVotesIndirectsDetailsEnPersonneMorale_1 = require("./entrepriseFicheAllOfDetailsVotesIndirectsDetailsEnPersonneMorale");
const entrepriseFicheAllOfEvenements_1 = require("./entrepriseFicheAllOfEvenements");
const entrepriseFicheAllOfExtraitImmatriculation_1 = require("./entrepriseFicheAllOfExtraitImmatriculation");
const entrepriseFicheAllOfMarques_1 = require("./entrepriseFicheAllOfMarques");
const entrepriseFicheAllOfProceduresCollectives_1 = require("./entrepriseFicheAllOfProceduresCollectives");
const entrepriseFicheAllOfRnm_1 = require("./entrepriseFicheAllOfRnm");
const entrepriseRecherche_1 = require("./entrepriseRecherche");
const entrepriseRechercheAllOf_1 = require("./entrepriseRechercheAllOf");
const etablissementFiche_1 = require("./etablissementFiche");
const etablissementFicheDomiciliation_1 = require("./etablissementFicheDomiciliation");
const etablissementRecherche_1 = require("./etablissementRecherche");
const lienSuccession_1 = require("./lienSuccession");
const personneMarque_1 = require("./personneMarque");
const publication_1 = require("./publication");
const ratios_1 = require("./ratios");
const recherche200Response_1 = require("./recherche200Response");
const recherche200ResponseResultatsInner_1 = require("./recherche200ResponseResultatsInner");
const recherche200ResponseResultatsInnerAllOf_1 = require("./recherche200ResponseResultatsInnerAllOf");
const recherche200ResponseResultatsInnerAllOfPublicationsInner_1 = require("./recherche200ResponseResultatsInnerAllOfPublicationsInner");
const recherche200ResponseResultatsInnerAllOfPublicationsInnerAllOf_1 = require("./recherche200ResponseResultatsInnerAllOfPublicationsInnerAllOf");
const rechercheBeneficiaires200Response_1 = require("./rechercheBeneficiaires200Response");
const rechercheBeneficiaires200ResponseResultatsInner_1 = require("./rechercheBeneficiaires200ResponseResultatsInner");
const rechercheBeneficiaires200ResponseResultatsInnerAllOf_1 = require("./rechercheBeneficiaires200ResponseResultatsInnerAllOf");
const rechercheDirigeants200Response_1 = require("./rechercheDirigeants200Response");
const rechercheDirigeants200ResponseResultatsInner_1 = require("./rechercheDirigeants200ResponseResultatsInner");
const rechercheDirigeants200ResponseResultatsInnerAllOf_1 = require("./rechercheDirigeants200ResponseResultatsInnerAllOf");
const rechercheDocuments200Response_1 = require("./rechercheDocuments200Response");
const rechercheDocuments200ResponseResultatsInner_1 = require("./rechercheDocuments200ResponseResultatsInner");
const rechercheDocuments200ResponseResultatsInnerAllOf_1 = require("./rechercheDocuments200ResponseResultatsInnerAllOf");
const recherchePublications200Response_1 = require("./recherchePublications200Response");
const recherchePublications200ResponseResultatsInner_1 = require("./recherchePublications200ResponseResultatsInner");
const representant_1 = require("./representant");
const representantRecherche_1 = require("./representantRecherche");
const representantRechercheAllOf_1 = require("./representantRechercheAllOf");
const suggestions200Response_1 = require("./suggestions200Response");
const suggestions200ResponseResultatsDenominationInner_1 = require("./suggestions200ResponseResultatsDenominationInner");
const suggestions200ResponseResultatsDenominationInnerAllOf_1 = require("./suggestions200ResponseResultatsDenominationInnerAllOf");
const suggestions200ResponseResultatsNomCompletInner_1 = require("./suggestions200ResponseResultatsNomCompletInner");
const suggestions200ResponseResultatsNomCompletInnerAllOf_1 = require("./suggestions200ResponseResultatsNomCompletInnerAllOf");
const suggestions200ResponseResultatsNomEntrepriseInner_1 = require("./suggestions200ResponseResultatsNomEntrepriseInner");
const suggestions200ResponseResultatsNomEntrepriseInnerAllOf_1 = require("./suggestions200ResponseResultatsNomEntrepriseInnerAllOf");
const suggestions200ResponseResultatsRepresentantInner_1 = require("./suggestions200ResponseResultatsRepresentantInner");
const suggestions200ResponseResultatsRepresentantInnerAllOf_1 = require("./suggestions200ResponseResultatsRepresentantInnerAllOf");
const suggestions200ResponseResultatsSirenInner_1 = require("./suggestions200ResponseResultatsSirenInner");
const suggestions200ResponseResultatsSirenInnerAllOf_1 = require("./suggestions200ResponseResultatsSirenInnerAllOf");
const suggestions200ResponseResultatsSiretInner_1 = require("./suggestions200ResponseResultatsSiretInner");
const suggestions200ResponseResultatsSiretInnerAllOf_1 = require("./suggestions200ResponseResultatsSiretInnerAllOf");
const suiviJetons200Response_1 = require("./suiviJetons200Response");
const surveillanceDirigeant200Response_1 = require("./surveillanceDirigeant200Response");
const surveillanceDirigeant201Response_1 = require("./surveillanceDirigeant201Response");
const surveillanceDirigeantRequestInner_1 = require("./surveillanceDirigeantRequestInner");
const surveillanceEntreprise200Response_1 = require("./surveillanceEntreprise200Response");
const surveillanceEntreprise201Response_1 = require("./surveillanceEntreprise201Response");
const surveillanceEntrepriseRequestInner_1 = require("./surveillanceEntrepriseRequestInner");
const surveillanceListeInformationsRequest_1 = require("./surveillanceListeInformationsRequest");
const surveillanceNotificationsDelete200Response_1 = require("./surveillanceNotificationsDelete200Response");
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
let enumsMap = {
    "ComptesAnnuels200ResponseValueInner.TypeComptesEnum": comptesAnnuels200ResponseValueInner_1.ComptesAnnuels200ResponseValueInner.TypeComptesEnum,
    "ComptesAnnuels200ResponseValueInner.LibelleTypeComptesEnum": comptesAnnuels200ResponseValueInner_1.ComptesAnnuels200ResponseValueInner.LibelleTypeComptesEnum,
    "Document.TypeEnum": document_1.Document.TypeEnum,
    "EntrepriseFicheAllOfMarques.StatutEnum": entrepriseFicheAllOfMarques_1.EntrepriseFicheAllOfMarques.StatutEnum,
    "EntrepriseFicheAllOfMarques.TypeEnum": entrepriseFicheAllOfMarques_1.EntrepriseFicheAllOfMarques.TypeEnum,
    "EntrepriseFicheAllOfProceduresCollectives.TypeEnum": entrepriseFicheAllOfProceduresCollectives_1.EntrepriseFicheAllOfProceduresCollectives.TypeEnum,
    "Publication.TypeEnum": publication_1.Publication.TypeEnum,
    "Recherche200ResponseResultatsInnerAllOfPublicationsInner.TypeEnum": recherche200ResponseResultatsInnerAllOfPublicationsInner_1.Recherche200ResponseResultatsInnerAllOfPublicationsInner.TypeEnum,
    "RecherchePublications200ResponseResultatsInner.TypeEnum": recherchePublications200ResponseResultatsInner_1.RecherchePublications200ResponseResultatsInner.TypeEnum,
};
let typeMap = {
    "Association": association_1.Association,
    "AssociationAdresseGestionnaire": associationAdresseGestionnaire_1.AssociationAdresseGestionnaire,
    "AssociationAdresseSiege": associationAdresseSiege_1.AssociationAdresseSiege,
    "AssociationPublicationsJoafe": associationPublicationsJoafe_1.AssociationPublicationsJoafe,
    "Beneficiaire": beneficiaire_1.Beneficiaire,
    "Bodacc": bodacc_1.Bodacc,
    "BodaccAchat": bodaccAchat_1.BodaccAchat,
    "BodaccAchatAllOf": bodaccAchatAllOf_1.BodaccAchatAllOf,
    "BodaccCreation": bodaccCreation_1.BodaccCreation,
    "BodaccCreationAllOf": bodaccCreationAllOf_1.BodaccCreationAllOf,
    "BodaccDepotDesComptes": bodaccDepotDesComptes_1.BodaccDepotDesComptes,
    "BodaccDepotDesComptesAllOf": bodaccDepotDesComptesAllOf_1.BodaccDepotDesComptesAllOf,
    "BodaccImmatriculation": bodaccImmatriculation_1.BodaccImmatriculation,
    "BodaccImmatriculationAllOf": bodaccImmatriculationAllOf_1.BodaccImmatriculationAllOf,
    "BodaccModification": bodaccModification_1.BodaccModification,
    "BodaccModificationAllOf": bodaccModificationAllOf_1.BodaccModificationAllOf,
    "BodaccProcedureCollective": bodaccProcedureCollective_1.BodaccProcedureCollective,
    "BodaccProcedureCollectiveAllOf": bodaccProcedureCollectiveAllOf_1.BodaccProcedureCollectiveAllOf,
    "BodaccRadiation": bodaccRadiation_1.BodaccRadiation,
    "BodaccVente": bodaccVente_1.BodaccVente,
    "BodaccVenteAllOf": bodaccVenteAllOf_1.BodaccVenteAllOf,
    "ComptesAnnuels200ResponseValueInner": comptesAnnuels200ResponseValueInner_1.ComptesAnnuels200ResponseValueInner,
    "ComptesAnnuels200ResponseValueInnerSectionsInner": comptesAnnuels200ResponseValueInnerSectionsInner_1.ComptesAnnuels200ResponseValueInnerSectionsInner,
    "ComptesAnnuels200ResponseValueInnerSectionsInnerLiassesInner": comptesAnnuels200ResponseValueInnerSectionsInnerLiassesInner_1.ComptesAnnuels200ResponseValueInnerSectionsInnerLiassesInner,
    "ComptesAnnuels200ResponseValueInnerSectionsInnerLiassesInnerColonnesInner": comptesAnnuels200ResponseValueInnerSectionsInnerLiassesInnerColonnesInner_1.ComptesAnnuels200ResponseValueInnerSectionsInnerLiassesInnerColonnesInner,
    "Document": document_1.Document,
    "DocumentActe": documentActe_1.DocumentActe,
    "DocumentActeAllOf": documentActeAllOf_1.DocumentActeAllOf,
    "DocumentActeAllOfTitres": documentActeAllOfTitres_1.DocumentActeAllOfTitres,
    "DocumentComptes": documentComptes_1.DocumentComptes,
    "DocumentComptesAllOf": documentComptesAllOf_1.DocumentComptesAllOf,
    "EntrepriseBase": entrepriseBase_1.EntrepriseBase,
    "EntrepriseBaseConventionsCollectivesInner": entrepriseBaseConventionsCollectivesInner_1.EntrepriseBaseConventionsCollectivesInner,
    "EntrepriseFiche": entrepriseFiche_1.EntrepriseFiche,
    "EntrepriseFicheAllOf": entrepriseFicheAllOf_1.EntrepriseFicheAllOf,
    "EntrepriseFicheAllOfActes": entrepriseFicheAllOfActes_1.EntrepriseFicheAllOfActes,
    "EntrepriseFicheAllOfBeneficiairesEffectifs": entrepriseFicheAllOfBeneficiairesEffectifs_1.EntrepriseFicheAllOfBeneficiairesEffectifs,
    "EntrepriseFicheAllOfClasses": entrepriseFicheAllOfClasses_1.EntrepriseFicheAllOfClasses,
    "EntrepriseFicheAllOfComptes": entrepriseFicheAllOfComptes_1.EntrepriseFicheAllOfComptes,
    "EntrepriseFicheAllOfDepotsActes": entrepriseFicheAllOfDepotsActes_1.EntrepriseFicheAllOfDepotsActes,
    "EntrepriseFicheAllOfDerniersStatuts": entrepriseFicheAllOfDerniersStatuts_1.EntrepriseFicheAllOfDerniersStatuts,
    "EntrepriseFicheAllOfDetailsPartsDirectes": entrepriseFicheAllOfDetailsPartsDirectes_1.EntrepriseFicheAllOfDetailsPartsDirectes,
    "EntrepriseFicheAllOfDetailsPartsIndirectes": entrepriseFicheAllOfDetailsPartsIndirectes_1.EntrepriseFicheAllOfDetailsPartsIndirectes,
    "EntrepriseFicheAllOfDetailsPartsIndirectesDetailsEnIndivision": entrepriseFicheAllOfDetailsPartsIndirectesDetailsEnIndivision_1.EntrepriseFicheAllOfDetailsPartsIndirectesDetailsEnIndivision,
    "EntrepriseFicheAllOfDetailsPartsIndirectesDetailsEnPersonneMorale": entrepriseFicheAllOfDetailsPartsIndirectesDetailsEnPersonneMorale_1.EntrepriseFicheAllOfDetailsPartsIndirectesDetailsEnPersonneMorale,
    "EntrepriseFicheAllOfDetailsPartsVocationTitulaire": entrepriseFicheAllOfDetailsPartsVocationTitulaire_1.EntrepriseFicheAllOfDetailsPartsVocationTitulaire,
    "EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsDirectes": entrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsDirectes_1.EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsDirectes,
    "EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectes": entrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectes_1.EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectes,
    "EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectesDetailsEnIndivision": entrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectesDetailsEnIndivision_1.EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectesDetailsEnIndivision,
    "EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectesDetailsEnPersonneMorale": entrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectesDetailsEnPersonneMorale_1.EntrepriseFicheAllOfDetailsPartsVocationTitulaireDetailsIndirectesDetailsEnPersonneMorale,
    "EntrepriseFicheAllOfDetailsSocieteDeGestion": entrepriseFicheAllOfDetailsSocieteDeGestion_1.EntrepriseFicheAllOfDetailsSocieteDeGestion,
    "EntrepriseFicheAllOfDetailsVotesDirects": entrepriseFicheAllOfDetailsVotesDirects_1.EntrepriseFicheAllOfDetailsVotesDirects,
    "EntrepriseFicheAllOfDetailsVotesIndirects": entrepriseFicheAllOfDetailsVotesIndirects_1.EntrepriseFicheAllOfDetailsVotesIndirects,
    "EntrepriseFicheAllOfDetailsVotesIndirectsDetailsEnIndivision": entrepriseFicheAllOfDetailsVotesIndirectsDetailsEnIndivision_1.EntrepriseFicheAllOfDetailsVotesIndirectsDetailsEnIndivision,
    "EntrepriseFicheAllOfDetailsVotesIndirectsDetailsEnPersonneMorale": entrepriseFicheAllOfDetailsVotesIndirectsDetailsEnPersonneMorale_1.EntrepriseFicheAllOfDetailsVotesIndirectsDetailsEnPersonneMorale,
    "EntrepriseFicheAllOfEvenements": entrepriseFicheAllOfEvenements_1.EntrepriseFicheAllOfEvenements,
    "EntrepriseFicheAllOfExtraitImmatriculation": entrepriseFicheAllOfExtraitImmatriculation_1.EntrepriseFicheAllOfExtraitImmatriculation,
    "EntrepriseFicheAllOfMarques": entrepriseFicheAllOfMarques_1.EntrepriseFicheAllOfMarques,
    "EntrepriseFicheAllOfProceduresCollectives": entrepriseFicheAllOfProceduresCollectives_1.EntrepriseFicheAllOfProceduresCollectives,
    "EntrepriseFicheAllOfRnm": entrepriseFicheAllOfRnm_1.EntrepriseFicheAllOfRnm,
    "EntrepriseRecherche": entrepriseRecherche_1.EntrepriseRecherche,
    "EntrepriseRechercheAllOf": entrepriseRechercheAllOf_1.EntrepriseRechercheAllOf,
    "EtablissementFiche": etablissementFiche_1.EtablissementFiche,
    "EtablissementFicheDomiciliation": etablissementFicheDomiciliation_1.EtablissementFicheDomiciliation,
    "EtablissementRecherche": etablissementRecherche_1.EtablissementRecherche,
    "LienSuccession": lienSuccession_1.LienSuccession,
    "PersonneMarque": personneMarque_1.PersonneMarque,
    "Publication": publication_1.Publication,
    "Ratios": ratios_1.Ratios,
    "Recherche200Response": recherche200Response_1.Recherche200Response,
    "Recherche200ResponseResultatsInner": recherche200ResponseResultatsInner_1.Recherche200ResponseResultatsInner,
    "Recherche200ResponseResultatsInnerAllOf": recherche200ResponseResultatsInnerAllOf_1.Recherche200ResponseResultatsInnerAllOf,
    "Recherche200ResponseResultatsInnerAllOfPublicationsInner": recherche200ResponseResultatsInnerAllOfPublicationsInner_1.Recherche200ResponseResultatsInnerAllOfPublicationsInner,
    "Recherche200ResponseResultatsInnerAllOfPublicationsInnerAllOf": recherche200ResponseResultatsInnerAllOfPublicationsInnerAllOf_1.Recherche200ResponseResultatsInnerAllOfPublicationsInnerAllOf,
    "RechercheBeneficiaires200Response": rechercheBeneficiaires200Response_1.RechercheBeneficiaires200Response,
    "RechercheBeneficiaires200ResponseResultatsInner": rechercheBeneficiaires200ResponseResultatsInner_1.RechercheBeneficiaires200ResponseResultatsInner,
    "RechercheBeneficiaires200ResponseResultatsInnerAllOf": rechercheBeneficiaires200ResponseResultatsInnerAllOf_1.RechercheBeneficiaires200ResponseResultatsInnerAllOf,
    "RechercheDirigeants200Response": rechercheDirigeants200Response_1.RechercheDirigeants200Response,
    "RechercheDirigeants200ResponseResultatsInner": rechercheDirigeants200ResponseResultatsInner_1.RechercheDirigeants200ResponseResultatsInner,
    "RechercheDirigeants200ResponseResultatsInnerAllOf": rechercheDirigeants200ResponseResultatsInnerAllOf_1.RechercheDirigeants200ResponseResultatsInnerAllOf,
    "RechercheDocuments200Response": rechercheDocuments200Response_1.RechercheDocuments200Response,
    "RechercheDocuments200ResponseResultatsInner": rechercheDocuments200ResponseResultatsInner_1.RechercheDocuments200ResponseResultatsInner,
    "RechercheDocuments200ResponseResultatsInnerAllOf": rechercheDocuments200ResponseResultatsInnerAllOf_1.RechercheDocuments200ResponseResultatsInnerAllOf,
    "RecherchePublications200Response": recherchePublications200Response_1.RecherchePublications200Response,
    "RecherchePublications200ResponseResultatsInner": recherchePublications200ResponseResultatsInner_1.RecherchePublications200ResponseResultatsInner,
    "Representant": representant_1.Representant,
    "RepresentantRecherche": representantRecherche_1.RepresentantRecherche,
    "RepresentantRechercheAllOf": representantRechercheAllOf_1.RepresentantRechercheAllOf,
    "Suggestions200Response": suggestions200Response_1.Suggestions200Response,
    "Suggestions200ResponseResultatsDenominationInner": suggestions200ResponseResultatsDenominationInner_1.Suggestions200ResponseResultatsDenominationInner,
    "Suggestions200ResponseResultatsDenominationInnerAllOf": suggestions200ResponseResultatsDenominationInnerAllOf_1.Suggestions200ResponseResultatsDenominationInnerAllOf,
    "Suggestions200ResponseResultatsNomCompletInner": suggestions200ResponseResultatsNomCompletInner_1.Suggestions200ResponseResultatsNomCompletInner,
    "Suggestions200ResponseResultatsNomCompletInnerAllOf": suggestions200ResponseResultatsNomCompletInnerAllOf_1.Suggestions200ResponseResultatsNomCompletInnerAllOf,
    "Suggestions200ResponseResultatsNomEntrepriseInner": suggestions200ResponseResultatsNomEntrepriseInner_1.Suggestions200ResponseResultatsNomEntrepriseInner,
    "Suggestions200ResponseResultatsNomEntrepriseInnerAllOf": suggestions200ResponseResultatsNomEntrepriseInnerAllOf_1.Suggestions200ResponseResultatsNomEntrepriseInnerAllOf,
    "Suggestions200ResponseResultatsRepresentantInner": suggestions200ResponseResultatsRepresentantInner_1.Suggestions200ResponseResultatsRepresentantInner,
    "Suggestions200ResponseResultatsRepresentantInnerAllOf": suggestions200ResponseResultatsRepresentantInnerAllOf_1.Suggestions200ResponseResultatsRepresentantInnerAllOf,
    "Suggestions200ResponseResultatsSirenInner": suggestions200ResponseResultatsSirenInner_1.Suggestions200ResponseResultatsSirenInner,
    "Suggestions200ResponseResultatsSirenInnerAllOf": suggestions200ResponseResultatsSirenInnerAllOf_1.Suggestions200ResponseResultatsSirenInnerAllOf,
    "Suggestions200ResponseResultatsSiretInner": suggestions200ResponseResultatsSiretInner_1.Suggestions200ResponseResultatsSiretInner,
    "Suggestions200ResponseResultatsSiretInnerAllOf": suggestions200ResponseResultatsSiretInnerAllOf_1.Suggestions200ResponseResultatsSiretInnerAllOf,
    "SuiviJetons200Response": suiviJetons200Response_1.SuiviJetons200Response,
    "SurveillanceDirigeant200Response": surveillanceDirigeant200Response_1.SurveillanceDirigeant200Response,
    "SurveillanceDirigeant201Response": surveillanceDirigeant201Response_1.SurveillanceDirigeant201Response,
    "SurveillanceDirigeantRequestInner": surveillanceDirigeantRequestInner_1.SurveillanceDirigeantRequestInner,
    "SurveillanceEntreprise200Response": surveillanceEntreprise200Response_1.SurveillanceEntreprise200Response,
    "SurveillanceEntreprise201Response": surveillanceEntreprise201Response_1.SurveillanceEntreprise201Response,
    "SurveillanceEntrepriseRequestInner": surveillanceEntrepriseRequestInner_1.SurveillanceEntrepriseRequestInner,
    "SurveillanceListeInformationsRequest": surveillanceListeInformationsRequest_1.SurveillanceListeInformationsRequest,
    "SurveillanceNotificationsDelete200Response": surveillanceNotificationsDelete200Response_1.SurveillanceNotificationsDelete200Response,
};
class ObjectSerializer {
    static findCorrectType(data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
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
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType; // use the type given in the discriminator
                    }
                    else {
                        return expectedType; // discriminator did not map to a type
                    }
                }
                else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }
    static serialize(data, type) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return data.toISOString();
        }
        else {
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
            let instance = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }
    static deserialize(data, type) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap[type]) { // is Enum
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
exports.ObjectSerializer = ObjectSerializer;
class HttpBasicAuth {
    constructor() {
        this.username = '';
        this.password = '';
    }
    applyToRequest(requestOptions) {
        requestOptions.auth = {
            username: this.username, password: this.password
        };
    }
}
exports.HttpBasicAuth = HttpBasicAuth;
class HttpBearerAuth {
    constructor() {
        this.accessToken = '';
    }
    applyToRequest(requestOptions) {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                ? this.accessToken()
                : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}
exports.HttpBearerAuth = HttpBearerAuth;
class ApiKeyAuth {
    constructor(location, paramName) {
        this.location = location;
        this.paramName = paramName;
        this.apiKey = '';
    }
    applyToRequest(requestOptions) {
        if (this.location == "query") {
            requestOptions.qs[this.paramName] = this.apiKey;
        }
        else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
        else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}
exports.ApiKeyAuth = ApiKeyAuth;
class OAuth {
    constructor() {
        this.accessToken = '';
    }
    applyToRequest(requestOptions) {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}
exports.OAuth = OAuth;
class VoidAuth {
    constructor() {
        this.username = '';
        this.password = '';
    }
    applyToRequest(_) {
        // Do nothing
    }
}
exports.VoidAuth = VoidAuth;
//# sourceMappingURL=models.js.map