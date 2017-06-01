class StoryBox extends React.Component {
    render() {
        const now = new Date();
        // const chars = ['Mario', 'Luigi'];
        const chars = [
                {id: 1, name: 'Mario'},
                {id: 2, name: 'Luigi'}
            ];

        return(
            <div>
                <h1>StoryBox</h1>
                <p>{ now.toDateString() }</p>
                {/*<ul>*/}
                    {/*{chars.map(char => <li>{ char }</li>)}*/}
                {/*</ul>*/}
                <ul>
                    {chars.map(char => <li key={char.id}>{ char.name }</li>)}
                </ul>
            </div>
        )
    }
}

ReactDOM.render(<StoryBox />, document.getElementById('root'));
