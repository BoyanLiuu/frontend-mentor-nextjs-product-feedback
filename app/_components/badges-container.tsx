import { FEATURES_TYPE } from '../constants/feature';

import Badge from './badge';

const BadgesContainer = () => {
  return (
    <div className='rounded-primary flex h-[12rem] w-[14.4rem] flex-wrap  gap-x-2 gap-y-3.5 bg-white p-6 tablet:h-[11.2rem] tablet:w-[14rem]'>
      {FEATURES_TYPE.map((feature) => (
        <Badge text={feature} key={feature} />
      ))}
    </div>
  );
};

export default BadgesContainer;
