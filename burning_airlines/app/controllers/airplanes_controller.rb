class AirplanesController < ApplicationController
  def index
    @airplanes = Airplane.all
    render json: Airplane.all
  end
end
