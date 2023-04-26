import { DateFromUnixPipe } from "./dateFromUnix";


describe('DateFromUnixPipe', () => {
    let pipe: DateFromUnixPipe;

    beforeEach(() => {
        pipe = new DateFromUnixPipe();
    });

    it('should return date in LocaleDateString format - todays date', () => {
      const unixTime = Math.floor(new Date().getTime() / 1000);
      expect(pipe.transform(unixTime)).toBe(new Date().toLocaleDateString());
    });

    it('should return date in LocaleDateString format - 03-25-2015', () => {
      const testDate = "03-25-2015";
      const unixTime = Math.floor(new Date(testDate).getTime() / 1000);
      expect(pipe.transform(unixTime)).toBe(new Date(testDate).toLocaleDateString());
    });

    it('should return date in LocaleDateString format - 01-12-1999', () => {
      const testDate = "01-12-1999";
      const unixTime = Math.floor(new Date(testDate).getTime() / 1000);
      expect(pipe.transform(unixTime)).toBe(new Date(testDate).toLocaleDateString());
    });

    it('should return date in LocaleDateString format - March 1, 2022', () => {
      const testDate = "March 1, 2022";
      const unixTime = Math.floor(new Date(testDate).getTime() / 1000);
      expect(pipe.transform(unixTime)).toBe(new Date(testDate).toLocaleDateString());
    });

    it('should return date in LocaleDateString format - bad date time', () => {
      const testDate = "jd83bf8923bw01b";
      const unixTime = Math.floor(new Date(testDate).getTime() / 1000);
      expect(pipe.transform(unixTime)).toBe(null);
    });
});
