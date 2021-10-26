
export type grid = number[][];

export type checks = {
  clicked: boolean;
  disableButton: (val: grid) => void;
};