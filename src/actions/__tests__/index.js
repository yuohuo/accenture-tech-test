import * as actions from '../index';

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const expectedAction = {
      type: actions.Types.REQUEST_CARDS,
      page: 1,
      totalCount: 100,
    }
    expect(actions.requestCards(1, 100)).toEqual(expectedAction)
  })
});

