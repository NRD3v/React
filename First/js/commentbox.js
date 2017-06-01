class CommentBox extends React.Component {
    constructor() {
        super();
        this.state = {
            showComments: false,
            comments: [
                { id: 1, author: 'kjzrbf', body: 'zrfzrf'},
                { id: 2, author: 'lnqdfp', body: 'knzevn'}
            ]
        }
    }
    render() {
        let comments = [];
        let messageButton = "Show comments";
        if (this.state.showComments) {
            comments = this._getComments();
            messageButton = "Hide comments";
        }
        return(
            <div className="comment-box">
                <CommentForm addComment={ this._addComment.bind(this) }/>
                <h3>Comments <button onClick={ this._handleClick.bind(this) }>{ messageButton }</button></h3>
                <h4 className="comment-count">{ comments.length } comment(s)</h4>
                <div className="comment-list">{ comments }</div>
            </div>
        );
    }

    _addComment(author, body) {
        const comment = {
            id: this.state.comments + 1,
            author,
            body
        };
        this.setState({comments: this.state.comments.concat([comment])})
    }

    _getComments() {
        return this.state.comments.map(comment => <Comment author={comment.author} body={comment.body} key={comment.id}/>)
    }

    _handleClick() {
        this.setState({
            showComments: !this.state.showComments
        })
    }
}
ReactDOM.render(<CommentBox/>, document.getElementById('root'));
