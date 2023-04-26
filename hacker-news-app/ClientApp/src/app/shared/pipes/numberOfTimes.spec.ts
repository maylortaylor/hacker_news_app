import { NumberOfTimesPipe } from "./numberOfTimes";


describe('NumberOfTimesPipe', () => {
    let pipe: NumberOfTimesPipe;

    beforeEach(() => {
        pipe = new NumberOfTimesPipe();
    });

    it('should return array size of 0', () => {
      let testNumber = 0;
      expect(pipe.transform(testNumber)).toEqual(Array.from({length: testNumber}, (v,i) => i));
    });

    it('should return array size of 5', () => {
      let testNumber = 5;
      expect(pipe.transform(testNumber)).toEqual(Array.from({length: testNumber}, (v,i) => i));
    });

    it('should return array size of 10', () => {
      let testNumber = 10;
      expect(pipe.transform(testNumber)).toEqual(Array.from({length: testNumber}, (v,i) => i));
    });
});
