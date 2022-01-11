import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AdminController } from './admin/admin.controller';
import { WordService } from './word/word.service';

@Module({
  imports: [],
  controllers: [AppController, AdminController],
  providers: [WordService],
})
export class AppModule {}
