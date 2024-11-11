import * as React from 'react';
import styles from './SharepointTemplate.module.scss';
import { ISharepointTemplateProps } from './ISharepointTemplateProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { sp } from '@pnp/sp/presets/all';
import * as moment from 'moment';

export interface ISharepointTemplateState {

}

require("../assets/css/style.css");

export default class SharepointTemplate extends React.Component<ISharepointTemplateProps, ISharepointTemplateState> {

  constructor(props: ISharepointTemplateProps, state: ISharepointTemplateState){
    super(props); 
     
    this.state = {

    };
  }

  public render(): React.ReactElement<ISharepointTemplateProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    return (
        <div className="sharepointTemplate">
          <div className='ms-Grid'>
            <div className='ms-Grid-row'>
              <div className='ms-Grid-col'>

                <div className='welcome-text'>
                  <div className='Header-Text'>
                    <h1>Welcome Emily!</h1>
                    <p>We are excited to have you on board! To help you jump-start your company journey, we included an on boarding checklist and resources for you to learn more about out team culture and leadership!</p>
                  </div>

                  <div className='image'>
                    <img src={require("../assets/Image/Step-by-Step.jpg")} alt='Step by Step Blocks' className='step-image' />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
    );
  }
}
