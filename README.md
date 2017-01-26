# Image Search Demo in Node.js with Watson Visual Recognition API

## Overview

Node.js demo application which ..

(1) machine-learn prepared images to IBM Watson, and

(2) search similar images to specified image.

This application use IBM Watson Visual Recognition API. If you want to try this application, you need to register IBM Bluemix at first, and you need to get API Key string of Visual Recognition API.

## Files

<pre>
--- public/             : document root
 |   |- images/         :  source images folder
 |   |   |- xxxx.jpg    :   source images which is to be learned and searched.
 |   |   |- yyyy.png        You can replace default images to your own ones.
 |   |   |-   :
 |   |
 |   |- cvi_busy_lib.js :  JavaScript lib
 |   |- icon57.png      :  icon
 |   |- index.html      :  main page
 |
 |- uploads/            : tempolary folder
 |
 |- .gitignore          : .gitignore file
 |- app.js              : web application
 |- learnImages.js      : console application for image learning
 |- manifest.yml        : manifest.yml for IBM Bluemix
 |- packages.json       : packages.json for IBM Bluemix
 |- README.md           : this file
 |- settings.js         : setting variables
</pre>

## How to use

### Prerequisites

- Register IBM Bluemix

    * http://bluemix.net/

- Subscribe IBM Watson Visual Recognition API, and get API KEY string.

- Create a Node.js runtime in IBM Bluemix(optional).

- Edit your manifest.yml with you application name(optional).

- Install cf command line tool(optional).

    * https://github.com/cloudfoundry/cli/releases

### Install

- Install Node.js in your local machine.

- Download source files, and extend it.

    * $ git clone https://github.com/dotnsf/imageSearchDemo

- Edit settings.js with your API KEY.

    * exports.vr_apykey = 'abcdabcdabcdabcdabcdabcd';

- Install dependent middlewares for Node.js:

    * $ npm install watson-developer-cloud

- Prepare your images which are to be learned and searched under public/images/ folder.

### Learning

- After you set exports.vr_apikey variable with your won API Key, and you have prepared your images under public/images folder, you can start to make your Watson learn your images.

    * $ node learnImages.js

- When completed, this process automatically edit your settings.js and add "exports.vr_collection_id = 'XXXX'" into your settings.js.

### Deploy( into IBM Bluemix )

- Deploy your application with cf command line tool.

    * $ cf push

### Enjoy!

Now you can browse your application from web browser.

## Licensing

This code is licensed under MIT.

Sample images, under public/images/ folder, are ones of license-free from pixabay(https://pixabay.com/).

## Copyright

2017 K.Kimura @ Juge.Me all rights reserved.






