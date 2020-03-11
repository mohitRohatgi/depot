class StoreController < ApplicationController
  include CurrentCart
  before_action :set_cart
  def index
    # @products = Product.order(:title)
    render json: Product.order(:title)
  end
end
