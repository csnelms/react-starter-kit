# JASPER REACT SETUP

*Note: you will need to install node and npm first*
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
* $ npm start TODO: fix grunt error, until then kick it off manually
* $ sh scripts/watch.sh

*Note: this will begin watching for changes and automatically upload the bundled js to filer*

### Launch app
* https://cfdev3.npe.clearcapital.net/sandbox_csn2/ccfile/root/sites/intranet/react/apps/react-starter-kit

### TODO
* Checkout Jordan's starter kit
* Install redux and connect
* Async/await calls in action component - read up on this
* Figure out how to run watch automatically from npm start and launch in browser
* Figure out how to use mock data and develop locally





