module ApplicationHelper
  def flash_class(level)
    case level
    when :notice then "info"
    when :error then "error"
    when :alert then "warning"
    end
  end

  def add_btn_text(text)
    s = ''
    s << content_tag(:i, :class => 'icon-plus icon-white') {}
    s << '&nbsp;'
    s << text
    s.html_safe
  end

  def talk_link(talk)
    if talk.slides_url
      link_to talk.name, talk.slides_url, :target => '_blank'
    else
      talk.name
    end
  end

  def avatar_link(user)
    if user.gravatar_id
      text = ""
      text << tag(:img, :src => "http://gravatar.com/avatar/#{user.gravatar_id}", :width => 40, :height => 40)
      text << tag(:br)
      text << user.name
      text.html_safe
    else
      user.name
    end
  end
end