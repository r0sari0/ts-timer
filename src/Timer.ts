import {IObservable} from "./IObservable";
import {IObserver} from "./IObserver";

export class Timer implements IObservable {
    private remainingTime: number = 0;
    private time: number = 0;
    private laps: number = Number.POSITIVE_INFINITY;
    private remainingLaps: number = Number.POSITIVE_INFINITY;
    private timer: any;
    private observers: IObserver[] = [];
    private stopFlag: boolean = false;

    public reset() {
        this.clearTime();
        this.remainingTime = 0;
    }

    public pause() {
        this.clearTime();
    }

    public stop() {
        this.clearTime();
        this.stopFlag = true;
    }

    public start() {
        if (this.stopFlag) {
            this.remainingTime = 0;
            this.stopFlag = false;
        }
        this.timer = setInterval(() => this.countdown(), 1000);
    }

    public restart() {
        this.clearTime();
        this.remainingTime = this.time;
        this.remainingLaps = this.laps;
        this.start();
    }

    public setTime(time: number) {
        this.remainingTime = time;
        this.time = time;
    }

    public setLaps(laps: number) {
        this.laps = laps;
        this.remainingLaps = this.laps;
    }

    public addObserver(observer: IObserver): void {
        this.observers.push(observer);
    }

    public getTime() {
        return {
            laps: this.laps,
            remaingLaps: this.remainingLaps,
            remainingTime: this.remainingTime,
            time: this.time,
        };
    }

    public notifyObservers(): void {
        this.observers.forEach((element) =>
            element.do(this.getTime()),
        );
    }

    private countdown() {
        if (this.remainingTime >= 1) {
            this.remainingTime--;
        } else {
            this.remainingTime = 0;
            this.remainingLaps--;
            this.reset();
            if (this.remainingLaps) {
                this.remainingTime = this.time;
                this.start();
            }
        }
        this.notifyObservers();
    }

    private clearTime() {
        clearInterval(this.timer);
        this.timer = 0;
    }
}
