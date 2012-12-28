desc "Commit the latest version of the site to the gh-pages branch"
task :ghpages do
  site = `git ls-tree -d HEAD example | awk '{print $3}'`.strip
  new_commit = `echo 'Update demos' | git commit-tree #{site} -p refs/heads/gh-pages`.strip
  `git update-ref refs/heads/gh-pages #{new_commit}`
  `git push origin gh-pages -f`
end