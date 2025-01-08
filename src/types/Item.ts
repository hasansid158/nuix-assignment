export interface Item {
  guid: string;
  name: string;
  path: string[];
  properties: {
    [key: string]: string | number;
  };
}