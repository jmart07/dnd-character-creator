class CharactersController < ApplicationController
  require 'faker'
  
  # GET /characters
  def index
    p "Character index route accessed"
    @characters = Character.all
    render json: @characters
  end

  # GET /characters/1
  def show
    p "Character show route accessed"
    set_character
    render json: @character
  end

  # POST /characters
  def create
    p "Character create route accessed"
    @character = Character.new(character_params)
    @character.name = Faker::Name.name

    if @character.save
      render json: @character, status: :created, location: @character
    else
      render json: @character.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /characters/1
  def update
    p "Character update route accessed"
    set_character
    if @character.update(character_params)
      render json: @character
    else
      render json: @character.errors, status: :unprocessable_entity
    end
  end

  # DELETE /characters/1 -- returns character deleted
  def destroy
    p "Character destroy route accessed"
    set_character
    render json: @character.destroy()
  end

  private

  def set_character
    @character = Character.find(params[:id])
  end

  def character_params
    p "Params are..."
    p params
    # params.permit!
    params.require(:character).permit(
      :name,
      :race,
      :character_class,
      :strength,
      :dexterity,
      :constitution,
      :intelligence,
      :wisdom,
      :charisma,
    )
  end

end
