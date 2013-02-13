class ApplicationController < ActionController::Base
  protect_from_forgery

  private  
  
  def current_user  
    user_id = CredentialStore.retrieve_user_id(session)
    @current_user ||= User.find(user_id) if user_id
  end  
  helper_method :current_user

  def app_sign_in(user)
    CredentialStore.store_user_id(session, user.id)
  end

  def app_sign_out
    @current_user = nil
    CredentialStore.store_user_id(session, nil)
  end

  def ensure_authentication!
    if not current_user
      redirect_to root_path
    end
  end

end