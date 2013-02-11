# Place to store credential data, currently in the session.  (Mainly exists to be stubbed out in test code.)
class CredentialStore

  def self.store_user_id(session, user_id)
    session[:user_id] = user_id
  end

  def self.retrieve_user_id(session)
    session[:user_id]
  end

end