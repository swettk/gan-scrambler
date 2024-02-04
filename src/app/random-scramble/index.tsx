import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, InputLabel, OutlinedInput, Tooltip } from "@material-ui/core";
import { FormattedMessage } from "react-intl";

import { generateScramble } from "core/cube/scramblers/full";
import { ButtonRow, ContentContainer } from "core/components/presentation";

import { getRobotServer } from "app/robot/store/selectors";
import { scrambleSubmitted } from "app/robot/store/actions";

import { useHotkeys } from "react-hotkeys-hook";

export const RandomScramble = (): JSX.Element => {
  const [scramble, setScramble] = useState<string>("");
  const robotServer = useSelector(getRobotServer);
  const dispatch = useDispatch();

  const handleSendClick = useCallback(
    () => dispatch(scrambleSubmitted(scramble)),
    [scramble]
  );

  const handleScrambleClick = useCallback(
    () => setScramble(generateScramble()),
    []
  );

  const tooltipText = !Boolean(robotServer)
    ? "Robot not connected"
    : !scramble
    ? "Scramble required"
    : "";

  useEffect(() => {
    dispatch(scrambleSubmitted(scramble));
    setScramble("");
  }, [scramble]);

  // L B F D R

  useHotkeys("l", () => {
    setScramble("L");
  });

  useHotkeys("o", () => {
    setScramble("L'");
  });

  useHotkeys("b", () => {
    setScramble("B");
  });

  useHotkeys("n", () => {
    setScramble("B'");
  });

  useHotkeys("f", () => {
    setScramble("F");
  });

  useHotkeys("g", () => {
    setScramble("F'");
  });

  useHotkeys("r", () => {
    setScramble("R");
  });

  useHotkeys("t", () => {
    setScramble("R'");
  });

  useHotkeys("d", () => {
    setScramble("D");
  });

  useHotkeys("a", () => {
    setScramble("D'");
  });

  return (
    <ContentContainer>
      <div className="flex flex-col w-full">
        <InputLabel htmlFor="scramble" className="text-xs">
          Scramble
        </InputLabel>
        <OutlinedInput
          id="scramble"
          value={scramble}
          className="text-on-surface py-med children:cursor-text"
          multiline
          fullWidth
          disabled
        />
      </div>

      <ButtonRow>
        <Button variant="contained" onClick={handleScrambleClick}>
          <FormattedMessage id="scramble.actions.scramble" />
        </Button>

        <Tooltip arrow title={tooltipText}>
          <span>
            <Button
              variant="contained"
              size="large"
              disabled={!scramble || !Boolean(robotServer)}
              onClick={handleSendClick}
              className="flex flex-grow"
            >
              <FormattedMessage id="scramble.actions.send" />
            </Button>
          </span>
        </Tooltip>
      </ButtonRow>
    </ContentContainer>
  );
};
