class TalksController < ApplicationController
  before_filter :ensure_authentication!

  def index
    organization = Organization.find(params[:organization_id])
    total_talks = organization.talks_count
    talks = organization.talks.order('votes_count DESC').page(params[:page]).per(5)
    render :json => { data: talks, total: total_talks }
  end

  def create  
    @talk = Talk.new(params[:talk].merge(
      :user_id => @current_user.id, 
      :organization_id => params[:organization_id]))
    if @talk.save  
      render :json => true
    else  
      render :json => false
    end  
  end  

end