export interface PageState {
  Add,
  Edit,
  Read
}


export interface EmploymentType{
  CURRENT,
  PREVIOUS,
  OTHER_INCOME_SOURCE,
  APPLICATION_HAS_COBORROWER
}

export interface MeezanResponse {
  statusCode: string,
  statusDescription: string,
  data: any
}