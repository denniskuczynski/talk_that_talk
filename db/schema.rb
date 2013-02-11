# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20130210220560) do

  create_table "organizations", :force => true do |t|
    t.string   "name"
    t.string   "description"
    t.string   "location"
    t.integer  "talks_count",       :default => 0
    t.integer  "integer",           :default => 0
    t.integer  "suggestions_count", :default => 0
    t.datetime "created_at",                       :null => false
    t.datetime "updated_at",                       :null => false
  end

  create_table "suggestions", :force => true do |t|
    t.string   "concept"
    t.string   "description"
    t.integer  "user_id"
    t.integer  "organization_id"
    t.integer  "votes_count",     :default => 0
    t.integer  "integer",         :default => 0
    t.datetime "created_at",                     :null => false
    t.datetime "updated_at",                     :null => false
  end

  add_index "suggestions", ["organization_id"], :name => "index_suggestions_on_organization_id"
  add_index "suggestions", ["user_id"], :name => "index_suggestions_on_user_id"

  create_table "talks", :force => true do |t|
    t.string   "name"
    t.string   "description"
    t.string   "location"
    t.datetime "presented_on"
    t.string   "slides_url"
    t.integer  "user_id"
    t.integer  "organization_id"
    t.integer  "votes_count",     :default => 0
    t.integer  "integer",         :default => 0
    t.datetime "created_at",                     :null => false
    t.datetime "updated_at",                     :null => false
  end

  add_index "talks", ["organization_id"], :name => "index_talks_on_organization_id"
  add_index "talks", ["user_id"], :name => "index_talks_on_user_id"

  create_table "users", :force => true do |t|
    t.string   "github_uid"
    t.string   "gravatar_id"
    t.string   "name"
    t.string   "email"
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
  end

  create_table "votes", :force => true do |t|
    t.integer  "user_id"
    t.integer  "organization_id"
    t.integer  "talk_id"
    t.integer  "suggestion_id"
    t.datetime "created_at",      :null => false
    t.datetime "updated_at",      :null => false
  end

  add_index "votes", ["user_id", "suggestion_id"], :name => "index_votes_on_user_id_and_suggestion_id", :unique => true
  add_index "votes", ["user_id", "talk_id"], :name => "index_votes_on_user_id_and_talk_id", :unique => true

end
