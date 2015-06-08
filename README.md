Alura 2.0
============

## Install dependencies
```
npm install
```

## Start gulp
```
gulp
```
You may need to alias `gulp` to `node_modules/.bin/gulp`, or `npm install -g gulp`.

Start editing assets and views from the `gulp/assets` and `gulp/views` folder. Files compile to `public`.

## Preview production environment
```
gulp build:production
gulp server
```

## Deploy to GitHub pages
```
gulp deploy
```
This will run karma, build your files, revision and compress them, and copy the contents of the public folder to a `gh-pages` branch, and push it up to GitHub.

## Jenkins

[Xvfb virtual frame buffer x11](https://wiki.jenkins-ci.org/display/JENKINS/Xvfb+Plugin)

[travis yml plugin](https://wiki.jenkins-ci.org/display/JENKINS/Travis+YML+Plugin)