import { DynamicObject } from "../commonUtils/commonTypes";

export interface GET_PROPS_TYPE {
  url: string | URL;
  header?: DynamicObject;
}

export interface POST_PROPS_TYPE {
  url: string | URL;
  header?: DynamicObject;
  obj?: DynamicObject;
}

export interface PUT_PROPS_TYPE {
  url: string | URL;
  header?: DynamicObject;
  obj?: DynamicObject;
}
