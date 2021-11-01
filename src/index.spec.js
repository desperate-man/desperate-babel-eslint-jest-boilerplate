import { sut } from './index';

describe('sut', () => {
  it('returns expected result', async () => {
    jest.spyOn(global.Date, 'now').mockImplementationOnce(() => new Date('1970-01-01T00:00:01.000Z'));

    const result = await sut();

    expect(result).toEqual({
      prop: 'test',
      time: '1970-01-01T00:00:01.000Z',
    });
  });
});
