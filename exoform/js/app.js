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
    const newComments = [...this.state.comments, this.state.form];
    this.setState({
      comments : newComments,
    })
    console.log(this.state.comments);
};

  render() {
    return (
      <div className="form">
        <label className="form__label">Say something</label>
        <input
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
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

// value={this.State.name} onChange={this.handleChange}
