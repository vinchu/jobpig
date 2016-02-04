// Custom
import { API_URL } from './actions';
import fetch from 'isomorphic-fetch';

// React
import React from 'react';
import ReactDOM from 'react-dom';

// Material UI
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin(); //Needed for onTouchTap, Can go away when react 1.0 release. Seehttps://github.com/zilverline/react-tap-event-plugin
window.React = React; //Needed for React Developer Tools
import {
    StylePropable,
    StyleResizable,
} from 'material-ui/lib/mixins';
import {
    Colors,
    getMuiTheme,
} from 'material-ui/lib/styles';

// Redux
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
const store = configureStore();
import { ReduxRouter } from 'redux-router';

let Main = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    history: React.PropTypes.object,
    location: React.PropTypes.object,
  },

  childContextTypes: {
    muiTheme: React.PropTypes.object,
  },

  mixins: [
    StylePropable,
    StyleResizable,
  ],

  getInitialState() {
    return {
      muiTheme: getMuiTheme(),
      leftNavOpen: false,
    };
  },

  getChildContext() {
    return {
      muiTheme: this.state.muiTheme,
    };
  },

  componentWillMount() {
    this.setState({
      muiTheme: this.state.muiTheme,
    });
  },

  componentWillReceiveProps(nextProps, nextContext) {
    const newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
    this.setState({
      muiTheme: newMuiTheme,
    });
  },

  render(){
    return <Provider store={store}>
      <ReduxRouter />
    </Provider>;
  }
});

ReactDOM.render(<Main/>, document.getElementById('app'));

{}// On initial page load, run cron on the server to refresh jobs (if it needs it). Better in a on-page-load than per request
// This doubles as "wake up, heroku!" which sleeps if not accessed for a while.
fetch(API_URL+'/jobs/cron');

// Setup google analytics, defer
window.setTimeout(function setupGoogleAnalytics(){
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create','<nconf:ga_tracking_id>', 'auto');
  ga('send', 'pageview');
});