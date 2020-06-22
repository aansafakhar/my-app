class CreateAccessTokens < ActiveRecord::Migration[6.0]
  def change
    create_table :access_tokens do |t|
      t.references :authenticateable, polymorphic: true, index: false
      t.string :token, unique: true
      t.timestamps
    end
  end
end
