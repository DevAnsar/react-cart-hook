import * as React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import { Counter } from '../src'

describe('Counter render', () => {
  it('renders without crashing', () => {
    render(<Counter />)
  })
})
