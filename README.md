devFactory-jquery-requirejs
===========================

empty dev factory to bootstrap a project with jquery and requirejs with unit & e2e tests support.

## Why is this project interesting ?

You love test your projects ? You should take a look on how tests are made here.

## Prerequisites
1. Install [node and npm](http://www.nodejs.org)
2. Install **Grunt** running `npm install -g grunt-cli`
3. Install **Bower** running `npm install -g bower`
4. Launch `npm install` and `bower install` at the root of your project

## What more do I need for this amazing stuff ?

The template contains an (ugly) micro app to show you how to start. Everything is set up for your unit test. Just check the `grunt ls` command to see what tasks are availables.

It's a little bit more tricky about end to end tests. You need to have a selenium driver listening on port 4444. There are many ways to achieve that :

Any way you choose you have to add [java](https://www.java.com) to your path

The simplest way for me is to install [protractor](https://github.com/angular/protractor) by running `npm install -g protractor` which is an amazing testing tool for [angularjs](https://angularjs.org/)
1. This add the `webdriver-manager` command to your path
2. Just type `webdriver-manager update (ie)` to update the browsers drivers (ie is for the one who loves it)
3. You are ready to go just type `webdriver-manager start` to get your server up and ready

If you don't like angularjs and protractor you can always download a selenium jar...

You're done ? So just check the `grunt test:e2e` command (be sure to have chrome) to see how the specs work.

## How do I build my app ?

For now, it's up to you ;-)