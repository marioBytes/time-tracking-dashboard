import { useStore } from '@nanostores/preact';
import { selectedTimeframe } from '../stores/timeframeStore';

export default function Tabs({ headings }) {
  const $selectedTimeframe = useStore(selectedTimeframe);
  const updateTimeframe = (timeframe) => {
    selectedTimeframe.set(timeframe);
  };

  return (
    <div>
      <div class="tabs">
        <ul class="tabs-header">
          {headings.map((heading) => {
            return (
              <li
                onClick={() => updateTimeframe(heading)}
                className={$selectedTimeframe === heading ? 'active-tab' : ''}
              >
                {heading}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
