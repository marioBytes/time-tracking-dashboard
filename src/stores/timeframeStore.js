import { atom } from 'nanostores';
import data from '../data.json' assert { type: 'json' };

const selectedTimeframe = atom('Daily');
const timeframeData = atom(data);

export { timeframeData, selectedTimeframe };
