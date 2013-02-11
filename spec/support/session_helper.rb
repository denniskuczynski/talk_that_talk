# Monkey Patch the ApplicationController Sign In/Out Logic
class ApplicationController < ActionController::Base

  @@override_user = nil

  def self.set_override_user(user)
    @@override_user = user
  end

  def self.get_override_user
    @@override_user
  end

  def current_user
    ApplicationController.get_override_user
  end
end

module SessionHelper

  def sign_in
    omniauth = {
        "uid" => '1234',
        "info" => {
            "name" => "Test Account",
            "email" => "test@example.com"
        },
        "extra" => {
            "raw_info" => {
                "gravatar_id" => "ABCD"
            }
        }
    }
    ApplicationController.set_override_user User.create_from_omniauth(omniauth)
  end

  def sign_out
    ApplicationController.set_override_user nil
  end
end