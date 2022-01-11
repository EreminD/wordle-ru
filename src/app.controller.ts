import { Controller, Get, Post } from '@nestjs/common';
import { LetterPosition } from './model/letter-position.enum';
import { Result } from './model/result'

@Controller('wordle')
export class AppController {

  @Post('guess')
  guessWord(): Array<Result>{
    const res : Array<Result> = [
      {letter: 'a', position: LetterPosition.NONE},
      {letter: 'b', position: LetterPosition.EXIST},
      {letter: 'c', position: LetterPosition.SPOT},
    ]
    return res
  }
}
