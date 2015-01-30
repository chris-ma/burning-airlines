class CreateFlights < ActiveRecord::Migration
  def change
    create_table :flights do |t|
      t.string :date
      t.string :location_to
      t.string :location_from
      t.integer :flight_number

      t.timestamps null: false
    end
  end
end
