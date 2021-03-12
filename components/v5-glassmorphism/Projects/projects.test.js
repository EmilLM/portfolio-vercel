import React from 'react'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom'
import Projects from './Projects';

it('renders Projects', ()=>{
    expect(render(<Projects/>)).toMatchSnapshot();
})