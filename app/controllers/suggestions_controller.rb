class SuggestionsController < ApplicationController
  before_filter :ensure_authentication!

  def index
    organization = Organization.find(params[:organization_id])
    total_suggestions = organization.suggestions_count
    suggestions = organization.suggestions.order('votes_count DESC').page(params[:page]).per(5)
    render :json => { data: suggestions, total: total_suggestions }
  end

  def create
    @suggestion = Suggestion.new(params[:suggestion].merge(
      :user_id => @current_user.id, 
      :organization_id => params[:organization_id]))  
    if @suggestion.save  
      render :json => true
    else  
      render :json => false
    end
  end
end