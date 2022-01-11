import { Test, TestingModule } from '@nestjs/testing';
import { SpellerService } from '../speller/speller.service';
import { WordService } from './word.service';

describe('WordServiceService', () => {
  let service: WordService;

  beforeEach(async () => {
    service = new WordService(new SpellerService());
  });

  it('check if word is empty', () => {
    expect(() => service.setWord('')).toThrowError(new Error('Empty string'));
  });

  it('check if 4 letters', () => {
    expect(() => service.setWord('тест')).toThrowError(new Error('Word length must be 5'));
  });

  it('check if 6 letters', () => {
    expect(() => service.setWord('вопрос')).toThrowError(new Error('Word length must be 5'));
  });

  it('postive',  (done) => {
    let word = 'кумир'
    service.setWord(word)

    service.getWord().subscribe(
      nxt => {
        expect(nxt).toBe(word)
        done()
      }
    )
  })
});
