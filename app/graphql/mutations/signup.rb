# frozen_string_literal: true

module Mutations
  class Signup < GraphQL::Schema::Mutation
    null true

    description 'Sign up a user'

    argument :email, String, required: true
    argument :password, String, required: true
    argument :firstName, String, required: true
    argument :lastName, String, required: true

    field :email, String, null: false
    field :access_token, String, null: false
    field :firstName, String, null: false
    field :lastName, String, null: false

    def resolve(**args)
      user = User.create(email: args[:email], password: args[:password], first_name: args[:firstName], last_name: args[:lastName])
      access_token = user.access_tokens.create
      {
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
        access_token: access_token.token
      }
    end
  end
end
