# Timer in typescript

Timer for typescript application

## Usage

Create object of timer:

`
const timer = new Timer();
`

Set timer time (in seconds) and laps (default one lap):

`
timer.setTime(10);
timer.setLaps(5);
`

Start timer:

`
timer.start();
`

Stop timer:

`
timer.stop();
`

Reset timer:

`
timer.reset();
`

Restart timer:

`
timer.restart();
`

Pause timer:

`
timer.pause();
`

Get time object (return laps, remaining laps, time, remaining time):

`
timer.getTime();
`

Add listeners (objects with IObserver interface implemented, will be notified after every second):

`
timer.addObserver(IObserver observer);
`



