require 'spec_helper'

describe "OrganizationsFlow" do
  include SessionHelper
  
  context "when not signed in" do
    before(:each) do
      sign_out
    end
    it "should redirect to welcome page" do
      visit organizations_path
      page.should have_selector "#sign_in_btn"
      page.should_not have_selector "#sign_out_btn"
    end
  end
  context "when signed in" do
    before(:each) do
      sign_in
      Organization.create!(name: "ExampleOrg", description: "An example organization", location: "An example location")
    end
    it "organizations_path should list organizations" do
      visit organizations_path
      page.should have_content "ExampleOrg"
      page.should have_content "An example organization"
      page.should have_content "An example location"
    end
    it "organizations_path can add new organization", :js => true do
      visit organizations_path
      click_link 'add_organization_btn'
      within("form") do
        fill_in 'Name', :with => 'TestOrg'
        fill_in 'Description', :with => 'A test organization'
        fill_in 'Location', :with => 'A test location'
        click_button 'Create'
      end 
      page.should have_content 'TestOrg Dashboard'
    end
    it "organizations_path has link to organization dashboard" do
      visit organizations_path
      click_link "ExampleOrg"
      page.should have_content "ExampleOrg Dashboard"
    end
    context "with paging" do
      before(:each) do
      sign_in
        for i in 1..25
          Organization.create!(name: "Name-#{i}", description: "Desc-#{i}", location: "Location-#{i}")
        end
      end
      it "organizations_path should list organizations" do
        visit organizations_path
        page.should have_content "Name-1"
        page.should have_content "Name-19"
        page.should_not have_content "Name-20"
        page.should have_content "Next"
      end
      it "organizations_path's Next button should show the next page" do
        visit organizations_path
        click_link 'Next'
        page.should have_content "Name-20"
        page.should have_content "Name-25"
      end
    end
  end

end