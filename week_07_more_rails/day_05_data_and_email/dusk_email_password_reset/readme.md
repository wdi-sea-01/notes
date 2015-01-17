#Password Reset Flow


##Letter Opener

We will be using the gem `letter_opener` to see emails being sent from our server.

Add the gem to your gem file in the development group

```
group :development do
	gem 'letter_opener'
end
```

Configure `letter_opener` by going to your configuration and adding this line to your `config/environments/development.rb`

```
config.action_mailer.delivery_method = :letter_opener
```

##Create Routes
```
  get "reset" => "passwords#new"
  post "reset" => "passwords#create"
```
  

##Create PasswordsController


new.html.erb

```
	<div class="row">
	  <div class="col-md-6 col-md-offset-3 ">
	<h1>Reset Password </h1>
	
	<%= render "layouts/flash" %>
	
	
	<%= bootstrap_form_for :user do |f| %>
	  <%= f.text_field :email, placeholder: "Enter your email", icon: "user" %>
	  <%= f.submit "Login", :class=> "btn btn-primary" %>
	<% end %>
	
	</div>
	</div>

```



##Create Forms


Update User Model

```
rails g migration AddResetToUsers reset_code expires_at:datetime
```

```
  def set_password_reset
    self.reset_code = SecureRandom.urlsafe_base64
    self.expires_at = 4.hours.from_now
    self.save!
  end
  ```
  
##Update the Password Controller
 
```
  def create
    @user = User.find_by_email(params[:user][:email])
    @user.set_password_reset if @user

    flash[:warning] = "Password Reset Sent"
    redirect_to login_path

  end

``` 
  
##Add Mailer

Add mailer

`rails generate mailer UserMailer`

Add Helper action in `app/mailers/user_mailer.rb`

```
  def password_reset user
    @greeting = "Hi"
    @user = user
    mail to: "to@example.org"
  end
  ```
  


See the final project here: [https://github.com/wdi-sea-01/rails_auth_intro/tree/pw_reset](https://github.com/wdi-sea-01/rails_auth_intro/tree/pw_reset)