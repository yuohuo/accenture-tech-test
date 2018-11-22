import { mapStateToProps, mapDispatchToProps } from '../PaginatorContainer'

describe('PaginatorContainer', () => {
    it('should show correct state value', () => {
        const initialState = {
            cards: [],
            viewer: {
              totalCount: -1,
              totalPage: 100,
              currentPage: 10,
              selectedCard: 1,
              error: false
          },
        };
        expect(mapStateToProps(initialState).viewer.totalPage).toEqual(100);
    });

    it('should dispatch correct action', () => {
        const dispatch = jest.fn();

        mapDispatchToProps(dispatch).changePage();
        expect(dispatch).toHaveBeenCalledTimes(1);
    });
});