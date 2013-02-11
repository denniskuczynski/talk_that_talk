class CreateTalks < ActiveRecord::Migration
  def change
    create_table :talks do |t|
      t.string :name
      t.string :description
      t.string :location
      t.datetime :presented_on
      t.string :slides_url
      t.integer :user_id
      t.integer :organization_id
      t.integer :votes_count, :integer, :default => 0

      t.timestamps
    end

    add_index :talks, :user_id
    add_index :talks, :organization_id

  end
end
