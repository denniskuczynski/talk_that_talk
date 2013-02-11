class SuggestionsController < ApplicationController
  before_filter :ensure_authentication!

  def new  
    @organization = Organization.find(params[:organization_id])
    @suggestion = @organization.suggestions.build
  end  
    
  def create
    @suggestion = Suggestion.new(params[:suggestion].merge(
      :user_id => @current_user.id, 
      :organization_id => params[:organization_id]))  
    if @suggestion.save  
      flash[:notice] = "Successfully created suggestion."  
      redirect_to dashboard_organization_path(params[:organization_id])
    else  
      @organization = Organization.find(params[:organization_id])
      flash[:error] = "Error creating suggestion."  
      redirect_to dashboard_organization_path(params[:organization_id])
    end
  end
end