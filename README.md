# TalkThatTalk

A Demonstration Ruby/Backbone application.

There are three code branches:
* https://github.com/denniskuczynski/talk_that_talk/tree/rails_basic
* https://github.com/denniskuczynski/talk_that_talk/tree/rails_with_js_handlers
* https://github.com/denniskuczynski/talk_that_talk/tree/rails_with_backbone

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
