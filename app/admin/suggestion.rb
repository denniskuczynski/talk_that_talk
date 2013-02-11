ActiveAdmin.register Suggestion do
    index do                            
      column :id                     
      column :concept
      column :description
      column :suggested_by do |suggestion|
        suggestion.user_id
      end
      column :votes_count
      column :created_at
      column :updated_at
      default_actions                   
  end 
end                                   
