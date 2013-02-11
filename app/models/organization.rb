class Organization < ActiveRecord::Base
  attr_accessible :description, :location, :name, :talks_count, :suggestions_count

  has_many :talks
  has_many :suggestions

  validates :name, :presence => true
  validates :description, :presence => true
  validates :location, :presence => true
end
