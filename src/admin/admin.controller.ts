import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, Post } from '@nestjs/common';
import { of } from 'rxjs';
import { Word } from 'src/model/word';
import { WordService } from 'src/word/word.service';

@Controller('admin')
export class AdminController {
    constructor(private readonly wordService: WordService) {}


    @Post('word')
    @HttpCode(201)
    async setWord(@Body() req: Word) {
        console.log(req)
        try {
            this.wordService.setWord(req.word)
            return of(req);
        } catch (err){
            throw new HttpException(err.message, HttpStatus.BAD_REQUEST)
        }
    }

    @Get('word')
    getWord(): Word{
        return {word: this.wordService.getWord()}
    }
}
