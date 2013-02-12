# TalkThatTalk

A Demonstration Ruby/Backbone application.

http://talkthattalk.herokuapp.com


## Installation

Update the following values in your config/environment.rb file:
Github secrets can be generated at: https://github.com/settings/applications

``` ruby
ENV['SECRET_TOKEN'] = 'SECRET' if not ENV['SECRET_TOKEN']
ENV['GITHUB_CLIENT_ID'] = 'SECRET' if not ENV['GITHUB_CLIENT_ID']
ENV['GITHUB_CLIENT_SECRET'] = 'SECRET' if not ENV['GITHUB_CLIENT_SECRET']
```

## Running the tests
``` ruby
bundle exec rspec spec
```
