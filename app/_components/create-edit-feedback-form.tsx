import { FeatureType } from '../types/feature';
import { RoadmapType } from '../types/road-map';

import Button from '@/app/_components/button';

export interface CreateEditFeedbackFormProps {
  title?: string;
  category?: FeatureType;
  roadMapStatus?: RoadmapType;
  detail?: string;
  isEditingForm: boolean;
}

const CreateEditFeedbackForm: React.FC<CreateEditFeedbackFormProps> = ({
  title,
  category,
  roadMapStatus,
  detail,
  isEditingForm
}) => {
  return (
    <div className='flex w-full flex-col'>
      <div>
        <form>
          <h1 className='mb-6 text-lg font-bold text-night-sky-blue'>
            {isEditingForm ? `Editing ${title}` : 'Create New Feedback'}
          </h1>
          <div>
            <label htmlFor='title' className='text-sm font-bold text-night-sky-blue'>
              Feedback Title
            </label>
            <div id='title-description' className='text-sm font-normal text-grayish-blue'>
              Add a short, descriptive headline
            </div>
            <textarea
              id='title'
              name='title'
              value=''
              aria-describedby='title-description'
              className='light-grey rounded-md bg-light-grey px-4 py-6 text-sm '
            />
            {/* <div style="width: 100%; height: 100%; background: #F7F8FD; border-radius: 5px"></div> */}
          </div>
          <div>
            <label htmlFor='title' className='text-sm font-bold text-night-sky-blue'>
              Category
            </label>
            <div id='title-description' className='text-sm font-normal text-grayish-blue'>
              Choose a category for your feedback
            </div>
          </div>

          <div>
            <label htmlFor='detail' className='text-sm font-bold text-night-sky-blue'>
              Feedback Detail
            </label>
            <div id='detail-description' className='text-sm font-normal text-grayish-blue'>
              Include any specific comments on what should be improved, added, etc.
            </div>
            <textarea id='detail' name='detail' value='' aria-describedby='detail-description' />
          </div>

          <div>
            {isEditingForm ? (
              <>
                <Button
                  variant={'primary'}
                  onClick={function (): void {
                    throw new Error('Function not implemented.');
                  }}
                >
                  Save Changes
                </Button>
                <Button
                  variant={'info'}
                  onClick={function (): void {
                    throw new Error('Function not implemented.');
                  }}
                >
                  Cancel
                </Button>
                <Button
                  variant={'info'}
                  onClick={function (): void {
                    throw new Error('Function not implemented.');
                  }}
                >
                  Delete
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant={'primary'}
                  onClick={function (): void {
                    throw new Error('Function not implemented.');
                  }}
                >
                  Add Feedback
                </Button>

                <Button
                  variant={'info'}
                  onClick={function (): void {
                    throw new Error('Function not implemented.');
                  }}
                >
                  Cancel
                </Button>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
export default CreateEditFeedbackForm;
