import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import CardGrid from '../../components/CardGrid'

Enzyme.configure({ adapter: new Adapter() })

function setup() {
    const props = {
        cards: [{ id: '1' }, { id: '2' }],
        page: 1,
        offset: 1,
        toggleCard: jest.fn()
    }
    const enzymeWrapper = mount(<CardGrid {...props} />)
    return {
        props,
        enzymeWrapper
    }
}

describe('components', () => {
    describe('Paginator', () => {

        const { enzymeWrapper } = setup()

        it('allows us to set props', () => {
            expect(enzymeWrapper.props().page).toBe(1);
        })
        it('should render page indicator and buttons correctly', () => {
            expect(enzymeWrapper.exists('div')).toEqual(true);
        })
    })
})
