require 'spec_helper'

describe "WelcomeFlow" do
  include SessionHelper
  
context "when not signed in" do
  before(:each) do
    sign_out
  end
  it "root should show welcome page" do
    visit root_path
    page.should have_content "Sign In With Github"
  end
end
context "when signed in" do
  before(:each) do
    sign_in
  end
  it "root should show welcome page" do
    visit root_path
    page.should have_content "New Organization"
    page.should have_content "Sign Out"
  end
end

end