#! /usr/bin/env node

import { description, runEven } from '../games/even.js'
import runGame from '../src/index.js'

runGame(description, runEven)
