function doDb (model, self) {
	var opt = {
	    host:     'localhost',
	    database: 'MYSQLDATA',
	    user:     'root',
	    password: '',
	    protocol: 'mysql'
	}
	var cbk = function(data){
		console.log('I love U');
		self.listenCount --;
		return 123;
	}
	orm.connect(opt, function (err, db) {
		if (err) return console.error('Connection error: ' + err);
		var MYTABLE = db.define("MYTABLE", {
			id : {type: 'serial', key: true},
	        name : {type: 'text'},
	        sex : {type: 'text'}
	    });
		db.models.MYTABLE.find({name: 'yaoyao'}, function(err, rows) {
			if (err) return console.error('Connection error: ' + err);
			cbk(rows);
	  	});
	});

}

exports.doDb = doDb;