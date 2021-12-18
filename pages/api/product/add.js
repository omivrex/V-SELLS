const formidable = require('formidable');

const form = formidable({ multiples: true});

export const config = {
    api: {
      bodyParser: false
    }
}

export default function (req, res) {
    form.parse(req, (err, fields, files) => {
      if (err) throw err;
      console.log('fields:', fields);
      console.log('files:', files);
    });
    res.status = 200;
}