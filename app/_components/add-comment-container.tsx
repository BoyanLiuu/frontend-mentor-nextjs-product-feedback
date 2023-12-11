import Button from './button';

export interface AddCommentProps {
  onAddComment: () => void;
}

const AddCommentContainer: React.FC<AddCommentProps> = ({ onAddComment }) => {
  return (
    <div className='flex flex-col bg-white p-6'>
      <h2 className='mb-6 text-lg font-bold text-night-sky-blue'>Add Comment</h2>
      <form>
        <div className='mb-6'>
          <label htmlFor='comment' className='sr-only'>
            Your comment
          </label>
          <textarea
            id='comment'
            rows={4}
            className='light-grey w-full resize-none rounded-md border border-gray-300 bg-light-grey px-4
            py-3 text-sm outline-none focus:border-blue-500 focus:ring-blue-500'
            placeholder='Type your comment here'
            required
          ></textarea>
        </div>
        <div className='flex items-center justify-between'>
          <span className='text-sm text-grayish-blue'>250 Characters left</span>
          <Button variant='primary' onClick={onAddComment} className='h-fit'>
            Post Comment
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddCommentContainer;
