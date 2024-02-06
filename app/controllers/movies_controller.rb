class MoviesController < ApplicationController
  def index
    @movies = Movie.order(year: :desc, title: :asc)

    if params[:query].present?
      @movies = @movies.where("title ILIKE ?", "%#{params[:query]}%")
    end

    respond_to do |format|
      format.html # follow the normal rails flow and render the index view
      format.text { render partial: "movies/list", locals: { movies: @movies }, formats: [:html] }
    end
  end

  def update
    @movie = Movie.find(params[:id])
    @movie.update(movie_params) # movie_params -> result of new FormData(form)

    respond_to do |format|
      format.html { redirect_to movies_path }
      format.text { render partial: "movies/movie_infos", locals: { movie: @movie }, formats: [:html] }
    end
  end

  private

  def movie_params
    params.require(:movie).permit(:title, :year)
  end
end

# route -> www.something.com

# 1. www.something.com + press enter in my browser
#  you expect the page to load some html + css + images + js

# 2. user makers fetch request to www.somethig.com {headers: "Accetp": "text/plain"}
#  you want some text back with some data
