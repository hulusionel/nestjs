import { IsOptional, Min } from 'class-validator';
import { Transform } from 'class-transformer';

export class GetParamsDto {
  @Min(0)
  @Transform((x) => +x)
  limit: number;

  @Min(0)
  @Transform((x) => +x)
  offset: number;

  @IsOptional()
  fields?: string;
}
