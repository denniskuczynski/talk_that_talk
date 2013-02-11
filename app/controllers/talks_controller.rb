class TalksController < ApplicationController
  before_filter :ensure_authentication!

  def new
    @organization = Organization.find(params[:organization_id])
    @talk = @organization.talks.build
  end  
    
  def create  
    @talk = Talk.new(params[:talk].merge(
      :user_id => @current_user.id, 
      :organization_id => params[:organization_id]))
    if @talk.save  
      flash[:notice] = "Successfully created talk."  
      redirect_to dashboard_organization_path(params[:organization_id])
    else
      @organization = Organization.find(params[:organization_id])
      render :action => 'new'  
    end  
  end  

end