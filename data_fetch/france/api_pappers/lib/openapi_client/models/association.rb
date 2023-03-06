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
  # Association liée à l'entreprise.
  class Association
    # Détermine si l'association possède un numéro WALDEC/RNA.
    attr_accessor :is_waldec

    # L'identifiant l'association au format Wxxxxxxxxx si WALDEC, xxxxxxxxxxxxxx sinon.
    attr_accessor :id_association

    # Ancien numéro de l'association.
    attr_accessor :id_ex_association

    # Dénomination de l'association.
    attr_accessor :denomination

    # Numéro siret de l'association au format xxxxxxxxxxxxxx.
    attr_accessor :siret

    # Numéro de Reconnaissance d'Utilité Publique.
    attr_accessor :numero_rup

    # Objet de l'association.
    attr_accessor :objet

    # Objet social 1 de l'association.
    attr_accessor :objet_social_1

    # Libellé correspondant à l'objet social 1.
    attr_accessor :categorie_social_1

    # Objet social 2 de l'association.
    attr_accessor :objet_social_2

    # Libellé correspondant à l'objet social 1.
    attr_accessor :categorie_social_2

    # Date de déclaration de création au format AAAA-MM-JJ.
    attr_accessor :date_creation

    # Date de dernière déclaration au format AAAA-MM-JJ.
    attr_accessor :date_derniere_declaration

    # Date de publication du Journal Officiel de l'avis de création au format AAAA-MM-JJ.
    attr_accessor :date_publication_creation

    # Date de déclaration de dissolution au format AAAA-MM-JJ.
    attr_accessor :date_declaration_dissolution

    # Groupement de l'association.
    attr_accessor :groupement

    # Position d'activité de l'association.
    attr_accessor :position_activite

    # Nature de l'association.
    attr_accessor :nature

    # Site web de l'association.
    attr_accessor :site_web

    # Numéro de téléphone de l'association.
    attr_accessor :telephone

    # Email de l'association.
    attr_accessor :email

    attr_accessor :adresse_siege

    attr_accessor :adresse_gestionnaire

    # Observation relative à l'association.
    attr_accessor :observation

    # Code du site gestionnaire (préfecture, sous-préfecture) de l'association.
    attr_accessor :code_gestion

    # Civilité du dirigeant.
    attr_accessor :dirigeant_civilite

    # Date de la dernière mise à jour des informations au RNA au format AAAA-MM-JJ.
    attr_accessor :derniere_maj

    attr_accessor :publications_joafe

    # Attribute mapping from ruby-style variable name to JSON key.
    def self.attribute_map
      {
        :'is_waldec' => :'is_waldec',
        :'id_association' => :'id_association',
        :'id_ex_association' => :'id_ex_association',
        :'denomination' => :'denomination',
        :'siret' => :'siret',
        :'numero_rup' => :'numero_rup',
        :'objet' => :'objet',
        :'objet_social_1' => :'objet_social_1',
        :'categorie_social_1' => :'categorie_social_1',
        :'objet_social_2' => :'objet_social_2',
        :'categorie_social_2' => :'categorie_social_2',
        :'date_creation' => :'date_creation',
        :'date_derniere_declaration' => :'date_derniere_declaration',
        :'date_publication_creation' => :'date_publication_creation',
        :'date_declaration_dissolution' => :'date_declaration_dissolution',
        :'groupement' => :'groupement',
        :'position_activite' => :'position_activite',
        :'nature' => :'nature',
        :'site_web' => :'site_web',
        :'telephone' => :'telephone',
        :'email' => :'email',
        :'adresse_siege' => :'adresse_siege',
        :'adresse_gestionnaire' => :'adresse_gestionnaire',
        :'observation' => :'observation',
        :'code_gestion' => :'code_gestion',
        :'dirigeant_civilite' => :'dirigeant_civilite',
        :'derniere_maj' => :'derniere_maj',
        :'publications_joafe' => :'publications_joafe'
      }
    end

    # Returns all the JSON keys this model knows about
    def self.acceptable_attributes
      attribute_map.values
    end

    # Attribute type mapping.
    def self.openapi_types
      {
        :'is_waldec' => :'Boolean',
        :'id_association' => :'String',
        :'id_ex_association' => :'String',
        :'denomination' => :'String',
        :'siret' => :'String',
        :'numero_rup' => :'String',
        :'objet' => :'String',
        :'objet_social_1' => :'String',
        :'categorie_social_1' => :'String',
        :'objet_social_2' => :'String',
        :'categorie_social_2' => :'String',
        :'date_creation' => :'String',
        :'date_derniere_declaration' => :'String',
        :'date_publication_creation' => :'String',
        :'date_declaration_dissolution' => :'String',
        :'groupement' => :'String',
        :'position_activite' => :'String',
        :'nature' => :'String',
        :'site_web' => :'String',
        :'telephone' => :'String',
        :'email' => :'String',
        :'adresse_siege' => :'AssociationAdresseSiege',
        :'adresse_gestionnaire' => :'AssociationAdresseGestionnaire',
        :'observation' => :'String',
        :'code_gestion' => :'String',
        :'dirigeant_civilite' => :'String',
        :'derniere_maj' => :'String',
        :'publications_joafe' => :'AssociationPublicationsJoafe'
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
        fail ArgumentError, "The input argument (attributes) must be a hash in `OpenapiClient::Association` initialize method"
      end

      # check to see if the attribute exists and convert string to symbol for hash key
      attributes = attributes.each_with_object({}) { |(k, v), h|
        if (!self.class.attribute_map.key?(k.to_sym))
          fail ArgumentError, "`#{k}` is not a valid attribute in `OpenapiClient::Association`. Please check the name to make sure it's valid. List of attributes: " + self.class.attribute_map.keys.inspect
        end
        h[k.to_sym] = v
      }

      if attributes.key?(:'is_waldec')
        self.is_waldec = attributes[:'is_waldec']
      end

      if attributes.key?(:'id_association')
        self.id_association = attributes[:'id_association']
      end

      if attributes.key?(:'id_ex_association')
        self.id_ex_association = attributes[:'id_ex_association']
      end

      if attributes.key?(:'denomination')
        self.denomination = attributes[:'denomination']
      end

      if attributes.key?(:'siret')
        self.siret = attributes[:'siret']
      end

      if attributes.key?(:'numero_rup')
        self.numero_rup = attributes[:'numero_rup']
      end

      if attributes.key?(:'objet')
        self.objet = attributes[:'objet']
      end

      if attributes.key?(:'objet_social_1')
        self.objet_social_1 = attributes[:'objet_social_1']
      end

      if attributes.key?(:'categorie_social_1')
        self.categorie_social_1 = attributes[:'categorie_social_1']
      end

      if attributes.key?(:'objet_social_2')
        self.objet_social_2 = attributes[:'objet_social_2']
      end

      if attributes.key?(:'categorie_social_2')
        self.categorie_social_2 = attributes[:'categorie_social_2']
      end

      if attributes.key?(:'date_creation')
        self.date_creation = attributes[:'date_creation']
      end

      if attributes.key?(:'date_derniere_declaration')
        self.date_derniere_declaration = attributes[:'date_derniere_declaration']
      end

      if attributes.key?(:'date_publication_creation')
        self.date_publication_creation = attributes[:'date_publication_creation']
      end

      if attributes.key?(:'date_declaration_dissolution')
        self.date_declaration_dissolution = attributes[:'date_declaration_dissolution']
      end

      if attributes.key?(:'groupement')
        self.groupement = attributes[:'groupement']
      end

      if attributes.key?(:'position_activite')
        self.position_activite = attributes[:'position_activite']
      end

      if attributes.key?(:'nature')
        self.nature = attributes[:'nature']
      end

      if attributes.key?(:'site_web')
        self.site_web = attributes[:'site_web']
      end

      if attributes.key?(:'telephone')
        self.telephone = attributes[:'telephone']
      end

      if attributes.key?(:'email')
        self.email = attributes[:'email']
      end

      if attributes.key?(:'adresse_siege')
        self.adresse_siege = attributes[:'adresse_siege']
      end

      if attributes.key?(:'adresse_gestionnaire')
        self.adresse_gestionnaire = attributes[:'adresse_gestionnaire']
      end

      if attributes.key?(:'observation')
        self.observation = attributes[:'observation']
      end

      if attributes.key?(:'code_gestion')
        self.code_gestion = attributes[:'code_gestion']
      end

      if attributes.key?(:'dirigeant_civilite')
        self.dirigeant_civilite = attributes[:'dirigeant_civilite']
      end

      if attributes.key?(:'derniere_maj')
        self.derniere_maj = attributes[:'derniere_maj']
      end

      if attributes.key?(:'publications_joafe')
        self.publications_joafe = attributes[:'publications_joafe']
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
          is_waldec == o.is_waldec &&
          id_association == o.id_association &&
          id_ex_association == o.id_ex_association &&
          denomination == o.denomination &&
          siret == o.siret &&
          numero_rup == o.numero_rup &&
          objet == o.objet &&
          objet_social_1 == o.objet_social_1 &&
          categorie_social_1 == o.categorie_social_1 &&
          objet_social_2 == o.objet_social_2 &&
          categorie_social_2 == o.categorie_social_2 &&
          date_creation == o.date_creation &&
          date_derniere_declaration == o.date_derniere_declaration &&
          date_publication_creation == o.date_publication_creation &&
          date_declaration_dissolution == o.date_declaration_dissolution &&
          groupement == o.groupement &&
          position_activite == o.position_activite &&
          nature == o.nature &&
          site_web == o.site_web &&
          telephone == o.telephone &&
          email == o.email &&
          adresse_siege == o.adresse_siege &&
          adresse_gestionnaire == o.adresse_gestionnaire &&
          observation == o.observation &&
          code_gestion == o.code_gestion &&
          dirigeant_civilite == o.dirigeant_civilite &&
          derniere_maj == o.derniere_maj &&
          publications_joafe == o.publications_joafe
    end

    # @see the `==` method
    # @param [Object] Object to be compared
    def eql?(o)
      self == o
    end

    # Calculates hash code according to all attributes.
    # @return [Integer] Hash code
    def hash
      [is_waldec, id_association, id_ex_association, denomination, siret, numero_rup, objet, objet_social_1, categorie_social_1, objet_social_2, categorie_social_2, date_creation, date_derniere_declaration, date_publication_creation, date_declaration_dissolution, groupement, position_activite, nature, site_web, telephone, email, adresse_siege, adresse_gestionnaire, observation, code_gestion, dirigeant_civilite, derniere_maj, publications_joafe].hash
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
