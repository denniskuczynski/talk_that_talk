class User < ActiveRecord::Base
  attr_accessible :email, :github_uid, :gravatar_id, :name

  has_many :talks
  has_many :suggestions

  max_paginates_per 5

  def self.create_from_omniauth(omniauth)
    User.new.tap do |user|
      user.github_uid = omniauth["uid"]
      user.gravatar_id = omniauth["extra"]['raw_info']["gravatar_id"]
      user.name = omniauth["info"]["name"]
      user.email = omniauth["info"]["email"]
      user.save!
    end
  end
end
