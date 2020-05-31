import { Injectable } from '@angular/core';
import {PatientData} from '../model/PatientData';

@Injectable({
  providedIn: 'root'
})
export class SearchDataServiceService {

  _searchData: PatientData;
  text: string;

  constructor() {
    this._searchData = new PatientData();
  }


  getSearchData(): PatientData {
    return this._searchData;
  }

  setSearchData(value: PatientData) {
    this._searchData = value;
  }
}
