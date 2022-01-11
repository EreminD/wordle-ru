import { Injectable } from '@nestjs/common';
import { Observable, of, Subject } from 'rxjs';
import { checkText } from 'yandex-speller'

@Injectable()
export class SpellerService {
    
    check$(word: string): Observable<string>{
        const sub: Subject<string> = new Subject<string>() ;
        const defaultVal = word;
    
        function clbck(err, body) {
            if (err) {
                console.error(err)
                sub.error(err)
                sub.complete()
            } else {
                parseBody(body, sub, )
            }
        }

        function parseBody(body: Array<any>, sub: Subject<string>){
            console.log(body)
            if (body.length){
                sub.next(body[0].s[0])
            } else {
                sub.next(defaultVal)
            }
            sub.complete();
        }

        checkText(word, clbck, {lang: "ru"})
        return sub;
    }

   
}
