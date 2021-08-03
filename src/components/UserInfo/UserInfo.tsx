import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import UAParser from "ua-parser-js";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";

export const UserInfo = () => {
  const [designMode, setDesignMode] = useState<string>("off");
  const history = useHistory();

  return (
    <Container className="text-light py-4">
      <p>{JSON.stringify(UAParser(navigator.userAgent))}</p>
      <p>{JSON.stringify(history)}</p>
      <p>{JSON.stringify(localStorage)}</p>
      <p>{document.referrer}</p>
      {designMode === "off" && (
        <Button
          onClick={() => {
            setDesignMode("on");
            document.designMode = "on";
          }}
        >
          Edit page
        </Button>
      )}
      {designMode === "on" && (
        <Button
          variant="secondary"
          onClick={() => {
            setDesignMode("off");
            document.designMode = "off";
          }}
        >
          Stop editing
        </Button>
      )}
    </Container>
  );
};
