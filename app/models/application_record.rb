class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  def total_price
    line_items.to_a.sum { |item| item.total_price }
  end
end
