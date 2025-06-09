#! /usr/bin/env node

import { description, runGcd } from '../games/calc.js'
import runGame from '../src/index.js'

runGame(description, runGcd)