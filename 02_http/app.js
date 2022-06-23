const http = require('http');

const handleRequest = (req,res) => {
    // console.log(req.method);
    // console.log(req.url);
    // console.log(req.headers);
    // console.log(req.body);
    // console.log('================');
    // res.end('hi there');

    // ======================================================================
    // if(req.method === 'POST'){
    //     res.writeHead(400);
    //     return res.end('maaf, tidak melayani request POST')
    // }

    // if(req.method === 'GET'){
    //     return res.end('response HTTP request menggunakan get')
    // }

    // if(req.method === 'PUT'){
    //     res.writeHead(500);
    //     return res.end('aku yang salah')
    // }

    // if(req.method === 'DELETE'){
    //     return res.end('response HTTP request menggunakan delete')
    // }
    
    // return res.end('method tidak diketahui');
    // ======================================================================

    const dataSiswa = {
        nama: 'Aku',
        kelas: 'Gold class'
    };

    console.log(typeof dataSiswa);
    console.log(dataSiswa);

    console.log(typeof JSON.stringify(dataSiswa));
    console.log(JSON.stringify(dataSiswa));

    //const stringToObject = JSON.parse();
    res.writeHead(200,{"Content-Type": "application/json"});
    return res.end(JSON.stringify(dataSiswa));
}

http.createServer(handleRequest).listen(8000);