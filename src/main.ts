import "./style.css";
import { setupTempoSlider, setupTempoNoteSelect, setupPlayPauseButton, setupTimeSigSelect } from "./input";
import { setupAudioContext } from "./audio";

setupAudioContext();

setupTempoSlider();
setupTempoNoteSelect();
setupTimeSigSelect();
setupPlayPauseButton();
