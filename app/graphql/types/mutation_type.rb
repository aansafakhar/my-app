module Types
  class MutationType < Types::BaseObject
    field :sign_up, mutation: Mutations::Signup
    field :sign_in, mutation: Mutations::Signin
  end
end
