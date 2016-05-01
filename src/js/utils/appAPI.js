var AppActions = require('../actions/AppActions');

module.exports = {
	addNote: function(note){
		$.ajax({
			url: "https://api.mongolab.com/api/1/databases/stickypadreact/collections/notes?apiKey=AOEzBlPhFJtfhzkSuqssk4zFYoOUJBrw",
			data: JSON.stringify(note),
			type: "POST",
			contentType: "application/json"
		});
	},

	getNotes: function(){
		$.ajax({
			url: "https://api.mongolab.com/api/1/databases/stickypadreact/collections/notes?apiKey=AOEzBlPhFJtfhzkSuqssk4zFYoOUJBrw",
			dataType: 'json',
			cache: false,
			success: function(data){
				console.log(data);
				AppActions.receiveNotes(data);
			}.bind(this),
			error: function(xhr, status, err){
				console.log(err);
			}.bind(this)
		});
	},

	removeNote: function(noteId){
		$.ajax({
			url: "https://api.mongolab.com/api/1/databases/stickypadreact/collections/notes/"+noteId+"?apiKey=AOEzBlPhFJtfhzkSuqssk4zFYoOUJBrw",
			type: "DELETE",
			asynch: true,
			timeout: 300000,
			success: function(data){
				console.log('Note deleted')
			}.bind(this),
			error: function(xhr, status, err){
				console.log(err);
			}.bind(this)
		});

	}
}