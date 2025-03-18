import React from "react";
import { Card } from "../Card";
import { Button } from "../controls/Button";

const MainMenu = (props) => {
  const { onGameStarted } = props;

  return (
    <Card>
      <div className="w-96 text-center">
        <div className="flex flex-col text-xl">
          <h1>Unustamatu parooli genereerimise mäng</h1>
        </div>
        <div className="flex flex-col text-base">Mäng aitab sul luua turvalise ja meeldejääva parooli, mida saad igaks juhtumiks kasutada.</div>
        <div className="flex flex-col items-center justify-center gap-5 text-xl pt-3">
          <Button text={"Alusta!"} onClick={onGameStarted} />
        </div>
      </div>
    </Card>
  );
};

export default MainMenu;
