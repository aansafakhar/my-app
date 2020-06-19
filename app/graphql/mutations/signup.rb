# frozen_string_literal: true

module Mutations
  class Signup < GraphQL::Schema::Mutation
    null true

    description 'Sign up a user'

    argument :email, String, required: true
    argument :password, String, required: true

    field :email, String, null: true
    field :access_token, String, null: true

    def resolve(**args)
      user = User.create(args)

      access_token = user.access_tokens.create
      {
        email: user.email,
        access_token: access_token.token
      }
    end
  end
end
