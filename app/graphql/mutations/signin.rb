# frozen_string_literal: true

module Mutations
  class Signin < GraphQL::Schema::Mutation
    null true

    description 'Signin User'

    argument :email, String, required: true
    argument :password, String, required: true

    field :email, String, null: true
    field :access_token, String, null: true

    def resolve(email:, password:)
      user = User.find_by(email: email)
      raise GraphQL::ExecutionError, 'invalid email or password' unless user&.valid_password?(password)

      access_token = user.access_tokens.create
      {
        email: user.email,
        access_token: access_token.token
      }
    end
  end
end
