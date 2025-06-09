#! /usr/bin/env node

import { description, runCalc } from '../games/calc.js'
import runGame from '../src/index.js'

runGame(description, runCalc)
