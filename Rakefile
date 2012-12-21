# Usage: rake post title="A title" category="A category"
desc "Create a new post"
task :post do
  title = ENV["title"] || "New post"
  category = ENV["category"] || "Articles"
  filename = "#{Time.now.strftime('%Y-%m-%d')}-#{title.gsub(/\s/, '-').downcase}.md"
  path = File.join("_posts", filename)

  if File.exist?(path)
    abort("Rake aborted! #{filename} already exists.")
  end

  File.open(path, 'w') do |file|
  file.write <<-HEADER
---
layout: post
title: #{title}
category: #{category}
date: #{Time.now.strftime('%Y-%m-%d %k:%M:%S')}
---
HEADER
  end
  puts "Creating new post: #{path}"
  system "subl #{path}"
end
