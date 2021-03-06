import stylish from '@dmamills/stylish';

stylish.raw(`
 .app-container { flex-direction: row; }
  body { background-color: rgb(107,127,149); height: 99vh; font-family: monospace; }
  #root { display: flex; flex-flow: column; height: 100%; }
  label { width: 75px; }
  .dz-preview.dz-file-preview {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    margin: 0.25rem;
    border: 1px solid black;
    border-radius: 0.5rem;
    align-items: center;
  }
  .react-datepicker-wrapper { display: flex; flex: 1; cursor: pointer; }
  .react-datepicker__input-container { display: flex !important; flex: 1 !important; }
  @media screen and (max-width: 800px){
    .app-container {
      flex-direction: column;
    }
  }
`);

export const [ containerBox, textAreaHeight] = stylish({
    display: 'flex',
    flexFlow: 'column',
    height: '100%'
}, { height: '6rem' });

export const [ table, tableHeader, tableBody ] = stylish({
    borderCollapse: 'collapse',
}, {
    backgroundColor: 'black',
    color: 'white',
    padding: '1rem',
    ' > th': {
        padding: '1rem',
        textAlign: 'left',
    },
}, {
    color: 'black',
    ':nth-child(odd)': {
        backgroundColor: 'lightgrey'
    },
    ':nth-child(even)': {
        backgroundColor: '#eee'
    },
    ' > td': {
        padding: '1rem'
    }
});

export const link = stylish({
    color: '#FFF',
    ':hover': { color: '#C8C8C8' }
});

export const [
    width100,
    width50,
] = stylish(
    { width: '100%' },
    { width: '50%' },
);

export const [
  flex,
  alignItemsStart,
  alignItemsCenter,
  alignItemsEnd,
  flexCenter,
  column,
  spacedEvenly,
  spaceBetween,
  justifyStart,
  justifyEnd,
  flexGrow,
  flex1,
  flex2,
  flexAuto,
  alignSelfCenter,
] = stylish(
  { display: 'flex' },
  { alignItems: 'flex-start' },
  { alignItems: 'center' },
  { alignItems: 'flex-end' },
  { alignItems: 'center', justifyContent: 'center' },
  { flexDirection: 'column' },
  { justifyContent: 'space-evenly' },
  { justifyContent: 'space-between' },
  { justifyContent: 'flex-start' },
  { justifyContent: 'flex-end' },
  { flexGrow: '1' },
  { flex: '1' },
  { flex: '2' },
  { flex: '1 1 auto'},
  { alignSelf: 'center' },
);

export const [
  whiteText,
  blackText,
  redText,
  lightGreyText,
  textCenter,
  listStyleNone,
  heavyText,
  textDecorationNone,
  debugBox,
 ] = stylish(
  { color: 'white' },
  { color: 'black' },
  { color: '#cc0000' },
  { color: '#C8C8C8' },
  { textAlign: 'center' },
  { listStyleType: 'none' },
  { fontWeight: '800' },
  { textDecoration: 'none' },
  { border: '1px solid black' },
);

export const [
  p0,
  p05,
  p1,
  p2
] = stylish(
  { padding: '0' },
  { padding: '0.5rem' },
  { padding: '1rem' },
  { padding: '2rem' },
);

export const [
  ph0,
  ph05,
  ph1,
  ph2
] = stylish(
  { padding: '0 0' },
  { padding: '0 0.5rem' },
  { padding: '0 1rem' },
  { padding: '0 2rem' },
);

export const [
  pv0,
  pv05,
  pv1,
  pv2
] = stylish(
  { padding: '0 0' },
  { padding: '0.5rem 0' },
  { padding: '1rem 0' },
  { padding: '2rem 0' },
);

export const [
  pl0,
  pl05,
  pl1,
  pl2
] = stylish(
  { paddingLeft: '0' },
  { paddingLeft: '0.5rem' },
  { paddingLeft: '1rem' },
  { paddingLeft: '2rem' },
);

export const [
  mr0,
  mr05,
  mr1,
  mr2
] = stylish(
  { marginRight: '0' },
  { marginRight: '0.5rem' },
  { marginRight: '1rem' },
  { marginRight: '2rem' },
);

export const [
  ml0,
  ml05,
  ml1,
  ml2
] = stylish(
  { marginLeft: '0' },
  { marginLeft: '0.5rem' },
  { marginLeft: '1rem' },
  { marginLeft: '2rem' },
);

export const [
  m0,
  m05,
  m1,
  m2
] = stylish(
  { margin: '0' },
  { margin: '0.5rem' },
  { margin: '1rem' },
  { margin: '2rem' },
);

export const [ mainTheme, mainTheme08, mainThemeBg, mainTheme08Bg, whiteBg ] = stylish(
  { backgroundColor: 'rgb(107,127,149)' },
  { backgroundColor: 'rgba(107,127,149, 0.8)' },
  { backgroundColor: 'rgb(107,127,149)' },
  { backgroundColor: 'rgba(107,127,149, 0.8)' },
  { backgroundColor: 'rgba(255, 255, 255, 1)' },
);
