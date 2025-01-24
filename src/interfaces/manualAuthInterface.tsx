// Change the export to named export
export interface BaseAuth {
  email: string;
  password: string;
}

export interface ManualAuth extends BaseAuth {
  name: string;
  address: string;
  phoneNumber: string;
}

export interface ManualLoginAuth extends BaseAuth {
  
}
