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
  },
  handleCommentForm(e) {

    // TODO: Check validity in a better way

    const s = JSON.stringify(this.commentForm);

    console.log(s);

    // POST to remote server
    fetch('api/comment.php', {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
          "Content-Type": "application/json; charset=utf-8"
      },
      body: s // body data type must match "Content-Type" header
    })
    .then( response => response.json() )
    .then( json => {this.comment.push(json)})
    .catch( err => {
      console.error('COMMENT POST ERROR:');
      console.error(err);
    })

    // Reset workForm
    this.commentForm = this.getEmptyCommentForm();
  },


  getEmptyCommentForm() {
    return {
      id: this.comment.id,
      comment: moment().format('HH:mm'),
    }
  }
},



created () {
  // Do data fetch
  this.fetchComments();
}

})
