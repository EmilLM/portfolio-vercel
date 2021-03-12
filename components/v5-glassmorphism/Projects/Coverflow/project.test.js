import React from 'react'
import { render, act, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Project from './Project';

describe('<Project/>', ()=>{
    let expectedProps, wrapper, handleClick ;

    beforeEach( () => {
        expectedProps = {
            title: 'Project',
            stack: 'React-Scss-Nextjs',
            link: 'abc',
            sourceLink: 'github.com',
            description: 'abcd'
        }
        component = render(<Project {...expectedProps}/>);
        handleClick = jest.fn()

    })
    it('renders props: title, stack, description, links', ()=>{
        const {getByText} = component;

        const title = getByText(expectedProps.title)
        const stack = getByText(expectedProps.stack)
        const description= getByText(expectedProps.description)
        const demo = getByText('Demo')
        const source = getByText('Source')

        expect(title).toBeVisible();
        expect(stack).toBeVisible();
        expect(description).toBeVisible();
        expect(demo).toBeVisible();
        expect(source).toBeVisible();
    });

    it('change class on click', async ()=>{
        const {getByTestId} = component;
        const button = getByTestId('showInfo_test')
        expect(button).toHaveClass('show')

        await act(async () => {
            fireEvent.click(button)
        })
      
        // expect(handleClick).toHaveBeenCalledTimes(1)
        expect(button).toHaveClass('close')

        

    })
})

