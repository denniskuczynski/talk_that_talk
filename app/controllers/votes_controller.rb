class VotesController < ApplicationController
  before_filter :ensure_authentication!
    
  def create  
    @vote = Vote.new({
      :user_id => @current_user.id, 
      :organization_id => params[:organization_id],
      :talk_id => params[:talk_id],
      :suggestion_id => params[:suggestion_id]
    })
    begin
      if @vote.save
        flash[:notice] = "Your vote was counted"
        redirect_to dashboard_organization_path(params[:organization_id])
      else
        redirect_to dashboard_organization_path(params[:organization_id])
      end
    rescue   
      redirect_to dashboard_organization_path(params[:organization_id])
    end
  end  

end