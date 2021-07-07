export class PatientHelper{

  numberOnly(event): boolean {
    let patt = /^([0-9])$/;
    let result = patt.test(event.key);
    return result;
  }

  createDatesOfBirth() : any{
    let totalDatesOfBirth=[];
    totalDatesOfBirth[0]=''
    let index: number = 1;
    let i: number;
    for (i = 1; i <= 31 ; i++) {
      totalDatesOfBirth[index] = i;
      index++;
    }
    return totalDatesOfBirth;
  }

  createMonthOfBirth() : any {
    let totalMonthOfBirth = [] ;
    totalMonthOfBirth[0]='';
    let index: number = 1;
    let i: number;
    for (i = 1; i <= 12 ; i++) {
      totalMonthOfBirth[index] = i;
      index++;
    }
    return totalMonthOfBirth;
  }

  creatYearOfBirthArray() :any {
    let totalDatesOfYear = [] ;
    const currentYear = new Date().getFullYear();
    totalDatesOfYear[0]='';
    let index: number = 1;
    let i: number;
    // i=  currentYear;
    for (i = currentYear; i > currentYear - 120; i--) {
      totalDatesOfYear[index] = i;
      index++;
    }
    return totalDatesOfYear;
  }

}
