import { 
  Controller,
  Get,
  Render,
  Body
 } 
 from '@nestjs/common';

@Controller('dashboard')
export class DashboardController {
   @Get()
   @Render('Dashboard')
   root(){
     return{ message: 'Dashboard'}
   }
}
