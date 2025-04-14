import {
  ArgumentMetadata,
  HttpException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ValidateUserPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const { name, age } = value;

    const ageNumber = parseInt(age.toString(), 10);

    if (isNaN(ageNumber)) {
      throw new HttpException('Age must be a number', 400);
    }

    // console.log(typeof ageNumber)

    return {...value, age: ageNumber};
  }
}
