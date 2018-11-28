let express = require('express'),
app = express(),
port = 3001;

const maxCards = 500;   

let getCard = () => {
    return {
        "coreData": {
        "id": "",
        "number": "INC" + parseInt(Math.random() * 10000000, 10),
        "lastUpdateDate": "YYYY-MM-DD hh:mm:ss",
        "type": "INCIDENT",
        "state": "New",
        "shortDescription": "The quick brow fox jumped over the lazy odg",
        "application": "System",
        "assignee": "Jack"
        },
        "mlData": [],
        "continuousML": false,
        "automationData": {},
        "editingData": {},
        "serviceData": {
        "caller_id": "",
        "resolved_at": "",
        "approval_set": "",
        "subcategory": "",
        },
        "slaData": {
            "ONE": 'not',
            "two": '',
            "three": 'ho lololol'
        }
    }
}
    app.use((req,res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
      res.setHeader('Access-Control-Allow-Headers', 'apiToken, X-Total-Count'); // If needed
      res.setHeader("Access-Control-Expose-Headers", 'X-Total-Count');
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed
    next();
    });

app.get('/cards', (req, res) => {
    const {query} = req;
    const page = parseInt(query.page, 10) || 0;
    const perPage = parseInt(query.perPage) || 0;
    const pages = Math.min((page + 1 )  * perPage, maxCards)  - (page * perPage);
    let list = Array(Math.max(pages,0)).fill(null).map(getCard);
    res.setHeader('X-Total-Count', maxCards);
    res.json(list);
})
app.listen(port);
