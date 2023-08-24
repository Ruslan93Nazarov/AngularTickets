import {Injectable} from '@angular/core';
import {ITour} from "../../models/tours";

@Injectable({
    providedIn: 'root'
})
export class TicketsStorageService {

    private ticketsStorage: ITour[] = []


    setStorage(data: ITour): void {
        console.log(data)
        this.ticketsStorage.push(data)
    }

    getStorage(): ITour[] {
        console.log(this.ticketsStorage)
        return this.ticketsStorage
    }
}
