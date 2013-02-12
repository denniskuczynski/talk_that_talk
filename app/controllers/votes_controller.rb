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
        render :json => true
      else
        raise "Unable to save vote"
      end
    rescue   
      raise "Unable to save vote"
    end
  end  

end