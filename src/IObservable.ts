import {IObserver} from "./IObserver";

export interface IObservable {
    addObserver(observer: IObserver): void;
    notifyObservers(): void;
}
