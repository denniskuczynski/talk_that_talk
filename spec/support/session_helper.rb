# Monkey Patch the ApplicationController Sign In/Out Logic
# Don't do this in the real world...
class ApplicationController < ActionController::Base

  @@override_user = nil

  def self.set_override_user(user)
    @@override_user = user
  end

  def self.get_override_user
    @@override_user
  end

  def current_user
    @current_user = ApplicationController.get_override_user
  end

  private

  def sign_in(user)
    ApplicationController.set_override_user user
  end

  def sign_out
    ApplicationController.set_override_user nil
  end
end

module SessionHelper

  def current_user
    ApplicationController.get_override_user
  end

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