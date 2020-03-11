class SignupController < ApplicationController
    skip_before_action :authenticate_user!
    def signup
    end
end
