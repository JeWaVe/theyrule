=begin
#Pappers API

#L'API de Pappers vous permet de récupérer des informations et documents sur les entreprises françaises à partir de leur numéro SIREN ou SIRET.  Vous devez indiquer votre clé d'API dans les requêtes, en utilisant le paramètre `api_token`.  L'URL d'accès à l'API est https://api.pappers.fr/v2/  Lien vers la documentation de la V1 : https://www.pappers.fr/api/documentation/v1  L'historique des modifications (changelog) est accessible à l'url suivante : https://www.pappers.fr/api/changelog 

The version of the OpenAPI document: 2.7.0
Contact: support@pappers.fr
Generated by: https://openapi-generator.tech
OpenAPI Generator version: 6.4.0

=end

require 'cgi'

module OpenapiClient
  class SuiviUtilisationApi
    attr_accessor :api_client

    def initialize(api_client = ApiClient.default)
      @api_client = api_client
    end
    # Récupère le suivi d'utilisation des jetons.
    # Vous devez fournir la clé d'utilisation de l'API.
    # @param api_token [String] Clé d&#39;utilisation de l&#39;API
    # @param [Hash] opts the optional parameters
    # @return [SuiviJetons200Response]
    def suivi_jetons(api_token, opts = {})
      data, _status_code, _headers = suivi_jetons_with_http_info(api_token, opts)
      data
    end

    # Récupère le suivi d&#39;utilisation des jetons.
    # Vous devez fournir la clé d&#39;utilisation de l&#39;API.
    # @param api_token [String] Clé d&#39;utilisation de l&#39;API
    # @param [Hash] opts the optional parameters
    # @return [Array<(SuiviJetons200Response, Integer, Hash)>] SuiviJetons200Response data, response status code and response headers
    def suivi_jetons_with_http_info(api_token, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: SuiviUtilisationApi.suivi_jetons ...'
      end
      # verify the required parameter 'api_token' is set
      if @api_client.config.client_side_validation && api_token.nil?
        fail ArgumentError, "Missing the required parameter 'api_token' when calling SuiviUtilisationApi.suivi_jetons"
      end
      # resource path
      local_var_path = '/suivi-jetons'

      # query parameters
      query_params = opts[:query_params] || {}
      query_params[:'api_token'] = api_token

      # header parameters
      header_params = opts[:header_params] || {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])

      # form parameters
      form_params = opts[:form_params] || {}

      # http body (model)
      post_body = opts[:debug_body]

      # return_type
      return_type = opts[:debug_return_type] || 'SuiviJetons200Response'

      # auth_names
      auth_names = opts[:debug_auth_names] || []

      new_options = opts.merge(
        :operation => :"SuiviUtilisationApi.suivi_jetons",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers = @api_client.call_api(:GET, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: SuiviUtilisationApi#suivi_jetons\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
  end
end