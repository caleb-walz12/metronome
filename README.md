# Metronome

This is a simple metronome app written in Typescript and bundled with Vite. It uses the Web Audio API for consistently timed playback, even at high tempos. It allows for selection of:

- Tempo (min 30, max 300)
- Tempo marker (eighth note, quarter note, dotted quarter note, half note)
- Time signature (1/4, 2/4, 3/4, 4/4, 5/4, 5/8, 6/8, 7/8, 9/8, 12/8, 2/2)

## Using the app

The app is live at [caleb-walz12.github.io/metronome](https://caleb-walz12.github.io/metronome).

If you want to build the app from source, download or clone this repository and run:

```bash
npm install
npm run dev
```

## Design

I noticed that most online metronomes have you simply provide a number of beats and a BPM value, rather than a full tempo marking input. This is certainly functional, but it sometimes becomes more difficult to use when in time signatures such as 6/8 or 2/2. Pieces that use these time signatures usually provide a tempo marking such as ♩. = 120 or &#x1D15E; = 120 instead of a more common ♩ = 120 for time signatures like 4/4. In these cases, I have to do the math to convert the tempo marking into the BPM I need.

This app does that for you! Simply enter your desired tempo marking and time signature, and practice away!

## Future features

The app is functional, but fairly barebones at the moment. Planned features include:

- Visual display of metronome
- Custom time signature input
- Customize which beats are accented
- Play subdivisions (8th notes, 16th notes, triplets, etc.)
- Customize metronome click sound
