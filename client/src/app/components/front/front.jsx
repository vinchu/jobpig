import React from 'react';
import mui from 'material-ui';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import Auth from './auth.jsx';
import FullWidthSection from './full-width-section.jsx';
import Footer from '../footer';
import {Colors, Typography} from 'material-ui/lib/styles';

export default class Front extends React.Component {
  render(){
    let styles = {
      root: {
        backgroundColor: Colors.blueGrey500,
      },
      title: {
        color: Colors.grey50,
        fontWeight: Typography.fontWeightMedium,
      },
    };

    let rightIconMenu = (
      <mui.IconMenu iconButtonElement={<mui.IconButton><MoreVertIcon /></mui.IconButton>}>
        <mui.MenuItem>Apply</mui.MenuItem>
        <mui.MenuItem>Like</mui.MenuItem>
        <mui.MenuItem>Dislike</mui.MenuItem>
      </mui.IconMenu>
    );

    return (
      <div>

        {/* Github Ribbon (interfering with the pig)
          <a href="https://github.com/lefnire/jobpig"><img style={{position: 'absolute', top: 0, left: 0, border: 0}} src="https://camo.githubusercontent.com/c6625ac1f3ee0a12250227cf83ce904423abf351/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f6c6566745f677261795f3664366436642e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_left_gray_6d6d6d.png" /></a>
        */}

        <Auth ref='auth' />

        <div className='login'>
          <mui.RaisedButton label='Login / Register' onTouchTap={()=>this.refs.auth.handleOpen()} />
        </div>
        <FullWidthSection style={styles.root} className='root'>
          <img src="Pig.png" className='pig' />
          <div className='tagline' >
            <h1 style={styles.title} className='front-title'>Jobpig</h1>
            <h2 style={styles.title} className='front-subtitle'>Find jobs tailored to you.</h2>
          </div>
        </FullWidthSection>
        <FullWidthSection className='examples'>
          <mui.Card>
            <mui.CardTitle title='Rate job posts' />
            <mui.Divider />
            <mui.CardHeader
              title='Seeking Senior JavaScript Developer'
              subtitle='Company, Inc | San Francisco, CA'
              avatar="http://lorempixel.com/100/100/technics/10"
              />
            <mui.CardText>
              <p>
                Come work for the coolest company on earth! We use <b>React</b>, React Native, <b>Node.js</b>/Express, <b>Postgres</b>. PTO, paid vacation, 401k, and an HTC Vive room for competitive produce-juggling.
              </p>
              <mui.FloatingActionButton>
                <mui.FontIcon className="material-icons">thumb_up</mui.FontIcon>
              </mui.FloatingActionButton>
              &nbsp;&nbsp;
              <mui.FloatingActionButton>
                <mui.FontIcon className="material-icons">thumb_down</mui.FontIcon>
              </mui.FloatingActionButton>
            </mui.CardText>
          </mui.Card>

          <br/>
          <mui.Card>
            <mui.CardTitle title='That adjusts scores' />
            <mui.Divider />
            <mui.CardText>
              <mui.List>
                {['React', 'Node', 'Postgres', 'San Francisco, CA', 'Company, inc.'].map(k => {
                  return <mui.ListItem key={'scores-example-' + k} primaryText={
                    <div><span className='plus-one'>+1</span> {k}</div>
                  } />
                })}
              </mui.List>
            </mui.CardText>
            <mui.CardTitle
              title='Filtering your job-hunt'
              subtitle='Scores train Jobpig to narrow down jobs tailored for your interests.'
              />
            <mui.Divider />
            <mui.CardText>
              <mui.List>
                {
                  [
                    {title:'Node.js, Postgres Backend Engineer', sub:'Medical Inc. | San Jose, CA'},
                    {title:'Python Machine Learning Expert', sub:'Singularity Ltd. | Boston, MA', disabled:true},
                    {title:'React + Flux Web/Mobile Developer', sub:'Agency LLC | Portland, OR'},
                    {title:'Backbone, Rails Full-Stack Dev', sub:'NotMyCup Co. | Austin, TX', disabled:true},
                  ].map((i,n)=>
                    <mui.ListItem
                      style={ i.disabled ? {textDecoration:'line-through', opacity:0.5} : {}}
                      leftAvatar={<mui.Avatar src={"http://lorempixel.com/100/100/technics/"+(n+1)} />}
                      primaryText={i.title}
                      secondaryText={i.sub}
                      rightIconButton={rightIconMenu}
                      key={'jobs-example-' + n}
                      />
                  )
                }
              </mui.List>
            </mui.CardText>
          </mui.Card>

          <br/>
          <mui.Card>
            <mui.CardTitle
              title={<span>And making <i>you</i> easier to find</span>}
              subtitle={`Your profile is only visible to companies for whose job you're great fit.`} />
            <mui.Divider />
            <mui.CardHeader
              title='Me'
              subtitle='Full-stack JavaScript Developer'
              avatar="http://lorempixel.com/100/100/people"
              />
            <mui.CardText>
              <p>
                "Me" matches your company by a score of <span style={{color:'green'}}>+10</span> on the following attributes: <b>React</b>, <b>Node</b>, <b>Postgres</b>.
              </p>
              <mui.RaisedButton label="Contact" />
            </mui.CardText>
          </mui.Card>

        </FullWidthSection>
        <Footer />
      </div>
    );
  }
}
