import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './_guards/auth/auth.module';
import { UsersModule } from './_guards/users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://andre:635241@agendamentocovid19.edb2x.mongodb.net/?retryWrites=true&w=majority'),
    AuthModule,UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
