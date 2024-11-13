import * as React from 'react';
import styles from './OnboardingResources.module.scss';
import { IOnboardingResourcesProps } from './IOnboardingResourcesProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { sp } from '@pnp/sp/presets/all';
import * as moment from 'moment';
import { Icon } from 'office-ui-fabric-react';

export interface IOnboardingResourcesState {

}

require("../assets/css/style.css");

export default class OnboardingResources extends React.Component<IOnboardingResourcesProps, IOnboardingResourcesState> {

  constructor(props: IOnboardingResourcesProps, state: IOnboardingResourcesState) {
    super(props);

    this.state = {

    };
  }

  public render(): React.ReactElement<IOnboardingResourcesProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    return (
        <div className="onboardingResources">
          <div className='ms-Grid'>
            <div className='ms-Grid-row'>
              <div className='ms-Grid-col'>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
