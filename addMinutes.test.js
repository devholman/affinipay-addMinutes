const {
  addMinutes,
  getRemainingMinutes,
  getMinutesToHours
} = require('./addMinutes');

describe('addMinutues Function ', () => {
  test('adds 200 minutes to equal 12:33 PM', () => {
    expect(addMinutes('9:13 AM', 200)).toBe('12:33 PM');
  });
  test('should not break if no minutes are passed', () => {
    expect(addMinutes('9:13 AM')).toBe('9:13 AM');
  });
  test('should change to PM at 12', () => {
    expect(addMinutes('9:00 AM', 180)).toBe('12:00 PM');
  });
  test('should not break if 0 is passed in', () => {
    expect(addMinutes('0:30 AM', 60)).toBe('1:30 AM');
  });
  test('should calculate correctly if < 10 minutes is added', () => {
    expect(addMinutes('9:59 AM', 5)).toBe('10:04 AM');
  });
});

describe('getRemainingMinutes Function', () => {
  test('should return remainder of minutes', () => {
    expect(getRemainingMinutes(200)).toBe(20);
  });
});

describe('getMinutesToHours Function', () => {
  test('should convert minutes to hours', () => {
    expect(getMinutesToHours(200)).toBe(3);
  });
});
