var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var mongoose = require('mongoose');
var path = require('path');

var host;
if (process.env.NODE_ENV === 'production') {
  host = 
} else {
  host = '127.0.0.1'
}
mongoose.connect(host);




mongoose.connection.on('error', function(error) {
  console.error('mongoose' + error);
});
mongoose.connection.once('open', function() {
  console.log('Mongoose connected.')
});

module.exports = mongoose;
// var createTables = function() {
//   urlSchema = mongoose.Schema({
//     url: String,
//     base_url: String,
//     code: String,
//     title: String,
//     visits: Number
//   });
//   urlSchema.pre('save', function(next) {
//     var shasum = crypto.createHash('sha1');
//     shasum.update(this.url);
//     this.code = shasum.digest('hex').slice(0, 5);
//     next();
//   });
//   module.exports.Link = mongoose.model('urls', urlSchema);

//   userSchema = mongoose.Schema({
//     username: String,
//     password: String
//   });
//   userSchema.methods = {};
//   userSchema.methods.comparePassword = function(attemptedPassword, callback) {
//     bcrypt.compare(attemptedPassword, this.password, function(err, isMatch) {
//       callback(isMatch);
//     });
//   };
//   userSchema.methods.hashPassword = function() {
//     var cipher = Promise.promisify(bcrypt.hash);
//     return cipher(this.password, null, null).bind(this)
//       .then(function(hash) {
//         this.password = hash;
//       });
//   };
//   userSchema.pre('save', function(next) {
//     userSchema.methods.hashPassword();
//     next();
//   });
//   module.exports.User = mongoose.model('User', userSchema);

//   console.log('Tables created');
// };















// var Bookshelf = require('bookshelf');
// var path = require('path');

// var db = Bookshelf.initialize({
//   client: 'sqlite3',
//   connection: {
//     host: '127.0.0.1',
//     user: 'your_database_user',
//     password: 'password',
//     database: 'shortlydb',
//     charset: 'utf8',
//     filename: path.join(__dirname, '../db/shortly.sqlite')
//   }
// });

// db.knex.schema.hasTable('urls').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('urls', function (link) {
//       link.increments('id').primary();
//       link.string('url', 255);
//       link.string('base_url', 255);
//       link.string('code', 100);
//       link.string('title', 255);
//       link.integer('visits');
//       link.timestamps();
//     }).then(function (table) {
//       console.log('Created Table', table);
//     });
//   }
// });

// db.knex.schema.hasTable('users').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('users', function (user) {
//       user.increments('id').primary();
//       user.string('username', 100).unique();
//       user.string('password', 100);
//       user.timestamps();
//     }).then(function (table) {
//       console.log('Created Table', table);
//     });
//   }
// });

// module.exports = db;
