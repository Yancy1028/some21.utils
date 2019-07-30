import { ISome21 } from "../@types/index";
const a = () => {
  return 123;
};
const b = (a, b) => {
  return a + b;
};

const Some21: ISome21 = {
  a,
  b
};

//const Some21: ISome21 = {};

export default Some21;
