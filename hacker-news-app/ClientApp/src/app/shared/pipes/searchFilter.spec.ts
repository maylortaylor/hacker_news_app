import { SearchFilterPipe } from "./searchFilter";


describe('SearchFilterPipe', () => {
    let pipe: SearchFilterPipe;
    const itemsToSearch = [
      {id: 123, title: 'best thing 1', time: 1223584275, by: 'arnold'},
      {id: 234, title: 'neato item 2', time: 1346254915, by: 'hank'},
      {id: 345, title: 'awesome sauce 3', time: 1694871414, by: 'jerold'},
      {id: 456, title: 'coolest place 4', time: 1504750987, by: 'fred'},
      {id: 567, title: 'coolest place 5', time: 1504743987, by: 'fred'},
    ]

    beforeEach(() => {
        pipe = new SearchFilterPipe();
    });

    it('should return empty array if no items given', () => {
      const items = null;
      const filtered = pipe.transform(items, 'beth');

      expect(filtered.length).toBe(0);
      expect(filtered).toEqual([]);
    });

    it('should return items if no value is given', () => {
      const filtered = pipe.transform(itemsToSearch, null);

      expect(filtered).toEqual(itemsToSearch);
    });

    it('should return 1 item', () => {
      const searchText = 'coolest place 5';
      const filtered = pipe.transform(itemsToSearch, searchText);

      expect(filtered[0]).toEqual(itemsToSearch[4]);
    });

    it('should return 2 items', () => {
      const searchText = 'coolest place';
      const filtered = pipe.transform(itemsToSearch, searchText);

      expect(filtered).toEqual(new Array(itemsToSearch[3], itemsToSearch[4]));
    });
});
