class Talk < ActiveRecord::Base
  attr_accessible :description, :location, :name, :presented_on, :slides_url, :user_id, :organization_id, :votes_count

  belongs_to :organization, :counter_cache => true
  belongs_to :user
  has_many :votes

  validates :name, :presence => true
  validates :description, :presence => true
  validates :location, :presence => true
  validates :presented_on, :presence => true

  def as_json(object)
    { 
      id: id,
      name: name, description: description, 
      location: location, presented_on: presented_on, 
      slides_url: slides_url, user_name: user.name,
      gravatar_id: user.gravatar_id
    }
  end

end
