import { play, resetCurrentBeat } from "./audio";

let tempoSlider: HTMLInputElement;
let tempo: number = 120;
let tempoNoteSelect: HTMLSelectElement;
let tempoNote: number = 0.25;
let timeSigSelect: HTMLSelectElement;
const timeSig: number[] = [4, 4];
let playPauseButton: HTMLButtonElement;
let playing = false;

export function setupTempoSlider() {
  tempoSlider = document.querySelector<HTMLInputElement>("#tempo")!;
  tempoSlider.addEventListener("input", () => {
    tempo = parseInt(tempoSlider.value);
    document.querySelector("#tempo-num")!.textContent = `= ${tempo}`;
  });

  const tempoMinus = document.querySelector<HTMLButtonElement>("#tempo-minus")!;
  tempoMinus.addEventListener("click", () => {
    tempo--;
    document.querySelector("#tempo-num")!.textContent = `= ${tempo}`;
    tempoSlider.value = tempo.toString();
  });

  const tempoPlus = document.querySelector<HTMLButtonElement>("#tempo-plus")!;
  tempoPlus.addEventListener("click", () => {
    tempo++;
    document.querySelector("#tempo-num")!.textContent = `= ${tempo}`;
    tempoSlider.value = tempo.toString();
  });
}

export function getTempo(): number {
  if (tempoSlider == null) {
    console.error("Tempo slider has not been set up yet, tempo value may not be accurate");
  }

  return tempo;
}

export function setupTempoNoteSelect() {
  tempoNoteSelect = document.querySelector<HTMLSelectElement>("#tempo-note")!;
  tempoNoteSelect.addEventListener("change", () => {
    switch (tempoNoteSelect.value) {
      case "eighth":
        tempoNote = 0.125;
        break;
      case "quarter":
        tempoNote = 0.25;
        break;
      case "dotted-quarter":
        tempoNote = 0.375;
        break;
      case "half":
        tempoNote = 0.5;
        break;
      default:
        console.error("Unknown tempo note value");
    }
  });
}

export function getTempoNote(): number {
  if (tempoNoteSelect == null) {
    console.error("Tempo note select has not been set up yet, tempo note value may not be accurate");
  }

  return tempoNote;
}

export function setupTimeSigSelect() {
  timeSigSelect = document.querySelector<HTMLSelectElement>("#time-sigs")!;
  timeSigSelect.addEventListener("change", () => {
    const timeVal = timeSigSelect.value;
    timeSig[0] = parseInt(timeVal.split("/")[0]);
    timeSig[1] = parseInt(timeVal.split("/")[1]);
    resetCurrentBeat();
  });
}

export function getTimeSig(): number[] {
  if (timeSigSelect == null) {
    console.error("Time signature select has not been set up yet, time sig value may not be accurate");
  }

  return timeSig;
}

export function setupPlayPauseButton() {
  playPauseButton = document.querySelector<HTMLButtonElement>("#play-pause")!;
  playPauseButton.addEventListener("click", () => {
    if (!playing) {
      playing = true;
      playPauseButton.textContent = "Pause";
      play();
    } else {
      playing = false;
      playPauseButton.textContent = "Play";
      resetCurrentBeat();
    }
    playPauseButton.ariaChecked = playing.toString();
  });
}

export function isPlaying(): boolean {
  if (playPauseButton == null) {
    console.error("Play/pause button has not been set up yet, playing value may not be accurate");
  }

  return playing;
}
