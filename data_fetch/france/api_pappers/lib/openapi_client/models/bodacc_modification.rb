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
  class BodaccModification < Bodacc
    # Nom de l'entreprise concernée par la publication. Correspond à la dénomination en cas de personne morale et à nom + prenom en cas de personne physique.
    attr_accessor :nom_entreprise

    # Vrai si l'entreprise concernée par la publication est une personne morale, faux si c'est une personne physique.
    attr_accessor :personne_morale

    # Dénomination de l'entreprise concernée par la publication (uniquement en cas de personne morale).
    attr_accessor :denomination

    # Nom de la personne physique concernée par la publication (uniquement en cas de personne physique).
    attr_accessor :nom

    # Prénom de la personne physique concernée par la publication (uniquement en cas de personne physique).
    attr_accessor :prenom

    # Administration (dans le cas d'une personne morale).
    attr_accessor :administration

    # Adresse de l'entreprise concernée par la publication.
    attr_accessor :adresse

    # Capital de l'entreprise concernée par la publication.
    attr_accessor :capital

    # Activité de l'entreprise concernée par la publication.
    attr_accessor :activite

    # Description de la modification.
    attr_accessor :description

    # Attribute mapping from ruby-style variable name to JSON key.
    def self.attribute_map
      {
        :'nom_entreprise' => :'nom_entreprise',
        :'personne_morale' => :'personne_morale',
        :'denomination' => :'denomination',
        :'nom' => :'nom',
        :'prenom' => :'prenom',
        :'administration' => :'administration',
        :'adresse' => :'adresse',
        :'capital' => :'capital',
        :'activite' => :'activite',
        :'description' => :'description'
      }
    end

    # Returns all the JSON keys this model knows about, including the ones defined in its parent(s)
    def self.acceptable_attributes
      attribute_map.values.concat(superclass.acceptable_attributes)
    end

    # Attribute type mapping.
    def self.openapi_types
      {
        :'nom_entreprise' => :'String',
        :'personne_morale' => :'Boolean',
        :'denomination' => :'String',
        :'nom' => :'String',
        :'prenom' => :'String',
        :'administration' => :'String',
        :'adresse' => :'String',
        :'capital' => :'Integer',
        :'activite' => :'String',
        :'description' => :'String'
      }
    end

    # List of attributes with nullable: true
    def self.openapi_nullable
      Set.new([
      ])
    end

    # List of class defined in allOf (OpenAPI v3)
    def self.openapi_all_of
      [
      :'Bodacc',
      :'BodaccModificationAllOf'
      ]
    end

    # Initializes the object
    # @param [Hash] attributes Model attributes in the form of hash
    def initialize(attributes = {})
      if (!attributes.is_a?(Hash))
        fail ArgumentError, "The input argument (attributes) must be a hash in `OpenapiClient::BodaccModification` initialize method"
      end

      # check to see if the attribute exists and convert string to symbol for hash key
      attributes = attributes.each_with_object({}) { |(k, v), h|
        if (!self.class.attribute_map.key?(k.to_sym))
          fail ArgumentError, "`#{k}` is not a valid attribute in `OpenapiClient::BodaccModification`. Please check the name to make sure it's valid. List of attributes: " + self.class.attribute_map.keys.inspect
        end
        h[k.to_sym] = v
      }

      # call parent's initialize
      super(attributes)

      if attributes.key?(:'nom_entreprise')
        self.nom_entreprise = attributes[:'nom_entreprise']
      end

      if attributes.key?(:'personne_morale')
        self.personne_morale = attributes[:'personne_morale']
      end

      if attributes.key?(:'denomination')
        self.denomination = attributes[:'denomination']
      end

      if attributes.key?(:'nom')
        self.nom = attributes[:'nom']
      end

      if attributes.key?(:'prenom')
        self.prenom = attributes[:'prenom']
      end

      if attributes.key?(:'administration')
        self.administration = attributes[:'administration']
      end

      if attributes.key?(:'adresse')
        self.adresse = attributes[:'adresse']
      end

      if attributes.key?(:'capital')
        self.capital = attributes[:'capital']
      end

      if attributes.key?(:'activite')
        self.activite = attributes[:'activite']
      end

      if attributes.key?(:'description')
        self.description = attributes[:'description']
      end
    end

    # Show invalid properties with the reasons. Usually used together with valid?
    # @return Array for valid properties with the reasons
    def list_invalid_properties
      invalid_properties = super
      invalid_properties
    end

    # Check to see if the all the properties in the model are valid
    # @return true if the model is valid
    def valid?
      true && super
    end

    # Checks equality by comparing each attribute.
    # @param [Object] Object to be compared
    def ==(o)
      return true if self.equal?(o)
      self.class == o.class &&
          nom_entreprise == o.nom_entreprise &&
          personne_morale == o.personne_morale &&
          denomination == o.denomination &&
          nom == o.nom &&
          prenom == o.prenom &&
          administration == o.administration &&
          adresse == o.adresse &&
          capital == o.capital &&
          activite == o.activite &&
          description == o.description && super(o)
    end

    # @see the `==` method
    # @param [Object] Object to be compared
    def eql?(o)
      self == o
    end

    # Calculates hash code according to all attributes.
    # @return [Integer] Hash code
    def hash
      [nom_entreprise, personne_morale, denomination, nom, prenom, administration, adresse, capital, activite, description].hash
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
      super(attributes)
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
      hash = super
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
