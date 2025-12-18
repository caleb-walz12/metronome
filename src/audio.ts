import { getTempo, getTempoNote, getTimeSig, isPlaying } from "./input";

let audioContext: AudioContext;

const CLICK_DURATION = 0.05;
const ACCENT_FREQS = [220, 329.628, 440];

const SCHEDULE_INTERVAL = 25; // ms
const LOOKAHEAD = 0.1; // sec
let nextClickTime: number;
let currentBeat = 1;

export function setupAudioContext() {
  audioContext = new AudioContext();
}

export function play() {
  if (audioContext.state === "suspended") {
    audioContext
      .resume()
      .then(() => {
        nextClickTime = audioContext.currentTime;
        scheduler();
      })
      .catch(() => console.error("Audio context could not be resumed"));
  } else {
    nextClickTime = audioContext.currentTime;
    scheduler();
  }
}

export function resetCurrentBeat() {
  currentBeat = 1;
}

function scheduleClick(time: number, duration: number, frequency: number) {
  const clickNode = new OscillatorNode(audioContext, {
    type: "triangle",
    frequency: frequency,
  });

  const limiterNode = new DynamicsCompressorNode(audioContext, {
    threshold: -1,
    knee: 0,
    ratio: 20,
    attack: 0,
    release: 0.015,
  });

  const gainNode = new GainNode(audioContext, {
    gain: 0.7,
  });

  gainNode.gain.setTargetAtTime(0.01, time + duration - 0.005, 0.005);

  clickNode.connect(limiterNode).connect(gainNode).connect(audioContext.destination);
  clickNode.start(time);
  clickNode.stop(time + duration);
}

function scheduler() {
  if (!isPlaying()) return;

  while (nextClickTime < audioContext.currentTime + LOOKAHEAD) {
    const clickFreq = currentBeat === 1 ? ACCENT_FREQS[2] : ACCENT_FREQS[0];
    scheduleClick(nextClickTime, CLICK_DURATION, clickFreq);

    if (currentBeat === getTimeSig()[0]) {
      currentBeat = 1;
    } else {
      currentBeat++;
    }

    nextClickTime += 60 / (getTempo() * getTimeSig()[1] * getTempoNote());
  }

  setTimeout(scheduler, SCHEDULE_INTERVAL);
}
