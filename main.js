// StAuth10065: I David Scott, 000358671 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else.

// Shortcut code that allows us to write ReactRouter tags as <Link /> instead 
// of <ReactRouter.Link />
var { hashHistory,
      IndexLink,
      IndexRoute,
      Link,
      Route,
      Router} = ReactRouter;
	  
this.state = {
         data: 0
      }

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

var Home = React.createClass({
  render: function() {
    return (
      <div>
      <p>Welcome to Catbook!</p>
      </div>
    )
  }
});

componentDidMount : function(){
	this.setState({
		data: 
	});
},

var Newsfeed = React.createClass({
  render: function() {
    return (
      <div>
      <p>Newsfeed</p>
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

var Search = React.createClass({
  render: function() {
    return (
      <div>
      <p>Search</p>
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

