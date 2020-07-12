import React, {Component, Fragment} from 'react';
import {Image, Text, View, ScrollView} from 'react-native';

import Images from '../../images';
import Countries from '../../components/Countries';

class LaunchScene extends Component {
  render() {
    return (
      <Fragment>
        <ScrollView>
          <Countries />
        </ScrollView>
      </Fragment>
    );
  }
}

export default LaunchScene;

// <LaunchScreenWrapper>
//           <Image source={Images.ibHubsLogo} />
//           <Text>Hello World</Text>
//         </LaunchScreenWrapper>
// export const LaunchScreenWrapper = styled.View`
//   flex: 1;
//   justify-content: center;
//   align-items: center;
// `;
