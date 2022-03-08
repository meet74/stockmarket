


const height = window.innerHeight;
const width = window.innerWidth;
const PixelRatio = window.devicePixelRatio;


/* Based on iPhone X scaling */
const widthScale = width / 375;
const hightScale = height / 812;

/* For width pixel */
const widthPixel = size => normalize(size);

/* For height pixel */
const heightPixel = size => normalize(size, 'height');

/* For font pixel */
const fontPixel = size => widthPixel(size);

//for margin and Padding verticle  pixel
const spV = size => {
  return heightPixel(size);
};

//alert(PixelRatio.get()+'=>>>'+SCREEN_HEIGHT+' width=>>>'+SCREEN_WIDTH +'====>'+RFValue(13)+','+ widthPixel(13))
//for margin and Padding horizontal  pixel
const spH = size => {
  return widthPixel(size);
};

//for margin and Padding horizontal  pixel
const mpAll = size => {
  return {
    marginLeft: spH(size),
    marginRight: spH(size),
    marginTop: spV(size),
    marginBottom: spV(size),
  };
};

/* Normalization Function */
const normalize = (size) => {
 
  //return Math.round(PixelRatio.roundToNearestPixel(newSize));
  return (
    Math.round(size*PixelRatio)
  );
};

export {
  width,
  height,
  normalize,
  widthPixel,
  heightPixel,
  fontPixel,
  spH,
  spV,
  mpAll,
};
