import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import Card from '../../components/Card'

Enzyme.configure({ adapter: new Adapter() })

function setup() {
    let props = {
        cardData: {
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
        },
        toggleCard: jest.fn()
    }
    const enzymeWrapper = mount(<Card {...props} />)
    return {
        props,
        enzymeWrapper
    }
}

describe('components 2', () => {
    describe('Component Card', () => {

        const { enzymeWrapper } = setup()

        it('allows us to set props', () => {
            expect(enzymeWrapper.props().cardData.coreData.number).toBe('INC0000040');
        })
        it('should render page correctly', () => {
            expect(enzymeWrapper.find('p').at(0).text()).toBe('On Hold');
            expect(enzymeWrapper.exists('button')).toEqual(true);
            expect(enzymeWrapper.find('button')).toHaveLength(1);
        })
        it('should call toggleCard when click card', () => {
            enzymeWrapper.find('button').at(0).simulate('click');
            expect(enzymeWrapper.props().toggleCard).toHaveBeenCalledWith(enzymeWrapper.props().cardData);
        });
        it('should not render loading indicator', () => {
            // enzymeWrapper.props().cardData.coreData = null
            expect(enzymeWrapper.exists('circular')).toEqual(false);
        });
    })
})

