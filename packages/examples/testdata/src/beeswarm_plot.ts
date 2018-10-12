/*!
 * Copyright (c) Microsoft. All rights reserved.
 * Licensed under the MIT license. See LICENSE file in the project.
 */

// Bar Chart Example, captured from https://vega.github.io/vega/examples/bar-chart/

// tslint:disable no-var-requires
declare var require: any
import { parseScene } from '@chart-parts/scenegraph'
const data = require('../resources/beeswarm_plot.json')

export const scenegraph = parseScene(data)
export const title = 'Beeswarm Plot'
export const dimensions = {
	height: 400,
	width: 700,
	origin: [30, 19] as [number, number],
}
