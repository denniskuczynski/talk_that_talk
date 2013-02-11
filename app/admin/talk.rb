ActiveAdmin.register Talk do
    index do                            
      column :id                     
      column :name
      column :description
      column :location             
      column :presented_on
      column :presented_by do |talk|
        talk.user_id
      end
      column :slides_url
      column :votes_count
      column :created_at
      column :updated_at
      default_actions                   
  end 
end                                   
