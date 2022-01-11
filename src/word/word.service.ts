import { Injectable } from '@nestjs/common';

@Injectable()
export class WordService {
    private THE_WORD: string;

    setWord(word: string): void{
      if (!word) {
        throw new Error("Empty string");
      }

      if (word.length !== 5) {
        throw new Error("Word length must be 5");
      } 
      console.log(`Setting word: ${word}`)
      this.THE_WORD = word;
    }
  
    getWord(): string {
      return this.THE_WORD
    }
}
