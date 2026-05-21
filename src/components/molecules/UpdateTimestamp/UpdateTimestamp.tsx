export interface UpdateTimestampProps {
  updatedAt: string;
}

const formatter = new Intl.DateTimeFormat('en-GB', {
  weekday: 'short',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
});

const UpdateTimestamp = ({ updatedAt }: UpdateTimestampProps) => {
  const formatted = formatter.format(new Date(updatedAt));
  return (
    <div className='mt-4 flex justify-end flex-wrap'>
      <strong>Last update:</strong>
      &nbsp;{formatted}&nbsp;(CEST)
    </div>
  );
};

export default UpdateTimestamp;
