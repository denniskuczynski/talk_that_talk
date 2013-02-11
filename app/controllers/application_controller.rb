class ApplicationController < ActionController::Base
  protect_from_forgery

  private  
  
  def current_user  
    @current_user ||= User.find(session[:user_id]) if session[:user_id]  
  end  
  
  helper_method :current_user  

  def ensure_authentication!
    if not current_user
      redirect_to root_path
    end
  end

  def session_sign_in(user)
    session[:user_id] = user.id
  end

  def session_sign_out
    session[:user_id] = nil
  end

end