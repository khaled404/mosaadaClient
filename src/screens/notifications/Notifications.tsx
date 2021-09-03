import React from 'react';

import TabsHeader from '../../components/header/TabsHeader';
import {Container} from '../../globalStyle';
import NotificationBox from './components/NotificationBox';
import {NotificationsContainer, NotificationsScroll} from './style';

const Notifications = () => {
  return (
    <Container>
      <TabsHeader title="My Orders" />
      <NotificationsContainer>
        <NotificationsScroll
          data={[{}, {}, {}, {}, {}, {}, {}, {}]}
          renderItem={() => <NotificationBox />}
          keyExtractor={(_, i) => i.toString()}
        />
      </NotificationsContainer>
    </Container>
  );
};

export default Notifications;
