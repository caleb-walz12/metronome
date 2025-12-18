import "./style.css";
import offIcon from "./assets/metronome-off.svg";
import onIcon from "./assets/metronome-on.svg";
import { setupTempoSlider, setupTempoNoteSelect, setupPlayPauseButton, setupTimeSigSelect } from "./input";
import { setupAudioContext } from "./audio";

setOffIcon();

setupAudioContext();

setupTempoSlider();
setupTempoNoteSelect();
setupTimeSigSelect();
setupPlayPauseButton();

export function setOffIcon() {
  document.querySelector('link[rel="icon"')!.setAttribute("href", offIcon);
}

export function setOnIcon() {
  document.querySelector('link[rel="icon"')!.setAttribute("href", onIcon);
}
