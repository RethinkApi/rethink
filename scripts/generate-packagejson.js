var fs = require('fs');

var definitions = {
    distFolder: 'dist',
    srcDest: '',
    srcFolder: '',
    package: {
        location: "package.json"
    },
    markdown: {
        changelog: "changelog.md",
        readme: "readme.md"
    }
}


function readWriteSync() {
    console.log("============== Started creating the package.json file ==============");
    var data = fs.readFileSync(definitions.package.location, 'utf-8');
    var packageContents = JSON.parse(data);
    packageContents.devDependencies = {};
    packageContents.scripts = {};
    packageContents.peerDependencies = packageContents.dependencies;
    packageContents.dependencies = {};
    var fileName = definitions.distFolder.toString() + "/" + definitions.package.location.toString();
    console.log(fileName);

    fs.writeFileSync(fileName, JSON.stringify(packageContents), 'utf-8');

    console.log("============== Finished creating the package.json file ==============");
}

readWriteSync();