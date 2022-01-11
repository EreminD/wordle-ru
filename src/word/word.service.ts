import { Injectable } from '@nestjs/common';
import { Observable, Subject } from 'rxjs';
import { SpellerService } from '../speller/speller.service';

@Injectable()
export class WordService {

  private theWord: Subject<string> = new Subject()
  constructor(private readonly speller: SpellerService) {}


  setWord(word: string): void {
    if (!word) {
      throw new Error("Empty string");
    }

    if (word.length !== 5) {
      throw new Error("Word length must be 5");
    }

    this.speller.check$(word).subscribe({
      next: (v) => {
        console.log(`Setting word: ${v}`)
        this.theWord.next(v)
      },
      error: (e) => console.error(e),
      complete: () => console.log("completed")
    })

  }

  getWord(): Observable<string> {
    return this.theWord.asObservable();
  }
}