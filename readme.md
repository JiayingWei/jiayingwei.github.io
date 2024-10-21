## To test site on local server

```bundle exec jekyll serve```

## Build CSS before updating github pages
This site requires postcss to process tailwind before it'll showup correctly on github pages.
You'll have to run ```npm run build:css``` which is located in your ```package.json``` file which will build the css to ```assets/css/tailwind-built.css``` which your pages site will reference.