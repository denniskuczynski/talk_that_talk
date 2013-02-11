require 'spec_helper'

describe "WelcomeFlow" do
  include SessionHelper
  
  context "when not signed in" do
    before(:each) do
      sign_out
    end
    it "root should show welcome page" do
      visit root_path
      page.should have_selector "#sign_in_btn"
      page.should_not have_selector "#sign_out_btn"
    end
  end
  context "when signed in" do
    before(:each) do
      sign_in
    end
    it "root should show organizations page" do
      visit root_path
      page.should have_selector "#add_organization_btn"
      page.should have_selector "#sign_out_btn"
    end
    it "can sign out from organizations page" do
      visit root_path
      page.should have_selector "#sign_out_btn"
      click_link "sign_out_btn"
      page.should have_selector "#sign_in_btn"
      page.should_not have_selector "#sign_out_btn"
    end
  end

end