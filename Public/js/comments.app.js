var commentsApp = new Vue({
  el: '#comments',
  data: {
    comments:[],
    commentForm: { }
  },

  methods: {

  fetchComments() {
    fetch('api/comment.php')
    .then( response => response.json() )
    .then( json => {commentsApp.comments = json} )
    .catch( err => {
      console.error('WORK FETCH ERROR:');
      console.error(err);
    })
  }
},

created () {
  // Do data fetch
  this.fetchComments();
}

})
