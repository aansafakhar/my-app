# frozen_string_literal: true

Rails.application.routes.draw do
  mount LetterOpenerWeb::Engine, at: '/letter_opener' if Rails.env.development?
  devise_for :users
  mount GraphiQL::Rails::Engine, at: '/graphiql', graphql_path: '/graphql' if Rails.env.development?
  post '/graphql', to: 'graphql#execute'
  # get 'welcome/index'
  root 'welcome#index'
  match '(*any)', to: 'welcome#index', via: %i[get post]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
