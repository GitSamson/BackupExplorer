const mySecret = process.env['NOTION_TOKEN'];
const ndb_id = process.env['database_id'];
const { Client } = require("@notionhq/client")

// Initializing a client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});
function run(id){
const ndb = notion.databases.query({
  database_id: ndb_id,
  page_size:2
}).then(data=>{
  console.log(data.results[0].properties);
});
  
}

run();

