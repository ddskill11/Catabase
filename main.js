// StAuth10065: I David Scott, 000358671 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else.

// Shortcut code that allows us to write ReactRouter tags as <Link /> instead 
// of <ReactRouter.Link />
var { hashHistory,
      IndexLink,
      IndexRoute,
      Link,
      Route,
      Router} = ReactRouter;

var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Catbook</h1>
        <ul className="header">
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          <li><Link to="/newsfeed" activeClassName="active">Newsfeed</Link></li>
          <li><Link to="/cats" activeClassName="active">Cats</Link></li>
		  <li><Link to="/search" activeClassName="active">Search</Link></li>
        </ul>
      <div className="content">
        {this.props.children}
      </div>
      <div className="footer">
        <p>Catbook - Copyright 2017</p>
      </div>
      </div>
    )
  }
});

var Search = React.createClass({
  render: function() {
    return (
      <div>
      <p>Search</p>
      </div>
    )
  }
});

var Results = React.createClass({
	
	render: function(){
		var resultItems = this.props.searchResults.map(function(result){
			return <ResultItem body={result.BODY} name={result.NAME} />
		});
		return(
			<ul>
				{resultItems}
			</ul>
		);
	}
});

var ResultItem = React.createClass({
	render:function(){
		return <li>{this.props.BODY}</li>;
	}
});

var Home = React.createClass({
  render: function() {
    return (
      <div>
      <p>Welcome to Catbook!</p>
      </div>
    )
  }
});

var Newsfeed = React.createClass({
	getInitialState : function(){
		return{
			searchResults: []
		}
	},
	
	showResults: function(response){
		this.setState({
			searchResults: response.results
		})
		console.log(response);
	},
	
	search: function(URL){
		$.ajax({
			type: "GET",
			dataType: 'json',
			url: URL,
			success: function(response){
				this.showResults(response);
			}.bind(this)
		});
	},
	
	componentDidMount(){
		this.search('https://csunix.mohawkcollege.ca/~000358671/private/10125/2/backend.php?action=allposts');
	},
	
  render: function() {
    return (
      <div>
      <p>Newsfeed</p>
	  <Results searchResults={this.state.searchResults} />
      </div>
    )
  }
});

var Cats = React.createClass({
  render: function() {
    return (
      <div>
      <p>Cats</p>
      </div>
    )
  }
});

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="newsfeed" component={Newsfeed} />
      <Route path="cats" component={Cats} />
	  <Route path="search" component={Search} />
    </Route>
  </Router>
  ,document.getElementById("app")
);

