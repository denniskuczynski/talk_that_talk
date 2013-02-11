ENV['SECRET_TOKEN'] = 'SECRET' if not ENV['SECRET_TOKEN']
ENV['GITHUB_CLIENT_ID'] = 'SECRET' if not ENV['GITHUB_CLIENT_ID']
ENV['GITHUB_CLIENT_SECRET'] = 'SECRET' if not ENV['GITHUB_CLIENT_SECRET']

# Load the rails application
require File.expand_path('../application', __FILE__)

# Initialize the rails application
TalkThatTalk::Application.initialize!
