import { IsString, IsNotEmpty} from 'class-validator';

export class ResetPasswordDto {
  @IsString()
  readonly token: string;

  @IsString()
  @IsNotEmpty()
  readonly newPassword: string;
}

export class ForgotPasswordDto {
  @IsString()
  @IsNotEmpty()
  readonly email: string;
}