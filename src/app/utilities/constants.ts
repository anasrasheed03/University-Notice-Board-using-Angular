import { PageState, EmploymentType } from './interfaces';
import { DropdownItem } from '../shared-models/dropdownItem';

export class CONSTANTS {

  constructor() { }

  static PRODUCT_CODES = {
    CAR_IJARA: 1001,
    BIKE_IJARA: 1002,
    SOME_IJARA: 1003
  }

  static PAGE_STATE: PageState = {
    Add: 1,
    Edit: 2,
    Read: 3
  };


  static DROPDOWN_YES_NO: DropdownItem[] = [
    {
      codeId: 1,
      codeValue: "Yes"
    },
    {
      codeId: 0,
      codeValue: "No"
    }
  ]

  static DROPDOWN_FILTER: DropdownItem[] = [
    {
      codeId: 1,
      codeValue: "Begins With"
    },
    {
      codeId: 2,
      codeValue: "Contains"
    },
    {
      codeId: 3,
      codeValue: "Exact Match"
    }
  ]

  static ERROR_MSGS = {
    RETRY: "An error occurred, please try again."
  }

  static HTTP_RESPONSE = {
    OK: 200
  }

  static EMPLOYMENT_TYPE: EmploymentType = {
    CURRENT: 118001,
    PREVIOUS: 118002,
    OTHER_INCOME_SOURCE: 118003,
    APPLICATION_HAS_COBORROWER: 118004
  }

  static DROPDOWNS = {
    APPLICATION_TYPE: 100,
    PRODUCT: 101,
    EDUCATIONAL_QUALIFICATION: 102,
    MARITAL_STATUS: 103,
    RESIDENCE_TYPE: 104,
    RESIDENTIAL_STATUS: 105,
    ACCOMMODATION_TYPE: 106,
    GAUGE_OF_ELEVATION: 107,
    AREA_SIZE_OF_ACCOMMODATION: 108,
    MANUFACTURER_NAME: 109,
    VEHICLE_TYPE: 110,
    VEHICLE_NAME: 111,
    MODEL_YEAR: 112,
    SECURITY_DEPOSIT_PERCENTAGE: 113,
    RV_PERCENTAGE: 114,
    TENURE_YEARS: 115,
    DELIVERY_TYPE: 116,
    BOOKING_PERIOD_IN_MONTHS: 117,
    EMPLOYMENT_TYPE: 118,
    EMPLOYMENT_CATEGORY: 119,
    EMPLOYMENT_STATUS: 120,
    LEGAL_ENTITY: 121,
    NATURE_OF_BUSINESS: 122,
    STATUS_OF_PREMISES: 123,
    CHANNEL: 124,
    PAYMENT_TYPE: 125,
    CONTACT_TYPE: 126,
    GENDER: 127,
    APPLICATION_STATUS: 128,
    PRICING_TYPE: 129,
    IS_INVENTORY_VEHICLE: 130,
    REGISTRATION_CHARGES_PAYMENT_MODE: 131,
    TAKAFUL_TYPE: 132,
    CALCULATOR_TYPE: 133,
    RESIDUAL_VALUE_IMPACT: 134,
    TAKAFUL_COMPANY_NAME: 135,
    INCOME_ASSESSED_FROM: 136,
    AFFILIATED_IN_PEP_CATEGORY: 137,
    CATEGORY_TYPE: 138,
    ACTIVE_MEMBER: 139,
    IS_CUSTOMER_FOUND_IN_ANY_GOVT: 140,
    RESIDENCE_VERIFICATION: 141,
    CUSTOMER_TYPE: 142,
    MBL_ACCOUNT_HOLDER: 143,
    BANK_NAME: 144,
    JOINT_ACCOUNT: 145,
    REMARKS: 146,
    DEPOSIT_SLIP_TYPE: 147,
    VERIFICATION_COMPANY_NAME: 148,
    VERIFICATION_REQUIRE: 149,
    EVALUATOR_NAME: 150,
    CPLC_STATUS: 151,
    ECIB_PRODUCT: 152,
    DASHBOARD_STATUS: 153,
    RELATIONSHIP_WITH_APPLICANT: 154,
    APPLICANT_HAVING_DRIVING_LICENSE: 155,
    CUSTOMER_TAX_STATUS: 156,
    ECIB_PRODUCT_CATEGORY: 157

  }

}
