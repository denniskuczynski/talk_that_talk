class SessionsController < ApplicationController

  def create_from_github
    omniauth = request.env["omniauth.auth"]
    user = User.find_by_github_uid(omniauth["uid"]) || User.create_from_omniauth(omniauth)
    session[:user_id] = user.id
    redirect_to organizations_path
  end

  def logout
    session[:user_id] = nil
    flash[:notice] = "You have been successfully logged out"
    redirect_to root_path
  end

  def failure_from_github
    flash[:error] = "Error logging in with GitHub. #{params[:message]}"
    redirect_to root_path
  end
end
