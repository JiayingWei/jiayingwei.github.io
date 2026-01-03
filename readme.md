## To test site on local server

```bundle exec jekyll serve --host 0.0.0.0```

`--host 0.0.0.0` allows you to preview the site on a phone if you visit the site at your computer's ip address

```http://192.168.x.x:4000/```

## Build CSS before updating github pages
This site requires postcss to process tailwind before it'll showup correctly on github pages.
You'll have to run ```npm run build:css``` which is located in your ```package.json``` file which will build the css to ```assets/css/tailwind-built.css``` which your pages site will reference.

## Uploading to the website

Right now `Master Origin` is set to sync with your host directly. If you want to push changes to git without affecting production, you should push to a different branch and merge into `master` when you are ready.
