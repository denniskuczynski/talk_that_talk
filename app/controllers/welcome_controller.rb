class WelcomeController < ApplicationController

  def index
    if current_user
      redirect_to organizations_path
    else
      render
    end
  end

end