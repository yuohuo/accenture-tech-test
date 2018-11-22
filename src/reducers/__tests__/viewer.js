import reducer from '..'
import action from '../../actions/index'

// let a = action.Types.REQUEST_CARDS

describe('viewer reducer', () => {
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

    it('should handle SET_TOTAL_COUNT when totalCount = 0', () => {
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
            type: 'SET_TOTAL_COUNT',
            totalCount: 0
          })).toEqual(
            {
                cards: [],
                viewer: {
                    totalCount: 0,
                    totalPage: 0,
                    currentPage: 0,
                    selectedCard: null,
                    error: false
                }
            }
        )
    })

    it('should handle SET_TOTAL_COUNT when totalCount != 0', () => {
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
            type: 'SET_TOTAL_COUNT',
            totalCount: 100
          })).toEqual(
            {
                cards: [],
                viewer: {
                    totalCount: 100,
                    totalPage: 8,
                    currentPage: 0,
                    selectedCard: null,
                    error: false
                }
            }
        )
    })

    it('should handle CHANGE_PAGE', () => {
        expect(reducer({
            cards: [],
            viewer: {
                totalCount: 100,
                totalPage: 8,
                currentPage: 0,
                selectedCard: null,
                error: false
            }
        },{
            type: 'CHANGE_PAGE',
            page: 4
          })).toEqual(
            {
                cards: [],
                viewer: {
                    totalCount: 100,
                    totalPage: 8,
                    currentPage: 4,
                    selectedCard: null,
                    error: false
                }
            }
        )
    })

    it('should handle TOGGLE_CARD', () => {
        expect(reducer({
            cards: [],
            viewer: {
                totalCount: 100,
                totalPage: 8,
                currentPage: 4,
                selectedCard: null,
                error: false
            }
        },{
            type: 'TOGGLE_CARD',
            card: 10
          })).toEqual(
            {
                cards: [],
                viewer: {
                    totalCount: 100,
                    totalPage: 8,
                    currentPage: 4,
                    selectedCard: 10,
                    error: false
                }
            }
        )
    })

    it('should handle REQUEST_CARDS_FAILURE', () => {
        expect(reducer({
            cards: [],
            viewer: {
                totalCount: 100,
                totalPage: 8,
                currentPage: 4,
                selectedCard: null,
                error: false
            }
        },{
            type: 'REQUEST_CARDS_FAILURE',
          })).toEqual(
            {
                cards: [],
                viewer: {
                    totalCount: 100,
                    totalPage: 8,
                    currentPage: 4,
                    selectedCard: null,
                    error: true
                }
            }
        )
    })

    it('should handle REQUEST_STATUS_RESET', () => {
        expect(reducer({
            cards: [],
            viewer: {
                totalCount: 100,
                totalPage: 8,
                currentPage: 4,
                selectedCard: null,
                error: true
            }
        },{
            type: 'REQUEST_STATUS_RESET',
          })).toEqual(
            {
                cards: [],
                viewer: {
                    totalCount: 100,
                    totalPage: 8,
                    currentPage: 4,
                    selectedCard: null,
                    error: false
                }
            }
        )
    })
})