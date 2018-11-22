import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import CardScreen from '../../components/CardScreen'

Enzyme.configure({ adapter: new Adapter() })

function setup() {
    let props = {
        cards: [{
            coreData: {
                id: "471d4732a9fe198100affbf655e59172",
                number: "INC0000040",
                createdDate: "2017-07-27 03:43:54",
                lastUpdateDate: "2018-03-04 20:47:06",
                type: "INCIDENT",
                state: "On Hold",
                shortDescription: "JavaScript error on hiring page of corporate website",
                application: "",
                assignee: "ITIL User"
            }
        }],
        totalPage: 100,
        currentPage: 0,
        toggleCard: jest.fn(),
        changePage: jest.fn()
    }
    const enzymeWrapper = mount(<CardScreen {...props} />)
    return {
        props,
        enzymeWrapper
    }
}

describe('components ', () => {
    describe('Component CardScreen', () => {

        const { enzymeWrapper } = setup()

        it('allows us to set props', () => {
            expect(enzymeWrapper.props().cards[0].coreData.number).toBe('INC0000040');
        })
        it('should render page correctly', () => {
            expect(enzymeWrapper.exists('p')).toEqual(true);
        })
    })
})

