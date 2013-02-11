class Vote < ActiveRecord::Base
  attr_accessible :user_id, :organization_id, :talk_id, :suggestion_id

  belongs_to :user
  belongs_to :talk, :counter_cache => true
  belongs_to :suggestion, :counter_cache => true

end
