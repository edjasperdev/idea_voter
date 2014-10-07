class IdeasController < ApplicationController
		respond_to :json

  def index
  	respond_with Idea.all
  end
  
  def show
  	respond_with Idea.find(params[:id])
  end

  def create
  	respond_with Idea.create(idea_params)
  end

	def update
		respond_with Idea.update(params[:id], idea_params)
    idea = Idea.find(params[:id])
    idea.votes += 1
    idea.save
	end

  def destroy
  	respond_with Idea.destroy(params[:id])
  end


   private
    # permissible attributes.
    def idea_params
      params.require(:idea).permit(:title, :description, :votes, :name)
    end

end
