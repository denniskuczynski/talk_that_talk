module SessionHelper

  def sign_in
    omniauth = {
        "uid" => '1234',
        "info" => {
            "name" => "Test Account",
            "email" => "test@example.com"
        },
        "extra" => {
            "raw_info" => {
                "gravatar_id" => "ABCD"
            }
        }
    }
    @current_user = User.create_from_omniauth(omniauth)
    CredentialStore.stub(:store_user_id).and_return(true)
    CredentialStore.stub(:retrieve_user_id).and_return(@current_user.id)
    
  end

  def sign_out
    CredentialStore.stub(:store_user_id).and_return(true)
    CredentialStore.stub(:retrieve_user_id).and_return(nil)
  end
end