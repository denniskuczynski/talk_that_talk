require 'spec_helper'

describe "OrganizationDashboardFlow" do
  include SessionHelper
  
  context "when not signed in" do
    before(:each) do
      sign_out
      @organization = Organization.create!(name: "ExampleOrg", description: "An example organization", location: "An example location")
    end
    it "should redirect to welcome page" do
      visit dashboard_organization_path(@organization.id, :anchor => 'index')
      page.should have_selector "#sign_in_btn"
      page.should_not have_selector "#sign_out_btn"
    end
  end
  context "when signed in" do
    before(:each) do
      sign_in
      @organization = Organization.new(name: "ExampleOrg", description: "An example organization", location: "An example location")
      @organization.talks.build(name: 'ExampleTalk', description: 'An example talk', location: 'Talk location', presented_on: Time.now, user_id: @current_user.id)
      @organization.suggestions.build(concept: 'ExampleSuggestion', description: 'An example suggestion', user_id: @current_user.id)
      @organization.save!
    end
    it "dashboard_organization_path should show talks and suggestions", :js => true do
      visit dashboard_organization_path(@organization.id, :anchor => 'index')
      page.should have_content "ExampleOrg Dashboard"
      page.should have_content "Previous Talks"
      page.should have_content "ExampleTalk"
      page.should have_selector "#add_talk_btn"
      page.should have_content "Suggestions"
      page.should have_content "ExampleSuggestion"
      page.should have_selector "#add_suggestion_btn"
    end
    it "dashboard_organization_path can vote on talk", :js => true do
      visit dashboard_organization_path(@organization.id, :anchor => 'index')
      click_button "vote-for-talk-#{@organization.talks.first.id}"
      page.should have_content 'Your vote was counted'
    end
    it "dashboard_organization_path can vote on talk twice", :js => true do
      visit dashboard_organization_path(@organization.id, :anchor => 'index')
      click_button "vote-for-talk-#{@organization.talks.first.id}"
      click_button "vote-for-talk-#{@organization.talks.first.id}"
    end
    it "dashboard_organization_path can vote on suggestion", :js => true do
      visit dashboard_organization_path(@organization.id, :anchor => 'index')
      click_button "vote-for-suggestion-#{@organization.suggestions.first.id}"
      page.should have_content 'Your vote was counted'
    end
    it "dashboard_organization_path can vote on suggestion twice", :js => true do
      visit dashboard_organization_path(@organization.id, :anchor => 'index')
      click_button "vote-for-suggestion-#{@organization.suggestions.first.id}"
      click_button "vote-for-suggestion-#{@organization.suggestions.first.id}"
    end
    it "dashboard_organization_path can add new talk", :js => true do
      visit dashboard_organization_path(@organization.id, :anchor => 'index')
      click_link 'add_talk_btn'
      within("#modal form") do
        fill_in 'Name', :with => 'TalkAdd'
        fill_in 'Description', :with => 'A talk to add'
        fill_in 'Location', :with => 'TalkAdd Location'
        fill_in 'Presented on', :with => '01/01/2013'
        click_button 'Create'
      end
      page.should have_content 'Successfully created talk'
      page.should have_content "TalkAdd"
    end
    it "dashboard_organization_path can add new suggestion", :js => true do
      visit dashboard_organization_path(@organization.id, :anchor => 'index')
      click_link 'add_suggestion_btn'
      within("#modal form") do
        fill_in 'Concept', :with => 'SuggestionAdd'
        fill_in 'Description', :with => 'A suggestion to add'
        click_button 'Create'
      end
      page.should have_content 'Successfully created suggestion'
      page.should have_content "SuggestionAdd"
    end
    context "with paging" do
      before(:each) do
        for i in 1..10
          @organization.talks.build(name: "ExampleTalk-#{i}", description: 'An example talk', location: 'Talk location', presented_on: Time.now, user_id: @current_user.id)
          @organization.suggestions.build(concept: "ExampleSuggestion-#{i}", description: 'An example suggestion', user_id: @current_user.id)
        end
        @organization.save!
      end
      it "dashboard_organization_path should list talks and suggestions", :js => true do
        visit dashboard_organization_path(@organization.id, :anchor => 'index')
        page.should have_content "ExampleTalk-1"
        page.should have_content "ExampleTalk-4"
        page.should_not have_content "ExampleTalk-5"
        page.should have_content "ExampleSuggestion-1"
        page.should have_content "ExampleSuggestion-4"
        page.should_not have_content "ExampleSuggestion-5"
      end
      it "dashboard_organization_path Next talk button should show the next page", :js => true do
        visit dashboard_organization_path(@organization.id, :anchor => 'index')
        within("#talk_pagination") do
          click_link 'Next'
        end
        page.should have_content "ExampleTalk-5"
      end
      it "dashboard_organization_path Next suggestion button should show the next page", :js => true do
        visit dashboard_organization_path(@organization.id, :anchor => 'index')
        within("#suggestion_pagination") do
          click_link 'Next'
        end
        page.should have_content "ExampleSuggestion-5"
      end
    end
  end

end