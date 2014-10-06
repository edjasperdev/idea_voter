class IdeasController < ApplicationController
		respond_to :json

  def index
  	respond_with(@ideas = Idea.all)
  end
  
  def show
  	respond_with(@idea = Idea.find(params[:id]))
  end

  def create
  	respond_with(@idea = Idea.create(params[:idea]))
  end

	def update
		idea = ideas.find(params[:id])
		idea.update_attributes(params[:idea])
		respond_with(idea)
	end



  def destroy
  	respond_with(@idea = Idea.destroy(params[:id]))
  end

   private
    # permissible attributes.
    def ideas_params
      params.require(:idea).permit(:title, :description, :vote)
    end

end
