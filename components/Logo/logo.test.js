import React from 'react'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom'
import Logo from './Logo'


describe('Logo', ()=>{
    it('fully renders', ()=>{
        expect(render(<Logo/>)).toMatchSnapshot()
    })
    it('to receive class prop', ()=>{
         const {getByTestId} = render(<Logo clsName="light-active"/>)
         expect(getByTestId("logo_test")).toHaveClass('light-active')
    })
})
