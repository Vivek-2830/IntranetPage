import * as React from 'react';
import styles from './CustomePage.module.scss';
import { ICustomePageProps } from './ICustomePageProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { sp } from '@pnp/sp/presets/all';
import * as moment from 'moment';


export interface ICustomePageState {

}

export default class CustomePage extends React.Component<ICustomePageProps, ICustomePageState> {

  constructor(props: ICustomePageProps , state: ICustomePageState) {
    super(props);

    this.state = {

    };
  }

  public render(): React.ReactElement<ICustomePageProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    return (
        <div className="customePage">
          
        </div>
    );
  }
}
