import reducer from '..'
import action from '../../actions/index'

// let a = action.Types.REQUEST_CARDS

describe('cards reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            {
                cards: [],
                viewer: {
                    totalCount: -1,
                    totalPage: -1,
                    currentPage: 0,
                    selectedCard: null,
                    error: false
                }
            }
        )
    })

    it('should handle REQUEST_CARDS and return same state if no cards need be fetched', () => {
        expect(
          reducer({
            cards: [],
            viewer: {
                totalCount: -1,
                totalPage: -1,
                currentPage: 0,
                selectedCard: null,
                error: false
            }
        },{
            type: 'REQUEST_CARDS',
            page: 0,
            totalCount: 0
          })
        ).toEqual({
            cards: [],
            viewer: {
                totalCount: -1,
                totalPage: -1,
                currentPage: 0,
                selectedCard: null,
                error: false
            }
        })
      })

      it('should handle REQUEST_CARDS and return appended cards', () => {
        expect(
          reducer({
            cards: [],
            viewer: {
                totalCount: -1,
                totalPage: -1,
                currentPage: 0,
                selectedCard: null,
                error: false
            }
        },{
            type: 'REQUEST_CARDS',
            page: 0,
            totalCount: 100
          })
        ).toEqual({
            cards: [
                { status: 'fetching'},
                { status: 'fetching'},
                { status: 'fetching'},
                { status: 'fetching'},
                { status: 'fetching'},
                { status: 'fetching'},
                { status: 'fetching'},
                { status: 'fetching'},
                { status: 'fetching'},
                { status: 'fetching'},
                { status: 'fetching'},
                { status: 'fetching'},
                { status: 'fetching'},
                { status: 'fetching'},
                { status: 'fetching'},
                { status: 'fetching'},
                { status: 'fetching'},
                { status: 'fetching'},
                { status: 'fetching'},
                { status: 'fetching'},
                { status: 'fetching'},
                { status: 'fetching'},
                { status: 'fetching'},
                { status: 'fetching'},
                { status: 'fetching'},
                { status: 'fetching'},
                { status: 'fetching'},
                { status: 'fetching'},
                { status: 'fetching'},
                { status: 'fetching'},
                { status: 'fetching'},
                { status: 'fetching'},
                { status: 'fetching'},
                { status: 'fetching'},
                { status: 'fetching'},
                { status: 'fetching'},
                { status: 'fetching'},
                { status: 'fetching'},
                { status: 'fetching'},
                { status: 'fetching'},
                { status: 'fetching'},
                { status: 'fetching'},
                { status: 'fetching'},
                { status: 'fetching'},
                { status: 'fetching'},
                { status: 'fetching'},
                { status: 'fetching'},
                { status: 'fetching'}
              ],
            viewer: {
                totalCount: -1,
                totalPage: -1,
                currentPage: 0,
                selectedCard: null,
                error: false
            }
        })
      })

      it('should handle REQUEST_CARDS_SUCCESS', () => {
        expect(reducer({
            cards: [],
            viewer: {
                totalCount: -1,
                totalPage: -1,
                currentPage: 0,
                selectedCard: null,
                error: false
            }
        },{
            type: 'REQUEST_CARDS_SUCCESS',
            page: 0,
            cards: [{ id: '1' }, { id: '2' }]
          })).toEqual(
            {
                cards: [{ id: '1' }, { id: '2' }],
                viewer: {
                    totalCount: -1,
                    totalPage: -1,
                    currentPage: 0,
                    selectedCard: null,
                    error: false
                }
            }
        )
    })
})