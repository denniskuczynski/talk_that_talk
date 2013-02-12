class OrganizationsController < ApplicationController
  before_filter :ensure_authentication!

  def index
    @organizations = Organization.scoped.page(params[:page]).per(20)
  end  
  
  def show
    redirect_to dashboard_organization_path(params[:id], :anchor => 'index')
  end  
  
  def new  
    @organization = Organization.new  
  end  
    
  def create  
    @organization = Organization.new(params[:organization])  
    if @organization.save  
      flash[:notice] = "Successfully created organization."  
      redirect_to dashboard_organization_path(@organization.id, :anchor => 'index')
    else  
      flash[:error] = "Error creating organization."  
      redirect_to organizations_path(@organization.id)
    end  
  end  

  def dashboard
    @organization = Organization.find(params[:id])
  end
end