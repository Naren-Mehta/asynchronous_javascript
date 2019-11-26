fetch('http://www.omdbapi.com/?s=batman&y=2018&apikey=83325855')
.then(response =>response.json())
.then(data => console.log(data));