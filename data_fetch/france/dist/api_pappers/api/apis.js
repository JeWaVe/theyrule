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
exports.APIS = exports.HttpError = void 0;
__exportStar(require("./comptesAnnuelsApi"), exports);
const comptesAnnuelsApi_1 = require("./comptesAnnuelsApi");
__exportStar(require("./documentsApi"), exports);
const documentsApi_1 = require("./documentsApi");
__exportStar(require("./ficheAssociationApi"), exports);
const ficheAssociationApi_1 = require("./ficheAssociationApi");
__exportStar(require("./ficheEntrepriseApi"), exports);
const ficheEntrepriseApi_1 = require("./ficheEntrepriseApi");
__exportStar(require("./rechercheApi"), exports);
const rechercheApi_1 = require("./rechercheApi");
__exportStar(require("./suggestionsAutocompleteApi"), exports);
const suggestionsAutocompleteApi_1 = require("./suggestionsAutocompleteApi");
__exportStar(require("./suiviUtilisationApi"), exports);
const suiviUtilisationApi_1 = require("./suiviUtilisationApi");
__exportStar(require("./surveillanceApi"), exports);
const surveillanceApi_1 = require("./surveillanceApi");
class HttpError extends Error {
    constructor(response, body, statusCode) {
        super('HTTP request failed');
        this.response = response;
        this.body = body;
        this.statusCode = statusCode;
        this.name = 'HttpError';
    }
}
exports.HttpError = HttpError;
exports.APIS = [comptesAnnuelsApi_1.ComptesAnnuelsApi, documentsApi_1.DocumentsApi, ficheAssociationApi_1.FicheAssociationApi, ficheEntrepriseApi_1.FicheEntrepriseApi, rechercheApi_1.RechercheApi, suggestionsAutocompleteApi_1.SuggestionsAutocompleteApi, suiviUtilisationApi_1.SuiviUtilisationApi, surveillanceApi_1.SurveillanceApi];
//# sourceMappingURL=apis.js.map