import React, { useEffect, useCallback } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  BottomNavigation,
  BottomNavigationAction,
} from "@material-ui/core";
import { Shuffle } from "@material-ui/icons";
import { FormattedMessage } from "react-intl";
import { useDispatch } from "react-redux";
import tag from "classed.macro";

import { detectBluetoothSupport } from "core/utils/feature-detection";
import { useSessionStorage } from "core/hooks/useSessionStorage";

import { RobotWidget } from "app/robot/widget";
import { RandomScramble } from "app/random-scramble";
import { appInitialized } from "app/main-screen/actions";
import { IncompatibleBrowserDialog } from "app/incompatible-browser-dialoag";

const Screen = tag.div`flex flex-col h-screen`;

const IconContainer = tag.div`flex flex-row ml-auto`;

export const MainScreen = (): JSX.Element => {
  const [navigationValue, setNavigation] = React.useState("random");
  const dispatch = useDispatch();
  const handleChange = (_: React.ChangeEvent<unknown>, newValue: string) => {
    setNavigation(newValue);
  };

  const [showIncompatibleDialog, setShowIncompatibleDialog] = useSessionStorage(
    "showIncompatibleBrowserDialog",
    true
  );
  const isBluetoothSupported = detectBluetoothSupport();
  const handleIncompatibleDialogClose = useCallback(() => {
    setShowIncompatibleDialog(false);
  }, []);

  useEffect(() => {
    dispatch(appInitialized());
  }, []);

  return (
    <Screen>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5">
            <FormattedMessage id="appTitle" />
          </Typography>
          <IconContainer>
            <RobotWidget />
          </IconContainer>
        </Toolbar>
      </AppBar>

      <div className="flex flex-row h-full w-full">
        <div className="flex flex-grow flex-col h-full">
          {navigationValue === "random" && <RandomScramble />}
          <div className="landscape:hidden computer:hidden w-full mt-auto">
            <BottomNavigation
              showLabels
              value={navigationValue}
              onChange={handleChange}
              className="w-full"
            >
              <BottomNavigationAction
                icon={<Shuffle />}
                value="random"
                label="RANDOM"
                aria-label="random"
              />
            </BottomNavigation>
          </div>
        </div>
      </div>
      {!isBluetoothSupported && showIncompatibleDialog && (
        <IncompatibleBrowserDialog
          isOpen={true}
          onClose={handleIncompatibleDialogClose}
        />
      )}
    </Screen>
  );
};
