import { mapStateToProps, mapDispatchToProps } from '../CardScreenContainer'

describe('CardScreenContainer', () => {
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
        expect(mapStateToProps(initialState).totalPage).toEqual(100);
    });

    it('should dispatch correct action', () => {
        const dispatch = jest.fn();

        mapDispatchToProps(dispatch).toggleCard();
        expect(dispatch.mock.calls[0][0]).toEqual({ type: 'TOGGLE_CARD'});

        mapDispatchToProps(dispatch).changePage();
        expect(dispatch).toHaveBeenCalledTimes(2);
    });
});