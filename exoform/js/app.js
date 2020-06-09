class App extends React.Component {
  state = {
    form: {
      name: "",
      comment: "",
      },
    comments: [],
  };

  handleChange = (e) => {
    const newForm = {...this.state.form, [e.target.id]: e.target.value};
    this.setState({
      form: newForm,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // let newComment = {
    //   name: this.state.form.name,
    //   message: this.state.form.comment
    // }
    // this.setState({
    //   comments: this.state.comments.concat(newComment)
    // })
    const newComments = [...this.state.comments, this.state.form];
    this.setState({
        comments : newComments,
      })
      // {newComment.name}
    console.log(this.state.comments);
    // console.log(newComment.message);

};

  render() {
    return (
      <div className="form">
        <h2 className="form__h2">Say something</h2>
        <form action=""><input
        type="text"
        placeholder="Your Name"
        className="form__element"
        name="name"
        id="name"
        value={this.state.name}
        onChange={this.handleChange}
        />
        <textarea
        type="text"
        placeholder="You Comment"
        className="form__element form__comment"
        id="comment"
        value={this.state.comment}
        onChange={this.handleChange}
        />
        <input
        type="submit"
        value="Comment"
        className="form__element form__button"
        onClick={this.handleSubmit}
        /></form>

      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

// value={this.State.name} onChange={this.handleChange}
