import PhoneContactList from "./components/PhoneContactList";
import { Router, Scene, Stack } from "react-native-router-flux";
import * as React from "react";
import ContactDetail from "./components/ContactDetail";


const AppRouter = () => (
  <Router>
    <Stack key='root'>
      <Scene
        key='phoneContactList'
        component={PhoneContactList}
        title='通讯录'
        initial
      />
      <Scene
        key='contactDetail'
        component={ContactDetail}
        title='Contact Detail'
        backTitle='返回'
      />
    </Stack>
  </Router>
);


export default AppRouter;