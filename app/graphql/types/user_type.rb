# frozen_string_literal: true
module Types
  class UserType < Types::BaseObject
    field :email, String, null: false
  end
end
