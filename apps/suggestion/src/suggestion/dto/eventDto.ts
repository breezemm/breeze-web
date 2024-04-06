import { IsNotEmpty, IsString } from 'class-validator';

export class Interest {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  content: string;
}

export class EventDto {
  @IsNotEmpty({ each: true })
  events: Interest[];

  @IsNotEmpty({ each: true })
  interests: Interest[];
}
