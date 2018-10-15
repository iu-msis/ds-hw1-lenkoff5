var commentsApp = new Vue({
  el: '#commentMain',
  data: {
    comments: {
      id: 0,
      comment: '',

    },
    commentsList:[]
  },
  methods: {
    handleCommentForm(e) {

      // TODO: Check validity in a better way

      const s = document.stringify(this.commentForm);

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
        console.error('WORK POST ERROR:');
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
    },

  },
  created () {
    // Do data fetch
    const url = new URL(window.location.href);



    // Populate workForm with default values

    // TODO: Fetch task-specific data
    // fetch('api/task?id=4')
    fetch('api/comment.php')
    .then( response => response.json() )
    .then( json => {commentsApp.commentList = json} )
    .catch( err => {
      console.error('WORK FETCH ERROR:');
      console.error(err);
    })

  }
}
)
