import React, { Component } from 'react';
import cn from 'classnames';

import LoginPage from './Login';
import Tabs from './Tabs';
import Scheduling from './Scheduling';
import Library from './Library';
import { fetchKey } from './api';

import { whiteText, containerBox } from './styles';

const defaultTabs = [
  { key: 'scheduling', component: Scheduling, name: 'Scheduling' },
  { key: 'library', component: Library, name: 'Library' },
];

class App extends Component {
  state = {
    currentTab: 0,
    apiKey: null
  }

  componentWillMount() {
    this.onAuthChange();
    if(window.location.hash) {
      this.changeTab(window.location.hash.substring(1));
  }
  }

  onAuthChange = () => {
    const apiKey = fetchKey();
    this.setState({
      apiKey
    });
  }

  changeTab = key => {
    const tab = defaultTabs.find(t => t.key === key);
    let currentTab = defaultTabs.indexOf(tab);
    if(currentTab === -1) {
      currentTab = 0;
    }

    this.setState({
      currentTab
    });
  }

  render() {
    const { currentTab, apiKey } = this.state;
    return (
      <div className={cn(containerBox, whiteText)}>
        {!apiKey ?
          <LoginPage onAuthChange={this.onAuthChange} /> :
          <Tabs
            currentTab={currentTab}
            tabs={defaultTabs}
            changeTab={this.changeTab}
          />
        }
      </div>
    );
  }
}

export default App;
