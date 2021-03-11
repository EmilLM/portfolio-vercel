import React from 'react'
import Logo from './Logo'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom'


describe('Logo', ()=>{
    it('fully renders', ()=>{
        expect(render(<Logo/>)).toMatchSnapshot()
    })
    it('to receive class prop', ()=>{
         const {getByTestId} = render(<Logo clsName="light-active"/>)
         expect(getByTestId("logo_test")).toHaveClass('light-active')
    })
})
