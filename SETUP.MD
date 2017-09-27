# JASPER REACT SETUP

*Note: you will need to install node and npm first*

### Clone the starter app
* $ cd [sandbox]/root/sites/intranet/react/apps
* $ git clone https://github.com/csnelms/react-starter-kit.git
* $ git init

### Install dependencies
Beware this next step will cause your file sync to start uploading dev files you don't need on the filer, so you will want to configure file sync to ignore the following paths.
* [sandbox]/root/sites/intranet/react/apps/react-starter-kit/js
* [sandbox]/root/sites/intranet/react/apps/react-starter-kit/node_modules

*Note: In IntelliJ, goto Tools > Deployment > Configuration > Excluded Paths > Add Local Path*

Now you are ready to install your node_modules defined in the dependencies section of your package.json file.
* $ npm install