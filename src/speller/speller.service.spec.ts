import { Test, TestingModule } from '@nestjs/testing';
import exp from 'constants';
import { SpellerService } from './speller.service';

describe('SpellerService', () => {
      let service: SpellerService;

      beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
          providers: [SpellerService],
        }).compile();

        service = module.get < SpellerService > (SpellerService);
      });

      it('check speller service', (done) => {
        service.check$('тест').subscribe(b => {
          console.log(b);
          expect(b).toBe('тест')
          done()
        })
      });

      it('check speller service fix word', (done) => {
        service.check$('питиция').subscribe(b => {
          console.log(b);
          expect(b).toBe('петиция')
          done()
        })
      });

      it('check speller service fix 2 options', (done) => {
        service.check$('туст').subscribe(b => {
          console.log(b);
          expect(b).toMatch(/т[е|о]ст/)
          done()
        })
      });
    });