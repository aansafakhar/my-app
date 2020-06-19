module Types
  class QueryType < Types::BaseObject
    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    # TODO: remove me
    field :response, Types::ResponseType, null: false do
      description 'Fetch response from api'
    end
    def response
      {text: "I am returning a response"}
    end

    field :user, Types::UserType, null: false do
      description 'Fetch response from api'
    end
    def user
      {email: "I am returning a response"}
    end

  end
end
