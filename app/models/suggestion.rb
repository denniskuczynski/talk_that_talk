class Suggestion < ActiveRecord::Base
  attr_accessible :concept, :description, :user_id, :organization_id, :votes_count

  belongs_to :organization, :counter_cache => true
  belongs_to :user
  has_many :votes

  validates :concept, :presence => true
  validates :description, :presence => true

  def as_json(object)
    { 
      concept: concept, description: description, 
      user_name: user.name,
      gravatar_id: user.gravatar_id
    }
  end

end
