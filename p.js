'use strict';
var packager = require('electron-packager');
var options = {
    'arch': 'ia32',
    'platform': 'win32',
    'dir': './',
    'app-copyright': 'Henok',
    'app-version': '1.0.0',
    'asar': true,
    'icon': './assets/icons/app.ico',
    'name': 'Network Anomaly Detector',
    'out': './releases',
    'overwrite': true,
    'prune': true,
    'version': '1.3.4',
    'version-string': {
        'CompanyName': 'Henok',
        'FileDescription': 'Network Anomaly Detector', /*This is what display windows on task manager, shortcut and process*/
        'OriginalFilename': 'Network Anomaly Detector',
        'ProductName': 'Network Anomaly Detector',
        'InternalName': 'Network Anomaly Detector'
    }
};
packager(options, function done_callback(err, appPaths) {
    console.log("Error: ", err);
    console.log("appPaths: ", appPaths);
});