class CreateOrganizations < ActiveRecord::Migration
  def change
    create_table :organizations do |t|
      t.string :name
      t.string :description
      t.string :location
      t.integer :talks_count, :integer, :default => 0
      t.integer :suggestions_count, :integer, :default => 0

      t.timestamps
    end
  end
end
