# This is my personal site

This is automatically transformed by [Jekyll](http://jekyllrb.com/) into a static site whenever I push this repository to GitHub.

# License

The following directories and their contents are copyright Nathan Staines. You may not reuse anything therein without my permission:

+ _posts/
+ img/

All other directories and files are MIT Licensed. Feel free to use the HTML and CSS as you please.

# Steps to publish

* Make changes in the *source* branch
* Build and test the site locally
* Commit changes to *source* branch
* `git dp` which consists of the following steps
  - `git branch -D master`
  - `git checkout -b master`
  - `git filter-branch --subdirectory-filter _site/ -f`
  - `git checkout source`
  - `git push --all origin`
