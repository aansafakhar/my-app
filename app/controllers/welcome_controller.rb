# frozen_string_literal: true

class WelcomeController < ApplicationController
  def index
    # render json: response
  end

  def send_mail
    # UserMailer.send_welcome_mail.deliver_now!
    UserMailer.with(user: user).welcome_email.deliver_now
  end
end
