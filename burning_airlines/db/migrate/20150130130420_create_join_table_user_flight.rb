class CreateJoinTableUserFlight < ActiveRecord::Migration
  def change
    create_join_table :users, :flights do |t|
      # t.index [:user_id, :flight_id]
      # t.index [:flight_id, :user_id]
    end
  end
end
