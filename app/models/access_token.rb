class AccessToken < ApplicationRecord
  has_secure_token :token
  belongs_to :authenticateable, polymorphic: true
  def user
    authenticateable&.is_a?(User) ? authenticateable : nil
  end
end
