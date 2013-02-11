class CreateSuggestions < ActiveRecord::Migration
  def change
    create_table :suggestions do |t|
      t.string :concept
      t.string :description
      t.integer :user_id
      t.integer :organization_id
      t.integer :votes_count, :integer, :default => 0

      t.timestamps
    end

    add_index :suggestions, :user_id
    add_index :suggestions, :organization_id

  end
end
