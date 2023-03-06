=begin
#Pappers API

#L'API de Pappers vous permet de récupérer des informations et documents sur les entreprises françaises à partir de leur numéro SIREN ou SIRET.  Vous devez indiquer votre clé d'API dans les requêtes, en utilisant le paramètre `api_token`.  L'URL d'accès à l'API est https://api.pappers.fr/v2/  Lien vers la documentation de la V1 : https://www.pappers.fr/api/documentation/v1  L'historique des modifications (changelog) est accessible à l'url suivante : https://www.pappers.fr/api/changelog 

The version of the OpenAPI document: 2.7.0
Contact: support@pappers.fr
Generated by: https://openapi-generator.tech
OpenAPI Generator version: 6.4.0

=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for OpenapiClient::DocumentActeAllOfTitres
# Automatically generated by openapi-generator (https://openapi-generator.tech)
# Please update as you see appropriate
describe OpenapiClient::DocumentActeAllOfTitres do
  let(:instance) { OpenapiClient::DocumentActeAllOfTitres.new }

  describe 'test an instance of DocumentActeAllOfTitres' do
    it 'should create an instance of DocumentActeAllOfTitres' do
      expect(instance).to be_instance_of(OpenapiClient::DocumentActeAllOfTitres)
    end
  end
  describe 'test attribute "type"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  describe 'test attribute "decision"' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end