Rails.application.routes.draw do
  get 'admin/index'
  get 'sessions/new'
  get 'sessions/create'
  get 'sessions/destroy'
  get 'store/index'
  get '/home' => 'home#index'
  get '/signup' => 'signup#signup'
  get '/faq' => 'faq#index'
  get '/news' => 'news#index'
  get '/contacts' => 'contacts#index'
  post "/login" => 'users#login'
  # resources :users
  resources :line_items
  resources :carts
  root 'login#login', as: 'login_index'
  resources :products
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
