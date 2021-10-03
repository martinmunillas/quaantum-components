import { filterUndefined } from './filterUndefined';

describe('filterUndefined()', () => {
  it('should filter the undefined value', () => {
    expect(filterUndefined({ a: 'asdf', b: undefined })).toMatchObject({ a: 'asdf' });
  });
  it('should not filter if there are no undefined', () => {
    const test = { a: 'asdf', b: 3, c: /dsfa/ };
    expect(filterUndefined(test)).toMatchObject(test);
  });
  it('should return an emty object if all are undefined', () => {
    const test = { a: undefined, b: undefined, c: undefined };
    expect(filterUndefined(test)).toMatchObject({});
  });
  it('should filter all undefined', () => {
    const test = { a: undefined, b: undefined, c: 'asdf' };
    expect(filterUndefined(test)).toMatchObject({ c: 'asdf' });
  });
});
