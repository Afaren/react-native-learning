import PhoneContactList from "./components/PhoneContactList";
import {Router, Scene, Stack } from "react-native-router-flux";
import * as React from "react";


const AppRouter = () => (
  <Router>
    <Stack key='root'>
      <Scene
        key='phoneContactList'
        component={PhoneContactList}
        title='通讯录'
        initial
      />
    </Stack>
  </Router>
);


export default AppRouter;