import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PerroCalienteModule } from './perro-caliente/perro-caliente.module';
import { VentasModule } from './ventas/ventas.module';
import { LoginController } from './login/login.controller';
import { DashboardController } from './dashboard/dashboard.controller';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    MongooseModule.forRoot('mongodb://localhost/elcatire'),
    PerroCalienteModule,
    VentasModule,
  ],
  controllers: [AppController, LoginController, DashboardController],
  providers: [AppService],
})
export class AppModule {}
