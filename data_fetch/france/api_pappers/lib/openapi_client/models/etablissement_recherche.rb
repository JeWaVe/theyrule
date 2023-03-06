=begin
#Pappers API

#L'API de Pappers vous permet de récupérer des informations et documents sur les entreprises françaises à partir de leur numéro SIREN ou SIRET.  Vous devez indiquer votre clé d'API dans les requêtes, en utilisant le paramètre `api_token`.  L'URL d'accès à l'API est https://api.pappers.fr/v2/  Lien vers la documentation de la V1 : https://www.pappers.fr/api/documentation/v1  L'historique des modifications (changelog) est accessible à l'url suivante : https://www.pappers.fr/api/changelog 

The version of the OpenAPI document: 2.7.0
Contact: support@pappers.fr
Generated by: https://openapi-generator.tech
OpenAPI Generator version: 6.4.0

=end

require 'date'
require 'time'

module OpenapiClient
  class EtablissementRecherche
    # Numéro siret de l'établissement au format xxxxxxxxxxxxxx.
    attr_accessor :siret

    # Numéro siret de l'établissement au format xxx xxx xxx xxxxx.
    attr_accessor :siret_formate

    # Numéro NIC de l'établissement.
    attr_accessor :nic

    # Numéro de voie de l'établissement.
    attr_accessor :numero_voie

    # Indice de répétition de l'établissement.
    attr_accessor :indice_repetition

    # Type de voie de l'établissement.
    attr_accessor :type_voie

    # Libellé de la voie de l'établissement.
    attr_accessor :libelle_voie

    # Complément d'adresse de l'établissement.
    attr_accessor :complement_adresse

    # Première ligne de l'adresse de l'établissement. Correspond à l'ensemble des données numero_voie, indice_repetition, type_voie et libelle_voie.
    attr_accessor :adresse_ligne_1

    # Seconde ligne de l'adresse de l'établissement. Est égal à complement_adresse
    attr_accessor :adresse_ligne_2

    # Code postal de l'établissement.
    attr_accessor :code_postal

    # Ville de l'établissement.
    attr_accessor :ville

    # Latitude de l'établissement.
    attr_accessor :latitude

    # Longitude de l'établissement.
    attr_accessor :longitude

    # Attribute mapping from ruby-style variable name to JSON key.
    def self.attribute_map
      {
        :'siret' => :'siret',
        :'siret_formate' => :'siret_formate',
        :'nic' => :'nic',
        :'numero_voie' => :'numero_voie',
        :'indice_repetition' => :'indice_repetition',
        :'type_voie' => :'type_voie',
        :'libelle_voie' => :'libelle_voie',
        :'complement_adresse' => :'complement_adresse',
        :'adresse_ligne_1' => :'adresse_ligne_1',
        :'adresse_ligne_2' => :'adresse_ligne_2',
        :'code_postal' => :'code_postal',
        :'ville' => :'ville',
        :'latitude' => :'latitude',
        :'longitude' => :'longitude'
      }
    end

    # Returns all the JSON keys this model knows about
    def self.acceptable_attributes
      attribute_map.values
    end

    # Attribute type mapping.
    def self.openapi_types
      {
        :'siret' => :'String',
        :'siret_formate' => :'String',
        :'nic' => :'String',
        :'numero_voie' => :'Integer',
        :'indice_repetition' => :'String',
        :'type_voie' => :'String',
        :'libelle_voie' => :'String',
        :'complement_adresse' => :'String',
        :'adresse_ligne_1' => :'String',
        :'adresse_ligne_2' => :'String',
        :'code_postal' => :'String',
        :'ville' => :'String',
        :'latitude' => :'Float',
        :'longitude' => :'Float'
      }
    end

    # List of attributes with nullable: true
    def self.openapi_nullable
      Set.new([
      ])
    end

    # Initializes the object
    # @param [Hash] attributes Model attributes in the form of hash
    def initialize(attributes = {})
      if (!attributes.is_a?(Hash))
        fail ArgumentError, "The input argument (attributes) must be a hash in `OpenapiClient::EtablissementRecherche` initialize method"
      end

      # check to see if the attribute exists and convert string to symbol for hash key
      attributes = attributes.each_with_object({}) { |(k, v), h|
        if (!self.class.attribute_map.key?(k.to_sym))
          fail ArgumentError, "`#{k}` is not a valid attribute in `OpenapiClient::EtablissementRecherche`. Please check the name to make sure it's valid. List of attributes: " + self.class.attribute_map.keys.inspect
        end
        h[k.to_sym] = v
      }

      if attributes.key?(:'siret')
        self.siret = attributes[:'siret']
      end

      if attributes.key?(:'siret_formate')
        self.siret_formate = attributes[:'siret_formate']
      end

      if attributes.key?(:'nic')
        self.nic = attributes[:'nic']
      end

      if attributes.key?(:'numero_voie')
        self.numero_voie = attributes[:'numero_voie']
      end

      if attributes.key?(:'indice_repetition')
        self.indice_repetition = attributes[:'indice_repetition']
      end

      if attributes.key?(:'type_voie')
        self.type_voie = attributes[:'type_voie']
      end

      if attributes.key?(:'libelle_voie')
        self.libelle_voie = attributes[:'libelle_voie']
      end

      if attributes.key?(:'complement_adresse')
        self.complement_adresse = attributes[:'complement_adresse']
      end

      if attributes.key?(:'adresse_ligne_1')
        self.adresse_ligne_1 = attributes[:'adresse_ligne_1']
      end

      if attributes.key?(:'adresse_ligne_2')
        self.adresse_ligne_2 = attributes[:'adresse_ligne_2']
      end

      if attributes.key?(:'code_postal')
        self.code_postal = attributes[:'code_postal']
      end

      if attributes.key?(:'ville')
        self.ville = attributes[:'ville']
      end

      if attributes.key?(:'latitude')
        self.latitude = attributes[:'latitude']
      end

      if attributes.key?(:'longitude')
        self.longitude = attributes[:'longitude']
      end
    end

    # Show invalid properties with the reasons. Usually used together with valid?
    # @return Array for valid properties with the reasons
    def list_invalid_properties
      invalid_properties = Array.new
      invalid_properties
    end

    # Check to see if the all the properties in the model are valid
    # @return true if the model is valid
    def valid?
      true
    end

    # Checks equality by comparing each attribute.
    # @param [Object] Object to be compared
    def ==(o)
      return true if self.equal?(o)
      self.class == o.class &&
          siret == o.siret &&
          siret_formate == o.siret_formate &&
          nic == o.nic &&
          numero_voie == o.numero_voie &&
          indice_repetition == o.indice_repetition &&
          type_voie == o.type_voie &&
          libelle_voie == o.libelle_voie &&
          complement_adresse == o.complement_adresse &&
          adresse_ligne_1 == o.adresse_ligne_1 &&
          adresse_ligne_2 == o.adresse_ligne_2 &&
          code_postal == o.code_postal &&
          ville == o.ville &&
          latitude == o.latitude &&
          longitude == o.longitude
    end

    # @see the `==` method
    # @param [Object] Object to be compared
    def eql?(o)
      self == o
    end

    # Calculates hash code according to all attributes.
    # @return [Integer] Hash code
    def hash
      [siret, siret_formate, nic, numero_voie, indice_repetition, type_voie, libelle_voie, complement_adresse, adresse_ligne_1, adresse_ligne_2, code_postal, ville, latitude, longitude].hash
    end

    # Builds the object from hash
    # @param [Hash] attributes Model attributes in the form of hash
    # @return [Object] Returns the model itself
    def self.build_from_hash(attributes)
      new.build_from_hash(attributes)
    end

    # Builds the object from hash
    # @param [Hash] attributes Model attributes in the form of hash
    # @return [Object] Returns the model itself
    def build_from_hash(attributes)
      return nil unless attributes.is_a?(Hash)
      attributes = attributes.transform_keys(&:to_sym)
      self.class.openapi_types.each_pair do |key, type|
        if attributes[self.class.attribute_map[key]].nil? && self.class.openapi_nullable.include?(key)
          self.send("#{key}=", nil)
        elsif type =~ /\AArray<(.*)>/i
          # check to ensure the input is an array given that the attribute
          # is documented as an array but the input is not
          if attributes[self.class.attribute_map[key]].is_a?(Array)
            self.send("#{key}=", attributes[self.class.attribute_map[key]].map { |v| _deserialize($1, v) })
          end
        elsif !attributes[self.class.attribute_map[key]].nil?
          self.send("#{key}=", _deserialize(type, attributes[self.class.attribute_map[key]]))
        end
      end

      self
    end

    # Deserializes the data based on type
    # @param string type Data type
    # @param string value Value to be deserialized
    # @return [Object] Deserialized data
    def _deserialize(type, value)
      case type.to_sym
      when :Time
        Time.parse(value)
      when :Date
        Date.parse(value)
      when :String
        value.to_s
      when :Integer
        value.to_i
      when :Float
        value.to_f
      when :Boolean
        if value.to_s =~ /\A(true|t|yes|y|1)\z/i
          true
        else
          false
        end
      when :Object
        # generic object (usually a Hash), return directly
        value
      when /\AArray<(?<inner_type>.+)>\z/
        inner_type = Regexp.last_match[:inner_type]
        value.map { |v| _deserialize(inner_type, v) }
      when /\AHash<(?<k_type>.+?), (?<v_type>.+)>\z/
        k_type = Regexp.last_match[:k_type]
        v_type = Regexp.last_match[:v_type]
        {}.tap do |hash|
          value.each do |k, v|
            hash[_deserialize(k_type, k)] = _deserialize(v_type, v)
          end
        end
      else # model
        # models (e.g. Pet) or oneOf
        klass = OpenapiClient.const_get(type)
        klass.respond_to?(:openapi_one_of) ? klass.build(value) : klass.build_from_hash(value)
      end
    end

    # Returns the string representation of the object
    # @return [String] String presentation of the object
    def to_s
      to_hash.to_s
    end

    # to_body is an alias to to_hash (backward compatibility)
    # @return [Hash] Returns the object in the form of hash
    def to_body
      to_hash
    end

    # Returns the object in the form of hash
    # @return [Hash] Returns the object in the form of hash
    def to_hash
      hash = {}
      self.class.attribute_map.each_pair do |attr, param|
        value = self.send(attr)
        if value.nil?
          is_nullable = self.class.openapi_nullable.include?(attr)
          next if !is_nullable || (is_nullable && !instance_variable_defined?(:"@#{attr}"))
        end

        hash[param] = _to_hash(value)
      end
      hash
    end

    # Outputs non-array value in the form of hash
    # For object, use to_hash. Otherwise, just return the value
    # @param [Object] value Any valid value
    # @return [Hash] Returns the value in the form of hash
    def _to_hash(value)
      if value.is_a?(Array)
        value.compact.map { |v| _to_hash(v) }
      elsif value.is_a?(Hash)
        {}.tap do |hash|
          value.each { |k, v| hash[k] = _to_hash(v) }
        end
      elsif value.respond_to? :to_hash
        value.to_hash
      else
        value
      end
    end

  end

end