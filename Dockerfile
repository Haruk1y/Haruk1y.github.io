FROM ruby:3.3-slim
RUN apt-get update && apt-get install -y --no-install-recommends build-essential && rm -rf /var/lib/apt/lists/*
WORKDIR /srv/jekyll
COPY Gemfile Gemfile.lock ./
RUN bundle install
COPY bin/entry_point.sh /usr/local/bin/serve-site
EXPOSE 8080
CMD ["serve-site"]
