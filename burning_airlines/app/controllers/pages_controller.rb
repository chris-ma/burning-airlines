class PagesController < ApplicationController

  def home
    @airplane = Airplane.all
  end
end
