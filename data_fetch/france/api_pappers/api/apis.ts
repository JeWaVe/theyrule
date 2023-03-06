export * from './comptesAnnuelsApi';
import { ComptesAnnuelsApi } from './comptesAnnuelsApi';
export * from './documentsApi';
import { DocumentsApi } from './documentsApi';
export * from './ficheAssociationApi';
import { FicheAssociationApi } from './ficheAssociationApi';
export * from './ficheEntrepriseApi';
import { FicheEntrepriseApi } from './ficheEntrepriseApi';
export * from './rechercheApi';
import { RechercheApi } from './rechercheApi';
export * from './suggestionsAutocompleteApi';
import { SuggestionsAutocompleteApi } from './suggestionsAutocompleteApi';
export * from './suiviUtilisationApi';
import { SuiviUtilisationApi } from './suiviUtilisationApi';
export * from './surveillanceApi';
import { SurveillanceApi } from './surveillanceApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [ComptesAnnuelsApi, DocumentsApi, FicheAssociationApi, FicheEntrepriseApi, RechercheApi, SuggestionsAutocompleteApi, SuiviUtilisationApi, SurveillanceApi];
