/*let http=require('http')//creation de la variable http et en ajoutant un module pour cette varieble et le module est http
//pour ecuter un evenement sur le serveur 
let serveur =http.createServer()//creation de serveur
serveur.on('request',(request,response)=>{//dire que il faut ecuter le serveur quant il y a des requete 
response.writeHead(200,{
	'content-type':'text/html;charset=utf-8'})//la je dit que le texte est de type html
response.end('salut comment ça va?')

})
serveur.listen(1330)//lo numero de port ou on veut ecouter*/
/*var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');*/

/*
var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    var url_parts = url.parse(req.url, true);
    var name = url_parts.query.name;
    if (name) {
        console.log('Name: ' +name);
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({message: 'Hello ' +name + '!'}));
    } else {
        console.log('No name!');
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.readFile('hello02.html',function (err,data) {
            res.end(data);
        });
    }
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');*/




/*var knex = require('knex')({
  client: 'sqlite3',
  connection: () => ({
    filename: process.env.SQLITE_FILENAME
  })
});*/

var knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: "../Data/db.sqlite3"
    },
    debug: true,
});

async function init() {

  //await knex.schema.dropTableIfExists('Joueur');

  await knex.schema.createTableIfNotExists('Joueur', (table) => {
    table.string('pseudo').primary();
   // table.string('nom',255);
   // table.string('prenom',255).notNullable();
    //table.string('email',255).notNullable();
    //table.string('pasword',255).notNullable();
    
    
  });
  //await knex.schema.dropTableIfExists('messages');
  
  /*await knex.schema.createTableIfNotExists('Partie', (table) => {
    table.integer('id_partie').increments().primary();
    table.integer('user_id').references('id').inTable('users').notNull();
    table.string('text', 255).notNullable();
    table.date('dateTemps').defaultTo(knex.fn.now()); 
    //table.string('date');
  });

 await knex.schema.createTableIfNotExists('Jouer', (table) => {
    table.string('pseudo',255);
    table.increments('id_partie');
    table.integer('scorp').notNull();
    table.date('dateTemps').defaultTo(knex.fn.now()); 
    table.string('pseudo', 255).references('pseudo').inTable('Joueur').notNull();
    table.integer('id_partie').references('id_partie').inTable('Partie').notNull();
table.primary('pseudo','id_partie');
    //table.string('date');
  });
 
  var cols = await knex('users').columnInfo();
  console.log('Columns:', cols);
  
  await knex('Joueur').insert({pseudo:'siham',nom:'ouchene',prenom:'siham',email:'sihamouchene@gmail.com',pasword:'123'});
  
 var r = await knex.raw('select * from Joueur where pseudo = ? ', 'siham');
   console.log('tuple:', r);
  
   await knex.destroy();
console.log('tuple:');*/
}

init();
