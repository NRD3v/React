class CommentForm extends React.Component {
    constructor() {
        super();
        this.state = {comments: [
            { id: 1, author: 'kjzrbf', body: 'zrfzrf'},
            { id: 2, author: 'lnqdfp', body: 'knzevn'}
        ]};
    }

    render() {
        return(
            <form action="" className="comment-form" onSubmit={ this._handleSubmit.bind(this) }>
                <input type="text" placeholder="Name" ref={(input) => this._author = input }/>
                <input type="text" placeholder="Message" ref={(input) => this._body = input }/>
                <button type="submit">Send</button>
            </form>
        );
    }

    _handleSubmit(event) {
        event.preventDefault();
        this.props.addComment(this._author.value, this._body.value);
        // let id = this.state.comments.length + 1;
        // let author = this._author;
        // let body = this._body;
        // this.state.comments.concat({id: id, author: author, body: body});
    }
}
