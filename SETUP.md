# JASPER REACT SETUP

*Note: you will need to install node and npm first, or update current version to the latest*

### Update npm and node to latest versions
* $ sudo npm cache clean -f
* $ sudo npm install -g n
* $ sudo n stable
* $ npm install npm -g npm

*Note: you should also have file sync set up on your sandbox*

### Clone the starter app
* $ cd [sandbox]/root/sites/intranet/react/apps
* $ git clone https://github.com/csnelms/react-starter-kit.git
* cd react-starter-kit
* $ git init

*Note: your file sync should have started copying files to the filer by now*

### Install dependencies
Beware this next step will cause your file sync to start uploading dev files you don't need on the filer, so you will want to configure file sync to ignore the following paths.
* [sandbox]/root/sites/intranet/react/apps/react-starter-kit/js
* [sandbox]/root/sites/intranet/react/apps/react-starter-kit/node_modules

*Note: In IntelliJ, goto Tools > Deployment > Configuration > Excluded Paths > Add Local Path*

Now you are ready to install your node_modules defined in the dependencies section of your package.json file.
* $ npm install

### Start your app
* $ npm start

*Note: this will launch a local version of the app and a dev instance, and also begin watching for changes*
