import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Put,
  Param,
  Delete,
  Query,
  ValidationPipe,
  UsePipes,
  Res,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';

import { FileInterceptor } from '@nestjs/platform-express';
import { MulterError, diskStorage } from 'multer';
import { ModeratorService } from './moderator.service';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { ModeratorUserDto } from './dto/moderator-user.dto';


@Controller('moderator')
export class ModeratorController {
  constructor(private readonly moderatorService: ModeratorService) {}

 
 @Post('register')
@UsePipes(new ValidationPipe())
register(@Body() moderatorUserDto: ModeratorUserDto) {
  return this.moderatorService.register(moderatorUserDto);
}

@Get('register')
findAllUsers() {
  return this.moderatorService.findAllUsers();
}

 
 @Post('upload-pdf')
 @UseInterceptors(
  FileInterceptor('file', {
    fileFilter: (req, file, cb) => {
      if (file.originalname.match(/^.*\.(pdf)$/)) {
        cb(null, true);
      } else {
        cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'pdf'), false);
      }
    },
    limits: {
      fileSize: 2 * 1024 * 1024, 
    },
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
      },
    }),
  }),
)
uploadPdf(@UploadedFile() file: Express.Multer.File) {
  console.log(file);

  return {
    message: 'PDF uploaded successfully',
    filename: file.filename,
  };
}

@Get('getimage/:name')
getImages(@Param('name') name: string, @Res() res) {
  res.sendFile(name, { root: './uploads' });
}


 

  @Post('reports')
  create(@Body() createReportDto: CreateReportDto) {
    return this.moderatorService.create(createReportDto);
  }

  @Get('reports')
  findAll(@Query('status') status?: string) {
    return this.moderatorService.findAll(status);
  }

  @Get('reports/:id')
  findOne(@Param('id') id: string) {
    return this.moderatorService.findOne(+id);
  }

  @Patch('reports/:id')
  update(@Param('id') id: string, @Body() updateReportDto: UpdateReportDto) {
    return this.moderatorService.update(+id, updateReportDto);
  }

  @Put('reports/:id')
  replace(@Param('id') id: string, @Body() createReportDto: CreateReportDto) {
    return this.moderatorService.replace(+id, createReportDto);
  }

  @Delete('reports/:id')
  remove(@Param('id') id: string) {
    return this.moderatorService.remove(+id);
  }

  @Post('posts/:id/approve')
  approve(@Param('id') id: string) {
    return this.moderatorService.approve(+id);
  }

  @Post('posts/:id/reject')
  reject(@Param('id') id: string, @Body('reason') reason: string) {
    return this.moderatorService.reject(+id, reason);
  }

  @Post('complaints/:id/resolve')
  resolve(@Param('id') id: string) {
    return this.moderatorService.resolve(+id);
  }
}