TalkThatTalk::Application.routes.draw do
  resources :organizations do
    member do
      match 'dashboard' => "organizations#dashboard", :as => 'dashboard'
    end
    resources :talks do
      resources :votes, :only => :create
    end
    resources :suggestions do
      resources :votes, :only => :create
    end
  end

  root :to => 'welcome#index'

  match "/auth/:provider/callback" => "sessions#create_from_github"
  match "/auth/failure" => "sessions#failure_from_github"
  match "/auth/logout" => "sessions#logout"
end
