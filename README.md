# How to Configure UI Tests

WebdriverIO and Docker Selenium Configuration for * UI Tests

## Required Dependencies - Please Install all dependencies
 - [Docker](https://www.docker.com/)
 - [Selenium Image for Chrome](https://github.com/SeleniumHQ/docker-selenium) 
 - [JDK 8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
 - [WebdriverIO](http://webdriver.io/)
 - [nodeJS](https://nodejs.org/en/)
 - [postgres] (https://www.npmjs.com/package/pg)
## Spin Up Selenium Docker Container

	[WebdriverIO](http://webdriver.io/) 
	
	$ npm install webdriverio

After done installing dependencies, you need to configure webdriverio configuration file. Webdriverio is a tool that uses different frameworks for automated testing which has some limitations, currently I am using jasmine framework as for our assertion - testing framework. I use selenium server on docker where I point the tests so to view the tests live you need vnc server. 

So lets start by writing:

On terminal export or add the following to your ~/.bash_profile

	# Open your bash profile

	$ vi ~/.bash_profile
	
	# add the following line
	alias 'wdio="./node_modules/.bin/wdio"'
	
After exporting run the following commands to configure webdriverio:
	
	$ wdio

It will ask you to configure the webdriverio.
	
	Where do you want to execute your tests? (Use arrow keys)
	In the cloud using Sauce Labs, Browserstack or Testingbot
  	In the cloud using a different service
 	I have my own Selenium cloud

Please provide the information 

	Where do you want to execute your tests? On my local machine
	Which framework do you want to use? mocha
	Shall I install the framework adapter for you? Yes
	Where are your test specs located? /functional-testing/tests
	Which reporter do you want to use?
	Do you want to add a service to your test setup?
	fails? ./errorShots/
	What is the base url? http://localhost

After everything is setup there will be a wdio.conf.js file in your /functional-testing, that configuration file is used for executing the tests.

[SeleniumHQ](https://github.com/SeleniumHQ/docker-selenium)

On terminal run:
	
	$ docker run -d -p 4444:4444 -p 5900:5900 $ $ $ selenium/standalone-chrome-debug:3.7.1-beryllium

Note: If the hostname is different change it inside wdio.conf.js "host:abcd"

## Executing the tests
The tests live in "/functional-testing/tests"

on terminal 
	
	$ wdio

Now the test should be running, please make sure your browser:'chrome' in wdio.conf.js

## Viewing the test run in vnc server
You can ping to localhost:5900 in vnc server and view the output of the test

## Standalone Selenium node optional
If ever you thought of running the tests locally this is the way to do it

	$ npm install selenium-standalone@latest -g
	$ selenium-standalone install
	$ selenium-standalone start
