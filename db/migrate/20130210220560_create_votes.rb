class CreateVotes < ActiveRecord::Migration
  def change
    create_table :votes do |t|
      t.integer :user_id
      t.integer :organization_id
      t.integer :talk_id
      t.integer :suggestion_id

      t.timestamps
    end

    add_index :votes, [:user_id, :talk_id], :unique => true
    add_index :votes, [:user_id, :suggestion_id], :unique => true

  end
end
