#Authentication in Rails

##Create a new project
`rails new basic_auth -T`

`cd basic_auth`

##Create a user model

We need to first start creating a user model that has a username/email field and a `password_digest`

`rails g model user email password_digest`

`rake db:migrate`

##Add some validations
[http://guides.rubyonrails.org/active_record_validations.html](http://guides.rubyonrails.org/active_record_validations.html)

```
  validates :email,
    presence: true,
    uniqueness: {case_sensitive: false}

```

##Add password encryption
Add `has_secure_password` to your model

uncomment `gem 'bcrypt'` on your Gemfile

###Test out a user
Now that we have `has_secure_password` it gives out a password setter.

###Add Validations for User
```
  validates_confirmation_of :password, on: :create
  validates_presence_of :password_confirmation

```

###Lets test a real user
```
User.find_by_email("paul@gmail.com").try(:authenticate, "123")
```

This is nifty, but long, we can add a Class method that will return true or false

###Add a helper method to the class

```
  def self.authenticate email,password
    User.find_by_email(email).try(:authenticate, password)
  end
```

##Add the login pages
Let's create a session controller to handle

`touch app/controllers/sessions_controller.rb`

add actions `new`, `create`, `destroy`

###Lets create some routes

```
  get "login" => "sessions#new"
  post "login" => "session#create"
  ```

### Lets generate a form
```
  <h1>Login</h1>

  <%= form_for :user do |f| %>
    <%= f.text_field :email, placeholder: "Enter your email" %>
    <%= f.password_field :password, placeholder: "Enter your password"%>
    <%= f.submit "Login"%>
  <% end %>
```

###Authenticate
Authenticate the user on `sessions#create`

```
  def create
    @user = User.authenticate(params[:user][:email], params[:user][:password])

    if @user
      session[:user_id] = @user.id
      flash[:success] = "User logged in!!"
      redirect_to root_path
    else
      flash[:error] = "Credentials Invalid!!"
      render :new
    end

  end
  ```

###Add current User capabilities

```
class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def is_authenticated?
    redirect_to login_path unless current_user
  end

  def current_user
    @current_user ||= User.find_by_id(session[:user_id])
  end

end

```
###Protect a controller
  `before_action :is_authenticated?` on the controller you want to protect

`@current_user` is now visible to all pages

