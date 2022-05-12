import React from "react";
import useSound from "use-sound";

function Key({ note, color }) {
  let soundUrl = `/sound/key${note}.mp3`;
  const [play] = useSound(soundUrl, { volume: 0.25 });
  return (
    <button
      onMouseDown={() => play()}
      onTap={() => play()}
      className={color}
    ></button>
  );
}

export default Key;
