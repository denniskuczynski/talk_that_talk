ActiveAdmin.register Organization do
  index do                            
    column :id                     
    column :name
    column :description
    column :location             
    column :talks_count
    column :suggestions_count
    column :created_at
    column :updated_at
    default_actions                   
  end       
end                                   
