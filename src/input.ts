let bpmSlider: HTMLInputElement;
let bpm: number = 120;
let timeSigSelect: HTMLSelectElement;
const timeSig: number[] = [4, 4];
let playPauseButton: HTMLButtonElement;
let playing = false;

export function setupBpmSlider() {
  bpmSlider = document.querySelector<HTMLInputElement>("#bpm")!;
  bpmSlider.addEventListener("input", () => {
    bpm = parseInt(bpmSlider.value);
    document.querySelector("#bpm-num")!.textContent = bpmSlider.value;
  });
}

export function getBpm(): number {
  if (bpmSlider == null) {
    console.error("Bpm slider has not been set up yet, bpm value may not be accurate");
  }

  return bpm;
}

export function setupTimesSelect() {
  timeSigSelect = document.querySelector<HTMLSelectElement>("#time-sigs")!;
  timeSigSelect.addEventListener("change", () => {
    const timeVal = timeSigSelect.value;
    timeSig[0] = parseInt(timeVal.split("/")[0]);
    timeSig[1] = parseInt(timeVal.split("/")[1]);
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
    } else {
      playing = false;
      playPauseButton.textContent = "Play";
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
