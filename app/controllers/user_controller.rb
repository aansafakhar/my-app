# frozen_string_literal: true

class UserController < ApplicationController
  def create
    @user = User.new(params[:user])
    @user.save
  end
end
