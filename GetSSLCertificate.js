var https = require('https');
var fs = require("fs");

// 异步读取

const readFile = (file) => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data.toString().split("\n"));
            }
        });
    });
};

const getDate = host => {
    return new Promise((resolve, reject) => {
        const options = {
            host,
            port: 443,
            method: 'GET'
        };
        
        const req = https.request(options, function(res) {
            const cert = res.connection.getPeerCertificate();
            resolve({
                host,
                valid_to: cert.valid_to
            });
        });
        req.end();
    });
}

(async () => {
    const hosts = await readFile('domains.txt');
    for(let host of hosts) {
        console.log(await getDate(host));
    }
})();

