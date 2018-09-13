var indexApp = new Vue({
el: '#random',
data: {

  user:
    {
      "gender": '',
      "name": {
        "title": '',
        "first": '',
        "last": ''
      },
      "location": {
        "street": "  ",
        "city": "",
        "state": "",
        "postcode": "",
        "coordinates": {
          "latitude": "",
          "longitude": ""
        },
        "timezone": {
          "offset": "",
          "description": ""
        }
      },
      "email": "",
      "login": {
        "uuid": "",
        "username": "",
        "password": "",
        "salt": "",
        "md5": "",
        "sha1": "",
        "sha256": ""
      },
      "dob": {
        "date": "",
        "age": ''
      },
      "registered": {
        "date": "",
        "age": ''
      },
      "phone": "",
      "cell": "",
      "id": {
        "name": "",
        "value": ""
      },
      "picture": {
        "large": "",
        "medium": "",
        "thumbnail": ""
      },
      "nat": "NO"
    },

  "info": {
    "seed": "2da87e9305069f1d",
    "results": 1,
    "page": 1,
    "version": "1.2"
  }

},

computed: {
  age: function () {
    return moment().diff(moment(this.user.dob.date), 'years')
  },
  date: function() {
   return moment(this.user.dob.date).format('MMMM Do YYYY')}
},

  methods: {

fetchuser() {
  fetch('https://randomuser.me/api/')
  .then( response => response.json())
  //.then(function(response) {return response.json()})
  .then( json => {
    indexApp.user = json.results[0]})
    .catch(function(err){
    console.log('FETCH returned:');
    console.log(json);
  })
  .catch(function(err){
    console.log('FETCH ERROR:');
    console.log(err);}
)}},
created() {
  this.fetchuser();
}
});
