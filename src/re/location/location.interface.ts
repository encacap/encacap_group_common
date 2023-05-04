export interface ILocationProvince {
  code: string;
  name: string;
  ghnRefId: number;
}

export interface ILocationDistrict {
  code: string;
  name: string;
  provinceCode: string;
  ghnRefId: number;
  province: ILocationProvince;
}

export interface ILocationWard {
  code: string;
  name: string;
  districtCode: string;
  ghnRefId: number;
  district: ILocationDistrict;
}
