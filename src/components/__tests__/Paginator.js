import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import Paginator from '../../components/Paginator'

Enzyme.configure({ adapter: new Adapter() })

function setup() {
    const props = {
        viewer: {
            totalCount: -1,
            totalPage: 100,
            currentPage: 10,
            selectedCard: null,
            error: false
        },
        changePage: jest.fn()
    }
    const enzymeWrapper = mount(<Paginator {...props} />)
    return {
        props,
        enzymeWrapper
    }
}

describe('components', () => {
    describe('Paginator', () => {

        const { enzymeWrapper } = setup()

        it('allows us to set props', () => {
            expect(enzymeWrapper.props().viewer.totalCount).toBe(-1);
        })
        it('should render page indicator and buttons correctly', () => {
            expect(enzymeWrapper.find('span').at(2).text()).toBe('Page 11 of 100')
            expect(enzymeWrapper.exists('button')).toEqual(true);
            expect(enzymeWrapper.find('button')).toHaveLength(2);
        })
        it('should call changePage to previous page when click back button', () => {
            enzymeWrapper.find('button').at(0).simulate('click');
            expect(enzymeWrapper.props().changePage).toHaveBeenCalledWith(9);
          });
        it('should call changePage to next page when click next button', () => {
            enzymeWrapper.find('button').at(1).simulate('click');
            expect(enzymeWrapper.props().changePage).toHaveBeenCalledWith(11);
          });
    })
})
